🚕 Projet Mwinda – Mini système de réservation de trajet
🎯 Objectif
Cette application simule un système de réservation de trajet inspiré de Yango / Uber.

🔧 Outils utilisés
Front-end : React (avec Vite)

Carte : Leaflet.js + OpenStreetMap

État global : useState React

TypeScript (facultatif) : utilisé pour typer les données

✅ Fonctionnalités
Formulaire avec nom, téléphone, commune de départ et d’arrivée

Affichage d’une carte interactive avec le trajet tracé

Bouton “Chercher un conducteur” qui affiche une réponse simulée après 1 seconde

🗺️ Données géographiques
Coordonnées fixes associées aux 20 communes de Kinshasa.

Permet de simuler un affichage de trajet sans appel externe d’API.

🔁 Simulation
Pas de backend pour l’instant (MVP frontend uniquement)

Toutes les données sont simulées côté client

🚀 Lancer le projet localement

git clone [.......]
cd reservation-app
npm install
npm run dev