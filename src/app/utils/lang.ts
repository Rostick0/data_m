export type langType = 'ru' | 'it' | 'ua' | 'en' | 'da' | 'de' | 'es' | 'fr' | 'nl' | 'pl' | 'pt' | 'tr';

const langs: langType[] = ['ru', 'it', 'ua', 'en', 'da', 'de', 'es', 'fr', 'nl', 'pl', 'pt', 'tr'];

export const langsSelectItems = (() => {
    return [...langs]?.map(item => {
        return {
            value: item,
            name: item
        };
    })
})();