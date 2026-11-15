FOODPLANNER — INSTALLATION ANDROID

Cette version est une PWA (application web installable) et stocke les données dans IndexedDB.
L'installation PWA exige une adresse HTTPS. Un fichier HTML ouvert directement depuis Téléchargements ne peut pas être installé comme PWA hors ligne.

Étapes nécessaires :
1. Héberger le contenu de ce dossier sur un hébergement HTTPS statique (par exemple GitHub Pages).
2. Ouvrir l'adresse HTTPS dans Chrome Android.
3. Menu ⋮ > Installer l'application (ou Ajouter à l'écran d'accueil).
4. Dans l'application, importer le fichier foodplanner-v34-sauvegarde.json exporté depuis la V3.4.

Important :
- Ne pas effacer la V3.4 ni les données du navigateur tant que l'import n'a pas été vérifié.
- Cette archive est le paquet de l'application, pas une URL hébergée ni une APK.
- Les fonctions de scan/OCR qui utilisent des bibliothèques externes peuvent nécessiter Internet.
