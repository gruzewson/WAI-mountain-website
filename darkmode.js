function darkmode() {
	const SetTheme = document.body
	SetTheme.classList.toggle('dark')

	let theme
	if (SetTheme.classList.contains('dark')) 
	{
		console.log('dark')
		theme = 'dark'
	}
	
	localStorage.setItem('THEME', theme)
}

 if(localStorage.getItem('THEME')===undefined){
	document.body.classList = 'bright'
 }
 else{
	document.body.classList = localStorage.getItem('THEME')
 }
