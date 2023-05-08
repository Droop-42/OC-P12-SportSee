/**
 * format the user main data got from API
 * @constructor
 * @param {object} userMainData - The API main data of the user.
 * @returns {object} - The formated data
 */

export class UserMainDataModel {
    constructor(userData) {
        this._id = userData.data.id
        this._firstName = userData.data.userInfos.firstName
        this._lastName = userData.data.userInfos.lastName
        this._age = userData.data.userInfos.age
        this._calorieCount = userData.data.keyData.calorieCount
        this._proteinCount = userData.data.keyData.proteinCount
        this._carbohydrateCount = userData.data.keyData.carbohydrateCount
        this._lipidCount = userData.data.keyData.lipidCount
        if (userData.data.score){this._score=userData.data.score}
        else if (userData.data.todayScore){this._score=userData.data.todayScore}
        this._keyData = userData.data.keyData
        this._userInfos = userData.data.userInfos
    }
    get id() {
        return this._id
    }
    get firstName() {
        return this._firstName
    }
    get lastName() {
        return this._lastName
    }
    get age() {
        return this._age
    }
    get score() {
        return this._score
    }
    get calorieCount() {
        return this._calorieCount
    }
    get proteinCount() {
        return this._proteinCount
    }
    get carbohydrateCount() {
        return this._carbohydrateCount
    }
    get lipidCount() {
        return this._lipidCount
    }
    get keyData() {
        return this._keyData
    }
    get userInfos() {
        return this._userInfos
    }
}

