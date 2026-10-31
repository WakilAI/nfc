# Page de liens

Ouvrez `index.html` dans un navigateur. Aucun serveur ni compilation nécessaire.

## Modifier les liens

Éditez `links.js`. Chaque objet contient `label` (intitulé), `detail` (texte
secondaire facultatif), `url` (adresse) et `icon` (star, instagram, tiktok,
message, phone, pin ou facebook). L'ordre des objets définit l'ordre des boutons.

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
