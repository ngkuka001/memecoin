(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    7314: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(4665);
        },
      ]);
    },
    4665: function (e, t, a) {
      "use strict";
      let r;
      a.r(t),
        a.d(t, {
          Index: function () {
            return aP;
          },
          default: function () {
            return aR;
          },
        });
      var n,
        c,
        i,
        l,
        s,
        h,
        H,
        o,
        V,
        m,
        d,
        p,
        g,
        x,
        u,
        f,
        C,
        w,
        v,
        y,
        M,
        b,
        E,
        Z,
        j,
        N,
        O,
        A,
        S,
        k,
        z,
        D,
        I,
        B,
        P,
        R,
        F,
        T,
        W = a(2322),
        _ = a(1919),
        L = a(4998),
        X = a(2784);
      function Y(e, t = {}) {
        let { ssr: a = !0, fallback: r } = t,
          { getWindow: n } = (0, L.O)(),
          c = Array.isArray(e) ? e : [e],
          i = Array.isArray(r) ? r : [r];
        i = i.filter((e) => null != e);
        let [l, s] = (0, X.useState)(() =>
          c.map((e, t) => ({
            media: e,
            matches: a ? !!i[t] : n().matchMedia(e).matches,
          }))
        );
        return (
          (0, X.useEffect)(() => {
            let e = n();
            s(c.map((t) => ({ media: t, matches: e.matchMedia(t).matches })));
            let t = c.map((t) => e.matchMedia(t)),
              a = (e) => {
                s((t) =>
                  t
                    .slice()
                    .map((t) =>
                      t.media === e.media ? { ...t, matches: e.matches } : t
                    )
                );
              };
            return (
              t.forEach((e) => {
                "function" == typeof e.addListener
                  ? e.addListener(a)
                  : e.addEventListener("change", a);
              }),
              () => {
                t.forEach((e) => {
                  "function" == typeof e.removeListener
                    ? e.removeListener(a)
                    : e.removeEventListener("change", a);
                });
              }
            );
          }, [n]),
          l.map((e) => e.matches)
        );
      }
      function U(e) {
        let { breakpoint: t, hide: a, children: r, ssr: n } = e,
          [c] = Y(t, { ssr: n });
        return (a ? !c : c) ? r : null;
      }
      var q = a(4198),
        G = (e, t) => {
          var a, r;
          return null !=
            (r =
              null == (a = null == e ? void 0 : e.breakpoints) ? void 0 : a[t])
            ? r
            : t;
        };
      function J(e) {
        let { breakpoint: t = "", below: a, above: r } = e,
          n = (0, q.F)(),
          c = G(n, a),
          i = G(n, r),
          l = t;
        return (
          c ? (l = `(max-width: ${c})`) : i && (l = `(min-width: ${i})`), l
        );
      }
      function K(e) {
        let { children: t, ssr: a } = e,
          r = J(e);
        return (0, W.jsx)(U, { breakpoint: r, ssr: a, children: t });
      }
      K.displayName = "Show";
      let Q = (e, t) => {
        var a;
        let r = 0,
          n = 0,
          c =
            (t &&
              (null === (a = document.querySelector(t)) || void 0 === a
                ? void 0
                : a.getBoundingClientRect())) ||
            new DOMRect();
        if (
          "touchstart" == e.type ||
          "touchmove" == e.type ||
          "touchend" == e.type ||
          "touchcancel" == e.type
        ) {
          let t = e.touches[0] || e.changedTouches[0];
          (r = t.pageX - c.left), (n = t.pageY - c.top);
        } else
          "mousedown" == e.type ||
          "mouseup" == e.type ||
          "mousemove" == e.type ||
          "mouseover" == e.type ||
          "mouseout" == e.type ||
          "mouseenter" == e.type ||
          "mouseleave" == e.type
            ? ((r = e.clientX - c.left), (n = e.clientY - c.top))
            : console.error(
                "unable to capture x/y coordinates from click/touch event",
                e
              );
        return { x: r, y: n };
      };
      var $ = a(624);
      let ee = (e) => (t) => {
          try {
            let a = e(t);
            if (a instanceof Promise) return a;
            return {
              then: (e) => ee(e)(a),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => ee(t)(e),
            };
          }
        },
        et = (e, t) => Math.random() * (t - e) + e,
        ea = (e) => {
          let t = e.length,
            a = 0;
          for (; 0 != t; )
            (a = Math.floor(Math.random() * t)),
              t--,
              ([e[t], e[a]] = [e[a], e[t]]);
          return e;
        },
        er = [
          {
            name: "bear",
            staticImage: {
              src: "/_next/static/media/bear-1.png",
              height: 460,
              width: 575,
              blurWidth: 0,
              blurHeight: 0,
            },
            ainmateImage: {
              src: "/_next/static/media/bear-2.gif",
              height: 460,
              width: 575,
              blurWidth: 0,
              blurHeight: 0,
            },
          },
          {
            name: "stonk",
            staticImage: {
              src: "/_next/static/media/stonk_static.1c54c0e0.gif",
              height: 460,
              width: 575,
              blurWidth: 0,
              blurHeight: 0,
            },
            ainmateImage: {
              src: "/_next/static/media/stonk_throwing.e2a16c10.gif",
              height: 460,
              width: 575,
              blurWidth: 0,
              blurHeight: 0,
            },
          },
          {
            name: "doge",
            staticImage: {
              src: "/_next/static/media/doge_static.3bda3393.gif",
              height: 540,
              width: 960,
              blurWidth: 0,
              blurHeight: 0,
            },
            ainmateImage: {
              src: "/_next/static/media/doge_throwing.c2c0e410.gif",
              height: 540,
              width: 960,
              blurWidth: 0,
              blurHeight: 0,
            },
          },
          {
            name: "pepe",
            staticImage: {
              src: "/_next/static/media/pepe_static.36377d07.gif",
              height: 540,
              width: 960,
              blurWidth: 0,
              blurHeight: 0,
            },
            ainmateImage: {
              src: "/_next/static/media/pepe_throwing.b2a0dbc4.gif",
              height: 540,
              width: 960,
              blurWidth: 0,
              blurHeight: 0,
            },
          },
        ],
        en = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!e && r) return r;
          let t = er.length,
            a = () => ea([...Array(t).keys()]),
            { choices: n, index: c } = (() => {
              let e = [],
                t = [];
              try {
                (t = e =
                  JSON.parse(
                    window.localStorage.getItem("teaser/character/choices") ||
                      ""
                  )),
                  (!Array.isArray(t) || t.some((e) => "number" != typeof e)) &&
                    ((e = []), (t = a()));
              } catch (e) {
                t = a();
              }
              let r = 0;
              try {
                (r = JSON.parse(
                  window.localStorage.getItem("teaser/character/index") || ""
                )),
                  "number" != typeof r
                    ? (r = 0)
                    : r + 1 >= t.length
                    ? ((t = a()),
                      e[r] === t[0] && (t = [...t.slice(1), t[0]]),
                      (r = 0))
                    : (r += 1);
              } catch (e) {
                r = 0;
              }
              return { choices: t, index: r };
            })(),
            i = n[c];
          return (
            (r = er[i]),
            window.localStorage.setItem(
              "teaser/character/choices",
              JSON.stringify(n)
            ),
            window.localStorage.setItem("teaser/character/index", String(c)),
            r
          );
        };
      a(1680);
      let ec = 0,
        ei = {
          state: "initial",
          character: en(),
          countDown: 0,
          coinCount: 0,
          timeLeft: 0,
          timeAllowed: 30,
          playedAudio: !1,
          playingAudio: !0,
          browserActive: !0,
          coins: [],
          plusOnes: [],
        },
        el = (0, $.Ue)()(
          ((n = (e, t) => ({
            ...ei,
            getCoinThrowInterval: () => 4,
            getCoinThrowTimeOffset: () => 3,
            getCoinThrowAmount: () => 9,
            addCoin: (a) => {
              t().coins.length >= 200 ||
                e((e) => ({ coins: [...e.coins, { id: ec++, ...a }] }));
            },
            removeCoin: function (t) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              e((r) => {
                let n = [];
                for (let c = 0; c < r.coins.length; c++) {
                  let i = r.coins[c];
                  i.id === t
                    ? 0 !== a && e((e) => ({ coinCount: e.coinCount + 1 * a }))
                    : n.push(i);
                }
                return { coins: n };
              });
            },
            onCoinClick: (e, a) => {
              let { state: r, addPlusOne: n, removeCoin: c } = t();
              if ("in-game" !== r) return;
              let i = 0;
              switch (e.type) {
                case "normal":
                  i = 1;
                  break;
                case "non-memecoin":
                  i = -1;
              }
              if ((c(e.id, i), a)) {
                let { x: t, y: r } = Q(a, ".teaser");
                n({ id: e.id, initialX: t, initialY: r, amount: i });
              }
            },
            onClaimButtonClick: () => {
              let { state: a } = t();
              "score-board" === a && e({ state: "game-end" });
            },
            onHomeButtonClick: () => {
              e({ state: "initial" });
            },
            onStartButtonClick: () => {
              let { state: a } = t();
              "initial" === a && e({ state: "count-down" });
            },
            addPlusOne: (t) => {
              e((e) => ({ plusOnes: [...e.plusOnes, t] }));
            },
            removePlusOne: (t) => {
              e((e) => {
                let a = e.plusOnes.filter((e) => e.id !== t);
                return { plusOnes: a };
              });
            },
          })),
          (e, t, a) => {
            let r = a.subscribe;
            a.subscribe = (e, t, n) => {
              let c = e;
              if (t) {
                let r = (null == n ? void 0 : n.equalityFn) || Object.is,
                  i = e(a.getState());
                (c = (a) => {
                  let n = e(a);
                  if (!r(i, n)) {
                    let e = i;
                    t((i = n), e);
                  }
                }),
                  (null == n ? void 0 : n.fireImmediately) && t(i, i);
              }
              return r(c);
            };
            let c = n(e, t, a);
            return c;
          })
        );
      el.subscribe(
        (e) => e.state,
        (e, t) => {
          e !== t &&
            "count-down" === e &&
            el.setState({
              countDown: 3,
              coinCount: 0,
              timeLeft: el.getState().timeAllowed,
            });
        }
      );
      {
        let e = 0;
        el.subscribe(
          (e) => [e.state, e.timeLeft],
          (t) => {
            let [a, r] = t;
            e && (clearInterval(e), (e = 0)),
              "in-game" === a &&
                (e = setTimeout(() => {
                  r > 1
                    ? el.setState({ timeLeft: r - 1 })
                    : 1 === r &&
                      el.setState({ state: "score-board", timeLeft: 0 });
                }, 1e3));
          },
          {
            equalityFn: function (e, t) {
              if (Object.is(e, t)) return !0;
              if (
                "object" != typeof e ||
                null === e ||
                "object" != typeof t ||
                null === t
              )
                return !1;
              if (e instanceof Map && t instanceof Map) {
                if (e.size !== t.size) return !1;
                for (let [a, r] of e) if (!Object.is(r, t.get(a))) return !1;
                return !0;
              }
              if (e instanceof Set && t instanceof Set) {
                if (e.size !== t.size) return !1;
                for (let a of e) if (!t.has(a)) return !1;
                return !0;
              }
              let a = Object.keys(e);
              if (a.length !== Object.keys(t).length) return !1;
              for (let r = 0; r < a.length; r++)
                if (
                  !Object.prototype.hasOwnProperty.call(t, a[r]) ||
                  !Object.is(e[a[r]], t[a[r]])
                )
                  return !1;
              return !0;
            },
          }
        );
      }
      {
        let e = 0;
        el.subscribe(
          (e) => e.countDown,
          (t, a) => {
            t !== a &&
              t >= 1 &&
              (e && (clearInterval(e), (e = 0)),
              (e = setTimeout(() => {
                t > 1
                  ? el.setState({ countDown: t - 1 })
                  : 1 === t && el.setState({ state: "in-game", countDown: 0 });
              }, 1e3)));
          }
        );
      }
      el.subscribe(
        (e) => e.state,
        (e, t) => {
          e !== t && "initial" === e && el.setState({ character: en(!0) });
        }
      ),
        document.addEventListener("visibilitychange", () => {
          el.setState({ browserActive: !document.hidden });
        });
      var es = a(1357),
        eh = a.p + "static/chunks/background-music.0e5ab92bf0ff8040.mp3",
        eH = a(6938),
        eo = a(9259),
        eV = a(6964),
        em = a(3738),
        ed = {
          src: "/_next/static/media/sky-1.215a37a1.gif",
          height: 2e3,
          width: 3e3,
          blurWidth: 0,
          blurHeight: 0,
        },
        ep = a(6577),
        eg = a.n(ep);
      let ex = (e) => {
        let { style: t, animation: a } = e,
          {
            vh: r = window.innerHeight / 100,
            vw: n = window.innerWidth / 100,
          } = (0, eV._z)();
        return (0, W.jsx)(eH.Z, {
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          width: "100vw",
          userSelect: "none",
          pointerEvents: "none",
          ...t,
          ...a,
          children: (0, W.jsx)(em.xu, {
            position: "relative",
            height: "".concat(100 * r, "px"),
            width: "100%",
            children: (0, W.jsx)(eg(), {
              src: ed,
              alt: "sky",
              fill: !0,
              style: { opacity: 0.3 },
            }),
          }),
        });
      };
      function eu(e) {
        let { children: t, ssr: a } = e,
          r = J(e);
        return (0, W.jsx)(U, { breakpoint: r, hide: !0, ssr: a, children: t });
      }
      eu.displayName = "Hide";
      var ef = {
          src: "/_next/static/media/memecoin-banner.66e57ae7.png",
          height: 168,
          width: 768,
          blurWidth: 0,
          blurHeight: 0,
        },
        eC = ["title", "titleId"];
      function ew() {
        return (ew = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ev = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, eC);
          return X.createElement("img", {
            style: {
              transition: "all 5s ease-out",
            },
            height: "32px",
            width: "auto",
            src: "_next/static/media/bepo-present.png",
          });
        }),
        ey = ["title", "titleId"];
      function eM() {
        return (eM = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eb = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, ey);
          return X.createElement("img", {
            style: {
              transition: "all 5s ease-out",
            },
            height: "34px",
            width: "auto",
            src: "_next/static/media/bepo-rule.png",
          });
        }),
        eE = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]),
        eZ = a(1053);
      let ej = (e, t) => {
        let {
            vh: a = window.innerHeight / 100,
            vw: r = window.innerWidth / 100,
          } = (0, eV._z)(),
          n =
            (function (e, t) {
              var a;
              let r = (0, eZ.Kn)(t) ? t : { fallback: null != t ? t : "base" },
                n = (function (e) {
                  var t, a;
                  let r = (0, eZ.Kn)(e)
                      ? e
                      : { fallback: null != e ? e : "base" },
                    n = (0, q.F)(),
                    c = n.__breakpoints.details.map(
                      ({ minMaxQuery: e, breakpoint: t }) => ({
                        breakpoint: t,
                        query: e.replace("@media screen and ", ""),
                      })
                    ),
                    i = c.map((e) => e.breakpoint === r.fallback),
                    l = Y(
                      c.map((e) => e.query),
                      { fallback: i, ssr: r.ssr }
                    ),
                    s = l.findIndex((e) => !0 == e);
                  return null !=
                    (a = null == (t = c[s]) ? void 0 : t.breakpoint)
                    ? a
                    : r.fallback;
                })(r),
                c = (0, q.F)();
              if (!n) return;
              let i = Array.from(
                  (null == (a = c.__breakpoints) ? void 0 : a.keys) || []
                ),
                l = Array.isArray(e)
                  ? Object.fromEntries(
                      Object.entries(
                        (function (e, t = eE) {
                          let a = {};
                          return (
                            e.forEach((e, r) => {
                              let n = t[r];
                              null != e && (a[n] = e);
                            }),
                            a
                          );
                        })(e, i)
                      ).map(([e, t]) => [e, t])
                    )
                  : e;
              return (function (e, t, a = eE) {
                let r = Object.keys(e).indexOf(t);
                if (-1 !== r) return e[t];
                let n = a.indexOf(t);
                for (; n >= 0; ) {
                  let t = a[n];
                  if (e.hasOwnProperty(t)) {
                    r = n;
                    break;
                  }
                  n -= 1;
                }
                if (-1 !== r) {
                  let t = a[r];
                  return e[t];
                }
              })(l, n, i);
            })({ base: 0, lg: 1 }) || 0,
          c = 0 === n ? e : null != t ? t : 1.2 * e;
        return Math.min(a * c, r * (2.25 * c));
      };
      function eN(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var eO = a(8165),
        eA = {
          src: "/_next/static/media/memecoin.bb084c5a.png",
          height: 192,
          width: 192,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVcOEB8VT1JGzcAACrmsi29ZhYqKipMaXFaNzzVfwo6ADBiKDPuqxnZkh7jkAA/BDDNmDvEkEDDhzXIizq3eTykTCqeQihkN0LsAAAAEHRSTlN7kWYG/v0GAGX7ZJH6+/x4KWnRWgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADxJREFUeJxjYGdmYmDgYGNnYOcWYmERYGRn4BLh4eTkFORg4BfmFRNlFWAAMVhZQQwuER4+PpAUXDFMOwBT9wJOLFwmCQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        eS = ["title", "titleId"];
      function ek() {
        return (ek = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ez = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, eS);
          return X.createElement(
            "svg",
            ek(
              {
                viewBox: "0 0 21 31",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            s ||
              (s = X.createElement("path", {
                d: "M18 14.5H19.5V13V8V6.5H18H13H11.5V8V11.5H9.5V8V6.5H8H3H1.5V8V13V14.5H3H6.5V16.5H3H1.5V18V23V24.5H3H8H9.5V23V19.5H11.5V23V24.5H13H18H19.5V23V18V16.5H18H14.5V14.5H18Z",
                fill: "white",
                stroke: "currentColor",
                strokeWidth: 3,
              }))
          );
        }),
        eD = ["title", "titleId"];
      function eI() {
        return (eI = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eB = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, eD);
          return X.createElement(
            "svg",
            eI(
              {
                viewBox: "0 0 31 31",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            h ||
              (h = X.createElement("path", {
                d: "M6.5 28V29.5H8H23H24.5V28V24.5H28H29.5V23V8V6.5H28H24.5V3V1.5H23H8H6.5V3V6.5H3H1.5V8V23V24.5H3H6.5V28ZM16.5 9.7V21.3H14.5V9.7H16.5Z",
                fill: "white",
                stroke: "currentColor",
                strokeWidth: 3,
              }))
          );
        }),
        eP = ["title", "titleId"];
      function eR() {
        return (eR = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eF = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, eP);
          return X.createElement(
            "svg",
            eR(
              {
                viewBox: "0 0 31 31",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            H ||
              (H = X.createElement("path", {
                d: "M4 28V29.5H5.5H25.5H27V28V23V21.5H25.5H22V3V1.5H20.5H5.5H4V3V8V9.5H5.5H9V21.5H5.5H4V23V28Z",
                fill: "white",
                stroke: "currentColor",
                strokeWidth: 3,
              }))
          );
        }),
        eT = ["title", "titleId"];
      function eW() {
        return (eW = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var e_ = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, eT);
          return X.createElement(
            "svg",
            eW(
              {
                viewBox: "0 0 31 31",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            o ||
              (o = X.createElement("path", {
                d: "M1.5 28V29.5H3H28H29.5V28V23V21.5H28H14.5V19.5H23H24.5V18V14.5H28H29.5V13V8V6.5H28H24.5V3V1.5H23H3H1.5V3V8V9.5H3H16.5V11.5H8H6.5V13V16.5H3H1.5V18V28Z",
                fill: "white",
                stroke: "currentColor",
                strokeWidth: 3,
              }))
          );
        }),
        eL = ["title", "titleId"];
      function eX() {
        return (eX = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eY = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, eL);
          return X.createElement(
            "svg",
            eX(
              {
                viewBox: "0 0 31 31",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            V ||
              (V = X.createElement("path", {
                d: "M1.5 28V29.5H3H23H24.5V28V24.5H28H29.5V23V18V16.5H28H24.5V14.5H28H29.5V13V8V6.5H28H24.5V3V1.5H23H3H1.5V3V8V9.5H3H16.5V11.5H8H6.5V13V18V19.5H8H16.5V21.5H3H1.5V23V28Z",
                fill: "white",
                stroke: "currentColor",
                strokeWidth: 3,
              }))
          );
        }),
        eU = ["title", "titleId"];
      function eq() {
        return (eq = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eG = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, eU);
          return X.createElement(
            "svg",
            eq(
              {
                viewBox: "0 0 31 31",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            m ||
              (m = X.createElement("path", {
                d: "M11.5 28V29.5H13H23H24.5V28V19.5H28H29.5V18V13V11.5H28H24.5V3V1.5H23H3H1.5V3V18V19.5H3H11.5V28Z",
                fill: "white",
                stroke: "currentColor",
                strokeWidth: 3,
              }))
          );
        }),
        eJ = ["title", "titleId"];
      function eK() {
        return (eK = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eQ = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, eJ);
          return X.createElement(
            "svg",
            eK(
              {
                viewBox: "0 0 31 31",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            d ||
              (d = X.createElement("path", {
                d: "M1.5 28V29.5H3H23H24.5V28V24.5H28H29.5V23V18V16.5H28H24.5V13V11.5H23H14.5V9.5H28H29.5V8V3V1.5H28H3H1.5V3V18V19.5H3H16.5V21.5H3H1.5V23V28Z",
                fill: "white",
                stroke: "currentColor",
                strokeWidth: 3,
              }))
          );
        }),
        e$ = ["title", "titleId"];
      function e1() {
        return (e1 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var e2 = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, e$);
          return X.createElement(
            "svg",
            e1(
              {
                viewBox: "0 0 31 31",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            p ||
              (p = X.createElement("path", {
                d: "M6.5 28V29.5H8H23H24.5V28V24.5H28H29.5V23V18V16.5H28H24.5V13V11.5H23H14.5V9.5H23H24.5V8V3V1.5H23H8H6.5V3V6.5H3H1.5V8V23V24.5H3H6.5V28ZM16.5 19.5V21.5H14.5V19.5H16.5Z",
                fill: "white",
                stroke: "currentColor",
                strokeWidth: 3,
              }))
          );
        }),
        e0 = ["title", "titleId"];
      function e6() {
        return (e6 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var e8 = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, e0);
          return X.createElement(
            "svg",
            e6(
              {
                viewBox: "0 0 31 31",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            g ||
              (g = X.createElement("path", {
                d: "M6.5 28V29.5H8H18H19.5V28V19.5H23H24.5V18V14.5H28H29.5V13V3V1.5H28H3H1.5V3V8V9.5H3H16.5V11.5H13H11.5V13V16.5H8H6.5V18V28Z",
                fill: "white",
                stroke: "currentColor",
                strokeWidth: 3,
              }))
          );
        }),
        e4 = ["title", "titleId"];
      function e5() {
        return (e5 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var e3 = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, e4);
          return X.createElement(
            "svg",
            e5(
              {
                viewBox: "0 0 31 31",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            x ||
              (x = X.createElement("path", {
                d: "M6.5 28V29.5H8H23H24.5V28V24.5H28H29.5V23V18V16.5H28H24.5V14.5H28H29.5V13V8V6.5H28H24.5V3V1.5H23H8H6.5V3V6.5H3H1.5V8V13V14.5H3H6.5V16.5H3H1.5V18V23V24.5H3H6.5V28ZM16.5 9.7V11.3H14.5V9.7H16.5ZM16.5 19.7V21.3H14.5V19.7H16.5Z",
                fill: "white",
                stroke: "currentColor",
                strokeWidth: 3,
              }))
          );
        }),
        e7 = ["title", "titleId"];
      function e9() {
        return (e9 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var te = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, e7);
          return X.createElement(
            "svg",
            e9(
              {
                viewBox: "0 0 31 31",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            u ||
              (u = X.createElement("path", {
                d: "M6.5 28V29.5H8H23H24.5V28V24.5H28H29.5V23V8V6.5H28H24.5V3V1.5H23H8H6.5V3V6.5H3H1.5V8V13V14.5H3H6.5V18V19.5H8H16.5V21.5H8H6.5V23V28ZM16.5 9.5V11.5H14.5V9.5H16.5Z",
                fill: "white",
                stroke: "currentColor",
                strokeWidth: 3,
              }))
          );
        }),
        tt = ["title", "titleId"];
      function ta() {
        return (ta = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tr = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, tt);
          return X.createElement(
            "svg",
            ta(
              {
                viewBox: "0 0 31 31",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            f ||
              (f = X.createElement("path", {
                d: "M4 18V19.5H5.5H25.5H27V18V13V11.5H25.5H5.5H4V13V18Z",
                fill: "white",
                stroke: "currentColor",
                strokeWidth: 3,
              }))
          );
        }),
        tn = ["title", "titleId"];
      function tc() {
        return (tc = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ti = (0, X.forwardRef)(function (e, t) {
        var a = e.title,
          r = e.titleId,
          n = (function (e, t) {
            if (null == e) return {};
            var a,
              r,
              n = (function (e, t) {
                if (null == e) return {};
                var a,
                  r,
                  n = {},
                  c = Object.keys(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                return n;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var c = Object.getOwnPropertySymbols(e);
              for (r = 0; r < c.length; r++)
                (a = c[r]),
                  !(t.indexOf(a) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, a) &&
                    (n[a] = e[a]);
            }
            return n;
          })(e, tn);
        return X.createElement(
          "svg",
          tc(
            {
              viewBox: "0 0 31 31",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r,
            },
            n
          ),
          a ? X.createElement("title", { id: r }, a) : null,
          C ||
            (C = X.createElement("path", {
              d: "M11.5 28V29.5H13H18H19.5V28V19.5H28H29.5V18V13V11.5H28H19.5V3V1.5H18H13H11.5V3V11.5H3H1.5V13V18V19.5H3H11.5V28Z",
              fill: "white",
              stroke: "currentColor",
              strokeWidth: 3,
            }))
        );
      });
      let tl = [
          (0, W.jsx)(eB, {}),
          (0, W.jsx)(eF, {}),
          (0, W.jsx)(e_, {}),
          (0, W.jsx)(eY, {}),
          (0, W.jsx)(eG, {}),
          (0, W.jsx)(eQ, {}),
          (0, W.jsx)(e2, {}),
          (0, W.jsx)(e8, {}),
          (0, W.jsx)(e3, {}),
          (0, W.jsx)(te, {}),
        ],
        ts = (e) => {
          let {
              number: t,
              withSign: a,
              color: r = "#013043",
              fontSize: n = "48px",
              ...c
            } = e,
            i = t.toString().split("");
          return (0, W.jsxs)(_.k, {
            color: r,
            children: [
              a && t > 0
                ? (0, W.jsx)(
                    em.xu,
                    { width: n, height: n, children: (0, W.jsx)(ti, {}) },
                    "sign"
                  )
                : void 0,
              i.map((e, t) =>
                (0, W.jsx)(
                  em.xu,
                  {
                    ...c,
                    width: n,
                    height: n,
                    children: "-" === e ? (0, W.jsx)(tr, {}) : tl[parseInt(e)],
                  },
                  "".concat(t, "-").concat(e)
                )
              ),
            ],
          });
        };
      function th() {
        let e = eN([
          "\n0%, 20% {\n  transform: translateY(0);\n}\n10% {\n  transform: translateY(-15px);\n}\n",
        ]);
        return (
          (th = function () {
            return e;
          }),
          e
        );
      }
      let tH = (0, eO.F4)(th()),
        to = (e) => {
          let { style: t, animation: a } = e,
            r = el((e) => e.coinCount);
          return (0, W.jsxs)(eH.Z, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            ...t,
            ...a,
            children: [
              (0, W.jsx)(em.xu, {
                width: "48px",
                height: "48px",
                children: (0, W.jsx)(eg(), { src: eA, alt: "BEPO BEAR" }),
              }),
              (0, W.jsx)(em.xu, {
                color: "#013043",
                width: "".concat(18.375, "px"),
                height: "100%",
                children: (0, W.jsx)(ez, {}),
              }),
              (0, W.jsx)(_.k, {
                children: (0, W.jsx)(ts, {
                  number: r,
                  fontSize: "28px",
                  animation: 0 !== r ? "".concat(tH, " 1s ease-in-out") : "",
                }),
              }),
            ],
          });
        };
      var tV = a(4103),
        tm = ["title", "titleId"];
      function td() {
        return (td = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tp = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, tm);
          return X.createElement(
            "svg",
            td(
              {
                width: 32,
                height: 32,
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            w ||
              (w = X.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M 25.154297 3.984375 C 24.829241 3.998716 24.526384 4.0933979 24.259766 4.2011719 C 24.010014 4.3016357 23.055766 4.7109106 21.552734 5.3554688 C 20.048394 6.0005882 18.056479 6.855779 15.931641 7.7695312 C 11.681964 9.5970359 6.9042108 11.654169 4.4570312 12.707031 C 4.3650097 12.746607 4.0439208 12.849183 3.703125 13.115234 C 3.3623292 13.381286 3 13.932585 3 14.546875 C 3 15.042215 3.2360676 15.534319 3.5332031 15.828125 C 3.8303386 16.121931 4.144747 16.267067 4.4140625 16.376953 C 5.3912284 16.775666 8.4218473 18.015862 8.9941406 18.25 C 9.195546 18.866983 10.29249 22.222526 10.546875 23.044922 C 10.714568 23.587626 10.874198 23.927519 11.082031 24.197266 C 11.185948 24.332139 11.306743 24.45034 11.453125 24.542969 C 11.511635 24.579989 11.575789 24.608506 11.640625 24.634766 L 11.644531 24.636719 C 11.659471 24.642719 11.67235 24.652903 11.6875 24.658203 C 11.716082 24.668202 11.735202 24.669403 11.773438 24.677734 C 11.925762 24.726927 12.079549 24.757812 12.216797 24.757812 C 12.80196 24.757814 13.160156 24.435547 13.160156 24.435547 L 13.181641 24.419922 L 16.191406 21.816406 L 19.841797 25.269531 C 19.893193 25.342209 20.372542 26 21.429688 26 C 22.057386 26 22.555319 25.685026 22.875 25.349609 C 23.194681 25.014192 23.393848 24.661807 23.478516 24.21875 L 23.478516 24.216797 C 23.557706 23.798129 26.921875 6.5273437 26.921875 6.5273438 L 26.916016 6.5507812 C 27.014496 6.1012683 27.040303 5.6826405 26.931641 5.2695312 C 26.822973 4.8564222 26.536648 4.4608905 26.181641 4.2480469 C 25.826669 4.0352506 25.479353 3.9700339 25.154297 3.984375 z M 24.966797 6.0742188 C 24.961997 6.1034038 24.970391 6.0887279 24.962891 6.1230469 L 24.960938 6.1347656 L 24.958984 6.1464844 C 24.958984 6.1464844 21.636486 23.196371 21.513672 23.845703 C 21.522658 23.796665 21.481573 23.894167 21.439453 23.953125 C 21.379901 23.91208 21.257812 23.859375 21.257812 23.859375 L 21.238281 23.837891 L 16.251953 19.121094 L 12.726562 22.167969 L 13.775391 17.96875 C 13.775391 17.96875 20.331562 11.182109 20.726562 10.787109 C 21.044563 10.471109 21.111328 10.360953 21.111328 10.251953 C 21.111328 10.105953 21.035234 10 20.865234 10 C 20.712234 10 20.506484 10.14875 20.396484 10.21875 C 18.963383 11.132295 12.671823 14.799141 9.8515625 16.439453 C 9.4033769 16.256034 6.2896636 14.981472 5.234375 14.550781 C 5.242365 14.547281 5.2397349 14.548522 5.2480469 14.544922 C 7.6958673 13.491784 12.47163 11.434667 16.720703 9.6074219 C 18.84524 8.6937992 20.838669 7.8379587 22.341797 7.1933594 C 23.821781 6.5586849 24.850125 6.1218894 24.966797 6.0742188 z",
                fill: "white",
              }))
          );
        }),
        tg = ["title", "titleId"];
      function tx() {
        return (tx = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tu = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, tg);
          return X.createElement(
            "svg",
            tx(
              {
                width: 32,
                height: 32,
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            v ||
              (v = X.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M30 8H28V24H30V8ZM26 10H24V22H26V10Z",
                fill: "white",
              })),
            y ||
              (y = X.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16 4H20V6V8V10V12V22V24V26V28H16V26H12V24H10V22H2V12V10H10V8H12V6H16V4Z",
                fill: "white",
              }))
          );
        }),
        tf = ["title", "titleId"];
      function tC() {
        return (tC = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tw = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, tf);
          return X.createElement(
            "svg",
            tC(
              {
                width: 32,
                height: 32,
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            M ||
              (M = X.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M22 10H24V12H22V10ZM26 14H24V12H26V14ZM28 14H26V16H24V18H22V20H24V18H26V16H28V18H30V20H32V18H30V16H28V14ZM30 12H28V14H30V12ZM30 12V10H32V12H30Z",
                fill: "white",
              })),
            b ||
              (b = X.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16 4H20V6V8V10V12V22V24V26V28H16V26H12V24H10V22H2V12V10H10V8H12V6H16V4Z",
                fill: "white",
              }))
          );
        }),
        tv = ["title", "titleId"];
      function ty() {
        return (ty = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tM = (0, X.forwardRef)(function (e, t) {
        var a = e.title,
          r = e.titleId,
          n = (function (e, t) {
            if (null == e) return {};
            var a,
              r,
              n = (function (e, t) {
                if (null == e) return {};
                var a,
                  r,
                  n = {},
                  c = Object.keys(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                return n;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var c = Object.getOwnPropertySymbols(e);
              for (r = 0; r < c.length; r++)
                (a = c[r]),
                  !(t.indexOf(a) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, a) &&
                    (n[a] = e[a]);
            }
            return n;
          })(e, tv);
        return X.createElement(
          "svg",
          ty(
            {
              width: 32,
              height: 32,
              viewBox: "0 0 32 32",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r,
            },
            n
          ),
          a ? X.createElement("title", { id: r }, a) : null,
          E ||
            (E = X.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M24 2H18V4H16V6H14V8H6V6H4V4H2V6V8V10V12V14H4V16V18H6V20H8V22H6V24H2V26H6V28H12V26H18V24H20V22H22V20H24V18V16H26V14V12H28V10H30V8H28V6H26V4H24V2Z",
              fill: "white",
            }))
        );
      });
      let tb = (e) => {
        let { style: t, animation: a, size: r = "48px" } = e,
          n = el((e) => e.playingAudio),
          c = el((e) => e.state);
        return (0, W.jsxs)(eH.Z, {
          display: "flex",
          gap: "24px",
          ...t,
          ...a,
          children: [
            ("initial" === c || "count-down" === c) &&
              (0, W.jsxs)(W.Fragment, {
                children: [
                  (0, W.jsx)(tV.r, {
                    href: "https://x.com/BepoBear1000x",
                    isExternal: !0,
                    target: "_blank",
                    children: (0, W.jsx)(em.xu, {
                      height: r,
                      width: r,
                      padding: "8px",
                      children: (0, W.jsx)("img", {
                        src: "../../../../_next/static/media/x-logo.png",
                        alt: "Image",
                        height: "100%",
                        width: "100%",
                      }),
                    }),
                  }),
                  // (0, W.jsx)(tV.r, {
                  //   href: "#",
                  //   isExternal: !0,
                  //   target: "_blank",
                  //   children: (0, W.jsx)(em.xu, {
                  //     height: r,
                  //     width: r,
                  //     padding: "8px",
                  //     children: (0, W.jsx)("img", {
                  //       src: "../../../../_next/static/media/telegram.png",
                  //       alt: "Image",
                  //       height: "100%",
                  //       width: "100%",
                  //     }),
                  //   }),
                  // }),
                ],
              }),
            (0, W.jsx)(tV.r, {
              onClick: (e) => {
                e.preventDefault(),
                  e.stopPropagation(),
                  el.setState((e) => ({ playingAudio: !e.playingAudio }));
              },
              children: (0, W.jsx)(em.xu, {
                height: r,
                width: r,
                padding: "8px",
                children: n
                  ? (0, W.jsx)(tu, { height: "100%", width: "100%" })
                  : (0, W.jsx)(tw, { height: "100%", width: "100%" }),
              }),
            }),
          ],
        });
      };
      var tE = a.p + "static/chunks/click-start-button.36b9f153da998175.mp3",
        tZ = a(5773),
        tj = a(3319);
      let tN = (e) => {
          let {
            style: t,
            animation: a,
            padding: r,
            primaryColor: n = "#F8C34B",
            lighterColor: c = "rgba(255, 255, 255, 0.7)",
            darkerColor: i = "rgba(0, 0, 0, 0.35)",
            pixelSize: l = 3,
            children: s,
            ...h
          } = e;
          return (0, W.jsx)(eH.Z, {
            display: "flex",
            flex: "1",
            ...t,
            ...a,
            children: (0, W.jsx)(tZ.z, {
              outline: "none !important",
              background: "none !important",
              border: "none !important",
              height: "unset !important",
              padding: "unset !important",
              transition: "none !important",
              sx: {
                "--primary-color": n,
                "--lighter-shade": c,
                "--darker-shade": i,
                "--pixel-size": "".concat(l, "px"),
                "&:active": {
                  transform: "translate(2px, 2px)",
                  "--lighter-shade": i,
                  "--darker-shade": c,
                },
              },
              ...h,
              children: (0, W.jsxs)(_.k, {
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                children: [
                  (0, W.jsxs)(_.k, {
                    position: "relative",
                    flexDirection: "column",
                    background: "var(--primary-color)",
                    width: "calc(var(--pixel-size) + 1px)",
                    height: "calc(100% - calc(var(--pixel-size) * 4))",
                    marginRight: "-1px",
                    children: [
                      (0, W.jsx)(_.k, {
                        background: "var(--lighter-shade)",
                        width: "var(--pixel-size)",
                        height: "var(--pixel-size)",
                      }),
                      (0, W.jsx)(tj.L, {}),
                      (0, W.jsx)(_.k, {
                        background: "var(--darker-shade)",
                        width: "var(--pixel-size)",
                        height: "var(--pixel-size)",
                      }),
                    ],
                  }),
                  (0, W.jsxs)(_.k, {
                    position: "relative",
                    flexDirection: "column",
                    background: "var(--primary-color)",
                    width: "calc(var(--pixel-size) + 1px)",
                    height: "calc(100% - calc(var(--pixel-size) * 2))",
                    marginRight: "-1px",
                    children: [
                      (0, W.jsx)(_.k, {
                        background: "var(--lighter-shade)",
                        width: "var(--pixel-size)",
                        height: "var(--pixel-size)",
                      }),
                      (0, W.jsx)(tj.L, {}),
                      (0, W.jsx)(_.k, {
                        background: "var(--darker-shade)",
                        width: "var(--pixel-size)",
                        height: "var(--pixel-size)",
                      }),
                    ],
                  }),
                  (0, W.jsxs)(_.k, {
                    position: "relative",
                    flexDirection: "column",
                    background: "var(--primary-color)",
                    width: "calc(var(--pixel-size) * 4 + 1px)",
                    height: "100%",
                    marginRight: "-1px",
                    children: [
                      (0, W.jsx)(_.k, {
                        background: "var(--lighter-shade)",
                        width: "100%",
                        height: "var(--pixel-size)",
                      }),
                      (0, W.jsx)(tj.L, {}),
                      (0, W.jsx)(_.k, {
                        background: "var(--darker-shade)",
                        width: "100%",
                        height: "var(--pixel-size)",
                      }),
                    ],
                  }),
                  (0, W.jsxs)(_.k, {
                    position: "relative",
                    padding: r,
                    background: "var(--primary-color)",
                    children: [
                      (0, W.jsx)(_.k, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        background: "var(--lighter-shade)",
                        width: "100%",
                        height: "var(--pixel-size)",
                      }),
                      s,
                      (0, W.jsx)(_.k, {
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        background: "var(--darker-shade)",
                        width: "100%",
                        height: "var(--pixel-size)",
                      }),
                    ],
                  }),
                  (0, W.jsxs)(_.k, {
                    position: "relative",
                    flexDirection: "column",
                    background: "var(--primary-color)",
                    width: "calc(var(--pixel-size) * 4 + 1px)",
                    height: "100%",
                    alignItems: "flex-end",
                    marginLeft: "-1px",
                    children: [
                      (0, W.jsx)(_.k, {
                        background: "var(--lighter-shade)",
                        width: "100%",
                        height: "var(--pixel-size)",
                      }),
                      (0, W.jsx)(tj.L, {}),
                      (0, W.jsx)(_.k, {
                        background: "var(--darker-shade)",
                        width: "100%",
                        height: "var(--pixel-size)",
                      }),
                    ],
                  }),
                  (0, W.jsxs)(_.k, {
                    position: "relative",
                    flexDirection: "column",
                    background: "var(--primary-color)",
                    width: "calc(var(--pixel-size) + 1px)",
                    height: "calc(100% - calc(var(--pixel-size) * 2))",
                    alignItems: "flex-end",
                    marginLeft: "-1px",
                    children: [
                      (0, W.jsx)(_.k, {
                        background: "var(--lighter-shade)",
                        width: "var(--pixel-size)",
                        height: "var(--pixel-size)",
                      }),
                      (0, W.jsx)(tj.L, {}),
                      (0, W.jsx)(_.k, {
                        background: "var(--darker-shade)",
                        width: "var(--pixel-size)",
                        height: "var(--pixel-size)",
                      }),
                    ],
                  }),
                  (0, W.jsxs)(_.k, {
                    position: "relative",
                    flexDirection: "column",
                    background: "var(--primary-color)",
                    width: "calc(var(--pixel-size) + 1px)",
                    height: "calc(100% - calc(var(--pixel-size) * 4))",
                    alignItems: "flex-end",
                    marginLeft: "-1px",
                    children: [
                      (0, W.jsx)(_.k, {
                        background: "var(--lighter-shade)",
                        width: "var(--pixel-size)",
                        height: "var(--pixel-size)",
                      }),
                      (0, W.jsx)(tj.L, {}),
                      (0, W.jsx)(_.k, {
                        background: "var(--darker-shade)",
                        width: "var(--pixel-size)",
                        height: "var(--pixel-size)",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        tO = () => {
          if (!el.getState().playingAudio) return;
          let e = new Audio(tE);
          (e.volume = 0.2), e.play();
        },
        tA = (e) => {
          let { style: t, animation: a, ...r } = e,
            n = ej(0.15, 0.13);
          return (0, W.jsx)(eH.Z, {
            ...t,
            ...a,
            children: (0, W.jsx)(tN, {
              pixelSize: 3 * n,
              padding: "".concat(12 * n, "px ").concat(9 * n, "px"),
              onMouseDown: (e) => {
                var t;
                tO(),
                  null === (t = r.onMouseDown) || void 0 === t || t.call(r, e);
              },
              onTouchStart: (e) => {
                var t;
                tO(),
                  null === (t = r.onTouchStart) || void 0 === t || t.call(r, e);
              },
              onClick: (e) => {
                var t;
                el.getState().onStartButtonClick(),
                  null === (t = r.onClick) || void 0 === t || t.call(r, e);
              },
              children: (0, W.jsx)("svg", {
                height: 12 * n,
                viewBox: "0 0 196 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, W.jsx)("path", {
                  d: "M0 15.75V0H13.5V2.25H15.75V9H13.5V11.25H4.5V15.75H0ZM4.5 9H11.25V2.25H4.5V9ZM18 15.75V0H31.5V2.25H33.75V9H29.25V11.25H31.5V13.5H33.75V15.75H27V13.5H24.75V11.25H22.5V15.75H18ZM22.5 9H27V6.75H29.25V2.25H22.5V9ZM36 15.75V0H51.75V2.25H40.5V6.75H49.5V9H40.5V13.5H51.75V15.75H36ZM56.25 15.75V13.5H54V11.25H58.5V13.5H65.25V9H56.25V6.75H54V2.25H56.25V0H67.5V2.25H69.75V4.5H65.25V2.25H58.5V6.75H67.5V9H69.75V13.5H67.5V15.75H56.25ZM74.25 15.75V13.5H72V11.25H76.5V13.5H83.25V9H74.25V6.75H72V2.25H74.25V0H85.5V2.25H87.75V4.5H83.25V2.25H76.5V6.75H85.5V9H87.75V13.5H85.5V15.75H74.25ZM110.25 15.75V13.5H108V11.25H112.5V13.5H119.25V9H110.25V6.75H108V2.25H110.25V0H121.5V2.25H123.75V4.5H119.25V2.25H112.5V6.75H121.5V9H123.75V13.5H121.5V15.75H110.25ZM132.75 15.75V2.25H128.25V0H141.75V2.25H137.25V15.75H132.75ZM144 15.75V4.5H146.25V2.25H148.5V0H155.25V2.25H157.5V4.5H159.75V15.75H155.25V11.25H148.5V15.75H144ZM148.5 9H155.25V4.5H153V2.25H150.75V4.5H148.5V9ZM162 15.75V0H175.5V2.25H177.75V9H173.25V11.25H175.5V13.5H177.75V15.75H171V13.5H168.75V11.25H166.5V15.75H162ZM166.5 9H171V6.75H173.25V2.25H166.5V9ZM186.75 15.75V2.25H182.25V0H195.75V2.25H191.25V15.75H186.75Z",
                  fill: "black",
                }),
              }),
            }),
          });
        };
      var tS = ["title", "titleId"];
      function tk() {
        return (tk = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tz = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, tS);
          return X.createElement(
            "svg",
            tk(
              {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            Z ||
              (Z = X.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8 2H16V4H18V6H20V8H22V10V14V16H20V18H18V20H16V22H8V20H6V18H4V16H2V14V10V8H4V6H6V4H8V2ZM10 6H12V12H10V6ZM12 12H18V14H12V12Z",
                fill: "white",
              }))
          );
        }),
        tD = ["title", "titleId"];
      function tI() {
        return (tI = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tB = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, tD);
          return X.createElement(
            "svg",
            tI(
              {
                viewBox: "0 0 17 31",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            j ||
              (j = X.createElement("path", {
                d: "M2 13V14.5H3.5H13.5H15V13V8V6.5H13.5H3.5H2V8V13ZM2 23V24.5H3.5H13.5H15V23V18V16.5H13.5H3.5H2V18V23Z",
                fill: "white",
                stroke: "currentColor",
                strokeWidth: 3,
              }))
          );
        }),
        tP = ["title", "titleId"];
      function tR() {
        return (tR = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tF = (0, X.forwardRef)(function (e, t) {
        var a = e.title,
          r = e.titleId,
          n = (function (e, t) {
            if (null == e) return {};
            var a,
              r,
              n = (function (e, t) {
                if (null == e) return {};
                var a,
                  r,
                  n = {},
                  c = Object.keys(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                return n;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var c = Object.getOwnPropertySymbols(e);
              for (r = 0; r < c.length; r++)
                (a = c[r]),
                  !(t.indexOf(a) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, a) &&
                    (n[a] = e[a]);
            }
            return n;
          })(e, tP);
        return X.createElement(
          "svg",
          tR(
            {
              width: 164,
              height: 40,
              viewBox: "0 0 164 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r,
            },
            n
          ),
          a ? X.createElement("title", { id: r }, a) : null,
          N ||
            (N = X.createElement("path", {
              d: "M12 0H152V4H160V12H164V28H160V36H152V40H12V36H4V28H0V12H4V4H12V0Z",
              fill: "black",
            }))
        );
      });
      function tT() {
        let e = eN([
          "\n0%, 100% {\n  transform: translateX(0);\n}\n10%, 30%, 50%, 70%, 90% {\n  transform: translateX(-2px);\n}\n20%, 40%, 60%, 80% {\n  transform: translateX(2px);\n}\n",
        ]);
        return (
          (tT = function () {
            return e;
          }),
          e
        );
      }
      let tW = (0, eO.F4)(tT()),
        t_ = (e) => {
          let { fontSize: t = "20px", style: a, animation: r } = e,
            n = el((e) => e.timeLeft);
          return (0, W.jsx)(eH.Z, {
            display: "flex",
            ...a,
            ...r,
            alignItems: "center",
            justifyContent: "center",
            children: (0, W.jsxs)(
              em.xu,
              {
                animation:
                  n <= 10 && 0 !== n ? "".concat(tW, " 1s linear") : "",
                children: [
                  (0, W.jsx)(em.xu, {
                    position: "absolute",
                    width: "164px",
                    height: "40px",
                    zIndex: "-1",
                    children: (0, W.jsx)(tF, {}),
                  }),
                  (0, W.jsxs)(
                    _.k,
                    {
                      position: "relative",
                      alignItems: "center",
                      justifyContent: "center",
                      children: [
                        (0, W.jsx)(em.xu, {
                          background: "black",
                          width: "4px",
                          height: "calc(100% - 4px * 4)",
                        }),
                        (0, W.jsx)(em.xu, {
                          background: "black",
                          width: "8px",
                          height: "calc(100% - 4px * 2)",
                        }),
                        (0, W.jsxs)(_.k, {
                          background: "black",
                          alignItems: "center",
                          padding: "8px 8px",
                          position: "relative",
                          children: [
                            (0, W.jsx)(em.xu, {
                              width: "24px",
                              height: "24px",
                              marginRight: "8px",
                              children: (0, W.jsx)(tz, {}),
                            }),
                            (0, W.jsx)(ts, {
                              color: "black",
                              number: 0,
                              fontSize: t,
                            }),
                            (0, W.jsx)(ts, {
                              color: "black",
                              number: 0,
                              fontSize: t,
                            }),
                            (0, W.jsx)(em.xu, {
                              width: "".concat(340 / 31, "px"),
                              height: t,
                              children: (0, W.jsx)(tB, { color: "black" }),
                            }),
                            n < 10 &&
                              (0, W.jsx)(ts, {
                                color: "black",
                                number: 0,
                                fontSize: t,
                              }),
                            (0, W.jsx)(ts, {
                              color: "black",
                              number: n,
                              fontSize: t,
                            }),
                          ],
                        }),
                        (0, W.jsx)(em.xu, {
                          background: "black",
                          width: "8px",
                          height: "calc(100% - 4px * 2)",
                        }),
                        (0, W.jsx)(em.xu, {
                          background: "black",
                          width: "4px",
                          height: "calc(100% - 4px * 4)",
                        }),
                      ],
                    },
                    n
                  ),
                ],
              },
              n
            ),
          });
        },
        tL = (e) => {
          let { style: t, animation: a } = e,
            r = el((e) => e.state),
            {
              vh: n = window.innerHeight / 100,
              vw: c = window.innerWidth / 100,
            } = (0, eV._z)();
          return (0, W.jsxs)(eH.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            ...t,
            ...a,
            height: {
              base: "".concat(42 * n, "px"),
              lg: "".concat(44 * n, "px"),
            },
            marginTop: {
              base: "".concat(6 * n, "px"),
              lg: "".concat(2 * n, "px"),
            },
            gap: "".concat(2 * n, "px"),
            pointerEvents: "in-game" === r ? "none" : void 0,
            children: [
              (0, W.jsx)(_.k, {
                width: "".concat(22 * n, "px"),
                marginTop: "".concat(2 * n, "px"),
                maxWidth: "60vw",
                alignItems: "center",
                justifyContent: "center",
                visibility:
                  "in-game" !== r && "score-board" !== r && "game-end" !== r
                    ? "visible"
                    : "hidden",
                pointerEvents: "none",
                children: (0, W.jsx)(ev, { height: "100%", width: "100%" }),
              }),
              (0, W.jsxs)(_.k, {
                alignItems: "center",
                justifyContent: "center",
                width: "".concat(40 * n, "px"),
                maxWidth: "78vw",
                pointerEvents: "none",
                as: "h1",
                fontSize: "0px",
                children: [
                  "BEPO BEAR",
                  (0, W.jsx)(eg(), { src: ef, alt: "BEPO BEAR" }),
                ],
              }),
              (0, W.jsxs)(_.k, {
                alignItems: "center",
                justifyContent: "center",
                width: "".concat(40 * n, "px"),
                maxWidth: "78vw",
                pointerEvents: "none",
                as: "h1",
                fontSize: "0px",
                children: [
                  "One $meme to rule them all test.",
                  (0, W.jsx)(eb, { height: "100%", width: "100%" }),
                ],
              }),
              (0, W.jsx)(eu, {
                above: "lg",
                children: (0, W.jsxs)(_.k, {
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "".concat(1 * n, "px"),
                  children: [
                    (0, W.jsx)(tb, {
                      style: {
                        visibility: "initial" === r ? "visible" : "hidden",
                      },
                      size: "".concat(6 * n, "px"),
                    }),
                    (0, W.jsx)(t_, {
                      style: {
                        position: "absolute",
                        zIndex: 10,
                        pointerEvents: "none",
                        transform: "scale(".concat(ej(0.13), ")"),
                        visibility: "in-game" === r ? "visible" : "hidden",
                      },
                    }),
                    (0, W.jsx)(to, {
                      style: {
                        position: "absolute",
                        transform: "translateY(".concat(13 * n, "px)"),
                        zIndex: 10,
                        visibility: "in-game" === r ? "visible" : "hidden",
                      },
                    }),
                  ],
                }),
              }),
              (0, W.jsxs)(_.k, {
                flexDirection: "column-reverse",
                alignItems: "center",
                justifyContent: "center",
                marginTop: {
                  base: "".concat(6 * n, "px"),
                  lg: "".concat(8 * n, "px"),
                },
                marginBottom: "".concat(3 * n, "px"),
                children: [
                  (0, W.jsx)(tA, {
                    style: {
                      visibility: "initial" === r ? "visible" : "hidden",
                    },
                  }),
                  (0, W.jsx)(K, {
                    above: "lg",
                    children: (0, W.jsx)(t_, {
                      style: {
                        position: "absolute",
                        marginBottom: "".concat(14 * n, "px"),
                        zIndex: 10,
                        pointerEvents: "none",
                        visibility: "in-game" === r ? "visible" : "hidden",
                      },
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      var tX = {
        src: "/_next/static/media/coins-back.6ac25ffb.png",
        height: 890,
        width: 1920,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJ1BMVEVsQxJwTRdjQxRrRxZgMw9XJAltQhFvVh1sUx5hNQ5sUBxrUBt1UhpxVWFDAAAADHRSTlP1/VGqOybrmWWKfMxj6YJmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nBXBhxEAIBACMOCbhf3n9UxwVtyRBrRt0viaaGxlZageDTYAoRufcgAAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 4,
      };
      let tY = (e) => {
        let { style: t, animation: a } = e,
          {
            vh: r = window.innerHeight / 100,
            vw: n = window.innerWidth / 100,
          } = (0, eV._z)();
        return (0, W.jsx)(eH.Z, {
          position: "absolute",
          display: "flex",
          bottom: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          justifyContent: "center",
          width: "100%",
          ...t,
          ...a,
          children: (0, W.jsx)(em.xu, {
            position: "absolute",
            bottom: "0",
            height: "".concat(26 * r, "px"),
            width: "100vw",
            backgroundImage: tX.src,
            backgroundRepeat: "repeat-x",
            backgroundSize: "".concat(55 * r, "px"),
            bgPosition: "bottom",
          }),
        });
      };
      var tU = {
        src: "/_next/static/media/coins-front.34353f32.png",
        height: 600,
        width: 1920,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAG1BMVEWrdy62iTuvgTaki0iqhT2si0OrhTqri0Oogj5Jc9seAAAACXRSTlP9/v0/fYXHuF7hU+2EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHUlEQVR4nGPgYGZhZ2NlZmFgYmIEASYGBiYGMAAABFEANuLjpn4AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 3,
      };
      let tq = (e) => {
        let { style: t, animation: a } = e,
          {
            vh: r = window.innerHeight / 100,
            vw: n = window.innerWidth / 100,
          } = (0, eV._z)();
        return (0, W.jsx)(eH.Z, {
          position: "absolute",
          display: "flex",
          bottom: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          justifyContent: "center",
          width: "100%",
          ...t,
          ...a,
          children: (0, W.jsx)(em.xu, {
            position: "absolute",
            bottom: "0",
            height: "".concat(23 * r, "px"),
            width: "100vw",
            backgroundImage: tU.src,
            backgroundRepeat: "repeat-x",
            backgroundSize: "".concat(55 * r, "px"),
            bgPosition: "bottom",
          }),
        });
      };
      var tG = a.p + "static/chunks/click-coin.688a6da31b6534c8.mp3",
        tJ = ["title", "titleId"];
      function tK() {
        return (tK = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tQ = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, tJ);
          return X.createElement(
            "svg",
            tK(
              {
                id: "Layer_Ape",
                shapeRendering: "crispEdges",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 25 25",
                style: { enableBackground: "new 0 0 25 25" },
                xmlSpace: "preserve",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            O ||
              (O = X.createElement(
                "style",
                { type: "text/css" },
                "\r\n	.stApe0{fill:#053AA3;}\r\n	.stApe1{fill:#2C64D3;}\r\n	.stApe2{fill:#FFFFFF;}\r\n"
              )),
            A ||
              (A = X.createElement(
                "g",
                null,
                X.createElement("path", {
                  className: "stApe0",
                  d: "M11,2c1.6,0,3.4,0,5,0V1c-2.3,0-4.7,0-7,0v1C9.5,2,10.5,2,11,2z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M9,3V2C8.5,2,7.5,2,7,2v1C7.5,3,8.5,3,9,3z",
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M10,3c1.9,0,4.1,0,6,0V2c-2.3,0-4.7,0-7,0v1H10z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M17,3h1V2c-0.5,0-1.5,0-2,0v1H17z",
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 3,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M8,4h1V3C8.5,3,7.5,3,7,3v1H8z",
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M16,3v1c0.5,0,1.5,0,2,0V3C17.5,3,16.5,3,16,3z",
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 3,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 4,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 4,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M12,5c0.9,0,2.1,0,3,0V4c-1.6,0-3.4,0-5,0v1C10.5,5,11.5,5,12,5z",
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 4,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 19,
                  y: 4,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 4,
                  y: 5,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 5,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M10,6V5C9.5,5,8.5,5,8,5v1C8.5,6,9.5,6,10,6z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M11,6c0.5,0,1.5,0,2,0v1h1V6h1V5c-1.6,0-3.4,0-5,0v1H11z",
                }),
                X.createElement("path", {
                  className: "stApe2",
                  d: "M16,5h-1v1c0.5,0,1.5,0,2,0v1h1c0,1.6,0,3.4,0,5h1v1h1c0-1.9,0-4.1,0-6h-1V6h-1V5C17.5,5,16.5,5,16,5z",
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 5,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 19,
                  y: 5,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 20,
                  y: 5,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 3,
                  y: 6,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 4,
                  y: 6,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 6,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M16,7h1V6c-0.5,0-1.5,0-2,0v1H16z",
                }),
                X.createElement("rect", {
                  x: 19,
                  y: 6,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 20,
                  y: 6,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 21,
                  y: 6,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 7,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M21,8v1h1c0-0.5,0-1.5,0-2h-1V8z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M3,8V7H2c0,0.5,0,1.5,0,2h1V8z",
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M3,9h1c0-0.5,0-1.5,0-2H3C3,7.5,3,8.5,3,9z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M17,9c0,0.9,0,2.1,0,3h1c0-1.6,0-3.4,0-5h-1C17,7.5,17,8.5,17,9z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M21,8V7h-1c0,0.9,0,2.1,0,3h1c0,1.6,0,3.4,0,5h-1c0,0.5,0,1.5,0,2h-1v1h-1v1h-1v1c-0.5,0-1.5,0-2,0v1 c-1.6,0-3.4,0-5,0v-1c-0.9,0-2.1,0-3,0v1c0.5,0,1.5,0,2,0v1c2.3,0,4.7,0,7,0v-1c0.5,0,1.5,0,2,0v-1h1v-1h1v-1h1c0-0.5,0-1.5,0-2h1 c0-2.3,0-4.7,0-7h-1V8z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M22,9h1c0-0.5,0-1.5,0-2h-1C22,7.5,22,8.5,22,9z",
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M6,9V8H5c0,0.5,0,1.5,0,2h1V9z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M23,9c0,2.3,0,4.7,0,7h1c0-2.3,0-4.7,0-7H23z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M9,11c0.5,0,1.5,0,2,0v-1h1c0-0.5,0-1.5,0-2c-0.5,0-1.5,0-2,0v1H9C9,9.5,9,10.5,9,11z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M14,11h1v-1h1c0-0.5,0-1.5,0-2c-0.5,0-1.5,0-2,0v1h-1c0,0.5,0,1.5,0,2H14z",
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M20,12c0,0.9,0,2.1,0,3h1c0-1.6,0-3.4,0-5h-1C20,10.5,20,11.5,20,12z",
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 12,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M5,13c0-0.9,0-2.1,0-3H4c0,1.6,0,3.4,0,5h1C5,14.5,5,13.5,5,13z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M11,14c0-0.5,0-1.5,0-2c-0.5,0-1.5,0-2,0v1H8c0,0.5,0,1.5,0,2c0.5,0,1.5,0,2,0v-1H11z",
                }),
                X.createElement("rect", {
                  x: 16,
                  y: 13,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stApe2",
                  d: "M19,14v-1h-1v-1h-1c0-1.6,0-3.4,0-5c-0.5,0-1.5,0-2,0V6h-1v1h-1V6c-0.9,0-2.1,0-3,0v1H9c0,0.5,0,1.5,0,2h1V8 c0.5,0,1.5,0,2,0c0,0.5,0,1.5,0,2h-1v1c-0.5,0-1.5,0-2,0c0-0.5,0-1.5,0-2H8c0,0.5,0,1.5,0,2H7c0,0.5,0,1.5,0,2H6c0,0.5,0,1.5,0,2H5 c0,0.5,0,1.5,0,2h1v-1h1v1h1v-1h1v1h1v-1c0.5,0,1.5,0,2,0v1h1v-1c0.5,0,1.5,0,2,0c0-0.5,0-1.5,0-2h1v-1h1v1C17.5,14,18.5,14,19,14z  M13,9h1V8c0.5,0,1.5,0,2,0c0,0.5,0,1.5,0,2h-1v1c-0.5,0-1.5,0-2,0C13,10.5,13,9.5,13,9z M9,15H8c0-0.5,0-1.5,0-2h1v-1 c0.5,0,1.5,0,2,0c0,0.5,0,1.5,0,2h-1v1H9z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M20,13h-1v1c-0.5,0-1.5,0-2,0v1c0.9,0,2.1,0,3,0C20,14.5,20,13.5,20,13z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M2,14c0-1.6,0-3.4,0-5H1c0,2.3,0,4.7,0,7h1C2,15.5,2,14.5,2,14z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M6,14v-1h1c0-0.5,0-1.5,0-2h1c0-0.5,0-1.5,0-2h1c0-0.5,0-1.5,0-2h1V6C9.5,6,8.5,6,8,6v1H7v1H6c0,0.5,0,1.5,0,2 H5c0,1.6,0,3.4,0,5h1V14z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M15,15v1h1c0-0.5,0-1.5,0-2h-1V15z",
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M23,14c0-1.6,0-3.4,0-5h-1c0,2.3,0,4.7,0,7h1C23,15.5,23,14.5,23,14z",
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M3,15c0-1.9,0-4.1,0-6H2c0,2.3,0,4.7,0,7h1V15z",
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M19,16v1h1c0-0.5,0-1.5,0-2h-1V16z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M3,16H2c0,0.5,0,1.5,0,2h1C3,17.5,3,16.5,3,16z",
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 16,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 8,
                  y: 16,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M12,16c-0.5,0-1.5,0-2,0v1h1v1c0.5,0,1.5,0,2,0v-1h-1V16z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M13,16v1h1v1h1c0-0.5,0-1.5,0-2C14.5,16,13.5,16,13,16z",
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 16,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M22,16h-1c0,0.5,0,1.5,0,2h1C22,17.5,22,16.5,22,16z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M22,17v1h1c0-0.5,0-1.5,0-2h-1V17z",
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M4,17v-1H3c0,0.5,0,1.5,0,2h1V17z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M6,17H5c0-0.5,0-1.5,0-2H4c0-1.6,0-3.4,0-5h1c0-0.5,0-1.5,0-2h1V7h1V6h1V5c0.5,0,1.5,0,2,0V4c1.6,0,3.4,0,5,0 v1c0.9,0,2.1,0,3,0V4c-0.5,0-1.5,0-2,0V3c-2.3,0-4.7,0-7,0v1C8.5,4,7.5,4,7,4v1H6v1H5v1H4c0,0.5,0,1.5,0,2H3c0,2.3,0,4.7,0,7h1 c0,0.5,0,1.5,0,2h1v1h1C6,18.5,6,17.5,6,17z",
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 17,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 9,
                  y: 17,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 17,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 17,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 3,
                  y: 18,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 4,
                  y: 18,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 16,
                  y: 18,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 18,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 20,
                  y: 18,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 21,
                  y: 18,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 4,
                  y: 19,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 19,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 19,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stApe2",
                  d: "M9,20c1.9,0,4.1,0,6,0v-1h1v-1h1v-1h1v-1h1v-1c-0.5,0-1.5,0-2,0v-1h-1c0,0.5,0,1.5,0,2h-1c0,0.5,0,1.5,0,2h-1 v-1h-1v1c-0.5,0-1.5,0-2,0v-1h-1v1H9v-1H8v1H7v-1H6c0,0.5,0,1.5,0,2h1v1C7.5,20,8.5,20,9,20z",
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M15,19v1c0.5,0,1.5,0,2,0v-1C16.5,19,15.5,19,15,19z",
                }),
                X.createElement("rect", {
                  x: 19,
                  y: 19,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 20,
                  y: 19,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 20,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 20,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M13,20c-0.9,0-2.1,0-3,0v1c1.6,0,3.4,0,5,0v-1C14.5,20,13.5,20,13,20z",
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 20,
                  className: "stApe1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 19,
                  y: 20,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 21,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M9,22v-1c-0.5,0-1.5,0-2,0v1C7.5,22,8.5,22,9,22z",
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M17,21h-1v1c0.5,0,1.5,0,2,0v-1H17z",
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 21,
                  className: "stApe0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M8,22H7v1c0.5,0,1.5,0,2,0v-1H8z",
                }),
                X.createElement("path", {
                  className: "stApe1",
                  d: "M15,22c-1.9,0-4.1,0-6,0v1c2.3,0,4.7,0,7,0v-1H15z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M16,22v1c0.5,0,1.5,0,2,0v-1C17.5,22,16.5,22,16,22z",
                }),
                X.createElement("path", {
                  className: "stApe0",
                  d: "M14,23c-1.6,0-3.4,0-5,0v1c2.3,0,4.7,0,7,0v-1C15.5,23,14.5,23,14,23z",
                })
              ))
          );
        }),
        t$ = ["title", "titleId"];
      function t1() {
        return (t1 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var t2 = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, t$);
          return X.createElement(
            "svg",
            t1(
              {
                id: "Layer_btc",
                shapeRendering: "crispEdges",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 25 25",
                style: { enableBackground: "new 0 0 25 25" },
                xmlSpace: "preserve",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            S ||
              (S = X.createElement(
                "style",
                { type: "text/css" },
                "\r\n	.stBtc0{fill:#181425;}\r\n	.stBtc1{fill:#B05E15;}\r\n	.stBtc2{fill:#E49F23;}\r\n	.stBtc3{fill:#FFFFFF;}\r\n	.stBtc4{fill:#FFD04D;}\r\n"
              )),
            k ||
              (k = X.createElement(
                "g",
                null,
                X.createElement("path", {
                  className: "stBtc0",
                  d: "M10,4c2.3,0,4.7,0,7,0V3c-3,0-6,0-9,0v1C8.5,4,9.5,4,10,4z",
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 4,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 8,
                  y: 4,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 4,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 5,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 5,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 15,
                  y: 5,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 5,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 6,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 6,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 16,
                  y: 6,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 19,
                  y: 6,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 4,
                  y: 7,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 7,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 7,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 20,
                  y: 7,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 8,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stBtc0",
                  d: "M21,8c0,3,0,6,0,9h1c0-3,0-6,0-9H21z",
                }),
                X.createElement("path", {
                  className: "stBtc2",
                  d: "M13,10c-0.5,0-1.5,0-2,0c0,0.5,0,1.5,0,2c1.3,0,2.7,0,4,0c0-0.5,0-1.5,0-2C14.5,10,13.5,10,13,10z",
                }),
                X.createElement("path", {
                  className: "stBtc3",
                  d: "M15,12h1c0-0.5,0-1.5,0-2h-1C15,10.5,15,11.5,15,12z",
                }),
                X.createElement("path", {
                  className: "stBtc2",
                  d: "M15,13c-1.3,0-2.7,0-4,0c0,0.5,0,1.5,0,2c1.3,0,2.7,0,4,0C15,14.5,15,13.5,15,13z",
                }),
                X.createElement("path", {
                  className: "stBtc3",
                  d: "M16,13h-1c0,0.5,0,1.5,0,2h1C16,14.5,16,13.5,16,13z",
                }),
                X.createElement("path", {
                  className: "stBtc2",
                  d: "M19,14c0-1.6,0-3.4,0-5h-1V8h-1V7h-1V6h-1V5c-1.6,0-3.4,0-5,0v1H9v1H8v1H7v1H6c0,2.3,0,4.7,0,7h1v1h1v1h1v1h1 v1c1.6,0,3.4,0,5,0v-1h1v-1h1v-1h1v-1h1C19,15.5,19,14.5,19,14z M15,15v1h-1c0,0.5,0,1.5,0,2h-1c0-0.5,0-1.5,0-2h-1 c0,0.5,0,1.5,0,2h-1c0-0.5,0-1.5,0-2c-0.5,0-1.5,0-2,0v-1h1c0-1.6,0-3.4,0-5H9V9c0.5,0,1.5,0,2,0c0-0.5,0-1.5,0-2h1 c0,0.5,0,1.5,0,2h1c0-0.5,0-1.5,0-2h1c0,0.5,0,1.5,0,2h1v1h1c0,0.5,0,1.5,0,2h-1v1h1c0,0.5,0,1.5,0,2H15z",
                }),
                X.createElement("path", {
                  className: "stBtc1",
                  d: "M20,14c0-1.6,0-3.4,0-5h-1c0,2.3,0,4.7,0,7h1C20,15.5,20,14.5,20,14z",
                }),
                X.createElement("path", {
                  className: "stBtc0",
                  d: "M4,15c0-2.3,0-4.7,0-7H3c0,3,0,6,0,9h1C4,16.5,4,15.5,4,15z",
                }),
                X.createElement("path", {
                  className: "stBtc3",
                  d: "M13,15c-0.5,0-1.5,0-2,0c0-0.5,0-1.5,0-2c1.3,0,2.7,0,4,0v-1c-1.3,0-2.7,0-4,0c0-0.5,0-1.5,0-2 c1.3,0,2.7,0,4,0V9h-1c0-0.5,0-1.5,0-2h-1c0,0.5,0,1.5,0,2h-1c0-0.5,0-1.5,0-2h-1c0,0.5,0,1.5,0,2c-0.5,0-1.5,0-2,0v1h1 c0,1.6,0,3.4,0,5H9v1c0.5,0,1.5,0,2,0c0,0.5,0,1.5,0,2h1c0-0.5,0-1.5,0-2h1c0,0.5,0,1.5,0,2h1c0-0.5,0-1.5,0-2h1v-1 C14.5,15,13.5,15,13,15z",
                }),
                X.createElement("path", {
                  className: "stBtc4",
                  d: "M21,15c0-2.3,0-4.7,0-7h-1V7h-1V6h-1V5h-1V4c-2.6,0-5.4,0-8,0v1H8v1H7v1H6v1H5c0,3,0,6,0,9h1v1h1v1h1v1h1v1 c2.6,0,5.4,0,8,0v-1h1v-1h1v-1h1v-1h1C21,16.5,21,15.5,21,15z M19,16v1h-1v1h-1v1h-1v1c-1.9,0-4.1,0-6,0v-1H9v-1H8v-1H7v-1H6 c0-2.3,0-4.7,0-7h1V8h1V7h1V6h1V5c1.9,0,4.1,0,6,0v1h1v1h1v1h1v1h1c0,2.3,0,4.7,0,7H19z",
                }),
                X.createElement("path", {
                  className: "stBtc1",
                  d: "M5,16c0-2.6,0-5.4,0-8H4c0,3,0,6,0,9h1V16z",
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 16,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 4,
                  y: 17,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 17,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 17,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 20,
                  y: 17,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 18,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 18,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 16,
                  y: 18,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 19,
                  y: 18,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 19,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 19,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 15,
                  y: 19,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 19,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 20,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 8,
                  y: 20,
                  className: "stBtc1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 20,
                  className: "stBtc0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stBtc0",
                  d: "M15,21c-2.3,0-4.7,0-7,0v1c3,0,6,0,9,0v-1C16.5,21,15.5,21,15,21z",
                })
              ))
          );
        }),
        t0 = ["title", "titleId"];
      function t6() {
        return (t6 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var t8 = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, t0);
          return X.createElement(
            "svg",
            t6(
              {
                id: "Layer_doge",
                shapeRendering: "crispEdges",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 25 25",
                style: { enableBackground: "new 0 0 25 25" },
                xmlSpace: "preserve",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            z ||
              (z = X.createElement(
                "style",
                { type: "text/css" },
                "\r\n	.stDoge0{fill:#181425;}\r\n	.stDoge1{fill:#7A6A2A;}\r\n	.stDoge2{fill:#4E4215;}\r\n	.stDoge3{fill:#F8EFE0;}\r\n	.stDoge4{fill:#D9D6CD;}\r\n	.stDoge5{fill:#F0EAD3;}\r\n	.stDoge6{fill:#E2B76D;}\r\n	.stDoge7{fill:#B9822C;}\r\n	.stDoge8{fill:#F0E4D2;}\r\n	.stDoge9{fill:#BA9F33;}\r\n	.stDoge10{fill:#E29B37;}\r\n	.stDoge11{fill:#F8E9D4;}\r\n	.stDoge12{fill:#E2D7AB;}\r\n	.stDoge13{fill:#988430;}\r\n	.stDoge14{fill:#BCB184;}\r\n	.stDoge15{fill:#F0EEE4;}\r\n"
              )),
            D ||
              (D = X.createElement(
                "g",
                null,
                X.createElement("path", {
                  className: "stDoge0",
                  d: "M10,4c2.3,0,4.7,0,7,0V3c-3,0-6,0-9,0v1C8.5,4,9.5,4,10,4z",
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 4,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 8,
                  y: 4,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 4,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 5,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 5,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 15,
                  y: 5,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 5,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 6,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 6,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 16,
                  y: 6,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 19,
                  y: 6,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 4,
                  y: 7,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 7,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge2",
                  d: "M10,8V7C9.5,7,8.5,7,8,7v1C8.5,8,9.5,8,10,8z",
                }),
                X.createElement("path", {
                  className: "stDoge2",
                  d: "M14,8h1V7c-0.9,0-2.1,0-3,0v1C12.5,8,13.5,8,14,8z",
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 7,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 20,
                  y: 7,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 9,
                  y: 8,
                  className: "stDoge3",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 10,
                  y: 8,
                  className: "stDoge4",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 11,
                  y: 8,
                  className: "stDoge5",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 12,
                  y: 8,
                  className: "stDoge4",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge3",
                  d: "M13,8v1c0.5,0,1.5,0,2,0V8C14.5,8,13.5,8,13,8z",
                }),
                X.createElement("rect", {
                  x: 15,
                  y: 8,
                  className: "stDoge2",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 8,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge0",
                  d: "M21,8c0,3,0,6,0,9h1c0-3,0-6,0-9H21z",
                }),
                X.createElement("path", {
                  className: "stDoge6",
                  d: "M8,10h1c0-0.5,0-1.5,0-2H8C8,8.5,8,9.5,8,10z",
                }),
                X.createElement("rect", {
                  x: 9,
                  y: 9,
                  className: "stDoge7",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 10,
                  y: 9,
                  className: "stDoge3",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 11,
                  y: 9,
                  className: "stDoge4",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 12,
                  y: 9,
                  className: "stDoge2",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 13,
                  y: 9,
                  className: "stDoge6",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 14,
                  y: 9,
                  className: "stDoge8",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge3",
                  d: "M15,10v1h1c0-0.5,0-1.5,0-2h-1V10z",
                }),
                X.createElement("rect", {
                  x: 16,
                  y: 9,
                  className: "stDoge2",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge9",
                  d: "M7,10V9H6c0,0.5,0,1.5,0,2h1V10z",
                }),
                X.createElement("path", {
                  className: "stDoge2",
                  d: "M7,11h1c0-0.9,0-2.1,0-3H7C7,8.9,7,10.1,7,11z",
                }),
                X.createElement("path", {
                  className: "stDoge10",
                  d: "M10,11v-1c-0.5,0-1.5,0-2,0v1C8.5,11,9.5,11,10,11z",
                }),
                X.createElement("path", {
                  className: "stDoge10",
                  d: "M13,11h1v-1c-0.5,0-1.5,0-2,0v1H13z",
                }),
                X.createElement("rect", {
                  x: 14,
                  y: 10,
                  className: "stDoge11",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge4",
                  d: "M16,11v1h1c0-0.5,0-1.5,0-2h-1V11z",
                }),
                X.createElement("rect", {
                  x: 8,
                  y: 11,
                  className: "stDoge12",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 9,
                  y: 11,
                  className: "stDoge2",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 12,
                  y: 11,
                  className: "stDoge12",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 13,
                  y: 11,
                  className: "stDoge2",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge10",
                  d: "M14,12c-0.5,0-1.5,0-2,0c0,0.5,0,1.5,0,2c0.9,0,2.1,0,3,0c0-0.9,0-2.1,0-3h-1V12z",
                }),
                X.createElement("path", {
                  className: "stDoge11",
                  d: "M16,11h-1c0,0.9,0,2.1,0,3h1v1h1c0-0.9,0-2.1,0-3h-1V11z",
                }),
                X.createElement("path", {
                  className: "stDoge10",
                  d: "M9,13h1v-1c-0.5,0-1.5,0-2,0v-1H7c0,0.9,0,2.1,0,3h1v-1H9z",
                }),
                X.createElement("path", {
                  className: "stDoge2",
                  d: "M10,14v-1c-0.5,0-1.5,0-2,0c0,0.5,0,1.5,0,2h1v-1H10z",
                }),
                X.createElement("path", {
                  className: "stDoge2",
                  d: "M17,14c0,0.5,0,1.5,0,2h1c0-1.3,0-2.7,0-4h-1C17,12.5,17,13.5,17,14z",
                }),
                X.createElement("path", {
                  className: "stDoge2",
                  d: "M7,14c0-0.9,0-2.1,0-3H6c0,1.6,0,3.4,0,5h1C7,15.5,7,14.5,7,14z",
                }),
                X.createElement("rect", {
                  x: 9,
                  y: 14,
                  className: "stDoge10",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge11",
                  d: "M11,14h1c0-1.3,0-2.7,0-4c-0.5,0-1.5,0-2,0c0,1.6,0,3.4,0,5h1V14z",
                }),
                X.createElement("rect", {
                  x: 11,
                  y: 14,
                  className: "stDoge3",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge6",
                  d: "M14,14c-0.5,0-1.5,0-2,0c0,0.5,0,1.5,0,2c0.5,0,1.5,0,2,0C14,15.5,14,14.5,14,14z",
                }),
                X.createElement("path", {
                  className: "stDoge3",
                  d: "M14,15v1c0.5,0,1.5,0,2,0c0-0.5,0-1.5,0-2c-0.5,0-1.5,0-2,0V15z",
                }),
                X.createElement("path", {
                  className: "stDoge9",
                  d: "M19,14c0-1.6,0-3.4,0-5h-1V8h-1V7h-1V6h-1V5c-1.6,0-3.4,0-5,0v1H9v1h1v1c0.5,0,1.5,0,2,0V7c0.9,0,2.1,0,3,0v1 h1v1h1c0,0.9,0,2.1,0,3h1c0,1.3,0,2.7,0,4h1C19,15.5,19,14.5,19,14z",
                }),
                X.createElement("path", {
                  className: "stDoge1",
                  d: "M20,14c0-1.6,0-3.4,0-5h-1c0,2.3,0,4.7,0,7h1C20,15.5,20,14.5,20,14z",
                }),
                X.createElement("path", {
                  className: "stDoge0",
                  d: "M4,15c0-2.3,0-4.7,0-7H3c0,3,0,6,0,9h1C4,16.5,4,15.5,4,15z",
                }),
                X.createElement("path", {
                  className: "stDoge6",
                  d: "M9,16v-1H8v-1H7c0,0.5,0,1.5,0,2C7.5,16,8.5,16,9,16z",
                }),
                X.createElement("rect", {
                  x: 9,
                  y: 15,
                  className: "stDoge2",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge4",
                  d: "M11,15h-1v1c0.5,0,1.5,0,2,0v-1H11z",
                }),
                X.createElement("rect", {
                  x: 16,
                  y: 15,
                  className: "stDoge7",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge13",
                  d: "M21,15c0-2.3,0-4.7,0-7h-1V7h-1V6h-1V5h-1V4c-2.6,0-5.4,0-8,0v1H8v1H7v1H6v1H5c0,3,0,6,0,9h1v1h1v1h1v1h1v1 c2.6,0,5.4,0,8,0v-1h1v-1h1v-1h1v-1h1C21,16.5,21,15.5,21,15z M19,16v1h-1v1h-1v1h-1v1c-1.9,0-4.1,0-6,0v-1H9v-1H8v-1H7v-1H6 c0-2.3,0-4.7,0-7h1V8h1V7h1V6h1V5c1.9,0,4.1,0,6,0v1h1v1h1v1h1v1h1c0,2.3,0,4.7,0,7H19z",
                }),
                X.createElement("path", {
                  className: "stDoge1",
                  d: "M5,16c0-2.6,0-5.4,0-8H4c0,3,0,6,0,9h1V16z",
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 16,
                  className: "stDoge2",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 8,
                  y: 16,
                  className: "stDoge14",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge3",
                  d: "M13,16c-1.3,0-2.7,0-4,0v1c1.6,0,3.4,0,5,0v-1H13z",
                }),
                X.createElement("rect", {
                  x: 14,
                  y: 16,
                  className: "stDoge15",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 15,
                  y: 16,
                  className: "stDoge14",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 16,
                  y: 16,
                  className: "stDoge2",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 16,
                  className: "stDoge9",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 16,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 4,
                  y: 17,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 17,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 8,
                  y: 17,
                  className: "stDoge2",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge14",
                  d: "M11,18c1.3,0,2.7,0,4,0v-1c-1.9,0-4.1,0-6,0v1C9.5,18,10.5,18,11,18z",
                }),
                X.createElement("rect", {
                  x: 15,
                  y: 17,
                  className: "stDoge2",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 16,
                  y: 17,
                  className: "stDoge9",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 17,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 20,
                  y: 17,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 18,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 18,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge2",
                  d: "M12,19c0.9,0,2.1,0,3,0v-1c-1.9,0-4.1,0-6,0v1C9.9,19,11.1,19,12,19z",
                }),
                X.createElement("rect", {
                  x: 15,
                  y: 18,
                  className: "stDoge9",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 16,
                  y: 18,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 19,
                  y: 18,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 19,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 19,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge9",
                  d: "M14,19c-1.3,0-2.7,0-4,0v1c1.6,0,3.4,0,5,0v-1H14z",
                }),
                X.createElement("rect", {
                  x: 15,
                  y: 19,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 19,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 20,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 8,
                  y: 20,
                  className: "stDoge1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 20,
                  className: "stDoge0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stDoge0",
                  d: "M15,21c-2.3,0-4.7,0-7,0v1c3,0,6,0,9,0v-1C16.5,21,15.5,21,15,21z",
                })
              ))
          );
        }),
        t4 = ["title", "titleId"];
      function t5() {
        return (t5 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var t3 = (0, X.forwardRef)(function (e, t) {
          var a = e.title,
            r = e.titleId,
            n = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    r,
                    n = {},
                    c = Object.keys(e);
                  for (r = 0; r < c.length; r++)
                    (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, t4);
          return X.createElement(
            "svg",
            t5(
              {
                id: "Layer_eth",
                shapeRendering: "crispEdges",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 25 25",
                style: { enableBackground: "new 0 0 25 25" },
                xmlSpace: "preserve",
                ref: t,
                "aria-labelledby": r,
              },
              n
            ),
            a ? X.createElement("title", { id: r }, a) : null,
            I ||
              (I = X.createElement(
                "style",
                { type: "text/css" },
                "\r\n	.stEth0{fill:#424242;}\r\n	.stEth1{fill:#9E9E9E;}\r\n	.stEth2{fill:#656D94;}\r\n	.stEth3{fill:#8C95B6;}\r\n	.stEth4{fill:#484C79;}\r\n	.stEth5{fill:#D2D2D2;}\r\n	.stEth6{fill:#EAEAEA;}\r\n"
              )),
            B ||
              (B = X.createElement(
                "g",
                null,
                X.createElement("path", {
                  className: "stEth0",
                  d: "M10,4c2.3,0,4.7,0,7,0V3c-3,0-6,0-9,0v1C8.5,4,9.5,4,10,4z",
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 4,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 8,
                  y: 4,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 4,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 5,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 5,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 15,
                  y: 5,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 5,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 6,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 6,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 16,
                  y: 6,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 19,
                  y: 6,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 4,
                  y: 7,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 7,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 7,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 20,
                  y: 7,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stEth2",
                  d: "M12,9c0,0.5,0,1.5,0,2h1v1c0.5,0,1.5,0,2,0v1c0.5,0,1.5,0,2,0v-1h-1c0-0.5,0-1.5,0-2h-1V9h-1c0-0.5,0-1.5,0-2 h-1V6h-1C12,6.9,12,8.1,12,9z",
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 8,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stEth0",
                  d: "M21,8c0,3,0,6,0,9h1c0-3,0-6,0-9H21z",
                }),
                X.createElement("path", {
                  className: "stEth3",
                  d: "M10,12c0.5,0,1.5,0,2,0c0-1.6,0-3.4,0-5h-1c0,0.5,0,1.5,0,2h-1v1H9c0,0.5,0,1.5,0,2H8v1c0.5,0,1.5,0,2,0V12z",
                }),
                X.createElement("path", {
                  className: "stEth4",
                  d: "M15,12c-0.5,0-1.5,0-2,0v-1h-1c0,1.6,0,3.4,0,5h1v-1c0.5,0,1.5,0,2,0v-1h1v-1h-1V12z",
                }),
                X.createElement("rect", {
                  x: 8,
                  y: 14,
                  className: "stEth3",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 9,
                  y: 14,
                  className: "stEth5",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stEth2",
                  d: "M10,15c0.5,0,1.5,0,2,0c0-0.9,0-2.1,0-3c-0.5,0-1.5,0-2,0v1H9v1h1V15z",
                }),
                X.createElement("rect", {
                  x: 15,
                  y: 14,
                  className: "stEth5",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 16,
                  y: 14,
                  className: "stEth2",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stEth5",
                  d: "M19,14c0-1.6,0-3.4,0-5h-1V8h-1V7h-1V6h-1V5c-1.6,0-3.4,0-5,0v1H9v1H8v1H7v1H6c0,2.3,0,4.7,0,7h1v1h1v1h1v1h1 v1c1.6,0,3.4,0,5,0v-1h1v-1h1v-1h1v-1h1C19,15.5,19,14.5,19,14z M15,17v1c-0.5,0-1.5,0-2,0v1h-1v-1c-0.5,0-1.5,0-2,0v-1H9 c0-0.5,0-1.5,0-2H8v-1h1v-1H8v-1h1c0-0.5,0-1.5,0-2h1V9h1c0-0.5,0-1.5,0-2h1V6h1v1h1c0,0.5,0,1.5,0,2h1v1h1c0,0.5,0,1.5,0,2h1v1h-1 v1h1v1h-1c0,0.5,0,1.5,0,2H15z",
                }),
                X.createElement("path", {
                  className: "stEth1",
                  d: "M20,14c0-1.6,0-3.4,0-5h-1c0,2.3,0,4.7,0,7h1C20,15.5,20,14.5,20,14z",
                }),
                X.createElement("path", {
                  className: "stEth0",
                  d: "M4,15c0-2.3,0-4.7,0-7H3c0,3,0,6,0,9h1C4,16.5,4,15.5,4,15z",
                }),
                X.createElement("path", {
                  className: "stEth5",
                  d: "M11,15h-1v1c0.5,0,1.5,0,2,0v-1H11z",
                }),
                X.createElement("path", {
                  className: "stEth5",
                  d: "M13,15v1c0.5,0,1.5,0,2,0v-1C14.5,15,13.5,15,13,15z",
                }),
                X.createElement("path", {
                  className: "stEth2",
                  d: "M16,15h-1v1c-0.5,0-1.5,0-2,0v1h-1c0,0.5,0,1.5,0,2h1v-1c0.5,0,1.5,0,2,0v-1h1C16,16.5,16,15.5,16,15z",
                }),
                X.createElement("path", {
                  className: "stEth6",
                  d: "M21,15c0-2.3,0-4.7,0-7h-1V7h-1V6h-1V5h-1V4c-2.6,0-5.4,0-8,0v1H8v1H7v1H6v1H5c0,3,0,6,0,9h1v1h1v1h1v1h1v1 c2.6,0,5.4,0,8,0v-1h1v-1h1v-1h1v-1h1C21,16.5,21,15.5,21,15z M19,16v1h-1v1h-1v1h-1v1c-1.9,0-4.1,0-6,0v-1H9v-1H8v-1H7v-1H6 c0-2.3,0-4.7,0-7h1V8h1V7h1V6h1V5c1.9,0,4.1,0,6,0v1h1v1h1v1h1v1h1c0,2.3,0,4.7,0,7H19z",
                }),
                X.createElement("path", {
                  className: "stEth1",
                  d: "M5,16c0-2.6,0-5.4,0-8H4c0,3,0,6,0,9h1V16z",
                }),
                X.createElement("path", {
                  className: "stEth3",
                  d: "M12,16c-0.5,0-1.5,0-2,0v-1H9c0,0.5,0,1.5,0,2h1v1c0.5,0,1.5,0,2,0C12,17.5,12,16.5,12,16z",
                }),
                X.createElement("rect", {
                  x: 12,
                  y: 16,
                  className: "stEth5",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 16,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 4,
                  y: 17,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 17,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 17,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 20,
                  y: 17,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 5,
                  y: 18,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 18,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 16,
                  y: 18,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 19,
                  y: 18,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 6,
                  y: 19,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 19,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 15,
                  y: 19,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 18,
                  y: 19,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 7,
                  y: 20,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 8,
                  y: 20,
                  className: "stEth1",
                  width: 1,
                  height: 1,
                }),
                X.createElement("rect", {
                  x: 17,
                  y: 20,
                  className: "stEth0",
                  width: 1,
                  height: 1,
                }),
                X.createElement("path", {
                  className: "stEth0",
                  d: "M15,21c-2.3,0-4.7,0-7,0v1c3,0,6,0,9,0v-1C16.5,21,15.5,21,15,21z",
                })
              ))
          );
        }),
        t7 = ["title", "titleId"];
      function t9() {
        return (t9 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ae = (0, X.forwardRef)(function (e, t) {
        var a = e.title,
          r = e.titleId,
          n = (function (e, t) {
            if (null == e) return {};
            var a,
              r,
              n = (function (e, t) {
                if (null == e) return {};
                var a,
                  r,
                  n = {},
                  c = Object.keys(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                return n;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var c = Object.getOwnPropertySymbols(e);
              for (r = 0; r < c.length; r++)
                (a = c[r]),
                  !(t.indexOf(a) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, a) &&
                    (n[a] = e[a]);
            }
            return n;
          })(e, t7);
        return X.createElement(
          "svg",
          t9(
            {
              id: "Layer_shiba",
              shapeRendering: "crispEdges",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 25 25",
              style: { enableBackground: "new 0 0 25 25" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            n
          ),
          a ? X.createElement("title", { id: r }, a) : null,
          P ||
            (P = X.createElement(
              "style",
              { type: "text/css" },
              "\r\n	.stShiba0{fill:#181425;}\r\n	.stShiba1{fill:#B30F0B;}\r\n	.stShiba2{fill:#FFB91A;}\r\n	.stShiba3{fill:#F00500;}\r\n	.stShiba4{fill:#FFA409;}\r\n	.stShiba5{fill:#FF7A00;}\r\n	.stShiba6{fill:#F58D14;}\r\n	.stShiba7{fill:#FFA009;}\r\n	.stShiba8{fill:#FFFFFF;}\r\n	.stShiba9{fill:#000918;}\r\n	.stShiba10{fill:#000019;}\r\n	.stShiba11{fill:#181818;}\r\n	.stShiba12{fill:#FF5C4E;}\r\n	.stShiba13{fill:#FF8900;}\r\n	.stShiba14{fill:#111111;}\r\n"
            )),
          R ||
            (R = X.createElement(
              "g",
              null,
              X.createElement("polygon", {
                className: "stShiba0",
                points:
                  "10,4 11,4 12,4 13,4 14,4 15,4 16,4 17,4 17,3 16,3 15,3 14,3 13,3 12,3 11,3 10,3 9,3 8,3 8,4 9,4  ",
              }),
              X.createElement("rect", {
                x: 7,
                y: 4,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 8,
                y: 4,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 17,
                y: 4,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 6,
                y: 5,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 7,
                y: 5,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 15,
                y: 5,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 18,
                y: 5,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 5,
                y: 6,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 6,
                y: 6,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 16,
                y: 6,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 19,
                y: 6,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 4,
                y: 7,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 5,
                y: 7,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 8,
                y: 7,
                className: "stShiba2",
                width: 1,
                height: 1,
              }),
              X.createElement("polygon", {
                className: "stShiba3",
                points:
                  "10,8 10,9 11,9 12,9 13,9 14,9 15,9 15,8 16,8 16,7 16,6 15,6 15,5 14,5 13,5 12,5 11,5 10,5 10,6  9,6 9,7 9,8  ",
              }),
              X.createElement("rect", {
                x: 16,
                y: 7,
                className: "stShiba2",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 20,
                y: 7,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("polygon", {
                className: "stShiba4",
                points: "7,9 7,10 8,10 8,9 8,8 8,7 7,7 7,8  ",
              }),
              X.createElement("polygon", {
                className: "stShiba4",
                points: "17,9 17,10 18,10 18,9 18,8 18,7 17,7 17,8  ",
              }),
              X.createElement("rect", {
                x: 18,
                y: 8,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("polygon", {
                className: "stShiba0",
                points:
                  "21,8 21,9 21,10 21,11 21,12 21,13 21,14 21,15 21,16 21,17 22,17 22,16 22,15 22,14 22,13 22,12  22,11 22,10 22,9 22,8  ",
              }),
              X.createElement("polygon", {
                className: "stShiba5",
                points: "9,9 9,8 8,8 8,9 8,10 9,10  ",
              }),
              X.createElement("polygon", {
                className: "stShiba2",
                points: "9,10 10,10 10,9 10,8 9,8 9,9  ",
              }),
              X.createElement("polygon", {
                className: "stShiba6",
                points:
                  "11,10 12,10 13,10 14,10 15,10 15,9 14,9 13,9 12,9 11,9 10,9 10,10  ",
              }),
              X.createElement("polygon", {
                className: "stShiba2",
                points: "16,10 16,9 16,8 15,8 15,9 15,10  ",
              }),
              X.createElement("polygon", {
                className: "stShiba5",
                points: "16,10 17,10 17,9 17,8 16,8 16,9  ",
              }),
              X.createElement("polygon", {
                className: "stShiba3",
                points:
                  "18,10 17,10 17,11 17,12 17,13 18,13 18,14 18,15 18,16 19,16 19,15 19,14 19,13 19,12 19,11 19,10  19,9 18,9  ",
              }),
              X.createElement("path", {
                className: "stShiba4",
                d: "M9,11h1h1v1h-1H9H8v1H7v1h1h1v-1h1h1v1h1v1h1v-1h1v-1h1h1h1v-1v-1v-1h-1h-1h-1h-1h-1h-1h-1H9H8v1H9z M15,11h1 v1h-1h-1v-1H15z",
              }),
              X.createElement("polygon", {
                className: "stShiba1",
                points:
                  "19,11 19,12 19,13 19,14 19,15 19,16 20,16 20,15 20,14 20,13 20,12 20,11 20,10 20,9 19,9 19,10  ",
              }),
              X.createElement("rect", {
                x: 8,
                y: 11,
                className: "stShiba7",
                width: 1,
                height: 1,
              }),
              X.createElement("polygon", {
                className: "stShiba8",
                points: "10,12 11,12 11,11 10,11 9,11 9,12  ",
              }),
              X.createElement("polygon", {
                className: "stShiba8",
                points: "15,12 16,12 16,11 15,11 14,11 14,12  ",
              }),
              X.createElement("rect", {
                x: 9,
                y: 13,
                className: "stShiba9",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 15,
                y: 13,
                className: "stShiba9",
                width: 1,
                height: 1,
              }),
              X.createElement("polygon", {
                className: "stShiba7",
                points: "16,14 16,15 17,15 18,15 18,14 17,14 17,13 16,13  ",
              }),
              X.createElement("rect", {
                x: 17,
                y: 13,
                className: "stShiba4",
                width: 1,
                height: 1,
              }),
              X.createElement("polygon", {
                className: "stShiba3",
                points:
                  "7,14 7,13 8,13 8,12 8,11 8,10 7,10 7,9 6,9 6,10 6,11 6,12 6,13 6,14 6,15 6,16 7,16 7,15  ",
              }),
              X.createElement("polygon", {
                className: "stShiba7",
                points: "9,14 8,14 7,14 7,15 8,15 9,15  ",
              }),
              X.createElement("polygon", {
                className: "stShiba4",
                points: "10,14 9,14 9,15 8,15 8,16 9,16 10,16 10,15  ",
              }),
              X.createElement("polygon", {
                className: "stShiba10",
                points: "11,14 11,13 10,13 10,14 10,15 11,15 12,15 12,14  ",
              }),
              X.createElement("polygon", {
                className: "stShiba10",
                points: "15,14 15,13 14,13 14,14 13,14 13,15 14,15 15,15  ",
              }),
              X.createElement("polygon", {
                className: "stShiba0",
                points:
                  "4,15 4,14 4,13 4,12 4,11 4,10 4,9 4,8 3,8 3,9 3,10 3,11 3,12 3,13 3,14 3,15 3,16 3,17 4,17 4,16  ",
              }),
              X.createElement("rect", {
                x: 7,
                y: 15,
                className: "stShiba8",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 10,
                y: 15,
                className: "stShiba7",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 12,
                y: 15,
                className: "stShiba11",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 14,
                y: 15,
                className: "stShiba7",
                width: 1,
                height: 1,
              }),
              X.createElement("polygon", {
                className: "stShiba4",
                points: "16,15 16,14 15,14 15,15 15,16 16,16 17,16 17,15  ",
              }),
              X.createElement("rect", {
                x: 17,
                y: 15,
                className: "stShiba8",
                width: 1,
                height: 1,
              }),
              X.createElement("polygon", {
                className: "stShiba12",
                points:
                  "21,15 21,14 21,13 21,12 21,11 21,10 21,9 21,8 20,8 20,7 19,7 19,6 18,6 18,5 17,5 17,4 16,4 15,4  14,4 13,4 12,4 11,4 10,4 9,4 9,5 8,5 8,6 7,6 7,7 8,7 9,7 9,6 10,6 10,5 11,5 12,5 13,5 14,5 15,5 16,5 16,6 17,6 17,7 18,7 18,8  19,8 19,9 20,9 20,10 20,11 20,12 20,13 20,14 20,15 20,16 19,16 19,17 18,17 18,18 17,18 17,19 16,19 16,20 15,20 14,20 13,20  12,20 11,20 10,20 10,19 9,19 9,18 8,18 8,17 7,17 7,16 6,16 6,15 6,14 6,13 6,12 6,11 6,10 6,9 7,9 7,8 7,7 6,7 6,8 5,8 5,9 5,10  5,11 5,12 5,13 5,14 5,15 5,16 5,17 6,17 6,18 7,18 7,19 8,19 8,20 9,20 9,21 10,21 11,21 12,21 13,21 14,21 15,21 16,21 17,21  17,20 18,20 18,19 19,19 19,18 20,18 20,17 21,17 21,16  ",
              }),
              X.createElement("polygon", {
                className: "stShiba1",
                points:
                  "5,16 5,15 5,14 5,13 5,12 5,11 5,10 5,9 5,8 4,8 4,9 4,10 4,11 4,12 4,13 4,14 4,15 4,16 4,17 5,17  ",
              }),
              X.createElement("rect", {
                x: 7,
                y: 16,
                className: "stShiba3",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 8,
                y: 16,
                className: "stShiba8",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 9,
                y: 16,
                className: "stShiba13",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 15,
                y: 16,
                className: "stShiba13",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 16,
                y: 16,
                className: "stShiba8",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 17,
                y: 16,
                className: "stShiba3",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 18,
                y: 16,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 4,
                y: 17,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 5,
                y: 17,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 8,
                y: 17,
                className: "stShiba3",
                width: 1,
                height: 1,
              }),
              X.createElement("polygon", {
                className: "stShiba8",
                points:
                  "11,18 11,17 12,17 13,17 14,17 14,18 15,18 16,18 16,17 15,17 15,16 14,16 14,15 13,15 13,16 12,16  12,15 11,15 11,16 10,16 10,17 9,17 9,18 10,18  ",
              }),
              X.createElement("rect", {
                x: 11,
                y: 17,
                className: "stShiba14",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 12,
                y: 17,
                className: "stShiba11",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 13,
                y: 17,
                className: "stShiba14",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 16,
                y: 17,
                className: "stShiba3",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 17,
                y: 17,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 20,
                y: 17,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 5,
                y: 18,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 6,
                y: 18,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("polygon", {
                className: "stShiba8",
                points: "12,18 11,18 11,19 12,19 13,19 14,19 14,18 13,18  ",
              }),
              X.createElement("polygon", {
                className: "stShiba3",
                points:
                  "15,18 14,18 14,19 13,19 12,19 11,19 11,18 10,18 9,18 9,19 10,19 10,20 11,20 12,20 13,20 14,20  15,20 15,19 16,19 16,18  ",
              }),
              X.createElement("rect", {
                x: 16,
                y: 18,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 19,
                y: 18,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 6,
                y: 19,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 7,
                y: 19,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 15,
                y: 19,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 18,
                y: 19,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 7,
                y: 20,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 8,
                y: 20,
                className: "stShiba1",
                width: 1,
                height: 1,
              }),
              X.createElement("rect", {
                x: 17,
                y: 20,
                className: "stShiba0",
                width: 1,
                height: 1,
              }),
              X.createElement("polygon", {
                className: "stShiba0",
                points:
                  "15,21 14,21 13,21 12,21 11,21 10,21 9,21 8,21 8,22 9,22 10,22 11,22 12,22 13,22 14,22 15,22 16,22  17,22 17,21 16,21  ",
              })
            ))
        );
      });
      let at = [tQ, t2, t8, t3, ae],
        aa = at.indexOf(t8);
      var ar = ["title", "titleId"];
      function an() {
        return (an = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function getRandomItem(arr) {
        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);

        // get random item
        const item = arr[randomIndex];

        return item;
      }
      var ac = (0, X.forwardRef)(function (e, t) {
        var a = e.title,
          r = e.titleId,
          n = (function (e, t) {
            if (null == e) return {};
            var a,
              r,
              n = (function (e, t) {
                if (null == e) return {};
                var a,
                  r,
                  n = {},
                  c = Object.keys(e);
                for (r = 0; r < c.length; r++)
                  (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                return n;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var c = Object.getOwnPropertySymbols(e);
              for (r = 0; r < c.length; r++)
                (a = c[r]),
                  !(t.indexOf(a) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, a) &&
                    (n[a] = e[a]);
            }
            return n;
          })(e, ar);
        return X.createElement("img", {
          style: {
            transition: "all 5s ease-out",
          },
          width: getRandomItem(["100px", "80px", "60px", "40px"]),
          src: "_next/static/media/logo (6).png",
        });
      });
      let ai = at.length,
        al = !1,
        as = (e) => {
          let { coin: t } = e,
            a = (0, X.useRef)();
          (0, eo.q)(() => {
            let {
                initialX: e,
                initialY: r,
                initialTheta: n,
                velocity: c,
                angularVelocity: i,
                angle: l,
              } = t,
              s = +new Date(),
              h = c * Math.sin((l * Math.PI) / 180),
              H = c * Math.cos((l * Math.PI) / 180);
            requestAnimationFrame(function c() {
              if (a.current) {
                var l;
                let {
                  x: c,
                  y: o,
                  theta: V,
                } = {
                  x: e + h * (l = (+new Date() - s) / 1e3),
                  y: r + H * l - 349.5 * l * l,
                  theta: n + i * l,
                };
                if (c < -100 || c > window.innerWidth + 100 || o < -100) {
                  el.getState().removeCoin(t.id);
                  return;
                }
                a.current.style.transform = "translate("
                  .concat(c, "px, ")
                  .concat(-1 * o, "px) rotate(")
                  .concat(V, "deg)");
              }
              requestAnimationFrame(c);
            });
          });
          let r = ej(6.4, 48 * 0.1),
            n = ej(14.8, 96 * 0.1),
            [c] = (0, X.useState)(() => et(r, n)),
            i = (e) => {
              if (
                (el.getState().onCoinClick(t, e),
                !el.getState().playingAudio ||
                  "in-game" !== el.getState().state)
              )
                return;
              let a = new Audio(tG);
              (a.volume = 0.2), a.play();
            },
            l = "normal" === t.type ? ac : at[t.variant % at.length];
          return (0, W.jsx)(eH.Z, {
            position: "absolute",
            onMouseDown: (e) => {
              al || i(e);
            },
            onTouchStart: (e) => {
              (al = !0), i(e);
            },
            padding: "6px",
            ref: a,
            children: (0, W.jsx)(l, {
              height: "".concat(c, "px"),
              width: "".concat(c, "px"),
            }),
          });
        },
        ah = (e) => {
          let { style: t, animation: a } = e,
            r = el((e) => "in-game" === e.state),
            n = el((e) => e.coins),
            c = (0, X.useRef)(0);
          return (
            (0, X.useEffect)(() => {
              if (r && !c.current) {
                let e = () => {
                    for (let e = 0; e < el.getState().getCoinThrowAmount(); e++)
                      setTimeout(() => {
                        if ("in-game" !== el.getState().state) return;
                        let e = Math.min(1440, window.innerWidth),
                          t = window.innerHeight,
                          a = Math.max(
                            15,
                            Math.min(20, 0.007102272727272727 * (e - 320) + 15)
                          ),
                          r = et(0.425 * e, 0.575 * e),
                          n = et(0, 0),
                          c = et(-a, a),
                          i = 0.8 * t,
                          l = 0.4 * t,
                          s =
                            Math.sqrt((i - n) * 1398) /
                            Math.cos((c * Math.PI) / 180),
                          h =
                            Math.sqrt((l - n) * 1398) /
                            Math.cos((c * Math.PI) / 180),
                          H = Math.random() > 0.8 ? "non-memecoin" : "normal",
                          o = el.getState().character,
                          V =
                            "non-memecoin" === H
                              ? "doge" === o.name
                                ? aa
                                : Math.floor(Math.random() * (ai - 0 + 1) + 0)
                              : 0;
                        el.getState().addCoin({
                          type: H,
                          variant: V,
                          initialX: r,
                          initialY: n,
                          initialTheta: et(0, 360),
                          velocity: et(h, s),
                          angularVelocity: et(-360, 360),
                          angle: c,
                        });
                      }, Math.random() * el.getState().getCoinThrowTimeOffset() * 1e3);
                    t();
                  },
                  t = () => {
                    c.current && (clearTimeout(c.current), (c.current = 0)),
                      (c.current = setTimeout(
                        e,
                        1e3 * el.getState().getCoinThrowInterval()
                      ));
                  };
                t(), e();
              }
              !r && c.current && (clearInterval(c.current), (c.current = 0));
            }, [r]),
            (0, W.jsx)(eH.Z, {
              position: "absolute",
              display: "flex",
              bottom: "48px",
              width: "100%",
              ...t,
              ...a,
              children: n.map((e) => (0, W.jsx)(as, { coin: e }, e.id)),
            })
          );
        };
      var aH = a(2669),
        ao = a.n(aH);
      let aV = (e) => {
          let { id: t, initialX: a, initialY: r, amount: n } = e;
          return (
            (0, eo.q)(() => {
              setTimeout(() => {
                el.getState().removePlusOne(t);
              }, 1e3);
            }),
            (0, W.jsx)(em.xu, {
              position: "fixed",
              style: {
                transform: "translate(".concat(a, "px, ").concat(r, "px)"),
              },
              children: (0, W.jsx)(eH.Z, {
                className: ao().floating,
                children: (0, W.jsx)(ts, {
                  number: n,
                  withSign: !0,
                  fontSize: 8,
                  color: n < 0 ? "red" : "#013043",
                }),
              }),
            })
          );
        },
        am = (e) => {
          let { style: t, animation: a } = e,
            r = el((e) => e.plusOnes);
          return (0, W.jsx)(eH.Z, {
            position: "fixed",
            left: "0",
            top: "0",
            display: "flex",
            bottom: "48px",
            width: "100%",
            pointerEvents: "none",
            ...t,
            ...a,
            children: r.map((e) => (0, W.jsx)(aV, { ...e }, e.id)),
          });
        };
      var ad = a(8104),
        ap =
          a.p + "static/chunks/background-music-rick-roll.6dae5b6066e49b99.mp3",
        ag = {
          src: "/_next/static/media/potatoz-rickroll.15858300.gif",
          height: 900,
          width: 1200,
          blurWidth: 0,
          blurHeight: 0,
        },
        ax = a(3022);
      let au = () => {
          if (!el.getState().playingAudio) return;
          let e = new Audio(tE);
          (e.volume = 0.2), e.play();
        },
        af = (e) => {
          let { style: t, animation: a, ...r } = e,
            n = ej(0.15, 0.13);
          return (0, W.jsx)(eH.Z, {
            ...t,
            ...a,
            children: (0, W.jsx)(tN, {
              pixelSize: 3 * n,
              padding: "".concat(8 * n, "px ").concat(18 * n, "px"),
              onMouseDown: (e) => {
                var t;
                au(),
                  null === (t = r.onMouseDown) || void 0 === t || t.call(r, e);
              },
              onTouchStart: (e) => {
                var t;
                au(),
                  null === (t = r.onTouchStart) || void 0 === t || t.call(r, e);
              },
              onClick: (e) => {
                var t;
                el.getState().onHomeButtonClick(),
                  null === (t = r.onClick) || void 0 === t || t.call(r, e);
              },
              ...r,
              children: (0, W.jsx)("svg", {
                width: "".concat(24 * n, "px"),
                height: "".concat(24 * n, "px"),
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, W.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 2H14V4H12V6H10V8H8V10H6V12H4V20V28H12V22H14V20H18V22H20V28H28V20V12H26V10H24V8H22V6H20V4H18V2Z",
                  fill: "black",
                }),
              }),
            }),
          });
        },
        aC = (e) => {
          let { style: t, animation: a } = e,
            {
              vh: r = window.innerHeight / 100,
              vw: n = window.innerWidth / 100,
            } = (0, eV._z)(),
            c = el(
              (e) => e.playingAudio && "game-end" === e.state && e.browserActive
            ),
            i = (0, X.useRef)(),
            l = async function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = c || e;
              if (i.current) {
                var a, r;
                t &&
                  i.current.paused &&
                  (await (null === (a = i.current) || void 0 === a
                    ? void 0
                    : a.play()),
                  el.setState({ playedAudio: !0, playingAudio: !0 })),
                  t ||
                    i.current.paused ||
                    (null === (r = i.current) || void 0 === r || r.pause(),
                    el.getState().playedAudio ||
                      el.setState({ playingAudio: !1 }));
              } else if (t) {
                let e = new Audio(ap);
                (i.current = e), (e.loop = !0), (e.volume = 0.5);
                try {
                  await e.play(),
                    el.setState({ playedAudio: !0, playingAudio: !0 });
                } catch (e) {
                  el.setState({ playingAudio: !1 });
                }
              }
            };
          return (
            (0, X.useEffect)(
              () => (
                l(),
                () => {
                  var e;
                  null === (e = i.current) || void 0 === e || e.pause();
                }
              ),
              [c]
            ),
            (0, W.jsx)(eH.Z, {
              position: "absolute",
              display: "flex",
              top: "50%",
              left: "50%",
              transform: "translateX(-50%) translateY(-50%)",
              ...t,
              ...a,
              children: (0, W.jsxs)(_.k, {
                flexDirection: "column",
                gap: "".concat(r, "px"),
                alignContent: "center",
                alignItems: "center",
                width: "100%",
                children: [
                  (0, W.jsx)(_.k, {
                    position: "relative",
                    userSelect: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    paddingTop: "4vh",
                    children: (0, W.jsx)(eg(), {
                      src: ag,
                      width: (25 * r * 1200) / 900,
                      style: {
                        objectFit: "contain",
                        border: "".concat(0.4 * r, "px solid black"),
                      },
                      alt: "potatoz-rickroll",
                    }),
                  }),
                  (0, W.jsxs)(_.k, {
                    flexDirection: "column",
                    width: "342px",
                    lineHeight: "".concat(4 * r, "px"),
                    padding: "".concat(1 * r, "px"),
                    alignContent: "center",
                    alignItems: "center",
                    children: [
                      (0, W.jsx)(ad.x, {
                        fontFamily: ax.Et.style.fontFamily,
                        textColor: "black",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        fontSize: "".concat(ej(3), "px"),
                        lineHeight: "".concat(ej(4), "px"),
                        textTransform: "uppercase",
                        children: "You just got rickrolled!",
                      }),
                      (0, W.jsx)(ad.x, {
                        fontFamily: ax.Et.style.fontFamily,
                        textColor: "black",
                        textAlign: "center",
                        fontSize: "".concat(ej(2), "px"),
                        whiteSpace: "nowrap",
                        lineHeight: "".concat(ej(3), "px"),
                        textTransform: "uppercase",
                        fontWeight: "400",
                        children:
                          "Stay safe and be ready when $BEPO drops. (Probably)",
                      }),
                    ],
                  }),
                  (0, W.jsx)(af, {
                    onClick: () => {
                      el.getState().onHomeButtonClick();
                    },
                  }),
                ],
              }),
            })
          );
        },
        aw = (e) => new Promise((t) => setTimeout(t, e)),
        av = async (e) => {
          let {
              func: t,
              reportTrace: a = !0,
              maxTrials: r = 0,
              interval: n = 1e3,
              maxInterval: c = 4e3,
              onError: i = console.error,
              fallback: l,
            } = e,
            s = n,
            h = 0;
          for (;;)
            try {
              return await t(h);
            } catch (e) {
              if (
                (a && console.trace(),
                i(e),
                (-1 === r || r > 0) && ((h += 1), -1 !== r && h >= r))
              )
                return void 0 !== l ? await l(e) : void 0;
              await aw(s), (s = Math.min(2 * s, c));
            }
        },
        ay = new Set(["mp3"]),
        aM = (e) => ay.has(e.split(".").slice(-1)[0]),
        ab = async (e, t) => {
          await av({
            func: async () => {
              await new Promise((a, r) => {
                let n = new t();
                (n.onload = a),
                  (n.onloadeddata = a),
                  (n.onerror = r),
                  (n.src = e);
              });
            },
            maxTrials: -1,
          });
        },
        aE = async function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
          await Promise.all(
            e.map((e) =>
              av({
                func: async () => await ab(e, aM(e) ? Audio : Image),
                maxTrials: t,
              })
            )
          );
        },
        aZ = () => (
          (0, eo.q)(() => {
            (async () => {
              let e = el.getState().character;
              await aE(
                [
                  ...er.map((e) => e.staticImage.src),
                  ...er.map((e) => e.ainmateImage.src),
                  e.ainmateImage.src,
                  ag.src,
                  tG,
                  tE,
                  ap,
                ],
                3
              );
            })();
          }),
          (0, W.jsx)(em.xu, {
            position: "absolute",
            opacity: "0",
            userSelect: "none",
            pointerEvents: "none",
          })
        ),
        aj = (e) =>
          (0, W.jsx)(_.k, {
            background: "black",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            ...e,
          }),
        aN = (e) =>
          (0, W.jsx)(_.k, {
            background: "white",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            ...e,
          }),
        aO = (e) =>
          (0, W.jsx)(_.k, {
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            ...e,
          }),
        aA = (e) => {
          let { pixelSize: t = 3, style: a, animation: r, children: n } = e,
            c = ej(0.12, 0.12),
            i = t * c;
          return (0, W.jsx)(eH.Z, {
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            ...a,
            ...r,
            children: (0, W.jsxs)(_.k, {
              flexDirection: "column",
              width: "fit-content",
              children: [
                (0, W.jsxs)(_.k, {
                  children: [
                    (0, W.jsxs)(_.k, {
                      alignItems: "center",
                      justifyContent: "center",
                      children: [
                        (0, W.jsx)(aj, {
                          height: "calc(100% - ".concat(6 * i, "px)"),
                          width: "".concat(i, "px"),
                        }),
                        (0, W.jsxs)(aO, {
                          height: "calc(100% - ".concat(4 * i, "px)"),
                          width: "".concat(i + 1, "px"),
                          marginRight: "-1px",
                          children: [
                            (0, W.jsx)(aj, {
                              height: "".concat(2 * i, "px"),
                              width: "".concat(i + 1, "px"),
                            }),
                            (0, W.jsx)(aN, {
                              height: "calc(100% - ".concat(4 * i, "px)"),
                              width: "".concat(i + 1, "px"),
                            }),
                            (0, W.jsx)(aj, {
                              height: "".concat(2 * i, "px"),
                              width: "".concat(i + 1, "px"),
                            }),
                          ],
                        }),
                        (0, W.jsxs)(aO, {
                          height: "calc(100% - ".concat(2 * i, "px)"),
                          width: "".concat(i + 1, "px"),
                          marginRight: "-1px",
                          children: [
                            (0, W.jsx)(aj, {
                              height: "".concat(2 * i, "px"),
                              width: "".concat(i + 1, "px"),
                            }),
                            (0, W.jsx)(aN, {
                              height: "calc(100% - ".concat(4 * i, "px)"),
                              width: "".concat(i + 1, "px"),
                            }),
                            (0, W.jsx)(aj, {
                              height: "".concat(2 * i, "px"),
                              width: "".concat(i + 1, "px"),
                            }),
                          ],
                        }),
                        (0, W.jsxs)(aO, {
                          height: "100%",
                          width: "".concat(i + 1, "px"),
                          marginRight: "-1px",
                          children: [
                            (0, W.jsx)(aj, {
                              height: "".concat(2 * i, "px"),
                              width: "".concat(i + 1, "px"),
                            }),
                            (0, W.jsx)(aN, {
                              height: "calc(100% - ".concat(4 * i, "px)"),
                              width: "".concat(i + 1, "px"),
                            }),
                            (0, W.jsx)(aj, {
                              height: "".concat(2 * i, "px"),
                              width: "".concat(i + 1, "px"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, W.jsxs)(_.k, {
                      flexDirection: "column",
                      children: [
                        (0, W.jsx)(aj, {
                          width: "100%",
                          height: "".concat(i, "px"),
                        }),
                        (0, W.jsx)(_.k, {
                          padding: ""
                            .concat(16 * c, "px ")
                            .concat(16 * c, "px"),
                          background: "white",
                          children: (0, W.jsx)(ad.x, {
                            fontFamily: ax.Et.style.fontFamily,
                            fontSize: "".concat(24 * c, "px"),
                            lineHeight: "".concat(24 * c, "px"),
                            color: "black",
                            width: "100%",
                            height: "100%",
                            textAlign: "center",
                            textTransform: "uppercase",
                            children: n,
                          }),
                        }),
                        (0, W.jsxs)(aO, {
                          width: "100%",
                          height: "".concat(i, "px"),
                          flexDirection: "row",
                          children: [
                            (0, W.jsx)(aj, {
                              height: "".concat(i + 1, "px"),
                              width: "calc(100% - ".concat(8 * i, "px)"),
                            }),
                            (0, W.jsx)(aN, {
                              height: "".concat(i + 1, "px"),
                              width: "".concat(16 * i, "px"),
                            }),
                            (0, W.jsx)(aj, {
                              height: "".concat(i + 1, "px"),
                              width: "calc(100% - ".concat(8 * i, "px)"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, W.jsxs)(_.k, {
                      alignItems: "center",
                      justifyContent: "center",
                      children: [
                        (0, W.jsxs)(aO, {
                          height: "100%",
                          width: "".concat(i + 1, "px"),
                          marginLeft: "-1px",
                          children: [
                            (0, W.jsx)(aj, {
                              height: "".concat(2 * i, "px"),
                              width: "".concat(i + 1, "px"),
                            }),
                            (0, W.jsx)(aN, {
                              height: "calc(100% - ".concat(4 * i, "px)"),
                              width: "".concat(i + 1, "px"),
                            }),
                            (0, W.jsx)(aj, {
                              height: "".concat(2 * i, "px"),
                              width: "".concat(i + 1, "px"),
                            }),
                          ],
                        }),
                        (0, W.jsxs)(aO, {
                          height: "calc(100% - ".concat(2 * i, "px)"),
                          width: "".concat(i + 1, "px"),
                          marginLeft: "-1px",
                          children: [
                            (0, W.jsx)(aj, {
                              height: "".concat(2 * i, "px"),
                              width: "".concat(i + 1, "px"),
                            }),
                            (0, W.jsx)(aN, {
                              height: "calc(100% - ".concat(4 * i, "px)"),
                              width: "".concat(i + 1, "px"),
                            }),
                            (0, W.jsx)(aj, {
                              height: "".concat(2 * i, "px"),
                              width: "".concat(i + 1, "px"),
                            }),
                          ],
                        }),
                        (0, W.jsxs)(aO, {
                          height: "calc(100% - ".concat(4 * i, "px)"),
                          width: "".concat(i + 1, "px"),
                          marginLeft: "-1px",
                          children: [
                            (0, W.jsx)(aj, {
                              height: "".concat(2 * i, "px"),
                              width: "".concat(i + 1, "px"),
                            }),
                            (0, W.jsx)(aN, {
                              height: "calc(100% - ".concat(4 * i, "px)"),
                              width: "".concat(i + 1, "px"),
                            }),
                            (0, W.jsx)(aj, {
                              height: "".concat(2 * i, "px"),
                              width: "".concat(i + 1, "px"),
                            }),
                          ],
                        }),
                        (0, W.jsx)(aj, {
                          height: "calc(100% - ".concat(6 * i, "px)"),
                          width: "".concat(i, "px"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, W.jsxs)(_.k, {
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  children: [
                    (0, W.jsxs)(aO, {
                      width: "".concat(10 * i, "px"),
                      height: "".concat(i + 1, "px"),
                      flexDirection: "row",
                      children: [
                        (0, W.jsx)(aj, {
                          width: "".concat(2 * i, "px"),
                          height: "".concat(i + 1, "px"),
                        }),
                        (0, W.jsx)(aN, {
                          width: "".concat(6 * i, "px"),
                          height: "".concat(i + 1, "px"),
                        }),
                        (0, W.jsx)(aj, {
                          width: "".concat(2 * i, "px"),
                          height: "".concat(i + 1, "px"),
                        }),
                      ],
                    }),
                    (0, W.jsxs)(aO, {
                      width: "".concat(8 * i, "px"),
                      height: "".concat(i + 1, "px"),
                      flexDirection: "row",
                      children: [
                        (0, W.jsx)(aj, {
                          width: "".concat(2 * i, "px"),
                          height: "".concat(i + 1, "px"),
                        }),
                        (0, W.jsx)(aN, {
                          width: "".concat(4 * i, "px"),
                          height: "".concat(i + 1, "px"),
                        }),
                        (0, W.jsx)(aj, {
                          width: "".concat(2 * i, "px"),
                          height: "".concat(i + 1, "px"),
                        }),
                      ],
                    }),
                    (0, W.jsxs)(aO, {
                      width: "".concat(6 * i, "px"),
                      height: "".concat(i + 1, "px"),
                      flexDirection: "row",
                      marginTop: "-1px",
                      children: [
                        (0, W.jsx)(aj, {
                          width: "".concat(1 * i, "px"),
                          height: "".concat(i + 1, "px"),
                        }),
                        (0, W.jsx)(aN, {
                          width: "".concat(4 * i, "px"),
                          height: "".concat(i + 1, "px"),
                        }),
                        (0, W.jsx)(aj, {
                          width: "".concat(1 * i, "px"),
                          height: "".concat(i + 1, "px"),
                        }),
                      ],
                    }),
                    (0, W.jsxs)(aO, {
                      width: "".concat(4 * i, "px"),
                      height: "".concat(i + 1, "px"),
                      flexDirection: "row",
                      marginTop: "-1px",
                      children: [
                        (0, W.jsx)(aj, {
                          width: "".concat(1 * i, "px"),
                          height: "".concat(i + 1, "px"),
                        }),
                        (0, W.jsx)(aN, {
                          width: "".concat(2 * i, "px"),
                          height: "".concat(i + 1, "px"),
                        }),
                        (0, W.jsx)(aj, {
                          width: "".concat(1 * i, "px"),
                          height: "".concat(i + 1, "px"),
                        }),
                      ],
                    }),
                    (0, W.jsx)(aj, {
                      width: "".concat(2 * i, "px"),
                      height: "".concat(i, "px"),
                      children: (0, W.jsx)("span", {}),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        aS = () => {
          if (!el.getState().playingAudio) return;
          let e = new Audio(tE);
          (e.volume = 0.2), e.play();
        },
        ak = (e) => {
          let { style: t, animation: a, ...r } = e,
            n = ej(0.15, 0.13);
          return (0, W.jsx)(eH.Z, {
            ...t,
            ...a,
            children: (0, W.jsx)(tN, {
              pixelSize: 3 * n,
              padding: "".concat(12 * n, "px ").concat(9 * n, "px"),
              ...r,
              onMouseDown: (e) => {
                var t;
                aS(),
                  null === (t = r.onMouseDown) || void 0 === t || t.call(r, e);
              },
              onTouchStart: (e) => {
                var t;
                aS(),
                  null === (t = r.onTouchStart) || void 0 === t || t.call(r, e);
              },
              onClick: (e) => {
                var t;
                null === (t = r.onClick) || void 0 === t || t.call(r, e);
              },
              children: (0, W.jsx)("svg", {
                width: 205 * n,
                height: 12 * n,
                viewBox: "0 0 89 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, W.jsx)("path", {
                  d: "M5 15.75V13.5H2.75V11.25H0.5V4.5H2.75V2.25H5V0H14V2.25H16.25V4.5H11.75V2.25H7.25V4.5H5V11.25H7.25V13.5H11.75V11.25H16.25V13.5H14V15.75H5ZM20.75 15.75V0H25.25V13.5H34.25V15.75H20.75ZM36.5 15.75V4.5H38.75V2.25H41V0H47.75V2.25H50V4.5H52.25V15.75H47.75V11.25H41V15.75H36.5ZM41 9H47.75V4.5H45.5V2.25H43.25V4.5H41V9ZM56.75 15.75V13.5H61.25V2.25H56.75V0H70.25V2.25H65.75V13.5H70.25V15.75H56.75ZM72.5 15.75V0H77V2.25H79.25V4.5H81.5V2.25H83.75V0H88.25V15.75H83.75V6.75H81.5V11.25H79.25V6.75H77V15.75H72.5Z",
                  fill: "black",
                }),
              }),
            }),
          });
        },
        az = (e) => {
          let { style: t, animation: a } = e,
            r = el((e) => e.coinCount),
            {
              vh: n = window.innerHeight / 100,
              vw: c = window.innerWidth / 100,
            } = (0, eV._z)();
          return (0, W.jsx)(eH.Z, {
            position: "absolute",
            display: "flex",
            left: "50%",
            bottom: "".concat(45 * n, "px"),
            alignItems: "center",
            justifyContent: "center",
            transform: "translateX(-50%)",
            ...t,
            ...a,
            children: (0, W.jsxs)(_.k, {
              flexDirection: "column",
              alignItems: "center",
              gap: "".concat(3 * n, "px"),
              children: [
                (0, W.jsxs)(aA, {
                  children: [
                    (0, W.jsx)("span", {
                      style: {
                        whiteSpace: "nowrap",
                        lineHeight: "".concat(1 * n, "px"),
                      },
                      children:
                        r > 0
                          ? (0, W.jsxs)(W.Fragment, {
                              children: [
                                "LFG!",
                                " ",
                                (0, W.jsx)(ad.x, {
                                  as: "span",
                                  color: "#AB8010",
                                  children: "".concat(r),
                                }),
                                " ",
                                "$BEPO!",
                              ],
                            })
                          : (0, W.jsxs)(W.Fragment, {
                              children: [
                                "Better luck next time!",
                                (0, W.jsx)("br", {}),
                                "Be ready when $meme drops.",
                                (0, W.jsx)("br", {}),
                                "(Probably)",
                              ],
                            }),
                    }),
                    (0, W.jsx)("span", { style: { whiteSpace: "nowrap" } }),
                  ],
                }),
                r > 0
                  ? (0, W.jsx)(ak, {
                      onClick: () => {
                        el.getState().onClaimButtonClick();
                      },
                    })
                  : (0, W.jsx)(af, {
                      onClick: () => {
                        el.getState().onHomeButtonClick();
                      },
                    }),
              ],
            }),
          });
        },
        aD = (e) => {
          let { style: t, animation: a } = e,
            {
              vh: r = window.innerHeight / 100,
              vw: n = window.innerWidth / 100,
            } = (0, eV._z)();
          return (0, W.jsx)(eH.Z, {
            position: "absolute",
            display: "flex",
            left: "50%",
            bottom: "".concat(46 * r, "px"),
            alignItems: "center",
            justifyContent: "center",
            transform: "translateX(-50%)",
            ...t,
            ...a,
            children: (0, W.jsx)(aA, {
              children: (0, W.jsx)("span", {
                style: { whiteSpace: "nowrap" },
                children: "SHUT UP AND TAKE MY MONEY!!",
              }),
            }),
          });
        },
        aI = (e) => {
          let { isInGame: t, character: a, style: r, animation: n } = e,
            {
              vh: c = window.innerHeight / 100,
              vw: i = window.innerWidth / 100,
            } = (0, eV._z)();
          return (0, W.jsx)(eH.Z, {
            position: "absolute",
            display: "flex",
            bottom: "".concat(10 * c, "px"),
            width: "".concat(80 * c, "px"),
            height: "".concat(40 * c, "px"),
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            userSelect: "none",
            ...r,
            ...n,
            children: (0, W.jsx)(eg(), {
              src: t ? a.ainmateImage : a.staticImage,
              alt: "character",
              style: { objectFit: "contain" },
              fill: !0,
            }),
          });
        },
        aB = () => {
          let {
              vh: e = window.innerHeight / 100,
              vw: t = window.innerWidth / 100,
            } = (0, eV._z)(),
            a = el((e) => e.character),
            r = el((e) => e.state),
            n = el(
              (e) => e.playingAudio && "game-end" !== e.state && e.browserActive
            ),
            c = (0, X.useRef)();
          (0, eo.q)(() => () => {
            var e;
            null === (e = c.current) || void 0 === e || e.play();
          });
          let i = async function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = n || e;
            if (c.current) {
              var a, r;
              t &&
                c.current.paused &&
                (await (null === (a = c.current) || void 0 === a
                  ? void 0
                  : a.play()),
                el.setState({ playedAudio: !0, playingAudio: !0 })),
                t ||
                  c.current.paused ||
                  (null === (r = c.current) || void 0 === r || r.pause(),
                  el.getState().playedAudio ||
                    el.setState({ playingAudio: !1 }));
            } else if (t) {
              let e = new Audio(eh);
              (c.current = e), (e.loop = !0), (e.volume = 0.2);
              try {
                await e.play(),
                  el.setState({ playedAudio: !0, playingAudio: !0 });
              } catch (e) {
                el.setState({ playingAudio: !1 });
              }
            }
          };
          return (
            (0, X.useEffect)(() => {
              i();
            }, [n]),
            (0, W.jsx)(eH.Z, {
              className: "teaser",
              height: 100 * e,
              width: 100 * t,
              background: "#5FC7FF",
              transform: "translate3d(0px, 0px, 0px)",
              overflow: "hidden",
              style: { touchAction: "pan-x pan-y" },
              onClick: () => {
                el.getState().playedAudio || i(!0);
              },
              ...(0, es.p)(),
              children: (0, W.jsxs)(_.k, {
                margin: "auto",
                position: "relative",
                width: "100%",
                height: "100%",
                maxWidth: "1440px",
                children: [
                  (0, W.jsx)(aZ, {}),
                  "score-board" === r &&
                    (0, W.jsx)(az, { style: { zIndex: 20 } }),
                  "game-end" === r && (0, W.jsx)(aC, { style: { zIndex: 20 } }),
                  "count-down" === r &&
                    (0, W.jsx)(aD, { style: { zIndex: 20 } }),
                  ("in-game" === r || "score-board" === r) &&
                    (0, W.jsx)(K, {
                      above: "lg",
                      children: (0, W.jsx)(to, {
                        style: {
                          position: "absolute",
                          top: "".concat(3 * e, "px"),
                          left: "".concat(3 * e, "px"),
                          zIndex: 10,
                        },
                      }),
                    }),
                  (0, W.jsx)(tL, {
                    style: { position: "absolute", zIndex: 10 },
                  }),
                  (0, W.jsx)(K, {
                    above: "lg",
                    children: (0, W.jsx)(tb, {
                      style: {
                        position: "absolute",
                        top: "".concat(2 * e, "px"),
                        right: "".concat(3 * e, "px"),
                        zIndex: 10,
                      },
                    }),
                  }),
                  (0, W.jsx)(ex, { style: { zIndex: 0 } }),
                  (0, W.jsx)(tY, { style: { zIndex: 3 } }),
                  "game-end" !== r &&
                    (0, W.jsx)(aI, {
                      isInGame: "in-game" === r,
                      character: a,
                      style: { zIndex: 4 },
                    }),
                  (0, W.jsx)(ah, { style: { zIndex: 5 } }),
                  (0, W.jsx)(am, { style: { zIndex: 6 } }),
                  (0, W.jsx)(tq, { style: { zIndex: 6 } }),
                ],
              }),
            })
          );
        };
      function aP() {
        let {
          vh: e = window.innerHeight / 100,
          vw: t = window.innerWidth / 100,
        } = (0, eV._z)();
        return (0, W.jsx)(_.k, {
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          children: (0, W.jsx)(aB, {}),
        });
      }
      var aR = aP;
    },
    2669: function (e) {
      e.exports = { floating: "styles_floating__hl71M" };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 7314));
    }),
      (_N_E = e.O());
  },
]);
