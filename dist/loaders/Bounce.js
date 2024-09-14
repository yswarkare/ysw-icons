import { jsxs as n, jsx as e } from "react/jsx-runtime";
import i from "./withIconHoc.js";
const l = /* @__PURE__ */ n("ellipse", { cx: "12", cy: "5", fill: "currentColor", rx: "4", ry: "4", children: [
  /* @__PURE__ */ e("animate", { id: "svgSpinnersBouncingBall0", fill: "freeze", attributeName: "cy", begin: "0;svgSpinnersBouncingBall2.end", calcMode: "spline", dur: "0.375s", keySplines: ".33,0,.66,.33", values: "5;20" }),
  /* @__PURE__ */ e("animate", { attributeName: "rx", begin: "svgSpinnersBouncingBall0.end", calcMode: "spline", dur: "0.05s", keySplines: ".33,0,.66,.33;.33,.66,.66,1", values: "4;4.8;4" }),
  /* @__PURE__ */ e("animate", { attributeName: "ry", begin: "svgSpinnersBouncingBall0.end", calcMode: "spline", dur: "0.05s", keySplines: ".33,0,.66,.33;.33,.66,.66,1", values: "4;3;4" }),
  /* @__PURE__ */ e("animate", { id: "svgSpinnersBouncingBall1", attributeName: "cy", begin: "svgSpinnersBouncingBall0.end", calcMode: "spline", dur: "0.025s", keySplines: ".33,0,.66,.33", values: "20;20.5" }),
  /* @__PURE__ */ e("animate", { id: "svgSpinnersBouncingBall2", attributeName: "cy", begin: "svgSpinnersBouncingBall1.end", calcMode: "spline", dur: "0.4s", keySplines: ".33,.66,.66,1", values: "20.5;5" })
] }), r = i(l);
export {
  r as default
};
