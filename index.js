const i18nList = require('./i18n/i18n.json');

const i18n = i18nList.reduce((i18n, lang) => {
    try {
        const site = require(`./${lang}/site_${lang}.json`);
        const items = require(`./${lang}/items_${lang}.json`);

        i18n[lang] = {
            site,
            items
        };
    } catch {}

    return i18n;
}, {});

console.log(i18n);

module.exports = i18n;