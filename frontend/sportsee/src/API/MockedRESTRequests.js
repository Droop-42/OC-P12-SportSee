
export async function getUserMainData (userId) {
  const response = await fetch('http://localhost:3000/mock/user/'+userId+'.json')
  return response.json()
}
export async function getUserActivity (userId) {
  const response = await fetch('http://localhost:3000/mock/user/'+userId+'/activity.json')
  return response.json()
}
export async function getUserAverageSession (userId) {
  const response = await fetch('http://localhost:3000/mock/user/'+userId+'/average-sessions.json')
  return response.json()
}
export async function getUserPerformance (userId) {
  const response = await fetch('http://localhost:3000/mock/user/'+userId+'/performance.json')
  return response.json()
}

