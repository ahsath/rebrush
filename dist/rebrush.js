import { openBlock as r, createElementBlock as s } from "vue";
const _ = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [c, n] of e)
    t[c] = n;
  return t;
}, f = {};
function l(o, e) {
  return r(), s("h1", null, "Hey! this is Foo.vue");
}
const i = /* @__PURE__ */ _(f, [["render", l]]);
export {
  i as Foo
};
