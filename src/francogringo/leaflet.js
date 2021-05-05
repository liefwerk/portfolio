
// Construction de la variable pour créer la carte interactive
let mymap = L.map('map1').setView([-22.9088, -43.2082], 8);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibGlmZXdvcmsiLCJhIjoiY2p6OG1jNDkzMDRkeDNlbWk2YWIzZWJ3aCJ9.QvpddHMCRLFwso4ZkiMorQ',
}).addTo(mymap);

mymap.scrollWheelZoom.disable();

let myIcon = L.icon({
    iconUrl: 'marker-icon.28bcaf97.png',
    iconSize: [20, 30],
    iconAnchor: [0, 25],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

// Mise en place variables pour le cadre photo
let arrayData = [];
arrayData = data.data;
let cadreFull = document.createElement("div");
let hrefLink;
let newImg;
let containerPhoto = document.querySelector('#photo-container');
cadreFull.setAttribute("class", "cadre-full");
containerPhoto.appendChild(cadreFull);
let lat, long, loc, tmbUrl, lgUrl;

for (let element of arrayData) {
    hrefLink = document.createElement('a');
    hrefLink.href = element.images.standard_resolution.url;
    if (element.caption) {
        hrefLink.setAttribute('data-caption', element.caption.text);
    } else {
        hrefLink.setAttribute('data-caption', "");
    }
    cadreFull.appendChild(hrefLink);
    newImg = new Image(225, 225);
    newImg.src = hrefLink.href;
    newImg.className = "img-border";
    hrefLink.appendChild(newImg);
}

$('.cadre-full').slick({
    lazyLoad: 'ondemand',
    slidesToScroll: 1,
    mobileFirst: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToScroll: 1
            }
        }
    ]
});

$('.cadre-full').slickLightbox({
    caption: 'caption'
});

arrayData.forEach(function (element) {
    if (element.location != null) {
        lat = element.location.latitude;
        long = element.location.longitude;
        loc = element.location.name;

        tmbUrl = element.images.low_resolution.url;

        lgUrl = element.images.standard_resolution.url;
        let marker = L.marker([lat, long], { icon: myIcon }).addTo(mymap);

        if (innerWidth < 901) {

            let popupMobile = L.popup({
                keepInView: false,
                autoPan: true,
                autoPanPaddingTopLeft: L.point(80, 130),
                offset: L.point(13, 45),
                minWidth: 130,
                maxWidth: 130,
                autoPanPadding: L.point(20, 10),
                className: 'pop-white'
            }).setContent(`<a href="${lgUrl}" target="_blank"><img class="img-border" style="max-width: 100%; height: auto;" src="${tmbUrl}" /></a><p>${loc}</p>`);

            marker.bindPopup(popupMobile).openPopup();
        } else {
            let popup = L.popup({
                keepInView: false,
                autoPan: true,
                autoPanPaddingTopLeft: L.point(200, 200),
                offset: L.point(13, 50),
                minWidth: 200,
                maxWidth: 200,
                autoPanPadding: L.point(1, 1),
                className: 'pop-white'
            }).setContent(`<a href="${lgUrl}" target="_blank"><img class="img-border" style="max-width: 100%; height: auto;" src="${tmbUrl}" /></a><p>${loc}</p>`);

            marker.bindPopup(popup).openPopup();
        }
    }

});

$('.leaflet-popup-content').slickLightbox();

function getLastLocation() {
    for (let element of arrayData) {
        return element.location.name;
    }
}

// console.log(getLastLocation());


let text = document.createElement("p");
text.textContent = `Le dernier lieu où j'ai été aperçu est : ${getLastLocation()}.`

$('#dernier-lieu').append(text);

