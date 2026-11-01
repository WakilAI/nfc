# Mico Parfumerie

Page de liens de Mico Parfumerie. Ouvrez `index.html` dans un navigateur ; aucun serveur ni compilation n'est nécessaire.

## Modifier les liens

Éditez uniquement `links.js`. L'ordre des objets est l'ordre des boutons.

- `label` : titre du bouton ;
- `detail` : petit texte secondaire, facultatif ;
- `url` : adresse complète en `https:`, `tel:` ou `mailto:` ;
- `icon` : `star`, `instagram`, `facebook`, `tiktok`, `telegram`, `message`, `phone`, `pin` ou `globe`.

Une `url` vide masque le bouton sans supprimer son objet. Le téléphone est configuré sur `tel:+213797123163` et le WhatsApp sur `https://wa.me/213797123163`. Les fichiers sont publics : n'y mettez aucun secret.

## Vérifier et publier

Exécutez `node check.cjs` depuis ce dossier ou `node check.cjs` à la racine. Le contrôle local utilise `../../../scripts/check-store.cjs`. Publiez `index.html`, `styles.css`, `links.js`, `page.js` et `assets/` en conservant leur arborescence ; `references/` contient les fichiers fournis et n'est pas publié.

## Identité

Émeraude, or et crème, titres Georgia, filets dorés et coins botaniques. Le logo officiel fourni sert de visuel d'annuaire et de favicon ; sa version détourée est utilisée sur la page. Les cartes NFC et plaques fournies sont dans `plates/` et apparaissent dans l’aperçu du commerce.
