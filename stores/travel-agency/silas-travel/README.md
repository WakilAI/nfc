# Silas Travel

Ouvrir `index.html`. Modifier les libellés, liens et leur ordre dans `links.js`.
Ordre : Avis Google, Instagram, Facebook, TikTok, WhatsApp, Téléphone, Localisation. Avis Google a une URL vide : il est conservé en configuration mais masqué publiquement jusqu’à l’ajout du lien d’avis ; le premier bouton visible est mis en avant en dégradé bleu.
Six destinations publiées : Instagram (`silastravel16`), Facebook (page Silas Travel), TikTok (`silas.travel`), WhatsApp et Téléphone `+213 770 08 26 36`, et une Localisation Google Maps **provisoire** (recherche « Silas Travel ») à remplacer par le lien du lieu réel quand l’agence en aura un.
Le logo source est préservé dans `references/logo.png` ; la copie publiée est `assets/logo.webp` (494×571, marges transparentes conservées). Les plaques NFC fournies restent dans `plates/`.
Style simple : crème, bleu profond `#25589b` échantillonné sur le logo ; liseré bleu en tête de carte, premier bouton plein bleu, footer minimal nom · activité. Aucun élément décoratif entre le logo et les boutons.
Vérifier avec `node check.cjs` depuis ce dossier, ou `node check.cjs` à la racine pour l’annuaire complet.
