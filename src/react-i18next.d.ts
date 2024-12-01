// react-i18next.d.ts
import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      en: typeof import('./locales/en.json');
      es: typeof import('./locales/es.json');
    };
  }
}
