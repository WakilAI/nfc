# abdou-my-phone

Ouvrez `index.html`. Modifiez les textes, destinations et ordre dans `links.js`.
Une destination vide masque le bouton ; seuls `https:`, `tel:` et `mailto:` sont acceptés.
Les fichiers sont publics : aucun secret. Les icônes et la mise en page existantes sont conservées.

## Identité

Blanc, azur électrique et noir, d'après les plaques fournies : wordmark « Abdou / My Phone »
en Montserrat gras, baseline « Téléphones & accessoires » soulignée, vagues NFC en décor
et signature manuscrite « Restez connectés » (Caveat) en pied de page.
Le logo circulaire fourni est conservé tel quel : original dans `references/`,
copie affichée dans `assets/`. Les plaques NFC fournies sont publiées dans `plates/`.

## Vérifier et publier

Exécutez `node check.cjs` depuis ce dossier ou `node check.cjs` à la racine. Le contrôle
local utilise `../../../scripts/check-store.cjs`. Publiez `index.html`, `styles.css`,
`links.js`, `page.js` et `assets/` en conservant leur arborescence ; `references/` conserve
le logo original ; la carte NFC est publiée depuis `plates/` dans l'aperçu du commerce.
La préparation et le déploiement sont documentés dans le README racine.

## Contacts

WhatsApp et Téléphone pointent vers `+213 550 88 30 25` — international sans `+`, espaces
ni zéro initial : `https://wa.me/213550883025` et `tel:+213550883025`.
