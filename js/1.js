
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