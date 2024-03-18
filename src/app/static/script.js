import ScrollReveal from 'scrollreveal';

const revelar = ScrollReveal();

revelar.reveal('.sobre', {
    duration: 2000,
    distance: '90px'
}); 

revelar.reveal('.d1', {
    duration: 2000,
    distance: '90px',
    delay: 500, 
    origin: 'right',
    reset: true
});

revelar.reveal('.d2', {
    duration: 2000,
    distance: '90px',
    delay: 1000,
    origin: 'right'
});

revelar.reveal('.d3', {
    duration: 2000,
    distance: '90px',
    delay: 1500,
    origin: 'right'
});

revelar.reveal('.d4', {
    duration: 2000,
    distance: '90px',
    delay: 2000,
    origin: 'right'
});