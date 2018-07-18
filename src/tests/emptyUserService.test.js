import { MockAuditLog } from "./mockAuditLog";

describe("empty user service", function() {
  var auditLog: MockAuditLog = null;
  const logType = '22';
  const logSubType = '33';
  const logData = '44';

  beforeEach(function() {
    auditLog = new MockAuditLog();

    auditLog.log(logType, logSubType, logData);
  });

  it("should register single user", function() {
    expect(auditLog.log).toHaveBeenCalled();
    expect(auditLog.log).toHaveBeenCalledWith(logType, logSubType, logData);
  });


});