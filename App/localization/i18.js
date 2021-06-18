import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import MiscUtil from '../utils/misc-util';
import {TRANSLATIONS_EN} from './en';
import {TRANSLATIONS_TR} from './tr';

const resources = {
    en: {
        translation: TRANSLATIONS_EN,
    },
    tr: {
        translation: TRANSLATIONS_TR,
    },
};

i18next.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: MiscUtil.getLanguage(),
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export function changeLanguage(lang) {
    return i18next.changeLanguage(lang ? lang : MiscUtil.getLanguage());
}

export function flipLanguage(lang) {
    let nextLanguage = i18next.language === 'tr' ? 'en' : 'tr';
    return i18next.changeLanguage(nextLanguage);
}

export default i18next;
