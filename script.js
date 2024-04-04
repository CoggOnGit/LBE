// Sélection des deux carrousels
const carousel1 = document.querySelector(".categ .carousel");
const carousel2 = document.querySelector(".derniere-min .carousel");

// Sélection des boutons de flèche pour chaque carrousel
const arrowBtns1 = document.querySelectorAll(".categ .arrow-wrapper button");
const arrowBtns2 = document.querySelectorAll(".derniere-min .arrow-wrapper button");

// Calcul de la largeur de la première carte dans chaque carrousel
const firstCardWidth1 = carousel1.querySelector(".categ-card").offsetWidth;
const firstCardWidth2 = carousel2.querySelector(".dm-card").offsetWidth;

// Nombre de cartes par vue pour chaque carrousel
const cardPerView1 = Math.round(carousel1.offsetWidth / firstCardWidth1);
const cardPerView2 = Math.round(carousel2.offsetWidth / firstCardWidth2);

// Appel initial pour définir l'opacité des flèches pour chaque carrousel
updateArrowOpacity(carousel1, arrowBtns1);
updateArrowOpacity(carousel2, arrowBtns2);

// Ajouter des écouteurs d'événements aux boutons de flèche pour chaque carrousel
arrowBtns1.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel1.scrollLeft += btn.id === "left" ? -firstCardWidth1 : firstCardWidth1;
        updateArrowOpacity(carousel1, arrowBtns1); 
    });
});

arrowBtns2.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel2.scrollLeft += btn.id === "left" ? -firstCardWidth2 : firstCardWidth2;
        updateArrowOpacity(carousel2, arrowBtns2); 
    });
});

// Fonction pour mettre à jour l'opacité des flèches pour un carrousel donné
function updateArrowOpacity(carousel, arrowBtns) {
    const scrollPosition = carousel.scrollLeft;
    const maxScrollPosition = carousel.scrollWidth - carousel.clientWidth;
    const isFirstCardVisible = scrollPosition === 0;
    const isLastCardVisible = scrollPosition >= maxScrollPosition - 1;

    arrowBtns[0].style.opacity = isFirstCardVisible ? "0.3" : "1"; 
    arrowBtns[1].style.opacity = isLastCardVisible ? "0.3" : "1"; 
}