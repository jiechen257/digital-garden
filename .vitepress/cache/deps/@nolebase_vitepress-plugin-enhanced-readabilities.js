import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  inject,
  isRef,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  popScopeId,
  pushScopeId,
  reactive,
  readonly,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  shallowRef,
  toDisplayString,
  toRef,
  unref,
  vModelRadio,
  vModelText,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives
} from "./chunk-FAIIFMHD.js";

// node_modules/.pnpm/@nolebase+vitepress-plugin-enhanced-readabilities@1.22.4_vitepress@1.0.0-rc.40/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/index.js
import { useData as Ce, withBase as St, useRoute as ze } from "vitepress";
var Q = Symbol("vitepress-nolebase-enhanced-readabilities");
var We = "vitepress-nolebase-enhanced-readabilities-layout-switch-mode";
var Lt = "vitepress-nolebase-enhanced-readabilities-content-layout-max-width";
var Mt = "vitepress-nolebase-enhanced-readabilities-page-layout-max-width";
var De = "vitepress-nolebase-enhanced-readabilities-spotlight-mode";
var Xe = "vitepress-nolebase-enhanced-readabilities-spotlight-styles";
var R = ((e) => (e[e.FullWidth = 1] = "FullWidth", e[e.Original = 3] = "Original", e[e.SidebarWidthAdjustableOnly = 4] = "SidebarWidthAdjustableOnly", e[e.BothWidthAdjustable = 5] = "BothWidthAdjustable", e))(R || {});
var Re = [
  1,
  3,
  4,
  5
  /* BothWidthAdjustable */
];
var ee = ((e) => (e[e.Under = 1] = "Under", e[e.Aside = 2] = "Aside", e))(ee || {});
function G(e) {
  return getCurrentScope() ? (onScopeDispose(e), true) : false;
}
function F(e) {
  return typeof e == "function" ? e() : unref(e);
}
var fe = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var At = (e) => e != null;
var Wt = Object.prototype.toString;
var Et = (e) => Wt.call(e) === "[object Object]";
var ie = () => {
};
function Ye(e, t) {
  function a(...i) {
    return new Promise((n, l) => {
      Promise.resolve(e(() => t.apply(this, i), { fn: t, thisArg: this, args: i })).then(n).catch(l);
    });
  }
  return a;
}
var qe = (e) => e();
function $t(e, t = {}) {
  let a, i, n = ie;
  const l = (d) => {
    clearTimeout(d), n(), n = ie;
  };
  return (d) => {
    const o = F(e), r = F(t.maxWait);
    return a && l(a), o <= 0 || r !== void 0 && r <= 0 ? (i && (l(i), i = null), Promise.resolve(d())) : new Promise((p, f) => {
      n = t.rejectOnCancel ? f : p, r && !i && (i = setTimeout(() => {
        a && l(a), i = null, p(d());
      }, r)), a = setTimeout(() => {
        i && l(i), i = null, p(d());
      }, o);
    });
  };
}
function Vt(e = qe) {
  const t = ref(true);
  function a() {
    t.value = false;
  }
  function i() {
    t.value = true;
  }
  const n = (...l) => {
    t.value && e(...l);
  };
  return { isActive: readonly(t), pause: a, resume: i, eventFilter: n };
}
function Ot(e) {
  return e || getCurrentInstance();
}
function Ee(e, t = 200, a = {}) {
  return Ye(
    $t(t, a),
    e
  );
}
function Pt(e, t, a = {}) {
  const {
    eventFilter: i = qe,
    ...n
  } = a;
  return watch(
    e,
    Ye(
      i,
      t
    ),
    n
  );
}
function Rt(e, t, a = {}) {
  const {
    eventFilter: i,
    ...n
  } = a, { eventFilter: l, pause: s, resume: d, isActive: o } = Vt(i);
  return { stop: Pt(
    e,
    t,
    {
      ...n,
      eventFilter: l
    }
  ), pause: s, resume: d, isActive: o };
}
function Ke(e, t = true, a) {
  Ot() ? onMounted(e, a) : t ? e() : nextTick(e);
}
function kt(e, t = 1e3, a = {}) {
  const {
    immediate: i = true,
    immediateCallback: n = false
  } = a;
  let l = null;
  const s = ref(false);
  function d() {
    l && (clearInterval(l), l = null);
  }
  function o() {
    s.value = false, d();
  }
  function r() {
    const p = F(t);
    p <= 0 || (s.value = true, n && e(), d(), l = setInterval(e, p));
  }
  if (i && fe && r(), isRef(t) || typeof t == "function") {
    const p = watch(t, () => {
      s.value && fe && r();
    });
    G(p);
  }
  return G(o), {
    isActive: s,
    pause: o,
    resume: r
  };
}
function Y(e) {
  var t;
  const a = F(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
var z = fe ? window : void 0;
var Nt = fe ? window.document : void 0;
function D(...e) {
  let t, a, i, n;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, i, n] = e, t = z) : [t, a, i, n] = e, !t)
    return ie;
  Array.isArray(a) || (a = [a]), Array.isArray(i) || (i = [i]);
  const l = [], s = () => {
    l.forEach((p) => p()), l.length = 0;
  }, d = (p, f, h, _) => (p.addEventListener(f, h, _), () => p.removeEventListener(f, h, _)), o = watch(
    () => [Y(t), F(n)],
    ([p, f]) => {
      if (s(), !p)
        return;
      const h = Et(f) ? { ...f } : f;
      l.push(
        ...a.flatMap((_) => i.map((g) => d(p, _, g, h)))
      );
    },
    { immediate: true, flush: "post" }
  ), r = () => {
    o(), s();
  };
  return G(r), r;
}
function K() {
  const e = ref(false);
  return getCurrentInstance() && onMounted(() => {
    e.value = true;
  }), e;
}
function re(e) {
  const t = K();
  return computed(() => (t.value, !!e()));
}
function jt(e, t = {}) {
  const {
    immediate: a = true,
    fpsLimit: i = void 0,
    window: n = z
  } = t, l = ref(false), s = i ? 1e3 / i : null;
  let d = 0, o = null;
  function r(h) {
    if (!l.value || !n)
      return;
    const _ = h - (d || h);
    if (s && _ < s) {
      o = n.requestAnimationFrame(r);
      return;
    }
    e({ delta: _, timestamp: h }), d = h, o = n.requestAnimationFrame(r);
  }
  function p() {
    !l.value && n && (l.value = true, o = n.requestAnimationFrame(r));
  }
  function f() {
    l.value = false, o != null && n && (n.cancelAnimationFrame(o), o = null);
  }
  return a && p(), G(f), {
    isActive: readonly(l),
    pause: f,
    resume: p
  };
}
function te(e, t = {}) {
  const { window: a = z } = t, i = re(() => a && "matchMedia" in a && typeof a.matchMedia == "function");
  let n;
  const l = ref(false), s = (r) => {
    l.value = r.matches;
  }, d = () => {
    n && ("removeEventListener" in n ? n.removeEventListener("change", s) : n.removeListener(s));
  }, o = watchEffect(() => {
    i.value && (d(), n = a.matchMedia(F(e)), "addEventListener" in n ? n.addEventListener("change", s) : n.addListener(s), l.value = n.matches);
  });
  return G(() => {
    o(), d(), n = void 0;
  }), l;
}
var ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var pe = "__vueuse_ssr_handlers__";
var Ht = Tt();
function Tt() {
  return pe in ce || (ce[pe] = ce[pe] || {}), ce[pe];
}
function Ft(e, t) {
  return Ht[e] || t;
}
function Bt(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var It = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
};
var ke = "vueuse-storage";
function ae(e, t, a, i = {}) {
  var n;
  const {
    flush: l = "pre",
    deep: s = true,
    listenToStorageChanges: d = true,
    writeDefaults: o = true,
    mergeDefaults: r = false,
    shallow: p,
    window: f = z,
    eventFilter: h,
    onError: _ = (x) => {
      console.error(x);
    },
    initOnMounted: g
  } = i, m = (p ? shallowRef : ref)(typeof t == "function" ? t() : t);
  if (!a)
    try {
      a = Ft("getDefaultStorage", () => {
        var x;
        return (x = z) == null ? void 0 : x.localStorage;
      })();
    } catch (x) {
      _(x);
    }
  if (!a)
    return m;
  const w = F(t), W = Bt(w), N = (n = i.serializer) != null ? n : It[W], { pause: L, resume: $ } = Rt(
    m,
    () => b(m.value),
    { flush: l, deep: s, eventFilter: h }
  );
  return f && d && Ke(() => {
    D(f, "storage", T), D(f, ke, C), g && T();
  }), g || T(), m;
  function b(x) {
    try {
      if (x == null)
        a.removeItem(e);
      else {
        const H = N.write(x), X = a.getItem(e);
        X !== H && (a.setItem(e, H), f && f.dispatchEvent(new CustomEvent(ke, {
          detail: {
            key: e,
            oldValue: X,
            newValue: H,
            storageArea: a
          }
        })));
      }
    } catch (H) {
      _(H);
    }
  }
  function V(x) {
    const H = x ? x.newValue : a.getItem(e);
    if (H == null)
      return o && w != null && a.setItem(e, N.write(w)), w;
    if (!x && r) {
      const X = N.read(H);
      return typeof r == "function" ? r(X, w) : W === "object" && !Array.isArray(X) ? { ...w, ...X } : X;
    } else
      return typeof H != "string" ? H : N.read(H);
  }
  function C(x) {
    T(x.detail);
  }
  function T(x) {
    if (!(x && x.storageArea !== a)) {
      if (x && x.key == null) {
        m.value = w;
        return;
      }
      if (!(x && x.key !== e)) {
        L();
        try {
          (x == null ? void 0 : x.newValue) !== N.write(m.value) && (m.value = V(x));
        } catch (H) {
          _(H);
        } finally {
          x ? nextTick($) : $();
        }
      }
    }
  }
}
function Ut(e, t, a = {}) {
  const { window: i = z, ...n } = a;
  let l;
  const s = re(() => i && "MutationObserver" in i), d = () => {
    l && (l.disconnect(), l = void 0);
  }, o = watch(
    () => Y(e),
    (f) => {
      d(), s.value && i && f && (l = new MutationObserver(t), l.observe(f, n));
    },
    { immediate: true }
  ), r = () => l == null ? void 0 : l.takeRecords(), p = () => {
    d(), o();
  };
  return G(p), {
    isSupported: s,
    stop: p,
    takeRecords: r
  };
}
function Ct(e, t, a = {}) {
  const { window: i = z, ...n } = a;
  let l;
  const s = re(() => i && "ResizeObserver" in i), d = () => {
    l && (l.disconnect(), l = void 0);
  }, o = computed(() => Array.isArray(e) ? e.map((f) => Y(f)) : [Y(e)]), r = watch(
    o,
    (f) => {
      if (d(), s.value && i) {
        l = new ResizeObserver(t);
        for (const h of f)
          h && l.observe(h, n);
      }
    },
    { immediate: true, flush: "post", deep: true }
  ), p = () => {
    d(), r();
  };
  return G(p), {
    isSupported: s,
    stop: p
  };
}
function we(e, t = {}) {
  const {
    reset: a = true,
    windowResize: i = true,
    windowScroll: n = true,
    immediate: l = true
  } = t, s = ref(0), d = ref(0), o = ref(0), r = ref(0), p = ref(0), f = ref(0), h = ref(0), _ = ref(0);
  function g() {
    const m = Y(e);
    if (!m) {
      a && (s.value = 0, d.value = 0, o.value = 0, r.value = 0, p.value = 0, f.value = 0, h.value = 0, _.value = 0);
      return;
    }
    const w = m.getBoundingClientRect();
    s.value = w.height, d.value = w.bottom, o.value = w.left, r.value = w.right, p.value = w.top, f.value = w.width, h.value = w.x, _.value = w.y;
  }
  return Ct(e, g), watch(() => Y(e), (m) => !m && g()), Ut(e, g, {
    attributeFilter: ["style", "class"]
  }), n && D("scroll", g, { capture: true, passive: true }), i && D("resize", g, { passive: true }), Ke(() => {
    l && g();
  }), {
    height: s,
    bottom: d,
    left: o,
    right: r,
    top: p,
    width: f,
    x: h,
    y: _,
    update: g
  };
}
function zt(e) {
  const {
    x: t,
    y: a,
    document: i = Nt,
    multiple: n,
    interval: l = "requestAnimationFrame",
    immediate: s = true
  } = e, d = re(() => F(n) ? i && "elementsFromPoint" in i : i && "elementFromPoint" in i), o = ref(null), r = () => {
    var f, h;
    o.value = F(n) ? (f = i == null ? void 0 : i.elementsFromPoint(F(t), F(a))) != null ? f : [] : (h = i == null ? void 0 : i.elementFromPoint(F(t), F(a))) != null ? h : null;
  }, p = l === "requestAnimationFrame" ? jt(r, { immediate: s }) : kt(r, l, { immediate: s });
  return {
    isSupported: d,
    element: o,
    ...p
  };
}
function Je(e, t = {}) {
  const {
    delayEnter: a = 0,
    delayLeave: i = 0,
    window: n = z
  } = t, l = ref(false);
  let s;
  const d = (o) => {
    const r = o ? a : i;
    s && (clearTimeout(s), s = void 0), r ? s = setTimeout(() => l.value = o, r) : l.value = o;
  };
  return n && (D(e, "mouseenter", () => d(true), { passive: true }), D(e, "mouseleave", () => d(false), { passive: true })), l;
}
function Dt(e, t, a = {}) {
  const {
    root: i,
    rootMargin: n = "0px",
    threshold: l = 0.1,
    window: s = z,
    immediate: d = true
  } = a, o = re(() => s && "IntersectionObserver" in s), r = computed(() => {
    const g = F(e);
    return (Array.isArray(g) ? g : [g]).map(Y).filter(At);
  });
  let p = ie;
  const f = ref(d), h = o.value ? watch(
    () => [r.value, Y(i), f.value],
    ([g, m]) => {
      if (p(), !f.value || !g.length)
        return;
      const w = new IntersectionObserver(
        t,
        {
          root: Y(m),
          rootMargin: n,
          threshold: l
        }
      );
      g.forEach((W) => W && w.observe(W)), p = () => {
        w.disconnect(), p = ie;
      };
    },
    { immediate: d, flush: "post" }
  ) : ie, _ = () => {
    p(), h(), f.value = false;
  };
  return G(_), {
    isSupported: o,
    isActive: f,
    pause() {
      p(), f.value = false;
    },
    resume() {
      f.value = true;
    },
    stop: _
  };
}
function Xt(e, t = {}) {
  const { window: a = z, scrollTarget: i } = t, n = ref(false);
  return Dt(
    e,
    (l) => {
      let s = n.value, d = 0;
      for (const o of l)
        o.time >= d && (d = o.time, s = o.isIntersecting);
      n.value = s;
    },
    {
      root: i,
      window: a,
      threshold: 0
    }
  ), n;
}
function $e(e, t, a = {}) {
  const { window: i = z } = a;
  return ae(e, t, i == null ? void 0 : i.localStorage, a);
}
var Yt = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function Ge(e = {}) {
  const {
    type: t = "page",
    touch: a = true,
    resetOnTouchEnds: i = false,
    initialValue: n = { x: 0, y: 0 },
    window: l = z,
    target: s = l,
    scroll: d = true,
    eventFilter: o
  } = e;
  let r = null;
  const p = ref(n.x), f = ref(n.y), h = ref(null), _ = typeof t == "function" ? t : Yt[t], g = (b) => {
    const V = _(b);
    r = b, V && ([p.value, f.value] = V, h.value = "mouse");
  }, m = (b) => {
    if (b.touches.length > 0) {
      const V = _(b.touches[0]);
      V && ([p.value, f.value] = V, h.value = "touch");
    }
  }, w = () => {
    if (!r || !l)
      return;
    const b = _(r);
    r instanceof MouseEvent && b && (p.value = b[0] + l.scrollX, f.value = b[1] + l.scrollY);
  }, W = () => {
    p.value = n.x, f.value = n.y;
  }, N = o ? (b) => o(() => g(b), {}) : (b) => g(b), L = o ? (b) => o(() => m(b), {}) : (b) => m(b), $ = o ? () => o(() => w(), {}) : () => w();
  if (s) {
    const b = { passive: true };
    D(s, ["mousemove", "dragover"], N, b), a && t !== "movement" && (D(s, ["touchstart", "touchmove"], L, b), i && D(s, "touchend", W, b)), d && t === "page" && D(l, "scroll", $, { passive: true });
  }
  return {
    x: p,
    y: f,
    sourceType: h
  };
}
function qt(e, t = {}) {
  const {
    handleOutside: a = true,
    window: i = z
  } = t, n = t.type || "page", { x: l, y: s, sourceType: d } = Ge(t), o = ref(e ?? (i == null ? void 0 : i.document.body)), r = ref(0), p = ref(0), f = ref(0), h = ref(0), _ = ref(0), g = ref(0), m = ref(true);
  let w = () => {
  };
  return i && (w = watch(
    [o, l, s],
    () => {
      const W = Y(o);
      if (!W)
        return;
      const {
        left: N,
        top: L,
        width: $,
        height: b
      } = W.getBoundingClientRect();
      f.value = N + (n === "page" ? i.pageXOffset : 0), h.value = L + (n === "page" ? i.pageYOffset : 0), _.value = b, g.value = $;
      const V = l.value - f.value, C = s.value - h.value;
      m.value = $ === 0 || b === 0 || V < 0 || C < 0 || V > $ || C > b, (a || !m.value) && (r.value = V, p.value = C);
    },
    { immediate: true }
  ), D(document, "mouseleave", () => {
    m.value = true;
  })), {
    x: l,
    y: s,
    sourceType: d,
    elementX: r,
    elementY: p,
    elementPositionX: f,
    elementPositionY: h,
    elementHeight: _,
    elementWidth: g,
    isOutside: m,
    stop: w
  };
}
var ve = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
var Qe = /^(?:[a-z]+:|\/\/)/i;
var Kt = /#.*$/;
var Jt = /[?#].*$/;
var Gt = /(?:(^|\/)index)?\.(?:md|html)$/;
var Ze = typeof document < "u";
function Qt(e, t, a = false) {
  if (t === void 0)
    return false;
  if (e = Ne(`/${e}`), a)
    return new RegExp(t).test(e);
  if (Ne(t) !== e)
    return false;
  const i = t.match(Kt);
  return i ? (Ze ? location.hash : "") === i[0] : true;
}
function Ne(e) {
  return decodeURI(e).replace(Jt, "").replace(Gt, "$1");
}
function Zt(e) {
  return Qe.test(e);
}
var ge = /* @__PURE__ */ new Set();
function ea(e) {
  if (ge.size === 0) {
    const a = typeof process == "object" && process.env.VITE_EXTRA_EXTENSIONS || (ve == null ? void 0 : ve.VITE_EXTRA_EXTENSIONS) || "";
    ("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" + (a && typeof a == "string" ? "," + a : "")).split(",").forEach((i) => ge.add(i));
  }
  const t = e.split(".").pop();
  return t == null || !ge.has(t.toLowerCase());
}
var Ve = ref();
var et = false;
var ye = 0;
function ta(e) {
  const t = ref(false);
  if (Ze) {
    !et && aa(), ye++;
    const a = watch(Ve, (i) => {
      var n, l, s;
      i === e.el.value || (n = e.el.value) != null && n.contains(i) ? (t.value = true, (l = e.onFocus) == null || l.call(e)) : (t.value = false, (s = e.onBlur) == null || s.call(e));
    });
    onUnmounted(() => {
      a(), ye--, ye || na();
    });
  }
  return readonly(t);
}
function aa() {
  document.addEventListener("focusin", tt), et = true, Ve.value = document.activeElement;
}
function na() {
  document.removeEventListener("focusin", tt);
}
function tt() {
  Ve.value = document.activeElement;
}
var U = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [i, n] of t)
    a[i] = n;
  return a;
};
var ia = {};
var la = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
var oa = createBaseVNode("path", { d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" }, null, -1);
var sa = [
  oa
];
function ra(e, t) {
  return openBlock(), createElementBlock("svg", la, sa);
}
var ua = U(ia, [["render", ra]]);
var da = {};
var ca = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
var pa = createBaseVNode("circle", {
  cx: "12",
  cy: "12",
  r: "2"
}, null, -1);
var ha = createBaseVNode("circle", {
  cx: "19",
  cy: "12",
  r: "2"
}, null, -1);
var fa = createBaseVNode("circle", {
  cx: "5",
  cy: "12",
  r: "2"
}, null, -1);
var ma = [
  pa,
  ha,
  fa
];
function ba(e, t) {
  return openBlock(), createElementBlock("svg", ca, ma);
}
var va = U(da, [["render", ba]]);
var at = Ce;
function ga(e) {
  const { pathname: t, search: a, hash: i, protocol: n } = new URL(e, "http://a.com");
  if (Zt(e) || e.startsWith("#") || !n.startsWith("http") || !ea(t))
    return e;
  const { site: l } = at(), s = t.endsWith("/") || t.endsWith(".html") ? e : e.replace(/(?:(^\.+)\/)?.*$/, `$1${t.replace(/(\.md)?$/, l.value.cleanUrls ? "" : ".html")}${a}${i}`);
  return St(s);
}
var ya = defineComponent({
  __name: "VPLink",
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(e) {
    const t = e, a = computed(() => t.tag ?? (t.href ? "a" : "span")), i = computed(() => t.href && Qe.test(t.href));
    return (n, l) => (openBlock(), createBlock(resolveDynamicComponent(a.value), {
      class: normalizeClass(["VPLink", {
        link: n.href,
        "vp-external-link-icon": i.value,
        "no-icon": n.noIcon
      }]),
      href: n.href ? unref(ga)(n.href) : void 0,
      target: n.target ?? (i.value ? "_blank" : void 0),
      rel: n.rel ?? (i.value ? "noreferrer" : void 0)
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "href", "target", "rel"]));
  }
});
var _a = { class: "VPMenuLink" };
var xa = defineComponent({
  __name: "VPMenuLink",
  props: {
    item: {}
  },
  setup(e) {
    const { page: t } = at();
    return (a, i) => (openBlock(), createElementBlock("div", _a, [
      createVNode(ya, {
        class: normalizeClass({ active: unref(Qt)(unref(t).relativePath, a.item.activeMatch || a.item.link, !!a.item.activeMatch) }),
        href: a.item.link,
        target: a.item.target,
        rel: a.item.rel
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(a.item.text), 1)
        ]),
        _: 1
      }, 8, ["class", "href", "target", "rel"])
    ]));
  }
});
var nt = U(xa, [["__scopeId", "data-v-f1036591"]]);
var wa = { class: "VPMenuGroup" };
var Sa = {
  key: 0,
  class: "title"
};
var La = defineComponent({
  __name: "VPMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(e) {
    return (t, a) => (openBlock(), createElementBlock("div", wa, [
      t.text ? (openBlock(), createElementBlock("p", Sa, toDisplayString(t.text), 1)) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList(t.items, (i) => (openBlock(), createElementBlock(Fragment, null, [
        "link" in i ? (openBlock(), createBlock(nt, {
          key: 0,
          item: i
        }, null, 8, ["item"])) : createCommentVNode("", true)
      ], 64))), 256))
    ]));
  }
});
var Ma = U(La, [["__scopeId", "data-v-e14ea165"]]);
var Aa = { class: "VPMenu" };
var Wa = {
  key: 0,
  class: "items"
};
var Ea = defineComponent({
  __name: "VPMenu",
  props: {
    items: {}
  },
  setup(e) {
    return (t, a) => (openBlock(), createElementBlock("div", Aa, [
      t.items ? (openBlock(), createElementBlock("div", Wa, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t.items, (i) => (openBlock(), createElementBlock(Fragment, {
          key: i.text
        }, [
          "link" in i ? (openBlock(), createBlock(nt, {
            key: 0,
            item: i
          }, null, 8, ["item"])) : (openBlock(), createBlock(Ma, {
            key: 1,
            text: i.text,
            items: i.items
          }, null, 8, ["text", "items"]))
        ], 64))), 128))
      ])) : createCommentVNode("", true),
      renderSlot(t.$slots, "default", {}, void 0, true)
    ]));
  }
});
var $a = U(Ea, [["__scopeId", "data-v-c11de908"]]);
var Va = ["aria-expanded", "aria-label"];
var Oa = {
  key: 0,
  class: "text"
};
var Pa = ["innerHTML"];
var Ra = { class: "menu" };
var ka = defineComponent({
  __name: "VPFlyout",
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(e) {
    const t = ref(false), a = ref();
    ta({ el: a, onBlur: i });
    function i() {
      t.value = false;
    }
    return (n, l) => (openBlock(), createElementBlock("div", {
      class: "VPFlyout",
      ref_key: "el",
      ref: a,
      onMouseenter: l[1] || (l[1] = (s) => t.value = true),
      onMouseleave: l[2] || (l[2] = (s) => t.value = false)
    }, [
      createBaseVNode("button", {
        type: "button",
        class: "button",
        "aria-haspopup": "true",
        "aria-expanded": t.value,
        "aria-label": n.label,
        onClick: l[0] || (l[0] = (s) => t.value = !t.value)
      }, [
        n.button || n.icon ? (openBlock(), createElementBlock("span", Oa, [
          n.icon ? (openBlock(), createBlock(resolveDynamicComponent(n.icon), {
            key: 0,
            class: "option-icon"
          })) : createCommentVNode("", true),
          n.button ? (openBlock(), createElementBlock("span", {
            key: 1,
            innerHTML: n.button
          }, null, 8, Pa)) : createCommentVNode("", true),
          createVNode(ua, { class: "text-icon" })
        ])) : (openBlock(), createBlock(va, {
          key: 1,
          class: "icon"
        }))
      ], 8, Va),
      createBaseVNode("div", Ra, [
        createVNode($a, { items: n.items }, {
          default: withCtx(() => [
            renderSlot(n.$slots, "default", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["items"])
      ])
    ], 544));
  }
});
var Na = U(ka, [["__scopeId", "data-v-ab7d6456"]]);
var me = {
  title: {
    title: "Enhanced Readability",
    titleAriaLabel: "Enhanced Readability"
  },
  layoutSwitch: {
    title: "Layout Switch",
    titleHelpMessage: "Adjust the layout style of VitePress to adapt to different reading needs and screens.",
    titleAriaLabel: "Layout Switch",
    titleScreenNavWarningMessage: "No available layout can be switched in mobile screen.",
    optionFullWidth: "Expand all",
    optionFullWidthAriaLabel: "Expand all",
    optionFullWidthHelpMessage: "The sidebar and content area occupy the entire width of the screen.",
    optionSidebarWidthAdjustableOnly: "Expand sidebar with adjustable values",
    optionSidebarWidthAdjustableOnlyAriaLabel: "Expand sidebar with adjustable values",
    optionSidebarWidthAdjustableOnlyHelpMessage: "Expand sidebar width and add a new slider for user to choose and customize their desired width of the maximum width of sidebar can go, but the content area width will remain the same.",
    optionBothWidthAdjustable: "Expand all with adjustable values",
    optionBothWidthAdjustableAriaLabel: "Expand all with adjustable values",
    optionBothWidthAdjustableHelpMessage: "Expand both sidebar and document content and add two new slider for user to choose and customize their desired width of the maximum width of either sidebar or document content can go.",
    optionOriginalWidth: "Original width",
    optionOriginalWidthAriaLabel: "Original width",
    optionOriginalWidthHelpMessage: "The original layout width of VitePress",
    contentLayoutMaxWidth: {
      title: "Content Layout Max Width",
      titleAriaLabel: "Content Layout Max Width",
      titleHelpMessage: "Adjust the exact value of the document content width of VitePress layout to adapt to different reading needs and screens.",
      titleScreenNavWarningMessage: "Content Layout Max Width is not available in mobile screen temporarily.",
      slider: "Adjust the maximum width of the content layout",
      sliderAriaLabel: "Adjust the maximum width of the content layout",
      sliderHelpMessage: "A ranged slider for user to choose and customize their desired width of the maximum width of the content layout can go."
    },
    pageLayoutMaxWidth: {
      title: "Page Layout Max Width",
      titleAriaLabel: "Page Layout Max Width",
      titleHelpMessage: "Adjust the exact value of the page width of VitePress layout to adapt to different reading needs and screens.",
      titleScreenNavWarningMessage: "Page Layout Max Width is not available in mobile screen temporarily.",
      slider: "Adjust the maximum width of the page layout",
      sliderAriaLabel: "Adjust the maximum width of the page layout",
      sliderHelpMessage: "A ranged slider for user to choose and customize their desired width of the maximum width of the page layout can go."
    }
  },
  spotlight: {
    title: "Spotlight",
    titleAriaLabel: "Spotlight",
    titleHelpMessage: "Highlight the line where the mouse is currently hovering in the content to optimize for users who may have reading and focusing difficulties.",
    titleScreenNavWarningMessage: "Spotlight is not available in mobile screen temporarily.",
    optionOn: "On",
    optionOnAriaLabel: "On",
    optionOnHelpMessage: "Turn on Spotlight.",
    optionOff: "Off",
    optionOffAriaLabel: "Off",
    optionOffHelpMessage: "Turn off Spotlight.",
    styles: {
      title: "Spotlight Styles",
      titleAriaLabel: "Spotlight Styles",
      titleHelpMessage: "Adjust the styles of Spotlight.",
      titleScreenNavWarningMessage: "Spotlight Styles is not available in mobile screen temporarily.",
      optionUnder: "Under",
      optionUnderAriaLabel: "Under",
      optionUnderHelpMessage: "Add a solid background color underneath the hovering element to highlight where the cursor is currently hovering.",
      optionAside: "Aside",
      optionAsideAriaLabel: "Aside",
      optionAsideHelpMessage: "Add a fixed line with solid color aside the hovering element to highlight where the cursor is currently hovering."
    }
  }
};
var _e = {
  title: {
    title: "阅读增强",
    titleAriaLabel: "阅读增强"
  },
  layoutSwitch: {
    title: "布局切换",
    titleAriaLabel: "布局切换",
    titleHelpMessage: "调整 VitePress 的布局样式，以适配不同的阅读习惯和屏幕环境。",
    titleScreenNavWarningMessage: "移动端无可切换布局。",
    optionFullWidth: "全部展开",
    optionFullWidthAriaLabel: "全部展开",
    optionFullWidthHelpMessage: "使侧边栏和内容区域占据整个屏幕的全部宽度。",
    optionSidebarWidthAdjustableOnly: "全部展开，但侧边栏宽度可调",
    optionSidebarWidthAdjustableOnlyAriaLabel: "全部展开，但侧边栏宽度可调",
    optionSidebarWidthAdjustableOnlyHelpMessage: "侧边栏宽度可调，但内容区域宽度不变，调整后的侧边栏将可以占据整个屏幕的最大宽度。",
    optionBothWidthAdjustable: "全部展开，且侧边栏和内容区域宽度均可调",
    optionBothWidthAdjustableAriaLabel: "全部展开，且侧边栏和内容区域宽度均可调",
    optionBothWidthAdjustableHelpMessage: "侧边栏和内容区域宽度均可调，调整后的侧边栏和内容区域将可以占据整个屏幕的最大宽度。",
    optionOriginalWidth: "原始宽度",
    optionOriginalWidthAriaLabel: "原始宽度",
    optionOriginalWidthHelpMessage: "原始的 VitePress 默认布局宽度",
    contentLayoutMaxWidth: {
      title: "内容最大宽度",
      titleAriaLabel: "内容最大宽度",
      titleHelpMessage: "调整 VitePress 布局中内容区域的宽度，以适配不同的阅读习惯和屏幕环境。",
      titleScreenNavWarningMessage: "移动端暂不支持调整内容最大宽度。",
      slider: "调整内容最大宽度",
      sliderAriaLabel: "调整内容最大宽度",
      sliderHelpMessage: "一个可调整的滑块，用于选择和自定义内容最大宽度。"
    },
    pageLayoutMaxWidth: {
      title: "页面最大宽度",
      titleAriaLabel: "页面最大宽度",
      titleHelpMessage: "调整 VitePress 布局中页面的宽度，以适配不同的阅读习惯和屏幕环境。",
      titleScreenNavWarningMessage: "移动端暂不支持调整页面最大宽度。",
      slider: "调整页面最大宽度",
      sliderAriaLabel: "调整页面最大宽度",
      sliderHelpMessage: "一个可调整的滑块，用于选择和自定义页面最大宽度。"
    }
  },
  spotlight: {
    title: "聚光灯",
    titleAriaLabel: "聚光灯",
    titleHelpMessage: "支持在正文中高亮当前鼠标悬停的行和元素，以优化阅读和专注困难的用户的阅读体验。",
    titleScreenNavWarningMessage: "移动端暂不支持聚光灯。",
    optionOn: "开启",
    optionOnAriaLabel: "开启",
    optionOnHelpMessage: "开启聚光灯。",
    optionOff: "关闭",
    optionOffAriaLabel: "关闭",
    optionOffHelpMessage: "关闭聚光灯。",
    styles: {
      title: "聚光灯样式",
      titleAriaLabel: "聚光灯样式",
      titleHelpMessage: "调整聚光灯的样式。",
      titleScreenNavWarningMessage: "移动端暂不支持调整聚光灯样式。",
      optionUnder: "置于底部",
      optionUnderAriaLabel: "置于底部",
      optionUnderHelpMessage: "在当前鼠标悬停的元素下方添加一个纯色背景以突出显示当前鼠标悬停的位置。",
      optionAside: "置于侧边",
      optionAsideAriaLabel: "置于侧边",
      optionAsideHelpMessage: "在当前鼠标悬停的元素旁边添加一条固定的纯色线以突出显示当前鼠标悬停的位置。"
    }
  }
};
var ja = {
  "zh-CN": _e,
  "zh-Hans": _e,
  zh: _e,
  "en-US": me,
  en: me
};
function xe(e, t) {
  const a = e.split(".");
  let i = t;
  for (const n of a)
    if (i = i == null ? void 0 : i[n], !i)
      return;
  return typeof i == "string" ? i : String(i);
}
function Ha(e, t, a) {
  const { locales: i, defaultLocales: n } = a;
  if (!i && !n || !e)
    return t;
  let l = i[e];
  l || (l = n[e], l || (l = me));
  const s = xe(t, l);
  if (s)
    return s;
  const d = n[e];
  if (d) {
    const r = xe(t, d);
    if (r)
      return r;
  }
  const o = xe(t, me);
  return o || t;
}
function J() {
  const e = inject(Q, { locales: {} }), { lang: t } = Ce(), a = computed(() => t.value || "en");
  return {
    t(i, n) {
      const l = computed(() => Ha(a.value, i, {
        locales: e.locales || {},
        defaultLocales: ja
      }));
      return l.value ? !n || !n.props ? l.value : computed(() => {
        let s = l.value;
        return Object.entries(n.props).forEach(([d, o]) => {
          s = s.replace(new RegExp(`{{${d}}}`, "g"), String(o));
        }), s;
      }).value : i;
    }
  };
}
var Ta = {};
var Fa = {
  class: "VPNolebaseEnhancedReadabilitiesMenuIcon i-icon-park-outline:book-open",
  "h-5": "",
  "w-5": ""
};
function Ba(e, t) {
  return openBlock(), createElementBlock("span", Fa);
}
var Ia = U(Ta, [["render", Ba]]);
function Oe() {
  const e = K();
  return {
    trigger: (t) => {
      t.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchAnimated"), Ee(() => {
        e.value && t && t.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchAnimated");
      }, 5e3)();
    }
  };
}
var Ua = ["title", "disabled"];
var Ca = ["value", "name", "checked", "aria-checked", "disabled"];
var za = {
  "inline-flex": "~",
  "items-center": "",
  "align-middle": ""
};
var Da = { key: 1 };
var Xa = defineComponent({
  __name: "MenuOption",
  props: {
    name: {},
    value: {},
    icon: {},
    text: {},
    title: {},
    disabled: { type: Boolean },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, i = t, n = computed({
      get: () => a.modelValue,
      set: (l) => i("update:modelValue", l)
    });
    return (l, s) => (openBlock(), createElementBlock("label", {
      title: a.title,
      class: normalizeClass(["VPNolebaseEnhancedReadabilitiesMenuOption", { active: n.value === a.value && !a.disabled, disabled: a.disabled }]),
      disabled: a.disabled,
      text: "[14px]",
      "w-full": "",
      "inline-flex": "",
      "cursor-pointer": "",
      "select-none": "",
      "items-center": "",
      "justify-center": "",
      "rounded-md": "",
      "px-3": "",
      "py-2": "",
      "font-medium": ""
    }, [
      withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": s[0] || (s[0] = (d) => n.value = d),
        type: "radio",
        value: a.value,
        name: a.name,
        checked: n.value === a.value,
        "aria-checked": n.value === a.value,
        disabled: a.disabled,
        role: "radio",
        hidden: ""
      }, null, 8, Ca), [
        [vModelRadio, n.value]
      ]),
      createBaseVNode("span", za, [
        a.icon ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(a.icon),
          "aria-hidden": "true"
        }, null, 2)) : createCommentVNode("", true),
        a.text ? (openBlock(), createElementBlock("span", Da, toDisplayString(a.text), 1)) : createCommentVNode("", true)
      ])
    ], 10, Ua));
  }
});
var Ya = {
  flex: "~ row",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
  "w-full": "",
  "appearance-none": "",
  "rounded-lg": "",
  "rounded-md": "",
  "border-none": "",
  "p-1": "",
  "space-x-2": ""
};
var ue = defineComponent({
  __name: "MenuOptions",
  props: {
    disabled: { type: Boolean },
    modelValue: {},
    options: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, i = t, n = computed({
      get: () => a.modelValue,
      set: (l) => i("update:modelValue", l)
    });
    return (l, s) => (openBlock(), createElementBlock("fieldset", Ya, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(a.options, (d) => (openBlock(), createBlock(Xa, {
        key: d.name,
        modelValue: n.value,
        "onUpdate:modelValue": s[0] || (s[0] = (o) => n.value = o),
        name: d.name,
        icon: d.icon,
        title: d.title,
        text: d.text,
        "aria-label": d.ariaLabel,
        disabled: a.disabled,
        value: d.value
      }, null, 8, ["modelValue", "name", "icon", "title", "text", "aria-label", "disabled", "value"]))), 128))
    ]));
  }
});
var qa = { key: 1 };
var Ka = defineComponent({
  __name: "MenuTitle",
  props: {
    title: {},
    icon: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, i) => (openBlock(), createElementBlock("h3", {
      class: normalizeClass(["VPNolebaseEnhancedReadabilitiesMenuTitle", { disabled: !!t.disabled }]),
      text: "[14px] $vp-nolebase-enhanced-readabilities-menu-text-color",
      "inline-flex": "",
      "select-none": "",
      "items-center": "",
      "align-middle": "",
      "font-medium": ""
    }, [
      t.icon ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(t.icon),
        "mr-1": "",
        "aria-hidden": "true"
      }, null, 2)) : createCommentVNode("", true),
      t.title ? (openBlock(), createElementBlock("span", qa, toDisplayString(t.title), 1)) : createCommentVNode("", true),
      renderSlot(a.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var Z = U(Ka, [["__scopeId", "data-v-e60d9e67"]]);
var Ja = defineComponent({
  __name: "MenuHelp",
  props: {
    menuTitleElementRef: {},
    isPoppedUp: { type: Boolean }
  },
  emits: ["update:isPoppedUp"],
  setup(e, { emit: t }) {
    const a = e, i = t, n = toRef(a, "menuTitleElementRef"), l = ref(), s = ref(), d = K(), o = Je(l), r = we(n), p = we(s), f = computed(() => ({
      top: `${r.top.value}px`,
      left: `${r.left.value - p.width.value - 16}px`
    }));
    return watch(o, (h) => {
      i("update:isPoppedUp", h);
    }), watch(o, () => {
      r.update(), p.update();
    }, {
      flush: "pre"
    }), (h, _) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("span", {
        ref_key: "helpElementRef",
        ref: l,
        text: "$vp-nolebase-enhanced-readabilities-menu-text-color",
        class: "i-carbon:help-filled opacity-50 hover:opacity-100",
        transition: "all duration-200 ease",
        "cursor-help": ""
      }, null, 512),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            unref(d) ? withDirectives((openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "popupElementRef",
              ref: s,
              style: normalizeStyle(f.value),
              bg: "$vp-c-bg-elv",
              text: "$vp-nolebase-enhanced-readabilities-menu-text-color",
              border: "1 solid $vp-c-divider",
              "pointer-events-none": "",
              fixed: "",
              "z-100": "",
              "rounded-xl": "",
              "p-4": "",
              "shadow-xl": ""
            }, [
              renderSlot(h.$slots, "default", {}, void 0, true)
            ], 4)), [
              [vShow, unref(o)]
            ]) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ]))
    ], 64));
  }
});
var de = U(Ja, [["__scopeId", "data-v-7bf7b770"]]);
var Ga = {
  "space-y-2": "",
  role: "radiogroup"
};
var Qa = {
  "text-md": "",
  "mb-1": "",
  "font-semibold": ""
};
var Za = {
  text: "sm",
  "mb-2": "",
  "max-w-100": ""
};
var en = {
  "space-y-2": "",
  class: "VPNolebaseEnhancedReadabilitiesMenu"
};
var tn = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var an = {
  text: "sm",
  "mb-1": "",
  flex: "~",
  "items-center": "",
  "align-middle": ""
};
var nn = createBaseVNode("span", {
  "i-icon-park-outline:full-screen-one": "",
  "mr-1": ""
}, null, -1);
var ln = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var on = {
  text: "sm",
  "mb-1": "",
  flex: "~",
  "items-center": "",
  "align-middle": ""
};
var sn = createBaseVNode("span", {
  "i-icon-park-outline:full-screen-two": "",
  "mr-1": ""
}, null, -1);
var rn = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var un = {
  text: "sm",
  "mb-1": "",
  flex: "~",
  "items-center": "",
  "align-middle": ""
};
var dn = createBaseVNode("span", {
  "i-icon-park-outline:full-screen": "",
  "mr-1": ""
}, null, -1);
var cn = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var pn = {
  text: "sm",
  "mb-1": "",
  flex: "~",
  "items-center": "",
  "align-middle": ""
};
var hn = createBaseVNode("span", {
  "i-icon-park-outline:off-screen": "",
  "mr-1": ""
}, null, -1);
var it = defineComponent({
  __name: "LayoutSwitch",
  setup(e) {
    var _;
    const t = inject(Q, {}), a = ref(), i = ref(false), n = ref(false), l = ze(), s = K(), d = te("(min-width: 768px)"), o = $e(We, ((_ = t.layoutSwitch) == null ? void 0 : _.defaultMode) || R.Original), { t: r } = J(), { trigger: p } = Oe(), f = computed(() => [
      {
        value: R.FullWidth,
        title: r("layoutSwitch.optionFullWidth"),
        ariaLabel: r("layoutSwitch.optionFullWidthAriaLabel"),
        icon: "i-icon-park-outline:full-screen-one",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: R.SidebarWidthAdjustableOnly,
        title: r("layoutSwitch.optionSidebarWidthAdjustableOnly"),
        ariaLabel: r("layoutSwitch.optionSidebarWidthAdjustableOnlyAriaLabel"),
        icon: "i-icon-park-outline:full-screen-two",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: R.BothWidthAdjustable,
        title: r("layoutSwitch.optionBothWidthAdjustable"),
        ariaLabel: r("layoutSwitch.optionBothWidthAdjustableAriaLabel"),
        icon: "i-icon-park-outline:full-screen",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: R.Original,
        title: r("layoutSwitch.optionOriginalWidth"),
        ariaLabel: r("layoutSwitch.optionOriginalWidthAriaLabel"),
        icon: "i-icon-park-outline:off-screen",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      }
    ]);
    function h(g, m) {
      switch (g) {
        case R.FullWidth:
          m && p(document.body), document.body.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth"), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly"), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");
          break;
        case R.SidebarWidthAdjustableOnly:
          m && p(document.body), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth"), document.body.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly"), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");
          break;
        case R.BothWidthAdjustable:
          m && p(document.body), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth"), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly"), document.body.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");
          break;
        case R.Original:
          m && p(document.body), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth"), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly"), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");
          break;
      }
    }
    return watch(s, (g) => {
      var m;
      g && (h(o.value, false), Re.includes(o.value) || (o.value = ((m = t.layoutSwitch) == null ? void 0 : m.defaultMode) || R.BothWidthAdjustable));
    }), watch(o, (g) => {
      var m;
      s.value && (h(g, true), Re.includes(g) || (o.value = ((m = t.layoutSwitch) == null ? void 0 : m.defaultMode) || R.BothWidthAdjustable));
    }), watch(l, () => {
      h(o.value, true);
    }), watch(d, () => {
      d.value || (n.value = true);
    }), onMounted(() => {
      d.value || (n.value = true);
    }), (g, m) => {
      var w;
      return openBlock(), createElementBlock("div", Ga, [
        createBaseVNode("div", {
          ref_key: "menuTitleElementRef",
          ref: a,
          flex: "",
          "items-center": ""
        }, [
          createVNode(Z, {
            icon: "i-icon-park-outline:layout-one",
            title: unref(r)("layoutSwitch.title"),
            "aria-label": unref(r)("layoutSwitch.titleArialLabel") || unref(r)("layoutSwitch.title"),
            flex: "1",
            disabled: n.value,
            "pr-4": ""
          }, null, 8, ["title", "aria-label", "disabled"]),
          (w = unref(t).layoutSwitch) != null && w.disableHelp ? createCommentVNode("", true) : (openBlock(), createBlock(de, {
            key: 0,
            "is-popped-up": i.value,
            "onUpdate:isPoppedUp": m[0] || (m[0] = (W) => i.value = W),
            "menu-title-element-ref": a.value
          }, {
            default: withCtx(() => [
              createBaseVNode("h4", Qa, toDisplayString(unref(r)("layoutSwitch.title")), 1),
              createBaseVNode("p", Za, [
                createBaseVNode("span", null, toDisplayString(unref(r)("layoutSwitch.titleHelpMessage")), 1)
              ]),
              createBaseVNode("div", en, [
                createBaseVNode("div", tn, [
                  createBaseVNode("h5", an, [
                    nn,
                    createBaseVNode("span", null, toDisplayString(unref(r)("layoutSwitch.optionFullWidth")), 1)
                  ]),
                  createBaseVNode("span", null, toDisplayString(unref(r)("layoutSwitch.optionFullWidthHelpMessage")), 1)
                ]),
                createBaseVNode("div", ln, [
                  createBaseVNode("h5", on, [
                    sn,
                    createBaseVNode("span", null, toDisplayString(unref(r)("layoutSwitch.optionSidebarWidthAdjustableOnly")), 1)
                  ]),
                  createBaseVNode("span", null, toDisplayString(unref(r)("layoutSwitch.optionSidebarWidthAdjustableOnlyHelpMessage")), 1)
                ]),
                createBaseVNode("div", rn, [
                  createBaseVNode("h5", un, [
                    dn,
                    createBaseVNode("span", null, toDisplayString(unref(r)("layoutSwitch.optionBothWidthAdjustable")), 1)
                  ]),
                  createBaseVNode("span", null, toDisplayString(unref(r)("layoutSwitch.optionBothWidthAdjustableHelpMessage")), 1)
                ]),
                createBaseVNode("div", cn, [
                  createBaseVNode("h5", pn, [
                    hn,
                    createBaseVNode("span", null, toDisplayString(unref(r)("layoutSwitch.optionOriginalWidth")), 1)
                  ]),
                  createBaseVNode("span", null, toDisplayString(unref(r)("layoutSwitch.optionOriginalWidthHelpMessage")), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["is-popped-up", "menu-title-element-ref"]))
        ], 512),
        createVNode(ue, {
          modelValue: unref(o),
          "onUpdate:modelValue": m[1] || (m[1] = (W) => isRef(o) ? o.value = W : null),
          outline: "transparent 2px offset-4px dashed",
          transition: "outline duration-200 ease",
          class: normalizeClass({
            "outline-$vp-c-brand-1!": i.value
          }),
          options: f.value,
          disabled: n.value
        }, null, 8, ["modelValue", "class", "options", "disabled"])
      ]);
    };
  }
});
var fn = {
  class: "VPNolebaseEnhancedReadabilitiesMenuSlider VPNolebaseEnhancedReadabilitiesMenuSliderLabel",
  relative: "",
  "w-full": "",
  "select-none": ""
};
var mn = ["name", "min", "max", "disabled"];
var bn = defineComponent({
  __name: "MenuSlider",
  props: {
    name: {},
    disabled: { type: Boolean },
    modelValue: {},
    min: { default: 0 },
    max: { default: 100 },
    formatter: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, i = t, n = ref(null), l = ref(null), s = ref(a.modelValue), d = ref(a.min), o = ref(a.max), r = Je(n), p = ref(false);
    onMounted(() => {
      n.value && (n.value.style.setProperty("--vp-nolebase-enhanced-readabilities-menu-slider-value", s.value.toString()), n.value.style.setProperty("--vp-nolebase-enhanced-readabilities-menu-slider-min", a.min ? a.min.toString() : "0"), n.value.style.setProperty("--vp-nolebase-enhanced-readabilities-menu-slider-max", a.max ? a.max.toString() : "100"), n.value.addEventListener("input", () => {
        n.value && n.value.style.setProperty("--vp-nolebase-enhanced-readabilities-menu-slider-value", n.value.value.toString());
      }));
    });
    function f(h, _) {
      if (!h || !_)
        return;
      const g = a.max ? a.max : 100, m = a.min ? a.min : 0, w = (s.value - m) / (g - m), W = h.getBoundingClientRect(), L = (_.getBoundingClientRect().width - 32) / 2;
      _.style.setProperty("left", `${w * (W.width - 32) - L}px`);
    }
    return watch(s, (h) => {
      h < d.value && (h = d.value), h > o.value && (h = o.value), i("update:modelValue", h);
    }), watch(d, (h) => {
      s.value >= h || (s.value = h);
    }), watch(o, (h) => {
      s.value <= h || (s.value = h);
    }), watch(r, () => {
      p.value = true, setTimeout(() => {
        if (!r.value) {
          p.value = false;
          return;
        }
        if (!n.value) {
          p.value = false;
          return;
        }
        if (!l.value) {
          p.value = false;
          return;
        }
        f(n.value, l.value), p.value = false;
      }, 50);
    }), watch(s, () => {
      n.value && l.value && f(n.value, l.value);
    }), (h, _) => (openBlock(), createElementBlock("label", fn, [
      withDirectives(createBaseVNode("input", {
        ref_key: "inputSliderRef",
        ref: n,
        "onUpdate:modelValue": _[0] || (_[0] = (g) => s.value = g),
        type: "range",
        name: a.name,
        min: a.min,
        max: a.max,
        disabled: a.disabled,
        class: normalizeClass([{ disabled: a.disabled }, "VPNolebaseEnhancedReadabilitiesMenuSliderInput VPNolebaseEnhancedReadabilitiesMenuSliderInputProgressIndicator"]),
        step: "1",
        "w-full": ""
      }, null, 10, mn), [
        [vModelText, s.value]
      ]),
      createVNode(Transition, { name: "fade" }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("span", {
            ref_key: "inputSliderTooltipRef",
            ref: l,
            class: normalizeClass(["VPNolebaseEnhancedReadabilitiesMenuSliderTooltip", { "opacity-0": unref(r) && p.value }]),
            absolute: "",
            "min-w-12": "",
            "rounded-lg": "",
            "bg-black": "",
            "p-2": "",
            "text-center": "",
            "text-white": ""
          }, toDisplayString(a.formatter ? a.formatter(s.value) : s.value), 3), [
            [vShow, unref(r)]
          ])
        ]),
        _: 1
      })
    ]));
  }
});
var lt = U(bn, [["__scopeId", "data-v-8042323a"]]);
var vn = (e) => (pushScopeId("data-v-7934dfa8"), e = e(), popScopeId(), e);
var gn = {
  key: 0,
  "space-y-2": "",
  role: "range",
  class: "VPNolebaseEnhancedReadabilitiesPageLayoutWidthSlider"
};
var yn = {
  "text-md": "",
  "mb-1": "",
  "font-semibold": ""
};
var _n = {
  text: "sm",
  "mb-2": "",
  "max-w-100": ""
};
var xn = {
  "space-y-2": "",
  class: "VPNolebaseEnhancedReadabilitiesMenu"
};
var wn = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var Sn = {
  text: "sm",
  "mb-1": "",
  flex: "~",
  "items-center": "",
  "align-middle": ""
};
var Ln = vn(() => createBaseVNode("span", {
  "i-icon-park-outline:scale": "",
  "mr-1": ""
}, null, -1));
var Mn = defineComponent({
  __name: "LayoutSwitchPageLayoutMaxWidthSlider",
  setup(e) {
    var N, L, $;
    const t = ref(60), a = computed(() => t.value * 100), i = ref(100), n = computed(() => i.value * 100), l = inject(Q, {}), s = ref(), d = ref(false), o = ref(false), r = K(), p = te("(min-width: 768px)"), f = te("(min-width: 1440px)"), h = ae(Mt, (((L = (N = l.layoutSwitch) == null ? void 0 : N.pageLayoutMaxWidth) == null ? void 0 : L.defaultMaxWidth) || 100) * 100), _ = $e(We, (($ = l.layoutSwitch) == null ? void 0 : $.defaultMode) || R.BothWidthAdjustable), g = computed({
      get: () => {
        const b = Number.parseInt(String(h.value));
        return Number.isNaN(b) ? n.value : b < a.value ? a.value : b > n.value ? n.value : b;
      },
      set: (b) => {
        b < a.value && (b = a.value), b > n.value && (b = n.value), h.value = b;
      }
    }), { t: m } = J(), { trigger: w } = Oe(), W = Ee((b) => {
      f.value ? (w(document.body), document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-page-max-width", `${Math.ceil(b / 100)}%`)) : document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-page-max-width", "100%");
    }, 1e3);
    return watch(r, (b) => {
      b && W(g.value);
    }), watch(p, () => {
      p.value || (o.value = true);
    }), watch(f, () => {
      W(g.value);
    }), onMounted(() => {
      p.value || (o.value = true);
    }), watch(g, (b) => {
      r.value && W(b);
    }), (b, V) => (openBlock(), createBlock(Transition, { name: "fade-shift" }, {
      default: withCtx(() => {
        var C, T;
        return [
          unref(_) === unref(R).SidebarWidthAdjustableOnly || unref(_) === unref(R).BothWidthAdjustable ? (openBlock(), createElementBlock("div", gn, [
            createBaseVNode("div", {
              ref_key: "menuTitleElementRef",
              ref: s,
              flex: "",
              "items-center": ""
            }, [
              createVNode(Z, {
                icon: "i-icon-park-outline:auto-width-one",
                title: unref(m)("layoutSwitch.pageLayoutMaxWidth.title"),
                "aria-label": unref(m)("layoutSwitch.pageLayoutMaxWidth.titleArialLabel") || unref(m)("layoutSwitch.pageLayoutMaxWidth.title"),
                disabled: o.value,
                flex: "1",
                "pr-2": ""
              }, null, 8, ["title", "aria-label", "disabled"]),
              (T = (C = unref(l).layoutSwitch) == null ? void 0 : C.pageLayoutMaxWidth) != null && T.disableHelp ? createCommentVNode("", true) : (openBlock(), createBlock(de, {
                key: 0,
                "is-popped-up": d.value,
                "onUpdate:isPoppedUp": V[0] || (V[0] = (x) => d.value = x),
                "menu-title-element-ref": s.value
              }, {
                default: withCtx(() => [
                  createBaseVNode("h4", yn, toDisplayString(unref(m)("layoutSwitch.pageLayoutMaxWidth.title")), 1),
                  createBaseVNode("p", _n, [
                    createBaseVNode("span", null, toDisplayString(unref(m)("layoutSwitch.pageLayoutMaxWidth.titleHelpMessage")), 1)
                  ]),
                  createBaseVNode("div", xn, [
                    createBaseVNode("div", wn, [
                      createBaseVNode("h5", Sn, [
                        Ln,
                        createBaseVNode("span", null, toDisplayString(unref(m)("layoutSwitch.pageLayoutMaxWidth.slider")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(unref(m)("layoutSwitch.pageLayoutMaxWidth.sliderHelpMessage")), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["is-popped-up", "menu-title-element-ref"]))
            ], 512),
            createBaseVNode("fieldset", {
              flex: "~ row",
              bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
              "w-full": "",
              "appearance-none": "",
              "rounded-lg": "",
              "border-none": "",
              "p-1": "",
              "space-x-2": "",
              text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
              outline: "transparent 2px offset-4px dashed",
              transition: "outline duration-200 ease",
              class: normalizeClass({
                "outline-$vp-c-brand-1!": d.value,
                "rounded-md": d.value
              })
            }, [
              createVNode(lt, {
                modelValue: g.value,
                "onUpdate:modelValue": V[1] || (V[1] = (x) => g.value = x),
                name: "VitePress Nolebase Enhanced Readabilities page layout max width range slider",
                "aria-label": unref(m)("layoutSwitch.pageLayoutMaxWidth.sliderAriaLabel"),
                disabled: o.value,
                min: a.value,
                max: n.value,
                formatter: (x) => `${Math.ceil(x / 100)}%`
              }, null, 8, ["modelValue", "aria-label", "disabled", "min", "max", "formatter"])
            ], 2)
          ])) : createCommentVNode("", true)
        ];
      }),
      _: 1
    }));
  }
});
var An = U(Mn, [["__scopeId", "data-v-7934dfa8"]]);
var Wn = (e) => (pushScopeId("data-v-e314b15e"), e = e(), popScopeId(), e);
var En = {
  key: 0,
  "space-y-2": "",
  role: "range",
  class: "VPNolebaseEnhancedReadabilitiesContentLayoutWidthSlider"
};
var $n = {
  "text-md": "",
  "mb-1": "",
  "font-semibold": ""
};
var Vn = {
  text: "sm",
  "mb-2": "",
  "max-w-100": ""
};
var On = {
  "space-y-2": "",
  class: "VPNolebaseEnhancedReadabilitiesMenu"
};
var Pn = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var Rn = {
  text: "sm",
  "mb-1": "",
  flex: "~",
  "items-center": "",
  "align-middle": ""
};
var kn = Wn(() => createBaseVNode("span", {
  "i-icon-park-outline:scale": "",
  "mr-1": ""
}, null, -1));
var Nn = defineComponent({
  __name: "LayoutSwitchContentLayoutMaxWidthSlider",
  setup(e) {
    var N, L, $;
    const t = ref(60), a = computed(() => t.value * 100), i = ref(100), n = computed(() => i.value * 100), l = inject(Q, {}), s = ref(), d = ref(false), o = ref(false), r = K(), p = te("(min-width: 768px)"), f = te("(min-width: 1440px)"), h = ae(Lt, (((L = (N = l.layoutSwitch) == null ? void 0 : N.contentLayoutMaxWidth) == null ? void 0 : L.defaultMaxWidth) || 80) * 100), _ = $e(We, (($ = l.layoutSwitch) == null ? void 0 : $.defaultMode) || R.BothWidthAdjustable), g = computed({
      get: () => {
        const b = Number.parseInt(String(h.value));
        return Number.isNaN(b) ? n.value : b < a.value ? a.value : b > n.value ? n.value : b;
      },
      set: (b) => {
        b < a.value && (b = a.value), b > n.value && (b = n.value), h.value = b;
      }
    }), { t: m } = J(), { trigger: w } = Oe(), W = Ee((b) => {
      f.value ? (w(document.body), document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-content-max-width", `${Math.ceil(b / 100)}%`)) : (w(document.body), document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-content-max-width", "100%"));
    }, 1e3);
    return watch(r, (b) => {
      b && W(g.value);
    }), watch(p, () => {
      p.value || (o.value = true);
    }), watch(f, () => {
      W(g.value);
    }), onMounted(() => {
      p.value || (o.value = true);
    }), watch(g, (b) => {
      r.value && W(b);
    }), (b, V) => (openBlock(), createBlock(Transition, { name: "fade-shift" }, {
      default: withCtx(() => {
        var C, T;
        return [
          unref(_) === unref(R).BothWidthAdjustable ? (openBlock(), createElementBlock("div", En, [
            createBaseVNode("div", {
              ref_key: "menuTitleElementRef",
              ref: s,
              flex: "",
              "items-center": ""
            }, [
              createVNode(Z, {
                icon: "i-icon-park-outline:auto-line-width",
                title: unref(m)("layoutSwitch.contentLayoutMaxWidth.title"),
                "aria-label": unref(m)("layoutSwitch.contentLayoutMaxWidth.titleArialLabel") || unref(m)("layoutSwitch.contentLayoutMaxWidth.title"),
                disabled: o.value,
                flex: "1",
                "pr-4": ""
              }, null, 8, ["title", "aria-label", "disabled"]),
              (T = (C = unref(l).layoutSwitch) == null ? void 0 : C.contentLayoutMaxWidth) != null && T.disableHelp ? createCommentVNode("", true) : (openBlock(), createBlock(de, {
                key: 0,
                "is-popped-up": d.value,
                "onUpdate:isPoppedUp": V[0] || (V[0] = (x) => d.value = x),
                "menu-title-element-ref": s.value
              }, {
                default: withCtx(() => [
                  createBaseVNode("h4", $n, toDisplayString(unref(m)("layoutSwitch.contentLayoutMaxWidth.title")), 1),
                  createBaseVNode("p", Vn, [
                    createBaseVNode("span", null, toDisplayString(unref(m)("layoutSwitch.contentLayoutMaxWidth.titleHelpMessage")), 1)
                  ]),
                  createBaseVNode("div", On, [
                    createBaseVNode("div", Pn, [
                      createBaseVNode("h5", Rn, [
                        kn,
                        createBaseVNode("span", null, toDisplayString(unref(m)("layoutSwitch.contentLayoutMaxWidth.slider")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(unref(m)("layoutSwitch.contentLayoutMaxWidth.sliderHelpMessage")), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["is-popped-up", "menu-title-element-ref"]))
            ], 512),
            createBaseVNode("fieldset", {
              flex: "~ row",
              bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
              "w-full": "",
              "appearance-none": "",
              "rounded-lg": "",
              "border-none": "",
              "p-1": "",
              "space-x-2": "",
              text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
              outline: "transparent 2px offset-4px dashed",
              transition: "outline duration-200 ease",
              class: normalizeClass({
                "outline-$vp-c-brand-1!": d.value,
                "rounded-md": d.value
              })
            }, [
              createVNode(lt, {
                modelValue: g.value,
                "onUpdate:modelValue": V[1] || (V[1] = (x) => g.value = x),
                name: "VitePress Nolebase Enhanced Readabilities content layout max width range slider",
                "aria-label": unref(m)("layoutSwitch.contentLayoutMaxWidth.optionFullWidthAriaLabel"),
                disabled: o.value,
                min: a.value,
                max: n.value,
                formatter: (x) => `${Math.ceil(x / 100)}%`
              }, null, 8, ["modelValue", "aria-label", "disabled", "min", "max", "formatter"])
            ], 2)
          ])) : createCommentVNode("", true)
        ];
      }),
      _: 1
    }));
  }
});
var jn = U(Nn, [["__scopeId", "data-v-e314b15e"]]);
var Hn = defineComponent({
  __name: "SpotlightHoverBlock",
  props: {
    enabled: { type: Boolean }
  },
  setup(e) {
    var N;
    const t = e, a = inject(Q, {}), i = ref(false), n = ref({ display: "none" }), l = ref(), s = ref(), d = ze(), o = ae(Xe, ((N = a.spotlight) == null ? void 0 : N.defaultStyle) || ee.Aside), { x: r, y: p } = Ge({ type: "client" }), { isOutside: f } = qt(l), { element: h } = zt({ x: r, y: p }), _ = reactive(we(h)), g = Xt(s);
    D("scroll", _.update, true), onMounted(() => {
      var L;
      document && document.body && (document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-spotlight-under-bg-color", ((L = a == null ? void 0 : a.spotlight) == null ? void 0 : L.hoverBlockColor) || "rgb(240 197 52 / 10%)"), l.value = document.querySelector(".VPDoc main .vp-doc"));
    }), watch(d, () => {
      l.value = document.querySelector(".VPDoc main .vp-doc"), i.value = true, n.value = { display: "none" }, _.update(), W(), i.value = false;
    });
    function m(L) {
      return {
        display: "block",
        width: `${L.width + 8}px`,
        height: `${L.height + 8}px`,
        left: `${L.left - 4}px`,
        top: `${L.top - 4}px`,
        transition: "all 0.2s ease",
        borderRadius: "8px"
      };
    }
    function w(L) {
      return L === null ? null : L.parentElement === document.querySelector(".VPDoc main .vp-doc > div") ? L : w(L.parentElement);
    }
    function W() {
      if (!(h.value && !f.value))
        return;
      const L = w(h.value);
      if (s.value = L || void 0, s.value && s.value.tagName === "P") {
        const $ = s.value, b = window.getComputedStyle($), V = Number.parseFloat(b.lineHeight), C = Math.floor($.offsetHeight / V), T = $.getBoundingClientRect(), x = p.value - T.top;
        for (let H = 0; H < C; H++) {
          const X = H * V, Pe = V, ct = $.offsetLeft, pt = $.offsetWidth;
          if (x >= X && x < X + Pe) {
            n.value = m({
              top: X + T.top,
              left: ct + T.left,
              width: pt,
              height: Pe
            });
            break;
          }
        }
      } else if (s.value) {
        const $ = s.value.getBoundingClientRect();
        n.value = m({
          top: $.top,
          left: $.left,
          width: $.width,
          height: $.height
        });
      }
    }
    return watch([r, p], () => {
      t.enabled && W();
    }), watch(_, (L) => {
      t.enabled && (L.width === 0 && L.height === 0 ? n.value = { display: "none" } : W());
    }), watch(g, (L) => {
      t.enabled && !L && (n.value = { display: "none" });
    }), watch(() => t.enabled, (L) => {
      L || (n.value = { display: "none" });
    }), (L, $) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      t.enabled && !i.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        style: normalizeStyle(n.value),
        "aria-hidden": "true",
        focusable: "false",
        "pointer-events-none": "",
        fixed: "",
        border: "1 $vp-c-brand",
        class: normalizeClass(["VPNolebaseEnhancedReadabilitiesSpotlightHoverBlock", [
          unref(o) === unref(ee).Under ? "VPNolebaseEnhancedReadabilitiesSpotlightHoverBlockUnder" : "",
          unref(o) === unref(ee).Aside ? "VPNolebaseEnhancedReadabilitiesSpotlightHoverBlockAside" : ""
        ]])
      }, null, 6)) : createCommentVNode("", true)
    ]));
  }
});
var Tn = U(Hn, [["__scopeId", "data-v-8daba9a5"]]);
var Fn = {
  "space-y-2": "",
  role: "radiogroup"
};
var Bn = {
  "text-md": "",
  "mb-1": "",
  "font-semibold": ""
};
var In = {
  text: "sm",
  "mb-2": "",
  "max-w-100": ""
};
var Un = {
  "space-y-2": "",
  class: "VPNolebaseEnhancedReadabilitiesMenu"
};
var Cn = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var zn = {
  text: "sm",
  "mb-1": ""
};
var Dn = createBaseVNode("span", {
  "mr-1": "",
  "font-bold": ""
}, "ON", -1);
var Xn = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var Yn = {
  text: "sm",
  "mb-1": ""
};
var qn = createBaseVNode("span", {
  "mr-1": "",
  "font-bold": ""
}, "OFF", -1);
var ot = defineComponent({
  __name: "Spotlight",
  setup(e) {
    var p;
    const t = inject(Q, {}), a = ref(), i = ref(false), n = ref(false), l = K(), s = te("(pointer: coarse)"), d = ae(De, ((p = t.spotlight) == null ? void 0 : p.defaultToggle) || false), { t: o } = J(), r = computed(() => [
      {
        value: true,
        title: o("spotlight.optionOn"),
        ariaLabel: o("spotlight.optionOnAriaLabel"),
        text: "ON",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"
      },
      {
        value: false,
        title: o("spotlight.optionOff"),
        ariaLabel: o("spotlight.optionOffAriaLabel"),
        text: "OFF",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"
      }
    ]);
    return onMounted(() => {
      n.value = s.value;
    }), watch(s, () => {
      n.value = s.value;
    }), (f, h) => {
      var _;
      return openBlock(), createElementBlock("div", Fn, [
        unref(l) && unref(d) && !n.value ? (openBlock(), createBlock(Tn, {
          key: 0,
          enabled: unref(d) && !n.value
        }, null, 8, ["enabled"])) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "menuTitleElementRef",
          ref: a,
          relative: "",
          flex: "",
          "items-center": ""
        }, [
          createVNode(Z, {
            icon: "i-icon-park-outline:click",
            title: unref(o)("spotlight.title"),
            "aria-label": unref(o)("spotlight.titleArialLabel") || unref(o)("spotlight.title"),
            disabled: n.value,
            flex: "1",
            "pr-4": ""
          }, null, 8, ["title", "aria-label", "disabled"]),
          (_ = unref(t).spotlight) != null && _.disableHelp ? createCommentVNode("", true) : (openBlock(), createBlock(de, {
            key: 0,
            "is-popped-up": i.value,
            "onUpdate:isPoppedUp": h[0] || (h[0] = (g) => i.value = g),
            "menu-title-element-ref": a.value
          }, {
            default: withCtx(() => [
              createBaseVNode("h4", Bn, toDisplayString(unref(o)("spotlight.title")), 1),
              createBaseVNode("p", In, [
                createBaseVNode("span", null, toDisplayString(unref(o)("spotlight.titleHelpMessage")), 1)
              ]),
              createBaseVNode("div", Un, [
                createBaseVNode("div", Cn, [
                  createBaseVNode("h5", zn, [
                    Dn,
                    createBaseVNode("span", null, toDisplayString(unref(o)("spotlight.optionOn")), 1)
                  ]),
                  createBaseVNode("span", null, toDisplayString(unref(o)("spotlight.optionOnHelpMessage")), 1)
                ]),
                createBaseVNode("div", Xn, [
                  createBaseVNode("h5", Yn, [
                    qn,
                    createBaseVNode("span", null, toDisplayString(unref(o)("spotlight.optionOff")), 1)
                  ]),
                  createBaseVNode("span", null, toDisplayString(unref(o)("spotlight.optionOffHelpMessage")), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["is-popped-up", "menu-title-element-ref"]))
        ], 512),
        createVNode(ue, {
          modelValue: unref(d),
          "onUpdate:modelValue": h[1] || (h[1] = (g) => isRef(d) ? d.value = g : null),
          outline: "transparent 2px offset-4px dashed",
          transition: "outline duration-200 ease",
          class: normalizeClass({
            "outline-$vp-c-brand-1!": i.value
          }),
          options: r.value,
          disabled: n.value
        }, null, 8, ["modelValue", "class", "options", "disabled"])
      ]);
    };
  }
});
var st = (e) => (pushScopeId("data-v-72a7897d"), e = e(), popScopeId(), e);
var Kn = {
  key: 0,
  "space-y-2": "",
  role: "radiogroup",
  class: "VPNolebaseEnhancedReadabilitiesSpotlightStyles"
};
var Jn = {
  "text-md": "",
  "mb-1": "",
  "font-semibold": ""
};
var Gn = {
  text: "sm",
  "mb-2": "",
  "max-w-100": ""
};
var Qn = {
  "space-y-2": "",
  class: "VPNolebaseEnhancedReadabilitiesMenu"
};
var Zn = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var ei = {
  text: "sm",
  "mb-1": ""
};
var ti = st(() => createBaseVNode("span", {
  "i-icon-park-outline:align-text-left-one": "",
  "mr-1": ""
}, null, -1));
var ai = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var ni = {
  text: "sm",
  "mb-1": ""
};
var ii = st(() => createBaseVNode("span", {
  "i-icon-park-outline:align-left-one": "",
  "mr-1": ""
}, null, -1));
var li = defineComponent({
  __name: "SpotlightStyles",
  setup(e) {
    var p, f;
    const t = inject(Q, {}), a = ref(), i = ref(false), n = ref(false), l = te("(pointer: coarse)"), s = ae(De, ((p = t.spotlight) == null ? void 0 : p.defaultToggle) || false), d = ae(Xe, ((f = t.spotlight) == null ? void 0 : f.defaultStyle) || ee.Aside), { t: o } = J(), r = computed(() => [
      {
        value: ee.Under,
        title: o("spotlight.styles.optionUnder"),
        ariaLabel: o("spotlight.styles.optionUnderAriaLabel"),
        icon: "i-icon-park-outline:align-text-left-one",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Style Checkbox"
      },
      {
        value: ee.Aside,
        title: o("spotlight.styles.optionAside"),
        ariaLabel: o("spotlight.styles.optionAsideAriaLabel"),
        icon: "i-icon-park-outline:align-left-one",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Style Checkbox"
      }
    ]);
    return onMounted(() => {
      n.value = l.value;
    }), watch(l, () => {
      n.value = l.value;
    }), (h, _) => (openBlock(), createBlock(Transition, { name: "fade-shift" }, {
      default: withCtx(() => {
        var g;
        return [
          unref(s) ? (openBlock(), createElementBlock("div", Kn, [
            createBaseVNode("div", {
              ref_key: "menuTitleElementRef",
              ref: a,
              relative: "",
              flex: "",
              "items-center": ""
            }, [
              createVNode(Z, {
                icon: "i-icon-park-outline:click",
                title: unref(o)("spotlight.styles.title"),
                "aria-label": unref(o)("spotlight.styles.titleArialLabel") || unref(o)("spotlight.styles.title"),
                disabled: n.value,
                flex: "1",
                "pr-4": ""
              }, null, 8, ["title", "aria-label", "disabled"]),
              (g = unref(t).spotlight) != null && g.disableHelp ? createCommentVNode("", true) : (openBlock(), createBlock(de, {
                key: 0,
                "is-popped-up": i.value,
                "onUpdate:isPoppedUp": _[0] || (_[0] = (m) => i.value = m),
                "menu-title-element-ref": a.value
              }, {
                default: withCtx(() => [
                  createBaseVNode("h4", Jn, toDisplayString(unref(o)("spotlight.styles.title")), 1),
                  createBaseVNode("p", Gn, [
                    createBaseVNode("span", null, toDisplayString(unref(o)("spotlight.styles.titleHelpMessage")), 1)
                  ]),
                  createBaseVNode("div", Qn, [
                    createBaseVNode("div", Zn, [
                      createBaseVNode("h5", ei, [
                        ti,
                        createBaseVNode("span", null, toDisplayString(unref(o)("spotlight.styles.optionUnder")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(unref(o)("spotlight.styles.optionUnderHelpMessage")), 1)
                    ]),
                    createBaseVNode("div", ai, [
                      createBaseVNode("h5", ni, [
                        ii,
                        createBaseVNode("span", null, toDisplayString(unref(o)("spotlight.styles.optionAside")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(unref(o)("spotlight.styles.optionAsideHelpMessage")), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["is-popped-up", "menu-title-element-ref"]))
            ], 512),
            createVNode(ue, {
              modelValue: unref(d),
              "onUpdate:modelValue": _[1] || (_[1] = (m) => isRef(d) ? d.value = m : null),
              outline: "transparent 2px offset-4px dashed",
              transition: "outline duration-200 ease",
              class: normalizeClass({
                "outline-$vp-c-brand-1!": i.value
              }),
              options: r.value,
              disabled: n.value
            }, null, 8, ["modelValue", "class", "options", "disabled"])
          ])) : createCommentVNode("", true)
        ];
      }),
      _: 1
    }));
  }
});
var rt = U(li, [["__scopeId", "data-v-72a7897d"]]);
var oi = ["aria-label"];
var si = defineComponent({
  __name: "Menu",
  setup(e) {
    const t = K(), { t: a } = J();
    return (i, n) => (openBlock(), createBlock(Na, {
      icon: Ia,
      class: "VPNolebaseEnhancedReadabilitiesMenu VPNolebaseEnhancedReadabilitiesMenuFlyout"
    }, {
      default: withCtx(() => [
        unref(t) ? (openBlock(), createElementBlock("div", {
          key: 0,
          "aria-label": unref(a)("title.title"),
          "min-w-64": "",
          "p-2": "",
          "space-y-2": ""
        }, [
          createVNode(it),
          createVNode(An),
          createVNode(jn),
          createVNode(ot),
          createVNode(rt)
        ], 8, oi)) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
});
var ri = { "space-y-2": "" };
var ui = {
  border: "1 red/50 solid",
  bg: "red/30",
  flex: "",
  "items-center": "",
  "rounded-lg": "",
  "p-2": "",
  "opacity-50": ""
};
var di = { "text-xs": "" };
var ut = defineComponent({
  __name: "ScreenLayoutSwitch",
  setup(e) {
    const { t } = J(), a = computed(() => [
      {
        value: R.FullWidth,
        title: t("layoutSwitch.optionFullWidth"),
        ariaLabel: t("layoutSwitch.optionFullWidthAriaLabel"),
        icon: "i-icon-park-outline:full-screen-one",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: R.SidebarWidthAdjustableOnly,
        title: t("layoutSwitch.optionSidebarWidthAdjustableOnly"),
        ariaLabel: t("layoutSwitch.optionSidebarWidthAdjustableOnlyAriaLabel"),
        icon: "i-icon-park-outline:full-screen-two",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: R.BothWidthAdjustable,
        title: t("layoutSwitch.optionBothWidthAdjustable"),
        ariaLabel: t("layoutSwitch.optionBothWidthAdjustableAriaLabel"),
        icon: "i-icon-park-outline:full-screen",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: R.Original,
        title: t("layoutSwitch.optionOriginalWidth"),
        ariaLabel: t("layoutSwitch.optionOriginalWidthAriaLabel"),
        icon: "i-icon-park-outline:off-screen",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      }
    ]);
    return (i, n) => (openBlock(), createElementBlock("div", ri, [
      createVNode(Z, {
        icon: "i-icon-park-outline:layout-one",
        title: unref(t)("layoutSwitch.title"),
        "aria-label": unref(t)("layoutSwitch.titleArialLabel") || unref(t)("layoutSwitch.title"),
        disabled: ""
      }, null, 8, ["title", "aria-label"]),
      createBaseVNode("div", ui, [
        createBaseVNode("span", di, toDisplayString(unref(t)("layoutSwitch.titleScreenNavWarningMessage")), 1)
      ]),
      createVNode(ue, {
        options: a.value,
        disabled: ""
      }, null, 8, ["options"])
    ]));
  }
});
var ci = { "space-y-2": "" };
var pi = {
  border: "1 red/50 solid",
  bg: "red/30",
  flex: "",
  "items-center": "",
  "rounded-lg": "",
  "p-2": "",
  "opacity-50": ""
};
var hi = { "text-xs": "" };
var dt = defineComponent({
  __name: "ScreenSpotlight",
  setup(e) {
    const { t } = J(), a = computed(() => [
      {
        title: t("spotlight.optionOn"),
        ariaLabel: t("spotlight.optionOnAriaLabel"),
        value: true,
        text: "ON",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"
      },
      {
        title: t("spotlight.optionOff"),
        ariaLabel: t("spotlight.optionOffAriaLabel"),
        value: false,
        text: "OFF",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"
      }
    ]);
    return (i, n) => (openBlock(), createElementBlock("div", ci, [
      createVNode(Z, {
        icon: "i-icon-park-outline:click",
        title: unref(t)("spotlight.title"),
        "aria-label": unref(t)("spotlight.titleArialLabel") || unref(t)("spotlight.title"),
        disabled: ""
      }, null, 8, ["title", "aria-label"]),
      createBaseVNode("div", pi, [
        createBaseVNode("span", hi, toDisplayString(unref(t)("spotlight.titleScreenNavWarningMessage")), 1)
      ]),
      createVNode(ue, {
        options: a.value,
        disabled: ""
      }, null, 8, ["options"])
    ]));
  }
});
var fi = {
  key: 0,
  "space-y-2": "",
  class: "VPNolebaseEnhancedReadabilitiesMenu"
};
var mi = {
  flex: "~ col",
  "pl-4": "",
  "space-y-2": ""
};
var bi = defineComponent({
  __name: "ScreenMenu",
  setup(e) {
    const t = K(), { t: a } = J();
    return (i, n) => unref(t) ? (openBlock(), createElementBlock("div", fi, [
      createVNode(Z, {
        icon: "i-icon-park-outline:book-open",
        title: unref(a)("title.title"),
        "aria-label": unref(a)("title.titleArialLabel") || unref(a)("title.title")
      }, null, 8, ["title", "aria-label"]),
      createBaseVNode("div", mi, [
        createVNode(ut),
        createVNode(dt)
      ])
    ])) : createCommentVNode("", true);
  }
});
var je = {
  NolebaseEnhancedReadabilitiesMenu: si,
  NolebaseEnhancedReadabilitiesScreenMenu: bi,
  NolebaseEnhancedReadabilitiesLayoutSwitch: it,
  NolebaseEnhancedReadabilitiesScreenLayoutSwitch: ut,
  NolebaseEnhancedReadabilitiesSpotlight: ot,
  NolebaseEnhancedReadabilitiesSpotlightStyles: rt,
  NolebaseEnhancedReadabilitiesScreenSpotlight: dt
};
var yi = {
  install(e, t) {
    typeof t < "u" && typeof t == "object" && e.provide(Q, t);
    for (const a of Object.keys(je))
      e.component(a, je[a]);
  }
};
export {
  Q as InjectionKey,
  R as LayoutMode,
  it as LayoutSwitch,
  jn as LayoutSwitchContentLayoutMaxWidthSlider,
  We as LayoutSwitchModeStorageKey,
  An as LayoutSwitchPageLayoutMaxWidthSlider,
  si as NolebaseEnhancedReadabilitiesMenu,
  yi as NolebaseEnhancedReadabilitiesPlugin,
  bi as NolebaseEnhancedReadabilitiesScreenMenu,
  ut as ScreenLayoutSwitch,
  dt as ScreenSpotlight,
  ot as Spotlight,
  rt as SpotlightStyles,
  De as SpotlightToggledStorageKey
};
//# sourceMappingURL=@nolebase_vitepress-plugin-enhanced-readabilities.js.map
