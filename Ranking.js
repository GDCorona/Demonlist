/*theme buttons*/
const LightTheme = document.querySelector('#light');
const DarkTheme = document.querySelector('#dark');
const SakuraTheme = document.querySelector('#sakura');
LightTheme.addEventListener('click', () =>
{
	document.getElementsByTagName("body")[0].style.backgroundImage = "none";
	document.documentElement.style.setProperty('--cherryblossom', 'none');
	document.documentElement.style.setProperty('--titlecolor', 'aquamarine');
    	document.documentElement.style.setProperty('--color1', 'aliceblue');
	document.documentElement.style.setProperty('--color2', 'black');
	document.documentElement.style.setProperty('--color3', 'skyblue');
	document.documentElement.style.setProperty('--color4', 'rgb(70, 115, 133)');
})
DarkTheme.addEventListener('click', () =>
{
	document.getElementsByTagName("body")[0].style.backgroundImage = "none";
	document.documentElement.style.setProperty('--cherryblossom', 'none');
	document.documentElement.style.setProperty('--titlecolor', 'aquamarine');
    	document.documentElement.style.setProperty('--color1', 'black');
	document.documentElement.style.setProperty('--color2', 'aliceblue');
	document.documentElement.style.setProperty('--color3', 'skyblue');
	document.documentElement.style.setProperty('--color4', 'rgb(70, 115, 133)');
})
SakuraTheme.addEventListener('click', () =>
{
	document.getElementsByTagName("body")[0].style.backgroundImage = "none";
	document.documentElement.style.setProperty('--cherryblossom', 'block');
	document.documentElement.style.setProperty('--titlecolor', 'pink');
    	document.documentElement.style.setProperty('--color1', 'rgba(250, 206, 246, 0.829)');
	document.documentElement.style.setProperty('--color2', 'rgb(223, 14, 129)');
	document.documentElement.style.setProperty('--color3', 'pink');
	document.documentElement.style.setProperty('--color4', 'rgba(201, 129, 230, 0.3)');
})
/*change theme*/
var modalTheme = document.getElementById("changeTheme");
var ThemeBtn = document.getElementById("theme");
var spanTheme = document.getElementsByClassName("closeTheme")[0];
ThemeBtn.onclick = function(){modalTheme.style.display = "block";}
spanTheme.onclick = function(){modalTheme.style.display = "none";}
/*top1*/
var modal1 = document.getElementById("top1Info");
var btn1 = document.getElementById("t1");
var span1 = document.getElementsByClassName("close1")[0];
btn1.onclick = function(){modal1.style.display = "block";}
span1.onclick = function(){modal1.style.display = "none";}
/*top1*/
var modal2 = document.getElementById("top2Info");
var btn2 = document.getElementById("t2");
var span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function(){modal2.style.display = "block";}
span2.onclick = function(){modal2.style.display = "none";}
/*top3*/
var modal3 = document.getElementById("top3Info");
var btn3 = document.getElementById("t3");
var span3 = document.getElementsByClassName("close3")[0];
btn3.onclick = function(){modal3.style.display = "block";}
span3.onclick = function(){modal3.style.display = "none";}
/*top4*/
var modal4 = document.getElementById("top4Info");
var btn4 = document.getElementById("t4");
var span4 = document.getElementsByClassName("close4")[0];
btn4.onclick = function(){modal4.style.display = "block";}
span4.onclick = function(){modal4.style.display = "none";}
/*top5*/
var modal5 = document.getElementById("top5Info");
var btn5 = document.getElementById("t5");
var span5 = document.getElementsByClassName("close5")[0];
btn5.onclick = function(){modal5.style.display = "block";}
span5.onclick = function(){modal5.style.display = "none";}
/*top6*/
var modal6 = document.getElementById("top6Info");
var btn6 = document.getElementById("t6");
var span6 = document.getElementsByClassName("close6")[0];
btn6.onclick = function(){modal6.style.display = "block";}
span6.onclick = function(){modal6.style.display = "none";}
/*top7*/
var modal7 = document.getElementById("top7Info");
var btn7 = document.getElementById("t7");
var span7 = document.getElementsByClassName("close7")[0];
btn7.onclick = function(){modal7.style.display = "block";}
span7.onclick = function(){modal7.style.display = "none";}
/*top8*/
var modal8 = document.getElementById("top8Info");
var btn8 = document.getElementById("t8");
var span8 = document.getElementsByClassName("close8")[0];
btn8.onclick = function(){modal8.style.display = "block";}
span8.onclick = function(){modal8.style.display = "none";}
/*top9*/
var modal9 = document.getElementById("top9Info");
var btn9 = document.getElementById("t9");
var span9 = document.getElementsByClassName("close9")[0];
btn9.onclick = function(){modal9.style.display = "block";}
span9.onclick = function(){modal9.style.display = "none";}
/*top10*/
var modal10 = document.getElementById("top10Info");
var btn10 = document.getElementById("t10");
var span10 = document.getElementsByClassName("close10")[0];
btn10.onclick = function(){modal10.style.display = "block";}
span10.onclick = function(){modal10.style.display = "none";}
/*top11*/
var modal11 = document.getElementById("top11Info");
var btn11 = document.getElementById("t11");
var span11 = document.getElementsByClassName("close11")[0];
btn11.onclick = function(){modal11.style.display = "block";}
span11.onclick = function(){modal11.style.display = "none";}
/*top12*/
var modal12 = document.getElementById("top12Info");
var btn12 = document.getElementById("t12");
var span12 = document.getElementsByClassName("close12")[0];
btn12.onclick = function(){modal12.style.display = "block";}
span12.onclick = function(){modal12.style.display = "none";}
/*top13*/
var modal13 = document.getElementById("top13Info");
var btn13 = document.getElementById("t13");
var span13 = document.getElementsByClassName("close13")[0];
btn13.onclick = function(){modal13.style.display = "block";}
span13.onclick = function(){modal13.style.display = "none";}
/*top14*/
var modal14 = document.getElementById("top14Info");
var btn14 = document.getElementById("t14");
var span14 = document.getElementsByClassName("close14")[0];
btn14.onclick = function(){modal14.style.display = "block";}
span14.onclick = function(){modal14.style.display = "none";}
/*top15*/
var modal15 = document.getElementById("top15Info");
var btn15 = document.getElementById("t15");
var span15 = document.getElementsByClassName("close15")[0];
btn15.onclick = function(){modal15.style.display = "block";}
span15.onclick = function(){modal15.style.display = "none";}
/*top16*/
var modal16 = document.getElementById("top16Info");
var btn16 = document.getElementById("t16");
var span16 = document.getElementsByClassName("close16")[0];
btn16.onclick = function(){modal16.style.display = "block";}
span16.onclick = function(){modal16.style.display = "none";}
/*top17*/
var modal17 = document.getElementById("top17Info");
var btn17 = document.getElementById("t17");
var span17 = document.getElementsByClassName("close17")[0];
btn17.onclick = function(){modal17.style.display = "block";}
span17.onclick = function(){modal17.style.display = "none";}
/*top18*/
var modal18 = document.getElementById("top18Info");
var btn18 = document.getElementById("t18");
var span18 = document.getElementsByClassName("close18")[0];
btn18.onclick = function(){modal18.style.display = "block";}
span18.onclick = function(){modal18.style.display = "none";}
/*top19*/
var modal19 = document.getElementById("top19Info");
var btn19 = document.getElementById("t19");
var span19 = document.getElementsByClassName("close19")[0];
btn19.onclick = function(){modal19.style.display = "block";}
span19.onclick = function(){modal19.style.display = "none";}
/*top20*/
var modal20 = document.getElementById("top20Info");
var btn20 = document.getElementById("t20");
var span20 = document.getElementsByClassName("close20")[0];
btn20.onclick = function(){modal20.style.display = "block";}
span20.onclick = function(){modal20.style.display = "none";}

