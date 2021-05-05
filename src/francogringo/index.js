import './leaflet'
import './styles/main.scss'

let map1 = document.querySelector('#map1');

// Menu Nav
$(document).ready(function() {
    var $toggleButton = $('.toggle-button'),
        $menuWrap = $('.menu-wrap');

    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });
});

if (innerHeight < 600){
    map1.classList.add('new_height');
} else {
    map1.classList.remove('new_height');
}