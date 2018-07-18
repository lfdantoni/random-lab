import { AuditLog } from "../auditLog";

export class MockAuditLog extends AuditLog {

  constructor() {
    super();
    spyOn(this, 'log');
  }
}