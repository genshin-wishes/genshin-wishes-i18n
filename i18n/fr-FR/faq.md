## Qu'est-ce que Genshin Wishes ?
Genshin Wishes est un site gratuit [avec son code public](https://github.com/genshin-wishes) qui permet de sauvegarder et de consulter vos vœux Genshin Impact hors du jeu. Le site a été créé et est maintenu par [Colin Auberger](https://www.linkedin.com/in/colin-auberger/) et [Jimmy Vergerolle](https://vergerolle.fr).

- Sauvegardez vos vœux aussi longtemps que vous le souhaitez
- Vérifiez votre pity sur tous les événements et bannières permanentes
- Parcourez vos vœux facilement à l'aide de filtres
- Regardez des statistiques détaillées sur vos vœux (pour les nerds comme nous qui adorent les graphiques 🤓)

## Comment faites-vous pour avoir mes vœux dans le jeu ?
Nous les récupérons simplement de votre propre historique de vœux. L'historique dans Genshin Impact est une simple page web incrustée dans le jeu, vous pourriez vous-même y avoir accès avec le lien. La seule chose dont nous avons besoin est une clé temporaire donnée par le jeu.  Cette clé temporaire est dans le lien que nous vous demandons pour importer vos vœux.

## Comment trouver la clé nécessaire à l'import des vœux

> 📢 Suite à la mise à jour 2.3 le lien "Commentaire" ne permet plus de synchroniser les voeux.

### PC
1. Ouvrez Genshin Impact sur PC
2. Ensuite ouvrez la page d'historique des voeux et attendez qu'elle charge
3. Retournez sur Windows
4. Dans le menu Démarrer chercher "Powershell" et ouvrez "Windows Powershell"
5. Copiez ensuite le code suivant dans la fenêtre Powershell
```
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/genshin-wishes/genshin-wishes-getlink/main/global.ps1'));
```
6. Appuyez ensuite sur ENTRER, et le lien sera copié automatiquement
7. Collez le lien dans Genshin Wishes.

### Android
1) Ouvrez l'historique des voeux dans le jeu
2) Coupez toutes connexions Wi-Fi / Data
3) Appuyez sur le bouton de rafraîchissement dans le coin en haut à droite de l'écran
4) La page devrait bugger, en affichant alors l'URL
5) Copiez l'URL et collez-la dans Genshin Wishes

### iOS
> ✳️ Avant d'utiliser cette méthode, vous devez lire notre guide sur [comment installer et utiliser l'application Stream (Anglais)](https://drive.google.com/file/d/14Q_6v60qLPunrpmA9Bf1KlvsKhaRyPzz/view?usp=sharing).

1. Ouvrez Genshin Impact et ouvrez l'écrans des voeux (sur les bannières)
2. En gardant Genshin Impact ouvert, ouvrez l'application Stream et appuyez sur Sniff Now
3. Retournez sur Genshin Impact et ouvrez l'historique des voeux
4. Lorsque votre historique de voeux est chargée, revenez à l'application Stream et appuyez sur Stop sniffing
5. Appuyez ensuite sur Sniff History et choisissez le premier élément de la liste
6. Appuyez sur l'élément commençant par « GET https://hk4e-api-os... »
7. Appuyez sur l'onglet de Request
8. Appuyez sur le long texte commençant par « GET /event/gacha_info... »
9. Enfin, appuyez sur Copy URL, puis collez-la dans Genshin Wishes

### Consoles
> ⚠️ En raison de la dernière mise à jour, l'ancienne méthode Console ne fonctionne plus.

Vous pouvez toujours [lier votre compte PlayStation à un compte miHoYo](https://www.hoyolab.com/article/533197) puis utiliser la méthode pc/mobile.

## Est-ce sécurisé ?
Oui. En tant que joueurs de Genshin Impact, nous sommes aussi préoccupés par la sécurité de nos comptes.
- **Nous ne vous demandons pas d'installer quoi que ce soit** sur votre PC ou mobile
- **Nous ne vous demandons pas le mot de passe de votre compte Genshin**
- La clé temporaire n'est pas stockée sur nos serveurs mais **sur votre machine**
- Elle n'est valide que 24h, après cette durée vous devrez en générer une nouvelle pour synchroniser vos vœux
- Cette clé ne nous permet pas de nous connecter à votre compte de toute façon
- Vous avez la possibilité de supprimer toutes les données que nous stockons quand vous le voulez (vœux inclus)
- Nous utilisons le cryptage SSL

## Y-a-t-il un risque de se faire bannir en utilisant ce site ?
Absolument pas. Nous utilisons les mêmes requêtes que le jeu pour récupérer vos vœux (avec l'API publique de Mihoyo) donc il n'y a aucun risque d'être banni. Nous l'avons utilisé sur nos propres comptes pendant des mois. Mihoyo a fait [un article sur les outils tiers](https://genshin.mihoyo.com/fr/news/detail/5767), et le notre ne pose pas de soucis.


## Quelles langues supportez-vous ?
Le site est maintenu en anglais et français, d'autres langues sont maintenues par des [contributeurs](https://github.com/genshin-wishes/genshin-wishes-i18n/blob/main/CONTRIBUTORS.md) dans [ce projet](https://github.com/genshin-wishes/genshin-wishes-i18n).