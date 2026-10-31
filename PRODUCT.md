# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

HTML, CSS et JavaScript statiques, sans dépendances ni framework. Choix confirmé dans `PLAN.md`.

## Users

Clients de commerces algériens qui scannent une plaque NFC ou un QR code ; visiteurs qui recherchent les liens d'un commerce dans l'annuaire.

## Product Purpose

Parcourir les catégories puis les commerces, ou ouvrir directement une page de liens par scan.

## Capabilities and Constraints

Six commerces, onze catégories, registre partagé, maintien des pages et identités existantes.
Recherche par nom sur l'accueil et dans chaque catégorie, sans distinction de casse, d'accent ou d'apostrophe.
Pas d'administration navigateur, de compte ni d'analytique.
URLs relatives compatibles avec `/nfc/`, à conserver après lancement.
Annuaire en anglais ; pages individuelles des commerces conservées en français. Les cartes ne montrent aucune localisation ; ces métadonnées ont été retirées à la demande de l'utilisateur.
Sallon d’or vend des rideaux et de la décoration intérieure : catégorie Home Goods. Son ancienne URL redirige vers la nouvelle.

## Brand Commitments

Annuaire conforme au système fourni dans `wakil-ai-assests/design-system.md` et à son logo : fond Wakil Orange #FF6B00 demandé par l’utilisateur, cartes blanches, noir, Space Grotesk et Plus Jakarta Sans.
Titre d’accueil « NFC Store Links » centré, sans introduction ni libellé supérieur. Projets des commerces regroupés dans `stores/<type>/<store>/`, sans modifier les URL publiques.
Cartes de catégories avec icônes SVG alignées sur la hauteur du nom + compteur et libellés dérivés des slugs ; cartes de commerces avec logo proportionné.
Les identités individuelles et l'ordre des liens fournis sont conservés.

## Accessibility & Inclusion

Navigation clavier avec focus visible, cibles tactiles confortables, défilement naturel,
portraits 320–430px, paysage tactile et bureau. Liens ordinaires de navigation sans JavaScript.

## Evidence on Hand

`PLAN.md`, six projets existants, leurs logos et destinations fournies.
Les destinations Maps sont conservées ; les libellés de localisation ne sont pas présentés comme confirmés.
