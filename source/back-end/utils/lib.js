function formatDate(date) {
  const departure_date = new Date(date).toDateString()
  const departure_time = new Date(date).toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
  })
  return `${departure_date} ${departure_time}`
}

module.exports = {
  formatDate,
}
