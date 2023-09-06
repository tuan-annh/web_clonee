// Function in hoa chữ cái đầu của một cụm từ
const capitalizeFirstLetter = (input: string) => {
  if (typeof input !== 'string' || input.length === 0) {
    return input
  }
  return input.charAt(0).toUpperCase() + input.slice(1)
}

// Function để chuyển các category có dấu cách thành dạng có %20 thay cho dấu cách như trên thanh url
const encodeSpaces = (input: string) => {
  if (typeof input !== 'string') {
    return input
  }

  return input.replace(/ /g, '%20')
}

// Function gọi ngày
const getTodayDate = () => {
  const timeZoneOffset = 7 // GMT+7
  const now = new Date()
  const utc = now.getTime() + now.getTimezoneOffset() * 60000 // Convert to UTC
  const gmtPlus7 = new Date(utc + 3600000 * timeZoneOffset) // Add 7 hours to get GMT+7

  const year = gmtPlus7.getFullYear()
  const month = String(gmtPlus7.getMonth() + 1).padStart(2, '0') // Month is 0-based
  const day = String(gmtPlus7.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export { capitalizeFirstLetter, encodeSpaces, getTodayDate }
