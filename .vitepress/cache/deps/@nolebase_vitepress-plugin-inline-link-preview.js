import {
  Fragment,
  Teleport,
  TransitionGroup,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  inject,
  nextTick,
  normalizeStyle,
  onMounted,
  onScopeDispose,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives
} from "./chunk-FAIIFMHD.js";

// node_modules/.pnpm/@nolebase+vitepress-plugin-inline-link-preview@1.22.4_vitepress@1.0.0-rc.40/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/index.js
import { useData as Oe } from "vitepress";
var Y = Symbol("VPNolebaseInlineLinkPreview");
var x = {
  popupWidth: 600,
  popupHeight: 480,
  previewLocalHostName: true,
  selectorsToBeHided: [".VPNav", ".VPFooter", ".VPLocalNav", ".VPSidebar", ".VPDocFooter > .prev-next"],
  popupTeleportTargetSelector: "body",
  popupDelay: 1e3
};
function ue(e) {
  return getCurrentScope() ? (onScopeDispose(e), true) : false;
}
function V(e) {
  return typeof e == "function" ? e() : unref(e);
}
var Ne = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var Te = Object.prototype.toString;
var Se = (e) => Te.call(e) === "[object Object]";
var U = () => {
};
function ke(e, n) {
  function t(...o) {
    return new Promise((r, i) => {
      Promise.resolve(e(() => n.apply(this, o), { fn: n, thisArg: this, args: o })).then(r).catch(i);
    });
  }
  return t;
}
function We(e, n = {}) {
  let t, o, r = U;
  const i = (l) => {
    clearTimeout(l), r(), r = U;
  };
  return (l) => {
    const u = V(e), s = V(n.maxWait);
    return t && i(t), u <= 0 || s !== void 0 && s <= 0 ? (o && (i(o), o = null), Promise.resolve(l())) : new Promise((c, f) => {
      r = n.rejectOnCancel ? f : c, s && !o && (o = setTimeout(() => {
        t && i(t), o = null, c(l());
      }, s)), t = setTimeout(() => {
        o && i(o), o = null, c(l());
      }, u);
    });
  };
}
function Ae(e) {
  return e || getCurrentInstance();
}
function Ve(e, n = 200, t = {}) {
  return ke(
    We(n, t),
    e
  );
}
function $(e, n = 200, t = {}) {
  const o = ref(e.value), r = Ve(() => {
    o.value = e.value;
  }, n, t);
  return watch(e, () => r()), o;
}
function Be(e, n = true, t) {
  Ae() ? onMounted(e, t) : n ? e() : nextTick(e);
}
function ce(e) {
  var n;
  const t = V(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
var B = Ne ? window : void 0;
function S(...e) {
  let n, t, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, o, r] = e, n = B) : [n, t, o, r] = e, !n)
    return U;
  Array.isArray(t) || (t = [t]), Array.isArray(o) || (o = [o]);
  const i = [], a = () => {
    i.forEach((c) => c()), i.length = 0;
  }, l = (c, f, m, v) => (c.addEventListener(f, m, v), () => c.removeEventListener(f, m, v)), u = watch(
    () => [ce(n), V(r)],
    ([c, f]) => {
      if (a(), !c)
        return;
      const m = Se(f) ? { ...f } : f;
      i.push(
        ...t.flatMap((v) => o.map((b) => l(c, v, b, m)))
      );
    },
    { immediate: true, flush: "post" }
  ), s = () => {
    u(), a();
  };
  return ue(s), s;
}
function pe() {
  const e = ref(false);
  return getCurrentInstance() && onMounted(() => {
    e.value = true;
  }), e;
}
function Ce(e) {
  const n = pe();
  return computed(() => (n.value, !!e()));
}
function fe(e, n = {}) {
  const { window: t = B } = n, o = Ce(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let r;
  const i = ref(false), a = (s) => {
    i.value = s.matches;
  }, l = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", a) : r.removeListener(a));
  }, u = watchEffect(() => {
    o.value && (l(), r = t.matchMedia(V(e)), "addEventListener" in r ? r.addEventListener("change", a) : r.addListener(a), i.value = r.matches);
  });
  return ue(() => {
    u(), l(), r = void 0;
  }), i;
}
var $e = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function De(e = {}) {
  const {
    type: n = "page",
    touch: t = true,
    resetOnTouchEnds: o = false,
    initialValue: r = { x: 0, y: 0 },
    window: i = B,
    target: a = i,
    scroll: l = true,
    eventFilter: u
  } = e;
  let s = null;
  const c = ref(r.x), f = ref(r.y), m = ref(null), v = typeof n == "function" ? n : $e[n], b = (p) => {
    const w = v(p);
    s = p, w && ([c.value, f.value] = w, m.value = "mouse");
  }, P = (p) => {
    if (p.touches.length > 0) {
      const w = v(p.touches[0]);
      w && ([c.value, f.value] = w, m.value = "touch");
    }
  }, I = () => {
    if (!s || !i)
      return;
    const p = v(s);
    s instanceof MouseEvent && p && (c.value = p[0] + i.scrollX, f.value = p[1] + i.scrollY);
  }, E = () => {
    c.value = r.x, f.value = r.y;
  }, H = u ? (p) => u(() => b(p), {}) : (p) => b(p), O = u ? (p) => u(() => P(p), {}) : (p) => P(p), _ = u ? () => u(() => I(), {}) : () => I();
  if (a) {
    const p = { passive: true };
    S(a, ["mousemove", "dragover"], H, p), t && n !== "movement" && (S(a, ["touchstart", "touchmove"], O, p), o && S(a, "touchend", E, p)), l && n === "page" && S(i, "scroll", _, { passive: true });
  }
  return {
    x: c,
    y: f,
    sourceType: m
  };
}
function ne(e, n = {}) {
  const {
    handleOutside: t = true,
    window: o = B
  } = n, r = n.type || "page", { x: i, y: a, sourceType: l } = De(n), u = ref(e ?? (o == null ? void 0 : o.document.body)), s = ref(0), c = ref(0), f = ref(0), m = ref(0), v = ref(0), b = ref(0), P = ref(true);
  let I = () => {
  };
  return o && (I = watch(
    [u, i, a],
    () => {
      const E = ce(u);
      if (!E)
        return;
      const {
        left: H,
        top: O,
        width: _,
        height: p
      } = E.getBoundingClientRect();
      f.value = H + (r === "page" ? o.pageXOffset : 0), m.value = O + (r === "page" ? o.pageYOffset : 0), v.value = p, b.value = _;
      const w = i.value - f.value, N = a.value - m.value;
      P.value = _ === 0 || p === 0 || w < 0 || N < 0 || w > _ || N > p, (t || !P.value) && (s.value = w, c.value = N);
    },
    { immediate: true }
  ), S(document, "mouseleave", () => {
    P.value = true;
  })), {
    x: i,
    y: a,
    sourceType: l,
    elementX: s,
    elementY: c,
    elementPositionX: f,
    elementPositionY: m,
    elementHeight: v,
    elementWidth: b,
    isOutside: P,
    stop: I
  };
}
function Me(e = {}) {
  const {
    window: n = B,
    initialWidth: t = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: r = true,
    includeScrollbar: i = true
  } = e, a = ref(t), l = ref(o), u = () => {
    n && (i ? (a.value = n.innerWidth, l.value = n.innerHeight) : (a.value = n.document.documentElement.clientWidth, l.value = n.document.documentElement.clientHeight));
  };
  if (u(), Be(u), S("resize", u, { passive: true }), r) {
    const s = fe("(orientation: portrait)");
    watch(s, () => u());
  }
  return { width: a, height: l };
}
function Ye() {
  return {
    livesInIframe: computed(() => {
      try {
        return window.self !== window.top && window.top !== void 0 && window.top !== null && "location" in window.top;
      } catch {
        return false;
      }
    })
  };
}
function oe(e, n, t) {
  return new Promise((o, r) => {
    let i = 0;
    function a() {
      i++;
      try {
        const l = t();
        l instanceof Promise ? l.then((u) => {
          u ? o(u) : i < e ? setTimeout(a, n) : o(null);
        }).catch((u) => {
          i < e ? setTimeout(a, n) : r(u);
        }) : l ? o(l) : i < e ? setTimeout(a, n) : o(null);
      } catch (l) {
        i < e ? setTimeout(a, n) : r(l);
      }
    }
    a();
  });
}
var M = {
  popup: {
    loading: "Loading",
    loadingAriaLabel: "Loading",
    openInCurrentPage: "Open in current page",
    openInCurrentPageAriaLabel: "Open in current page",
    iframeAriaLabel: "Inline link preview of link at {href}"
  }
};
var X = {
  popup: {
    loading: "加载中",
    loadingAriaLabel: "加载中",
    openInCurrentPage: "在当前页面打开",
    openInCurrentPageAriaLabel: "在当前页面打开",
    iframeAriaLabel: "在 {href} 的链接的行内链接预览"
  }
};
var Fe = {
  "zh-CN": X,
  "zh-Hans": X,
  zh: X,
  "en-US": M,
  en: M
};
function R(e, n) {
  const t = e.split(".");
  let o = n;
  for (const r of t)
    if (o = o == null ? void 0 : o[r], !o)
      return;
  return typeof o == "string" ? o : String(o);
}
function je(e, n, t) {
  const { locales: o, defaultLocales: r } = t;
  if (!o && !r || !e)
    return n;
  let i = o[e];
  i || (i = r[e], i || (i = M));
  const a = R(n, i);
  if (a)
    return a;
  const l = r[e];
  if (l) {
    const s = R(n, l);
    if (s)
      return s;
  }
  const u = R(n, M);
  return u || n;
}
function Xe() {
  const e = inject(Y, { locales: {} }), { lang: n } = Oe(), t = computed(() => n.value || "en");
  return {
    t(o, r) {
      const i = computed(() => je(t.value, o, {
        locales: e.locales || {},
        defaultLocales: Fe
      }));
      return i.value ? !r || !r.props ? i.value : computed(() => {
        let a = i.value;
        return Object.entries(r.props).forEach(([l, u]) => {
          a = a.replace(new RegExp(`{{${l}}}`, "g"), String(u));
        }), a;
      }).value : o;
    }
  };
}
var Re = ["href"];
var ze = {
  key: 0,
  class: "VPNolebaseInlinePreviewLinkPopupOpenBtnIcon",
  "i-icon-park-outline:full-screen-one": "",
  "inline-flex": "~",
  "ml-2": "",
  "items-center": "",
  "justify-center": "",
  "text-xs": ""
};
var Ue = defineComponent({
  __name: "LinkButton",
  props: {
    showExternalIcon: { type: Boolean },
    href: {}
  },
  setup(e) {
    const n = e;
    return (t, o) => (openBlock(), createElementBlock("a", {
      flex: "~",
      href: n.href,
      class: "VPNolebaseInlinePreviewLinkPopupOpenBtn text-$vp-c-brand-1 active:brightness-95 hover:brightness-97",
      transition: "all duration-200 ease",
      bg: "$vp-c-bg",
      border: "1 solid $vp-c-divider",
      shadow: "sm",
      absolute: "",
      "bottom-0": "",
      "m-4": "",
      "items-center": "",
      "rounded-lg": "",
      "px-4": "",
      "py-2": "",
      "text-sm": ""
    }, [
      renderSlot(t.$slots, "default", {}, void 0, true),
      n.showExternalIcon ? (openBlock(), createElementBlock("span", ze)) : createCommentVNode("", true)
    ], 8, Re));
  }
});
var de = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
};
var Ge = de(Ue, [["__scopeId", "data-v-a10fda58"]]);
var Ke = ["src", "aria-label"];
var Qe = ["aria-label"];
var qe = createBaseVNode("span", {
  "i-svg-spinners:3-dots-bounce": "",
  "text-3xl": ""
}, null, -1);
var Ze = { flex: "1" };
var Je = defineComponent({
  __name: "PopupIframe",
  props: {
    href: {}
  },
  setup(e) {
    const n = e, t = inject(Y, x), o = ref(true), { t: r } = Xe();
    async function i(s) {
      return await oe(50, 200, () => s.contentDocument ? s.contentDocument : i(s));
    }
    async function a(s, c) {
      return await oe(3, 100, () => {
        const f = s.querySelector(c);
        return f || null;
      });
    }
    async function l(s, c) {
      const f = await i(s);
      return f ? {
        selector: c,
        element: await a(f, c)
      } : {
        selector: c,
        element: null
      };
    }
    async function u(s) {
      const c = s.target, f = t.selectorsToBeHided || x.selectorsToBeHided || [];
      let m = [];
      try {
        m = await Promise.all(f.map((v) => l(c, v)));
      } catch (v) {
        console.error("VPNolebaseInlinePreviewLink:", v);
      }
      m.forEach((v) => {
        v.element ? v.element.style.setProperty("display", "none", "important") : console.warn(`VPNolebaseInlinePreviewLink: desired selecting element with selector '${v.selector}' not found. Consider remove it from 'options.selectorsToBeHided' if it's not constantly rendered.`);
      }), t.handleIframeLoaded && (t.handleIframeLoaded instanceof Promise ? await t.handleIframeLoaded(window, c) : t.handleIframeLoaded(window, c)), setTimeout(() => {
        o.value = false;
      }, 250);
    }
    return (s, c) => (openBlock(), createElementBlock(Fragment, null, [
      withDirectives(createBaseVNode("iframe", {
        border: "none",
        "m-0": "",
        "w-full": "",
        "overflow-hidden": "",
        "rounded-lg": "",
        "p-0": "",
        class: "VPNolebaseInlinePreviewLinkPopupIframe",
        flex: "1",
        src: n.href,
        "aria-label": unref(r)("popup.iframeAriaLabel", { props: { href: n.href } }),
        onLoad: u
      }, null, 40, Ke), [
        [vShow, !o.value]
      ]),
      withDirectives(createBaseVNode("div", {
        flex: "~ col 1",
        "m-0": "",
        "w-full": "",
        "items-center": "",
        "justify-center": "",
        "p-0": "",
        class: "VPNolebaseInlinePreviewLinkPopupLoading bg-$vp-c-bg text-$vp-c-text-1",
        "aria-label": unref(r)("popup.loadingAriaLabel")
      }, [
        qe,
        createBaseVNode("span", null, toDisplayString(unref(r)("popup.loading")), 1)
      ], 8, Qe), [
        [vShow, o.value]
      ]),
      createVNode(Ge, {
        href: n.href,
        title: unref(r)("popup.openInCurrentPage"),
        "aria-label": unref(r)("popup.openInCurrentPage"),
        "show-external-icon": ""
      }, {
        default: withCtx(() => [
          createBaseVNode("span", Ze, toDisplayString(unref(r)("popup.openInCurrentPage")), 1)
        ]),
        _: 1
      }, 8, ["href", "title", "aria-label"])
    ], 64));
  }
});
var et = ["href"];
var tt = {
  key: 0,
  class: "link-preview-link-content-external-icon",
  "i-octicon:link-external-16": "",
  "mx-0.5": "",
  "h-4": "",
  "w-4": "",
  "align-middle": ""
};
var nt = defineComponent({
  __name: "InlineLinkPreview",
  props: {
    href: {}
  },
  setup(e) {
    const n = e, t = inject(Y, x), o = ref(), r = ref(), i = computed(() => t.popupWidth && t.popupWidth > 0 ? t.popupWidth : x.popupWidth || 600), a = computed(() => t.popupHeight && t.popupHeight > 0 ? t.popupHeight : x.popupHeight || 480), l = computed(() => t.popupDelay && t.popupDelay > 0 ? t.popupDelay : x.popupDelay || 1e3), u = computed(() => t.popupTeleportTargetSelector || x.popupTeleportTargetSelector || "body"), s = pe(), { width: c, height: f } = Me(), { livesInIframe: m } = Ye(), v = fe("(min-width: 768px)"), { isOutside: b } = ne(o), { isOutside: P } = ne(r), I = ref(false), E = ref(false);
    watch(o, (h) => {
      h && (h.addEventListener("mouseenter", () => {
        I.value = true;
      }), h.addEventListener("mouseleave", () => {
        I.value = false;
      }));
    }), watch(r, (h) => {
      h && (h.addEventListener("mouseenter", () => {
        E.value = true;
      }), h.addEventListener("mouseleave", () => {
        E.value = false;
      }));
    });
    const H = $(b, l.value), O = $(P, l.value), _ = $(I, l.value), p = $(E, l.value), w = ref(0), N = ref(0), F = ref(false), Q = computed(() => n.href.startsWith("#")), W = computed(() => {
      if (Q.value)
        return "";
      try {
        return new URL(n.href, window.location.href).host;
      } catch {
        return "";
      }
    }), q = computed(() => !window || !window.location || !W.value ? false : t.previewAllHostNames ? true : (t.previewLocalHostName === void 0 ? x.previewLocalHostName : t.previewLocalHostName) ? window.location.host === W.value : typeof t.handleShouldPreviewHostNames == "function" ? t.handleShouldPreviewHostNames(W.value) : Array.isArray(t.previewHostNamesBlocked) && t.previewHostNamesBlocked.includes(W.value) ? false : !!(Array.isArray(t.previewHostNamesAllowed) && t.previewHostNamesAllowed.includes(W.value))), ve = computed(() => !m.value && q.value && F.value);
    function C(h) {
      if (h) {
        setTimeout(() => {
          H.value && !_.value && O.value && !p.value && (F.value = false);
        }, 200);
        return;
      }
      if (!((_.value || p.value) && (!H.value || !O.value)) || !o.value)
        return;
      F.value = true;
      const { x: j, y: Z, right: he, height: me, width: we, bottom: ge } = o.value.getBoundingClientRect();
      he + i.value < c.value ? w.value = j + window.scrollX : w.value = j + window.scrollX - i.value + we, ge + a.value < f.value ? N.value = Z + window.scrollY + me + 4 : N.value = Z + window.scrollY - a.value - 4;
    }
    return watch(H, (h) => C(h)), watch(_, (h) => C(!h)), watch(O, (h) => C(h)), watch(p, (h) => C(!h)), (h, j) => (openBlock(), createElementBlock("a", {
      ref_key: "anchorElement",
      ref: o,
      class: "VPNolebaseInlinePreviewLink",
      relative: "",
      href: n.href
    }, [
      renderSlot(h.$slots, "default", {}, void 0, true),
      unref(s) && !Q.value && !q.value ? (openBlock(), createElementBlock("span", tt)) : createCommentVNode("", true),
      unref(s) && unref(v) ? (openBlock(), createBlock(Teleport, {
        key: 1,
        to: u.value
      }, [
        createVNode(TransitionGroup, { name: "fade" }, {
          default: withCtx(() => [
            unref(s) && ve.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "iframeWrapperElement",
              ref: r,
              flex: "~ col",
              absolute: "",
              "top-0": "",
              "z-100": "",
              "m-0": "",
              "overflow-hidden": "",
              "rounded-lg": "",
              "p-0": "",
              border: "1 solid $vp-c-divider",
              class: "VPNolebaseInlinePreviewLinkWrapper max-w-[100vw]",
              style: normalizeStyle({
                left: `${w.value}px`,
                top: `${N.value}px`,
                width: `${i.value}px`,
                height: `${a.value}px`
              }),
              shadow: "2xl"
            }, [
              createVNode(Je, {
                href: n.href
              }, null, 8, ["href"])
            ], 4)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 8, ["to"])) : createCommentVNode("", true)
    ], 8, et));
  }
});
var ot = de(nt, [["__scopeId", "data-v-f639faa6"]]);
var re = {
  VPNolebaseInlineLinkPreview: ot
};
var st = {
  install(e, n) {
    typeof n < "u" && typeof n == "object" && e.provide(Y, n);
    for (const t of Object.keys(re))
      e.component(t, re[t]);
  }
};
export {
  Y as InjectionKey,
  ot as NolebaseInlineLinkPreview,
  st as NolebaseInlineLinkPreviewPlugin
};
//# sourceMappingURL=@nolebase_vitepress-plugin-inline-link-preview.js.map
