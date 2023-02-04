import type { Options } from "localekit";

//@ts-ignore ?
export default {
  selfURL: import.meta.url,
  languages: {
    en: {
      common: {
        languages: {
          en: "English",
          es: "Spanish",
          ar: "Arabic",
        },
      },
      homePage: {
        title: "This is a simple demo for locale-kit plugin",
      },
    },
    es: {
      common: {
        languages: {
          en: "Inglés",
          es: "Español",
          ar: "árabe",
        },
      },
      homePage: {
        title:
          "Esta es una demostración simple para el complemento del locale-kit",
      },
    },
    ar: {
      common: {
        languages: {
          en: "الانجليزية",
          es: "الاسبانية",
          ar: "العربية",
        },
      },
      homePage: {
        title: "هذا مثال تطبيقي بسيط للبلاغين لوكال-كيت",
      },
    },
  },
} as Options;
