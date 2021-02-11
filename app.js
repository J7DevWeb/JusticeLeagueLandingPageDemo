// LANDING PAGE ANIMATION
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

var keys = [
  "Batman",
  "Superman",
  "Wonderwoman",
  "Flash",
  "Cyborg",
  "Aquaman"
];
var slider = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true,
  pagination: {
    el: ".heroes-links",
    clickable: true,
    renderBullet: function(index, className) {
      return '<div class="' + className + '">' + keys[index] + "</div>";
    }
  }
});

/* RAIN */
setInterval(rainFall, 7);

function rainFall() {
  const waterDrop = document.createElement('i');
  
	waterDrop.classList.add('fas');
	waterDrop.classList.add('fa-tint');
	waterDrop.style.left = Math.random() * window.innerWidth + 'px';
	waterDrop.style.animationDuration = Math.random() * 1 + 's';
	waterDrop.style.opacity = Math.random() + 0.4;
	waterDrop.style.fontSize = Math.random() * 4 +'px';
	
	document.body.appendChild(waterDrop);
	
	setTimeout(() => {
		waterDrop.remove();
	}, 3000)
};