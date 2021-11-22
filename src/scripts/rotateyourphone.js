var rotate_shown = false;
document.body.innerHTML = '<div id="rf_rotate"></div>';
_rf_checkratio();
window.onresize = function(event) {
	_rf_checkratio();
};
window.addEventListener("orientationchange", function() {
    _rf_checkratio();
});
function _rf_checkratio(){
	let ratio = window.innerWidth/window.innerHeight;
	
    // if(window.innerWidth <= 1024 && !rotate_shown) {
    // 	rotate_shown = true;
    // 	_rf_rotate('show');
    // }
    // if(ratio > 1 && rotate_shown){
    // 	rotate_shown = false;
    // 	_rf_rotate('hide');
    // }
}
function _rf_rotate(e){
	if(e === 'show'){
		document.getElementById('rf_rotate').style.width = '100%';
		document.getElementById('rf_rotate').style.height = '100%';
		document.getElementById('rf_rotate').style.position = 'absolute';
		document.getElementById('rf_rotate').style.opacity = '1';
		document.getElementById('rf_rotate').style.backgroundColor = 'black';
		document.getElementById('rf_rotate').style.color = 'white';
		document.getElementById('rf_rotate').style.display = 'flex';
		
		document.getElementById('rf_rotate').innerHTML = 'Launch On Desktop';
	} else {
		document.getElementById('rf_rotate').style.removeProperty('width');
		document.getElementById('rf_rotate').style.removeProperty('height');
		document.getElementById('rf_rotate').style.removeProperty('position');
		document.getElementById('rf_rotate').style.removeProperty('opacity');
		document.getElementById('rf_rotate').style.removeProperty('backgroundColor');
		document.getElementById('rf_rotate').innerHTML = '';
	}
}