
/**
 * Get the user main data from API
 * @param {number} userId - The user id.
 * @returns {Promise} - The main data
 */
export async function getUserMainData (userId) {
  const response = await fetch('http://localhost:3000/user/'+userId)
  return response.json()
}
/**
 * Get the user activity data from API
 * @param {object} userId - The user id.
 * @returns {Promise} - The activity data
 */
export async function getUserActivity (userId) {
  const response = await fetch('http://localhost:3000/user/'+userId+'/activity')
  return response.json()
}
/**
 * Get the user session data from API
 * @param {object} userId - The user id.
 * @returns {Promise} - The session data
 */
export async function getUserAverageSession (userId) {
  const response = await fetch('http://localhost:3000/user/'+userId+'/average-sessions')
  return response.json()
}
/**
 * Get the user performance data from API
 * @param {object} userId - The user id.
 * @returns {Promise} - The performance data
 */
export async function getUserPerformance (userId) {
  const response = await fetch('http://localhost:3000/user/'+userId+'/performance')
  return response.json()
}

