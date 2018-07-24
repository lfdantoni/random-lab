import { MockAuditLog } from "./mockAuditLog";
import { UserService } from "../userService";
import { FakeUserStore } from "./fakeUserStore";
import { StubTimeSource } from "./StubTimeSource";
import { SimpleUserService } from "../simpleUserService";
import { User } from "../user";

/**
 * Tests of https://www.udemy.com/learn-test-driven-development-in-java/learn/v4/t/lecture/153550?start=0 practice
 */
describe("empty user service with single user", function() {
  var auditLog: MockAuditLog;
  var userService: UserService;
	var fakeUserStore: FakeUserStore;
	var stubTimeSource: StubTimeSource;

  beforeEach(function() {
    auditLog = new MockAuditLog();
    fakeUserStore = new FakeUserStore();
    stubTimeSource = new StubTimeSource();
    userService = new SimpleUserService(auditLog, fakeUserStore, stubTimeSource);

    userService.register("bob");
  });

  it("should test find user by name", function() {
    const user: User = userService.find("bob");
    expect(user).not.toBeNull();
    expect(user.username).toBe("bob");
  });

  it("should test register duplicate user", function() { 
    userService.register("bob");

    const users = userService.users();
    expect(users.length).toBe(1);
    expect(users[0].username).toBe("bob");
    expect(JSON.stringify(users[0].creationTime)).toBe(JSON.stringify(stubTimeSource.currentTime()));

    expect(auditLog.log).toHaveBeenCalledWith("user","duplicateregister","bob");
  });

  it("should test register second user", function() { 
    userService.register("alice");

    expect(userService.users().length).toBe(2);

    const user: User = userService.find("alice");
		
    expect(user.username).toBe("alice");
    expect(JSON.stringify(user.creationTime)).toBe(JSON.stringify(stubTimeSource.currentTime()));

    expect(auditLog.log).toHaveBeenCalledWith("user","register","alice");
  });
});