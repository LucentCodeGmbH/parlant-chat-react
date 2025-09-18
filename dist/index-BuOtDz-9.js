import { a as ee, c as Un, p as te, r as bn, s as de, b as ue, d as pn, e as fr, m as M, f as V, g as mr, h as dr, i as hn, j as v, k as ne, n as Ce, l as Qe, o as Ct, q as Re, t as gr, u as yr, v as It, w as xr } from "./index-FyoJcMta.js";
import { jsxs as kr, jsx as br, Fragment as wr } from "react/jsx-runtime";
import { useState as Vn, useEffect as Sr } from "react";
const qn = document.createElement("i");
function wn(e) {
  const n = "&" + e + ";";
  qn.innerHTML = n;
  const t = qn.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    t.charCodeAt(t.length - 1) === 59 && e !== "semi" || t === n ? !1 : t
  );
}
function Tt(e, n) {
  const t = Number.parseInt(e, n);
  return (
    // C0 except for HT, LF, FF, CR, space.
    t < 9 || t === 11 || t > 13 && t < 32 || // Control character (DEL) of C0, and C1 controls.
    t > 126 && t < 160 || // Lone high surrogates and low surrogates.
    t > 55295 && t < 57344 || // Noncharacters.
    t > 64975 && t < 65008 || /* eslint-disable no-bitwise */
    (t & 65535) === 65535 || (t & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    t > 1114111 ? "�" : String.fromCodePoint(t)
  );
}
const Er = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Cr(e) {
  return e.replace(Er, Ir);
}
function Ir(e, n, t) {
  if (n)
    return n;
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1), l = i === 120 || i === 88;
    return Tt(t.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return wn(t) || e;
}
function Te(e) {
  const n = [];
  let t = -1, r = 0, i = 0;
  for (; ++t < e.length; ) {
    const l = e.charCodeAt(t);
    let o = "";
    if (l === 37 && ee(e.charCodeAt(t + 1)) && ee(e.charCodeAt(t + 2)))
      i = 2;
    else if (l < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (o = String.fromCharCode(l));
    else if (l > 55295 && l < 57344) {
      const a = e.charCodeAt(t + 1);
      l < 56320 && a > 56319 && a < 57344 ? (o = String.fromCharCode(l, a), i = 1) : o = "�";
    } else
      o = String.fromCharCode(l);
    o && (n.push(e.slice(r, t), encodeURIComponent(o)), r = t + i + 1, o = ""), i && (t += i, i = 0);
  }
  return n.join("") + e.slice(r);
}
const fn = {
  name: "attention",
  resolveAll: Tr,
  tokenize: Pr
};
function Tr(e, n) {
  let t = -1, r, i, l, o, a, c, u, s;
  for (; ++t < e.length; )
    if (e[t][0] === "enter" && e[t][1].type === "attentionSequence" && e[t][1]._close) {
      for (r = t; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        n.sliceSerialize(e[r][1]).charCodeAt(0) === n.sliceSerialize(e[t][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[t][1]._open) && (e[t][1].end.offset - e[t][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[t][1].end.offset - e[t][1].start.offset) % 3))
            continue;
          c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[t][1].end.offset - e[t][1].start.offset > 1 ? 2 : 1;
          const h = {
            ...e[r][1].end
          }, d = {
            ...e[t][1].start
          };
          $n(h, -c), $n(d, c), o = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: h,
            end: {
              ...e[r][1].end
            }
          }, a = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[t][1].start
            },
            end: d
          }, l = {
            type: c > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[t][1].start
            }
          }, i = {
            type: c > 1 ? "strong" : "emphasis",
            start: {
              ...o.start
            },
            end: {
              ...a.end
            }
          }, e[r][1].end = {
            ...o.start
          }, e[t][1].start = {
            ...a.end
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = te(u, [["enter", e[r][1], n], ["exit", e[r][1], n]])), u = te(u, [["enter", i, n], ["enter", o, n], ["exit", o, n], ["enter", l, n]]), u = te(u, bn(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n)), u = te(u, [["exit", l, n], ["enter", a, n], ["exit", a, n], ["exit", i, n]]), e[t][1].end.offset - e[t][1].start.offset ? (s = 2, u = te(u, [["enter", e[t][1], n], ["exit", e[t][1], n]])) : s = 0, de(e, r - 1, t - r + 3, u), t = r + u.length - s - 2;
          break;
        }
    }
  for (t = -1; ++t < e.length; )
    e[t][1].type === "attentionSequence" && (e[t][1].type = "data");
  return e;
}
function Pr(e, n) {
  const t = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Un(r);
  let l;
  return o;
  function o(c) {
    return l = c, e.enter("attentionSequence"), a(c);
  }
  function a(c) {
    if (c === l)
      return e.consume(c), a;
    const u = e.exit("attentionSequence"), s = Un(c), h = !s || s === 2 && i || t.includes(c), d = !i || i === 2 && s || t.includes(r);
    return u._open = !!(l === 42 ? h : h && (i || !d)), u._close = !!(l === 42 ? d : d && (s || !h)), n(c);
  }
}
function $n(e, n) {
  e.column += n, e.offset += n, e._bufferIndex += n;
}
const Ar = {
  name: "autolink",
  tokenize: vr
};
function vr(e, n, t) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l;
  }
  function l(p) {
    return ue(p) ? (e.consume(p), o) : p === 64 ? t(p) : u(p);
  }
  function o(p) {
    return p === 43 || p === 45 || p === 46 || ee(p) ? (r = 1, a(p)) : u(p);
  }
  function a(p) {
    return p === 58 ? (e.consume(p), r = 0, c) : (p === 43 || p === 45 || p === 46 || ee(p)) && r++ < 32 ? (e.consume(p), a) : (r = 0, u(p));
  }
  function c(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), n) : p === null || p === 32 || p === 60 || pn(p) ? t(p) : (e.consume(p), c);
  }
  function u(p) {
    return p === 64 ? (e.consume(p), s) : fr(p) ? (e.consume(p), u) : t(p);
  }
  function s(p) {
    return ee(p) ? h(p) : t(p);
  }
  function h(p) {
    return p === 46 ? (e.consume(p), r = 0, s) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), n) : d(p);
  }
  function d(p) {
    if ((p === 45 || ee(p)) && r++ < 63) {
      const S = p === 45 ? d : h;
      return e.consume(p), S;
    }
    return t(p);
  }
}
const Pt = {
  continuation: {
    tokenize: Lr
  },
  exit: Dr,
  name: "blockQuote",
  tokenize: zr
};
function zr(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    if (o === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(o), e.exit("blockQuoteMarker"), l;
    }
    return t(o);
  }
  function l(o) {
    return M(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(o));
  }
}
function Lr(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return M(o) ? V(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : l(o);
  }
  function l(o) {
    return e.attempt(Pt, n, t)(o);
  }
}
function Dr(e) {
  e.exit("blockQuote");
}
const At = {
  name: "characterEscape",
  tokenize: Or
};
function Or(e, n, t) {
  return r;
  function r(l) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i;
  }
  function i(l) {
    return mr(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(l);
  }
}
const vt = {
  name: "characterReference",
  tokenize: _r
};
function _r(e, n, t) {
  const r = this;
  let i = 0, l, o;
  return a;
  function a(h) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(h), e.exit("characterReferenceMarker"), c;
  }
  function c(h) {
    return h === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(h), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), l = 31, o = ee, s(h));
  }
  function u(h) {
    return h === 88 || h === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(h), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, o = dr, s) : (e.enter("characterReferenceValue"), l = 7, o = hn, s(h));
  }
  function s(h) {
    if (h === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return o === ee && !wn(r.sliceSerialize(d)) ? t(h) : (e.enter("characterReferenceMarker"), e.consume(h), e.exit("characterReferenceMarker"), e.exit("characterReference"), n);
    }
    return o(h) && i++ < l ? (e.consume(h), s) : t(h);
  }
}
const Wn = {
  partial: !0,
  tokenize: Fr
}, Yn = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Rr
};
function Rr(e, n, t) {
  const r = this, i = {
    partial: !0,
    tokenize: H
  };
  let l = 0, o = 0, a;
  return c;
  function c(y) {
    return u(y);
  }
  function u(y) {
    const R = r.events[r.events.length - 1];
    return l = R && R[1].type === "linePrefix" ? R[2].sliceSerialize(R[1], !0).length : 0, a = y, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), s(y);
  }
  function s(y) {
    return y === a ? (o++, e.consume(y), s) : o < 3 ? t(y) : (e.exit("codeFencedFenceSequence"), M(y) ? V(e, h, "whitespace")(y) : h(y));
  }
  function h(y) {
    return y === null || v(y) ? (e.exit("codeFencedFence"), r.interrupt ? n(y) : e.check(Wn, w, B)(y)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(y));
  }
  function d(y) {
    return y === null || v(y) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), h(y)) : M(y) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), V(e, p, "whitespace")(y)) : y === 96 && y === a ? t(y) : (e.consume(y), d);
  }
  function p(y) {
    return y === null || v(y) ? h(y) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), S(y));
  }
  function S(y) {
    return y === null || v(y) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), h(y)) : y === 96 && y === a ? t(y) : (e.consume(y), S);
  }
  function w(y) {
    return e.attempt(i, B, L)(y);
  }
  function L(y) {
    return e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), k;
  }
  function k(y) {
    return l > 0 && M(y) ? V(e, A, "linePrefix", l + 1)(y) : A(y);
  }
  function A(y) {
    return y === null || v(y) ? e.check(Wn, w, B)(y) : (e.enter("codeFlowValue"), E(y));
  }
  function E(y) {
    return y === null || v(y) ? (e.exit("codeFlowValue"), A(y)) : (e.consume(y), E);
  }
  function B(y) {
    return e.exit("codeFenced"), n(y);
  }
  function H(y, R, q) {
    let F = 0;
    return N;
    function N(z) {
      return y.enter("lineEnding"), y.consume(z), y.exit("lineEnding"), P;
    }
    function P(z) {
      return y.enter("codeFencedFence"), M(z) ? V(y, I, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(z) : I(z);
    }
    function I(z) {
      return z === a ? (y.enter("codeFencedFenceSequence"), T(z)) : q(z);
    }
    function T(z) {
      return z === a ? (F++, y.consume(z), T) : F >= o ? (y.exit("codeFencedFenceSequence"), M(z) ? V(y, C, "whitespace")(z) : C(z)) : q(z);
    }
    function C(z) {
      return z === null || v(z) ? (y.exit("codeFencedFence"), R(z)) : q(z);
    }
  }
}
function Fr(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? t(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? t(o) : n(o);
  }
}
const Je = {
  name: "codeIndented",
  tokenize: Mr
}, Nr = {
  partial: !0,
  tokenize: Br
};
function Mr(e, n, t) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), V(e, l, "linePrefix", 5)(u);
  }
  function l(u) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? o(u) : t(u);
  }
  function o(u) {
    return u === null ? c(u) : v(u) ? e.attempt(Nr, o, c)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || v(u) ? (e.exit("codeFlowValue"), o(u)) : (e.consume(u), a);
  }
  function c(u) {
    return e.exit("codeIndented"), n(u);
  }
}
function Br(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? t(o) : v(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : V(e, l, "linePrefix", 5)(o);
  }
  function l(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(o) : v(o) ? i(o) : t(o);
  }
}
const jr = {
  name: "codeText",
  previous: Ur,
  resolve: Hr,
  tokenize: Vr
};
function Hr(e) {
  let n = e.length - 4, t = 3, r, i;
  if ((e[t][1].type === "lineEnding" || e[t][1].type === "space") && (e[n][1].type === "lineEnding" || e[n][1].type === "space")) {
    for (r = t; ++r < n; )
      if (e[r][1].type === "codeTextData") {
        e[t][1].type = "codeTextPadding", e[n][1].type = "codeTextPadding", t += 2, n -= 2;
        break;
      }
  }
  for (r = t - 1, n++; ++r <= n; )
    i === void 0 ? r !== n && e[r][1].type !== "lineEnding" && (i = r) : (r === n || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), n -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function Ur(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Vr(e, n, t) {
  let r = 0, i, l;
  return o;
  function o(h) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(h);
  }
  function a(h) {
    return h === 96 ? (e.consume(h), r++, a) : (e.exit("codeTextSequence"), c(h));
  }
  function c(h) {
    return h === null ? t(h) : h === 32 ? (e.enter("space"), e.consume(h), e.exit("space"), c) : h === 96 ? (l = e.enter("codeTextSequence"), i = 0, s(h)) : v(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), c) : (e.enter("codeTextData"), u(h));
  }
  function u(h) {
    return h === null || h === 32 || h === 96 || v(h) ? (e.exit("codeTextData"), c(h)) : (e.consume(h), u);
  }
  function s(h) {
    return h === 96 ? (e.consume(h), i++, s) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), n(h)) : (l.type = "codeTextData", u(h));
  }
}
class qr {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(n) {
    this.left = n ? [...n] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(n) {
    if (n < 0 || n >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + n + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return n < this.left.length ? this.left[n] : this.right[this.right.length - n + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(n, t) {
    const r = t ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(n, r) : n > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - n + this.left.length).reverse() : this.left.slice(n).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(n, t, r) {
    const i = t || 0;
    this.setCursor(Math.trunc(n));
    const l = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && Le(this.left, r), l.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(n) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(n) {
    this.setCursor(Number.POSITIVE_INFINITY), Le(this.left, n);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(n) {
    this.setCursor(0), this.right.push(n);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(n) {
    this.setCursor(0), Le(this.right, n.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(n) {
    if (!(n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0))
      if (n < this.left.length) {
        const t = this.left.splice(n, Number.POSITIVE_INFINITY);
        Le(this.right, t.reverse());
      } else {
        const t = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
        Le(this.left, t.reverse());
      }
  }
}
function Le(e, n) {
  let t = 0;
  if (n.length < 1e4)
    e.push(...n);
  else
    for (; t < n.length; )
      e.push(...n.slice(t, t + 1e4)), t += 1e4;
}
function zt(e) {
  const n = {};
  let t = -1, r, i, l, o, a, c, u;
  const s = new qr(e);
  for (; ++t < s.length; ) {
    for (; t in n; )
      t = n[t];
    if (r = s.get(t), t && r[1].type === "chunkFlow" && s.get(t - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, l = 0, l < c.length && c[l][1].type === "lineEndingBlank" && (l += 2), l < c.length && c[l][1].type === "content"))
      for (; ++l < c.length && c[l][1].type !== "content"; )
        c[l][1].type === "chunkText" && (c[l][1]._isInFirstContentOfListItem = !0, l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(n, $r(s, t)), t = n[t], u = !0);
    else if (r[1]._container) {
      for (l = t, i = void 0; l--; )
        if (o = s.get(l), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank")
          o[0] === "enter" && (i && (s.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = l);
        else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...s.get(i)[1].start
      }, a = s.slice(i, t), a.unshift(r), s.splice(i, t - i + 1, a));
    }
  }
  return de(e, 0, Number.POSITIVE_INFINITY, s.slice(0)), !u;
}
function $r(e, n) {
  const t = e.get(n)[1], r = e.get(n)[2];
  let i = n - 1;
  const l = [];
  let o = t._tokenizer;
  o || (o = r.parser[t.contentType](t.start), t._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events, c = [], u = {};
  let s, h, d = -1, p = t, S = 0, w = 0;
  const L = [w];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; )
      ;
    l.push(i), p._tokenizer || (s = r.sliceStream(p), p.next || s.push(null), h && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(s), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), h = p, p = p.next;
  }
  for (p = t; ++d < a.length; )
    // Find a void token that includes a break.
    a[d][0] === "exit" && a[d - 1][0] === "enter" && a[d][1].type === a[d - 1][1].type && a[d][1].start.line !== a[d][1].end.line && (w = d + 1, L.push(w), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : L.pop(), d = L.length; d--; ) {
    const k = a.slice(L[d], L[d + 1]), A = l.pop();
    c.push([A, A + k.length - 1]), e.splice(A, 2, k);
  }
  for (c.reverse(), d = -1; ++d < c.length; )
    u[S + c[d][0]] = S + c[d][1], S += c[d][1] - c[d][0] - 1;
  return u;
}
const Wr = {
  resolve: Xr,
  tokenize: Qr
}, Yr = {
  partial: !0,
  tokenize: Gr
};
function Xr(e) {
  return zt(e), e;
}
function Qr(e, n) {
  let t;
  return r;
  function r(a) {
    return e.enter("content"), t = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? l(a) : v(a) ? e.check(Yr, o, l)(a) : (e.consume(a), i);
  }
  function l(a) {
    return e.exit("chunkContent"), e.exit("content"), n(a);
  }
  function o(a) {
    return e.consume(a), e.exit("chunkContent"), t.next = e.enter("chunkContent", {
      contentType: "content",
      previous: t
    }), t = t.next, i;
  }
}
function Gr(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), V(e, l, "linePrefix");
  }
  function l(o) {
    if (o === null || v(o))
      return t(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(o) : e.interrupt(r.parser.constructs.flow, t, n)(o);
  }
}
function Lt(e, n, t, r, i, l, o, a, c) {
  const u = c || Number.POSITIVE_INFINITY;
  let s = 0;
  return h;
  function h(k) {
    return k === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(k), e.exit(l), d) : k === null || k === 32 || k === 41 || pn(k) ? t(k) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), w(k));
  }
  function d(k) {
    return k === 62 ? (e.enter(l), e.consume(k), e.exit(l), e.exit(i), e.exit(r), n) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), p(k));
  }
  function p(k) {
    return k === 62 ? (e.exit("chunkString"), e.exit(a), d(k)) : k === null || k === 60 || v(k) ? t(k) : (e.consume(k), k === 92 ? S : p);
  }
  function S(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), p) : p(k);
  }
  function w(k) {
    return !s && (k === null || k === 41 || ne(k)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), n(k)) : s < u && k === 40 ? (e.consume(k), s++, w) : k === 41 ? (e.consume(k), s--, w) : k === null || k === 32 || k === 40 || pn(k) ? t(k) : (e.consume(k), k === 92 ? L : w);
  }
  function L(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), w) : w(k);
  }
}
function Dt(e, n, t, r, i, l) {
  const o = this;
  let a = 0, c;
  return u;
  function u(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(l), s;
  }
  function s(p) {
    return a > 999 || p === null || p === 91 || p === 93 && !c || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs ? t(p) : p === 93 ? (e.exit(l), e.enter(i), e.consume(p), e.exit(i), e.exit(r), n) : v(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), s) : (e.enter("chunkString", {
      contentType: "string"
    }), h(p));
  }
  function h(p) {
    return p === null || p === 91 || p === 93 || v(p) || a++ > 999 ? (e.exit("chunkString"), s(p)) : (e.consume(p), c || (c = !M(p)), p === 92 ? d : h);
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), a++, h) : h(p);
  }
}
function Ot(e, n, t, r, i, l) {
  let o;
  return a;
  function a(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), o = d === 40 ? 41 : d, c) : t(d);
  }
  function c(d) {
    return d === o ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), n) : (e.enter(l), u(d));
  }
  function u(d) {
    return d === o ? (e.exit(l), c(o)) : d === null ? t(d) : v(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), V(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), s(d));
  }
  function s(d) {
    return d === o || d === null || v(d) ? (e.exit("chunkString"), u(d)) : (e.consume(d), d === 92 ? h : s);
  }
  function h(d) {
    return d === o || d === 92 ? (e.consume(d), s) : s(d);
  }
}
function Fe(e, n) {
  let t;
  return r;
  function r(i) {
    return v(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t = !0, r) : M(i) ? V(e, r, t ? "linePrefix" : "lineSuffix")(i) : n(i);
  }
}
const Jr = {
  name: "definition",
  tokenize: Zr
}, Kr = {
  partial: !0,
  tokenize: ei
};
function Zr(e, n, t) {
  const r = this;
  let i;
  return l;
  function l(p) {
    return e.enter("definition"), o(p);
  }
  function o(p) {
    return Dt.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      t,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function a(p) {
    return i = Ce(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), c) : t(p);
  }
  function c(p) {
    return ne(p) ? Fe(e, u)(p) : u(p);
  }
  function u(p) {
    return Lt(
      e,
      s,
      // Note: we don’t need to reset the way `markdown-rs` does.
      t,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function s(p) {
    return e.attempt(Kr, h, h)(p);
  }
  function h(p) {
    return M(p) ? V(e, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || v(p) ? (e.exit("definition"), r.parser.defined.push(i), n(p)) : t(p);
  }
}
function ei(e, n, t) {
  return r;
  function r(a) {
    return ne(a) ? Fe(e, i)(a) : t(a);
  }
  function i(a) {
    return Ot(e, l, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function l(a) {
    return M(a) ? V(e, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || v(a) ? n(a) : t(a);
  }
}
const ni = {
  name: "hardBreakEscape",
  tokenize: ti
};
function ti(e, n, t) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return v(l) ? (e.exit("hardBreakEscape"), n(l)) : t(l);
  }
}
const ri = {
  name: "headingAtx",
  resolve: ii,
  tokenize: li
};
function ii(e, n) {
  let t = e.length - 2, r = 3, i, l;
  return e[r][1].type === "whitespace" && (r += 2), t - 2 > r && e[t][1].type === "whitespace" && (t -= 2), e[t][1].type === "atxHeadingSequence" && (r === t - 1 || t - 4 > r && e[t - 2][1].type === "whitespace") && (t -= r + 1 === t ? 2 : 4), t > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[t][1].end
  }, l = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[t][1].end,
    contentType: "text"
  }, de(e, r, t - r + 1, [["enter", i, n], ["enter", l, n], ["exit", l, n], ["exit", i, n]])), e;
}
function li(e, n, t) {
  let r = 0;
  return i;
  function i(s) {
    return e.enter("atxHeading"), l(s);
  }
  function l(s) {
    return e.enter("atxHeadingSequence"), o(s);
  }
  function o(s) {
    return s === 35 && r++ < 6 ? (e.consume(s), o) : s === null || ne(s) ? (e.exit("atxHeadingSequence"), a(s)) : t(s);
  }
  function a(s) {
    return s === 35 ? (e.enter("atxHeadingSequence"), c(s)) : s === null || v(s) ? (e.exit("atxHeading"), n(s)) : M(s) ? V(e, a, "whitespace")(s) : (e.enter("atxHeadingText"), u(s));
  }
  function c(s) {
    return s === 35 ? (e.consume(s), c) : (e.exit("atxHeadingSequence"), a(s));
  }
  function u(s) {
    return s === null || s === 35 || ne(s) ? (e.exit("atxHeadingText"), a(s)) : (e.consume(s), u);
  }
}
const oi = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Xn = ["pre", "script", "style", "textarea"], ai = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: ci,
  tokenize: pi
}, ui = {
  partial: !0,
  tokenize: fi
}, si = {
  partial: !0,
  tokenize: hi
};
function ci(e) {
  let n = e.length;
  for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); )
    ;
  return n > 1 && e[n - 2][1].type === "linePrefix" && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2)), e;
}
function pi(e, n, t) {
  const r = this;
  let i, l, o, a, c;
  return u;
  function u(m) {
    return s(m);
  }
  function s(m) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(m), h;
  }
  function h(m) {
    return m === 33 ? (e.consume(m), d) : m === 47 ? (e.consume(m), l = !0, w) : m === 63 ? (e.consume(m), i = 3, r.interrupt ? n : f) : ue(m) ? (e.consume(m), o = String.fromCharCode(m), L) : t(m);
  }
  function d(m) {
    return m === 45 ? (e.consume(m), i = 2, p) : m === 91 ? (e.consume(m), i = 5, a = 0, S) : ue(m) ? (e.consume(m), i = 4, r.interrupt ? n : f) : t(m);
  }
  function p(m) {
    return m === 45 ? (e.consume(m), r.interrupt ? n : f) : t(m);
  }
  function S(m) {
    const le = "CDATA[";
    return m === le.charCodeAt(a++) ? (e.consume(m), a === le.length ? r.interrupt ? n : I : S) : t(m);
  }
  function w(m) {
    return ue(m) ? (e.consume(m), o = String.fromCharCode(m), L) : t(m);
  }
  function L(m) {
    if (m === null || m === 47 || m === 62 || ne(m)) {
      const le = m === 47, ge = o.toLowerCase();
      return !le && !l && Xn.includes(ge) ? (i = 1, r.interrupt ? n(m) : I(m)) : oi.includes(o.toLowerCase()) ? (i = 6, le ? (e.consume(m), k) : r.interrupt ? n(m) : I(m)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(m) : l ? A(m) : E(m));
    }
    return m === 45 || ee(m) ? (e.consume(m), o += String.fromCharCode(m), L) : t(m);
  }
  function k(m) {
    return m === 62 ? (e.consume(m), r.interrupt ? n : I) : t(m);
  }
  function A(m) {
    return M(m) ? (e.consume(m), A) : N(m);
  }
  function E(m) {
    return m === 47 ? (e.consume(m), N) : m === 58 || m === 95 || ue(m) ? (e.consume(m), B) : M(m) ? (e.consume(m), E) : N(m);
  }
  function B(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || ee(m) ? (e.consume(m), B) : H(m);
  }
  function H(m) {
    return m === 61 ? (e.consume(m), y) : M(m) ? (e.consume(m), H) : E(m);
  }
  function y(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? t(m) : m === 34 || m === 39 ? (e.consume(m), c = m, R) : M(m) ? (e.consume(m), y) : q(m);
  }
  function R(m) {
    return m === c ? (e.consume(m), c = null, F) : m === null || v(m) ? t(m) : (e.consume(m), R);
  }
  function q(m) {
    return m === null || m === 34 || m === 39 || m === 47 || m === 60 || m === 61 || m === 62 || m === 96 || ne(m) ? H(m) : (e.consume(m), q);
  }
  function F(m) {
    return m === 47 || m === 62 || M(m) ? E(m) : t(m);
  }
  function N(m) {
    return m === 62 ? (e.consume(m), P) : t(m);
  }
  function P(m) {
    return m === null || v(m) ? I(m) : M(m) ? (e.consume(m), P) : t(m);
  }
  function I(m) {
    return m === 45 && i === 2 ? (e.consume(m), W) : m === 60 && i === 1 ? (e.consume(m), Y) : m === 62 && i === 4 ? (e.consume(m), ie) : m === 63 && i === 3 ? (e.consume(m), f) : m === 93 && i === 5 ? (e.consume(m), se) : v(m) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(ui, ce, T)(m)) : m === null || v(m) ? (e.exit("htmlFlowData"), T(m)) : (e.consume(m), I);
  }
  function T(m) {
    return e.check(si, C, ce)(m);
  }
  function C(m) {
    return e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), z;
  }
  function z(m) {
    return m === null || v(m) ? T(m) : (e.enter("htmlFlowData"), I(m));
  }
  function W(m) {
    return m === 45 ? (e.consume(m), f) : I(m);
  }
  function Y(m) {
    return m === 47 ? (e.consume(m), o = "", re) : I(m);
  }
  function re(m) {
    if (m === 62) {
      const le = o.toLowerCase();
      return Xn.includes(le) ? (e.consume(m), ie) : I(m);
    }
    return ue(m) && o.length < 8 ? (e.consume(m), o += String.fromCharCode(m), re) : I(m);
  }
  function se(m) {
    return m === 93 ? (e.consume(m), f) : I(m);
  }
  function f(m) {
    return m === 62 ? (e.consume(m), ie) : m === 45 && i === 2 ? (e.consume(m), f) : I(m);
  }
  function ie(m) {
    return m === null || v(m) ? (e.exit("htmlFlowData"), ce(m)) : (e.consume(m), ie);
  }
  function ce(m) {
    return e.exit("htmlFlow"), n(m);
  }
}
function hi(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return v(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : t(o);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? t(o) : n(o);
  }
}
function fi(e, n, t) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Qe, n, t);
  }
}
const mi = {
  name: "htmlText",
  tokenize: di
};
function di(e, n, t) {
  const r = this;
  let i, l, o;
  return a;
  function a(f) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(f), c;
  }
  function c(f) {
    return f === 33 ? (e.consume(f), u) : f === 47 ? (e.consume(f), H) : f === 63 ? (e.consume(f), E) : ue(f) ? (e.consume(f), q) : t(f);
  }
  function u(f) {
    return f === 45 ? (e.consume(f), s) : f === 91 ? (e.consume(f), l = 0, S) : ue(f) ? (e.consume(f), A) : t(f);
  }
  function s(f) {
    return f === 45 ? (e.consume(f), p) : t(f);
  }
  function h(f) {
    return f === null ? t(f) : f === 45 ? (e.consume(f), d) : v(f) ? (o = h, Y(f)) : (e.consume(f), h);
  }
  function d(f) {
    return f === 45 ? (e.consume(f), p) : h(f);
  }
  function p(f) {
    return f === 62 ? W(f) : f === 45 ? d(f) : h(f);
  }
  function S(f) {
    const ie = "CDATA[";
    return f === ie.charCodeAt(l++) ? (e.consume(f), l === ie.length ? w : S) : t(f);
  }
  function w(f) {
    return f === null ? t(f) : f === 93 ? (e.consume(f), L) : v(f) ? (o = w, Y(f)) : (e.consume(f), w);
  }
  function L(f) {
    return f === 93 ? (e.consume(f), k) : w(f);
  }
  function k(f) {
    return f === 62 ? W(f) : f === 93 ? (e.consume(f), k) : w(f);
  }
  function A(f) {
    return f === null || f === 62 ? W(f) : v(f) ? (o = A, Y(f)) : (e.consume(f), A);
  }
  function E(f) {
    return f === null ? t(f) : f === 63 ? (e.consume(f), B) : v(f) ? (o = E, Y(f)) : (e.consume(f), E);
  }
  function B(f) {
    return f === 62 ? W(f) : E(f);
  }
  function H(f) {
    return ue(f) ? (e.consume(f), y) : t(f);
  }
  function y(f) {
    return f === 45 || ee(f) ? (e.consume(f), y) : R(f);
  }
  function R(f) {
    return v(f) ? (o = R, Y(f)) : M(f) ? (e.consume(f), R) : W(f);
  }
  function q(f) {
    return f === 45 || ee(f) ? (e.consume(f), q) : f === 47 || f === 62 || ne(f) ? F(f) : t(f);
  }
  function F(f) {
    return f === 47 ? (e.consume(f), W) : f === 58 || f === 95 || ue(f) ? (e.consume(f), N) : v(f) ? (o = F, Y(f)) : M(f) ? (e.consume(f), F) : W(f);
  }
  function N(f) {
    return f === 45 || f === 46 || f === 58 || f === 95 || ee(f) ? (e.consume(f), N) : P(f);
  }
  function P(f) {
    return f === 61 ? (e.consume(f), I) : v(f) ? (o = P, Y(f)) : M(f) ? (e.consume(f), P) : F(f);
  }
  function I(f) {
    return f === null || f === 60 || f === 61 || f === 62 || f === 96 ? t(f) : f === 34 || f === 39 ? (e.consume(f), i = f, T) : v(f) ? (o = I, Y(f)) : M(f) ? (e.consume(f), I) : (e.consume(f), C);
  }
  function T(f) {
    return f === i ? (e.consume(f), i = void 0, z) : f === null ? t(f) : v(f) ? (o = T, Y(f)) : (e.consume(f), T);
  }
  function C(f) {
    return f === null || f === 34 || f === 39 || f === 60 || f === 61 || f === 96 ? t(f) : f === 47 || f === 62 || ne(f) ? F(f) : (e.consume(f), C);
  }
  function z(f) {
    return f === 47 || f === 62 || ne(f) ? F(f) : t(f);
  }
  function W(f) {
    return f === 62 ? (e.consume(f), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(f);
  }
  function Y(f) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), re;
  }
  function re(f) {
    return M(f) ? V(e, se, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(f) : se(f);
  }
  function se(f) {
    return e.enter("htmlTextData"), o(f);
  }
}
const Sn = {
  name: "labelEnd",
  resolveAll: ki,
  resolveTo: bi,
  tokenize: wi
}, gi = {
  tokenize: Si
}, yi = {
  tokenize: Ei
}, xi = {
  tokenize: Ci
};
function ki(e) {
  let n = -1;
  const t = [];
  for (; ++n < e.length; ) {
    const r = e[n][1];
    if (t.push(e[n]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", n += i;
    }
  }
  return e.length !== t.length && de(e, 0, e.length, t), e;
}
function bi(e, n) {
  let t = e.length, r = 0, i, l, o, a;
  for (; t--; )
    if (i = e[t][1], l) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[t][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (o) {
      if (e[t][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (l = t, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (o = t);
  const c = {
    type: e[l][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[l][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...e[l][1].start
    },
    end: {
      ...e[o][1].end
    }
  }, s = {
    type: "labelText",
    start: {
      ...e[l + r + 2][1].end
    },
    end: {
      ...e[o - 2][1].start
    }
  };
  return a = [["enter", c, n], ["enter", u, n]], a = te(a, e.slice(l + 1, l + r + 3)), a = te(a, [["enter", s, n]]), a = te(a, bn(n.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), n)), a = te(a, [["exit", s, n], e[o - 2], e[o - 1], ["exit", u, n]]), a = te(a, e.slice(o + 1)), a = te(a, [["exit", c, n]]), de(e, l, e.length, a), e;
}
function wi(e, n, t) {
  const r = this;
  let i = r.events.length, l, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(d) {
    return l ? l._inactive ? h(d) : (o = r.parser.defined.includes(Ce(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), c) : t(d);
  }
  function c(d) {
    return d === 40 ? e.attempt(gi, s, o ? s : h)(d) : d === 91 ? e.attempt(yi, s, o ? u : h)(d) : o ? s(d) : h(d);
  }
  function u(d) {
    return e.attempt(xi, s, h)(d);
  }
  function s(d) {
    return n(d);
  }
  function h(d) {
    return l._balanced = !0, t(d);
  }
}
function Si(e, n, t) {
  return r;
  function r(h) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(h), e.exit("resourceMarker"), i;
  }
  function i(h) {
    return ne(h) ? Fe(e, l)(h) : l(h);
  }
  function l(h) {
    return h === 41 ? s(h) : Lt(e, o, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(h);
  }
  function o(h) {
    return ne(h) ? Fe(e, c)(h) : s(h);
  }
  function a(h) {
    return t(h);
  }
  function c(h) {
    return h === 34 || h === 39 || h === 40 ? Ot(e, u, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(h) : s(h);
  }
  function u(h) {
    return ne(h) ? Fe(e, s)(h) : s(h);
  }
  function s(h) {
    return h === 41 ? (e.enter("resourceMarker"), e.consume(h), e.exit("resourceMarker"), e.exit("resource"), n) : t(h);
  }
}
function Ei(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return Dt.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(a);
  }
  function l(a) {
    return r.parser.defined.includes(Ce(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(a) : t(a);
  }
  function o(a) {
    return t(a);
  }
}
function Ci(e, n, t) {
  return r;
  function r(l) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i;
  }
  function i(l) {
    return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), n) : t(l);
  }
}
const Ii = {
  name: "labelStartImage",
  resolveAll: Sn.resolveAll,
  tokenize: Ti
};
function Ti(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), l;
  }
  function l(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), o) : t(a);
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(a) : n(a);
  }
}
const Pi = {
  name: "labelStartLink",
  resolveAll: Sn.resolveAll,
  tokenize: Ai
};
function Ai(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), l;
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(o) : n(o);
  }
}
const Ke = {
  name: "lineEnding",
  tokenize: vi
};
function vi(e, n) {
  return t;
  function t(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), V(e, n, "linePrefix");
  }
}
const We = {
  name: "thematicBreak",
  tokenize: zi
};
function zi(e, n, t) {
  let r = 0, i;
  return l;
  function l(u) {
    return e.enter("thematicBreak"), o(u);
  }
  function o(u) {
    return i = u, a(u);
  }
  function a(u) {
    return u === i ? (e.enter("thematicBreakSequence"), c(u)) : r >= 3 && (u === null || v(u)) ? (e.exit("thematicBreak"), n(u)) : t(u);
  }
  function c(u) {
    return u === i ? (e.consume(u), r++, c) : (e.exit("thematicBreakSequence"), M(u) ? V(e, a, "whitespace")(u) : a(u));
  }
}
const G = {
  continuation: {
    tokenize: _i
  },
  exit: Fi,
  name: "list",
  tokenize: Oi
}, Li = {
  partial: !0,
  tokenize: Ni
}, Di = {
  partial: !0,
  tokenize: Ri
};
function Oi(e, n, t) {
  const r = this, i = r.events[r.events.length - 1];
  let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return a;
  function a(p) {
    const S = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (S === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : hn(p)) {
      if (r.containerState.type || (r.containerState.type = S, e.enter(S, {
        _container: !0
      })), S === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(We, t, u)(p) : u(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), c(p);
    }
    return t(p);
  }
  function c(p) {
    return hn(p) && ++o < 10 ? (e.consume(p), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), u(p)) : t(p);
  }
  function u(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      Qe,
      // Can’t be empty when interrupting.
      r.interrupt ? t : s,
      e.attempt(Li, d, h)
    );
  }
  function s(p) {
    return r.containerState.initialBlankLine = !0, l++, d(p);
  }
  function h(p) {
    return M(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), d) : t(p);
  }
  function d(p) {
    return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, n(p);
  }
}
function _i(e, n, t) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Qe, i, l);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, V(e, n, "listItemIndent", r.containerState.size + 1)(a);
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !M(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Di, n, o)(a));
  }
  function o(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, V(e, e.attempt(G, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function Ri(e, n, t) {
  const r = this;
  return V(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? n(l) : t(l);
  }
}
function Fi(e) {
  e.exit(this.containerState.type);
}
function Ni(e, n, t) {
  const r = this;
  return V(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return !M(l) && o && o[1].type === "listItemPrefixWhitespace" ? n(l) : t(l);
  }
}
const Qn = {
  name: "setextUnderline",
  resolveTo: Mi,
  tokenize: Bi
};
function Mi(e, n) {
  let t = e.length, r, i, l;
  for (; t--; )
    if (e[t][0] === "enter") {
      if (e[t][1].type === "content") {
        r = t;
        break;
      }
      e[t][1].type === "paragraph" && (i = t);
    } else
      e[t][1].type === "content" && e.splice(t, 1), !l && e[t][1].type === "definition" && (l = t);
  const o = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", l ? (e.splice(i, 0, ["enter", o, n]), e.splice(l + 1, 0, ["exit", e[r][1], n]), e[r][1].end = {
    ...e[l][1].end
  }) : e[r][1] = o, e.push(["exit", o, n]), e;
}
function Bi(e, n, t) {
  const r = this;
  let i;
  return l;
  function l(u) {
    let s = r.events.length, h;
    for (; s--; )
      if (r.events[s][1].type !== "lineEnding" && r.events[s][1].type !== "linePrefix" && r.events[s][1].type !== "content") {
        h = r.events[s][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || h) ? (e.enter("setextHeadingLine"), i = u, o(u)) : t(u);
  }
  function o(u) {
    return e.enter("setextHeadingLineSequence"), a(u);
  }
  function a(u) {
    return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), M(u) ? V(e, c, "lineSuffix")(u) : c(u));
  }
  function c(u) {
    return u === null || v(u) ? (e.exit("setextHeadingLine"), n(u)) : t(u);
  }
}
function ji(e, n) {
  const t = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " ")
  ).trim();
}
const Hi = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ui = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Vi = {};
function Gn(e, n) {
  return (Vi.jsx ? Ui : Hi).test(e);
}
const qi = /[ \t\n\f\r]/g;
function $i(e) {
  return typeof e == "object" ? e.type === "text" ? Jn(e.value) : !1 : Jn(e);
}
function Jn(e) {
  return e.replace(qi, "") === "";
}
class je {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(n, t, r) {
    this.normal = t, this.property = n, r && (this.space = r);
  }
}
je.prototype.normal = {};
je.prototype.property = {};
je.prototype.space = void 0;
function _t(e, n) {
  const t = {}, r = {};
  for (const i of e)
    Object.assign(t, i.property), Object.assign(r, i.normal);
  return new je(t, r, n);
}
function mn(e) {
  return e.toLowerCase();
}
class J {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(n, t) {
    this.attribute = t, this.property = n;
  }
}
J.prototype.attribute = "";
J.prototype.booleanish = !1;
J.prototype.boolean = !1;
J.prototype.commaOrSpaceSeparated = !1;
J.prototype.commaSeparated = !1;
J.prototype.defined = !1;
J.prototype.mustUseProperty = !1;
J.prototype.number = !1;
J.prototype.overloadedBoolean = !1;
J.prototype.property = "";
J.prototype.spaceSeparated = !1;
J.prototype.space = void 0;
let Wi = 0;
const O = xe(), $ = xe(), Rt = xe(), x = xe(), U = xe(), Ie = xe(), Z = xe();
function xe() {
  return 2 ** ++Wi;
}
const dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: O,
  booleanish: $,
  commaOrSpaceSeparated: Z,
  commaSeparated: Ie,
  number: x,
  overloadedBoolean: Rt,
  spaceSeparated: U
}, Symbol.toStringTag, { value: "Module" })), Ze = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(dn)
);
class En extends J {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(n, t, r, i) {
    let l = -1;
    if (super(n, t), Kn(this, "space", i), typeof r == "number")
      for (; ++l < Ze.length; ) {
        const o = Ze[l];
        Kn(this, Ze[l], (r & dn[o]) === dn[o]);
      }
  }
}
En.prototype.defined = !0;
function Kn(e, n, t) {
  t && (e[n] = t);
}
function Pe(e) {
  const n = {}, t = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const l = new En(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), n[r] = l, t[mn(r)] = r, t[mn(l.attribute)] = r;
  }
  return new je(n, t, e.space);
}
const Ft = Pe({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: $,
    ariaAutoComplete: null,
    ariaBusy: $,
    ariaChecked: $,
    ariaColCount: x,
    ariaColIndex: x,
    ariaColSpan: x,
    ariaControls: U,
    ariaCurrent: null,
    ariaDescribedBy: U,
    ariaDetails: null,
    ariaDisabled: $,
    ariaDropEffect: U,
    ariaErrorMessage: null,
    ariaExpanded: $,
    ariaFlowTo: U,
    ariaGrabbed: $,
    ariaHasPopup: null,
    ariaHidden: $,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: U,
    ariaLevel: x,
    ariaLive: null,
    ariaModal: $,
    ariaMultiLine: $,
    ariaMultiSelectable: $,
    ariaOrientation: null,
    ariaOwns: U,
    ariaPlaceholder: null,
    ariaPosInSet: x,
    ariaPressed: $,
    ariaReadOnly: $,
    ariaRelevant: null,
    ariaRequired: $,
    ariaRoleDescription: U,
    ariaRowCount: x,
    ariaRowIndex: x,
    ariaRowSpan: x,
    ariaSelected: $,
    ariaSetSize: x,
    ariaSort: null,
    ariaValueMax: x,
    ariaValueMin: x,
    ariaValueNow: x,
    ariaValueText: null,
    role: null
  },
  transform(e, n) {
    return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
  }
});
function Nt(e, n) {
  return n in e ? e[n] : n;
}
function Mt(e, n) {
  return Nt(e, n.toLowerCase());
}
const Yi = Pe({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Ie,
    acceptCharset: U,
    accessKey: U,
    action: null,
    allow: null,
    allowFullScreen: O,
    allowPaymentRequest: O,
    allowUserMedia: O,
    alt: null,
    as: null,
    async: O,
    autoCapitalize: null,
    autoComplete: U,
    autoFocus: O,
    autoPlay: O,
    blocking: U,
    capture: null,
    charSet: null,
    checked: O,
    cite: null,
    className: U,
    cols: x,
    colSpan: null,
    content: null,
    contentEditable: $,
    controls: O,
    controlsList: U,
    coords: x | Ie,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: O,
    defer: O,
    dir: null,
    dirName: null,
    disabled: O,
    download: Rt,
    draggable: $,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: O,
    formTarget: null,
    headers: U,
    height: x,
    hidden: O,
    high: x,
    href: null,
    hrefLang: null,
    htmlFor: U,
    httpEquiv: U,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: O,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: O,
    itemId: null,
    itemProp: U,
    itemRef: U,
    itemScope: O,
    itemType: U,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: O,
    low: x,
    manifest: null,
    max: null,
    maxLength: x,
    media: null,
    method: null,
    min: null,
    minLength: x,
    multiple: O,
    muted: O,
    name: null,
    nonce: null,
    noModule: O,
    noValidate: O,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: O,
    optimum: x,
    pattern: null,
    ping: U,
    placeholder: null,
    playsInline: O,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: O,
    referrerPolicy: null,
    rel: U,
    required: O,
    reversed: O,
    rows: x,
    rowSpan: x,
    sandbox: U,
    scope: null,
    scoped: O,
    seamless: O,
    selected: O,
    shadowRootClonable: O,
    shadowRootDelegatesFocus: O,
    shadowRootMode: null,
    shape: null,
    size: x,
    sizes: null,
    slot: null,
    span: x,
    spellCheck: $,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: x,
    step: null,
    style: null,
    tabIndex: x,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: O,
    useMap: null,
    value: $,
    width: x,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: U,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: x,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: x,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: O,
    // Lists. Use CSS to reduce space between items instead
    declare: O,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: x,
    // `<img>` and `<object>`
    leftMargin: x,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: x,
    // `<body>`
    marginWidth: x,
    // `<body>`
    noResize: O,
    // `<frame>`
    noHref: O,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: O,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: O,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: x,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: $,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: x,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: x,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: O,
    disableRemotePlayback: O,
    prefix: null,
    property: null,
    results: x,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Mt
}), Xi = Pe({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: Z,
    accentHeight: x,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: x,
    amplitude: x,
    arabicForm: null,
    ascent: x,
    attributeName: null,
    attributeType: null,
    azimuth: x,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: x,
    by: null,
    calcMode: null,
    capHeight: x,
    className: U,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: x,
    diffuseConstant: x,
    direction: null,
    display: null,
    dur: null,
    divisor: x,
    dominantBaseline: null,
    download: O,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: x,
    enableBackground: null,
    end: null,
    event: null,
    exponent: x,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: x,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Ie,
    g2: Ie,
    glyphName: Ie,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: x,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: x,
    horizOriginX: x,
    horizOriginY: x,
    id: null,
    ideographic: x,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: x,
    k: x,
    k1: x,
    k2: x,
    k3: x,
    k4: x,
    kernelMatrix: Z,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: x,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: x,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: x,
    overlineThickness: x,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: x,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: U,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: x,
    pointsAtY: x,
    pointsAtZ: x,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Z,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Z,
    rev: Z,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Z,
    requiredFeatures: Z,
    requiredFonts: Z,
    requiredFormats: Z,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: x,
    specularExponent: x,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: x,
    strikethroughThickness: x,
    string: null,
    stroke: null,
    strokeDashArray: Z,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: x,
    strokeOpacity: x,
    strokeWidth: null,
    style: null,
    surfaceScale: x,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Z,
    tabIndex: x,
    tableValues: null,
    target: null,
    targetX: x,
    targetY: x,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Z,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: x,
    underlineThickness: x,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: x,
    values: null,
    vAlphabetic: x,
    vMathematical: x,
    vectorEffect: null,
    vHanging: x,
    vIdeographic: x,
    version: null,
    vertAdvY: x,
    vertOriginX: x,
    vertOriginY: x,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: x,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Nt
}), Bt = Pe({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, n) {
    return "xlink:" + n.slice(5).toLowerCase();
  }
}), jt = Pe({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Mt
}), Ht = Pe({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, n) {
    return "xml:" + n.slice(3).toLowerCase();
  }
}), Qi = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Gi = /[A-Z]/g, Zn = /-[a-z]/g, Ji = /^data[-\w.:]+$/i;
function Ki(e, n) {
  const t = mn(n);
  let r = n, i = J;
  if (t in e.normal)
    return e.property[e.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && Ji.test(n)) {
    if (n.charAt(4) === "-") {
      const l = n.slice(5).replace(Zn, el);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = n.slice(4);
      if (!Zn.test(l)) {
        let o = l.replace(Gi, Zi);
        o.charAt(0) !== "-" && (o = "-" + o), n = "data" + o;
      }
    }
    i = En;
  }
  return new i(r, n);
}
function Zi(e) {
  return "-" + e.toLowerCase();
}
function el(e) {
  return e.charAt(1).toUpperCase();
}
const nl = _t([Ft, Yi, Bt, jt, Ht], "html"), Cn = _t([Ft, Xi, Bt, jt, Ht], "svg");
function tl(e) {
  return e.join(" ").trim();
}
var Se = {}, en, et;
function rl() {
  if (et) return en;
  et = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, n = /\n/g, t = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, a = /^\s+|\s+$/g, c = `
`, u = "/", s = "*", h = "", d = "comment", p = "declaration";
  en = function(w, L) {
    if (typeof w != "string")
      throw new TypeError("First argument must be a string");
    if (!w) return [];
    L = L || {};
    var k = 1, A = 1;
    function E(T) {
      var C = T.match(n);
      C && (k += C.length);
      var z = T.lastIndexOf(c);
      A = ~z ? T.length - z : A + T.length;
    }
    function B() {
      var T = { line: k, column: A };
      return function(C) {
        return C.position = new H(T), q(), C;
      };
    }
    function H(T) {
      this.start = T, this.end = { line: k, column: A }, this.source = L.source;
    }
    H.prototype.content = w;
    function y(T) {
      var C = new Error(
        L.source + ":" + k + ":" + A + ": " + T
      );
      if (C.reason = T, C.filename = L.source, C.line = k, C.column = A, C.source = w, !L.silent) throw C;
    }
    function R(T) {
      var C = T.exec(w);
      if (C) {
        var z = C[0];
        return E(z), w = w.slice(z.length), C;
      }
    }
    function q() {
      R(t);
    }
    function F(T) {
      var C;
      for (T = T || []; C = N(); )
        C !== !1 && T.push(C);
      return T;
    }
    function N() {
      var T = B();
      if (!(u != w.charAt(0) || s != w.charAt(1))) {
        for (var C = 2; h != w.charAt(C) && (s != w.charAt(C) || u != w.charAt(C + 1)); )
          ++C;
        if (C += 2, h === w.charAt(C - 1))
          return y("End of comment missing");
        var z = w.slice(2, C - 2);
        return A += 2, E(z), w = w.slice(C), A += 2, T({
          type: d,
          comment: z
        });
      }
    }
    function P() {
      var T = B(), C = R(r);
      if (C) {
        if (N(), !R(i)) return y("property missing ':'");
        var z = R(l), W = T({
          type: p,
          property: S(C[0].replace(e, h)),
          value: z ? S(z[0].replace(e, h)) : h
        });
        return R(o), W;
      }
    }
    function I() {
      var T = [];
      F(T);
      for (var C; C = P(); )
        C !== !1 && (T.push(C), F(T));
      return T;
    }
    return q(), I();
  };
  function S(w) {
    return w ? w.replace(a, h) : h;
  }
  return en;
}
var nt;
function il() {
  if (nt) return Se;
  nt = 1;
  var e = Se && Se.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Se, "__esModule", { value: !0 }), Se.default = t;
  var n = e(rl());
  function t(r, i) {
    var l = null;
    if (!r || typeof r != "string")
      return l;
    var o = (0, n.default)(r), a = typeof i == "function";
    return o.forEach(function(c) {
      if (c.type === "declaration") {
        var u = c.property, s = c.value;
        a ? i(u, s, c) : s && (l = l || {}, l[u] = s);
      }
    }), l;
  }
  return Se;
}
var De = {}, tt;
function ll() {
  if (tt) return De;
  tt = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, t = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, l = function(u) {
    return !u || t.test(u) || e.test(u);
  }, o = function(u, s) {
    return s.toUpperCase();
  }, a = function(u, s) {
    return "".concat(s, "-");
  }, c = function(u, s) {
    return s === void 0 && (s = {}), l(u) ? u : (u = u.toLowerCase(), s.reactCompat ? u = u.replace(i, a) : u = u.replace(r, a), u.replace(n, o));
  };
  return De.camelCase = c, De;
}
var Oe, rt;
function ol() {
  if (rt) return Oe;
  rt = 1;
  var e = Oe && Oe.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, n = e(il()), t = ll();
  function r(i, l) {
    var o = {};
    return !i || typeof i != "string" || (0, n.default)(i, function(a, c) {
      a && c && (o[(0, t.camelCase)(a, l)] = c);
    }), o;
  }
  return r.default = r, Oe = r, Oe;
}
var al = ol();
const ul = /* @__PURE__ */ Ct(al), Ut = Vt("end"), In = Vt("start");
function Vt(e) {
  return n;
  function n(t) {
    const r = t && t.position && t.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function sl(e) {
  const n = In(e), t = Ut(e);
  if (n && t)
    return { start: n, end: t };
}
function Ne(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? it(e.position) : "start" in e || "end" in e ? it(e) : "line" in e || "column" in e ? gn(e) : "";
}
function gn(e) {
  return lt(e && e.line) + ":" + lt(e && e.column);
}
function it(e) {
  return gn(e && e.start) + "-" + gn(e && e.end);
}
function lt(e) {
  return e && typeof e == "number" ? e : 1;
}
class Q extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(n, t, r) {
    super(), typeof t == "string" && (r = t, t = void 0);
    let i = "", l = {}, o = !1;
    if (t && ("line" in t && "column" in t ? l = { place: t } : "start" in t && "end" in t ? l = { place: t } : "type" in t ? l = {
      ancestors: [t],
      place: t.position
    } : l = { ...t }), typeof n == "string" ? i = n : !l.cause && n && (o = !0, i = n.message, l.cause = n), !l.ruleId && !l.source && typeof r == "string") {
      const c = r.indexOf(":");
      c === -1 ? l.ruleId = r : (l.source = r.slice(0, c), l.ruleId = r.slice(c + 1));
    }
    if (!l.place && l.ancestors && l.ancestors) {
      const c = l.ancestors[l.ancestors.length - 1];
      c && (l.place = c.position);
    }
    const a = l.place && "start" in l.place ? l.place.start : l.place;
    this.ancestors = l.ancestors || void 0, this.cause = l.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = a ? a.line : void 0, this.name = Ne(l.place) || "1:1", this.place = l.place || void 0, this.reason = this.message, this.ruleId = l.ruleId || void 0, this.source = l.source || void 0, this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
Q.prototype.file = "";
Q.prototype.name = "";
Q.prototype.reason = "";
Q.prototype.message = "";
Q.prototype.stack = "";
Q.prototype.column = void 0;
Q.prototype.line = void 0;
Q.prototype.ancestors = void 0;
Q.prototype.cause = void 0;
Q.prototype.fatal = void 0;
Q.prototype.place = void 0;
Q.prototype.ruleId = void 0;
Q.prototype.source = void 0;
const Tn = {}.hasOwnProperty, cl = /* @__PURE__ */ new Map(), pl = /[A-Z]/g, hl = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), fl = /* @__PURE__ */ new Set(["td", "th"]), qt = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function ml(e, n) {
  if (!n || n.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const t = n.filePath || void 0;
  let r;
  if (n.development) {
    if (typeof n.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Sl(t, n.jsxDEV);
  } else {
    if (typeof n.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof n.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = wl(t, n.jsx, n.jsxs);
  }
  const i = {
    Fragment: n.Fragment,
    ancestors: [],
    components: n.components || {},
    create: r,
    elementAttributeNameCase: n.elementAttributeNameCase || "react",
    evaluater: n.createEvaluater ? n.createEvaluater() : void 0,
    filePath: t,
    ignoreInvalidStyle: n.ignoreInvalidStyle || !1,
    passKeys: n.passKeys !== !1,
    passNode: n.passNode || !1,
    schema: n.space === "svg" ? Cn : nl,
    stylePropertyNameCase: n.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: n.tableCellAlignToStyle !== !1
  }, l = $t(i, e, void 0);
  return l && typeof l != "string" ? l : i.create(
    e,
    i.Fragment,
    { children: l || void 0 },
    void 0
  );
}
function $t(e, n, t) {
  if (n.type === "element")
    return dl(e, n, t);
  if (n.type === "mdxFlowExpression" || n.type === "mdxTextExpression")
    return gl(e, n);
  if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement")
    return xl(e, n, t);
  if (n.type === "mdxjsEsm")
    return yl(e, n);
  if (n.type === "root")
    return kl(e, n, t);
  if (n.type === "text")
    return bl(e, n);
}
function dl(e, n, t) {
  const r = e.schema;
  let i = r;
  n.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Cn, e.schema = i), e.ancestors.push(n);
  const l = Yt(e, n.tagName, !1), o = El(e, n);
  let a = An(e, n);
  return hl.has(n.tagName) && (a = a.filter(function(c) {
    return typeof c == "string" ? !$i(c) : !0;
  })), Wt(e, o, l, n), Pn(o, a), e.ancestors.pop(), e.schema = r, e.create(n, l, o, t);
}
function gl(e, n) {
  if (n.data && n.data.estree && e.evaluater) {
    const r = n.data.estree.body[0];
    return Re(r.type === "ExpressionStatement"), /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  Be(e, n.position);
}
function yl(e, n) {
  if (n.data && n.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(n.data.estree)
    );
  Be(e, n.position);
}
function xl(e, n, t) {
  const r = e.schema;
  let i = r;
  n.name === "svg" && r.space === "html" && (i = Cn, e.schema = i), e.ancestors.push(n);
  const l = n.name === null ? e.Fragment : Yt(e, n.name, !0), o = Cl(e, n), a = An(e, n);
  return Wt(e, o, l, n), Pn(o, a), e.ancestors.pop(), e.schema = r, e.create(n, l, o, t);
}
function kl(e, n, t) {
  const r = {};
  return Pn(r, An(e, n)), e.create(n, e.Fragment, r, t);
}
function bl(e, n) {
  return n.value;
}
function Wt(e, n, t, r) {
  typeof t != "string" && t !== e.Fragment && e.passNode && (n.node = r);
}
function Pn(e, n) {
  if (n.length > 0) {
    const t = n.length > 1 ? n : n[0];
    t && (e.children = t);
  }
}
function wl(e, n, t) {
  return r;
  function r(i, l, o, a) {
    const u = Array.isArray(o.children) ? t : n;
    return a ? u(l, o, a) : u(l, o);
  }
}
function Sl(e, n) {
  return t;
  function t(r, i, l, o) {
    const a = Array.isArray(l.children), c = In(r);
    return n(
      i,
      l,
      o,
      a,
      {
        columnNumber: c ? c.column - 1 : void 0,
        fileName: e,
        lineNumber: c ? c.line : void 0
      },
      void 0
    );
  }
}
function El(e, n) {
  const t = {};
  let r, i;
  for (i in n.properties)
    if (i !== "children" && Tn.call(n.properties, i)) {
      const l = Il(e, i, n.properties[i]);
      if (l) {
        const [o, a] = l;
        e.tableCellAlignToStyle && o === "align" && typeof a == "string" && fl.has(n.tagName) ? r = a : t[o] = a;
      }
    }
  if (r) {
    const l = (
      /** @type {Style} */
      t.style || (t.style = {})
    );
    l[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return t;
}
function Cl(e, n) {
  const t = {};
  for (const r of n.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const l = r.data.estree.body[0];
        Re(l.type === "ExpressionStatement");
        const o = l.expression;
        Re(o.type === "ObjectExpression");
        const a = o.properties[0];
        Re(a.type === "SpreadElement"), Object.assign(
          t,
          e.evaluater.evaluateExpression(a.argument)
        );
      } else
        Be(e, n.position);
    else {
      const i = r.name;
      let l;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          Re(a.type === "ExpressionStatement"), l = e.evaluater.evaluateExpression(a.expression);
        } else
          Be(e, n.position);
      else
        l = r.value === null ? !0 : r.value;
      t[i] = /** @type {Props[keyof Props]} */
      l;
    }
  return t;
}
function An(e, n) {
  const t = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : cl;
  for (; ++r < n.children.length; ) {
    const l = n.children[r];
    let o;
    if (e.passKeys) {
      const c = l.type === "element" ? l.tagName : l.type === "mdxJsxFlowElement" || l.type === "mdxJsxTextElement" ? l.name : void 0;
      if (c) {
        const u = i.get(c) || 0;
        o = c + "-" + u, i.set(c, u + 1);
      }
    }
    const a = $t(e, l, o);
    a !== void 0 && t.push(a);
  }
  return t;
}
function Il(e, n, t) {
  const r = Ki(e.schema, n);
  if (!(t == null || typeof t == "number" && Number.isNaN(t))) {
    if (Array.isArray(t) && (t = r.commaSeparated ? ji(t) : tl(t)), r.property === "style") {
      let i = typeof t == "object" ? t : Tl(e, String(t));
      return e.stylePropertyNameCase === "css" && (i = Pl(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Qi[r.property] || r.property : r.attribute,
      t
    ];
  }
}
function Tl(e, n) {
  try {
    return ul(n, { reactCompat: !0 });
  } catch (t) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      t
    ), i = new Q("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = qt + "#cannot-parse-style-attribute", i;
  }
}
function Yt(e, n, t) {
  let r;
  if (!t)
    r = { type: "Literal", value: n };
  else if (n.includes(".")) {
    const i = n.split(".");
    let l = -1, o;
    for (; ++l < i.length; ) {
      const a = Gn(i[l]) ? { type: "Identifier", name: i[l] } : { type: "Literal", value: i[l] };
      o = o ? {
        type: "MemberExpression",
        object: o,
        property: a,
        computed: !!(l && a.type === "Literal"),
        optional: !1
      } : a;
    }
    r = o;
  } else
    r = Gn(n) && !/^[a-z]/.test(n) ? { type: "Identifier", name: n } : { type: "Literal", value: n };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return Tn.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  Be(e);
}
function Be(e, n) {
  const t = new Q(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: n,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw t.file = e.filePath || void 0, t.url = qt + "#cannot-handle-mdx-estrees-without-createevaluater", t;
}
function Pl(e) {
  const n = {};
  let t;
  for (t in e)
    Tn.call(e, t) && (n[Al(t)] = e[t]);
  return n;
}
function Al(e) {
  let n = e.replace(pl, vl);
  return n.slice(0, 3) === "ms-" && (n = "-" + n), n;
}
function vl(e) {
  return "-" + e.toLowerCase();
}
const nn = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, zl = {
  tokenize: Ll
};
function Ll(e) {
  const n = e.attempt(this.parser.constructs.contentInitial, r, i);
  let t;
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), V(e, n, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), l(a);
  }
  function l(a) {
    const c = e.enter("chunkText", {
      contentType: "text",
      previous: t
    });
    return t && (t.next = c), t = c, o(a);
  }
  function o(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return v(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), o);
  }
}
const Dl = {
  tokenize: Ol
}, ot = {
  tokenize: _l
};
function Ol(e) {
  const n = this, t = [];
  let r = 0, i, l, o;
  return a;
  function a(E) {
    if (r < t.length) {
      const B = t[r];
      return n.containerState = B[1], e.attempt(B[0].continuation, c, u)(E);
    }
    return u(E);
  }
  function c(E) {
    if (r++, n.containerState._closeFlow) {
      n.containerState._closeFlow = void 0, i && A();
      const B = n.events.length;
      let H = B, y;
      for (; H--; )
        if (n.events[H][0] === "exit" && n.events[H][1].type === "chunkFlow") {
          y = n.events[H][1].end;
          break;
        }
      k(r);
      let R = B;
      for (; R < n.events.length; )
        n.events[R][1].end = {
          ...y
        }, R++;
      return de(n.events, H + 1, 0, n.events.slice(B)), n.events.length = R, u(E);
    }
    return a(E);
  }
  function u(E) {
    if (r === t.length) {
      if (!i)
        return d(E);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return S(E);
      n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return n.containerState = {}, e.check(ot, s, h)(E);
  }
  function s(E) {
    return i && A(), k(r), d(E);
  }
  function h(E) {
    return n.parser.lazy[n.now().line] = r !== t.length, o = n.now().offset, S(E);
  }
  function d(E) {
    return n.containerState = {}, e.attempt(ot, p, S)(E);
  }
  function p(E) {
    return r++, t.push([n.currentConstruct, n.containerState]), d(E);
  }
  function S(E) {
    if (E === null) {
      i && A(), k(0), e.consume(E);
      return;
    }
    return i = i || n.parser.flow(n.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: l
    }), w(E);
  }
  function w(E) {
    if (E === null) {
      L(e.exit("chunkFlow"), !0), k(0), e.consume(E);
      return;
    }
    return v(E) ? (e.consume(E), L(e.exit("chunkFlow")), r = 0, n.interrupt = void 0, a) : (e.consume(E), w);
  }
  function L(E, B) {
    const H = n.sliceStream(E);
    if (B && H.push(null), E.previous = l, l && (l.next = E), l = E, i.defineSkip(E.start), i.write(H), n.parser.lazy[E.start.line]) {
      let y = i.events.length;
      for (; y--; )
        if (
          // The token starts before the line ending…
          i.events[y][1].start.offset < o && // …and either is not ended yet…
          (!i.events[y][1].end || // …or ends after it.
          i.events[y][1].end.offset > o)
        )
          return;
      const R = n.events.length;
      let q = R, F, N;
      for (; q--; )
        if (n.events[q][0] === "exit" && n.events[q][1].type === "chunkFlow") {
          if (F) {
            N = n.events[q][1].end;
            break;
          }
          F = !0;
        }
      for (k(r), y = R; y < n.events.length; )
        n.events[y][1].end = {
          ...N
        }, y++;
      de(n.events, q + 1, 0, n.events.slice(R)), n.events.length = y;
    }
  }
  function k(E) {
    let B = t.length;
    for (; B-- > E; ) {
      const H = t[B];
      n.containerState = H[1], H[0].exit.call(n, e);
    }
    t.length = E;
  }
  function A() {
    i.write([null]), l = void 0, i = void 0, n.containerState._closeFlow = void 0;
  }
}
function _l(e, n, t) {
  return V(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
const Rl = {
  tokenize: Fl
};
function Fl(e) {
  const n = this, t = e.attempt(
    // Try to parse a blank line.
    Qe,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, V(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Wr, i)), "linePrefix"))
  );
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(l), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t;
  }
  function i(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), n.currentConstruct = void 0, t;
  }
}
const Nl = {
  resolveAll: Qt()
}, Ml = Xt("string"), Bl = Xt("text");
function Xt(e) {
  return {
    resolveAll: Qt(e === "text" ? jl : void 0),
    tokenize: n
  };
  function n(t) {
    const r = this, i = this.parser.constructs[e], l = t.attempt(i, o, a);
    return o;
    function o(s) {
      return u(s) ? l(s) : a(s);
    }
    function a(s) {
      if (s === null) {
        t.consume(s);
        return;
      }
      return t.enter("data"), t.consume(s), c;
    }
    function c(s) {
      return u(s) ? (t.exit("data"), l(s)) : (t.consume(s), c);
    }
    function u(s) {
      if (s === null)
        return !0;
      const h = i[s];
      let d = -1;
      if (h)
        for (; ++d < h.length; ) {
          const p = h[d];
          if (!p.previous || p.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Qt(e) {
  return n;
  function n(t, r) {
    let i = -1, l;
    for (; ++i <= t.length; )
      l === void 0 ? t[i] && t[i][1].type === "data" && (l = i, i++) : (!t[i] || t[i][1].type !== "data") && (i !== l + 2 && (t[l][1].end = t[i - 1][1].end, t.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
    return e ? e(t, r) : t;
  }
}
function jl(e, n) {
  let t = 0;
  for (; ++t <= e.length; )
    if ((t === e.length || e[t][1].type === "lineEnding") && e[t - 1][1].type === "data") {
      const r = e[t - 1][1], i = n.sliceStream(r);
      let l = i.length, o = -1, a = 0, c;
      for (; l--; ) {
        const u = i[l];
        if (typeof u == "string") {
          for (o = u.length; u.charCodeAt(o - 1) === 32; )
            a++, o--;
          if (o) break;
          o = -1;
        } else if (u === -2)
          c = !0, a++;
        else if (u !== -1) {
          l++;
          break;
        }
      }
      if (n._contentTypeTextTrailing && t === e.length && (a = 0), a) {
        const u = {
          type: t === e.length || c || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: l ? o : r.start._bufferIndex + o,
            _index: r.start._index + l,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...u.start
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(t, 0, ["enter", u, n], ["exit", u, n]), t += 2);
      }
      t++;
    }
  return e;
}
const Hl = {
  42: G,
  43: G,
  45: G,
  48: G,
  49: G,
  50: G,
  51: G,
  52: G,
  53: G,
  54: G,
  55: G,
  56: G,
  57: G,
  62: Pt
}, Ul = {
  91: Jr
}, Vl = {
  [-2]: Je,
  [-1]: Je,
  32: Je
}, ql = {
  35: ri,
  42: We,
  45: [Qn, We],
  60: ai,
  61: Qn,
  95: We,
  96: Yn,
  126: Yn
}, $l = {
  38: vt,
  92: At
}, Wl = {
  [-5]: Ke,
  [-4]: Ke,
  [-3]: Ke,
  33: Ii,
  38: vt,
  42: fn,
  60: [Ar, mi],
  91: Pi,
  92: [ni, At],
  93: Sn,
  95: fn,
  96: jr
}, Yl = {
  null: [fn, Nl]
}, Xl = {
  null: [42, 95]
}, Ql = {
  null: []
}, Gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Xl,
  contentInitial: Ul,
  disable: Ql,
  document: Hl,
  flow: ql,
  flowInitial: Vl,
  insideSpan: Yl,
  string: $l,
  text: Wl
}, Symbol.toStringTag, { value: "Module" }));
function Jl(e, n, t) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: t && t.line || 1,
    column: t && t.column || 1,
    offset: t && t.offset || 0
  };
  const i = {}, l = [];
  let o = [], a = [];
  const c = {
    attempt: R(H),
    check: R(y),
    consume: A,
    enter: E,
    exit: B,
    interrupt: R(y, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: w,
    events: [],
    now: S,
    parser: e,
    previous: null,
    sliceSerialize: d,
    sliceStream: p,
    write: h
  };
  let s = n.tokenize.call(u, c);
  return n.resolveAll && l.push(n), u;
  function h(P) {
    return o = te(o, P), L(), o[o.length - 1] !== null ? [] : (q(n, 0), u.events = bn(l, u.events, u), u.events);
  }
  function d(P, I) {
    return Zl(p(P), I);
  }
  function p(P) {
    return Kl(o, P);
  }
  function S() {
    const {
      _bufferIndex: P,
      _index: I,
      line: T,
      column: C,
      offset: z
    } = r;
    return {
      _bufferIndex: P,
      _index: I,
      line: T,
      column: C,
      offset: z
    };
  }
  function w(P) {
    i[P.line] = P.column, N();
  }
  function L() {
    let P;
    for (; r._index < o.length; ) {
      const I = o[r._index];
      if (typeof I == "string")
        for (P = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === P && r._bufferIndex < I.length; )
          k(I.charCodeAt(r._bufferIndex));
      else
        k(I);
    }
  }
  function k(P) {
    s = s(P);
  }
  function A(P) {
    v(P) ? (r.line++, r.column = 1, r.offset += P === -3 ? 2 : 1, N()) : P !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = P;
  }
  function E(P, I) {
    const T = I || {};
    return T.type = P, T.start = S(), u.events.push(["enter", T, u]), a.push(T), T;
  }
  function B(P) {
    const I = a.pop();
    return I.end = S(), u.events.push(["exit", I, u]), I;
  }
  function H(P, I) {
    q(P, I.from);
  }
  function y(P, I) {
    I.restore();
  }
  function R(P, I) {
    return T;
    function T(C, z, W) {
      let Y, re, se, f;
      return Array.isArray(C) ? (
        /* c8 ignore next 1 */
        ce(C)
      ) : "tokenize" in C ? (
        // Looks like a construct.
        ce([
          /** @type {Construct} */
          C
        ])
      ) : ie(C);
      function ie(X) {
        return Ae;
        function Ae(fe) {
          const ke = fe !== null && X[fe], be = fe !== null && X.null, Ue = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(ke) ? ke : ke ? [ke] : [],
            ...Array.isArray(be) ? be : be ? [be] : []
          ];
          return ce(Ue)(fe);
        }
      }
      function ce(X) {
        return Y = X, re = 0, X.length === 0 ? W : m(X[re]);
      }
      function m(X) {
        return Ae;
        function Ae(fe) {
          return f = F(), se = X, X.partial || (u.currentConstruct = X), X.name && u.parser.constructs.disable.null.includes(X.name) ? ge() : X.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            I ? Object.assign(Object.create(u), I) : u,
            c,
            le,
            ge
          )(fe);
        }
      }
      function le(X) {
        return P(se, f), z;
      }
      function ge(X) {
        return f.restore(), ++re < Y.length ? m(Y[re]) : W;
      }
    }
  }
  function q(P, I) {
    P.resolveAll && !l.includes(P) && l.push(P), P.resolve && de(u.events, I, u.events.length - I, P.resolve(u.events.slice(I), u)), P.resolveTo && (u.events = P.resolveTo(u.events, u));
  }
  function F() {
    const P = S(), I = u.previous, T = u.currentConstruct, C = u.events.length, z = Array.from(a);
    return {
      from: C,
      restore: W
    };
    function W() {
      r = P, u.previous = I, u.currentConstruct = T, u.events.length = C, a = z, N();
    }
  }
  function N() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Kl(e, n) {
  const t = n.start._index, r = n.start._bufferIndex, i = n.end._index, l = n.end._bufferIndex;
  let o;
  if (t === i)
    o = [e[t].slice(r, l)];
  else {
    if (o = e.slice(t, i), r > -1) {
      const a = o[0];
      typeof a == "string" ? o[0] = a.slice(r) : o.shift();
    }
    l > 0 && o.push(e[i].slice(0, l));
  }
  return o;
}
function Zl(e, n) {
  let t = -1;
  const r = [];
  let i;
  for (; ++t < e.length; ) {
    const l = e[t];
    let o;
    if (typeof l == "string")
      o = l;
    else switch (l) {
      case -5: {
        o = "\r";
        break;
      }
      case -4: {
        o = `
`;
        break;
      }
      case -3: {
        o = `\r
`;
        break;
      }
      case -2: {
        o = n ? " " : "	";
        break;
      }
      case -1: {
        if (!n && i) continue;
        o = " ";
        break;
      }
      default:
        o = String.fromCharCode(l);
    }
    i = l === -2, r.push(o);
  }
  return r.join("");
}
function eo(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      gr([Gl, ...(e || {}).extensions || []])
    ),
    content: i(zl),
    defined: [],
    document: i(Dl),
    flow: i(Rl),
    lazy: {},
    string: i(Ml),
    text: i(Bl)
  };
  return r;
  function i(l) {
    return o;
    function o(a) {
      return Jl(r, l, a);
    }
  }
}
function no(e) {
  for (; !zt(e); )
    ;
  return e;
}
const at = /[\0\t\n\r]/g;
function to() {
  let e = 1, n = "", t = !0, r;
  return i;
  function i(l, o, a) {
    const c = [];
    let u, s, h, d, p;
    for (l = n + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)), h = 0, n = "", t && (l.charCodeAt(0) === 65279 && h++, t = void 0); h < l.length; ) {
      if (at.lastIndex = h, u = at.exec(l), d = u && u.index !== void 0 ? u.index : l.length, p = l.charCodeAt(d), !u) {
        n = l.slice(h);
        break;
      }
      if (p === 10 && h === d && r)
        c.push(-3), r = void 0;
      else
        switch (r && (c.push(-5), r = void 0), h < d && (c.push(l.slice(h, d)), e += d - h), p) {
          case 0: {
            c.push(65533), e++;
            break;
          }
          case 9: {
            for (s = Math.ceil(e / 4) * 4, c.push(-2); e++ < s; ) c.push(-1);
            break;
          }
          case 10: {
            c.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      h = d + 1;
    }
    return a && (r && c.push(-5), n && c.push(n), c.push(null)), c;
  }
}
const Gt = {}.hasOwnProperty;
function ro(e, n, t) {
  return typeof n != "string" && (t = n, n = void 0), io(t)(no(eo(t).document().write(to()(e, n, !0))));
}
function io(e) {
  const n = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(jn),
      autolinkProtocol: F,
      autolinkEmail: F,
      atxHeading: l(Nn),
      blockQuote: l(be),
      characterEscape: F,
      characterReference: F,
      codeFenced: l(Ue),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(Ue, o),
      codeText: l(ir, o),
      codeTextData: F,
      data: F,
      codeFlowValue: F,
      definition: l(lr),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l(or),
      hardBreakEscape: l(Mn),
      hardBreakTrailing: l(Mn),
      htmlFlow: l(Bn, o),
      htmlFlowData: F,
      htmlText: l(Bn, o),
      htmlTextData: F,
      image: l(ar),
      label: o,
      link: l(jn),
      listItem: l(ur),
      listItemValue: d,
      listOrdered: l(Hn, h),
      listUnordered: l(Hn),
      paragraph: l(sr),
      reference: m,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(Nn),
      strong: l(cr),
      thematicBreak: l(hr)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: H,
      autolink: c(),
      autolinkEmail: ke,
      autolinkProtocol: fe,
      blockQuote: c(),
      characterEscapeValue: N,
      characterReferenceMarkerHexadecimal: ge,
      characterReferenceMarkerNumeric: ge,
      characterReferenceValue: X,
      characterReference: Ae,
      codeFenced: c(L),
      codeFencedFence: w,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: S,
      codeFlowValue: N,
      codeIndented: c(k),
      codeText: c(z),
      codeTextData: N,
      data: N,
      definition: c(),
      definitionDestinationString: B,
      definitionLabelString: A,
      definitionTitleString: E,
      emphasis: c(),
      hardBreakEscape: c(I),
      hardBreakTrailing: c(I),
      htmlFlow: c(T),
      htmlFlowData: N,
      htmlText: c(C),
      htmlTextData: N,
      image: c(Y),
      label: se,
      labelText: re,
      lineEnding: P,
      link: c(W),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: le,
      resourceDestinationString: f,
      resourceTitleString: ie,
      resource: ce,
      setextHeading: c(q),
      setextHeadingLineSequence: R,
      setextHeadingText: y,
      strong: c(),
      thematicBreak: c()
    }
  };
  Jt(n, (e || {}).mdastExtensions || []);
  const t = {};
  return r;
  function r(g) {
    let b = {
      type: "root",
      children: []
    };
    const D = {
      stack: [b],
      tokenStack: [],
      config: n,
      enter: a,
      exit: u,
      buffer: o,
      resume: s,
      data: t
    }, _ = [];
    let j = -1;
    for (; ++j < g.length; )
      if (g[j][1].type === "listOrdered" || g[j][1].type === "listUnordered")
        if (g[j][0] === "enter")
          _.push(j);
        else {
          const oe = _.pop();
          j = i(g, oe, j);
        }
    for (j = -1; ++j < g.length; ) {
      const oe = n[g[j][0]];
      Gt.call(oe, g[j][1].type) && oe[g[j][1].type].call(Object.assign({
        sliceSerialize: g[j][2].sliceSerialize
      }, D), g[j][1]);
    }
    if (D.tokenStack.length > 0) {
      const oe = D.tokenStack[D.tokenStack.length - 1];
      (oe[1] || ut).call(D, void 0, oe[0]);
    }
    for (b.position = {
      start: me(g.length > 0 ? g[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: me(g.length > 0 ? g[g.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, j = -1; ++j < n.transforms.length; )
      b = n.transforms[j](b) || b;
    return b;
  }
  function i(g, b, D) {
    let _ = b - 1, j = -1, oe = !1, ye, pe, ve, ze;
    for (; ++_ <= D; ) {
      const K = g[_];
      switch (K[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          K[0] === "enter" ? j++ : j--, ze = void 0;
          break;
        }
        case "lineEndingBlank": {
          K[0] === "enter" && (ye && !ze && !j && !ve && (ve = _), ze = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          ze = void 0;
      }
      if (!j && K[0] === "enter" && K[1].type === "listItemPrefix" || j === -1 && K[0] === "exit" && (K[1].type === "listUnordered" || K[1].type === "listOrdered")) {
        if (ye) {
          let we = _;
          for (pe = void 0; we--; ) {
            const he = g[we];
            if (he[1].type === "lineEnding" || he[1].type === "lineEndingBlank") {
              if (he[0] === "exit") continue;
              pe && (g[pe][1].type = "lineEndingBlank", oe = !0), he[1].type = "lineEnding", pe = we;
            } else if (!(he[1].type === "linePrefix" || he[1].type === "blockQuotePrefix" || he[1].type === "blockQuotePrefixWhitespace" || he[1].type === "blockQuoteMarker" || he[1].type === "listItemIndent")) break;
          }
          ve && (!pe || ve < pe) && (ye._spread = !0), ye.end = Object.assign({}, pe ? g[pe][1].start : K[1].end), g.splice(pe || _, 0, ["exit", ye, K[2]]), _++, D++;
        }
        if (K[1].type === "listItemPrefix") {
          const we = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, K[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          ye = we, g.splice(_, 0, ["enter", we, K[2]]), _++, D++, ve = void 0, ze = !0;
        }
      }
    }
    return g[b][1]._spread = oe, D;
  }
  function l(g, b) {
    return D;
    function D(_) {
      a.call(this, g(_), _), b && b.call(this, _);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(g, b, D) {
    this.stack[this.stack.length - 1].children.push(g), this.stack.push(g), this.tokenStack.push([b, D || void 0]), g.position = {
      start: me(b.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function c(g) {
    return b;
    function b(D) {
      g && g.call(this, D), u.call(this, D);
    }
  }
  function u(g, b) {
    const D = this.stack.pop(), _ = this.tokenStack.pop();
    if (_)
      _[0].type !== g.type && (b ? b.call(this, g, _[0]) : (_[1] || ut).call(this, g, _[0]));
    else throw new Error("Cannot close `" + g.type + "` (" + Ne({
      start: g.start,
      end: g.end
    }) + "): it’s not open");
    D.position.end = me(g.end);
  }
  function s() {
    return yr(this.stack.pop());
  }
  function h() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(g) {
    if (this.data.expectingFirstListItemValue) {
      const b = this.stack[this.stack.length - 2];
      b.start = Number.parseInt(this.sliceSerialize(g), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function p() {
    const g = this.resume(), b = this.stack[this.stack.length - 1];
    b.lang = g;
  }
  function S() {
    const g = this.resume(), b = this.stack[this.stack.length - 1];
    b.meta = g;
  }
  function w() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function L() {
    const g = this.resume(), b = this.stack[this.stack.length - 1];
    b.value = g.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function k() {
    const g = this.resume(), b = this.stack[this.stack.length - 1];
    b.value = g.replace(/(\r?\n|\r)$/g, "");
  }
  function A(g) {
    const b = this.resume(), D = this.stack[this.stack.length - 1];
    D.label = b, D.identifier = Ce(this.sliceSerialize(g)).toLowerCase();
  }
  function E() {
    const g = this.resume(), b = this.stack[this.stack.length - 1];
    b.title = g;
  }
  function B() {
    const g = this.resume(), b = this.stack[this.stack.length - 1];
    b.url = g;
  }
  function H(g) {
    const b = this.stack[this.stack.length - 1];
    if (!b.depth) {
      const D = this.sliceSerialize(g).length;
      b.depth = D;
    }
  }
  function y() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function R(g) {
    const b = this.stack[this.stack.length - 1];
    b.depth = this.sliceSerialize(g).codePointAt(0) === 61 ? 1 : 2;
  }
  function q() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function F(g) {
    const D = this.stack[this.stack.length - 1].children;
    let _ = D[D.length - 1];
    (!_ || _.type !== "text") && (_ = pr(), _.position = {
      start: me(g.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, D.push(_)), this.stack.push(_);
  }
  function N(g) {
    const b = this.stack.pop();
    b.value += this.sliceSerialize(g), b.position.end = me(g.end);
  }
  function P(g) {
    const b = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const D = b.children[b.children.length - 1];
      D.position.end = me(g.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && n.canContainEols.includes(b.type) && (F.call(this, g), N.call(this, g));
  }
  function I() {
    this.data.atHardBreak = !0;
  }
  function T() {
    const g = this.resume(), b = this.stack[this.stack.length - 1];
    b.value = g;
  }
  function C() {
    const g = this.resume(), b = this.stack[this.stack.length - 1];
    b.value = g;
  }
  function z() {
    const g = this.resume(), b = this.stack[this.stack.length - 1];
    b.value = g;
  }
  function W() {
    const g = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const b = this.data.referenceType || "shortcut";
      g.type += "Reference", g.referenceType = b, delete g.url, delete g.title;
    } else
      delete g.identifier, delete g.label;
    this.data.referenceType = void 0;
  }
  function Y() {
    const g = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const b = this.data.referenceType || "shortcut";
      g.type += "Reference", g.referenceType = b, delete g.url, delete g.title;
    } else
      delete g.identifier, delete g.label;
    this.data.referenceType = void 0;
  }
  function re(g) {
    const b = this.sliceSerialize(g), D = this.stack[this.stack.length - 2];
    D.label = Cr(b), D.identifier = Ce(b).toLowerCase();
  }
  function se() {
    const g = this.stack[this.stack.length - 1], b = this.resume(), D = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, D.type === "link") {
      const _ = g.children;
      D.children = _;
    } else
      D.alt = b;
  }
  function f() {
    const g = this.resume(), b = this.stack[this.stack.length - 1];
    b.url = g;
  }
  function ie() {
    const g = this.resume(), b = this.stack[this.stack.length - 1];
    b.title = g;
  }
  function ce() {
    this.data.inReference = void 0;
  }
  function m() {
    this.data.referenceType = "collapsed";
  }
  function le(g) {
    const b = this.resume(), D = this.stack[this.stack.length - 1];
    D.label = b, D.identifier = Ce(this.sliceSerialize(g)).toLowerCase(), this.data.referenceType = "full";
  }
  function ge(g) {
    this.data.characterReferenceType = g.type;
  }
  function X(g) {
    const b = this.sliceSerialize(g), D = this.data.characterReferenceType;
    let _;
    D ? (_ = Tt(b, D === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : _ = wn(b);
    const j = this.stack[this.stack.length - 1];
    j.value += _;
  }
  function Ae(g) {
    const b = this.stack.pop();
    b.position.end = me(g.end);
  }
  function fe(g) {
    N.call(this, g);
    const b = this.stack[this.stack.length - 1];
    b.url = this.sliceSerialize(g);
  }
  function ke(g) {
    N.call(this, g);
    const b = this.stack[this.stack.length - 1];
    b.url = "mailto:" + this.sliceSerialize(g);
  }
  function be() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Ue() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function ir() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function lr() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function or() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Nn() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Mn() {
    return {
      type: "break"
    };
  }
  function Bn() {
    return {
      type: "html",
      value: ""
    };
  }
  function ar() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function jn() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Hn(g) {
    return {
      type: "list",
      ordered: g.type === "listOrdered",
      start: null,
      spread: g._spread,
      children: []
    };
  }
  function ur(g) {
    return {
      type: "listItem",
      spread: g._spread,
      checked: null,
      children: []
    };
  }
  function sr() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function cr() {
    return {
      type: "strong",
      children: []
    };
  }
  function pr() {
    return {
      type: "text",
      value: ""
    };
  }
  function hr() {
    return {
      type: "thematicBreak"
    };
  }
}
function me(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Jt(e, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? Jt(e, r) : lo(e, r);
  }
}
function lo(e, n) {
  let t;
  for (t in n)
    if (Gt.call(n, t))
      switch (t) {
        case "canContainEols": {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case "transforms": {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = n[t];
          r && Object.assign(e[t], r);
          break;
        }
      }
}
function ut(e, n) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + Ne({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + n.type + "`, " + Ne({
    start: n.start,
    end: n.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + Ne({
    start: n.start,
    end: n.end
  }) + ") is still open");
}
function oo(e) {
  const n = this;
  n.parser = t;
  function t(r) {
    return ro(r, {
      ...n.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: n.data("micromarkExtensions") || [],
      mdastExtensions: n.data("fromMarkdownExtensions") || []
    });
  }
}
function ao(e, n) {
  const t = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(n), !0)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function uo(e, n) {
  const t = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(n, t), [e.applyData(n, t), { type: "text", value: `
` }];
}
function so(e, n) {
  const t = n.value ? n.value + `
` : "", r = {};
  n.lang && (r.className = ["language-" + n.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: t }]
  };
  return n.meta && (i.data = { meta: n.meta }), e.patch(n, i), i = e.applyData(n, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(n, i), i;
}
function co(e, n) {
  const t = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function po(e, n) {
  const t = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function ho(e, n) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(n.identifier).toUpperCase(), i = Te(r.toLowerCase()), l = e.footnoteOrder.indexOf(r);
  let o, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = l + 1, a += 1, e.footnoteCounts.set(r, a);
  const c = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + t + "fn-" + i,
      id: t + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(o) }]
  };
  e.patch(n, c);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [c]
  };
  return e.patch(n, u), e.applyData(n, u);
}
function fo(e, n) {
  const t = {
    type: "element",
    tagName: "h" + n.depth,
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function mo(e, n) {
  if (e.options.allowDangerousHtml) {
    const t = { type: "raw", value: n.value };
    return e.patch(n, t), e.applyData(n, t);
  }
}
function Kt(e, n) {
  const t = n.referenceType;
  let r = "]";
  if (t === "collapsed" ? r += "[]" : t === "full" && (r += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference")
    return [{ type: "text", value: "![" + n.alt + r }];
  const i = e.all(n), l = i[0];
  l && l.type === "text" ? l.value = "[" + l.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function go(e, n) {
  const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
  if (!r)
    return Kt(e, n);
  const i = { src: Te(r.url || ""), alt: n.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(n, l), e.applyData(n, l);
}
function yo(e, n) {
  const t = { src: Te(n.url) };
  n.alt !== null && n.alt !== void 0 && (t.alt = n.alt), n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = { type: "element", tagName: "img", properties: t, children: [] };
  return e.patch(n, r), e.applyData(n, r);
}
function xo(e, n) {
  const t = { type: "text", value: n.value.replace(/\r?\n|\r/g, " ") };
  e.patch(n, t);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [t]
  };
  return e.patch(n, r), e.applyData(n, r);
}
function ko(e, n) {
  const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
  if (!r)
    return Kt(e, n);
  const i = { href: Te(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(n)
  };
  return e.patch(n, l), e.applyData(n, l);
}
function bo(e, n) {
  const t = { href: Te(n.url) };
  n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: t,
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function wo(e, n, t) {
  const r = e.all(n), i = t ? So(t) : Zt(n), l = {}, o = [];
  if (typeof n.checked == "boolean") {
    const s = r[0];
    let h;
    s && s.type === "element" && s.tagName === "p" ? h = s : (h = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(h)), h.children.length > 0 && h.children.unshift({ type: "text", value: " " }), h.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: n.checked, disabled: !0 },
      children: []
    }), l.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const s = r[a];
    (i || a !== 0 || s.type !== "element" || s.tagName !== "p") && o.push({ type: "text", value: `
` }), s.type === "element" && s.tagName === "p" && !i ? o.push(...s.children) : o.push(s);
  }
  const c = r[r.length - 1];
  c && (i || c.type !== "element" || c.tagName !== "p") && o.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: l, children: o };
  return e.patch(n, u), e.applyData(n, u);
}
function So(e) {
  let n = !1;
  if (e.type === "list") {
    n = e.spread || !1;
    const t = e.children;
    let r = -1;
    for (; !n && ++r < t.length; )
      n = Zt(t[r]);
  }
  return n;
}
function Zt(e) {
  const n = e.spread;
  return n ?? e.children.length > 1;
}
function Eo(e, n) {
  const t = {}, r = e.all(n);
  let i = -1;
  for (typeof n.start == "number" && n.start !== 1 && (t.start = n.start); ++i < r.length; ) {
    const o = r[i];
    if (o.type === "element" && o.tagName === "li" && o.properties && Array.isArray(o.properties.className) && o.properties.className.includes("task-list-item")) {
      t.className = ["contains-task-list"];
      break;
    }
  }
  const l = {
    type: "element",
    tagName: n.ordered ? "ol" : "ul",
    properties: t,
    children: e.wrap(r, !0)
  };
  return e.patch(n, l), e.applyData(n, l);
}
function Co(e, n) {
  const t = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Io(e, n) {
  const t = { type: "root", children: e.wrap(e.all(n)) };
  return e.patch(n, t), e.applyData(n, t);
}
function To(e, n) {
  const t = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Po(e, n) {
  const t = e.all(n), r = t.shift(), i = [];
  if (r) {
    const o = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(n.children[0], o), i.push(o);
  }
  if (t.length > 0) {
    const o = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(t, !0)
    }, a = In(n.children[1]), c = Ut(n.children[n.children.length - 1]);
    a && c && (o.position = { start: a, end: c }), i.push(o);
  }
  const l = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(n, l), e.applyData(n, l);
}
function Ao(e, n, t) {
  const r = t ? t.children : void 0, l = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td", o = t && t.type === "table" ? t.align : void 0, a = o ? o.length : n.children.length;
  let c = -1;
  const u = [];
  for (; ++c < a; ) {
    const h = n.children[c], d = {}, p = o ? o[c] : void 0;
    p && (d.align = p);
    let S = { type: "element", tagName: l, properties: d, children: [] };
    h && (S.children = e.all(h), e.patch(h, S), S = e.applyData(h, S)), u.push(S);
  }
  const s = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(n, s), e.applyData(n, s);
}
function vo(e, n) {
  const t = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
const st = 9, ct = 32;
function zo(e) {
  const n = String(e), t = /\r?\n|\r/g;
  let r = t.exec(n), i = 0;
  const l = [];
  for (; r; )
    l.push(
      pt(n.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = t.exec(n);
  return l.push(pt(n.slice(i), i > 0, !1)), l.join("");
}
function pt(e, n, t) {
  let r = 0, i = e.length;
  if (n) {
    let l = e.codePointAt(r);
    for (; l === st || l === ct; )
      r++, l = e.codePointAt(r);
  }
  if (t) {
    let l = e.codePointAt(i - 1);
    for (; l === st || l === ct; )
      i--, l = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Lo(e, n) {
  const t = { type: "text", value: zo(String(n.value)) };
  return e.patch(n, t), e.applyData(n, t);
}
function Do(e, n) {
  const t = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Oo = {
  blockquote: ao,
  break: uo,
  code: so,
  delete: co,
  emphasis: po,
  footnoteReference: ho,
  heading: fo,
  html: mo,
  imageReference: go,
  image: yo,
  inlineCode: xo,
  linkReference: ko,
  link: bo,
  listItem: wo,
  list: Eo,
  paragraph: Co,
  // @ts-expect-error: root is different, but hard to type.
  root: Io,
  strong: To,
  table: Po,
  tableCell: vo,
  tableRow: Ao,
  text: Lo,
  thematicBreak: Do,
  toml: Ve,
  yaml: Ve,
  definition: Ve,
  footnoteDefinition: Ve
};
function Ve() {
}
const er = -1, Ge = 0, Me = 1, Ye = 2, vn = 3, zn = 4, Ln = 5, Dn = 6, nr = 7, tr = 8, ht = typeof self == "object" ? self : globalThis, _o = (e, n) => {
  const t = (i, l) => (e.set(l, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [l, o] = n[i];
    switch (l) {
      case Ge:
      case er:
        return t(o, i);
      case Me: {
        const a = t([], i);
        for (const c of o)
          a.push(r(c));
        return a;
      }
      case Ye: {
        const a = t({}, i);
        for (const [c, u] of o)
          a[r(c)] = r(u);
        return a;
      }
      case vn:
        return t(new Date(o), i);
      case zn: {
        const { source: a, flags: c } = o;
        return t(new RegExp(a, c), i);
      }
      case Ln: {
        const a = t(/* @__PURE__ */ new Map(), i);
        for (const [c, u] of o)
          a.set(r(c), r(u));
        return a;
      }
      case Dn: {
        const a = t(/* @__PURE__ */ new Set(), i);
        for (const c of o)
          a.add(r(c));
        return a;
      }
      case nr: {
        const { name: a, message: c } = o;
        return t(new ht[a](c), i);
      }
      case tr:
        return t(BigInt(o), i);
      case "BigInt":
        return t(Object(BigInt(o)), i);
      case "ArrayBuffer":
        return t(new Uint8Array(o).buffer, o);
      case "DataView": {
        const { buffer: a } = new Uint8Array(o);
        return t(new DataView(a), o);
      }
    }
    return t(new ht[l](o), i);
  };
  return r;
}, ft = (e) => _o(/* @__PURE__ */ new Map(), e)(0), Ee = "", { toString: Ro } = {}, { keys: Fo } = Object, _e = (e) => {
  const n = typeof e;
  if (n !== "object" || !e)
    return [Ge, n];
  const t = Ro.call(e).slice(8, -1);
  switch (t) {
    case "Array":
      return [Me, Ee];
    case "Object":
      return [Ye, Ee];
    case "Date":
      return [vn, Ee];
    case "RegExp":
      return [zn, Ee];
    case "Map":
      return [Ln, Ee];
    case "Set":
      return [Dn, Ee];
    case "DataView":
      return [Me, t];
  }
  return t.includes("Array") ? [Me, t] : t.includes("Error") ? [nr, t] : [Ye, t];
}, qe = ([e, n]) => e === Ge && (n === "function" || n === "symbol"), No = (e, n, t, r) => {
  const i = (o, a) => {
    const c = r.push(o) - 1;
    return t.set(a, c), c;
  }, l = (o) => {
    if (t.has(o))
      return t.get(o);
    let [a, c] = _e(o);
    switch (a) {
      case Ge: {
        let s = o;
        switch (c) {
          case "bigint":
            a = tr, s = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + c);
            s = null;
            break;
          case "undefined":
            return i([er], o);
        }
        return i([a, s], o);
      }
      case Me: {
        if (c) {
          let d = o;
          return c === "DataView" ? d = new Uint8Array(o.buffer) : c === "ArrayBuffer" && (d = new Uint8Array(o)), i([c, [...d]], o);
        }
        const s = [], h = i([a, s], o);
        for (const d of o)
          s.push(l(d));
        return h;
      }
      case Ye: {
        if (c)
          switch (c) {
            case "BigInt":
              return i([c, o.toString()], o);
            case "Boolean":
            case "Number":
            case "String":
              return i([c, o.valueOf()], o);
          }
        if (n && "toJSON" in o)
          return l(o.toJSON());
        const s = [], h = i([a, s], o);
        for (const d of Fo(o))
          (e || !qe(_e(o[d]))) && s.push([l(d), l(o[d])]);
        return h;
      }
      case vn:
        return i([a, o.toISOString()], o);
      case zn: {
        const { source: s, flags: h } = o;
        return i([a, { source: s, flags: h }], o);
      }
      case Ln: {
        const s = [], h = i([a, s], o);
        for (const [d, p] of o)
          (e || !(qe(_e(d)) || qe(_e(p)))) && s.push([l(d), l(p)]);
        return h;
      }
      case Dn: {
        const s = [], h = i([a, s], o);
        for (const d of o)
          (e || !qe(_e(d))) && s.push(l(d));
        return h;
      }
    }
    const { message: u } = o;
    return i([a, { name: c, message: u }], o);
  };
  return l;
}, mt = (e, { json: n, lossy: t } = {}) => {
  const r = [];
  return No(!(n || t), !!n, /* @__PURE__ */ new Map(), r)(e), r;
}, Xe = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, n) => n && ("json" in n || "lossy" in n) ? ft(mt(e, n)) : structuredClone(e)
) : (e, n) => ft(mt(e, n));
function Mo(e, n) {
  const t = [{ type: "text", value: "↩" }];
  return n > 1 && t.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(n) }]
  }), t;
}
function Bo(e, n) {
  return "Back to reference " + (e + 1) + (n > 1 ? "-" + n : "");
}
function jo(e) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", t = e.options.footnoteBackContent || Mo, r = e.options.footnoteBackLabel || Bo, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let c = -1;
  for (; ++c < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[c]
    );
    if (!u)
      continue;
    const s = e.all(u), h = String(u.identifier).toUpperCase(), d = Te(h.toLowerCase());
    let p = 0;
    const S = [], w = e.footnoteCounts.get(h);
    for (; w !== void 0 && ++p <= w; ) {
      S.length > 0 && S.push({ type: "text", value: " " });
      let A = typeof t == "string" ? t : t(c, p);
      typeof A == "string" && (A = { type: "text", value: A }), S.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + n + "fnref-" + d + (p > 1 ? "-" + p : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(c, p),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(A) ? A : [A]
      });
    }
    const L = s[s.length - 1];
    if (L && L.type === "element" && L.tagName === "p") {
      const A = L.children[L.children.length - 1];
      A && A.type === "text" ? A.value += " " : L.children.push({ type: "text", value: " " }), L.children.push(...S);
    } else
      s.push(...S);
    const k = {
      type: "element",
      tagName: "li",
      properties: { id: n + "fn-" + d },
      children: e.wrap(s, !0)
    };
    e.patch(u, k), a.push(k);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: l,
          properties: {
            ...Xe(o),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const yn = {}.hasOwnProperty, Ho = {};
function Uo(e, n) {
  const t = n || Ho, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = { ...Oo, ...t.handlers }, a = {
    all: u,
    applyData: qo,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: l,
    footnoteOrder: [],
    handlers: o,
    one: c,
    options: t,
    patch: Vo,
    wrap: Wo
  };
  return It(e, function(s) {
    if (s.type === "definition" || s.type === "footnoteDefinition") {
      const h = s.type === "definition" ? r : i, d = String(s.identifier).toUpperCase();
      h.has(d) || h.set(d, s);
    }
  }), a;
  function c(s, h) {
    const d = s.type, p = a.handlers[d];
    if (yn.call(a.handlers, d) && p)
      return p(a, s, h);
    if (a.options.passThrough && a.options.passThrough.includes(d)) {
      if ("children" in s) {
        const { children: w, ...L } = s, k = Xe(L);
        return k.children = a.all(s), k;
      }
      return Xe(s);
    }
    return (a.options.unknownHandler || $o)(a, s, h);
  }
  function u(s) {
    const h = [];
    if ("children" in s) {
      const d = s.children;
      let p = -1;
      for (; ++p < d.length; ) {
        const S = a.one(d[p], s);
        if (S) {
          if (p && d[p - 1].type === "break" && (!Array.isArray(S) && S.type === "text" && (S.value = dt(S.value)), !Array.isArray(S) && S.type === "element")) {
            const w = S.children[0];
            w && w.type === "text" && (w.value = dt(w.value));
          }
          Array.isArray(S) ? h.push(...S) : h.push(S);
        }
      }
    }
    return h;
  }
}
function Vo(e, n) {
  e.position && (n.position = sl(e));
}
function qo(e, n) {
  let t = n;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, l = e.data.hProperties;
    if (typeof r == "string")
      if (t.type === "element")
        t.tagName = r;
      else {
        const o = "children" in t ? t.children : [t];
        t = { type: "element", tagName: r, properties: {}, children: o };
      }
    t.type === "element" && l && Object.assign(t.properties, Xe(l)), "children" in t && t.children && i !== null && i !== void 0 && (t.children = i);
  }
  return t;
}
function $o(e, n) {
  const t = n.data || {}, r = "value" in n && !(yn.call(t, "hProperties") || yn.call(t, "hChildren")) ? { type: "text", value: n.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function Wo(e, n) {
  const t = [];
  let r = -1;
  for (n && t.push({ type: "text", value: `
` }); ++r < e.length; )
    r && t.push({ type: "text", value: `
` }), t.push(e[r]);
  return n && e.length > 0 && t.push({ type: "text", value: `
` }), t;
}
function dt(e) {
  let n = 0, t = e.charCodeAt(n);
  for (; t === 9 || t === 32; )
    n++, t = e.charCodeAt(n);
  return e.slice(n);
}
function gt(e, n) {
  const t = Uo(e, n), r = t.one(e, void 0), i = jo(t), l = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && l.children.push({ type: "text", value: `
` }, i), l;
}
function Yo(e, n) {
  return e && "run" in e ? async function(t, r) {
    const i = (
      /** @type {HastRoot} */
      gt(t, { file: r, ...n })
    );
    await e.run(i, r);
  } : function(t, r) {
    return (
      /** @type {HastRoot} */
      gt(t, { file: r, ...e || n })
    );
  };
}
function yt(e) {
  if (e)
    throw e;
}
var tn, xt;
function Xo() {
  if (xt) return tn;
  xt = 1;
  var e = Object.prototype.hasOwnProperty, n = Object.prototype.toString, t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(u) {
    return typeof Array.isArray == "function" ? Array.isArray(u) : n.call(u) === "[object Array]";
  }, l = function(u) {
    if (!u || n.call(u) !== "[object Object]")
      return !1;
    var s = e.call(u, "constructor"), h = u.constructor && u.constructor.prototype && e.call(u.constructor.prototype, "isPrototypeOf");
    if (u.constructor && !s && !h)
      return !1;
    var d;
    for (d in u)
      ;
    return typeof d > "u" || e.call(u, d);
  }, o = function(u, s) {
    t && s.name === "__proto__" ? t(u, s.name, {
      enumerable: !0,
      configurable: !0,
      value: s.newValue,
      writable: !0
    }) : u[s.name] = s.newValue;
  }, a = function(u, s) {
    if (s === "__proto__")
      if (e.call(u, s)) {
        if (r)
          return r(u, s).value;
      } else return;
    return u[s];
  };
  return tn = function c() {
    var u, s, h, d, p, S, w = arguments[0], L = 1, k = arguments.length, A = !1;
    for (typeof w == "boolean" && (A = w, w = arguments[1] || {}, L = 2), (w == null || typeof w != "object" && typeof w != "function") && (w = {}); L < k; ++L)
      if (u = arguments[L], u != null)
        for (s in u)
          h = a(w, s), d = a(u, s), w !== d && (A && d && (l(d) || (p = i(d))) ? (p ? (p = !1, S = h && i(h) ? h : []) : S = h && l(h) ? h : {}, o(w, { name: s, newValue: c(A, S, d) })) : typeof d < "u" && o(w, { name: s, newValue: d }));
    return w;
  }, tn;
}
var Qo = Xo();
const rn = /* @__PURE__ */ Ct(Qo);
function xn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Go() {
  const e = [], n = { run: t, use: r };
  return n;
  function t(...i) {
    let l = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    a(null, ...i);
    function a(c, ...u) {
      const s = e[++l];
      let h = -1;
      if (c) {
        o(c);
        return;
      }
      for (; ++h < i.length; )
        (u[h] === null || u[h] === void 0) && (u[h] = i[h]);
      i = u, s ? Jo(s, a)(...u) : o(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), n;
  }
}
function Jo(e, n) {
  let t;
  return r;
  function r(...o) {
    const a = e.length > o.length;
    let c;
    a && o.push(i);
    try {
      c = e.apply(this, o);
    } catch (u) {
      const s = (
        /** @type {Error} */
        u
      );
      if (a && t)
        throw s;
      return i(s);
    }
    a || (c && c.then && typeof c.then == "function" ? c.then(l, i) : c instanceof Error ? i(c) : l(c));
  }
  function i(o, ...a) {
    t || (t = !0, n(o, ...a));
  }
  function l(o) {
    i(null, o);
  }
}
const ae = { basename: Ko, dirname: Zo, extname: ea, join: na, sep: "/" };
function Ko(e, n) {
  if (n !== void 0 && typeof n != "string")
    throw new TypeError('"ext" argument must be a string');
  He(e);
  let t = 0, r = -1, i = e.length, l;
  if (n === void 0 || n.length === 0 || n.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (l) {
          t = i + 1;
          break;
        }
      } else r < 0 && (l = !0, r = i + 1);
    return r < 0 ? "" : e.slice(t, r);
  }
  if (n === e)
    return "";
  let o = -1, a = n.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (l) {
        t = i + 1;
        break;
      }
    } else
      o < 0 && (l = !0, o = i + 1), a > -1 && (e.codePointAt(i) === n.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = o));
  return t === r ? r = o : r < 0 && (r = e.length), e.slice(t, r);
}
function Zo(e) {
  if (He(e), e.length === 0)
    return ".";
  let n = -1, t = e.length, r;
  for (; --t; )
    if (e.codePointAt(t) === 47) {
      if (r) {
        n = t;
        break;
      }
    } else r || (r = !0);
  return n < 0 ? e.codePointAt(0) === 47 ? "/" : "." : n === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, n);
}
function ea(e) {
  He(e);
  let n = e.length, t = -1, r = 0, i = -1, l = 0, o;
  for (; n--; ) {
    const a = e.codePointAt(n);
    if (a === 47) {
      if (o) {
        r = n + 1;
        break;
      }
      continue;
    }
    t < 0 && (o = !0, t = n + 1), a === 46 ? i < 0 ? i = n : l !== 1 && (l = 1) : i > -1 && (l = -1);
  }
  return i < 0 || t < 0 || // We saw a non-dot character immediately before the dot.
  l === 0 || // The (right-most) trimmed path component is exactly `..`.
  l === 1 && i === t - 1 && i === r + 1 ? "" : e.slice(i, t);
}
function na(...e) {
  let n = -1, t;
  for (; ++n < e.length; )
    He(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
  return t === void 0 ? "." : ta(t);
}
function ta(e) {
  He(e);
  const n = e.codePointAt(0) === 47;
  let t = ra(e, !n);
  return t.length === 0 && !n && (t = "."), t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += "/"), n ? "/" + t : t;
}
function ra(e, n) {
  let t = "", r = 0, i = -1, l = 0, o = -1, a, c;
  for (; ++o <= e.length; ) {
    if (o < e.length)
      a = e.codePointAt(o);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === o - 1 || l === 1)) if (i !== o - 1 && l === 2) {
        if (t.length < 2 || r !== 2 || t.codePointAt(t.length - 1) !== 46 || t.codePointAt(t.length - 2) !== 46) {
          if (t.length > 2) {
            if (c = t.lastIndexOf("/"), c !== t.length - 1) {
              c < 0 ? (t = "", r = 0) : (t = t.slice(0, c), r = t.length - 1 - t.lastIndexOf("/")), i = o, l = 0;
              continue;
            }
          } else if (t.length > 0) {
            t = "", r = 0, i = o, l = 0;
            continue;
          }
        }
        n && (t = t.length > 0 ? t + "/.." : "..", r = 2);
      } else
        t.length > 0 ? t += "/" + e.slice(i + 1, o) : t = e.slice(i + 1, o), r = o - i - 1;
      i = o, l = 0;
    } else a === 46 && l > -1 ? l++ : l = -1;
  }
  return t;
}
function He(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const ia = { cwd: la };
function la() {
  return "/";
}
function kn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function oa(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!kn(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw n.code = "ERR_INVALID_ARG_TYPE", n;
  }
  if (e.protocol !== "file:") {
    const n = new TypeError("The URL must be of scheme file");
    throw n.code = "ERR_INVALID_URL_SCHEME", n;
  }
  return aa(e);
}
function aa(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const n = e.pathname;
  let t = -1;
  for (; ++t < n.length; )
    if (n.codePointAt(t) === 37 && n.codePointAt(t + 1) === 50) {
      const r = n.codePointAt(t + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(n);
}
const ln = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class rr {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(n) {
    let t;
    n ? kn(n) ? t = { path: n } : typeof n == "string" || ua(n) ? t = { value: n } : t = n : t = {}, this.cwd = "cwd" in t ? "" : ia.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < ln.length; ) {
      const l = ln[r];
      l in t && t[l] !== void 0 && t[l] !== null && (this[l] = l === "history" ? [...t[l]] : t[l]);
    }
    let i;
    for (i in t)
      ln.includes(i) || (this[i] = t[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? ae.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(n) {
    an(n, "basename"), on(n, "basename"), this.path = ae.join(this.dirname || "", n);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? ae.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(n) {
    kt(this.basename, "dirname"), this.path = ae.join(n || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? ae.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(n) {
    if (on(n, "extname"), kt(this.dirname, "extname"), n) {
      if (n.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (n.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = ae.join(this.dirname, this.stem + (n || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(n) {
    kn(n) && (n = oa(n)), an(n, "path"), this.path !== n && this.history.push(n);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? ae.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(n) {
    an(n, "stem"), on(n, "stem"), this.path = ae.join(this.dirname || "", n + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(n, t, r) {
    const i = this.message(n, t, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(n, t, r) {
    const i = this.message(n, t, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(n, t, r) {
    const i = new Q(
      // @ts-expect-error: the overloads are fine.
      n,
      t,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(n) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(n || void 0).decode(this.value);
  }
}
function on(e, n) {
  if (e && e.includes(ae.sep))
    throw new Error(
      "`" + n + "` cannot be a path: did not expect `" + ae.sep + "`"
    );
}
function an(e, n) {
  if (!e)
    throw new Error("`" + n + "` cannot be empty");
}
function kt(e, n) {
  if (!e)
    throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function ua(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const sa = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], l = function() {
      return i.apply(l, arguments);
    };
    return Object.setPrototypeOf(l, r), l;
  }
), ca = {}.hasOwnProperty;
class On extends sa {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Go();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const n = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new On()
    );
    let t = -1;
    for (; ++t < this.attachers.length; ) {
      const r = this.attachers[t];
      n.use(...r);
    }
    return n.data(rn(!0, {}, this.namespace)), n;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(n, t) {
    return typeof n == "string" ? arguments.length === 2 ? (cn("data", this.frozen), this.namespace[n] = t, this) : ca.call(this.namespace, n) && this.namespace[n] || void 0 : n ? (cn("data", this.frozen), this.namespace = n, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const n = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [t, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = t.call(n, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(n) {
    this.freeze();
    const t = $e(n), r = this.parser || this.Parser;
    return un("parse", r), r(String(t), t);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(n, t) {
    const r = this;
    return this.freeze(), un("process", this.parser || this.Parser), sn("process", this.compiler || this.Compiler), t ? i(void 0, t) : new Promise(i);
    function i(l, o) {
      const a = $e(n), c = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(c, a, function(s, h, d) {
        if (s || !h || !d)
          return u(s);
        const p = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          h
        ), S = r.stringify(p, d);
        fa(S) ? d.value = S : d.result = S, u(
          s,
          /** @type {VFileWithOutput<CompileResult>} */
          d
        );
      });
      function u(s, h) {
        s || !h ? o(s) : l ? l(h) : t(void 0, h);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(n) {
    let t = !1, r;
    return this.freeze(), un("processSync", this.parser || this.Parser), sn("processSync", this.compiler || this.Compiler), this.process(n, i), wt("processSync", "process", t), r;
    function i(l, o) {
      t = !0, yt(l), r = o;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(n, t, r) {
    bt(n), this.freeze();
    const i = this.transformers;
    return !r && typeof t == "function" && (r = t, t = void 0), r ? l(void 0, r) : new Promise(l);
    function l(o, a) {
      const c = $e(t);
      i.run(n, c, u);
      function u(s, h, d) {
        const p = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          h || n
        );
        s ? a(s) : o ? o(p) : r(void 0, p, d);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(n, t) {
    let r = !1, i;
    return this.run(n, t, l), wt("runSync", "run", r), i;
    function l(o, a) {
      yt(o), i = a, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(n, t) {
    this.freeze();
    const r = $e(t), i = this.compiler || this.Compiler;
    return sn("stringify", i), bt(n), i(n, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(n, ...t) {
    const r = this.attachers, i = this.namespace;
    if (cn("use", this.frozen), n != null) if (typeof n == "function")
      c(n, t);
    else if (typeof n == "object")
      Array.isArray(n) ? a(n) : o(n);
    else
      throw new TypeError("Expected usable value, not `" + n + "`");
    return this;
    function l(u) {
      if (typeof u == "function")
        c(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [s, ...h] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          c(s, h);
        } else
          o(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function o(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(u.plugins), u.settings && (i.settings = rn(!0, i.settings, u.settings));
    }
    function a(u) {
      let s = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++s < u.length; ) {
          const h = u[s];
          l(h);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function c(u, s) {
      let h = -1, d = -1;
      for (; ++h < r.length; )
        if (r[h][0] === u) {
          d = h;
          break;
        }
      if (d === -1)
        r.push([u, ...s]);
      else if (s.length > 0) {
        let [p, ...S] = s;
        const w = r[d][1];
        xn(w) && xn(p) && (p = rn(!0, w, p)), r[d] = [u, p, ...S];
      }
    }
  }
}
const pa = new On().freeze();
function un(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function sn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function cn(e, n) {
  if (n)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function bt(e) {
  if (!xn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function wt(e, n, t) {
  if (!t)
    throw new Error(
      "`" + e + "` finished async. Use `" + n + "` instead"
    );
}
function $e(e) {
  return ha(e) ? e : new rr(e);
}
function ha(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function fa(e) {
  return typeof e == "string" || ma(e);
}
function ma(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const da = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", St = [], Et = { allowDangerousHtml: !0 }, ga = /^(https?|ircs?|mailto|xmpp)$/i, ya = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function Sa(e) {
  const n = _n(e), t = Rn(e);
  return Fn(n.runSync(n.parse(t), t), e);
}
async function Ea(e) {
  const n = _n(e), t = Rn(e), r = await n.run(n.parse(t), t);
  return Fn(r, e);
}
function Ca(e) {
  const n = _n(e), [t, r] = Vn(
    /** @type {Error | undefined} */
    void 0
  ), [i, l] = Vn(
    /** @type {Root | undefined} */
    void 0
  );
  if (Sr(
    function() {
      let o = !1;
      const a = Rn(e);
      return n.run(n.parse(a), a, function(c, u) {
        o || (r(c), l(u));
      }), function() {
        o = !0;
      };
    },
    [
      e.children,
      e.rehypePlugins,
      e.remarkPlugins,
      e.remarkRehypeOptions
    ]
  ), t) throw t;
  return i ? Fn(i, e) : e.fallback;
}
function _n(e) {
  const n = e.rehypePlugins || St, t = e.remarkPlugins || St, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Et } : Et;
  return pa().use(oo).use(t).use(Yo, r).use(n);
}
function Rn(e) {
  const n = e.children || "", t = new rr();
  return typeof n == "string" && (t.value = n), t;
}
function Fn(e, n) {
  const t = n.allowedElements, r = n.allowElement, i = n.components, l = n.disallowedElements, o = n.skipHtml, a = n.unwrapDisallowed, c = n.urlTransform || xa;
  for (const s of ya)
    Object.hasOwn(n, s.from) && xr(
      "Unexpected `" + s.from + "` prop, " + (s.to ? "use `" + s.to + "` instead" : "remove it") + " (see <" + da + "#" + s.id + "> for more info)"
    );
  return It(e, u), ml(e, {
    Fragment: wr,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: br,
    jsxs: kr,
    passKeys: !0,
    passNode: !0
  });
  function u(s, h, d) {
    if (s.type === "raw" && d && typeof h == "number")
      return o ? d.children.splice(h, 1) : d.children[h] = { type: "text", value: s.value }, h;
    if (s.type === "element") {
      let p;
      for (p in nn)
        if (Object.hasOwn(nn, p) && Object.hasOwn(s.properties, p)) {
          const S = s.properties[p], w = nn[p];
          (w === null || w.includes(s.tagName)) && (s.properties[p] = c(String(S || ""), p, s));
        }
    }
    if (s.type === "element") {
      let p = t ? !t.includes(s.tagName) : l ? l.includes(s.tagName) : !1;
      if (!p && r && typeof h == "number" && (p = !r(s, h, d)), p && d && typeof h == "number")
        return a && s.children ? d.children.splice(h, 1, ...s.children) : d.children.splice(h, 1), h;
    }
  }
}
function xa(e) {
  const n = e.indexOf(":"), t = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    n === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && n > i || t !== -1 && n > t || r !== -1 && n > r || // It is a protocol, it should be allowed.
    ga.test(e.slice(0, n)) ? e : ""
  );
}
export {
  Ea as MarkdownAsync,
  Ca as MarkdownHooks,
  Sa as default,
  xa as defaultUrlTransform
};
//# sourceMappingURL=index-BuOtDz-9.js.map
