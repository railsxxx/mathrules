export function focusMQ() {
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
}
