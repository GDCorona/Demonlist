/*theme buttons*/
const LightTheme = document.querySelector('#light');
const DarkTheme = document.querySelector('#dark');
const SakuraTheme = document.querySelector('#sakura');
LightTheme.addEventListener('click', () =>
{
	document.getElementsByTagName("body")[0].style.backgroundImage = "none";
	localStorage.setItem('background', -1);
	document.documentElement.style.setProperty('--cherryblossom', 'none');
	localStorage.setItem('cherryblossom', 'none');
	document.documentElement.style.setProperty('--titlecolor', 'aquamarine');
	localStorage.setItem('titlecolor', 'aquamarine');
    	document.documentElement.style.setProperty('--color1', 'aliceblue');
	localStorage.setItem('color1', 'aliceblue');
	document.documentElement.style.setProperty('--color2', 'black');
	localStorage.setItem('color2', 'black');
	document.documentElement.style.setProperty('--color3', 'skyblue');
	localStorage.setItem('color3', 'skyblue');
	document.documentElement.style.setProperty('--color4', 'rgb(70, 115, 133)');
	localStorage.setItem('color4', 'rgb(70, 115, 133)');
})
DarkTheme.addEventListener('click', () =>
{
	document.getElementsByTagName("body")[0].style.backgroundImage = "none";
	localStorage.setItem('background', -1);
	document.documentElement.style.setProperty('--cherryblossom', 'none');
	localStorage.setItem('cherryblossom', 'none');
	document.documentElement.style.setProperty('--titlecolor', 'aquamarine');
	localStorage.setItem('titlecolor', 'aquamarine');
    	document.documentElement.style.setProperty('--color1', 'black');
	localStorage.setItem('color1', 'black');
	document.documentElement.style.setProperty('--color2', 'aliceblue');
	localStorage.setItem('color2', 'aliceblue');
	document.documentElement.style.setProperty('--color3', 'skyblue');
	localStorage.setItem('color3', 'skyblue');
	document.documentElement.style.setProperty('--color4', 'rgb(70, 115, 133)');
	localStorage.setItem('color4', 'rgb(70, 115, 133)');
})
SakuraTheme.addEventListener('click', () =>
{
	document.getElementsByTagName("body")[0].style.backgroundImage = "none";
	localStorage.setItem('background', -1);
	document.documentElement.style.setProperty('--cherryblossom', 'block');
	localStorage.setItem('cherryblossom', 'block');
	document.documentElement.style.setProperty('--titlecolor', 'pink');
	localStorage.setItem('titlecolor', 'pink');
    	document.documentElement.style.setProperty('--color1', 'rgba(250, 206, 246, 0.829)');
	localStorage.setItem('color1', 'rgba(250, 206, 246, 0.829)');
	document.documentElement.style.setProperty('--color2', 'rgb(223, 14, 129)');
	localStorage.setItem('color2', 'rgb(223, 14, 129)');
	document.documentElement.style.setProperty('--color3', 'pink');
	localStorage.setItem('color3', 'pink');
	document.documentElement.style.setProperty('--color4', 'rgba(201, 129, 230, 0.3)');
	localStorage.setItem('color4', 'rgba(201, 129, 230, 0.3)');
})
/*change theme*/
var modalTheme = document.getElementById("changeTheme");
var ThemeBtn = document.getElementById("theme");
var spanTheme = document.getElementsByClassName("closeTheme")[0];
ThemeBtn.onclick = function(){modalTheme.style.display = "block";}
spanTheme.onclick = function(){modalTheme.style.display = "none";}

/*close when clicking outside the modal*/
window.onclick = function(event) {
	if (event.target == modalTheme) {modalTheme.style.display = "none";}
}
