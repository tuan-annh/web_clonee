export const setAccessTokenToLS = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}

export const clearLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
}

export const getProfileFromLS = () => {
  const result = localStorage.getItem('profile')
  return result ? (JSON.parse(result) as { username: string; password: string; id: number }) : null
}

export const setProfileToLS = (profile: { username: string; password: string; id: number }) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
