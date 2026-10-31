# Sallon d’or — page de liens

Logo original conservé dans `references/`. Restauration générée avec fond
transparent, doré champagne proche de l’original et contours nets. Master `assets/logo-4k.png`
(3840 × 2560), agrandi depuis une génération 1536 × 1024 avec Lanczos.
La page utilise `assets/logo-web.webp` (960 × 640) pour un chargement léger.
Le nom reste dans le logo, sans titre supplémentaire. Logo de 270px maximum,
espace de 18px avant les boutons. Encadrement en arche et flèches des liens ;
les deux ornements des coins supérieurs ont été retirés.
Style ivoire et or, langue française et ordre de `links.js` confirmés.
Sept entrées configurées : Avis Google, Instagram, Facebook, TikTok, WhatsApp,
Téléphone, Localisation. Six destinations renseignées ; Avis Google reste
masqué tant que sa destination reste vide.
Le lien d'appel utilise le même numéro international que le lien WhatsApp fourni.

Ouvrez `index.html` dans un navigateur. Aucun serveur ni compilation nécessaire.

## Modifier les liens

Éditez `links.js`. Chaque objet contient `label` (intitulé), `detail` (texte
secondaire facultatif), `url` (adresse) et `icon` (star, instagram, facebook, tiktok,
message, phone ou pin). L'ordre des objets définit l'ordre des boutons.

Une `url` vide masque le bouton public ; son objet reste modifiable dans la configuration. Ne mettez pas de faux liens.

Adresses complètes en `https:`, `tel:` ou `mailto:` uniquement.
WhatsApp : `https://wa.me/` suivi du numéro international sans `+` ni espaces.
Téléphone : `tel:+` suivi du même numéro. Le numéro doit être confirmé.
Les fichiers sont publics : n'y mettez aucun secret.

## Vérifier et publier

Exécutez `node check.cjs` si Node.js est disponible, puis vérifiez la page dans
un navigateur mobile. Le contrôle automatisé ne remplace pas cette vérification.

Publiez `index.html`, `styles.css`, `links.js`, `page.js` et `assets` en conservant
leur arborescence. Le workflow racine prépare uniquement les fichiers runtime et les déploie sur GitHub Pages après les contrôles.
