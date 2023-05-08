
/**
 * format the user activity data got from API
 * @constructor
 * @param {object} userActivity - The API activity data of the user.
 * @returns {object} - The formated data
 */

export class UserActivityModel {
    constructor(userActivity) {
        this._userId = userActivity.data.userId
        this._sessions = userActivity.data.sessions
    }
    get userId() {
        return this._userId
    }
    get sessions() {
        return this._sessions
    }
}

