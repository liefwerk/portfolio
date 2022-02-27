var SWU__DOMReady = function(callback) {
	document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback);
};

export default SWU__DOMReady(function() {
	const el = document.createElement('div')
	el.title = 'We stand with Ukraine'
	el.style.position = 'fixed'
	el.style.left = '-120px'
	el.style.bottom = '10px'
	el.style.width = '300px'
	el.style.height = '42px'
	el.style.transform = 'rotate(45deg)'
	el.style.background = 'linear-gradient(-180deg, #005BBB 50%, #FFD500 50%)'
	document.body.appendChild(el)
});