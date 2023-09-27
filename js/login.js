// Cheching of login/profile window
var login_window = document.getElementById('account__block');
if (login_window != null) {
	// pop up
	document.getElementById('login__icon').addEventListener('click', function(){
	document.getElementById('account__block').style.display = 'block'
	document.getElementById('login__icon').style.display = 'none'});

	document.getElementById('close__form').addEventListener('click', function(){
	document.getElementById('account__block').style.display = 'none'
	document.getElementById('login__icon').style.display = 'block'});
}
