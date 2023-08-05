const txt = document.querySelector('#txt')

if (!sessionStorage.getItem('timer')) {
	const loadedDate = new Date()
	sessionStorage.setItem('timer', loadedDate)
}
setInterval(() => {
	const actualDate = new Date()
	let seconds = (actualDate - Date.parse(sessionStorage.getItem('timer'))) / 1000
	let minutes = Math.floor(seconds / 59)
	seconds = Math.round(seconds % 59)
	minutes = checkTime(minutes)
	seconds = checkTime(seconds)
	txt.textContent = minutes + ' : ' + seconds
}, 1000)

function checkTime(i) {
	if (i < 10) {
		i = '0' + i
	}
	return i
}
