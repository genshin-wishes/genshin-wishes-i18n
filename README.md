# Genshin Wishes

Official translations repository of [https://genshin-wishes.com](https://genshin-wishes.com)

Everybody is welcome to contribute by translating in their native language.

For the moment, we support "by country" translations and not the full locale (country.

### How it works

Genshin Wishes will be regularly updated by translations from this repository.

- If a translation is missing, it will fallback to English
- If one file is incorrect, the whole country's folder will be automatically ignored until it's fixed
- If you don't understand anything to GitHub, forks, commits & so on, you can always find someone to help you on Discord, or even simply send the files to a `@Founder`

### Case 1: My language does not exist yet

- **Fork** the project on GitHub
- Copy the `en` folder and rename it to your [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements).
- Translate `[country code]/site.json` and `[country code]/items.json`
- Add the country code with the others in `i18n.json`
- Increment the version in package.json
- Commit and push your changes
- Create a pull request from your fork to `main` to merge your work!

### Case 2: My language already exists but needs a fix or an update

- **Fork** the project on GitHub
- Do your fixes/updates
- Commit and push your changes
- Increment the version in package.json
- Create a pull request from your fork to `main` to merge your work!

Genshin Wishes is not affiliated to miHoYo. Genshin Impact and miHoYo are trademarks or registered trademarks of miHoYo. Genshin Impact © miHoYo.
For any claim, please contact us
