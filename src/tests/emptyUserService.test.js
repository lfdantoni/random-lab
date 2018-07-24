import { MockAuditLog } from "./mockAuditLog";
import { UserService } from "../userService";
import { FakeUserStore } from "./fakeUserStore";
import { StubTimeSource } from "./StubTimeSource";
import { SimpleUserService } from "../simpleUserService";

/**
 * Tests of https://www.udemy.com/learn-test-driven-development-in-java/learn/v4/t/lecture/153550?start=0 practice
 */
describe("empty user service", function() {
  var auditLog: MockAuditLog;
  var userService: UserService;
	var fakeUserStore: FakeUserStore;
	var stubTimeSource: StubTimeSource;

  beforeEach(function() {
    auditLog = new MockAuditLog();
    fakeUserStore = new FakeUserStore();
    stubTimeSource = new StubTimeSource();
    userService = new SimpleUserService(auditLog, fakeUserStore, stubTimeSource);
  });

  it("should test default service without users", function() {
    expect(userService.users().length).toBe(0);
  });

  it("should not find a nonexistent user", function() {
    expect(userService.find("bob")).toBeNull();
  });

  it("should register a user", function() {		
		userService.register("bob");
		const users = userService.users();
		
    expect(users.length).toBe(1);
    expect(users[0].username).toBe("bob");
    expect(JSON.stringify(users[0].creationTime)).toBe(JSON.stringify(stubTimeSource.currentTime()));

    expect(auditLog.log).toHaveBeenCalledWith("user","register","bob");
  });
});