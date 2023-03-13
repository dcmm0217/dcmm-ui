import { defineComponent as e, computed as u, openBlock as m, createElementBlock as s, normalizeClass as l, unref as p, renderSlot as c } from "vue";
import "./style/index.less.mjs";
const a = e({ name: "mm-button" }), d = /* @__PURE__ */ e({
  ...a,
  props: {
    type: null
  },
  setup(o) {
    const t = o, n = u(() => ({ [`mm-button--${t.type}`]: t.type }));
    return (r, f) => (m(), s("button", {
      class: l(["mm-button", p(n)])
    }, [
      c(r.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
