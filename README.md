# Genshin Wishes

Official translations repository of [https://genshin-wishes.com](https://genshin-wishes.com)

Everybody is welcome to contribute by translating in their native language.

### [Contributors list](CONTRIBUTORS.md)

### How it works

Genshin Wishes will be regularly updated by translations from this repository.

- If a translation is missing, it will fallback to English (US)
- If one file is incorrect, the whole country's folder will be automatically ignored until it's fixed
- If you don't understand anything to GitHub, forks, commits & so on, you can always find someone to help you on Discord, or even simply send the files to a `@Founder`

Here's how you to read a `.json` file:
```json
{
  "aggregate": {
    "A": "Sentence A",
    "B": "Sentence B"
  },
  "C": "Sentence C"
}
```

The **left-side** part (aggregate, A, B and C) are *keys*, they identify the sentence you translate and should be left untouched.
The **right-side** part can be either an aggregate of other keys (that's the case for `aggregate`) or a sentence.

**You should only modify right-side parts that are sentences.**

Sometimes you will see `{{ word }}` in the translated sentences, this is a variable replaced by a value on the site. For example:

```json
{
  ...,
  "titleWithCount": "All wishes ({{ wishes }})",
  ...
}
```

This will be translated to "All wishes (1234)" where 1234 is the actual wishes counter of the user.
If you are unsure of what the replacement value would be, please do not hesitate to ask.

| Value              | Example           | Description  |
|:------------------:|:-----------------:| ------------ |
| {{ wishes }}       | 1234              | Wish counter |
| {{ content }}      | 5★                | A button to see more content |
| {{ uid }}          | 70012345          | The user's in-game UID |
| {{ page }}         | Banners           | The title of the current page |
| {{ step }}         | 1                 | A step number in the first login setup |
| {{ count }}        | 1234              | Number of wishes |
| {{ confirmation }} | DELETE MY ACCOUNT | A confirmation phrase for danger actions |
| {{ banner }}       | Permanent banner  | The name of a banner |

### Case 1: My language does not exist yet

- **Fork** the project on GitHub
- Copy the `en-US` folder and rename it to your [locale (BCP 47 Code)](https://docs.microsoft.com/en-us/openspecs/office_standards/ms-oe376/6c085406-a698-4e12-9d4d-c3b0ee3dbc4a).
- Translate `[locale]/site.json|items.json|faq.md` and `[locale]/instructions/android.md|console.md|ios.md|pc.md` (these are a copy/paste of their section in the FAQ file)
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
