# OVYX

Page de liens d'OVYX. Ouvrez `index.html` dans un navigateur ; aucun serveur ni compilation n'est nécessaire.

## Modifier les liens

Éditez uniquement `links.js`. L'ordre des objets est l'ordre des boutons.

- `label` : titre du bouton ;
- `detail` : petit texte secondaire, facultatif ;
- `url` : adresse complète en `https:`, `tel:` ou `mailto:` ;
- `icon` : `star`, `instagram`, `facebook`, `tiktok`, `message`, `phone`, `pin` ou `globe`.

Une `url` vide masque le bouton sans supprimer son objet. Le téléphone est configuré sur `tel:+213778079603` et le WhatsApp sur `https://wa.me/213778079603`. Les fichiers sont publics : n'y mettez aucun secret.

## Vérifier et publier

Exécutez `node check.cjs` depuis ce dossier ou `node check.cjs` à la racine. Le contrôle local utilise `../../../scripts/check-store.cjs`. Publiez `index.html`, `styles.css`, `links.js`, `page.js` et `assets/` en conservant leur arborescence ; `references/` contient les fichiers fournis et n'est pas publié.

## Identité

Noir profond, filets argentés, lettrage capitales espacées et boutons en contour fin, inspirés de la plaque fournie. Le logo officiel fourni sert de visuel d'annuaire et de favicon ; sa version détourée est utilisée sur la page. La plaque NFC fournie est dans `plates/` et apparaît dans l’aperçu du commerce.
