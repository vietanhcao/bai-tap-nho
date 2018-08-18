
//fix top
let menu = document.querySelector('nav');

let trangthai = true;
window.addEventListener('scroll', cuon);

function cuon() {
	if(window.pageYOffset > 90 ){
		if(trangthai === true){
			trangthai = false;
			menu.classList.add('fixtop');
		}
	}else if (window.pageYOffset <= 90) {
		if(trangthai === false){
			trangthai = true;
			menu.classList.remove('fixtop');
		}
	}

}
let aosomi = document.querySelectorAll('.aosomi');


window.addEventListener('scroll', hienlen);

	function hienlen(){
		for(var i = 0; i < aosomi.length; i++){
	let vitris3 = aosomi[i].offsetTop;
	console.log(vitris3);
	if (window.pageYOffset > vitris3-500 ){
		aosomi[i].classList.add('dilen');
	}
}
}
