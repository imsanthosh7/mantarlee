import { farmers } from './farmers.js';

// map section 

//  Initialize map
const map = L.map('map').setView([13.1088, 77.6521], 12);

map.removeControl(map.zoomControl);


L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 16
}).addTo(map);



// Add farmer markers
farmers.forEach(farmer => {
  const blinkingIcon = L.divIcon({
    className: '',
    html: `<div class="blinking-dot"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });

  const marker = L.marker([farmer.lat, farmer.lng], { icon: blinkingIcon }).addTo(map);

  marker.bindTooltip(`
    <div class="custom-popup">
      <img src="${farmer.image}" alt="${farmer.name}">
      <div class="popup-text">
        <strong>${farmer.name}</strong>
        ${farmer.info}
      </div>
    </div>
  `, {
    direction: 'top',
    offset: [0, -10],
    sticky: true,
    opacity: 1,
    className: ''
  });
});
