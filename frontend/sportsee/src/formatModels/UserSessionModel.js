/**
 * format the user session data got from API
 * @constructor
 * @param {object} userSession - The API session data of the user.
 * @returns {object} - The formated data
 */

export class UserSessionModel {
    constructor(userSession) {
        this._userId = userSession.data.userId
        this._sessions = userSession.data.sessions
    }
    get userId() {
        return this._userId
    }
    get sessions() {
        return this._sessions
    }
}

