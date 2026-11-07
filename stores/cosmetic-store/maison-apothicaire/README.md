# Maison Apothicaire

Page de liens de Maison Apothicaire (beauté, soins et bien-être, Alger). Ouvrez `index.html` dans un navigateur ; aucun serveur ni compilation n'est nécessaire.

## Modifier les liens

Éditez uniquement `links.js`. L'ordre des objets est l'ordre des boutons.

- `label` : titre du bouton ;
- `detail` : petit texte secondaire, facultatif ;
- `url` : adresse complète en `https:`, `tel:` ou `mailto:` ;
- `icon` : `star`, `instagram`, `facebook`, `tiktok`, `message`, `phone`, `pin` ou `globe`.

Une `url` vide masque le bouton sans supprimer son objet. Pour WhatsApp, utilisez `https://wa.me/` suivi du numéro international sans `+`, espaces ni zéro initial. Les fichiers sont publics : n'y mettez aucun secret.

## Vérifier et publier

Exécutez `node check.cjs` depuis ce dossier ou `node check.cjs` à la racine. Le contrôle local utilise `../../../scripts/check-store.cjs`. Publiez `index.html`, `styles.css`, `links.js`, `page.js`, `assets/` et `plates/` en conservant leur arborescence ; `references/` contient les maquettes fournies et n'est pas publié.

## Identité

Palette issue de la plaque fournie : crème papier `#FBF7F1`, vert sapin `#10320F`, or `#BB9D65`. Le monogramme « M » sous son arche et le bloc-marque complet (extraits de la plaque) servent respectivement de favicon/carte d'annuaire et de héros ; la devise « Beauté · Soins · Bien-être » est reprise en HTML sous le bloc-marque. Détail décoratif discret : rameaux dorés aux angles supérieurs, filet or sous la devise, serif Palatino pour les titres.

## Sources

La plaque NFC/QR fournie reste intacte dans `references/` ; la copie publiée dans `plates/` alimente l'aperçu de l'annuaire. Le téléphone `+213 668 33 76 42` alimente WhatsApp (`https://wa.me/213668337642`) et `tel:+213668337642`. Les paramètres de suivi des liens Instagram et Maps fournis ont été retirés au profit des URL canoniques ; la destination Facebook est le lien de partage fourni, non résolu vers une page précise.
