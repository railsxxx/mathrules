// const arrMQ = [];
let active = undefined;
let isActive = false;
// function reg(mq) {
//   if (!arrMQ.includes(mq)) arrMQ.push(mq);
//   console.log("reg: mq: ", mq);
//   console.log("reg: active: ", active);
//   console.log("reg: arrMQ: ", arrMQ);
// }
// function unreg(mq) {
//   const index = arrMQ.indexOf(mq);
//   if (index >= 0) arrMQ.splice(index, 1);
// }
function clicked(mq) {
  console.log("clicked: ", mq);
  if (active) active.blur();
  active = mq;
  isActive = true;
  // arrMQ.forEach((item) => {
  //   if (item === mq) item.focus();
  //   else item.blur();
  // });
}
// function get() {
//   return active;
// }
// function clear(mq) {
//   if (active === mq) {
//     active = {};
//     isActive = false;
//   }
// }
// function isFocus() {
//   return isActive;
// }

export default {
  // register: reg,
  // unregister: unreg,
  set: clicked,
  // get: get,
  // clear: clear,
  isAny: isActive,
  mq: active
};