/*close when clicking outside the modal*/
window.onclick = function(event) {
	if (event.target == modalTheme) {modalTheme.style.display = "none";}
	else if (event.target == modal1) {modal1.style.display = "none";}
	else if (event.target == modal2) {modal2.style.display = "none";}
	else if (event.target == modal3) {modal3.style.display = "none";}
	else if (event.target == modal4) {modal4.style.display = "none";}
	else if (event.target == modal5) {modal5.style.display = "none";}
	else if (event.target == modal6) {modal6.style.display = "none";}
	else if (event.target == modal7) {modal7.style.display = "none";}
	else if (event.target == modal8) {modal8.style.display = "none";}
	else if (event.target == modal9) {modal9.style.display = "none";}
	else if (event.target == modal10) {modal10.style.display = "none";}
	else if (event.target == modal11) {modal11.style.display = "none";}
	else if (event.target == modal12) {modal12.style.display = "none";}
	else if (event.target == modal13) {modal13.style.display = "none";}
	else if (event.target == modal14) {modal14.style.display = "none";}
	else if (event.target == modal15) {modal15.style.display = "none";}
	else if (event.target == modal16) {modal16.style.display = "none";}
	else if (event.target == modal17) {modal17.style.display = "none";}
	else if (event.target == modal18) {modal18.style.display = "none";}
	else if (event.target == modal19) {modal19.style.display = "none";}
	else if (event.target == modal20) {modal20.style.display = "none";}
}
