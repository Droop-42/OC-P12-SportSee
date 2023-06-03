
/**
 * Get the user main data from API 
 * @param {number} userId - The user id.
 * @returns {Promise} - The main data
 */
export async function getUserMainData (userId) { 
    return fetch('http://localhost:3000/user/'+userId)
    .then((response) => {
      if(response.ok){
        return response.json()
      }
        throw new Error('Api is not available') 
      })
    .catch(error => {
      console.error('Error fetching data: ', error)
    })
  }
/**
 * Get the user activity data from API
 * @param {object} userId - The user id.
 * @returns {Promise} - The activity data
 */
export async function getUserActivity (userId) {
  return fetch('http://localhost:3000/user/'+userId+'/activity')
  .then((response) => {
    if(response.ok){
      return response.json()
    }
      throw new Error('Api is not available') 
    })
  .catch(error => {
    console.error('Error fetching data: ', error)
  })
}
/**
 * Get the user session data from API
 * @param {object} userId - The user id.
 * @returns {Promise} - The session data
 */
export async function getUserAverageSession (userId) {
  return fetch('http://localhost:3000/user/'+userId+'/average-sessions')
  .then((response) => {
    if(response.ok){
      return response.json()
    }
      throw new Error('Api is not available') 
    })
  .catch(error => {
    console.error('Error fetching data: ', error)
  })
}
/**
 * Get the user performance data from API
 * @param {object} userId - The user id.
 * @returns {Promise} - The performance data
 */
export async function getUserPerformance (userId) {
  return fetch('http://localhost:3000/user/'+userId+'/performance')
  .then((response) => {
    if(response.ok){
      return response.json()
    }
      throw new Error('Api is not available') 
    })
  .catch(error => {
    console.error('Error fetching data: ', error)
  })
}
