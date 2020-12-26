//https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started

import { createApp, ref } from "vue";
import App from "./App.vue";
import "./assets/reset.css";

import focusMQ from "./assets/lib.js";

const app = createApp(App);

app.config.globalProperties.gClipboard = "clip";
app.config.globalProperties.gFocusMQref = ref({});
app.config.globalProperties.gFocusMQobj = (function () {
  let mq = undefined;
  return {
    set: function (mqn) {
      // console.log("clicked: ", mqn);
      if (mq) mq.blur();
      mq = mqn;
    },
    get: function () {
      return mq;
    },
    clear: function () {
      if (mq) mq.blur();
      mq = undefined;
    }
  };
})();

app.mount("#app");
