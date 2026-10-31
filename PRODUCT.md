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

Huit commerces, onze catégories, registre partagé, maintien des pages et identités existantes.
Recherche par nom sur l'accueil et dans chaque catégorie, sans distinction de casse, d'accent ou d'apostrophe.
Pas d'administration navigateur, de compte ni d'analytique.
URLs relatives compatibles avec `/nfc/`, à conserver après lancement. Toutes les catégories sont regroupées sous `stores/<type>/` en source, avec leurs pages de catégorie et leurs commerces ; la préparation conserve les URL publiques.
Annuaire en anglais ; pages individuelles des commerces conservées en français. Commune et wilaya à confirmer : confirmation différée explicitement par l'utilisateur.
Sallon d’or vend des rideaux et de la décoration intérieure : catégorie Home Goods. Son ancienne URL redirige vers la nouvelle.

## Brand Commitments

Annuaire conforme au système fourni dans `wakil-ai-assests/design-system.md` et à son logo : blanc chaud, noir, Wakil Orange, Space Grotesk et Plus Jakarta Sans.
Cartes de catégories avec icônes SVG et libellés dérivés des slugs ; cartes de commerces avec logo proportionné.
Les identités individuelles et l'ordre des liens fournis sont conservés.

## Accessibility & Inclusion

Navigation clavier avec focus visible, cibles tactiles confortables, défilement naturel,
portraits 320–430px, paysage tactile et bureau. Liens ordinaires de navigation sans JavaScript.

## Evidence on Hand

`PLAN.md`, huit projets existants, leurs logos et destinations fournies.
Les destinations Maps sont conservées ; les libellés de localisation ne sont pas présentés comme confirmés.
