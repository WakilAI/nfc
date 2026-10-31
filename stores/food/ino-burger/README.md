# Ino Burger

Ouvrez `index.html` dans votre navigateur. Aucun outil à installer.

## Modifier les liens

Modifiez uniquement `links.js` :

- `label` : titre du bouton ;
- `detail` : petit texte sous le titre ;
- `url` : adresse complète (`https://…` ou `tel:…`) ;
- `icon` : `star`, `instagram`, `tiktok`, `message`, `phone` ou `pin`.

L'ordre des objets est l'ordre des boutons. Pour ajouter ou retirer un bouton,
ajoutez ou retirez son objet dans la liste, en conservant les virgules entre objets.
Les textes sont affichés comme du texte, jamais comme du HTML.

Pour WhatsApp : `https://wa.me/` suivi du numéro international sans `+`, espaces ou zéro initial.
Le numéro fourni donne `https://wa.me/213560041045`.

Le fichier est public et ne doit contenir aucun secret. Après une modification,
actualisez la page (Ctrl+F5 si nécessaire).

## Hébergement

Publiez `index.html`, `links.js`, `page.js` et `references/logo.jpg` en conservant
leur arborescence. Les images de plaques ne sont pas utilisées par la page.

## Vérification

`node check.cjs` vérifie le rendu des six liens et le rejet des adresses dangereuses.
