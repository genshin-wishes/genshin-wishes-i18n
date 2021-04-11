const i18nList = require('./i18n/i18n.json');

const i18n = i18nList.reduce((i18n, lang) => {
    try {
        const site = require(`./i18n/${lang}/site.json`);
        const items = require(`./i18n/${lang}/items.json`);

        i18n[lang] = {
            ...site,
            items
        };
    } catch {
    }

    return i18n;
}, {});

module.exports = i18n;