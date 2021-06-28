import {NativeModules, Platform} from 'react-native';

export default class MiscUtil {
    static isAndroid() {
        return Platform.OS !== 'ios';
    }

    static getLanguage() {
        let locale;
        if (!this.isAndroid()) {
            locale = NativeModules.SettingsManager.settings.AppleLanguages;
        } else {
            locale = NativeModules.I18nManager.localeIdentifier;
        }

        if (!locale || locale.length === 0) {
            return 'tr';
        } else {
            if (!Array.isArray(locale)) {
                return locale.substring(0, 2);
            } else {
                return locale[0].substring(0, 2);
            }
        }
    }

    static getHumanReadableLanguage() {
        let locale = this.getLanguage();

        switch (locale) {
            case 'en':
                return 'english';
            case 'tr':
            default:
                return 'turkish';
        }
    }

    static chunkArrayInGroups(arr, size) {
        let myArray = [];
        for (let i = 0; i < arr.length; i += size) {
            myArray.push(arr.slice(i, i + size));
        }
        return myArray;
    }
}
