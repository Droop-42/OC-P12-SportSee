/**
 * format the user performance data got from API
 * @constructor
 * @param {object} userPerfModel - The API performance data of the user.
 * @returns {object} - The formated data
 */

export class UserPerfModel {
    constructor(userPerf) {
        this._userId = userPerf.data.userId
        this._kind = userPerf.data.kind
        this._data= userPerf.data.data
        this._datas= userPerf.data
    }
    get userId() {
        return this._userId
    }
    get kind() {
        return this._kind
    }
    get datas() {
        return this._datas
    }
    get data() {
        return this._data
    }
}

