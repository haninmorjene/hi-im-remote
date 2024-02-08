
// script.js

// Fonction d'initialisation de la carte
function initMap() {
    // Coordonnées pour Sousse, Tunisie
    var myLatLng = { lat: 35.8252, lng: 10.6340 };

    // Créez une nouvelle carte Google Maps centrée sur Sousse
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: myLatLng
    });

    // Ajoutez un marqueur pour indiquer l'emplacement sur la carte
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'GPS Tunisie Sousse'
    });
}

// Fonction de validation du formulaire
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name == "" || email == "" || message == "") {
        alert("Veuillez remplir tous les champs du formulaire.");
        return false;
    }
}

// Ajoutez ici d'autres fonctionnalités JavaScript liées à votre page
// ...

// Si vous avez d'autres fonctionnalités spécifiques à ajouter, faites-le ici.
