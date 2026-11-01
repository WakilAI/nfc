# Zone-Tech Pro

Page de liens de Zone-Tech Pro, centre de réparation Apple (iPhone, iPad, MacBook, iMac). Ouvrez `index.html` dans un navigateur ; aucun serveur ni compilation n'est nécessaire.

## Modifier les liens

Éditez uniquement `links.js`. L'ordre des objets est l'ordre des boutons.

- `label` : titre du bouton ;
- `detail` : petit texte secondaire, facultatif ;
- `url` : adresse complète en `https:`, `tel:` ou `mailto:` ;
- `icon` : `star`, `instagram`, `facebook`, `tiktok`, `message`, `phone`, `pin`, `globe` ou `mail`.

Une `url` vide masque le bouton sans supprimer son objet. Le mobile est configuré sur `tel:+213560989890` et le WhatsApp sur `https://wa.me/213560989890` ; le fixe sur `tel:+21323789050`. Les fichiers sont publics : n'y mettez aucun secret.

## Vérifier et publier

Exécutez `node check.cjs` depuis ce dossier ou `node check.cjs` à la racine. Le contrôle local utilise `../../../scripts/check-store.cjs`. Publiez `index.html`, `styles.css`, `links.js`, `page.js` et `assets/` en conservant leur arborescence ; `references/` contient le logo fourni et n'est pas publié.

## Identité

Blanc, noir et gris Apple : logo officiel fourni, cartes grises `#f5f5f7`, texte `#1d1d1f` et filets discrets. Le logo détouré sert à la page ; sa version carrée sur fond blanc sert au visuel d'annuaire et au favicon.
