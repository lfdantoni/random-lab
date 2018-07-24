import { UserService } from "./userService";
import { User } from "./user";

export class SimpleUserService extends UserService {
  _auditLog: AuditLog;
  _userStore: UserStore;
  _timeSource: TimeSource;

  constructor(auditLog: AuditLog, userStore: UserStore, timeSource: TimeSource) {
    super();
    this._auditLog = auditLog;
    this._userStore = userStore;
    this._timeSource = timeSource;
  }

  users = () => { 
    return this._userStore.findAll();
  }

  register = (username) => { 
    if (this._hasUser(username)) {
      this._auditLog.log("user", "duplicateregister", username);
    } else {
      this._auditLog.log("user", "register", username);
      this._userStore.store(new User(username, this._timeSource.currentTime()));
    }
  }

  find = (username) => { 
    const allUsers = this._userStore.findAll();
    let user = null;
    let i = 0;

    while (!user && i < allUsers.length) {
      if (allUsers[i].username === username) {
        user = allUsers[i];
      }
      i++;
    }
    
    return user;
  }

  _hasUser = (username) => {
    const user = this.find(username);

    return user !== null;
  }

}