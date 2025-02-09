import { writable } from 'svelte/store';

import { en } from './en';
import type { Language, Resource } from './interface';

const resources: {
  [L in Language]: Resource;
} = { en };

export const resource = (function () {
  const lang = navigator.language.split('-')[0] as Language;
  const { subscribe, set } = writable(resources[lang] ?? en);

  return {
    subscribe,
    setLang: function (lang: Language) {
      const res = resources[lang];
      if (!res) {
        throw Error(`Could not find a resource given language ${lang}`);
      }
      set(res);
    },
  };
})();
