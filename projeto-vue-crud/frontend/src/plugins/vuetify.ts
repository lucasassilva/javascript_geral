import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import colors from "vuetify/lib/util/colors";
import "@mdi/font/css/materialdesignicons.css";
import pt from "vuetify/src/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      light: {
        grey: colors.grey.lighten5,
      },
    },
  },
  lang: {
    locales: { pt },
    current: "pt",
  },
});
