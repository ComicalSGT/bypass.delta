(function() {
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa = "&action=",
        ba = ".wikipedia.org",
        ca = "SCRIPT",
        da = "SPAN",
        ea = "SW_READER_LIST_",
        fa = "SW_READER_LIST_CLOSED_",
        ha = "Share this post",
        ia = "Symbol.dispose",
        ja = "Symbol.iterator",
        ka = "about:invalid#zClosurez",
        la = "about:invalid#zSoyz",
        ma = "bigint",
        na = "block",
        oa = "boolean",
        pa = "click",
        qa = "collapsed",
        ra = "collapsible",
        sa = "comment-editor",
        ta = "commentId",
        ua = "complete",
        va = "contact-form-email",
        wa = "contact-form-email-message",
        xa = "contact-form-error-message",
        ya = "contact-form-error-message-with-border",
        za = "contact-form-name",
        Aa = "contact-form-submit",
        Ba = "contact-form-success-message",
        Ca = "contact-form-success-message-with-border",
        Da = "data-height",
        Ea = "displayModeFull",
        Fa = "displayModeLayout",
        Ga = "displayModeNone",
        l = "div",
        Ha = "dropdown-toggle",
        Ia = "error",
        Ja = "expanded",
        n = "function",
        Ka = "hidden",
        La = "https:",
        Ma = "layout-widget-description",
        Na = "layout-widget-title",
        Oa = "max-height: 0;",
        p = "none",
        q = "number",
        t = "object",
        Pa = "prerender",
        Qa = "ready",
        Ra = "rotate(-45deg)",
        Sa = "status-message",
        Ta = "status-message-inner",
        u = "string",
        Ua = "success",
        Va = "text/javascript",
        Wa = "thread-collapsed",
        Xa = "thread-expanded",
        Ya = "toggle",
        Za = "unhandledrejection",
        $a = "visible",
        ab = "wikipedia-search-input",
        bb = "wikipedia-search-more",
        cb = "wikipedia-search-results",
        db = "wikipedia-search-results-header",
        v;

    function eb(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var fb = typeof Object.defineProperties == n ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function gb(a) {
        a = [t == typeof globalThis && globalThis, a, t == typeof window && window, t == typeof self && self, t == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var hb = gb(this);

    function w(a, b) {
        if (b) a: {
            var c = hb;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && fb(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    w("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.A = f;
            fb(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.A
        };
        var d = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            e = 0;
        return b
    });
    w(ja, function(a) {
        if (a) return a;
        a = Symbol(ja);
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = hb[b[c]];
            typeof d === n && typeof d.prototype[a] != n && fb(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ib(eb(this))
                }
            })
        }
        return a
    });

    function ib(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function jb(a) {
        return kb(a, a)
    }

    function kb(a, b) {
        a.raw = b;
        Object.freeze && (Object.freeze(a), Object.freeze(b));
        return a
    }

    function x(a) {
        var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
        if (b) return b.call(a);
        if (typeof a.length == q) return {
            next: eb(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
    var lb = typeof Object.create == n ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        mb;
    if (typeof Object.setPrototypeOf == n) mb = Object.setPrototypeOf;
    else {
        var nb;
        a: {
            var ob = {
                    a: !0
                },
                pb = {};
            try {
                pb.__proto__ = ob;
                nb = pb.a;
                break a
            } catch (a) {}
            nb = !1
        }
        mb = nb ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qb = mb;

    function y(a, b) {
        a.prototype = lb(b.prototype);
        a.prototype.constructor = a;
        if (qb) qb(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.L = b.prototype
    }

    function rb() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    w("Promise", function(a) {
        function b(g) {
            this.A = 0;
            this.C = void 0;
            this.B = [];
            this.J = !1;
            var h = this.D();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.A = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.B = function(g) {
            if (this.A == null) {
                this.A = [];
                var h = this;
                this.C(function() {
                    h.G()
                })
            }
            this.A.push(g)
        };
        var e = hb.setTimeout;
        c.prototype.C = function(g) {
            e(g, 0)
        };
        c.prototype.G = function() {
            for (; this.A && this.A.length;) {
                var g = this.A;
                this.A = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (m) {
                        this.D(m)
                    }
                }
            }
            this.A = null
        };
        c.prototype.D = function(g) {
            this.C(function() {
                throw g;
            })
        };
        b.prototype.D = function() {
            function g(m) {
                return function(r) {
                    k || (k = !0, m.call(h, r))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.T),
                reject: g(this.G)
            }
        };
        b.prototype.T = function(g) {
            if (g === this) this.G(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.aa(g);
            else {
                a: switch (typeof g) {
                    case t:
                        var h = g != null;
                        break a;
                    case n:
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.O(g) : this.H(g)
            }
        };
        b.prototype.O =
            function(g) {
                var h = void 0;
                try {
                    h = g.then
                } catch (k) {
                    this.G(k);
                    return
                }
                typeof h == n ? this.ja(h, g) : this.H(g)
            };
        b.prototype.G = function(g) {
            this.I(2, g)
        };
        b.prototype.H = function(g) {
            this.I(1, g)
        };
        b.prototype.I = function(g, h) {
            if (this.A != 0) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.A);
            this.A = g;
            this.C = h;
            this.A === 2 && this.W();
            this.M()
        };
        b.prototype.W = function() {
            var g = this;
            e(function() {
                if (g.S()) {
                    var h = hb.console;
                    typeof h !== "undefined" && h.error(g.C)
                }
            }, 1)
        };
        b.prototype.S = function() {
            if (this.J) return !1;
            var g = hb.CustomEvent,
                h = hb.Event,
                k = hb.dispatchEvent;
            if (typeof k === "undefined") return !0;
            typeof g === n ? g = new g(Za, {
                cancelable: !0
            }) : typeof h === n ? g = new h(Za, {
                cancelable: !0
            }) : (g = hb.document.createEvent("CustomEvent"), g.initCustomEvent(Za, !1, !0, g));
            g.promise = this;
            g.reason = this.C;
            return k(g)
        };
        b.prototype.M = function() {
            if (this.B != null) {
                for (var g = 0; g < this.B.length; ++g) f.B(this.B[g]);
                this.B = null
            }
        };
        var f = new c;
        b.prototype.aa = function(g) {
            var h = this.D();
            g.Oa(h.resolve, h.reject)
        };
        b.prototype.ja = function(g, h) {
            var k =
                this.D();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (m) {
                k.reject(m)
            }
        };
        b.prototype.then = function(g, h) {
            function k(C, D) {
                return typeof C == n ? function(R) {
                    try {
                        m(C(R))
                    } catch (Pd) {
                        r(Pd)
                    }
                } : D
            }
            var m, r, B = new b(function(C, D) {
                m = C;
                r = D
            });
            this.Oa(k(g, m), k(h, r));
            return B
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.Oa = function(g, h) {
            function k() {
                switch (m.A) {
                    case 1:
                        g(m.C);
                        break;
                    case 2:
                        h(m.C);
                        break;
                    default:
                        throw Error("Unexpected state: " + m.A);
                }
            }
            var m = this;
            this.B == null ? f.B(k) : this.B.push(k);
            this.J = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var m = x(g), r = m.next(); !r.done; r = m.next()) d(r.value).Oa(h, k)
            })
        };
        b.all = function(g) {
            var h = x(g),
                k = h.next();
            return k.done ? d([]) : new b(function(m, r) {
                function B(R) {
                    return function(Pd) {
                        C[R] = Pd;
                        D--;
                        D == 0 && m(C)
                    }
                }
                var C = [],
                    D = 0;
                do C.push(void 0), D++, d(k.value).Oa(B(C.length - 1), r), k = h.next(); while (!k.done)
            })
        };
        return b
    });

    function sb(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var tb = typeof Object.assign == n ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) sb(d, e) && (a[e] = d[e])
        }
        return a
    };
    w("Object.assign", function(a) {
        return a || tb
    });
    w(ia, function(a) {
        return a ? a : Symbol(ia)
    });
    w("WeakMap", function(a) {
        function b(k) {
            this.Z = (h += Math.random() + 1).toString();
            if (k) {
                k = x(k);
                for (var m; !(m = k.next()).done;) m = m.value, this.set(m[0], m[1])
            }
        }

        function c() {}

        function d(k) {
            var m = typeof k;
            return m === t && k !== null || m === n
        }

        function e(k) {
            if (!sb(k, g)) {
                var m = new c;
                fb(k, g, {
                    value: m
                })
            }
        }

        function f(k) {
            var m = Object[k];
            m && (Object[k] = function(r) {
                if (r instanceof c) return r;
                Object.isExtensible(r) && e(r);
                return m(r)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        m = Object.seal({}),
                        r = new a([
                            [k,
                                2
                            ],
                            [m, 3]
                        ]);
                    if (r.get(k) != 2 || r.get(m) != 3) return !1;
                    r.delete(k);
                    r.set(m, 4);
                    return !r.has(k) && r.get(m) == 4
                } catch (B) {
                    return !1
                }
            }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0;
        b.prototype.set = function(k, m) {
            if (!d(k)) throw Error("Invalid WeakMap key");
            e(k);
            if (!sb(k, g)) throw Error("WeakMap key fail: " + k);
            k[g][this.Z] = m;
            return this
        };
        b.prototype.get = function(k) {
            return d(k) && sb(k, g) ? k[g][this.Z] : void 0
        };
        b.prototype.has = function(k) {
            return d(k) && sb(k, g) && sb(k[g],
                this.Z)
        };
        b.prototype.delete = function(k) {
            return d(k) && sb(k, g) && sb(k[g], this.Z) ? delete k[g][this.Z] : !1
        };
        return b
    });
    w("Map", function(a) {
        function b() {
            var h = {};
            return h.ha = h.next = h.head = h
        }

        function c(h, k) {
            var m = h[1];
            return ib(function() {
                if (m) {
                    for (; m.head != h[1];) m = m.ha;
                    for (; m.next != m.head;) return m = m.next, {
                        done: !1,
                        value: k(m)
                    };
                    m = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var m = k && typeof k;
            m == t || m == n ? f.has(k) ? m = f.get(k) : (m = "" + ++g, f.set(k, m)) : m = "p_" + k;
            var r = h[0][m];
            if (r && sb(h[0], m))
                for (h = 0; h < r.length; h++) {
                    var B = r[h];
                    if (k !== k && B.key !== B.key || k === B.key) return {
                        id: m,
                        list: r,
                        index: h,
                        U: B
                    }
                }
            return {
                id: m,
                list: r,
                index: -1,
                U: void 0
            }
        }

        function e(h) {
            this[0] = {};
            this[1] = b();
            this.size = 0;
            if (h) {
                h = x(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || typeof a != n || !a.prototype.entries || typeof Object.seal != n) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(x([
                            [h, "s"]
                        ]));
                    if (k.get(h) != "s" || k.size != 1 || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || k.size != 2) return !1;
                    var m = k.entries(),
                        r = m.next();
                    if (r.done || r.value[0] != h || r.value[1] != "s") return !1;
                    r = m.next();
                    return r.done || r.value[0].x != 4 || r.value[1] != "t" || !m.next().done ?
                        !1 : !0
                } catch (B) {
                    return !1
                }
            }()) return a;
        var f = new WeakMap;
        e.prototype.set = function(h, k) {
            h = h === 0 ? 0 : h;
            var m = d(this, h);
            m.list || (m.list = this[0][m.id] = []);
            m.U ? m.U.value = k : (m.U = {
                next: this[1],
                ha: this[1].ha,
                head: this[1],
                key: h,
                value: k
            }, m.list.push(m.U), this[1].ha.next = m.U, this[1].ha = m.U, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.U && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.U.ha.next = h.U.next, h.U.next.ha = h.U.ha, h.U.head = null, this.size--, !0) : !1
        };
        e.prototype.clear =
            function() {
                this[0] = {};
                this[1] = this[1].ha = b();
                this.size = 0
            };
        e.prototype.has = function(h) {
            return !!d(this, h).U
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).U) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var m = this.entries(), r; !(r = m.next()).done;) r = r.value, h.call(k, r[1], r[0],
                this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });
    w("Set", function(a) {
        function b(c) {
            this.A = new Map;
            if (c) {
                c = x(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.A.size
        }
        if (function() {
                if (!a || typeof a != n || !a.prototype.entries || typeof Object.seal != n) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(x([c]));
                    if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                            x: 4
                        }) != d || d.size != 2) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ?
                        !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = c === 0 ? 0 : c;
            this.A.set(c, c);
            this.size = this.A.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.A.delete(c);
            this.size = this.A.size;
            return c
        };
        b.prototype.clear = function() {
            this.A.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.A.has(c)
        };
        b.prototype.entries = function() {
            return this.A.entries()
        };
        b.prototype.values = function() {
            return this.A.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] =
            b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.A.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    w("globalThis", function(a) {
        return a || hb
    });

    function ub(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    }
    w("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return ub(this, function(b, c) {
                return [b, c]
            })
        }
    });
    w("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ub(this, function(b) {
                return b
            })
        }
    });
    w("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            if (this == null) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
            var d = this + "";
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    w("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== q ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    });
    w("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    w("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) sb(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    w("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ub(this, function(b, c) {
                return c
            })
        }
    });
    w("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(h) {
                return h
            };
            var e = [],
                f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
            if (typeof f == n) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    w("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) sb(b, d) && c.push(b[d]);
            return c
        }
    });
    w("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    w("Number.MIN_SAFE_INTEGER", function() {
        return -9007199254740991
    });
    w("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    w("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    w("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c
        }
    });
    w("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return typeof b === q && isNaN(b)
        }
    });
    window.jstiming && window.jstiming.load.tick("widgetJsStart");

    function vb() {
        window.jstiming.load.tick("ol")
    }

    function wb(a, b) {
        a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent("onload", b)
    }

    function xb(a, b) {
        return a.className && a.className.indexOf(b) != -1 ? a : a.parentNode ? xb(a.parentNode, b) : null
    }

    function yb() {
        window.jstiming.load.tick("prt");
        window.tickAboveFold && window.tickAboveFold(this)
    }
    window.BLOG_attachCsiOnload = function(a, b) {
        if (window.jstiming) {
            window.jstiming.load.tick("widgetJsEnd");
            window.jstiming.load.tick("prt");
            window.jstiming.load.name = a + "blogspot";
            a = document.getElementsByTagName("img");
            for (var c = 0; c < a.length; c++) a[c].complete ? xb(a[c], "post") != null && yb.apply(a[c]) : xb(a[c], "post") != null && wb(a[c], yb);
            wb(window, vb);
            a = function() {
                for (var d = {}, e = window.blogger_blog_id, f = ["google_blogger_adsense_experiment_id", "blogger_csi_e", "blogger_templates_experiment_id", "blogger_active_experiments"],
                        g = [], h = f.length, k = 0; k < h; k++) {
                    var m = f[k];
                    m in window && g.push(window[m])
                }
                e && (d.blogId = e);
                g.length > 0 && (d.e = g.join(","));
                e = (document.location.protocol == La ? La : "http:") + "//csi.gstatic.com/csi";
                window.jstiming.report(window.jstiming.load, d, b || e)
            };
            window.addEventListener ? window.addEventListener("beforeunload", a, !1) : window.attachEvent("onbeforeunload", a)
        }
    };
    var zb = zb || {},
        z = this || self;

    function Ab(a) {
        a.qa = void 0;
        a.Sa = function() {
            return a.qa ? a.qa : a.qa = new a
        }
    }

    function Bb(a) {
        var b = typeof a;
        return b != t ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Cb(a) {
        var b = Bb(a);
        return b == "array" || b == t && typeof a.length == q
    }

    function Db(a) {
        var b = typeof a;
        return b == t && a != null || b == n
    }
    var Eb = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        Fb = 0;

    function Gb(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Hb(a, b, c) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function A(a, b, c) {
        A = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Gb : Hb;
        return A.apply(null, arguments)
    }

    function E(a, b) {
        a = a.split(".");
        var c = z;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function F(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.L = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Ud = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    };

    function Ib(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ib);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        b !== void 0 && (this.cause = b)
    }
    F(Ib, Error);
    Ib.prototype.name = "CustomError";
    var Jb;
    var Kb = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (typeof a === u) return typeof b !== u || b.length != 1 ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Lb = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = typeof a === u ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Mb = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } :
        function(a, b) {
            for (var c = a.length, d = typeof a === u ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function Nb(a, b) {
        return Kb(a, b) >= 0
    }

    function Ob(a) {
        if (!Array.isArray(a))
            for (var b = a.length - 1; b >= 0; b--) delete a[b];
        a.length = 0
    }

    function Pb(a, b) {
        b = Kb(a, b);
        var c;
        (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Qb(a) {
        var b = a.length;
        if (b > 0) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Rb(a) {
        a = a.className;
        return typeof a === u && a.match(/\S+/g) || []
    }

    function Sb(a, b) {
        var c = Rb(a);
        Tb(c, Array.prototype.slice.call(arguments, 1));
        a.className = c.join(" ")
    }

    function Ub(a, b) {
        var c = Rb(a);
        c = Vb(c, Array.prototype.slice.call(arguments, 1));
        a.className = c.join(" ")
    }

    function Tb(a, b) {
        for (var c = 0; c < b.length; c++) Nb(a, b[c]) || a.push(b[c])
    }

    function Vb(a, b) {
        return a.filter(function(c) {
            return !Nb(b, c)
        })
    }

    function Wb(a, b, c) {
        for (var d = Rb(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (d.splice(f--, 1), e = !0);
        e && (d.push(c), a.className = d.join(" "))
    }

    function G(a, b) {
        return Nb(Rb(a), b)
    };

    function Xb() {
        throw Error("Unknown format requested type for int64");
    };

    function Yb(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };

    function Zb(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    Zb.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Zb.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Zb.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function $b(a, b) {
        this.width = a;
        this.height = b
    }
    v = $b.prototype;
    v.aspectRatio = function() {
        return this.width / this.height
    };
    v.da = function() {
        return !(this.width * this.height)
    };
    v.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    v.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    v.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function ac(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function bc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function cc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }
    var dc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function ec(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < dc.length; f++) c = dc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var fc = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };

    function gc(a) {
        return {
            valueOf: a
        }.valueOf()
    };
    var hc = globalThis.trustedTypes,
        ic;

    function jc() {
        var a = null;
        if (!hc) return a;
        try {
            var b = function(c) {
                return c
            };
            a = hc.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    }

    function kc() {
        ic === void 0 && (ic = jc());
        return ic
    };

    function lc(a) {
        this.A = a
    }
    lc.prototype.toString = function() {
        return this.A + ""
    };

    function mc(a) {
        var b = kc();
        return new lc(b ? b.createScriptURL(a) : a)
    }

    function nc(a) {
        if (a instanceof lc) return a.A;
        throw Error("");
    };
    var oc = gc(function() {
            return typeof URL === n
        }),
        pc = ["data:", "http:", La, "mailto:", "ftp:"],
        qc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function rc(a) {
        this.A = a
    }
    rc.prototype.toString = function() {
        return this.A + ""
    };

    function sc(a) {
        var b = kc();
        return new rc(b ? b.createHTML(a) : a)
    }

    function tc(a) {
        if (a instanceof rc) return a.A;
        throw Error("");
    };

    function uc(a, b) {
        if (a.nodeType === 1 && /^(script|style)$/i.test(a.tagName)) throw Error("");
        a.innerHTML = tc(b)
    };

    function vc(a) {
        a = a === void 0 ? document : a;
        var b, c;
        a = (c = (b = "document" in a ? a.document : a).querySelector) == null ? void 0 : c.call(b, "script[nonce]");
        return a == null ? "" : a.nonce || a.getAttribute("nonce") || ""
    };

    function wc(a) {
        this.A = a
    }
    wc.prototype.toString = function() {
        return this.A + ""
    };

    function xc(a, b) {
        a.src = nc(b);
        (b = vc(a.ownerDocument && a.ownerDocument.defaultView || window)) && a.setAttribute("nonce", b)
    };
    var yc = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };

    function zc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Ac(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var Bc, Cc;
    a: {
        for (var Dc = ["CLOSURE_FLAGS"], Ec = z, Fc = 0; Fc < Dc.length; Fc++)
            if (Ec = Ec[Dc[Fc]], Ec == null) {
                Cc = null;
                break a
            } Cc = Ec
    }
    var Gc = Cc && Cc[610401301];
    Bc = Gc != null ? Gc : !1;

    function Hc() {
        var a = z.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ic, Jc = z.navigator;
    Ic = Jc ? Jc.userAgentData || null : null;

    function Kc(a) {
        return Bc ? Ic ? Ic.brands.some(function(b) {
            return (b = b.brand) && b.indexOf(a) != -1
        }) : !1 : !1
    }

    function H(a) {
        return Hc().indexOf(a) != -1
    };

    function Lc() {
        return Bc ? !!Ic && Ic.brands.length > 0 : !1
    }

    function Mc() {
        return Lc() ? !1 : H("Trident") || H("MSIE")
    }

    function Nc() {
        return H("Safari") && !(Oc() || (Lc() ? 0 : H("Coast")) || (Lc() ? 0 : H("Opera")) || (Lc() ? 0 : H("Edge")) || (Lc() ? Kc("Microsoft Edge") : H("Edg/")) || (Lc() ? Kc("Opera") : H("OPR")) || H("Firefox") || H("FxiOS") || H("Silk") || H("Android"))
    }

    function Oc() {
        return Lc() ? Kc("Chromium") : (H("Chrome") || H("CriOS")) && !(Lc() ? 0 : H("Edge")) || H("Silk")
    }

    function Pc() {
        return H("Android") && !(Oc() || H("Firefox") || H("FxiOS") || (Lc() ? 0 : H("Opera")) || H("Silk"))
    }

    function Qc() {
        var a = Hc();
        if (Mc()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), c[1] == "7.0")
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
        } else a = "";
        return a
    }

    function Rc() {
        if (Lc()) {
            var a = Ic.brands.find(function(b) {
                return b.brand === "Internet Explorer"
            });
            if (!a || !a.version) return NaN;
            a = a.version.split(".")
        } else {
            a = Qc();
            if (a === "") return NaN;
            a = a.split(".")
        }
        return a.length === 0 ? NaN : Number(a[0])
    };
    var Sc = Mc(),
        Tc = H("Gecko") && !(Hc().toLowerCase().indexOf("webkit") != -1 && !H("Edge")) && !(H("Trident") || H("MSIE")) && !H("Edge"),
        Uc = Hc().toLowerCase().indexOf("webkit") != -1 && !H("Edge");

    function Vc(a) {
        if (a instanceof rc) return a;
        a = Wc(String(a));
        return sc(a)
    }

    function Xc(a) {
        var b = {
            nonce: vc(window)
        };
        if (a instanceof wc) a = a.A;
        else throw Error("");
        a = a.toString();
        var c = "<script";
        if (b == null ? 0 : b.id) c += ' id="' + Wc(b.id) + '"';
        if (b == null ? 0 : b.nonce) c += ' nonce="' + Wc(b.nonce) + '"';
        if (b == null ? 0 : b.type) c += ' type="' + Wc(b.type) + '"';
        if (b == null ? 0 : b.defer) c += " defer";
        return sc(c + (">" + a + "\x3c/script>"))
    }

    function Wc(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function Yc(a) {
        var b = Vc("");
        return sc(a.map(function(c) {
            return tc(Vc(c))
        }).join(tc(b).toString()))
    }
    var Zc = /^[a-z][a-z\d-]*$/i,
        $c = ["APPLET", "BASE", "EMBED", "IFRAME", "LINK", "MATH", "META", "OBJECT", ca, "STYLE", "SVG", "TEMPLATE"],
        ad = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" "),
        bd = ["action", "formaction", "href"];

    function cd(a) {
        var b = {};
        if (!Zc.test("body")) throw Error("");
        if ($c.indexOf("BODY") !== -1) throw Error("");
        var c = "<body";
        b && (c += dd(b));
        Array.isArray(a) || (a = a === void 0 ? [] : [a]);
        ad.indexOf("BODY") !== -1 ? c += ">" : (a = Yc(a.map(function(d) {
            return d instanceof rc ? d : Vc(String(d))
        })), c += ">" + a.toString() + "</body>");
        return sc(c)
    }

    function dd(a) {
        for (var b = "", c = Object.keys(a), d = 0; d < c.length; d++) {
            var e = c[d],
                f = a[e];
            if (!Zc.test(e)) throw Error("");
            if (f !== void 0 && f !== null) {
                if (/^on./i.test(e)) throw Error("");
                bd.indexOf(e.toLowerCase()) !== -1 && (f = String(f), f = qc.test(f) ? f : void 0, f = f || ka);
                e = e + '="' + Vc(String(f)) + '"';
                b += " " + e
            }
        }
        return b
    };

    function ed(a) {
        try {
            return new URL(a, window.document.baseURI)
        } catch (b) {
            return new URL("about:invalid")
        }
    };

    function fd(a, b) {
        var c = b.createRange();
        c.selectNode(b.body);
        a = sc(a);
        return c.createContextualFragment(tc(a))
    };

    function gd(a) {
        a = a.nodeName;
        return typeof a === u ? a : "FORM"
    }

    function hd(a) {
        a = a.nodeType;
        return a === 1 || typeof a !== q
    };

    function id(a, b, c, d) {
        this.D = a;
        this.A = b;
        this.B = c;
        this.C = d
    }

    function jd(a, b) {
        return b !== "FORM" && (a.D.has(b) || a.A.has(b))
    };
    var kd = ["ARTICLE", "SECTION", "NAV", "ASIDE", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "FOOTER", "ADDRESS", "P", "HR", "PRE", "BLOCKQUOTE", "OL", "UL", "LH", "LI", "DL", "DT", "DD", "FIGURE", "FIGCAPTION", "MAIN", "DIV", "EM", "STRONG", "SMALL", "S", "CITE", "Q", "DFN", "ABBR", "RUBY", "RB", "RT", "RTC", "RP", "DATA", "TIME", "CODE", "VAR", "SAMP", "KBD", "SUB", "SUP", "I", "B", "U", "MARK", "BDI", "BDO", da, "BR", "WBR", "NOBR", "INS", "DEL", "PICTURE", "PARAM", "TRACK", "MAP", "TABLE", "CAPTION", "COLGROUP", "COL", "TBODY", "THEAD", "TFOOT", "TR", "TD", "TH", "SELECT",
            "DATALIST", "OPTGROUP", "OPTION", "OUTPUT", "PROGRESS", "METER", "FIELDSET", "LEGEND", "DETAILS", "SUMMARY", "MENU", "DIALOG", "SLOT", "CANVAS", "FONT", "CENTER", "ACRONYM", "BASEFONT", "BIG", "DIR", "HGROUP", "STRIKE", "TT"
        ],
        ld = [
            ["A", new Map([
                ["href", {
                    P: 2
                }]
            ])],
            ["AREA", new Map([
                ["href", {
                    P: 2
                }]
            ])],
            ["LINK", new Map([
                ["href", {
                    P: 5,
                    conditions: new Map([
                        ["rel", new Set(["alternate", "author", "bookmark", "canonical", "cite", "help", "icon", "license", "next", "prefetch", "dns-prefetch", Pa, "preconnect", "preload", "prev", "search", "subresource"])]
                    ])
                }]
            ])],
            ["SOURCE", new Map([
                ["src", {
                    P: 5
                }],
                ["srcset", {
                    P: 6
                }]
            ])],
            ["IMG", new Map([
                ["src", {
                    P: 5
                }],
                ["srcset", {
                    P: 6
                }]
            ])],
            ["VIDEO", new Map([
                ["src", {
                    P: 5
                }]
            ])],
            ["AUDIO", new Map([
                ["src", {
                    P: 5
                }]
            ])]
        ],
        md = ["title", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-current", "aria-disabled", "aria-dropeffect", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-label", "aria-level", "aria-live", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-posinset", "aria-pressed", "aria-readonly",
            "aria-relevant", "aria-required", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "alt", "align", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "autoplay", "bgcolor", "border", "cellpadding", "cellspacing", "checked", "color", "cols", "colspan", "controls", "datetime", "disabled", "download", "draggable", "enctype", "face", "formenctype", "frameborder", "height", "hreflang", Ka, "ismap", "label", "lang", "loop", "max", "maxlength", "media", "minlength", "min",
            "multiple", "muted", "nonce", "open", "placeholder", "preload", "rel", "required", "reversed", "role", "rows", "rowspan", "selected", "shape", "size", "sizes", "slot", "span", "spellcheck", "start", "step", "summary", "translate", "type", "valign", "value", "width", "wrap", "itemscope", "itemtype", "itemid", "itemprop", "itemref"
        ],
        nd = [
            ["dir", {
                P: 3,
                conditions: gc(function() {
                    return new Map([
                        ["dir", new Set(["auto", "ltr", "rtl"])]
                    ])
                })
            }],
            ["async", {
                P: 3,
                conditions: gc(function() {
                    return new Map([
                        ["async", new Set(["async"])]
                    ])
                })
            }],
            ["cite", {
                P: 2
            }],
            ["loading", {
                P: 3,
                conditions: gc(function() {
                    return new Map([
                        ["loading", new Set(["eager", "lazy"])]
                    ])
                })
            }],
            ["poster", {
                P: 2
            }],
            ["target", {
                P: 3,
                conditions: gc(function() {
                    return new Map([
                        ["target", new Set(["_self", "_blank"])]
                    ])
                })
            }]
        ],
        od = new id(new Set(kd), new Map(ld), new Set(md), new Map(nd)),
        pd = new id(new Set(kd.concat(["BUTTON", "INPUT"])), new Map(ld), new Set(gc(function() {
            return md.concat(["class", "id", "name"])
        })), new Map(gc(function() {
            return nd.concat([
                ["style", {
                    P: 1
                }]
            ])
        })));

    function qd(a, b, c, d) {
        this.B = a;
        this.D = b;
        this.C = c;
        this.A = d;
        this.changes = []
    }

    function rd(a, b) {
        var c = document.implementation.createHTMLDocument("");
        a = sd(a, b, c);
        c = c.body;
        c.appendChild(a);
        c = (new XMLSerializer).serializeToString(c);
        c = c.slice(c.indexOf(">") + 1, c.lastIndexOf("</"));
        return sc(c)
    }

    function sd(a, b, c) {
        b = fd(b, c);
        b = document.createTreeWalker(b, 5, function(h) {
            h.nodeType === 3 ? h = 1 : hd(h) ? (h = gd(h), h = h === null ? 2 : jd(a.B, h) ? 1 : 2) : h = 2;
            return h
        });
        for (var d = b.nextNode(), e = c.createDocumentFragment(), f = e; d !== null;) {
            var g = void 0;
            if (d.nodeType === 3) a.D && f.nodeName === "STYLE" ? (d = a.D(d.data), g = document.createTextNode(d)) : g = document.createTextNode(d.data);
            else if (hd(d)) g = td(a, d, c);
            else throw Error("");
            f.appendChild(g);
            if (d = b.firstChild()) f = g;
            else
                for (; !(d = b.nextSibling()) && (d = b.parentNode());) f = f.parentNode
        }
        return e
    }

    function td(a, b, c) {
        var d = gd(b);
        c = c.createElement(d);
        b = b.attributes;
        for (var e = x(b), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            f = g.name;
            g = g.value;
            var h = a.B;
            var k = h.A.get(d);
            h = (k == null ? 0 : k.has(f)) ? k.get(f) : h.B.has(f) ? {
                P: 1
            } : (h = h.C.get(f)) ? h : {
                P: 0
            };
            a: {
                if (k = h.conditions) {
                    k = x(k);
                    for (var m = k.next(); !m.done; m = k.next()) {
                        var r = x(m.value);
                        m = r.next().value;
                        r = r.next().value;
                        var B = void 0;
                        if ((m = (B = b.getNamedItem(m)) == null ? void 0 : B.value) && !r.has(m)) {
                            k = !1;
                            break a
                        }
                    }
                }
                k = !0
            }
            if (k) switch (h.P) {
                case 1:
                    ud(c, f, g);
                    break;
                case 2:
                    a: if (h =
                        void 0, oc) {
                        try {
                            h = new URL(g)
                        } catch (C) {
                            h = La;
                            break a
                        }
                        h = h.protocol
                    } else b: {
                        h = document.createElement("a");
                        try {
                            h.href = g
                        } catch (C) {
                            h = void 0;
                            break b
                        }
                        h = h.protocol;h = h === ":" || h === "" ? La : h
                    }
                    ud(c, f, h !== void 0 && pc.indexOf(h.toLowerCase()) !== -1 ? g : ka);
                    break;
                case 3:
                    ud(c, f, g.toLowerCase());
                    break;
                case 4:
                    a.C ? (g = a.C(g), ud(c, f, g)) : ud(c, f, g);
                    break;
                case 5:
                    a.A ? (h = {
                        type: 2,
                        attributeName: f,
                        ed: d
                    }, g = ed(g), (g = a.A(g, h)) && ud(c, f, g.toString())) : ud(c, f, g);
                    break;
                case 6:
                    if (a.A) {
                        h = {
                            type: 2,
                            attributeName: f,
                            ed: d
                        };
                        k = [];
                        g = x(g.split(","));
                        for (m =
                            g.next(); !m.done; m = g.next()) r = x(m.value.trim().split(/\s+/, 2)), m = r.next().value, r = r.next().value, k.push({
                            url: m,
                            tb: r
                        });
                        g = {
                            Yb: []
                        };
                        k = x(k);
                        for (m = k.next(); !m.done; m = k.next()) m = m.value, r = ed(m.url), (r = a.A(r, h)) && g.Yb.push({
                            url: r.toString(),
                            tb: m.tb
                        });
                        ud(c, f, vd(g))
                    } else ud(c, f, g)
            }
        }
        return c
    }

    function ud(a, b, c) {
        a.setAttribute(b, c)
    }

    function vd(a) {
        return a.Yb.map(function(b) {
            var c = b.tb;
            return "" + b.url + (c ? " " + c : "")
        }).join(" , ")
    }
    var wd = gc(function() {
            return new qd(od)
        }),
        xd = gc(function() {
            return new qd(pd)
        });

    function yd() {
        this.B = !1;
        this.A = od
    }

    function zd() {
        yd.apply(this, arguments)
    }
    y(zd, yd);

    function Ad(a, b, c, d) {
        function e(g, h) {
            g != null && (Array.isArray(g) ? g.forEach(function(k) {
                return e(k, h)
            }) : (b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g), f = "&"))
        }
        var f = b.length ? "&" : "?";
        d.constructor === Object && (d = Object.entries(d));
        Array.isArray(d) ? d.forEach(function(g) {
            return e(g[1], g[0])
        }) : d.forEach(e);
        return mc(a + b + c)
    };

    function I(a) {
        return Bd(document, a)
    }

    function Bd(a, b) {
        return typeof b === u ? a.getElementById(b) : b
    }

    function Cd(a, b) {
        var c = b || document;
        c.getElementsByClassName ? a = c.getElementsByClassName(a)[0] : (c = document, a = a ? (b || c).querySelector(a ? "." + a : "") : Dd(c, "*", a, b)[0] || null);
        return a || null
    }

    function Dd(a, b, c, d) {
        a = d || a;
        return (b = b && b != "*" ? String(b).toUpperCase() : "") || c ? a.querySelectorAll(b + (c ? "." + c : "")) : a.getElementsByTagName("*")
    }

    function Ed(a, b) {
        ac(b, function(c, d) {
            d == "style" ? a.style.cssText = c : d == "class" ? a.className = c : d == "for" ? a.htmlFor = c : Fd.hasOwnProperty(d) ? a.setAttribute(Fd[d], c) : d.lastIndexOf("aria-", 0) == 0 || d.lastIndexOf("data-", 0) == 0 ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var Fd = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Gd(a, b, c) {
        return Hd(document, arguments)
    }

    function Hd(a, b) {
        var c = b[1],
            d = Id(a, String(b[0]));
        c && (typeof c === u ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : Ed(d, c));
        b.length > 2 && Jd(a, d, b, 2);
        return d
    }

    function Jd(a, b, c, d) {
        function e(h) {
            h && b.appendChild(typeof h === u ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!Cb(f) || Db(f) && f.nodeType > 0) e(f);
            else {
                a: {
                    if (f && typeof f.length == q) {
                        if (Db(f)) {
                            var g = typeof f.item == n || typeof f.item == u;
                            break a
                        }
                        if (typeof f === n) {
                            g = typeof f.item == n;
                            break a
                        }
                    }
                    g = !1
                }
                Lb(g ? Qb(f) : f, e)
            }
        }
    }

    function Id(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Kd(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function Ld(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function Md(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (a.nodeType == 3) a.data = String(b);
        else if (a.firstChild && a.firstChild.nodeType == 3) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else Kd(a), a.appendChild((a.nodeType == 9 ? a : a.ownerDocument || a.document).createTextNode(String(b)))
    }
    var Nd = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Od = {
            IMG: " ",
            BR: "\n"
        };

    function Qd(a, b, c) {
        if (!(a.nodeName in Nd))
            if (a.nodeType == 3) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Od) b.push(Od[a.nodeName]);
        else
            for (a = a.firstChild; a;) Qd(a, b, c), a = a.nextSibling
    }

    function Rd(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return Sd(a, function(e) {
            return (!d || e.nodeName == d) && (!c || typeof e.className === u && Nb(e.className.split(/\s+/), c))
        })
    }

    function Sd(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Td(a) {
        this.B = a || z.document || document
    }
    Td.prototype.Ra = function() {
        return Bd(this.B)
    };
    Td.prototype.A = function(a, b, c) {
        return Hd(this.B, arguments)
    };

    function Ud(a, b) {
        return Id(a.B, b)
    }
    Td.prototype.append = function(a, b) {
        Jd(a.nodeType == 9 ? a : a.ownerDocument || a.document, a, arguments, 1)
    };

    function Vd() {
        this.J = this.J;
        this.S = this.S
    }
    Vd.prototype.J = !1;
    Vd.prototype.isDisposed = function() {
        return this.J
    };
    Vd.prototype.dispose = function() {
        this.J || (this.J = !0, this.R())
    };
    Vd.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    Vd.prototype.R = function() {
        if (this.S)
            for (; this.S.length;) this.S.shift()()
    };

    function Wd(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Ea = !1
    }
    Wd.prototype.stopPropagation = function() {
        this.Ea = !0
    };
    Wd.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var Xd = function() {
        if (!z.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            var c = function() {};
            z.addEventListener("test", c, b);
            z.removeEventListener("test", c, b)
        } catch (d) {}
        return a
    }();

    function Yd(a, b) {
        Wd.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.timeStamp = 0;
        this.A = null;
        a && this.init(a, b)
    }
    F(Yd, Wd);
    Yd.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        b = a.relatedTarget;
        b || (c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement));
        this.relatedTarget = b;
        d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.offsetX = Uc || a.offsetX !== void 0 ? a.offsetX : a.layerX, this.offsetY =
            Uc || a.offsetY !== void 0 ? a.offsetY : a.layerY, this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = a.pointerType;
        this.state = a.state;
        this.timeStamp =
            a.timeStamp;
        this.A = a;
        a.defaultPrevented && Yd.L.preventDefault.call(this)
    };
    Yd.prototype.stopPropagation = function() {
        Yd.L.stopPropagation.call(this);
        this.A.stopPropagation ? this.A.stopPropagation() : this.A.cancelBubble = !0
    };
    Yd.prototype.preventDefault = function() {
        Yd.L.preventDefault.call(this);
        var a = this.A;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var Zd = "closure_listenable_" + (Math.random() * 1E6 | 0);

    function $d(a) {
        return !(!a || !a[Zd])
    };
    var ae = 0;

    function be(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Va = e;
        this.key = ++ae;
        this.Fa = this.Na = !1
    }

    function ce(a) {
        a.Fa = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Va = null
    };

    function de(a) {
        this.src = a;
        this.A = {};
        this.B = 0
    }
    de.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.A[f];
        a || (a = this.A[f] = [], this.B++);
        var g = ee(a, b, d, e);
        g > -1 ? (b = a[g], c || (b.Na = !1)) : (b = new be(b, this.src, f, !!d, e), b.Na = c, a.push(b));
        return b
    };

    function fe(a, b) {
        var c = b.type;
        if (!(c in a.A)) return !1;
        var d = Pb(a.A[c], b);
        d && (ce(b), a.A[c].length == 0 && (delete a.A[c], a.B--));
        return d
    }

    function ge(a) {
        var b = 0,
            c;
        for (c in a.A) {
            for (var d = a.A[c], e = 0; e < d.length; e++) ++b, ce(d[e]);
            delete a.A[c];
            a.B--
        }
    }

    function he(a, b, c, d, e) {
        a = a.A[b.toString()];
        b = -1;
        a && (b = ee(a, c, d, e));
        return b > -1 ? a[b] : null
    }

    function ee(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Fa && f.listener == b && f.capture == !!c && f.Va == d) return e
        }
        return -1
    };
    var ie = "closure_lm_" + (Math.random() * 1E6 | 0),
        je = {},
        ke = 0;

    function le(a, b, c, d, e) {
        if (d && d.once) return me(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) le(a, b[f], c, d, e);
            return null
        }
        c = ne(c);
        return $d(a) ? a.Y.add(String(b), c, !1, Db(d) ? !!d.capture : !!d, e) : oe(a, b, c, !1, d, e)
    }

    function oe(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = Db(e) ? !!e.capture : !!e,
            h = pe(a);
        h || (a[ie] = h = new de(a));
        c = h.add(b, c, d, g, f);
        if (c.proxy) return c;
        d = qe();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Xd || (e = g), e === void 0 && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(re(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        ke++;
        return c
    }

    function qe() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        var b = se;
        return a
    }

    function me(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) me(a, b[f], c, d, e);
            return null
        }
        c = ne(c);
        return $d(a) ? a.Y.add(String(b), c, !0, Db(d) ? !!d.capture : !!d, e) : oe(a, b, c, !0, d, e)
    }

    function te(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) te(a, b[f], c, d, e);
        else d = Db(d) ? !!d.capture : !!d, c = ne(c), $d(a) ? (a = a.Y, b = String(b).toString(), b in a.A && (f = a.A[b], c = ee(f, c, d, e), c > -1 && (ce(f[c]), Array.prototype.splice.call(f, c, 1), f.length == 0 && (delete a.A[b], a.B--)))) : a && (a = pe(a)) && (c = he(a, b, c, d, e)) && ue(c)
    }

    function ue(a) {
        if (typeof a === q || !a || a.Fa) return !1;
        var b = a.src;
        if ($d(b)) return fe(b.Y, a);
        var c = a.type,
            d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(re(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        ke--;
        (c = pe(b)) ? (fe(c, a), c.B == 0 && (c.src = null, b[ie] = null)) : ce(a);
        return !0
    }

    function re(a) {
        return a in je ? je[a] : je[a] = "on" + a
    }

    function se(a, b) {
        if (a.Fa) a = !0;
        else {
            b = new Yd(b, this);
            var c = a.listener,
                d = a.Va || a.src;
            a.Na && ue(a);
            a = c.call(d, b)
        }
        return a
    }

    function pe(a) {
        a = a[ie];
        return a instanceof de ? a : null
    }
    var ve = "__closure_events_fn_" + (Math.random() * 1E9 >>> 0);

    function ne(a) {
        if (typeof a === n) return a;
        a[ve] || (a[ve] = function(b) {
            return a.handleEvent(b)
        });
        return a[ve]
    };

    function we(a) {
        Vd.call(this);
        this.B = a;
        this.A = {}
    }
    F(we, Vd);
    var xe = [];

    function ye(a, b, c, d) {
        Array.isArray(c) || (c && (xe[0] = c.toString()), c = xe);
        for (var e = 0; e < c.length; e++) {
            var f = le(b, c[e], d || a.handleEvent, !1, a.B || a);
            if (!f) break;
            a.A[f.key] = f
        }
    }

    function ze(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++) ze(a, b, c[g], d, e, f);
        else d = d || a.handleEvent, e = Db(e) ? !!e.capture : !!e, f = f || a.B || a, d = ne(d), e = !!e, c = $d(b) ? he(b.Y, String(c), d, e, f) : b ? (b = pe(b)) ? he(b, c, d, e, f) : null : null, c && (ue(c), delete a.A[c.key])
    }

    function Ae(a) {
        ac(a.A, function(b, c) {
            this.A.hasOwnProperty(c) && ue(b)
        }, a);
        a.A = {}
    }
    we.prototype.R = function() {
        we.L.R.call(this);
        Ae(this)
    };
    we.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function Be() {
        Vd.call(this);
        this.Y = new de(this);
        this.Tc = this;
        this.wa = null
    }
    F(Be, Vd);
    Be.prototype[Zd] = !0;
    Be.prototype.addEventListener = function(a, b, c, d) {
        le(this, a, b, c, d)
    };
    Be.prototype.removeEventListener = function(a, b, c, d) {
        te(this, a, b, c, d)
    };

    function J(a, b) {
        var c = a.wa;
        if (c) {
            var d = [];
            for (var e = 1; c; c = c.wa) d.push(c), ++e
        }
        a = a.Tc;
        c = b.type || b;
        typeof b === u ? b = new Wd(b, a) : b instanceof Wd ? b.target = b.target || a : (e = b, b = new Wd(c, a), ec(b, e));
        e = !0;
        if (d)
            for (var f = d.length - 1; !b.Ea && f >= 0; f--) {
                var g = b.currentTarget = d[f];
                e = Ce(g, c, !0, b) && e
            }
        b.Ea || (g = b.currentTarget = a, e = Ce(g, c, !0, b) && e, b.Ea || (e = Ce(g, c, !1, b) && e));
        if (d)
            for (f = 0; !b.Ea && f < d.length; f++) g = b.currentTarget = d[f], e = Ce(g, c, !1, b) && e
    }
    Be.prototype.R = function() {
        Be.L.R.call(this);
        this.Y && ge(this.Y);
        this.wa = null
    };

    function Ce(a, b, c, d) {
        b = a.Y.A[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Fa && g.capture == c) {
                var h = g.listener,
                    k = g.Va || g.src;
                g.Na && fe(a.Y, g);
                e = h.call(k, d) !== !1 && e
            }
        }
        return e && !d.defaultPrevented
    };

    function De() {
        this.G = {};
        this.A = {};
        this.C = {};
        this.D = null;
        this.B = []
    }
    Ab(De);

    function Ee(a) {
        var b = De.Sa(),
            c = b.G,
            d = b.A;
        d.lightbox ? a(d.lightbox[1]) : c.lightbox ? c.lightbox.push([1, a]) : (c.lightbox = [
            [1, a]
        ], typeof b.D === u ? Fe(b, "lightbox") : b.B.push("lightbox"))
    }

    function Ge() {
        return function() {
            var a = arguments;
            Ee(function(b) {
                b.apply(null, a)
            })
        }
    }
    De.prototype.H = function(a, b) {
        return a + "_" + b + ".js"
    };

    function He(a) {
        eval(a)
    }
    De.prototype.init = function(a, b) {
        E("__gjsload__", He);
        this.D = a.replace(/\.js$/, "");
        b && (this.H = b);
        this.B.forEach(function(c) {
            Fe(this, c)
        }, this);
        Ob(this.B)
    };

    function Fe(a, b) {
        setTimeout(function() {
            if (!this.A[b]) {
                var c = this.H(this.D, b);
                a: {
                    var d = this.C;
                    for (var e in d)
                        if (d[e] == c) {
                            d = !0;
                            break a
                        } d = !1
                }
                this.C[b] = c;
                d || (d = Gd(ca, {
                    type: Va
                }), c = mc(c === null ? "null" : c === void 0 ? "undefined" : c), xc(d, c), document.body.appendChild(d))
            }
        }.bind(a), 0)
    };

    function Ie(a) {
        try {
            return z.JSON.parse(a)
        } catch (b) {}
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    };

    function Je() {}
    Je.prototype.A = null;

    function Ke(a) {
        var b;
        (b = a.A) || (b = a.A = {});
        return b
    };
    var Le;

    function Me() {}
    F(Me, Je);
    Le = new Me;
    var Ne = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Oe(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (d >= 0) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    };

    function Pe(a) {
        Be.call(this);
        this.headers = new Map;
        this.Aa = a || null;
        this.C = !1;
        this.T = this.A = null;
        this.va = "";
        this.G = 0;
        this.D = this.ja = this.M = this.aa = !1;
        this.W = 0;
        this.O = null;
        this.I = "";
        this.H = !1
    }
    F(Pe, Be);
    var Qe = /^https?$/i,
        Re = ["POST", "PUT"],
        Se = [];

    function Te(a, b, c, d) {
        var e = new Pe;
        Se.push(e);
        b && e.Y.add(ua, b, !1, void 0, void 0);
        e.Y.add(Qa, e.ad, !0, void 0, void 0);
        Ue(e, a, c, d)
    }
    v = Pe.prototype;
    v.ad = function() {
        this.dispose();
        Pb(Se, this)
    };
    v.Sb = function() {
        return this.I
    };
    v.Tb = function() {
        return this.H
    };

    function Ue(a, b, c, d, e) {
        if (a.A) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.va + "; newUri=" + b);
        c = c ? c.toUpperCase() : "GET";
        a.va = b;
        a.G = 0;
        a.aa = !1;
        a.C = !0;
        a.A = new XMLHttpRequest;
        a.T = a.Aa ? Ke(a.Aa) : Ke(Le);
        a.A.onreadystatechange = A(a.Vb, a);
        try {
            a.ja = !0, a.A.open(c, String(b), !0), a.ja = !1
        } catch (h) {
            Ve(a);
            return
        }
        b = d || "";
        d = new Map(a.headers);
        if (e)
            if (Object.getPrototypeOf(e) === Object.prototype)
                for (var f in e) d.set(f, e[f]);
            else if (typeof e.keys === n && typeof e.get === n) {
            f = x(e.keys());
            for (var g =
                    f.next(); !g.done; g = f.next()) g = g.value, d.set(g, e.get(g))
        } else throw Error("Unknown input type for opt_headers: " + String(e));
        e = Array.from(d.keys()).find(function(h) {
            return "content-type" == h.toLowerCase()
        });
        f = z.FormData && b instanceof z.FormData;
        !Nb(Re, c) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        c = x(d);
        for (e = c.next(); !e.done; e = c.next()) d = x(e.value), e = d.next().value, d = d.next().value, a.A.setRequestHeader(e, d);
        a.I && (a.A.responseType = a.I);
        "withCredentials" in a.A && a.A.withCredentials !==
            a.H && (a.A.withCredentials = a.H);
        try {
            We(a), a.W > 0 && (a.O = setTimeout(a.sa.bind(a), a.W)), a.M = !0, a.A.send(b), a.M = !1
        } catch (h) {
            Ve(a)
        }
    }
    v.sa = function() {
        typeof zb != "undefined" && this.A && (this.G = 8, J(this, "timeout"), this.abort(8))
    };

    function Ve(a) {
        a.C = !1;
        a.A && (a.D = !0, a.A.abort(), a.D = !1);
        a.G = 5;
        Xe(a);
        Ye(a)
    }

    function Xe(a) {
        a.aa || (a.aa = !0, J(a, ua), J(a, Ia))
    }
    v.abort = function(a) {
        this.A && this.C && (this.C = !1, this.D = !0, this.A.abort(), this.D = !1, this.G = a || 7, J(this, ua), J(this, "abort"), Ye(this))
    };
    v.R = function() {
        this.A && (this.C && (this.C = !1, this.D = !0, this.A.abort(), this.D = !1), Ye(this, !0));
        Pe.L.R.call(this)
    };
    v.Vb = function() {
        this.isDisposed() || (this.ja || this.M || this.D ? Ze(this) : this.sd())
    };
    v.sd = function() {
        Ze(this)
    };

    function Ze(a) {
        if (a.C && typeof zb != "undefined" && (!a.T[1] || (a.A ? a.A.readyState : 0) != 4 || $e(a) != 2))
            if (a.M && (a.A ? a.A.readyState : 0) == 4) setTimeout(a.Vb.bind(a), 0);
            else if (J(a, "readystatechange"), (a.A ? a.A.readyState : 0) == 4) {
            a.C = !1;
            try {
                af(a) ? (J(a, ua), J(a, Ua)) : (a.G = 6, Xe(a))
            } finally {
                Ye(a)
            }
        }
    }

    function Ye(a, b) {
        if (a.A) {
            We(a);
            var c = a.A,
                d = a.T[0] ? function() {} : null;
            a.A = null;
            a.T = null;
            b || J(a, Qa);
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }

    function We(a) {
        a.O && (clearTimeout(a.O), a.O = null)
    }
    v.isActive = function() {
        return !!this.A
    };

    function af(a) {
        var b = $e(a);
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = b === 0) a = String(a.va).match(Ne)[1] || null, !a && z.self && z.self.location && (a = z.self.location.protocol.slice(0, -1)), b = !Qe.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }

    function $e(a) {
        try {
            return (a.A ? a.A.readyState : 0) > 2 ? a.A.status : -1
        } catch (b) {
            return -1
        }
    }

    function bf(a) {
        try {
            return a.A ? a.A.responseText : ""
        } catch (b) {
            return ""
        }
    };

    function cf(a, b) {
        this.A = a[z.Symbol.iterator]();
        this.B = b
    }
    cf.prototype[Symbol.iterator] = function() {
        return this
    };
    cf.prototype.next = function() {
        var a = this.A.next();
        return {
            value: a.done ? void 0 : this.B.call(void 0, a.value),
            done: a.done
        }
    };

    function df(a, b) {
        return new cf(a, b)
    };

    function ef(a) {
        return function() {
            return a
        }
    }

    function ff() {};

    function gf() {}
    gf.prototype.next = function() {
        return hf
    };
    var hf = {
        done: !0,
        value: void 0
    };
    gf.prototype.ka = function() {
        return this
    };

    function jf(a) {
        if (a instanceof kf || a instanceof lf || a instanceof mf) return a;
        if (typeof a.next == n) return new kf(function() {
            return a
        });
        if (typeof a[Symbol.iterator] == n) return new kf(function() {
            return a[Symbol.iterator]()
        });
        if (typeof a.ka == n) return new kf(function() {
            return a.ka()
        });
        throw Error("Not an iterator or iterable.");
    }

    function kf(a) {
        this.A = a
    }
    kf.prototype.ka = function() {
        return new lf(this.A())
    };
    kf.prototype[Symbol.iterator] = function() {
        return new mf(this.A())
    };
    kf.prototype.B = function() {
        return new mf(this.A())
    };

    function lf(a) {
        this.A = a
    }
    y(lf, gf);
    lf.prototype.next = function() {
        return this.A.next()
    };
    lf.prototype[Symbol.iterator] = function() {
        return new mf(this.A)
    };
    lf.prototype.B = function() {
        return new mf(this.A)
    };

    function mf(a) {
        kf.call(this, function() {
            return a
        });
        this.C = a
    }
    y(mf, kf);
    mf.prototype.next = function() {
        return this.C.next()
    };

    function nf() {
        this.B = [];
        this.A = []
    }

    function of(a) {
        a.B.length === 0 && (a.B = a.A, a.B.reverse(), a.A = []);
        return a.B.pop()
    }
    nf.prototype.N = function() {
        return this.B.length + this.A.length
    };
    nf.prototype.da = function() {
        return this.B.length === 0 && this.A.length === 0
    };
    nf.prototype.clear = function() {
        this.B = [];
        this.A = []
    };
    nf.prototype.V = function() {
        for (var a = [], b = this.B.length - 1; b >= 0; --b) a.push(this.B[b]);
        var c = this.A.length;
        for (b = 0; b < c; ++b) a.push(this.A[b]);
        return a
    };

    function pf(a, b) {
        this.B = {};
        this.A = [];
        this.C = this.size = 0;
        var c = arguments.length;
        if (c > 1) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof pf)
                for (c = a.ga(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    v = pf.prototype;
    v.N = function() {
        return this.size
    };
    v.V = function() {
        qf(this);
        for (var a = [], b = 0; b < this.A.length; b++) a.push(this.B[this.A[b]]);
        return a
    };
    v.ga = function() {
        qf(this);
        return this.A.concat()
    };
    v.has = function(a) {
        return rf(this.B, a)
    };
    v.da = function() {
        return this.size == 0
    };
    v.clear = function() {
        this.B = {};
        this.C = this.size = this.A.length = 0
    };
    v.delete = function(a) {
        return rf(this.B, a) ? (delete this.B[a], --this.size, this.C++, this.A.length > 2 * this.size && qf(this), !0) : !1
    };

    function qf(a) {
        if (a.size != a.A.length) {
            for (var b = 0, c = 0; b < a.A.length;) {
                var d = a.A[b];
                rf(a.B, d) && (a.A[c++] = d);
                b++
            }
            a.A.length = c
        }
        if (a.size != a.A.length) {
            var e = {};
            for (c = b = 0; b < a.A.length;) d = a.A[b], rf(e, d) || (a.A[c++] = d, e[d] = 1), b++;
            a.A.length = c
        }
    }
    v.get = function(a, b) {
        return rf(this.B, a) ? this.B[a] : b
    };
    v.set = function(a, b) {
        rf(this.B, a) || (this.size += 1, this.A.push(a), this.C++);
        this.B[a] = b
    };
    v.forEach = function(a, b) {
        for (var c = this.ga(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    v.keys = function() {
        return jf(this.ka(!0)).B()
    };
    v.values = function() {
        return jf(this.ka(!1)).B()
    };
    v.entries = function() {
        var a = this;
        return df(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    v.ka = function(a) {
        qf(this);
        var b = 0,
            c = this.C,
            d = this,
            e = new gf;
        e.next = function() {
            if (c != d.C) throw Error("The map has changed since the iterator was created");
            if (b >= d.A.length) return hf;
            var f = d.A[b++];
            return {
                value: a ? f : d.B[f],
                done: !1
            }
        };
        return e
    };

    function rf(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function sf(a) {
        if (a.V && typeof a.V == n) return a.V();
        if (typeof Map !== "undefined" && a instanceof Map || typeof Set !== "undefined" && a instanceof Set) return Array.from(a.values());
        if (typeof a === u) return a.split("");
        if (Cb(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return bc(a)
    }

    function tf(a) {
        if (a.ga && typeof a.ga == n) return a.ga();
        if (!a.V || typeof a.V != n) {
            if (typeof Map !== "undefined" && a instanceof Map) return Array.from(a.keys());
            if (!(typeof Set !== "undefined" && a instanceof Set)) {
                if (Cb(a) || typeof a === u) {
                    var b = [];
                    a = a.length;
                    for (var c = 0; c < a; c++) b.push(c);
                    return b
                }
                return cc(a)
            }
        }
    }

    function uf(a, b, c) {
        if (a.forEach && typeof a.forEach == n) a.forEach(b, c);
        else if (Cb(a) || typeof a === u) Array.prototype.forEach.call(a, b, c);
        else
            for (var d = tf(a), e = sf(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
    };

    function vf() {
        this.A = new pf;
        this.size = 0
    }

    function wf(a) {
        var b = typeof a;
        return b == t && a || b == n ? "o" + (Object.prototype.hasOwnProperty.call(a, Eb) && a[Eb] || (a[Eb] = ++Fb)) : b.slice(0, 1) + a
    }
    v = vf.prototype;
    v.N = function() {
        return this.A.size
    };
    v.add = function(a) {
        this.A.set(wf(a), a);
        this.size = this.A.size
    };
    v.delete = function(a) {
        var b = this.A;
        a = wf(a);
        b = b.delete(a);
        this.size = this.A.size;
        return b
    };
    v.clear = function() {
        this.A.clear();
        this.size = 0
    };
    v.da = function() {
        return this.A.size === 0
    };
    v.has = function(a) {
        var b = this.A;
        a = wf(a);
        return b.has(a)
    };
    v.V = function() {
        return this.A.V()
    };
    v.values = function() {
        return this.A.values()
    };
    v.ka = function() {
        return this.A.ka(!1)
    };
    vf.prototype[Symbol.iterator] = function() {
        return this.values()
    };

    function xf(a, b) {
        Vd.call(this);
        this.I = a || 0;
        this.C = b || 10;
        if (this.I > this.C) throw Error("[goog.structs.Pool] Min can not be greater than max");
        this.A = new nf;
        this.B = new vf;
        this.delay = 0;
        this.G = null;
        this.La()
    }
    F(xf, Vd);
    v = xf.prototype;
    v.Ta = function() {
        var a = Date.now();
        if (!(this.G != null && a - this.G < this.delay)) {
            for (var b; this.A.N() > 0 && (b = of(this.A), !this.ub(b));) this.La();
            !b && this.N() < this.C && (b = this.rb());
            b && (this.G = a, this.B.add(b));
            return b
        }
    };
    v.Ba = function(a) {
        this.B.delete(a);
        this.ub(a) && this.N() < this.C ? this.A.A.push(a) : yf(a)
    };
    v.La = function() {
        for (var a = this.A; this.N() < this.I;) {
            var b = a,
                c = this.rb();
            b.A.push(c)
        }
        for (; this.N() > this.C && this.A.N() > 0;) yf(of(a))
    };
    v.rb = function() {
        return {}
    };

    function yf(a) {
        if (typeof a.dispose == n) a.dispose();
        else
            for (var b in a) a[b] = null
    }
    v.ub = function(a) {
        return typeof a.Zc == n ? a.Zc() : !0
    };
    v.N = function() {
        return this.A.N() + this.B.N()
    };
    v.da = function() {
        return this.A.da() && this.B.da()
    };
    v.R = function() {
        xf.L.R.call(this);
        if (this.B.N() > 0) throw Error("[goog.structs.Pool] Objects not released");
        delete this.B;
        for (var a = this.A; !a.da();) yf(of(a));
        delete this.A
    };

    function zf(a, b) {
        this.A = a;
        this.B = b
    };

    function Af(a) {
        this.A = [];
        if (a) a: {
            if (a instanceof Af) {
                var b = a.ga();
                a = a.V();
                if (this.N() <= 0) {
                    for (var c = this.A, d = 0; d < b.length; d++) c.push(new zf(b[d], a[d]));
                    break a
                }
            } else b = cc(a),
            a = bc(a);
            for (c = 0; c < b.length; c++) this.insert(b[c], a[c])
        }
    }
    v = Af.prototype;
    v.insert = function(a, b) {
        var c = this.A;
        c.push(new zf(a, b));
        a = c.length - 1;
        b = this.A;
        for (c = b[a]; a > 0;) {
            var d = a - 1 >> 1;
            if (b[d].A > c.A) b[a] = b[d], a = d;
            else break
        }
        b[a] = c
    };
    v.V = function() {
        for (var a = this.A, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].B);
        return b
    };
    v.ga = function() {
        for (var a = this.A, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].A);
        return b
    };
    v.N = function() {
        return this.A.length
    };
    v.da = function() {
        return this.A.length === 0
    };
    v.clear = function() {
        this.A.length = 0
    };

    function Bf() {
        Af.apply(this, arguments)
    }
    y(Bf, Af);

    function Cf(a, b) {
        this.H = void 0;
        this.D = new Bf;
        xf.call(this, a, b)
    }
    F(Cf, xf);
    v = Cf.prototype;
    v.Ta = function(a, b) {
        if (!a) return (a = Cf.L.Ta.call(this)) && this.delay && (this.H = z.setTimeout(A(this.Ua, this), this.delay)), a;
        this.D.insert(b !== void 0 ? b : 100, a);
        this.Ua()
    };
    v.Ua = function() {
        for (var a = this.D; a.N() > 0;) {
            var b = this.Ta();
            if (b) {
                var c = a,
                    d = c.A,
                    e = d.length;
                var f = d[0];
                if (e <= 0) f = void 0;
                else {
                    if (e == 1) d.length = 0;
                    else {
                        d[0] = d.pop();
                        d = 0;
                        c = c.A;
                        e = c.length;
                        for (var g = c[d]; d < e >> 1;) {
                            var h = d * 2 + 1,
                                k = d * 2 + 2;
                            h = k < e && c[k].A < c[h].A ? k : h;
                            if (c[h].A > g.A) break;
                            c[d] = c[h];
                            d = h
                        }
                        c[d] = g
                    }
                    f = f.B
                }
                f.apply(this, [b])
            } else break
        }
    };
    v.Ba = function(a) {
        Cf.L.Ba.call(this, a);
        this.Ua()
    };
    v.La = function() {
        Cf.L.La.call(this);
        this.Ua()
    };
    v.R = function() {
        Cf.L.R.call(this);
        z.clearTimeout(this.H);
        this.D.clear();
        this.D = null
    };

    function Df(a, b, c, d) {
        this.M = a;
        this.O = !!d;
        Cf.call(this, b, c)
    }
    F(Df, Cf);
    Df.prototype.rb = function() {
        var a = new Pe,
            b = this.M;
        b && b.forEach(function(c, d) {
            a.headers.set(d, c)
        });
        this.O && (a.H = !0);
        return a
    };
    Df.prototype.ub = function(a) {
        return !a.isDisposed() && !a.isActive()
    };

    function Ef(a, b, c, d, e, f) {
        Be.call(this);
        this.D = a !== void 0 ? a : 1;
        this.G = e !== void 0 ? Math.max(0, e) : 0;
        this.H = !!f;
        this.B = new Df(b, c, d, f);
        this.A = new pf;
        this.C = new we(this)
    }
    F(Ef, Be);
    var Ff = [Qa, ua, Ua, Ia, "abort", "timeout"];

    function Gf(a, b, c, d, e, f) {
        if (a.A.get(b)) throw Error("[goog.net.XhrManager] ID in use");
        c = new Hf(c, A(a.M, a, b), d, e, f, a.D, a.H);
        a.A.set(b, c);
        b = A(a.I, a, b);
        a.B.Ta(b, null)
    }
    Ef.prototype.abort = function(a, b) {
        var c = this.A.get(a);
        if (c) {
            var d = c.Ya;
            c.Ib = !0;
            b && (d && (ze(this.C, d, Ff, c.yb), me(d, Qa, function() {
                var e = this.B;
                e.B.delete(d) && e.Ba(d)
            }, !1, this)), this.A.delete(a));
            d && d.abort()
        }
    };
    Ef.prototype.I = function(a, b) {
        var c = this.A.get(a);
        c && !c.Ya ? (ye(this.C, b, Ff, c.yb), b.W = Math.max(0, this.G), b.I = c.Sb(), b.H = c.Tb(), c.Ya = b, J(this, new If(Qa, this, a, b)), Jf(this, a, b), c.Ib && b.abort()) : (a = this.B, a.B.delete(b) && a.Ba(b))
    };
    Ef.prototype.M = function(a, b) {
        var c = b.target;
        switch (b.type) {
            case Qa:
                Jf(this, a, c);
                break;
            case ua:
                a: {
                    var d = this.A.get(a);
                    if (c.G == 7 || af(c) || d.Ma > d.eb)
                        if (J(this, new If(ua, this, a, c)), d && (d.Nb = !0, d.Mb)) {
                            a = d.Mb.call(c, b);
                            break a
                        } a = null
                }
                return a;
            case Ua:
                J(this, new If(Ua, this, a, c));
                break;
            case "timeout":
            case Ia:
                b = this.A.get(a);
                b.Ma > b.eb && J(this, new If(Ia, this, a, c));
                break;
            case "abort":
                J(this, new If("abort", this, a, c))
        }
        return null
    };

    function Jf(a, b, c) {
        var d = a.A.get(b);
        !d || d.Nb || d.Ma > d.eb ? (d && (ze(a.C, c, Ff, d.yb), a.A.delete(b)), a = a.B, a.B.delete(c) && a.Ba(c)) : (d.Ma++, Ue(c, d.getUrl(), d.qd, d.Qa(), d.uc))
    }
    Ef.prototype.R = function() {
        Ef.L.R.call(this);
        this.B.dispose();
        this.B = null;
        this.C.dispose();
        this.C = null;
        this.A.clear();
        this.A = null
    };

    function If(a, b, c, d) {
        Wd.call(this, a, b);
        this.id = c;
        this.Ya = d
    }
    F(If, Wd);

    function Hf(a, b, c, d, e, f, g) {
        this.A = a;
        this.qd = c || "GET";
        this.C = d;
        this.uc = null;
        this.eb = f !== void 0 ? f : 1;
        this.Ma = 0;
        this.Ib = this.Nb = !1;
        this.yb = b;
        this.Mb = e;
        this.B = !!g;
        this.Ya = null
    }
    Hf.prototype.getUrl = function() {
        return this.A
    };
    Hf.prototype.Qa = function() {
        return this.C
    };
    Hf.prototype.Tb = function() {
        return this.B
    };
    Hf.prototype.Sb = function() {
        return ""
    };

    function Kf(a, b, c, d, e) {
        this.B = a;
        this.D = b;
        this.A = c || null;
        this.data = d || null;
        if (e) {
            if (this.C = e, e != "displayModeSnippet" && e != Ea && e != Fa && e != Ga) throw "bad display mode: " + e;
        } else this.C = Ga;
        this.H = !1
    }
    Kf.prototype.G = function() {
        return this.B
    };

    function Lf(a) {
        this.D = !0;
        this.K = a;
        this.A = null
    }

    function K(a, b) {
        return document.getElementById(a.K.B + "_" + b)
    }

    function Mf(a, b) {
        a = K(a, b);
        if (!a) throw "did not find element for id " + b;
        return a
    }
    Lf.prototype.C = function() {
        return this.K.data
    };
    Lf.prototype.B = function() {
        var a = {};
        a.type = this.A.C();
        a.instanceId = this.K.B;
        a.sectionId = this.K.D;
        a.actionUrl = L.Lb;
        a.quickEditUrl = L.Qb + "&widgetType=" + this.A.C() + "&widgetId=" + this.K.B + "&sectionId=" + this.K.D + aa + L.lc;
        return a
    };
    Lf.prototype.za = function(a, b, c, d) {
        b = b || {};
        window.__wavt && (b.xssi_token = window.__wavt);
        L.za(a, b, this.K.B, this.A.C(), c, d)
    };

    function Nf(a) {
        var b = -1;
        try {
            b = a.status
        } catch (c) {}
        return b
    }

    function L() {}
    L.tc = function(a, b) {
        L.ta = {};
        L.Qb = a;
        L.Lb = b;
        L.Ca = {};
        L.Za = new Ef;
        L.Ub = 0;
        L.wb = 0;
        le(L.Za, Qa, function() {
            L.wb++
        });
        le(L.Za, ua, function() {
            L.wb--
        })
    };
    L.Kc = function(a, b) {
        L.Xb = a;
        L.Wb = b
    };
    L.Sc = function() {
        var a = L.kc();
        document.body.appendChild(a)
    };
    L.Mc = function(a) {
        L.Sc();
        if (window.parent == window) {
            var b = "Preview";
            a && (b = a);
            a = L.jc(b);
            document.body.appendChild(a[0]);
            document.body.appendChild(a[1])
        }
    };
    L.lc = "editWidget";
    L.Lc = function(a) {
        L.Ed = a
    };
    L.Bb = function() {
        return L.Ed
    };
    L.Jc = function(a) {
        L.Ca = a
    };
    L.oc = function() {
        var a = {},
            b;
        for (b in L.Ca) {
            var c = L.Ca[b];
            a[c.name] = c.data
        }
        c = {};
        for (b in L.ta) c[b] = L.ta[b].F.K.data;
        a.widgets = c;
        return a
    };
    L.Hb = function(a, b) {
        var c = new Lf(b);
        a = new window[a](c);
        c.A = a;
        L.ta[b.B] = a;
        L.Ab(a);
        return a
    };
    L.Ec = function(a, b) {
        a = L.Hb(a, b);
        a.F.K.H = !0;
        return a
    };
    L.Ab = function(a) {
        var b = a.F;
        b.K.C != Ga && (b.K.C == Ea && a.ca(), a.F.D = !1)
    };
    L.cb = function(a) {
        return L.ta ? L.ta[a] : null
    };
    L.Cc = function(a, b, c, d, e) {
        var f = "";
        d && (f = "&widgetId=" + d);
        a = L.Qb + aa + a + "&sectionId=" + b + "&widgetType=" + c + f;
        if (window.name == e) return window.location.replace(a), window.focus(), window;
        e = window.open(a, e, "width=570,height=600,left=75,top=20,resizable=yes,scrollbars=yes");
        e.focus();
        return e
    };
    L.Bc = function(a) {
        var b = a.getAttribute("id"),
            c = a.parentNode.getAttribute("id");
        a = a.getAttribute("widgetType");
        L.Wb && L.Wb(c, a, b);
        return !1
    };
    L.Dc = function(a) {
        a = a.parentNode.getAttribute("id");
        L.Xb && L.Xb(a);
        return !1
    };
    L.za = function(a, b, c, d, e, f) {
        L.Hc(a, b, c, d, e, f)
    };
    L.Hc = function(a, b, c, d, e, f) {
        function g() {
            m(this.A) && window.eval(bf(this))
        }
        var h = L.Lb;
        a = ["action=" + encodeURIComponent(a), "widgetId=" + encodeURIComponent(c), "widgetType=" + encodeURIComponent(d), "responseType=js"];
        for (var k in b)
            if (typeof b[k] == t)
                for (c = b[k], d = 0; d < c.length; ++d) a.push(encodeURIComponent(k) + "=" + encodeURIComponent(c[d]));
            else a.push(encodeURIComponent(k) + "=" + encodeURIComponent(b[k]));
        var m = e || Of();
        f == "GET" ? (h = h.indexOf("?") >= 0 ? h + "&" : h + "?", Gf(L.Za, "" + L.Ub++, h + a.join("&"), "GET", void 0, g)) : Gf(L.Za,
            "" + L.Ub++, h, "POST", a.join("&"), g)
    };
    L.ab = function(a, b) {
        L.wb == 0 ? a.setTimeout(function() {
            a.close()
        }, b) : a.setTimeout(function() {
            L.ab(a, b)
        }, 200)
    };
    L.wc = function(a, b) {
        a && (L.ab(a, 100), L.Uc(a, b))
    };
    L.Uc = function(a, b) {
        if (a) {
            var c = a.document.getElementById(Ta);
            c && (c = c.innerHTML);
            c && a && a.opener.parent && a.opener.parent.editor && a.opener.parent.editor.SetSaveMessage(c, b)
        }
    };
    L.ea = function(a, b, c) {
        a = L.ta[a];
        c.errors != null ? (b = window, L.ob(b, c.errors), L.Cb(c, b)) : a.ea(b, c)
    };
    L.Cb = function(a, b) {
        a = a["error-details"];
        for (var c in a) {
            var d = a[c];
            var e = c;
            var f = b.document;
            f || (f = document);
            if (e = f.getElementById("errormessage_" + e)) uc(e, rd(xd, d)), e.className = "errorbox-bad errormsg"
        }
    };

    function Pf(a, b) {
        L.ob(a.G, b[Sa]);
        L.mc(a.K.B, function(c) {
            window.opener._WidgetManager._OnWidgetConfigured(c, b)
        })
    }
    L.zc = function(a, b) {
        window.parent && window.parent.editor && b ? L.Gb(a, b) : window.location.replace(window.location.href)
    };
    L.Gb = function(a, b) {
        var c = L.cb(a);
        c.F.K.data = b.data;
        a = document.getElementById(a);
        Kd(a);
        Qf(a, c)
    };
    L.rc = function(a, b, c) {
        c.errors != null && (L.ob(window, c.errors), L.Cb(c, window))
    };
    L.Ac = function(a) {
        var b = L.cb(a);
        b && (b.F.K.C == Fa ? top.editor.HandleDeleteWidget(b.F.K.A) : (b = b.F.K.A, b.parentNode.removeChild(b)), delete L.ta[a])
    };
    L.mc = function(a, b) {
        if (L.Db(window)) {
            var c = window.opener;
            b || (b = c._WidgetManager._OnWidgetConfigured);
            b(a);
            c._WidgetManager ? c._WidgetManager._KillPopupDelay(window, a) : L.ab(window, 100)
        } else a = L.Bb() + "?widgetId=" + a, a += "&func=" + encodeURIComponent("_OnWidgetConfigured"), window.location.replace(a)
    };
    L.Db = function(a) {
        var b = !1;
        try {
            if (a.opener) {
                var c = "X" + a.opener.document.domain;
                c && c != "X" && (b = !0)
            }
        } catch (d) {}
        return b
    };
    L.Ic = "status-msg-yellow-on-white";
    L.ob = function(a, b) {
        a || (a = self);
        var c = a.document.getElementById(Ta);
        c && (c.textContent = b);
        (a = a.document.getElementById(Sa)) && Sb(a, L.Ic)
    };
    L.Ha = function(a, b) {
        if (G(a, b)) return a;
        if (a)
            for (var c = a.childNodes.length, d = 0; d < c; d++) {
                var e = L.Ha(a.childNodes.item(d), b);
                if (e) return e
            }
        return null
    };
    L.kc = function() {
        var a = window.document.createElement(l);
        a.className = "blogger-clickTrap singleton-element";
        a.style.position = "fixed";
        a.style.top = "0";
        a.style.left = "0";
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.zIndex = "1000";
        a.style.cursor = "default";
        a.onclick = L.nb;
        a.onmousedown = L.nb;
        a.onmouseup = L.nb;
        a.style.background = "white";
        a.style.filter = "alpha(opacity=1)";
        a.style.opacity = ".01";
        a.textContent = "\u00a0";
        return a
    };
    L.jc = function(a) {
        var b = window.document,
            c = L.zb(b, a);
        a = L.zb(b, a);
        c.style.backgroundColor = "#000";
        c.style.border = "1px solid #aaa";
        c.style.opacity = ".5";
        a.style.border = "1px solid transparent";
        c.style.zIndex = 1200;
        a.style.zIndex = 1200;
        return [c, a]
    };
    L.zb = function(a, b) {
        a = a.createElement(l);
        a.style.position = "absolute";
        a.style.top = "75px";
        a.style.left = "-225px";
        a.style.width = "600px";
        a.style.height = "28px";
        a.style.margin = "0";
        a.style.padding = "10px";
        a.style.fontSize = "24px";
        a.style.textAlign = "center";
        a.style.color = "#fff";
        a.style.fontFamily = '"trebuchet ms",verdana,arial,sans-serif';
        a.style.MozTransform = Ra;
        a.style.MozTransformOrigin = "50% 0";
        a.style.WebkitTransform = Ra;
        a.style.WebkitTransformOrigin = "50% 0";
        a.textContent = b;
        a.className = "singleton-element";
        return a
    };
    L.nb = function(a) {
        a || (a = window.event);
        a && (a.cancelBubble = !0, a.stopPropagation && a.stopPropagation());
        return !1
    };

    function Rf() {
        this.A = [];
        for (var a = 0; a < L.Ca.length; ++a) this.A[this.A.length] = L.Ca[a]
    }

    function Sf(a, b) {
        b == null && (b = "");
        for (var c = a.A.length - 1; c >= 0; --c)
            if (a.A[c].name == b) return a.A[c].data;
        return null
    }

    function Tf(a, b) {
        var c = Sf(a, b);
        if (c !== null) return c;
        var d = b.split(".");
        if (d.length == 1) return c = Sf(a, ""), c[b];
        c = Sf(a, d[0]);
        b = 0;
        c ? b = 1 : c = Sf(a, "");
        for (a = b; a < d.length; a++) {
            if (c == null) return null;
            c = c[d[a]]
        }
        return c
    }

    function M(a, b) {
        this.S = a;
        this.F = b
    }
    M.prototype.C = function() {
        return this.S
    };
    M.prototype.J = function() {
        return this.F
    };
    M.prototype.ea = function(a, b) {
        a == "configure" && Pf(this.F, b)
    };
    M.prototype.ca = function() {};
    E("_WidgetManager", L);
    L._SetOpenWidgetDialogs = L.Kc;
    L._Init = L.tc;
    L._SetWidgetRefreshUrl = L.Lc;
    L._GetWidgetRefreshUrl = L.Bb;
    L._DisplayWidget = L.Ab;
    L._GetWidget = L.cb;
    L._HandleControllerResult = L.ea;
    L._HandlePageActionResult = L.rc;
    L._IsOpenerReachable = L.Db;
    L._SetDataContext = L.Jc;
    L._SetupPreview = L.Mc;
    L._RegisterWidget = L.Hb;
    L._RegisterNewWidget = L.Ec;
    L._PopupPaneFromParams = L.Cc;
    L._PopupConfig = L.Bc;
    L._PopupToolbox = L.Dc;
    L._KillPopupDelay = L.wc;
    L._OnWidgetConfigured = L.zc;
    L._OnWidgetConfiguredWithData = L.Gb;
    L._OnWidgetDeleted = L.Ac;
    E("_WidgetInfo", Kf);
    Kf.prototype._getInstanceId = Kf.prototype.G;
    M.prototype._GetHelper = M.prototype.J;
    Lf.prototype._GetData = Lf.prototype.C;
    Lf.prototype._GenerateWidgetMetadata = Lf.prototype.B;
    L._GetAllData = L.oc;
    E("widget_module_provide", function(a, b, c) {
        var d = De.Sa(),
            e = d.A,
            f = d.G;
        e[a] || (e[a] = {});
        if (c) e[a][b] = c;
        else if (f[a]) {
            for (b = 0; b < f[a].length; ++b)(0, f[a][b][1])(e[a][f[a][b][0]]);
            delete f[a];
            delete d.C[a]
        }
    });

    function Uf(a) {
        M.call(this, "AdSense", a);
        this.F = a
    }
    y(Uf, M);
    E("_AdSenseView", Uf);

    function Vf(a) {
        M.call(this, "BlogArchive", a);
        this.A = a.K
    }
    F(Vf, M);
    var Wf = "&#9658;&nbsp;";
    v = Vf.prototype;
    v.ea = function(a, b) {
        if (a == "configure") Pf(this.F, b);
        else if (a == "getTitles") {
            a: {
                a = b.path;
                var c = this.A.A.getElementsByTagName("A");
                for (e in c) {
                    var d = c[e];
                    if (d.href == a) {
                        var e = Rd(d, "li", "archivedate");
                        break a
                    }
                }
                e = void 0
            }
            a = Cd("posts", e);
            (c = Rd(e, l, ra)) && Ed(c, {
                style: "",
                "data-height": ""
            });Kd(a);
            for (c = 0; c < b.posts.length; c++) {
                d = b.posts[c];
                var f = document.createElement("li");
                uc(f, rd(xd, "<a href=" + d.url + ">" + d.title + "</a>"));
                a.appendChild(f)
            }
            Xf(this, e);Yf(this, e)
        }
        else Vf.L.ea.call(this, a, b)
    };
    v.ca = function() {
        if (K(this.F, "ArchiveList")) {
            var a = Dd(document, "a", Ya, this.A.A);
            a.length < 1 && (a = Dd(document, "li", Ya, this.A.A));
            if (a.length > 0 && a[0].currentStyle) var b = a[0].parentNode.currentStyle.color;
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                Dd(document, l, ra, d).length > 0 ? (d.onclick = this.Nc.bind(this), Xf(this, d)) : d.onclick = this.Oc.bind(this);
                b && (d.style.color = b)
            }
            if (a = K(this.F, "ArchiveMenu")) {
                for (b = 1; b < a.options.length; b++)
                    if (c = a.options[b].value, c == window.location.href || window.location.href.match(c) != null) {
                        a.selectedIndex =
                            b;
                        break
                    } a.onchange = this.qc.bind(this)
            } else
                for (a = Dd(document, l, Ha, this.A.A), b = 0; b < a.length; b++) c = a[b], c.addEventListener(pa, this.Rc.bind(this), !1), c.addEventListener(pa, this.Gc.bind(this), !1);
            this.F.K.data.languageDirection == "rtl" && (Wf = "&#9668;&nbsp;")
        }
    };
    v.qc = function() {
        var a = K(this.F, "ArchiveMenu");
        a && a.value != "" && (window.location.href = a.value)
    };
    v.Oc = function(a) {
        a = a || window.event;
        var b = a.currentTarget || a.srcElement;
        b && !G(b, Ya) && (b = b.parentNode);
        a = L.Ha(b, "zippy");
        b = b.parentNode;
        if (G(b, Ja)) return Wb(b, Ja, qa), uc(a, rd(wd, Wf)), Ub(a, "toggle-open"), !1;
        Wb(b, qa, Ja);
        uc(a, rd(wd, "&#9660;&nbsp;"));
        Sb(a, "toggle-open");
        Zf(this, b);
        return !1
    };
    v.Rc = function(a) {
        a = a || window.event;
        a = a.currentTarget || a.srcElement;
        (a = G(a, Ha) ? a : Rd(a, l, Ha)) && (a = Cd("menu", a)) && (G(a, "open") ? Ub(a, "open") : Sb(a, "open"))
    };
    v.Gc = function(a) {
        a = a || window.event;
        var b = a.currentTarget || a.srcElement;
        if (b = G(b, "ripple") ? b : Rd(b, l, "ripple")) {
            var c = Cd("splash", b);
            if (!c) {
                c = document.createElement("span");
                Sb(c, "splash");
                var d = document.createElement(l);
                Sb(d, "splash-wrapper");
                d.appendChild(c);
                b.insertBefore(d, b.firstChild)
            }
            Ub(c, "animate");
            d = b.offsetWidth;
            var e = getComputedStyle(b);
            d += parseInt(e.marginLeft) + parseInt(e.marginRight);
            d = Math.max(d, $f(b));
            Ed(c, {
                style: "height: " + d + "px; width: " + d + "px; left: " + (a.pageX - b.offsetLeft - d / 2) + "px; top: " +
                    (a.pageY - b.offsetTop - d / 2) + "px;"
            });
            Sb(c, "animate")
        }
    };
    v.Nc = function(a) {
        a = a || window.event;
        if (!a.currentTarget || a.currentTarget == a.srcElement || a.srcElement.tagName != "A") {
            var b = a.currentTarget || a.srcElement;
            b && !G(b, Ya) && (b = b.parentNode);
            a.stopPropagation();
            a = G(b, "archivedate") ? b : b.parentNode;
            G(a, Ja) ? (ag(this, a), Wb(a, Ja, qa)) : (Zf(this, a), Yf(this, a), Wb(a, qa, Ja))
        }
    };

    function Zf(a, b) {
        var c = b.getElementsByTagName("UL");
        c.length > 0 && !G(c[0], "posts") ? c = !1 : (c = L.Ha(b, "post-count"), c = parseInt(c.innerHTML.match(/\d+/), 10), c = b.getElementsByTagName("LI").length < c);
        if (c) {
            var d = Cd(ra, b);
            c = Cd("posts", b);
            c || (c = document.createElement("UL"), d ? d.appendChild(c) : b.appendChild(c), Sb(c, "posts"));
            d && Ed(d, {
                style: "",
                "data-height": ""
            });
            (d = Rd(b, l, ra)) && Ed(d, {
                style: "",
                "data-height": ""
            });
            d = document.createElement("LI");
            uc(d, rd(wd, a.F.K.data.loadingMessage || "Loading..."));
            c.appendChild(d);
            a.F.za("getTitles", {
                path: L.Ha(b, "post-count-link").href
            }, null, "GET")
        }
    }

    function Yf(a, b) {
        var c = Cd(ra, b);
        c.getAttribute(Da) || Xf(a, b);
        var d = (a = c.getAttribute(Da) || $f(c)) ? a + "px" : p;
        window.setTimeout(function() {
            Ed(c, {
                style: "max-height: " + d + ";"
            })
        }, 10)
    }

    function ag(a, b) {
        var c = Cd(ra, b);
        c.getAttribute(Da) || Xf(a, b);
        window.setTimeout(function() {
            Ed(c, {
                style: Oa
            })
        }, 10)
    }

    function Xf(a, b) {
        var c = Cd(ra, b);
        Ed(c, {
            style: "max-height: none;"
        });
        for (var d = 0, e = Dd(document, l, ra, c), f = 0; f < e.length; f++) {
            var g = e[f],
                h = Rd(g, "li", Ya);
            if (G(h, qa)) {
                var k = g.getAttribute(Da);
                k || (Xf(a, h), k = g.getAttribute(Da));
                d += parseInt(k)
            }
        }
        a = d + $f(c);
        c.setAttribute(Da, a);
        c.setAttribute("style", "max-height: " + a + "px;");
        G(b, qa) && c.setAttribute("style", Oa)
    }

    function $f(a) {
        var b = a.offsetHeight;
        a = getComputedStyle(a);
        return b += parseInt(a.marginTop) + parseInt(a.marginBottom)
    }
    E("_BlogArchiveView", Vf);

    function Of() {
        return function(a) {
            return Nf(a) >= 500 ? (a.responseText.length ? document.body.innerHTML = a.responseText : window.alert(LayoutsMessages.SERVER_ERROR), !1) : !0
        }
    };

    function Qf(a, b) {
        var c = L,
            d = a.ownerDocument;
        b = b._GetHelper();
        var e = b._GetData(),
            f = c._GetAllData();
        a = bg(d, a, l, "widget-wrap1");
        a = bg(d, a, l, "widget-wrap2");
        a = bg(d, a, l, "widget-wrap3");
        var g = bg(d, a, l, "widget-content");
        if (a = e.version && e.version > 1) g.className += " visibility", bg(d, g, l, "layout-widget-state " + (e.isVisible ? $a : "not-visible")).setAttribute("title", e.visibilityTooltipMessage);
        var h = bg(d, g, l, "layout-title");
        if (e[Na]) {
            var k = bg(d, g, l, Ma);
            k.appendChild(d.createTextNode(e[Na]));
            k.setAttribute("title",
                e[Ma])
        }
        h.appendChild(d.createTextNode(e["layout-title"]));
        e = bg(d, g, "a", "editlink");
        var m = b._GenerateWidgetMetadata();
        e.target = "chooseWidget";
        e.onclick = function() {
            return c._PopupConfig(d.getElementById(m.instanceId))
        };
        a && (e.className += " icon");
        e.appendChild(d.createTextNode(f.messages.edit || "Edit"))
    }

    function bg(a, b, c, d) {
        a = a.createElement(c);
        a.className = d;
        b.appendChild(a);
        return a
    };

    function cg(a) {
        M.call(this, cg.X, a)
    }
    F(cg, M);
    cg.X = "Attribution";
    E("_AttributionView", cg);
    /*
     SPDX-License-Identifier: Apache-2.0
    */
    var dg = Object.prototype.hasOwnProperty;

    function eg() {}
    eg.prototype = Object.create(null);

    function fg(a, b, c) {
        a = a.style;
        if (typeof c === u) a.cssText = c;
        else {
            a.cssText = "";
            for (var d in c)
                if (dg.call(c, d)) {
                    b = a;
                    var e = d,
                        f = c[d];
                    e.indexOf("-") >= 0 ? b.setProperty(e, f) : b[e] = f
                }
        }
    }

    function gg(a, b, c) {
        var d = typeof c;
        d === t || d === n ? a[b] = c : c == null ? a.removeAttribute(b) : (d = b.lastIndexOf("xml:", 0) === 0 ? "http://www.w3.org/XML/1998/namespace" : b.lastIndexOf("xlink:", 0) === 0 ? "http://www.w3.org/1999/xlink" : null) ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)
    }

    function hg() {
        var a = new eg;
        a.__default = gg;
        a.style = fg;
        return a
    }
    hg();
    var ig = hg();

    function jg(a) {
        z.setTimeout(function() {
            throw a;
        }, 0)
    };
    Pc();
    Oc();
    Nc();
    var kg = {},
        lg = null;
    var mg = typeof Uint8Array !== "undefined",
        ng = !Sc && typeof btoa === n;

    function og() {
        return typeof BigInt === n
    };
    var pg = typeof Symbol === n && typeof Symbol() === "symbol",
        qg;
    qg = typeof Symbol === n && typeof Symbol() === "symbol" ? Symbol() : void 0;
    var rg = Math.max,
        sg = rg.apply,
        tg = Object.values({
            Od: 1,
            Md: 2,
            Ld: 4,
            Rd: 8,
            Qd: 16,
            Pd: 32,
            Fd: 64,
            Td: 128,
            Kd: 256,
            Jd: 512,
            Nd: 1024,
            Hd: 2048,
            Sd: 4096,
            Id: 8192,
            Gd: 16384
        }),
        ug;
    if (tg instanceof Array) ug = tg;
    else {
        for (var vg = x(tg), wg, xg = []; !(wg = vg.next()).done;) xg.push(wg.value);
        ug = xg
    }
    sg.call(rg, Math, ug);
    var yg = pg ? function(a, b) {
            a[qg] |= b
        } : function(a, b) {
            a.ma !== void 0 ? a.ma |= b : Object.defineProperties(a, {
                ma: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        zg = pg ? function(a) {
            return a[qg] | 0
        } : function(a) {
            return a.ma | 0
        },
        Ag = pg ? function(a) {
            return a[qg]
        } : function(a) {
            return a.ma
        },
        Bg = pg ? function(a, b) {
            a[qg] = b
        } : function(a, b) {
            a.ma !== void 0 ? a.ma = b : Object.defineProperties(a, {
                ma: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };
    var Cg = {},
        Dg = {};

    function Eg(a) {
        return !(!a || typeof a !== t || a.A !== Dg)
    }

    function Fg(a) {
        return a !== null && typeof a === t && !Array.isArray(a) && a.constructor === Object
    }

    function Gg(a) {
        return !Array.isArray(a) || a.length ? !1 : zg(a) & 1 ? !0 : !1
    };

    function Hg(a) {
        a.Vd = !0;
        return a
    };
    var Ig = Hg(function(a) {
            return typeof a === q
        }),
        Jg = Hg(function(a) {
            return typeof a === u
        }),
        Kg = Hg(function(a) {
            return typeof a === oa
        });
    var Lg = typeof z.BigInt === n && typeof z.BigInt(0) === ma;

    function Mg(a) {
        var b = a;
        if (Jg(b)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
        } else if (Ig(b) && !Number.isSafeInteger(b)) throw Error(String(b));
        return Lg ? BigInt(a) : a = Kg(a) ? a ? "1" : "0" : Jg(a) ? a.trim() || "0" : String(a)
    }
    var Sg = Hg(function(a) {
            return Lg ? a >= Ng && a <= Og : a[0] === "-" ? Pg(a, Qg) : Pg(a, Rg)
        }),
        Qg = Number.MIN_SAFE_INTEGER.toString(),
        Ng = Lg ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
        Rg = Number.MAX_SAFE_INTEGER.toString(),
        Og = Lg ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;

    function Pg(a, b) {
        if (a.length > b.length) return !1;
        if (a.length < b.length || a === b) return !0;
        for (var c = 0; c < a.length; c++) {
            var d = a[c],
                e = b[c];
            if (d > e) return !1;
            if (d < e) return !0
        }
    };
    var N = 0,
        O = 0;

    function Tg(a) {
        var b = a >>> 0;
        N = b;
        O = (a - b) / 4294967296 >>> 0
    }

    function Ug(a) {
        if (a < 0) {
            Tg(0 - a);
            var b = x(Vg(N, O));
            a = b.next().value;
            b = b.next().value;
            N = a >>> 0;
            O = b >>> 0
        } else Tg(a)
    }

    function Wg(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (b <= 2097151) var c = "" + (4294967296 * b + a);
        else og() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7), c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7), c = b + Xg(c) + Xg(a));
        return c
    }

    function Xg(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function Yg() {
        var a = N,
            b = O;
        b & 2147483648 ? og() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = x(Vg(a, b)), a = b.next().value, b = b.next().value, a = "-" + Wg(a, b)) : a = Wg(a, b);
        return a
    }

    function Zg(a) {
        if (a.length < 16) Ug(Number(a));
        else if (og()) a = BigInt(a), N = Number(a & BigInt(4294967295)) >>> 0, O = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +(a[0] === "-");
            O = N = 0;
            for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), O *= 1E6, N = N * 1E6 + d, N >= 4294967296 && (O += Math.trunc(N / 4294967296), O >>>= 0, N >>>= 0);
            b && (b = x(Vg(N, O)), a = b.next().value, b = b.next().value, N = a, O = b)
        }
    }

    function Vg(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };

    function $g(a) {
        a = Error(a);
        Yb(a, "warning");
        return a
    };
    var ah = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function bh(a) {
        var b = typeof a;
        switch (b) {
            case ma:
                return !0;
            case q:
                return Number.isFinite(a)
        }
        return b !== u ? !1 : ah.test(a)
    }

    function ch(a) {
        if (a == null) return a;
        if (typeof a === u) {
            if (!a) return;
            a = +a
        }
        if (typeof a === q) return Number.isFinite(a) ? a | 0 : void 0
    }

    function dh(a) {
        var b = 0;
        b = b === void 0 ? 0 : b;
        if (!bh(a)) throw $g("int64");
        var c = typeof a;
        switch (b) {
            case 4096:
                switch (c) {
                    case u:
                        return eh(a);
                    case ma:
                        return String(BigInt.asIntN(64, a));
                    default:
                        return fh(a)
                }
            case 8192:
                switch (c) {
                    case u:
                        return b = Math.trunc(Number(a)), Number.isSafeInteger(b) ? a = Mg(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), a = og() ? Mg(BigInt.asIntN(64, BigInt(a))) : Mg(gh(a))), a;
                    case ma:
                        return Mg(BigInt.asIntN(64, a));
                    default:
                        return Number.isSafeInteger(a) ? Mg(hh(a)) : Mg(fh(a))
                }
            case 0:
                switch (c) {
                    case u:
                        return eh(a);
                    case ma:
                        return Mg(BigInt.asIntN(64, a));
                    default:
                        return hh(a)
                }
            default:
                return Xb()
        }
    }

    function ih(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    }

    function jh(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function kh(a) {
        if (a < 0) {
            Ug(a);
            var b = Wg(N, O);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (ih(String(a))) return a;
        Ug(a);
        return O * 4294967296 + (N >>> 0)
    }

    function gh(a) {
        if (jh(a)) return a;
        Zg(a);
        return Yg()
    }

    function lh(a) {
        if (ih(a)) return a;
        Zg(a);
        return Wg(N, O)
    }

    function hh(a) {
        bh(a);
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            Ug(a);
            var b = N,
                c = O;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function mh(a) {
        bh(a);
        a = Math.trunc(a);
        return a >= 0 && Number.isSafeInteger(a) ? a : kh(a)
    }

    function fh(a) {
        bh(a);
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            var b = String(a);
            jh(b) ? a = b : (Ug(a), a = Yg())
        }
        return a
    }

    function nh(a) {
        bh(a);
        a = Math.trunc(a);
        if (a >= 0 && Number.isSafeInteger(a)) a = String(a);
        else {
            var b = String(a);
            ih(b) ? a = b : (Ug(a), a = Wg(N, O))
        }
        return a
    }

    function eh(a) {
        bh(a);
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return gh(a)
    }

    function oh(a) {
        bh(a);
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b) && b >= 0) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return lh(a)
    }

    function ph(a) {
        if (a == null) return a;
        if (typeof a === ma) return Sg(a) ? a = Number(a) : (a = BigInt.asIntN(64, a), a = Sg(a) ? Number(a) : String(a)), a;
        if (bh(a)) return typeof a === q ? hh(a) : eh(a)
    }

    function qh(a) {
        var b = 0;
        b = b === void 0 ? 0 : b;
        if (!bh(a)) throw $g("uint64");
        var c = typeof a;
        switch (b) {
            case 4096:
                switch (c) {
                    case u:
                        return oh(a);
                    case ma:
                        return String(BigInt.asUintN(64, a));
                    default:
                        return nh(a)
                }
            case 8192:
                switch (c) {
                    case u:
                        return b = Math.trunc(Number(a)), Number.isSafeInteger(b) && b >= 0 ? a = Mg(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), a = og() ? Mg(BigInt.asUintN(64, BigInt(a))) : Mg(lh(a))), a;
                    case ma:
                        return Mg(BigInt.asUintN(64, a));
                    default:
                        return Number.isSafeInteger(a) ? Mg(mh(a)) : Mg(nh(a))
                }
            case 0:
                switch (c) {
                    case u:
                        return oh(a);
                    case ma:
                        return Mg(BigInt.asUintN(64, a));
                    default:
                        return mh(a)
                }
            default:
                return Xb()
        }
    }

    function rh(a) {
        if (a == null) return a;
        if (typeof a === ma) return a >= 0 && Sg(a) ? a = Number(a) : (a = BigInt.asUintN(64, a), a = Sg(a) ? Number(a) : String(a)), a;
        if (bh(a)) return typeof a === q ? mh(a) : oh(a)
    };

    function sh(a, b) {
        var c, d, e;
        if (d = c = (d = th) == null ? void 0 : (e = d.get(b)) == null ? void 0 : e.get(a)) {
            a: if (a.length !== c.length) c = !1;
                else {
                    for (var f in c) {
                        d = Number(f);
                        if (e = Number.isInteger(d)) e = a[d], d = c[d], e = !(Number.isNaN(e) ? Number.isNaN(d) : e === d);
                        if (e) {
                            c = !1;
                            break a
                        }
                    }
                    c = !0
                }d = !c
        }
        if (d) {
            uh();
            var g, h;
            (g = th) == null || (h = g.get(b)) == null || h.delete(a)
        }
    }

    function uh() {
        var a = Error();
        Yb(a, "incident");
        jg(a)
    }
    var th = void 0;
    var vh;

    function wh(a, b, c) {
        var d = d != null ? d : 0;
        a == null && (a = vh);
        vh = void 0;
        if (a == null) {
            var e = 96;
            c ? (a = [c], e |= 512) : a = [];
            b && (e = e & -33521665 | (b & 1023) << 15)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            e = zg(a);
            if (e & 2048) throw Error("farr");
            if (e & 64) return a;
            d === 1 || d === 2 || (e |= 64);
            if (c && (e |= 512, c !== a[0])) throw Error("mid");
            a: {
                c = a;
                if (d = c.length) {
                    var f = d - 1;
                    if (Fg(c[f])) {
                        e |= 256;
                        b = f - (+!!(e & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        e = e & -33521665 | (b & 1023) << 15;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, d - (+!!(e & 512) - 1));
                    if (b > 1024) throw Error("spvt");
                    e =
                        e & -33521665 | (b & 1023) << 15
                }
            }
        }
        Bg(a, e);
        return a
    };

    function xh(a) {
        switch (typeof a) {
            case q:
                return isFinite(a) ? a : String(a);
            case ma:
                return Sg(a) ? Number(a) : String(a);
            case oa:
                return a ? 1 : 0;
            case t:
                if (a)
                    if (Array.isArray(a)) {
                        if (Gg(a)) return
                    } else if (mg && a != null && a instanceof Uint8Array) {
                    if (ng) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else {
                        b === void 0 && (b = 0);
                        if (!lg) {
                            lg = {};
                            c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                            d = ["+/=", "+/", "-_=", "-_.", "-_"];
                            for (var e = 0; e < 5; e++) {
                                var f = c.concat(d[e].split(""));
                                kg[e] = f;
                                for (var g = 0; g < f.length; g++) {
                                    var h = f[g];
                                    lg[h] === void 0 && (lg[h] = g)
                                }
                            }
                        }
                        b = kg[b];
                        c = Array(Math.floor(a.length / 3));
                        d = b[64] || "";
                        for (e = f = 0; f < a.length - 2; f += 3) {
                            var k = a[f],
                                m = a[f + 1];
                            h = a[f + 2];
                            g = b[k >> 2];
                            k = b[(k & 3) << 4 | m >> 4];
                            m = b[(m & 15) << 2 | h >> 6];
                            h = b[h & 63];
                            c[e++] = "" + g + k + m + h
                        }
                        g = 0;
                        h = d;
                        switch (a.length - f) {
                            case 2:
                                g = a[f + 1], h = b[(g & 15) << 2] || d;
                            case 1:
                                a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
                        }
                        a = c.join("")
                    }
                    return a
                }
        }
        return a
    };

    function yh(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Gg(a) ? void 0 : e && zg(a) & 2 ? a : zh(a, b, c, d !== void 0, e);
            else if (Fg(a)) {
                var f = {},
                    g;
                for (g in a) f[g] = yh(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function zh(a, b, c, d, e) {
        var f = d || c ? zg(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (var g = 0; g < a.length; g++) a[g] = yh(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Ah(a) {
        return a.ld === Cg ? a.toJSON() : xh(a)
    };

    function Bh(a, b) {
        a = a.na;
        return Ch(a, Ag(a), b)
    }

    function Ch(a, b, c) {
        if (c === -1) return null;
        var d = b >> 15 & 1023 || 536870912;
        if (c >= d) {
            if (b & 256) return a[a.length - 1][c]
        } else return b = c + (+!!(b & 512) - 1), a = b < 0 || b >= a.length || b >= d ? void 0 : a[b], a
    }

    function Dh(a, b, c) {
        var d = a.na,
            e = Ag(d);
        if (e & 2) throw Error();
        Eh(d, e, b, c);
        return a
    }

    function Eh(a, b, c, d) {
        var e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            var f = b;
            if (b & 256) var g = a[a.length - 1];
            else {
                if (d == null) return;
                g = a[e + (+!!(b & 512) - 1)] = {};
                f |= 256
            }
            g[c] = d;
            c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
            f !== b && Bg(a, f)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function Fh(a, b) {
        a = a.na;
        var c = Ag(a),
            d = Ch(a, c, b);
        var e = d == null || typeof d === q ? d : d === "NaN" || d === "Infinity" || d === "-Infinity" ? Number(d) : void 0;
        e != null && e !== d && Eh(a, c, b, e);
        return e
    }

    function P(a, b) {
        a = Bh(a, b);
        return a == null || typeof a === oa ? a : typeof a === q ? !!a : void 0
    }

    function Q(a, b) {
        return ch(Bh(a, b))
    }

    function Gh(a, b) {
        a = Bh(a, b);
        return a == null || typeof a === u ? a : void 0
    }

    function S(a, b) {
        var c = !1;
        c = c === void 0 ? !1 : c;
        a = P(a, b);
        return a != null ? a : c
    }

    function T(a, b, c) {
        if (c != null && typeof c !== oa) throw Error("Expected boolean but got " + Bb(c) + ": " + c);
        Dh(a, b, c)
    }

    function U(a, b, c) {
        if (c != null) {
            if (typeof c !== q) throw $g("int32");
            if (!Number.isFinite(c)) throw $g("int32");
            c |= 0
        }
        Dh(a, b, c)
    }

    function Hh(a, b, c) {
        c = c == null ? c : dh(c);
        Dh(a, b, c)
    }

    function Ih(a, b, c) {
        if (c != null && typeof c !== q) throw Error("Value of float/double field must be a number, found " + typeof c + ": " + c);
        Dh(a, b, c)
    }

    function Jh(a, b, c) {
        if (c != null && typeof c !== u) throw Error();
        return Dh(a, b, c)
    };
    var Kh;

    function Lh(a, b, c) {
        this.na = wh(a, b, c)
    }
    Lh.prototype.toJSON = function() {
        return Mh(this)
    };
    Lh.prototype.ld = Cg;
    Lh.prototype.toString = function() {
        try {
            return Kh = !0, Mh(this).toString()
        } finally {
            Kh = !1
        }
    };

    function Mh(a) {
        var b;
        if (a && (b = th) != null && b.has(a) && (b = a.na))
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (c === b.length - 1 && Fg(d))
                    for (var e in d) {
                        var f = d[e];
                        Array.isArray(f) && sh(f, a)
                    } else Array.isArray(d) && sh(d, a)
            }
        a = Kh ? a.na : zh(a.na, Ah, void 0, void 0, !1);
        e = !Kh;
        if (b = a.length) {
            d = a[b - 1];
            (f = Fg(d)) ? b-- : d = void 0;
            c = a;
            if (f) {
                b: {
                    var g = d;
                    var h;
                    var k = !1;
                    if (g)
                        for (var m in g)
                            if (isNaN(+m)) f = void 0, ((f = h) != null ? f : h = {})[m] = g[m];
                            else if (f = g[m], Array.isArray(f) && (Gg(f) || Eg(f) && f.size === 0) && (f = null), f == null && (k = !0), f != null) {
                        var r =
                            void 0;
                        ((r = h) != null ? r : h = {})[m] = f
                    }
                    k || (h = g);
                    if (h)
                        for (var B in h) {
                            k = h;
                            break b
                        }
                    k = null
                }
                g = k == null ? d != null : k !== d
            }
            for (; b > 0; b--) {
                h = c[b - 1];
                if (!(h == null || Gg(h) || Eg(h) && h.size === 0)) break;
                var C = !0
            }
            if (c !== a || g || C) {
                if (!e) c = Array.prototype.slice.call(c, 0, b);
                else if (C || g || k) c.length = b;
                k && c.push(k)
            }
            C = c
        } else C = a;
        return C
    };

    function Nh(a, b) {
        this.C = this.I = this.D = "";
        this.J = null;
        this.H = this.B = "";
        this.G = !1;
        var c;
        a instanceof Nh ? (this.G = b !== void 0 ? b : a.G, Oh(this, a.D), this.I = a.I, this.C = a.C, Ph(this, a.J), Qh(this, a.B), Rh(this, Sh(a.A)), this.H = a.H) : a && (c = String(a).match(Ne)) ? (this.G = !!b, Oh(this, c[1] || "", !0), this.I = Th(c[2] || ""), this.C = Th(c[3] || "", !0), Ph(this, c[4]), Qh(this, c[5] || "", !0), Rh(this, c[6] || "", !0), this.H = Th(c[7] || "")) : (this.G = !!b, this.A = new Uh(null, this.G))
    }
    Nh.prototype.toString = function() {
        var a = [],
            b = this.D;
        b && a.push(Vh(b, Wh, !0), ":");
        var c = this.C;
        if (c || b == "file") a.push("//"), (b = this.I) && a.push(Vh(b, Wh, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.J, c != null && a.push(":", String(c));
        if (c = this.B) this.C && c.charAt(0) != "/" && a.push("/"), a.push(Vh(c, c.charAt(0) == "/" ? Xh : Yh, !0));
        (c = this.A.toString()) && a.push("?", c);
        (c = this.H) && a.push("#", Vh(c, Zh));
        return a.join("")
    };
    Nh.prototype.resolve = function(a) {
        var b = new Nh(this),
            c = !!a.D;
        c ? Oh(b, a.D) : c = !!a.I;
        c ? b.I = a.I : c = !!a.C;
        c ? b.C = a.C : c = a.J != null;
        var d = a.B;
        if (c) Ph(b, a.J);
        else if (c = !!a.B) {
            if (d.charAt(0) != "/")
                if (this.C && !this.B) d = "/" + d;
                else {
                    var e = b.B.lastIndexOf("/");
                    e != -1 && (d = b.B.slice(0, e + 1) + d)
                } e = d;
            if (e == ".." || e == ".") d = "";
            else if (e.indexOf("./") != -1 || e.indexOf("/.") != -1) {
                d = e.lastIndexOf("/", 0) == 0;
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    h == "." ? d && g == e.length && f.push("") : h == ".." ? ((f.length > 1 || f.length == 1 &&
                        f[0] != "") && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? Qh(b, d) : c = a.A.toString() !== "";
        c ? Rh(b, Sh(a.A)) : c = !!a.H;
        c && (b.H = a.H);
        return b
    };

    function Oh(a, b, c) {
        a.D = c ? Th(b, !0) : b;
        a.D && (a.D = a.D.replace(/:$/, ""))
    }

    function Ph(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || b < 0) throw Error("Bad port number " + b);
            a.J = b
        } else a.J = null
    }

    function Qh(a, b, c) {
        a.B = c ? Th(b, !0) : b;
        return a
    }

    function Rh(a, b, c) {
        b instanceof Uh ? (a.A = b, $h(a.A, a.G)) : (c || (b = Vh(b, ai)), a.A = new Uh(b, a.G))
    }

    function bi(a, b, c) {
        a.A.set(b, c);
        return a
    }

    function ci(a, b) {
        return a instanceof Nh ? new Nh(a) : new Nh(a, b)
    }

    function Th(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function Vh(a, b, c) {
        return typeof a === u ? (a = encodeURI(a).replace(b, di), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function di(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var Wh = /[#\/\?@]/g,
        Yh = /[#\?:]/g,
        Xh = /[#\?]/g,
        ai = /[#\?@]/g,
        Zh = /#/g;

    function Uh(a, b) {
        this.B = this.A = null;
        this.C = a || null;
        this.D = !!b
    }

    function ei(a) {
        a.A || (a.A = new Map, a.B = 0, a.C && Oe(a.C, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }

    function fi(a) {
        var b = tf(a);
        if (typeof b == "undefined") throw Error("Keys are undefined");
        var c = new Uh(null);
        a = sf(a);
        for (var d = 0; d < b.length; d++) {
            var e = b[d],
                f = a[d];
            Array.isArray(f) ? gi(c, e, f) : c.add(e, f)
        }
        return c
    }
    v = Uh.prototype;
    v.N = function() {
        ei(this);
        return this.B
    };
    v.add = function(a, b) {
        ei(this);
        this.C = null;
        a = hi(this, a);
        var c = this.A.get(a);
        c || this.A.set(a, c = []);
        c.push(b);
        this.B = this.B + 1;
        return this
    };

    function ii(a, b) {
        ei(a);
        b = hi(a, b);
        a.A.has(b) && (a.C = null, a.B = a.B - a.A.get(b).length, a.A.delete(b))
    }
    v.clear = function() {
        this.A = this.C = null;
        this.B = 0
    };
    v.da = function() {
        ei(this);
        return this.B == 0
    };

    function ji(a, b) {
        ei(a);
        b = hi(a, b);
        return a.A.has(b)
    }
    v.forEach = function(a, b) {
        ei(this);
        this.A.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    v.ga = function() {
        ei(this);
        for (var a = Array.from(this.A.values()), b = Array.from(this.A.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    v.V = function(a) {
        ei(this);
        var b = [];
        if (typeof a === u) ji(this, a) && (b = b.concat(this.A.get(hi(this, a))));
        else {
            a = Array.from(this.A.values());
            for (var c = 0; c < a.length; c++) b = b.concat(a[c])
        }
        return b
    };
    v.set = function(a, b) {
        ei(this);
        this.C = null;
        a = hi(this, a);
        ji(this, a) && (this.B = this.B - this.A.get(a).length);
        this.A.set(a, [b]);
        this.B = this.B + 1;
        return this
    };
    v.get = function(a, b) {
        if (!a) return b;
        a = this.V(a);
        return a.length > 0 ? String(a[0]) : b
    };

    function gi(a, b, c) {
        ii(a, b);
        c.length > 0 && (a.C = null, a.A.set(hi(a, b), Qb(c)), a.B = a.B + c.length)
    }
    v.toString = function() {
        if (this.C) return this.C;
        if (!this.A) return "";
        for (var a = [], b = Array.from(this.A.keys()), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.V(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                d[f] !== "" && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.C = a.join("&")
    };

    function Sh(a) {
        var b = new Uh;
        b.C = a.C;
        a.A && (b.A = new Map(a.A), b.B = a.B);
        return b
    }

    function hi(a, b) {
        b = String(b);
        a.D && (b = b.toLowerCase());
        return b
    }

    function $h(a, b) {
        b && !a.D && (ei(a), a.C = null, a.A.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (ii(this, d), gi(this, e, c))
        }, a));
        a.D = b
    }
    v.vc = function(a) {
        for (var b = 0; b < arguments.length; b++) uf(arguments[b], function(c, d) {
            this.add(d, c)
        }, this)
    };
    var ki = {},
        li = {},
        mi = {};

    function ni() {
        throw Error("Do not instantiate directly");
    }
    ni.prototype.Ob = null;
    ni.prototype.Qa = function() {
        return this.A
    };
    ni.prototype.toString = function() {
        return this.A
    };
    ni.prototype.ac = function() {
        if (this.Pb !== ki) throw Error("Sanitized content was not of kind HTML.");
        return sc(this.toString())
    };

    function oi() {
        ni.call(this)
    }
    F(oi, ni);
    oi.prototype.Pb = ki;

    function pi(a) {
        if (a != null) switch (a.Ob) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function qi(a) {
        return ri(a, ki) ? a : a instanceof rc ? si(tc(a).toString()) : si(String(String(a)).replace(ti, ui), pi(a))
    }
    var si = function(a) {
        function b(c) {
            this.A = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            d !== void 0 && (c.Ob = d);
            return c
        }
    }(oi);

    function vi(a) {
        return wi(String(a), function() {
            return ""
        }).replace(xi, "&lt;")
    }
    var yi = RegExp.prototype.hasOwnProperty("sticky"),
        zi = new RegExp((yi ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))", yi ? "gy" : "g");

    function wi(a, b) {
        for (var c = [], d = a.length, e = 0, f = [], g, h, k = 0; k < d;) {
            switch (e) {
                case 0:
                    var m = a.indexOf("<", k);
                    if (m < 0) {
                        if (c.length === 0) return a;
                        c.push(a.substring(k));
                        k = d
                    } else c.push(a.substring(k, m)), h = m, k = m + 1, yi ? (zi.lastIndex = k, m = zi.exec(a)) : (zi.lastIndex = 0, m = zi.exec(a.substring(k))), m ? (f = ["<", m[0]], g = m[1], e = 1, k += m[0].length) : c.push("<");
                    break;
                case 1:
                    m = a.charAt(k++);
                    switch (m) {
                        case "'":
                        case '"':
                            var r = a.indexOf(m, k);
                            r < 0 ? k = d : (f.push(m, a.substring(k, r + 1)), k = r + 1);
                            break;
                        case ">":
                            f.push(m);
                            c.push(b(f.join(""),
                                g));
                            e = 0;
                            f = [];
                            h = g = null;
                            break;
                        default:
                            f.push(m)
                    }
                    break;
                default:
                    throw Error();
            }
            e === 1 && k >= d && (k = h + 1, c.push("<"), e = 0, f = [], h = g = null)
        }
        return c.join("")
    }

    function Ai(a) {
        return ri(a, ki) ? String(vi(a.Qa())).replace(Bi, ui) : String(a).replace(ti, ui)
    }

    function Ci(a) {
        ri(a, li) || ri(a, mi) ? a = String(a).replace(Di, Ei) : a instanceof lc ? a = String(nc(a).toString()).replace(Di, Ei) : (a = String(a), a = Fi.test(a) ? a.replace(Di, Ei) : la);
        return a
    }

    function ri(a, b) {
        return a != null && a.Pb === b
    }
    var Gi = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function ui(a) {
        return Gi[a]
    }
    var Hi = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Ei(a) {
        return Hi[a]
    }
    var ti = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Bi = /[\x00\x22\x27\x3c\x3e]/g,
        Di = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Fi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
        Ii = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        xi = /</g;
    /*
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Ji = {};
    ig.checked = function(a, b, c) {
        c == null ? (a.removeAttribute("checked"), a.checked = !1) : (a.setAttribute("checked", String(c)), a.checked = !(c === !1 || c === "false"))
    };
    ig.value = function(a, b, c) {
        c == null ? (a.removeAttribute("value"), a.value = "") : (a.setAttribute("value", String(c)), a.value = String(c))
    };
    ig.muted = function(a, b, c) {
        c == null ? (a.removeAttribute("muted"), a.muted = !1) : (a.setAttribute("muted", String(c)), a.muted = !0)
    };

    function Ki(a, b) {
        return Li(b, a.config, a.od, a.cd, a.depth)
    }

    function Li(a, b, c, d, e) {
        var f, g = '<li class="comment" id="c' + Ai(d.id) + '"><div class="avatar-image-container"><img src="',
            h = d.authorAvatarSrc;
        ri(h, li) || ri(h, mi) ? h = String(h).replace(Di, Ei) : h instanceof lc ? h = String(nc(h).toString()).replace(Di, Ei) : (h = String(h), h = Ii.test(h) ? h.replace(Di, Ei) : la);
        g = g + Ai(h) + '" alt=""/></div><div class="comment-block"><div class="comment-header"><cite class="user">';
        h = d.authorUrl;
        g = g + ((h instanceof ni ? h.Qa() : h) ? '<a href="' + Ai(Ci(d.authorUrl)) + '" rel="nofollow">' + qi(d.author) +
                "</a>" : qi(d.author)) + '</cite><span class="icon user ' + Ai((f = d.extraIconClass) != null ? f : "") + '"></span><span class="datetime secondary-text"><a rel="nofollow" href="' + Ai(Ci(d.url)) + '">' + qi(d.timestamp) + '</a></span></div><p class="comment-content">' + qi(d.body) + '</p><span class="comment-actions secondary-text">' + (e < b.maxDepth ? '<a class="comment-reply" target="_self" data-comment-id="' + Ai(d.id) + '">' + qi(c.reply) + "</a>" : "") + '<span class="item-control blog-admin ' + Ai(d.adminClass) + '"><a target="_self" href="' +
            Ai(Ci(d.deleteUrl)) + '">' + qi(c["delete"]) + '</a></span></span></div><div class="comment-replies">';
        var k;
        f = (k = d.replies) != null ? k : [];
        g += '<div id="c' + Ai(d.id) + '-rt" class="comment-thread inline-thread' + (f.length === 0 ? " hidden" : "") + '"><span class="thread-toggle thread-expanded"><span class="thread-arrow"></span><span class="thread-count"><a target="_self">' + qi(c.replies) + '</a></span></span><ol id="c' + Ai(d.id) + '-ra" class="thread-chrome thread-expanded"><div>';
        k = f.length;
        for (h = 0; h < k; h++) g += Li(a, b, c, f[h],
            e ? e + 1 : 1);
        g += '</div><div id="c' + Ai(d.id) + '-continue" class="continue"><a class="comment-reply" target="_self" data-comment-id="' + Ai(d.id) + '">' + qi(c.reply) + '</a></div></ol></div></div><div class="comment-replybox-single" id="c' + Ai(d.id) + '-ce"></div></li>';
        return si(g)
    };

    function Mi(a, b, c) {
        if (typeof b === u)(b = Ni(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Ni(c, d);
                f && (c.style[f] = e)
            }
    }
    var Oi = {};

    function Ni(a, b) {
        var c = Oi[b];
        if (!c) {
            var d = zc(b);
            c = d;
            a.style[d] === void 0 && (d = (Uc ? "Webkit" : Tc ? "Moz" : Sc ? "ms" : null) + Ac(d), a.style[d] !== void 0 && (c = d));
            Oi[b] = c
        }
        return c
    };

    function Pi() {}
    Ab(Pi);

    function Qi(a) {
        Be.call(this);
        this.T = a || Jb || (Jb = new Td);
        this.Z = null;
        this.la = !1;
        this.A = null;
        this.B = void 0;
        this.O = this.I = null
    }
    F(Qi, Be);
    Pi.Sa();
    v = Qi.prototype;
    v.Ra = function() {
        return this.A
    };

    function Ri(a) {
        a.B || (a.B = new we(a));
        return a.B
    }
    v.Eb = function() {
        this.A = Ud(this.T, "DIV")
    };
    v.render = function(a) {
        if (this.la) throw Error("Component already rendered");
        this.A || this.Eb();
        a ? a.insertBefore(this.A, null) : this.T.B.body.appendChild(this.A);
        this.I && !this.I.la || this.Pa()
    };
    v.Pa = function() {
        this.la = !0;
        Si(this, function(a) {
            !a.la && a.Ra() && a.Pa()
        })
    };

    function Ti(a) {
        Si(a, function(b) {
            b.la && Ti(b)
        });
        a.B && Ae(a.B);
        a.la = !1
    }
    v.R = function() {
        this.la && Ti(this);
        this.B && (this.B.dispose(), delete this.B);
        Si(this, function(a) {
            a.dispose()
        });
        this.A && Ld(this.A);
        this.I = this.A = this.O = null;
        Qi.L.R.call(this)
    };

    function Si(a, b) {
        a.O && a.O.forEach(b, void 0)
    };

    function Ui(a, b, c, d) {
        Qi.call(this, d);
        this.G = c || window;
        this.W = a;
        this.aa = b;
        this.M = {};
        this.H = this.C = null;
        this.D = {};
        this.D.EMAIL = {
            Wa: "Email",
            pb: this.Wc
        };
        this.D.FACEBOOK = {
            Wa: "Facebook",
            pb: this.Xc
        };
        this.D.TWITTER = {
            Wa: "Twitter",
            pb: this.Yc
        }
    }
    y(Ui, Qi);
    v = Ui.prototype;
    v.Eb = function() {
        var a = this.T,
            b = a.A("DIV", {
                style: "position:absolute;width:100%;left:0;top:0;height:100%;z-index:100;",
                "class": "mobile-share-panel-outer"
            });
        this.C = a.A("DIV", {
            style: "position:absolute;;width:230px;height:200px;",
            "class": "mobile-share-panel-inner"
        });
        b.appendChild(this.C);
        var c = a.A("DIV", {
            "class": "mobile-share-panel-title"
        });
        c.innerText = ha;
        c.textContent = ha;
        this.C.appendChild(c);
        this.H = a.A("A", {
            href: "javascript:void(0)",
            "class": "mobile-share-panel-button-close"
        });
        this.H.textContent = "\u00d7";
        c.appendChild(this.H);
        for (var d in this.D) {
            c = a.A("A", {
                target: "_blank",
                display: na,
                "class": "mobile-share-panel-button mobile-share-panel-button-" + d.toLowerCase()
            });
            var e = a.A(da),
                f = this.D[d];
            e.innerText = f.Wa;
            e.textContent = f.Wa;
            c.href = f.pb.call(this);
            c.appendChild(e);
            this.C.appendChild(c);
            this.M[d] = c
        }
        this.A = b
    };
    v.Pa = function() {
        Qi.prototype.Pa.call(this);
        for (var a in this.M) {
            var b = this.M[a];
            b && ye(Ri(this), b, pa, this.qb)
        }
        ye(Ri(this), this.H, pa, this.qb);
        a = this.Ra();
        ye(Ri(this), a, pa, this.qb);
        this.Jb();
        ye(Ri(this), this.G, "scroll", this.Jb)
    };
    v.show = function(a) {
        var b = this.Ra();
        b && (b.style.display = a ? "" : p)
    };
    v.Jb = function() {
        var a = this.G.innerHeight,
            b = this.G.innerWidth,
            c = this.G.pageYOffset,
            d = this.G.pageXOffset,
            e = 0;
        200 < a && (e = (a - 200) / 2);
        Mi(this.C, "top", e + c + "px");
        a = 0;
        b > 230 && (a = (b - 230) / 2);
        Mi(this.C, "left", a + d + "px")
    };
    v.Yc = function() {
        return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(this.W + ": " + this.aa)
    };
    v.Xc = function() {
        return "https://m.facebook.com/sharer.php?u=" + encodeURIComponent(this.aa) + "&t=" + encodeURIComponent(this.W)
    };
    v.Wc = function() {
        return "mailto:?subject=" + encodeURIComponent(this.W) + "&body=" + encodeURIComponent(this.aa)
    };
    v.qb = function() {
        this.show(!1)
    };
    var Vi = RegExp("^((http(s)?):)?\\/\\/((((lh[3-6](-tt|-d[a-g,y,z]|-testonly)?\\.((ggpht)|(googleusercontent)|(google)|(sandbox\\.google)))|(lh7\\-(eu|us|qw|rt)\\.((googleusercontent)|(google)))|((photos|testonly|work)\\.fife\\.usercontent\\.google)|([\\w\\-]+\\.fife\\.usercontent\\.google)|(([1-4]\\.bp\\.blogspot)|(bp[0-3]\\.blogger))|(ccp-lh\\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\\.(ggpht|googleusercontent))|(gm[1-4]\\.ggpht)|(play-(ti-)?lh\\.googleusercontent)|(gz0\\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\\.(ggpht|googleusercontent)))\\.com)|(drive\\.google\\.com\\/drive\\-(usercontent|viewer))|(dp[3-6]\\.googleusercontent\\.cn)|(lh[3-6]\\.(googleadsserving\\.cn|xn--9kr7l\\.com))|((photos|drive|contribution)\\-image\\-(dev|qa)(-auth|-cookie)?\\.corp\\.google\\.com)|(photos\\-image\\-dev\\-dl\\-(auth|eu|us)\\.corp\\.google\\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\\.sandbox\\.google\\.com\\/image)|(image\\-(dev|qa)\\-lighthouse(-auth)?\\.sandbox\\.google\\.com(\\/image)?)|(drive\\-qa\\.corp\\.google\\.com\\/drive\\-(usercontent|viewer)))\\/",
            "i"),
        Wi = /^(https?:)?\/\/sp[1-4]\.((ggpht)|(googleusercontent))\.com\//i,
        Xi = /^(https?:)?\/\/(qa(-red|-blue)?|dev2?|image-dev)(-|\.)lighthouse(-auth)?\.sandbox\.google\.com\//i,
        Yi = /^(https?:)?\/\/lighthouse-(qa(-red|-blue)?|dev2)\.corp\.google\.com\//i;

    function Zi(a) {
        return Vi.test(a) || Wi.test(a) || Xi.test(a) || Yi.test(a)
    };

    function $i(a) {
        this.na = wh(a)
    }
    y($i, Lh);
    $i.prototype.getToken = function() {
        return Gh(this, 24)
    };
    $i.prototype.setToken = function(a) {
        return Jh(this, 24, a)
    };

    function aj() {
        this.B = void 0;
        this.A = {}
    }
    v = aj.prototype;
    v.set = function(a, b) {
        bj(this, a, b, !1)
    };
    v.add = function(a, b) {
        bj(this, a, b, !0)
    };

    function bj(a, b, c, d) {
        for (var e = 0; e < b.length; e++) {
            var f = b.charAt(e);
            a.A[f] || (a.A[f] = new aj);
            a = a.A[f]
        }
        if (d && a.B !== void 0) throw Error('The collection already contains the key "' + b + '"');
        a.B = c
    }

    function cj(a, b) {
        for (var c = 0; c < b.length; c++)
            if (a = a.A[b.charAt(c)], !a) return;
        return a
    }
    v.get = function(a) {
        return (a = cj(this, a)) ? a.B : void 0
    };
    v.V = function() {
        var a = [];
        dj(this, a);
        return a
    };

    function dj(a, b) {
        a.B !== void 0 && b.push(a.B);
        for (var c in a.A) dj(a.A[c], b)
    }
    v.ga = function(a) {
        var b = [];
        if (a) {
            for (var c = this, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if (!c.A[e]) return [];
                c = c.A[e]
            }
            ej(c, a, b)
        } else ej(this, "", b);
        return b
    };

    function ej(a, b, c) {
        a.B !== void 0 && c.push(b);
        for (var d in a.A) ej(a.A[d], b + d, c)
    }
    v.clear = function() {
        this.A = {};
        this.B = void 0
    };
    v.N = function() {
        var a = this.V();
        if (a.N && typeof a.N == n) a = a.N();
        else if (Cb(a) || typeof a === u) a = a.length;
        else {
            var b = 0,
                c;
            for (c in a) b++;
            a = b
        }
        return a
    };
    v.da = function() {
        var a;
        if (a = this.B === void 0) a: {
            for (var b in this.A) {
                a = !1;
                break a
            }
            a = !0
        }
        return a
    };

    function fj() {
        if (!gj) {
            var a = gj = new aj,
                b;
            for (b in hj) a.add(b, hj[b])
        }
    }
    var gj;

    function V(a, b) {
        this.types = a;
        this.A = b
    }
    var hj = {
        a: new V([3, 0], [function(a, b) {
            T(a, 21, b)
        }, function(a, b) {
            U(a, 56, b)
        }]),
        al: new V([3], [function(a, b) {
            T(a, 74, b)
        }]),
        b: new V([3, 0], [function(a, b) {
            T(a, 23, b)
        }, function(a, b) {
            U(a, 38, b)
        }]),
        ba: new V([0], [function(a, b) {
            U(a, 85, b)
        }]),
        bc: new V([0], [function(a, b) {
            U(a, 87, b)
        }]),
        br: new V([0], [function(a, b) {
            U(a, 86, b)
        }]),
        c: new V([3, 0], [function(a, b) {
            T(a, 2, b)
        }, function(a, b) {
            U(a, 39, b)
        }]),
        cc: new V([3], [function(a, b) {
            T(a, 51, b)
        }]),
        ci: new V([3], [function(a, b) {
            T(a, 32, b)
        }]),
        ckm: new V([3], [function(a, b) {
            T(a, 104, b)
        }]),
        cp: new V([0],
            [function(a, b) {
                U(a, 92, b)
            }]),
        cr: new V([3], [function(a, b) {
            T(a, 108, b)
        }]),
        cv: new V([0], [function(a, b) {
            U(a, 94, b)
        }]),
        d: new V([3], [function(a, b) {
            T(a, 3, b)
        }]),
        dc: new V([5], [function(a, b) {
            Jh(a, 99, b)
        }]),
        df: new V([3], [function(a, b) {
            T(a, 80, b)
        }]),
        dv: new V([3], [function(a, b) {
            T(a, 90, b)
        }]),
        e: new V([0], [function(a, b) {
            U(a, 15, b)
        }]),
        em: new V([0], [function(a, b) {
            U(a, 107, b)
        }]),
        f: new V([4], [function(a, b) {
            Jh(a, 16, b)
        }]),
        fg: new V([3], [function(a, b) {
            T(a, 34, b)
        }]),
        fh: new V([3], [function(a, b) {
            T(a, 30, b)
        }]),
        fm: new V([3], [function(a,
            b) {
            T(a, 84, b)
        }]),
        fo: new V([2], [function(a, b) {
            Ih(a, 79, b)
        }]),
        ft: new V([3], [function(a, b) {
            T(a, 50, b)
        }]),
        fv: new V([3], [function(a, b) {
            T(a, 31, b)
        }]),
        g: new V([3], [function(a, b) {
            T(a, 14, b)
        }]),
        gd: new V([3], [function(a, b) {
            T(a, 83, b)
        }]),
        gm: new V([3], [function(a, b) {
            T(a, 105, b)
        }]),
        h: new V([3, 0], [function(a, b) {
            T(a, 4, b)
        }, function(a, b) {
            U(a, 13, b)
        }]),
        i: new V([3], [function(a, b) {
            T(a, 22, b)
        }]),
        ic: new V([0], [function(a, b) {
            U(a, 71, b)
        }]),
        id: new V([3], [function(a, b) {
            T(a, 70, b)
        }]),
        il: new V([3], [function(a, b) {
            T(a, 96, b)
        }]),
        ip: new V([3],
            [function(a, b) {
                T(a, 54, b)
            }]),
        iv: new V([0], [function(a, b) {
            Hh(a, 75, b)
        }]),
        j: new V([1], [function(a, b) {
            b = b == null ? b : qh(b);
            Dh(a, 29, b)
        }]),
        k: new V([3, 0], [function(a, b) {
            T(a, 17, b)
        }, function(a, b) {
            U(a, 42, b)
        }]),
        l: new V([0], [function(a, b) {
            U(a, 44, b)
        }]),
        lf: new V([3], [function(a, b) {
            T(a, 65, b)
        }]),
        lo: new V([3], [function(a, b) {
            T(a, 97, b)
        }]),
        m: new V([0], [function(a, b) {
            U(a, 63, b)
        }]),
        md: new V([3], [function(a, b) {
            T(a, 91, b)
        }]),
        mm: new V([4], [function(a, b) {
            Jh(a, 81, b)
        }]),
        mo: new V([3], [function(a, b) {
            T(a, 73, b)
        }]),
        mv: new V([3], [function(a,
            b) {
            T(a, 66, b)
        }]),
        n: new V([3], [function(a, b) {
            T(a, 20, b)
        }]),
        nc: new V([3], [function(a, b) {
            T(a, 55, b)
        }]),
        nd: new V([3], [function(a, b) {
            T(a, 53, b)
        }]),
        ng: new V([3], [function(a, b) {
            T(a, 95, b)
        }]),
        ngm: new V([3], [function(a, b) {
            T(a, 106, b)
        }]),
        no: new V([3], [function(a, b) {
            T(a, 37, b)
        }]),
        ns: new V([3], [function(a, b) {
            T(a, 40, b)
        }]),
        nt0: new V([4], [function(a, b) {
            Jh(a, 36, b)
        }]),
        nu: new V([3], [function(a, b) {
            T(a, 46, b)
        }]),
        nw: new V([3], [function(a, b) {
            T(a, 48, b)
        }]),
        o: new V([1, 3], [function(a, b) {
            b = b == null ? b : qh(b);
            Dh(a, 7, b)
        }, function(a, b) {
            T(a,
                27, b)
        }]),
        p: new V([3, 0], [function(a, b) {
            T(a, 19, b)
        }, function(a, b) {
            U(a, 43, b)
        }]),
        pa: new V([3], [function(a, b) {
            T(a, 61, b)
        }]),
        pc: new V([0], [function(a, b) {
            U(a, 88, b)
        }]),
        pd: new V([3], [function(a, b) {
            T(a, 60, b)
        }]),
        pf: new V([3], [function(a, b) {
            T(a, 67, b)
        }]),
        pg: new V([3], [function(a, b) {
            T(a, 72, b)
        }]),
        pi: new V([2], [function(a, b) {
            Ih(a, 76, b)
        }]),
        pp: new V([3], [function(a, b) {
            T(a, 52, b)
        }]),
        q: new V([4], [function(a, b) {
            Jh(a, 28, b)
        }]),
        r: new V([3, 0], [function(a, b) {
            T(a, 6, b)
        }, function(a, b) {
            U(a, 26, b)
        }]),
        ra: new V([3], [function(a, b) {
            T(a,
                103, b)
        }]),
        rf: new V([3], [function(a, b) {
            T(a, 100, b)
        }]),
        rg: new V([3], [function(a, b) {
            T(a, 59, b)
        }]),
        rh: new V([3], [function(a, b) {
            T(a, 49, b)
        }]),
        rj: new V([3], [function(a, b) {
            T(a, 57, b)
        }]),
        ro: new V([2], [function(a, b) {
            Ih(a, 78, b)
        }]),
        rp: new V([3], [function(a, b) {
            T(a, 58, b)
        }]),
        rw: new V([3], [function(a, b) {
            T(a, 35, b)
        }]),
        rwa: new V([3], [function(a, b) {
            T(a, 64, b)
        }]),
        rwu: new V([3], [function(a, b) {
            T(a, 41, b)
        }]),
        s: new V([3, 0], [function(a, b) {
            T(a, 33, b)
        }, function(a, b) {
            U(a, 1, b)
        }]),
        sb: new V([0], [function(a, b) {
            U(a, 110, b)
        }]),
        sc: new V([0],
            [function(a, b) {
                U(a, 89, b)
            }]),
        sg: new V([3], [function(a, b) {
            T(a, 82, b)
        }]),
        sl: new V([0], [function(a, b) {
            U(a, 109, b)
        }]),
        sm: new V([3], [function(a, b) {
            T(a, 93, b)
        }]),
        t: new V([4], [function(a, b) {
            a.setToken(b)
        }]),
        u: new V([3], [function(a, b) {
            T(a, 18, b)
        }]),
        ut: new V([3], [function(a, b) {
            T(a, 45, b)
        }]),
        v: new V([0], [function(a, b) {
            U(a, 62, b)
        }]),
        vb: new V([0], [function(a, b) {
            Hh(a, 68, b)
        }]),
        vf: new V([4], [function(a, b) {
            Jh(a, 102, b)
        }]),
        vl: new V([0], [function(a, b) {
            Hh(a, 69, b)
        }]),
        vm: new V([3], [function(a, b) {
            T(a, 98, b)
        }]),
        w: new V([0], [function(a,
            b) {
            U(a, 12, b)
        }]),
        x: new V([0], [function(a, b) {
            U(a, 9, b)
        }]),
        y: new V([0], [function(a, b) {
            U(a, 10, b)
        }]),
        ya: new V([2], [function(a, b) {
            Ih(a, 77, b)
        }]),
        z: new V([0], [function(a, b) {
            U(a, 11, b)
        }])
    };
    v = fj.prototype;
    v.parse = function(a) {
        var b = new $i,
            c = new $i;
        if (a == "") a = !0;
        else {
            a = a.split("-");
            for (var d = !0, e = 0; e < a.length; e++) {
                var f = a[e];
                if (f.length == 0) d = !1;
                else {
                    var g = f,
                        h = !1;
                    var k = g;
                    var m = g.substring(0, 1);
                    m != m.toLowerCase() && (h = !0, k = g.substring(0, 1).toLowerCase() + g.substring(1));
                    var r = gj;
                    for (m = 1; m <= k.length; ++m) {
                        var B = r,
                            C = k.substring(0, m);
                        if (C.length == 0 ? B.da() : !cj(B, C)) break
                    }
                    k = m == 1 ? null : (k = r.get(k.substring(0, m - 1))) ? {
                        td: g.substring(0, m - 1),
                        value: g.substring(m - 1),
                        Cd: h,
                        attributes: k
                    } : null;
                    if (k) {
                        g = [];
                        h = [];
                        m = !1;
                        for (r =
                            0; r < k.attributes.types.length; r++) {
                            B = k.attributes.types[r];
                            var D = k.value;
                            C = e;
                            if (k.Cd && B == 1)
                                for (var R = D.length; R < 12 && C < a.length - 1;) D += "-" + a[C + 1], R = D.length, ++C;
                            else if (B == 2)
                                for (; C < a.length - 1 && a[C + 1].match(/^[\d\.]/);) D += "-" + a[C + 1], ++C;
                            R = k.attributes.A[r];
                            D = ij(this, B)(k.td, D, b, c, R);
                            if (D === null) {
                                m = !0;
                                e = C;
                                break
                            } else g.push(B), h.push(D)
                        }
                        if (!m)
                            for (k = 0; k < h.length; k++) r = g[k], D = h[k], jj(this, r)(f, D);
                        d = d && m
                    } else d = !1
                }
            }
            a = d
        }
        return new kj(b, c, a)
    };

    function lj(a, b, c, d, e, f) {
        e(c, b);
        a = a.substring(0, 1);
        f = f(a == a.toUpperCase());
        e(d, f)
    }
    v.wd = function(a, b, c, d, e) {
        if (b == "") return 0;
        isFinite(b) && (b = String(b));
        b = typeof b === u ? /^\s*-?0x/i.test(b) ? parseInt(b, 16) : parseInt(b, 10) : NaN;
        if (isNaN(b)) return 1;
        lj(a, b, c, d, e, Number);
        return null
    };
    v.jd = function() {};
    v.vd = function(a, b, c, d, e) {
        if (b == "") return 0;
        var f = Number(b);
        b = f == 0 && /^[\s\xa0]*$/.test(b) ? NaN : f;
        if (isNaN(b)) return 1;
        lj(a, b, c, d, e, Number);
        return null
    };
    v.hd = function() {};
    v.ud = function(a, b, c, d, e) {
        if (b != "") return 2;
        lj(a, !0, c, d, e, Boolean);
        return null
    };
    v.fd = function() {};
    v.xd = function(a, b, c, d, e) {
        if (b == "") return 0;
        lj(a, b, c, d, e, function(f) {
            return f ? "1" : ""
        });
        return null
    };
    v.kd = function() {};
    v.yd = function(a, b, c, d, e) {
        if (b == "") return 0;
        lj(a, b, c, d, e, function(f) {
            return f ? 1 : 0
        });
        return null
    };

    function ij(a, b) {
        switch (b) {
            case 0:
                return A(a.wd, a);
            case 2:
                return A(a.vd, a);
            case 3:
                return A(a.ud, a);
            case 4:
                return A(a.xd, a);
            case 1:
                return A(a.yd, a);
            default:
                return function() {}
        }
    }

    function jj(a, b) {
        switch (b) {
            case 0:
                return A(a.jd, a);
            case 2:
                return A(a.hd, a);
            case 3:
                return A(a.fd, a);
            case 4:
            case 1:
                return A(a.kd, a);
            default:
                return function() {}
        }
    }

    function kj(a, b, c) {
        this.A = a;
        this.B = b;
        this.C = c
    }
    kj.prototype.H = function() {
        return this.C
    };

    function mj(a, b) {
        a != null && this.append.apply(this, arguments)
    }
    v = mj.prototype;
    v.oa = "";
    v.set = function(a) {
        this.oa = "" + a
    };
    v.append = function(a, b, c) {
        this.oa += String(a);
        if (b != null)
            for (var d = 1; d < arguments.length; d++) this.oa += arguments[d];
        return this
    };
    v.clear = function() {
        this.oa = ""
    };
    v.toString = function() {
        return this.oa
    };

    function nj(a) {
        this.D = null;
        this.C = [];
        this.B = null;
        oj(this, a)
    }

    function pj(a) {
        a.D == null && (a.D = new fj);
        return a.D
    }

    function oj(a, b) {
        a.B = b ? typeof b === u ? pj(a).parse(b) : b : pj(a).parse("")
    }

    function qj(a, b) {
        return a == b ? !1 : !0
    }
    v = nj.prototype;
    v.hb = function(a) {
        a = a || void 0;
        var b = this.B,
            c = b.A;
        qj(a, S(c, 2), S(b.B, 2)) && T(c, 2, a);
        return this
    };
    v.gb = function(a) {
        a = a || void 0;
        var b = this.B,
            c = b.A;
        qj(a, P(c, 51), P(b.B, 51)) && T(c, 51, a);
        return this
    };
    v.ib = function(a) {
        a = a || void 0;
        var b = this.B,
            c = b.A;
        qj(a, P(c, 32), P(b.B, 32)) && T(c, 32, a);
        return this
    };
    v.Ia = function(a) {
        var b = this.B,
            c = b.A;
        qj(a, Q(c, 13), Q(b.B, 13)) && U(c, 13, a);
        return this
    };
    v.fb = function(a) {
        a = a || void 0;
        var b = this.B,
            c = b.A;
        qj(a, S(c, 20), S(b.B, 20)) && T(c, 20, a);
        return this
    };
    v.kb = function(a) {
        a = a || void 0;
        var b = this.B,
            c = b.A;
        qj(a, S(c, 19), S(b.B, 19)) && T(c, 19, a);
        return this
    };
    v.jb = function(a) {
        a = a || void 0;
        var b = this.B,
            c = b.A;
        qj(a, P(c, 60), P(b.B, 60)) && T(c, 60, a);
        return this
    };
    v.mb = function(a) {
        a = a || void 0;
        var b = this.B,
            c = b.A;
        qj(a, S(c, 67), S(b.B, 67)) && T(c, 67, a);
        return this
    };
    v.lb = function(a) {
        a = a || void 0;
        var b = this.B,
            c = b.A;
        qj(a, S(c, 52), S(b.B, 52)) && T(c, 52, a);
        return this
    };
    v.ua = function(a) {
        var b = this.B,
            c = b.A;
        qj(a, Q(c, 1), Q(b.B, 1)) && U(c, 1, a);
        return this
    };
    v.setToken = function(a) {
        a = a || void 0;
        var b = this.B,
            c = b.A;
        qj(a, c.getToken(), b.B.getToken()) && c.setToken(a);
        return this
    };
    v.Ja = function(a) {
        var b = this.B,
            c = b.A;
        qj(a, Q(c, 12), Q(b.B, 12)) && U(c, 12, a);
        return this
    };

    function rj(a) {
        oj(a, "");
        return a
    }
    v.ia = function() {
        this.C.length = 0;
        var a = this.B,
            b = a.A;
        a = a.B;
        W(this, "s", Q(b, 1), Q(a, 1));
        W(this, "w", Q(b, 12), Q(a, 12));
        X(this, "c", S(b, 2), S(a, 2));
        X(this, "d", S(b, 3), S(a, 3));
        W(this, "h", Q(b, 13), Q(a, 13));
        X(this, "s", P(b, 33), P(a, 33));
        X(this, "h", S(b, 4), S(a, 4));
        X(this, "p", S(b, 19), S(a, 19));
        X(this, "pp", S(b, 52), S(a, 52));
        X(this, "pf", S(b, 67), S(a, 67));
        X(this, "n", S(b, 20), S(a, 20));
        W(this, "r", Q(b, 26), Q(a, 26));
        X(this, "r", S(b, 6), S(a, 6));
        X(this, "o", P(b, 27), P(a, 27));
        var c = rh(Bh(b, 7));
        sj(this, "o", c, rh(Bh(a, 7)));
        c = rh(Bh(b, 29));
        sj(this, "j", c, rh(Bh(a, 29)));
        W(this, "x", Q(b, 9), Q(a, 9));
        W(this, "y", Q(b, 10), Q(a, 10));
        W(this, "z", Q(b, 11), Q(a, 11));
        X(this, "g", S(b, 14), S(a, 14));
        W(this, "e", Q(b, 15), Q(a, 15));
        sj(this, "f", Gh(b, 16), Gh(a, 16));
        X(this, "k", P(b, 17), P(a, 17));
        X(this, "u", P(b, 18), !0);
        X(this, "ut", P(b, 45), !0);
        X(this, "i", P(b, 22), !0);
        X(this, "a", P(b, 21), P(a, 21));
        X(this, "b", S(b, 23), S(a, 23));
        W(this, "b", Q(b, 38), Q(a, 38));
        W(this, "c", Q(b, 39), Q(a, 39), 16, 8);
        sj(this, "q", Gh(b, 28), Gh(a, 28));
        X(this, "fh", P(b, 30), P(a, 30));
        X(this, "fv", P(b, 31), P(a, 31));
        X(this, "fg", S(b, 34), S(a, 34));
        X(this, "ci", P(b, 32), P(a, 32));
        sj(this, "t", b.getToken(), a.getToken());
        sj(this, "nt0", Gh(b, 36), Gh(a, 36));
        X(this, "rw", S(b, 35), S(a, 35));
        X(this, "rwu", S(b, 41), S(a, 41));
        X(this, "rwa", S(b, 64), S(a, 64));
        X(this, "nw", S(b, 48), S(a, 48));
        X(this, "rh", S(b, 49), S(a, 49));
        X(this, "no", S(b, 37), S(a, 37));
        X(this, "ns", P(b, 40), P(a, 40));
        W(this, "k", Q(b, 42), Q(a, 42));
        W(this, "p", Q(b, 43), Q(a, 43));
        W(this, "l", Q(b, 44), Q(a, 44));
        W(this, "v", Q(b, 62), Q(a, 62));
        X(this, "nu", P(b, 46), P(a, 46));
        X(this, "ft", P(b, 50), P(a, 50));
        X(this, "cc", P(b, 51), P(a, 51));
        X(this, "nd", P(b, 53), P(a, 53));
        X(this, "ip", P(b, 54), P(a, 54));
        X(this, "nc", P(b, 55), P(a, 55));
        W(this, "a", Q(b, 56), Q(a, 56));
        X(this, "rj", P(b, 57), P(a, 57));
        X(this, "rp", P(b, 58), P(a, 58));
        X(this, "rg", P(b, 59), P(a, 59));
        X(this, "pd", P(b, 60), P(a, 60));
        X(this, "pa", P(b, 61), P(a, 61));
        W(this, "m", Q(b, 63), Q(a, 63));
        W(this, "vb", ph(Bh(b, 68)), ph(Bh(a, 68)));
        W(this, "vl", ph(Bh(b, 69)), ph(Bh(a, 69)));
        X(this, "lf", P(b, 65), P(a, 65));
        X(this, "mv", P(b, 66), P(a, 66));
        X(this, "id", P(b, 70), P(a, 70));
        W(this, "ic", Q(b, 71),
            !0);
        X(this, "pg", S(b, 72), S(a, 72));
        X(this, "mo", P(b, 73), P(a, 73));
        X(this, "al", P(b, 74), P(a, 74));
        W(this, "iv", ph(Bh(b, 75)), ph(Bh(a, 75)));
        W(this, "pi", Fh(b, 76), Fh(a, 76));
        W(this, "ya", Fh(b, 77), Fh(a, 77));
        W(this, "ro", Fh(b, 78), Fh(a, 78));
        W(this, "fo", Fh(b, 79), Fh(a, 79));
        X(this, "df", P(b, 80), P(a, 80));
        sj(this, "mm", Gh(b, 81), Gh(a, 81));
        X(this, "sg", P(b, 82), P(a, 82));
        X(this, "gd", P(b, 83), P(a, 83));
        X(this, "fm", P(b, 84), P(a, 84));
        W(this, "ba", Q(b, 85), Q(a, 85));
        W(this, "br", Q(b, 86), Q(a, 86));
        W(this, "bc", Q(b, 87), Q(a, 87), 16, 8);
        W(this,
            "pc", Q(b, 88), Q(a, 88), 16, 8);
        W(this, "sc", Q(b, 89), Q(a, 89), 16, 8);
        X(this, "dv", P(b, 90), P(a, 90));
        X(this, "md", P(b, 91), P(a, 91));
        W(this, "cp", Q(b, 92), Q(a, 92));
        X(this, "sm", P(b, 93), P(a, 93));
        W(this, "cv", Q(b, 94), Q(a, 94));
        X(this, "ng", P(b, 95), P(a, 95));
        X(this, "il", P(b, 96), P(a, 96));
        X(this, "lo", P(b, 97), P(a, 97));
        X(this, "vm", P(b, 98), P(a, 98));
        sj(this, "dc", Gh(b, 99), Gh(a, 99));
        X(this, "rf", P(b, 100), P(a, 100));
        sj(this, "vf", Gh(b, 102), Gh(a, 102));
        X(this, "ra", S(b, 103), S(a, 103));
        X(this, "ckm", P(b, 104), P(a, 104));
        X(this, "gm", P(b, 105),
            P(a, 105));
        X(this, "ngm", P(b, 106), P(a, 106));
        W(this, "em", Q(b, 107), Q(a, 107));
        X(this, "cr", P(b, 108), P(a, 108));
        W(this, "sl", Q(b, 109), Q(a, 109));
        W(this, "sb", Q(b, 110), Q(a, 110));
        return this.C.join("-")
    };

    function W(a, b, c, d, e, f) {
        if (c != null) {
            var g = e == void 0 || e != 10 && e != 16 ? 10 : e;
            c = c.toString(g);
            e = new mj;
            e.append(g == 16 ? "0x" : "");
            g = e.append;
            f == void 0 ? f = "" : (f -= c.length, f = f <= 0 ? "" : yc("0", f));
            g.call(e, f);
            e.append(c);
            tj(a, b, e.toString(), !!d)
        }
    }

    function X(a, b, c, d) {
        c && tj(a, b, "", !!d)
    }

    function sj(a, b, c, d) {
        c && tj(a, b, c, !!d)
    }

    function tj(a, b, c, d) {
        d && (b = b.substring(0, 1).toUpperCase() + b.substring(1));
        a.C.push(b + c)
    };

    function Y(a) {
        nj.call(this, a)
    }
    F(Y, nj);
    v = Y.prototype;
    v.hb = function(a) {
        a && uj(this);
        return Y.L.hb.call(this, a)
    };
    v.Ia = function(a) {
        a = a == null || a < 0 ? void 0 : a;
        a != null && this.ua();
        return Y.L.Ia.call(this, a)
    };
    v.ib = function(a) {
        a && uj(this);
        return Y.L.ib.call(this, a)
    };
    v.gb = function(a) {
        a && uj(this);
        return Y.L.gb.call(this, a)
    };
    v.ua = function(a) {
        Db(a) && (a = Math.max(a.width, a.height));
        a = a == null || a < 0 ? void 0 : a;
        a != null && (this.Ja(), this.Ia());
        return Y.L.ua.call(this, a)
    };
    v.kb = function(a) {
        a && uj(this);
        return Y.L.kb.call(this, a)
    };
    v.lb = function(a) {
        a && uj(this);
        return Y.L.lb.call(this, a)
    };
    v.mb = function(a) {
        a && uj(this);
        return Y.L.mb.call(this, a)
    };
    v.fb = function(a) {
        a && uj(this);
        return Y.L.fb.call(this, a)
    };
    v.jb = function(a) {
        a && uj(this);
        return Y.L.jb.call(this, a)
    };
    v.Ja = function(a) {
        a = a == null || a < 0 ? void 0 : a;
        a != null && this.ua();
        return Y.L.Ja.call(this, a)
    };

    function uj(a) {
        a.fb();
        a.gb();
        a.hb();
        a.ib();
        a.jb();
        a.kb();
        a.lb();
        a.mb()
    }
    v.ia = function() {
        var a = this.B.A;
        P(a, 18) || P(a, 45) ? Q(a, 1) || this.ua(0) : (a = this.B.A, Q(a, 1) || Q(a, 12) || Q(a, 13) || (this.ua(), this.Ia(), this.Ja(), uj(this)));
        return Y.L.ia.call(this)
    };
    var vj = /^[^\/]*\/\//;

    function wj(a, b) {
        b = b === void 0 ? !1 : b;
        this.D = a;
        this.J = "";
        (a = this.D.match(vj)) && a[0] ? (this.J = a[0], a = this.J.match(/\w+/) ? this.D : "http://" + this.D.substring(this.J.length)) : a = "http://" + this.D;
        this.B = ci(a, !0);
        this.T = b;
        this.G = !0;
        this.ja = !1
    }

    function xj(a, b) {
        a.C = a.C ? a.C + ("/" + b) : b
    }

    function yj(a) {
        if (a.A == void 0) {
            var b = a.B.B.substring(1);
            a.C = null;
            if (a.T) {
                a.A = [];
                if ((b.match(/=/g) || []).length > 1) return a.G = !1, a.A;
                var c = b.indexOf("=");
                c != -1 ? (a.A.push(b.substr(0, c)), a.A.push(b.substr(c + 1))) : a.A.push(b);
                return a.A
            }
            a.A = b.split("/");
            b = a.A.length;
            b > 2 && a.A[0] == "u" && (xj(a, a.A[0] + "/" + a.A[1]), a.A.shift(), a.A.shift(), b -= 2);
            if (b == 0 || b == 4 || b > 7) return a.G = !1, a.A;
            if (b == 2) xj(a, a.A[0]);
            else if (a.A[0] == "image") xj(a, a.A[0]);
            else if (b == 7 || b == 3) return a.G = !1, a.A;
            if (b <= 3) {
                a.ja = !0;
                b == 3 && (xj(a, a.A[1]),
                    a.A.shift(), --b);
                --b;
                c = a.A[b];
                var d = c.indexOf("=");
                d != -1 && (a.A[b] = c.substr(0, d), a.A.push(c.substr(d + 1)))
            }
        }
        return a.A
    }
    wj.prototype.H = function() {
        yj(this);
        return this.G
    };

    function zj(a) {
        yj(a);
        return a.ja
    }

    function Aj(a) {
        yj(a);
        return a.T
    }

    function Bj(a) {
        yj(a);
        a.C == void 0 && (a.C = null);
        return a.C
    }

    function Cj(a) {
        switch (yj(a).length) {
            case 7:
                return !0;
            case 6:
                return Bj(a) == null;
            case 5:
                return !1;
            case 3:
                return !0;
            case 2:
                return Bj(a) == null;
            case 1:
                return !1;
            default:
                return !1
        }
    }

    function Dj(a, b) {
        if (Aj(a)) a: {
            switch (b) {
                case 7:
                    b = 0;
                    break;
                case 4:
                    if (!Cj(a)) {
                        a = null;
                        break a
                    }
                    b = 1;
                    break;
                default:
                    a = null;
                    break a
            }
            a = yj(a)[b]
        }
        else if (zj(a)) a: {
            var c = Bj(a) != null ? 1 : 0;
            switch (b) {
                case 6:
                    b = 0 + c;
                    break;
                case 4:
                    if (!Cj(a)) {
                        a = null;
                        break a
                    }
                    b = 1 + c;
                    break;
                default:
                    a = null;
                    break a
            }
            a = yj(a)[b]
        }
        else a: {
            c = Bj(a) != null ? 1 : 0;
            switch (b) {
                case 0:
                    b = 0 + c;
                    break;
                case 1:
                    b = 1 + c;
                    break;
                case 2:
                    b = 2 + c;
                    break;
                case 3:
                    b = 3 + c;
                    break;
                case 4:
                    if (!Cj(a)) {
                        a = null;
                        break a
                    }
                    b = 4 + c;
                    break;
                case 5:
                    b = Cj(a) ? 1 : 0;
                    b = 4 + c + b;
                    break;
                default:
                    a = null;
                    break a
            }
            a = yj(a)[b]
        }
        return a
    }

    function Ej(a) {
        a.va == void 0 && (a.va = Dj(a, 4));
        return a.va
    };

    function Fj() {}
    Fj.prototype.parse = function(a, b) {
        return new Gj(a, b === void 0 ? !1 : b)
    };

    function Gj(a, b) {
        wj.call(this, a, b === void 0 ? !1 : b)
    }
    y(Gj, wj);

    function Hj(a, b) {
        b = b === void 0 ? !1 : b;
        this.A = null;
        a instanceof Gj || (Ij == void 0 && (Ij = new Fj), a = Ij.parse(a.toString(), b));
        a = this.A = a;
        a.I == void 0 && ((b = Ej(a)) || (b = ""), a.I = (new fj).parse(b));
        nj.call(this, a.I);
        this.I = this.A.J;
        a = this.A;
        b = a.B.J;
        this.J = a.B.C + (b ? ":" + b : "");
        this.G = this.A.B.A.toString()
    }
    var Ij;
    F(Hj, Y);

    function Jj(a) {
        a.G = "";
        return a
    }
    Hj.prototype.H = function() {
        return this.A.H()
    };
    Hj.prototype.ia = function() {
        if (!this.A.H()) return this.A.D;
        var a = Hj.L.ia.call(this),
            b = [];
        Bj(this.A) != null && b.push(Bj(this.A));
        var c = Aj(this.A);
        if (zj(this.A)) {
            var d = this.A;
            d.W == void 0 && (d.W = Dj(d, 6));
            b.push(d.W + (a ? "=" + a : ""))
        } else if (c) {
            d = b.push;
            var e = this.A;
            e.S === void 0 && (e.S = Dj(e, 7));
            d.call(b, e.S);
            a && b.push(a)
        } else d = b.push, e = this.A, e.aa == void 0 && (e.aa = Dj(e, 0)), d.call(b, e.aa), d = b.push, e = this.A, e.wa == void 0 && (e.wa = Dj(e, 1)), d.call(b, e.wa), d = b.push, e = this.A, e.O == void 0 && (e.O = Dj(e, 2)), d.call(b, e.O), d = b.push,
            e = this.A, e.Aa == void 0 && (e.Aa = Dj(e, 3)), d.call(b, e.Aa), a && b.push(a), a = b.push, d = this.A, d.M == void 0 && (d.M = Dj(d, 5)), a.call(b, d.M);
        b = ci(this.I + this.J + "/" + (c ? b.join("=") : b.join("/")) + (this.G ? "?" + this.G : "")).toString();
        b.startsWith("%3a//") && (b = b.replace("%3a//", "://"));
        return b
    };
    var Kj = new Fj;
    var Lj = RegExp('^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com))/img/(a))/([^/=? "]+)(?:=([-a-zA-Z0-9_=]+))?(?:\\?[^/ "]*)?$'),
        Mj = RegExp('^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com))/img/(proxy))/([^/=? "]+)(?:=([-a-zA-Z0-9_=]+))?(?:\\?[^/ "]*)?$'),
        Nj = RegExp('^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com)))/img/(b)/[^/? "]*/([^/=? "]+)/(?:([-a-zA-Z0-9_=]+)?/(?:[^/? "]*)?)?(?:\\?[^/ "]*)?$'),
        Oj = {
            fc: 3,
            proxy: 3,
            hc: 3
        },
        Pj = {
            fc: 4,
            proxy: 4,
            hc: 4
        };

    function Qj(a) {
        return Lj.test(a) || Mj.test(a) || Nj.test(a)
    }

    function Rj(a) {
        return "/blogger/image/" + Sj(a, Oj) + "/" + Sj(a, Pj)
    }

    function Sj(a, b) {
        if (Lj.test(a)) {
            var c;
            return (c = Lj.exec(a)[b.fc]) != null ? c : ""
        }
        if (Mj.test(a)) {
            var d;
            return (d = Mj.exec(a)[b.proxy]) != null ? d : ""
        }
        if (Nj.test(a)) {
            var e;
            return (e = Nj.exec(a)[b.hc]) != null ? e : ""
        }
        throw Error("Not a blogger image url: " + a);
    };

    function Tj() {
        var a = Uj,
            b = "qa";
        if (a.qa && a.hasOwnProperty(b)) return a.qa;
        var c = new a;
        a.qa = c;
        a.hasOwnProperty(b);
        return c
    };

    function Uj() {
        this.C = null;
        this.A = {};
        this.B = !1
    }
    Uj.prototype.init = function(a, b) {
        var c = ef(a);
        De.Sa().init(a, c);
        this.D = b
    };
    Uj.prototype.G = function(a, b, c) {
        c.ctrlKey || c.altKey || c.shiftKey || c.metaKey || (a = this.A[a]) && a.length > 0 && (Vj(this), Ge()(a, b), c.preventDefault())
    };
    Uj.prototype.H = function() {
        Vj(this);
        Ee(function() {})
    };

    function Vj(a) {
        a.B || (document.body.appendChild(Gd("LINK", {
            type: "text/css",
            rel: "stylesheet",
            href: a.D
        })), a.B = !0)
    };

    function Wj() {
        this.B = {};
        this.A = 0;
        this.G = [];
        this.C = [];
        var a = this;
        this.H = function() {
            Xj(a)
        }
    }
    Wj.prototype.init = function() {
        for (var a = this.B, b = Dd(document, "img", "delayLoad"), c = 0; c < b.length; c++)
            if (b[c].style.display == p && (b[c].style.display = ""), c < 5) {
                var d = b[c];
                d.longDesc != "" && (d.src = d.longDesc)
            } else d = b[c].id, d == "" && (d = "av-delay-tempId-" + c), a[d] = {
                Rb: b[c],
                key: d
            }, this.A++;
        this.A != 0 && (this.I = le(window, "scroll", this.H), this.J = le(window, "resize", this.H), Yj(this))
    };

    function Xj(a) {
        a.D && window.clearTimeout(a.D);
        a.D = window.setTimeout(function() {
            a.D = null;
            Yj(a)
        }, 100)
    }

    function Yj(a) {
        if (!(a.A < 0))
            if (a.A == 0) ue(a.I), ue(a.J), a.A = -1;
            else {
                var b = !1,
                    c;
                for (c in a.B) {
                    a: {
                        var d = a;
                        var e = a.B[c],
                            f = window.document;f = f.compatMode == "CSS1Compat" ? f.documentElement : f.body;f = (new $b(f.clientWidth, f.clientHeight)).height;
                        var g = e.Rb;
                        if (g.nodeType == 1) {
                            try {
                                var h = g.getBoundingClientRect()
                            } catch (k) {
                                h = {
                                    left: 0,
                                    top: 0,
                                    right: 0,
                                    bottom: 0
                                }
                            }
                            g = new Zb(h.left, h.top)
                        } else g = g.changedTouches ? g.changedTouches[0] : g,
                        g = new Zb(g.clientX, g.clientY);g = g.y;
                        if (0 <= g && g <= f) d.G.push(e);
                        else if (0 < g && g < Math.round(2.25 *
                                f)) d.C.push(e);
                        else if (g < 0 && g > Math.round(-1.25 * f)) d.C.push(e);
                        else {
                            d = !1;
                            break a
                        }
                        d = !0
                    }
                    d && (b = !0)
                }
                if (b) {
                    b = a.G.concat(a.C);
                    for (c = 0; c < b.length; c++) h = b[c].Rb, h.longDesc != "" && (h.src = h.longDesc), a.A--, delete a.B[b[c].key];
                    a.G = [];
                    a.C = []
                }
            }
    };
    var Zj = !Sc && !Nc();

    function ak(a) {
        if (/-[a-z]/.test(ta)) return null;
        if (Zj && a.dataset) {
            if (Pc() && !(ta in a.dataset)) return null;
            a = a.dataset.commentId;
            return a === void 0 ? null : a
        }
        return a.getAttribute("data-" + ta.replace(/([A-Z])/g, "-$1").toLowerCase())
    };

    function bk(a) {
        M.call(this, "Blog", a);
        this.A = a.K;
        a = new zd;
        for (var b = new Set, c = new Map, d = x("a b br em i strong".split(" ")), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            e = e.toUpperCase();
            if (!jd(a.A, e)) throw Error("Element: " + e + ", is not allowed by html5_contract.textpb");
            var f = a.A.A.get(e);
            f !== void 0 ? c.set(e, f) : b.add(e)
        }
        a.A = new id(b, c, a.A.B, a.A.C);
        if (a.B) throw Error("this sanitizer has already called build");
        a.B = !0;
        this.H = new qd(a.A, void 0, void 0, a.C);
        if (this.A.data) {
            a = new Rf;
            this.I = Tf(a, "blog.canonicalUrl");
            if (this.A.data.lightboxEnabled)
                for (b = this.A.data.lightboxModuleUrl, c = this.A.data.lightboxCssUrl, Tj().init(b, c), b = Dd(document, "DIV", "post-body", this.A.A), c = 0; c < b.length; c++) {
                    d = "fakeId" + ck++;
                    e = Tj();
                    f = Dd(document, "IMG", void 0, b[c]);
                    for (var g = f.length, h = [], k = 0; k < g; k++) {
                        var m = f[k].src,
                            r = null,
                            B = Rd(f[k], "A");
                        if (B) {
                            B = B.href;
                            var C = B;
                            var D = m;
                            if (Zi(C) && Zi(D)) {
                                var R = new Fj;
                                C = R.parse(C ? rj(Jj(new Hj(C, !1))).ia() : "");
                                D = R.parse(D ? rj(Jj(new Hj(D, !1))).ia() : "");
                                D = C.B.B == D.B.B
                            } else D = !1;
                            D || (D = B, R = m, D = Qj(D) && Qj(R) ? Rj(D) ===
                                Rj(R) : !1);
                            if (D) {
                                if (B != m && (r = m), m = B, !Qj(m) && (B = Ej(Kj.parse(m, !1)))) B = (new fj).parse(B), B = new Y(B), D = (D = void 0, void 0), R = B.B, C = R.A, qj(D, S(C, 4), S(R.B, 4)) && T(C, 4, D), D = (D = void 0, void 0), R = B.B, C = R.A, qj(D, S(C, 6), S(R.B, 6)) && T(C, 6, D), B = B.ia(), m = new Hj(m, !1), oj(m, B), m = m.ia()
                            } else if (B != m) continue;
                            h.push({
                                imageUrl: m,
                                thumbnailUrl: r
                            });
                            le(f[k], pa, A(e.G, e, d, h.length - 1))
                        }
                    }
                    h.length > 0 && (e.A[d] = h, e.C || (e.C = le(window, "load", e.H, !1, e)))
                }
            this.A.data.mobile && (this.D = new Ui(Tf(a, "blog.pageTitle"), this.I));
            this.G = this.B =
                null
        }
    }
    y(bk, M);
    v = bk.prototype;
    v.ea = function(a, b) {
        if (a == "getComments") {
            if (b.comments && b.messages) {
                a = b.comments;
                for (var c = b.config, d = 0; d < a.length; d++) a: {
                    var e = b,
                        f = a[d];
                    if (!document.getElementById("c" + f.id)) {
                        f.author = rd(this.H, f.author);
                        f.body = rd(this.H, f.body);
                        var g = 1;
                        if (f.inReplyTo) {
                            var h = document.getElementById("c" + f.inReplyTo);
                            if (h) {
                                var k;
                                g = h;
                                for (k = []; g;) G(g, "comment") && k.push(g), g = g.parentElement || null;
                                g = k.length + 1;
                                k.length + 1 > e.config.maxDepth && ((h = Rd(h.parentNode, null, "comment")) ? (g--, f.inReplyTo = h.id.slice(1)) : g = 1)
                            }
                        }
                        h = document.getElementById("c" +
                            f.inReplyTo + "-ra");
                        if (!h && (h = document.getElementById("top-ra"), !h)) break a;
                        g = {
                            config: e.config,
                            od: e.messages,
                            cd: f,
                            depth: g
                        };
                        k = Ki;
                        e = Jb || (Jb = new Td);
                        if ((g = k(g || Ji, void 0)) && g.B) e = g.B();
                        else {
                            c: if (Db(g)) {
                                if (g.ac && (g = g.ac(), g instanceof rc)) break c;
                                g = Vc("zSoyz")
                            } else g = Vc(String(g));k = e.B;e = Id(k, "DIV");uc(e, g);g = k;
                            if (e.childNodes.length == 1) e = e.removeChild(e.firstChild);
                            else {
                                for (g = g.createDocumentFragment(); e.firstChild;) g.appendChild(e.firstChild);
                                e = g
                            }
                        }
                        dk(this, e);
                        h.appendChild(e);
                        f.inReplyTo && (f = document.getElementById("c" +
                            f.inReplyTo + "-rt")) && Ub(f, Ka)
                    }
                }
                a.length < c.commentsPerPage ? (this.B = null, Sb(Cd("loadmore", this.A.A), Ka)) : this.B = a[a.length - 1].timestampAbs + 1
            }
        } else M.prototype.ea.call(this, a, b)
    };
    v.Qc = function(a) {
        var b = null,
            c = null;
        a = Rd(a.currentTarget, null, "thread-toggle");
        G(a, Xa) ? (b = Wa, c = Xa) : (b = Xa, c = Wa);
        Lb((a.parentElement || document).querySelectorAll("." + c), function(d) {
            Wb(d, c, b)
        })
    };
    v.Fc = function(a) {
        a = ak(a.currentTarget);
        ek(this, a || void 0)
    };

    function ek(a, b) {
        var c = document.getElementById(sa);
        if (c) {
            var d = ci(c.src),
                e = b ? "c" + b : "top",
                f = document.getElementById(e + "-ce");
            f && f !== (c.parentElement || null) && (c.height = "250px", c.style.display = na, c.src = "", f.appendChild(c), b ? d.A.set("parentID", b) : ii(d.A, "parentID"), c.src = d.toString());
            Lb((a.A.A || document).querySelectorAll(".continue"), function(g) {
                Ub(g, Ka)
            });
            (a = document.getElementById(e + "-continue")) && Sb(a, Ka)
        }
    }
    v.yc = function() {
        this.G && this.B && this.F.za("getComments", {
            postId: this.G,
            publishedMin: this.B
        }, function(a) {
            return Nf(a) < 500
        }, "GET")
    };
    v.ca = function() {
        if (this.A.data.mobile) {
            var a = I(sa),
                b = window.location.href.split("#");
            b[b.length - 1] && b[b.length - 1] == "comment-form" ? a && (a.style.display = na) : a && (a.style.display = p);
            a = K(this.F, "comment-editor-toggle-link");
            a != null && (a.onclick = this.Pc);
            (a = I("mobile-share-button")) && this.D && (a.onclick = A(this.rd, this))
        }
        this.M = new Wj;
        this.M.init();
        dk(this, this.A.A);
        if (a = Cd("loadmore", this.A.A)) {
            a.onclick = this.yc.bind(this);
            if (Zj && a.dataset) b = a.dataset;
            else {
                b = {};
                for (var c = a.attributes, d = 0; d < c.length; ++d) {
                    var e =
                        c[d];
                    if (e.name.lastIndexOf("data-", 0) == 0) {
                        var f = zc(e.name.slice(5));
                        b[f] = e.value
                    }
                }
            }
            b.publishedMin && b.postId && (this.B = parseInt(b.publishedMin, 10) + 1, this.G = b.postId, Ub(a, Ka))
        }
        ek(this)
    };

    function dk(a, b) {
        Lb((b || document).querySelectorAll(".thread-toggle"), function(c) {
            c.onclick = this.Qc.bind(this);
            Lb((c || document).getElementsByTagName("A"), function(d) {
                d.href = "javascript:;"
            })
        }, a);
        Lb((b || document).querySelectorAll(".comment-reply"), function(c) {
            c.onclick = this.Fc.bind(this);
            c.href = "javascript:;"
        }, a)
    }
    v.rd = function() {
        this.D.la ? this.D.show(!0) : this.D.render()
    };
    v.Pc = function() {
        var a = I(sa);
        a && (a.style.display = a.style.display == p ? na : p);
        return !1
    };
    var ck = 0;
    E("_BlogView", bk);

    function fk(a) {
        M.call(this, "BlogList", a)
    }
    y(fk, M);
    v = fk.prototype;
    v.ca = function() {
        var a = this.F.K.data;
        this.xb = a.totalItems;
        this.Xa = a.numItemsToShow;
        this.Xa != 0 && this.xb > this.Xa && (Mf(this.F, "show-all").onclick = this.ec.bind(this), Mf(this.F, "show-n").onclick = this.ec.bind(this));
        le(window, "load", this.xc)
    };
    v.ec = function() {
        var a = K(this.F, "blogs");
        if (a != null) {
            a = a.getElementsByTagName("li");
            for (var b = this.Xa; b < this.xb; b++) {
                var c = a[b];
                c.style.display = c.style.display == p ? na : p
            }
            a = Mf(this.F, "show-all");
            a.style.display = a.style.display == p ? "inline" : p;
            a = Mf(this.F, "show-n");
            a.style.display = a.style.display == p ? "inline" : p
        }
    };
    v.xc = function() {
        for (var a = document.images.length, b = 0; b < a; b++) {
            var c = document.images[b],
                d = null;
            if (d = c.getAttribute("data-lateloadsrc")) le(c, Ia, function() {
                this.style.visibility = Ka
            }), c.src = d
        }
    };
    v.xb = null;
    v.Xa = null;
    E("_BlogListView", fk);

    function gk(a) {
        M.call(this, "BlogSearch", a)
    }
    y(gk, M);
    E("_BlogSearchView", gk);
    var hk = RegExp("^[+a-zA-Z0-9_.!#$%&'*\\/=?^`{|}~-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z0-9]{2,63}$");

    function ik(a) {
        M.call(this, "ContactForm", a);
        this.A = a.K;
        this.B = this.A.data
    }
    F(ik, M);
    E("_ContactFormView", ik);
    ik.prototype.ca = function() {
        var a = I(K(this.F, Aa));
        if (a) {
            var b = this;
            a.onclick = function() {
                jk(b) && kk(b)
            }
        }
    };

    function jk(a) {
        I(K(a.F, xa)).className = xa;
        I(K(a.F, xa)).textContent = "";
        I(K(a.F, Ba)).className = Ba;
        I(K(a.F, Ba)).textContent = "";
        var b = Id(document, "IMG");
        b.src = "https://resources.blogblog.com/img/widgets/icon_contactform_cross.gif";
        b.className = "contact-form-cross";
        b.onclick = function() {
            I(K(a.F, xa)).className = xa;
            I(K(a.F, xa)).textContent = ""
        };
        var c = fc(I(K(a.F, va)).value);
        if (!hk.test(c)) return I(K(a.F, xa)).className = ya, I(K(a.F, xa)).innerHTML = a.B.contactFormInvalidEmailMsg, I(K(a.F, xa)).appendChild(b), !1;
        c = I(K(a.F,
            wa)).value;
        return c == null || fc(c) == "" ? (I(K(a.F, xa)).className = ya, I(K(a.F, xa)).innerHTML = a.B.contactFormEmptyMessageMsg, I(K(a.F, xa)).appendChild(b), !1) : !0
    }

    function kk(a) {
        I(K(a.F, Aa)).className = "contact-form-button contact-form-button-submit disabled";
        I(K(a.F, Aa)).disabled = !0;
        I(K(a.F, Ba)).className = Ca;
        I(K(a.F, Ba)).innerHTML = a.B.contactFormMessageSendingMsg;
        var b = encodeURIComponent(fc(I(K(a.F, za)).value)),
            c = encodeURIComponent(fc(I(K(a.F, va)).value)),
            d = encodeURIComponent(fc(I(K(a.F, wa)).value)),
            e = encodeURIComponent(a.B.blogId),
            f = encodeURIComponent(a.B.contactFormToken);
        b = ["name=" + b, "email=" + c, "message=" + d, "blogID=" + e, "token=" + f];
        c = a.B.submitUrl;
        if (window.XDomainRequest &&
            Rc() <= 9) {
            var g = new XDomainRequest;
            g.onload = function() {
                var h = eval("(" + g.responseText + ")");
                h = eval(h.details.emailSentStatus);
                lk(a, h)
            };
            g.open("post", c, !0);
            g.send(b.join("&"))
        } else Te(c, a.Vc.bind(a), "POST", b.join("&"))
    }
    ik.prototype.Vc = function(a) {
        a = a.target;
        var b = eval("(" + bf(a) + ")");
        b = eval(b.details.emailSentStatus);
        lk(this, af(a) && b)
    };

    function lk(a, b) {
        I(K(a.F, Ba)).className = Ca;
        b ? (I(K(a.F, za)).value = "", I(K(a.F, va)).value = "", I(K(a.F, wa)).value = "", I(K(a.F, Ba)).innerHTML = a.B.contactFormMessageSentMsg) : I(K(a.F, Ba)).innerHTML = a.B.contactFormMessageNotSentMsg;
        setTimeout(function() {
            I(K(a.F, Ba)).className = Ba;
            I(K(a.F, Ba)).textContent = "";
            I(K(a.F, Aa)).className = "contact-form-button contact-form-button-submit";
            I(K(a.F, Aa)).removeAttribute("disabled")
        }, 3E3)
    };

    function mk(a) {
        M.call(this, "Example", a)
    }
    y(mk, M);
    E("_ExampleView", mk);

    function nk(a) {
        M.call(this, "FeaturedPost", a)
    }
    y(nk, M);
    E("_FeaturedPostView", nk);

    function ok(a, b) {
        this.C = a;
        this.D = b;
        this.B = 0;
        this.A = null
    }
    ok.prototype.get = function() {
        if (this.B > 0) {
            this.B--;
            var a = this.A;
            this.A = a.next;
            a.next = null
        } else a = this.C();
        return a
    };

    function pk(a, b) {
        a.D(b);
        a.B < 100 && (a.B++, b.next = a.A, a.A = b)
    };

    function qk() {
        this.B = this.A = null
    }
    qk.prototype.add = function(a, b) {
        var c = rk.get();
        c.set(a, b);
        this.B ? this.B.next = c : this.A = c;
        this.B = c
    };

    function sk() {
        var a = tk,
            b = null;
        a.A && (b = a.A, a.A = a.A.next, a.A || (a.B = null), b.next = null);
        return b
    }
    var rk = new ok(function() {
        return new uk
    }, function(a) {
        return a.reset()
    });

    function uk() {
        this.next = this.scope = this.A = null
    }
    uk.prototype.set = function(a, b) {
        this.A = a;
        this.scope = b;
        this.next = null
    };
    uk.prototype.reset = function() {
        this.next = this.scope = this.A = null
    };
    var vk, wk = !1,
        tk = new qk;

    function xk(a, b) {
        vk || yk();
        wk || (vk(), wk = !0);
        tk.add(a, b)
    }

    function yk() {
        var a = Promise.resolve(void 0);
        vk = function() {
            a.then(zk)
        }
    }

    function zk() {
        for (var a; a = sk();) {
            try {
                a.A.call(a.scope)
            } catch (b) {
                jg(b)
            }
            pk(rk, a)
        }
        wk = !1
    };

    function Ak(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };

    function Bk(a) {
        this.A = 0;
        this.J = void 0;
        this.D = this.B = this.C = null;
        this.G = this.H = !1;
        if (a != ff) try {
            var b = this;
            a.call(void 0, function(c) {
                Ck(b, 2, c)
            }, function(c) {
                Ck(b, 3, c)
            })
        } catch (c) {
            Ck(this, 3, c)
        }
    }

    function Dk() {
        this.next = this.C = this.B = this.D = this.A = null;
        this.G = !1
    }
    Dk.prototype.reset = function() {
        this.C = this.B = this.D = this.A = null;
        this.G = !1
    };
    var Ek = new ok(function() {
        return new Dk
    }, function(a) {
        a.reset()
    });

    function Fk(a, b, c) {
        var d = Ek.get();
        d.D = a;
        d.B = b;
        d.C = c;
        return d
    }

    function Gk() {
        var a, b, c = new Bk(function(d, e) {
            a = d;
            b = e
        });
        return new Hk(c, a, b)
    }
    Bk.prototype.then = function(a, b, c) {
        return Ik(this, typeof a === n ? a : null, typeof b === n ? b : null, c)
    };
    Bk.prototype.$goog_Thenable = !0;
    Bk.prototype.cancel = function(a) {
        if (this.A == 0) {
            var b = new Jk(a);
            xk(function() {
                Kk(this, b)
            }, this)
        }
    };

    function Kk(a, b) {
        if (a.A == 0)
            if (a.C) {
                var c = a.C;
                if (c.B) {
                    for (var d = 0, e = null, f = null, g = c.B; g && (g.G || (d++, g.A == a && (e = g), !(e && d > 1))); g = g.next) e || (f = g);
                    e && (c.A == 0 && d == 1 ? Kk(c, b) : (f ? (d = f, d.next == c.D && (c.D = d), d.next = d.next.next) : Lk(c), Mk(c, e, 3, b)))
                }
                a.C = null
            } else Ck(a, 3, b)
    }

    function Nk(a, b) {
        a.B || a.A != 2 && a.A != 3 || Ok(a);
        a.D ? a.D.next = b : a.B = b;
        a.D = b
    }

    function Ik(a, b, c, d) {
        var e = Fk(null, null, null);
        e.A = new Bk(function(f, g) {
            e.D = b ? function(h) {
                try {
                    var k = b.call(d, h);
                    f(k)
                } catch (m) {
                    g(m)
                }
            } : f;
            e.B = c ? function(h) {
                try {
                    var k = c.call(d, h);
                    k === void 0 && h instanceof Jk ? g(h) : f(k)
                } catch (m) {
                    g(m)
                }
            } : g
        });
        e.A.C = a;
        Nk(a, e);
        return e.A
    }
    Bk.prototype.M = function(a) {
        this.A = 0;
        Ck(this, 2, a)
    };
    Bk.prototype.S = function(a) {
        this.A = 0;
        Ck(this, 3, a)
    };

    function Ck(a, b, c) {
        if (a.A == 0) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.A = 1;
            a: {
                var d = c,
                    e = a.M,
                    f = a.S;
                if (d instanceof Bk) {
                    Nk(d, Fk(e || ff, f || null, a));
                    var g = !0
                } else if (Ak(d)) d.then(e, f, a),
                g = !0;
                else {
                    if (Db(d)) try {
                        var h = d.then;
                        if (typeof h === n) {
                            Pk(d, h, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (k) {
                        f.call(a, k);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
            g || (a.J = c, a.A = b, a.C = null, Ok(a), b != 3 || c instanceof Jk || Qk(a, c))
        }
    }

    function Pk(a, b, c, d, e) {
        function f(k) {
            h || (h = !0, d.call(e, k))
        }

        function g(k) {
            h || (h = !0, c.call(e, k))
        }
        var h = !1;
        try {
            b.call(a, g, f)
        } catch (k) {
            f(k)
        }
    }

    function Ok(a) {
        a.H || (a.H = !0, xk(a.I, a))
    }

    function Lk(a) {
        var b = null;
        a.B && (b = a.B, a.B = b.next, b.next = null);
        a.B || (a.D = null);
        return b
    }
    Bk.prototype.I = function() {
        for (var a; a = Lk(this);) Mk(this, a, this.A, this.J);
        this.H = !1
    };

    function Mk(a, b, c, d) {
        if (c == 3 && b.B && !b.G)
            for (; a && a.G; a = a.C) a.G = !1;
        if (b.A) b.A.C = null, Rk(b, c, d);
        else try {
            b.G ? b.D.call(b.C) : Rk(b, c, d)
        } catch (e) {
            Sk.call(null, e)
        }
        pk(Ek, b)
    }

    function Rk(a, b, c) {
        b == 2 ? a.D.call(a.C, c) : a.B && a.B.call(a.C, c)
    }

    function Qk(a, b) {
        a.G = !0;
        xk(function() {
            a.G && Sk.call(null, b)
        })
    }
    var Sk = jg;

    function Jk(a) {
        Ib.call(this, a)
    }
    F(Jk, Ib);
    Jk.prototype.name = "cancel";

    function Hk(a, b, c) {
        this.promise = a;
        this.resolve = b;
        this.reject = c
    };
    /*

     Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: MIT
    */
    function Tk(a) {
        var b = Uk;
        this.G = [];
        this.T = b;
        this.O = a || null;
        this.D = this.C = !1;
        this.B = void 0;
        this.M = this.W = this.J = !1;
        this.H = 0;
        this.A = null;
        this.I = 0
    }
    Tk.prototype.cancel = function(a) {
        if (this.C) this.B instanceof Tk && this.B.cancel();
        else {
            if (this.A) {
                var b = this.A;
                delete this.A;
                a ? b.cancel(a) : (b.I--, b.I <= 0 && b.cancel())
            }
            this.T ? this.T.call(this.O, this) : this.M = !0;
            this.C || (a = new Vk(this), Wk(this), Xk(this, !1, a))
        }
    };
    Tk.prototype.S = function(a, b) {
        this.J = !1;
        Xk(this, a, b)
    };

    function Xk(a, b, c) {
        a.C = !0;
        a.B = c;
        a.D = !b;
        Yk(a)
    }

    function Wk(a) {
        if (a.C) {
            if (!a.M) throw new Zk(a);
            a.M = !1
        }
    }
    Tk.prototype.callback = function(a) {
        Wk(this);
        Xk(this, !0, a)
    };

    function $k(a, b, c, d) {
        a.G.push([b, c, d]);
        a.C && Yk(a)
    }
    Tk.prototype.then = function(a, b, c) {
        var d, e, f = new Bk(function(g, h) {
            e = g;
            d = h
        });
        $k(this, e, function(g) {
            g instanceof Vk ? f.cancel() : d(g);
            return al
        }, this);
        return f.then(a, b, c)
    };
    Tk.prototype.$goog_Thenable = !0;

    function bl(a) {
        return Mb(a.G, function(b) {
            return typeof b[1] === n
        })
    }
    var al = {};

    function Yk(a) {
        if (a.H && a.C && bl(a)) {
            var b = a.H,
                c = cl[b];
            c && (z.clearTimeout(c.Z), delete cl[b]);
            a.H = 0
        }
        a.A && (a.A.I--, delete a.A);
        b = a.B;
        for (var d = c = !1; a.G.length && !a.J;) {
            var e = a.G.shift(),
                f = e[0],
                g = e[1];
            e = e[2];
            if (f = a.D ? g : f) try {
                var h = f.call(e || a.O, b);
                h === al && (h = void 0);
                h !== void 0 && (a.D = a.D && (h == b || h instanceof Error), a.B = b = h);
                if (Ak(b) || typeof z.Promise === n && b instanceof z.Promise) d = !0, a.J = !0
            } catch (k) {
                b = k, a.D = !0, bl(a) || (c = !0)
            }
        }
        a.B = b;
        d && (h = A(a.S, a, !0), d = A(a.S, a, !1), b instanceof Tk ? ($k(b, h, d), b.W = !0) : b.then(h,
            d));
        c && (b = new dl(b), cl[b.Z] = b, a.H = b.Z)
    }

    function Zk() {
        Ib.call(this)
    }
    F(Zk, Ib);
    Zk.prototype.message = "Deferred has already fired";
    Zk.prototype.name = "AlreadyCalledError";

    function Vk() {
        Ib.call(this)
    }
    F(Vk, Ib);
    Vk.prototype.message = "Deferred was canceled";
    Vk.prototype.name = "CanceledError";

    function dl(a) {
        this.Z = z.setTimeout(A(this.B, this), 0);
        this.A = a
    }
    dl.prototype.B = function() {
        delete cl[this.Z];
        throw this.A;
    };
    var cl = {};

    function el(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = nc(a).toString(),
            e = Ud(new Td(b), ca),
            f = {
                Zb: e,
                sa: void 0
            },
            g = new Tk(f),
            h = null,
            k = c.timeout != null ? c.timeout : 5E3;
        k > 0 && (h = window.setTimeout(function() {
            fl(e, !0);
            var m = new gl(1, "Timeout reached for loading script " + d);
            Wk(g);
            Xk(g, !1, m)
        }, k), f.sa = h);
        e.onload = e.onreadystatechange = function() {
            e.readyState && e.readyState != "loaded" && e.readyState != ua || (fl(e, c.bd || !1, h), g.callback(null))
        };
        e.onerror = function() {
            fl(e, !0, h);
            var m = new gl(0, "Error while loading script " +
                d);
            Wk(g);
            Xk(g, !1, m)
        };
        f = c.attributes || {};
        ec(f, {
            type: Va,
            charset: "UTF-8"
        });
        Ed(e, f);
        xc(e, a);
        hl(b).appendChild(e);
        return g
    }

    function hl(a) {
        var b = (a || document).getElementsByTagName("HEAD");
        return b && b.length !== 0 ? b[0] : a.documentElement
    }

    function Uk() {
        if (this && this.Zb) {
            var a = this.Zb;
            a && a.tagName == ca && fl(a, !0, this.sa)
        }
    }

    function fl(a, b, c) {
        c != null && z.clearTimeout(c);
        a.onload = function() {};
        a.onerror = function() {};
        a.onreadystatechange = function() {};
        b && window.setTimeout(function() {
            Ld(a)
        }, 0)
    }

    function gl(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Ib.call(this, c);
        this.code = a
    }
    F(gl, Ib);

    function il() {
        this.A = jl;
        this.sa = 5E3
    }
    var kl = 0;
    il.prototype.cancel = function(a) {
        a && (a.dd && a.dd.cancel(), a.Z && ll(a.Z, !1))
    };

    function ml(a) {
        return function() {
            ll(a, !1)
        }
    }

    function nl(a, b) {
        return function(c) {
            ll(a, !0);
            b.apply(void 0, arguments)
        }
    }

    function ll(a, b) {
        a = "_callbacks___" + a;
        if (z[a])
            if (b) try {
                delete z[a]
            } catch (c) {
                z[a] = void 0
            } else z[a] = ff
    };
    var ol = jb(["//ajax.googleapis.com/ajax/services/feed/load"]);

    function pl(a) {
        M.call(this, "Feed", a)
    }
    y(pl, M);
    pl.prototype.ea = function(a, b) {
        a == "getFeed" ? (this.A.C = b, ql(this.A)) : M.prototype.ea.call(this, a, b)
    };
    pl.prototype.ca = function() {
        if (this.B = K(this.F, "feedItemListDisplay")) {
            var a = this.F.K.data;
            this.A = new rl(a.feedUrl, this.B, {
                numItemsShow: a.numItemsShow,
                showItemAuthor: a.showItemAuthor,
                showItemDate: a.showItemDate,
                linkTarget: a.openLinksInNewWindow ? "_blank" : "_self",
                useFeedWidgetServ: a.useFeedWidgetServ === "true"
            });
            a.useFeedWidgetServ === "true" ? this.F.za("getFeed", null, null, "GET") : ql(this.A)
        }
    };

    function rl(a, b, c) {
        this.J = a;
        this.B = b;
        this.A = c
    }

    function ql(a) {
        if (a.A.useFeedWidgetServ) a.C.status == "ok" ? sl(a, a.C.feed) : tl(a);
        else {
            var b = new il;
            b.sa = -1;
            var c = {
                q: a.J,
                num: a.A.numItemsShow,
                output: "json",
                v: "1.0"
            };
            a = A(a.D, a);
            if (c) {
                var d = {};
                for (e in c) d[e] = c[e];
                c = d
            } else c = {};
            var e = c;
            c = "_" + (kl++).toString(36) + Date.now().toString(36);
            d = "_callbacks___" + c;
            a && (z[d] = nl(c, a), e.callback = d);
            a = {
                timeout: b.sa,
                bd: !0
            };
            d = b.A;
            b = new Map(Object.entries(e));
            var f = nc(d).toString();
            var g = f.split(/[?#]/);
            d = /[?]/.test(f) ? "?" + g[1] : "";
            e = g[0];
            f = /[#]/.test(f) ? "#" + (d ? g[2] : g[1]) :
                "";
            b = Ad(e, d, f, b);
            a = el(b, a);
            $k(a, null, ml(c))
        }
    }
    rl.prototype.D = function(a) {
        a.responseStatus == 200 ? sl(this, a.responseData.feed) : tl(this)
    };

    function sl(a, b) {
        Kd(a.B);
        var c = Id(document, "ul");
        a.B.appendChild(c);
        for (var d = Math.min(b.entries.length, a.A.numItemsShow), e = 0; e < d; e++) {
            var f = b.entries[e],
                g = Id(document, "li");
            c.appendChild(g);
            var h;
            (h = a.A.previewMode) || (h = (new Nh(f.link)).D, h = !(h == "" || h == "http" || h == "https"));
            h = h ? Gd("A", {
                href: "javascript:void(0);"
            }, f.title) : Gd("A", {
                href: f.link
            }, f.title);
            h.target = a.A.linkTarget;
            g.appendChild(Gd(da, {
                "class": "item-title"
            }, h));
            a.A.showItemDate && (h = Gd(da, {
                    "class": "item-date"
                }, "\u00a0-\u00a0" + (new Date(f.publishedDate)).toLocaleDateString()),
                g.appendChild(h));
            a.A.showItemAuthor && (f = Gd(da, {
                "class": "item-author"
            }, "\u00a0-\u00a0" + f.author), g.appendChild(f))
        }
        a.G && a.G(b)
    }

    function tl(a) {
        Kd(a.B);
        a.B.appendChild(Gd(da, null, "Error loading feed."));
        a.H && a.H()
    }
    var jl = function(a) {
        var b = rb.apply(1, arguments);
        if (b.length === 0) return mc(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return mc(c)
    }(ol);
    E("_FeedView", pl);

    function ul(a) {
        M.call(this, "Followers", a)
    }
    y(ul, M);
    E("_FollowersView", ul);

    function vl(a) {
        M.call(this, vl.X, a)
    }
    F(vl, M);
    vl.X = "Header";
    E("_HeaderView", vl);

    function wl(a, b) {
        M.call(this, b, a)
    }
    y(wl, M);

    function xl(a) {
        M.call(this, "Text", a)
    }
    y(xl, wl);

    function yl(a) {
        M.call(this, "HTML", a)
    }
    y(yl, wl);
    E("_TextView", xl);
    E("_HTMLView", yl);

    function zl(a) {
        M.call(this, "Image", a);
        this.A = a.K
    }
    y(zl, M);
    zl.prototype.ca = function() {
        if (this.A.data.resize == 1) {
            var a = K(this.F, "img"),
                b = this.A.A;
            if (a && b) {
                if (document.defaultView) b = parseInt(document.defaultView.getComputedStyle(b, null).width, 10);
                else if (b.currentStyle) a.style.display = p, b = b.offsetWidth, a.style.display = "";
                else return;
                a.width > b && (a.height = Math.round(b / a.width * a.height), a.width = b);
                a.style.visibility = $a
            }
        }
    };
    E("_ImageView", zl);

    function Al(a) {
        M.call(this, "Label", a)
    }
    y(Al, M);
    E("_LabelView", Al);

    function Bl(a) {
        M.call(this, Bl.X, a)
    }
    F(Bl, M);
    Bl.X = "TextList";
    E("_TextListView", Bl);

    function Cl(a) {
        M.call(this, Cl.X, a)
    }
    F(Cl, M);
    Cl.X = "LinkList";
    E("_LinkListView", Cl);

    function Dl(a) {
        M.call(this, "BloggerButton", a)
    }
    y(Dl, M);
    E("_BloggerButtonView", Dl);

    function El(a) {
        M.call(this, "Navbar", a)
    }
    y(El, M);
    E("_NavbarView", El);

    function Fl(a) {
        M.call(this, "PageList", a)
    }
    y(Fl, M);
    Fl.prototype.C = function() {
        return "PageList"
    };
    Fl.prototype.ca = function() {
        if (this.F.K.data.mobile != 0) {
            var a = K(this.F, "select");
            a && (a.onchange = function(b) {
                b = b || window.event;
                b = b.target || b.srcElement;
                if (b = b.options[b.selectedIndex].value) window.location = b
            })
        }
    };
    var _PageListView = Fl;
    E("_PageListView", Fl);

    function Gl(a) {
        M.call(this, "Poll", a);
        this.D = this.B = this.A = null;
        if (a = this.F.K.data) this.A = "poll-widget" + a.pollid, this.B = a.iframeurl, this.D = le(window, "message", this.G, !1, this), a = document.getElementsByName(this.A)[0], a != void 0 && (a.src.src = nc(this.B).toString())
    }
    y(Gl, M);
    Gl.prototype.G = function(a) {
        var b = document.getElementsByName(this.A)[0];
        b != void 0 && (a = a.A, a.source === b.contentWindow && this.B.lastIndexOf(a.origin, 0) == 0 && (a = a.data, typeof a !== q || a < 0 || (b.height = a + "px", ue(this.D))))
    };
    E("_PollView", Gl);

    function Hl(a) {
        M.call(this, "PopularPosts", a)
    }
    y(Hl, M);
    E("_PopularPostsView", Hl);

    function Il(a) {
        M.call(this, "Profile", a);
        this.A = a.K
    }
    y(Il, M);
    Il.prototype.ca = function() {
        this.A && this.A.A && this.F.K.data.isDisplayable == 0 && (this.A.A.style.display = p)
    };
    E("_ProfileView", Il);

    function Jl(a) {
        M.call(this, "RecentPosts", a)
    }
    y(Jl, M);
    E("_RecentPostsView", Jl);

    function Kl(a) {
        M.call(this, "ReportAbuse", a)
    }
    y(Kl, M);
    E("_ReportAbuseView", Kl);

    function Ll(a) {
        M.call(this, Ll.X, a)
    }
    F(Ll, M);
    Ll.X = "Sharing";
    E("_SharingView", Ll);

    function Ml(a, b) {
        Be.call(this);
        this.B = a || 1;
        this.A = b || z;
        this.C = A(this.Dd, this);
        this.D = Date.now()
    }
    F(Ml, Be);
    v = Ml.prototype;
    v.Ka = !1;
    v.fa = null;
    v.Dd = function() {
        if (this.Ka) {
            var a = Date.now() - this.D;
            a > 0 && a < this.B * .8 ? this.fa = this.A.setTimeout(this.C, this.B - a) : (this.fa && (this.A.clearTimeout(this.fa), this.fa = null), J(this, "tick"), this.Ka && (Nl(this), this.start()))
        }
    };
    v.start = function() {
        this.Ka = !0;
        this.fa || (this.fa = this.A.setTimeout(this.C, this.B), this.D = Date.now())
    };

    function Nl(a) {
        a.Ka = !1;
        a.fa && (a.A.clearTimeout(a.fa), a.fa = null)
    }
    v.R = function() {
        Ml.L.R.call(this);
        Nl(this);
        delete this.A
    };

    function Ol(a, b) {
        if (typeof a !== n)
            if (a && typeof a.handleEvent == n) a = A(a.handleEvent, a);
            else throw Error("Invalid listener argument");
        Number(b) > 2147483647 || z.setTimeout(a, b || 0)
    };

    function Pl(a) {
        M.call(this, "Stats", a)
    }
    y(Pl, M);
    Pl.prototype.ca = function() {
        K(this.F, "totalCount") != null && Te(this.F.K.data.statsUrl, A(this.G, this))
    };
    Pl.prototype.G = function(a) {
        a = a.target;
        if (af(a)) {
            if (a.A) b: {
                a = a.A.responseText;
                if (z.JSON) try {
                    var b = z.JSON.parse(a);
                    break b
                } catch (h) {}
                b = Ie(a)
            }
            else b = void 0;
            a = this.F.K.data;
            var c = K(this.F, "totalCount");
            if (c != null) {
                if (a.showGraphicalCounter) {
                    this.D = b.total;
                    for (var d = "" + b.total, e = 0; e < d.length; e++) c.appendChild(Gd(da, {
                        "class": "digit stage-0"
                    }, Gd("STRONG", null, document.createTextNode(String(d.charAt(e)))), Gd(da, {
                        "class": "blind-plate"
                    })));
                    a.showAnimatedCounter && (this.B = new Ml(b.nextTickMs), le(this.B, "tick",
                        A(this.H, this, c)), this.B.start())
                } else {
                    d = b.total;
                    if (isNaN(d) || d < 0) d = "NaN";
                    else {
                        d = d.toString();
                        e = [];
                        for (var f = d.length, g = 0; g < f; g++) g > 0 && g % 3 == 0 && e.push(","), e.push(d.charAt(f - 1 - g));
                        d = e.reverse().join("")
                    }
                    Md(c, d)
                }
                a.showSparkline && (a = Mf(this.F, "sparklinespan"), c = b.sparklineData, b = b.sparklineOptions, a && c && b ? Ql(a, c, b) : a && a.parentNode.removeChild(a));
                Mf(this.F, "content").style.display = ""
            }
        }
    };

    function Ql(a, b, c) {
        google.charts.load("current", {
            packages: ["corechart"]
        });
        google.charts.setOnLoadCallback(function() {
            (new google.visualization.AreaChart(a)).draw(google.visualization.arrayToDataTable(b, !0), Object.assign({
                enableInteractivity: !1,
                chartArea: {
                    top: 0,
                    left: 0,
                    width: 75,
                    height: 30
                },
                hAxis: {
                    textPosition: p,
                    gridlines: {
                        color: "transparent"
                    }
                },
                vAxis: {
                    textPosition: p,
                    gridlines: {
                        color: "transparent"
                    }
                },
                legend: {
                    position: p
                }
            }, c))
        })
    }
    Pl.prototype.H = function(a) {
        if (Rl(this.D + 1) > Rl(this.D)) {
            if (a = this.B)
                if ($d(a)) a.Y && ge(a.Y);
                else if (a = pe(a)) {
                var b = 0;
                for (e in a.A)
                    for (var c = a.A[e].concat(), d = 0; d < c.length; ++d) ue(c[d]) && ++b
            }
            Nl(this.B)
        } else {
            this.D++;
            var e = "" + this.D;
            for (b = 0; b < e.length; b++) {
                c = a.childNodes[b];
                d = e.charAt(b);
                var f = [];
                Qd(c.firstChild, f, !0);
                f = f.join("");
                f = f.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
                f = f.replace(/\u200B/g, "");
                f = f.replace(/ +/g, " ");
                f != " " && (f = f.replace(/^\s*/, ""));
                f != d && (Md(c.firstChild, d), Ol(A(this.A, this, c,
                    1), 50), Ol(A(this.A, this, c, 2), 100), Ol(A(this.A, this, c, 3), 150), Ol(A(this.A, this, c, 0), 200))
            }
        }
    };

    function Rl(a) {
        return a == 0 ? 1 : Math.floor(Math.log(a) / Math.LN10) + 1
    }
    Pl.prototype.A = function(a, b) {
        var c = "stage-" + (b != 0 ? b - 1 : 3);
        b = "stage-" + b;
        var d = Rb(a);
        typeof c === u ? Pb(d, c) : Array.isArray(c) && (d = Vb(d, c));
        typeof b !== u || Nb(d, b) ? Array.isArray(b) && Tb(d, b) : d.push(b);
        a.className = d.join(" ")
    };
    E("_StatsView", Pl);

    function Sl(a) {
        M.call(this, "Subscribe", a)
    }
    y(Sl, M);

    function Tl(a, b) {
        a.style.zIndex = b == 1 ? "20" : ""
    }
    var Ul = null,
        Vl = null;
    E("_SubscribeView", Sl);
    E("_SW_toggleReaderList", function(a, b) {
        var c = document.getElementById(ea + b),
            d = document.getElementById(fa + b);
        a || (a = window.event);
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation();
        var e = document.onclick;
        Ul != null && Ul != c && (Tl(Ul.parentNode, !1), Ul.style.display = p, Vl.style.visibility = $a);
        c.style.display == p ? (Tl(c.parentNode, !0), c.style.display = "", Ul = c, Vl = d, d.style.visibility = Ka, document.onclick = function() {
            c.style.display = p;
            Tl(c.parentNode, !1);
            d.style.visibility = $a;
            e && (document.onclick = e)
        }) : (c.style.display =
            p, Tl(c.parentNode, !1), d.style.visibility = $a, e && (document.onclick = e));
        return !1
    });
    E("_SW_hideReaderList", function(a) {
        var b = document.getElementById(ea + a);
        a = document.getElementById(fa + a);
        b.style.display = p;
        Tl(b.parentNode, !1);
        a.style.visibility = $a
    });

    function Wl(a) {
        M.call(this, Wl.X, a)
    }
    F(Wl, M);
    Wl.X = "Translate";
    E("_TranslateView", Wl);

    function Xl(a) {
        this.na = wh(a)
    }
    y(Xl, Lh);
    var Yl = function(a) {
        return function(b) {
            b = JSON.parse(b);
            if (!Array.isArray(b)) throw Error("Expected jspb data to be an array, got " + Bb(b) + ": " + b);
            yg(b, 34);
            return new a(b)
        }
    }(Xl);
    var Zl;

    function $l() {
        var a = Zl || (Zl = Yl('[null,null,null,null,null,"(function(){\'use strict\';var f\\u003dtypeof Object.defineProperties\\u003d\\u003d\\"function\\"?Object.defineProperty:function(a,c,b){if(a\\u003d\\u003dArray.prototype||a\\u003d\\u003dObject.prototype)return a;a[c]\\u003db.value;return a};function g(a){a\\u003d[\\"object\\"\\u003d\\u003dtypeof globalThis\\u0026\\u0026globalThis,a,\\"object\\"\\u003d\\u003dtypeof window\\u0026\\u0026window,\\"object\\"\\u003d\\u003dtypeof self\\u0026\\u0026self,\\"object\\"\\u003d\\u003dtypeof global\\u0026\\u0026global];for(var c\\u003d0;c\\u003ca.length;++c){var b\\u003da[c];if(b\\u0026\\u0026b.Math\\u003d\\u003dMath)return b}throw Error(\\"Cannot find global object\\");}var h\\u003dg(this);\\nfunction k(a,c){if(c)a:{var b\\u003dh;a\\u003da.split(\\".\\");for(var d\\u003d0;d\\u003ca.length-1;d++){var e\\u003da[d];if(!(e in b))break a;b\\u003db[e]}a\\u003da[a.length-1];d\\u003db[a];c\\u003dc(d);c!\\u003dd\\u0026\\u0026c!\\u003dnull\\u0026\\u0026f(b,a,{configurable:!0,writable:!0,value:c})}}k(\\"globalThis\\",function(a){return a||h});/*\\n\\n Copyright Google LLC\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nvar l\\u003dglobalThis.trustedTypes,m;function n(){var a\\u003dnull;if(!l)return a;try{var c\\u003dfunction(b){return b};a\\u003dl.createPolicy(\\"goog#html\\",{createHTML:c,createScript:c,createScriptURL:c})}catch(b){}return a};function p(a){this.g\\u003da}p.prototype.toString\\u003dfunction(){return this.g+\\"\\"};function q(a){m\\u003d\\u003d\\u003dvoid 0\\u0026\\u0026(m\\u003dn());return new p(m?m.createScriptURL(a):a)};if(!function(){if(self.origin)return self.origin\\u003d\\u003d\\u003d\\"null\\";if(location.host!\\u003d\\u003d\\"\\")return!1;try{return window.parent.escape(\\"\\"),!1}catch(a){return!0}}())throw Error(\\"sandboxing error\\");\\nwindow.addEventListener(\\"message\\",function(a){var c\\u003da.ports[0];a\\u003da.data;var b\\u003da.callbackName.split(\\".\\"),d\\u003dwindow;b[0]\\u003d\\u003d\\u003d\\"window\\"\\u0026\\u0026b.shift();for(var e\\u003d0;e\\u003cb.length-1;e++)d[b[e]]\\u003d{},d\\u003dd[b[e]];d[b[b.length-1]]\\u003dfunction(r){c.postMessage(JSON.stringify(r))};b\\u003ddocument.createElement(\\"script\\");a\\u003dq(a.url);if(a instanceof p)a\\u003da.g;else throw Error(\\"\\");b.src\\u003da;document.body.appendChild(b)},!0);}).call(this);\\n"]'));
        if (!a) return null;
        a = Gh(a, 6);
        if (a === null || a === void 0) a = null;
        else {
            var b = kc();
            a = new wc(b ? b.createScript(a) : a)
        }
        return a
    };

    function am(a) {
        this.url = a;
        this.timeout = 5E3;
        this.D = "callback";
        this.A = this.B = null
    }

    function bm(a) {
        var b = {
            callback: "?"
        };
        b = b === void 0 ? {} : b;
        a.A = Gk();
        var c = new Nh(a.url),
            d = new Map;
        d.set("callback", a.D);
        c.A.vc(fi(b), d);
        cm(a).then(function() {
            dm(a, c.toString())
        }).then(function() {
            return a.A.promise
        }).then(function() {
            em(a)
        }, function() {
            em(a)
        });
        a.timeout > 0 && (a.C = setTimeout(function() {
            a.A.reject("Timeout!")
        }, a.timeout));
        return a.A.promise
    }

    function dm(a, b) {
        var c = new MessageChannel;
        a.B.contentWindow.postMessage({
            url: b,
            callbackName: a.D
        }, "*", [c.port2]);
        c.port1.onmessage = function(d) {
            var e = {};
            a.C !== void 0 && (clearTimeout(a.C), a.C = void 0);
            d.data === void 0 && a.A.reject("Callback called, but no data received");
            typeof d.data !== u && a.A.reject("Exploitation attempt! Data is not a string!");
            try {
                e = JSON.parse(d.data)
            } catch (f) {
                a.A.reject("Invalid Data received: " + f.message)
            }
            a.A.resolve(e)
        }
    }

    function cm(a) {
        var b = Gk(),
            c = Id(document, "IFRAME");
        if (!c.sandbox) throw Error("iframe sandboxes not supported");
        c.sandbox.value = "allow-scripts";
        c.style.display = p;
        a.B = c;
        a = $l();
        a = Yc([sc("<!DOCTYPE html>"), cd(Xc(a))]);
        c.srcdoc = tc(a);
        a = mc("data:text/html;charset=UTF-8;base64," + btoa(tc(a).toString()));
        c.src = nc(a).toString();
        c.addEventListener("load", function() {
            return b.resolve(c)
        }, !1);
        c.addEventListener(Ia, function(d) {
            b.reject(d)
        }, !1);
        document.documentElement.appendChild(c);
        return b.promise
    }

    function em(a) {
        a.B !== null && (document.documentElement.removeChild(a.B), a.B = null)
    };

    function Z(a) {
        M.call(this, Z.X, a)
    }
    F(Z, M);
    Z.X = "Wikipedia";
    E("_WikipediaView", Z);
    Z.Fb = 5;
    Z.Da = "";
    Z.bb = "en";
    v = Z.prototype;
    v.Ga = !1;
    v.xa = !1;
    v.ca = function() {
        var a = K(this.F, "wikipedia-search-form");
        if (a) {
            Z.Da = this.F.K.data.language || "en";
            var b = this;
            le(a, "submit", function(c) {
                Z.prototype.xa || (Z.prototype.xa = !0, fm(b));
                c.preventDefault()
            })
        }
    };

    function fm(a) {
        Kd(I(K(a.F, cb)));
        Kd(I(K(a.F, bb)));
        var b = fc(I(K(a.F, ab)).value);
        b ? (b = bi(bi(bi(Qh(new Nh("https://" + (a.Ga && Z.bb || Z.Da) + ba), "/w/api.php"), "action", "opensearch"), "search", b), "format", "json"), b = new am(b), K(a.F, db), K(a.F, cb), bm(b).then(A(a.Ad, a), A(a.zd, a))) : (I(K(a.F, db)).style.display = p, Mf(a.F, cb).textContent = a.F.K.data.enterTextMsg, Z.prototype.xa = !1)
    }
    v.Ad = function(a) {
        var b = K(this.F, db),
            c = K(this.F, cb),
            d = fc(I(K(this.F, ab)).value),
            e = [],
            f = a[1];
        a = f.length;
        if (a == 0) I(b).style.display = na, uc(c, rd(wd, this.F.K.data.noResultsFoundMsg)), Z.prototype.xa = !1;
        else {
            for (var g = 0; g < a; g++) e.push('<div id="wikipedia-search-result-link"><a target="_blank" href=https://' + ((this.Ga && Z.bb || Z.Da) + ".wikipedia.org/wiki/" + f[g].replace(/ /g, "_")) + ">" + f[g] + "</a></div>");
            if (a > Z.Fb) {
                for (a = 0; a < Z.Fb; a++) I(c).innerHTML += e[a];
                I(K(this.F, bb)).style.display = na;
                c = '<a target="_blank" href=' +
                    bi(bi(bi(bi(Qh(new Nh("https://" + (this.Ga && Z.bb || Z.Da) + ba), "/w/index.php"), "title", "Special:Search"), "profile", "default"), "search", d), "fulltext", "Search") + ">" + this.F.K.data.moreMsg + "</a>";
                uc(I(K(this.F, bb)), rd(wd, c))
            } else
                for (d = 0; d < a; d++) I(c).innerHTML += e[d];
            I(b).style.display = na;
            this.Ga = Z.prototype.xa = !1
        }
    };
    v.zd = function() {
        Z.Da != "en" ? (this.Ga = !0, fm(this)) : (I(K(this.F, db)).style.display = p, uc(Mf(this.F, cb), Vc(this.F.K.data.fetchingErrorMsg)), Z.prototype.xa = !1)
    };
    if (window.jstiming) {
        window.jstiming.Kb = {};
        window.jstiming.Bd = 1;
        var gm = function(a, b, c) {
                var d = a.t[b],
                    e = a.t.start;
                if (d && (e || c)) return d = a.t[b][0], c != void 0 ? e = c : e = e[0], Math.round(d - e)
            },
            hm = function(a, b, c) {
                var d = "";
                window.jstiming.srt && (d += "&srt=" + window.jstiming.srt, delete window.jstiming.srt);
                window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt, delete window.jstiming.pt);
                try {
                    window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" +
                        window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
                } catch (B) {}
                var e = window.chrome;
                if (e && (e = e.loadTimes) && typeof e === n && (e = e())) {
                    e.wasFetchedViaSpdy && (d += "&p=s");
                    if (e.wasNpnNegotiated) {
                        d += "&npn=1";
                        var f = e.npnNegotiatedProtocol;
                        f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
                    }
                    e.wasAlternateProtocolAvailable && (d += "&apa=1")
                }
                var g = a.t,
                    h = g.start;
                e = [];
                f = [];
                for (var k in g)
                    if (k != "start" && k.indexOf("_") != 0) {
                        var m = g[k][1];
                        m ? g[m] && f.push(k + "." + gm(a, k, g[m][0])) : h &&
                            e.push(k + "." + gm(a, k))
                    } delete g.start;
                if (b)
                    for (var r in b) d += "&" + r + "=" + b[r];
                (b = c) || (b = La == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
                return [b, "?v=3", "&s=" + (window.jstiming.sn || "blogger") + aa, a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
            },
            im = function(a, b, c) {
                a = hm(a, b, c);
                if (!a) return "";
                b = new Image;
                var d = window.jstiming.Bd++;
                window.jstiming.Kb[d] = b;
                b.onload = b.onerror = function() {
                    window.jstiming && delete window.jstiming.Kb[d]
                };
                b.src = a;
                b = null;
                return a
            };
        window.jstiming.report = function(a, b, c) {
            var d = document.visibilityState,
                e = "visibilitychange";
            d || (d = document.webkitVisibilityState, e = "webkitvisibilitychange");
            if (d == Pa) {
                var f = !1,
                    g = function() {
                        if (!f) {
                            b ? b.prerender = "1" : b = {
                                prerender: "1"
                            };
                            if ((document.visibilityState || document.webkitVisibilityState) == Pa) var h = !1;
                            else im(a, b, c), h = !0;
                            h && (f = !0, document.removeEventListener(e, g, !1))
                        }
                    };
                document.addEventListener(e, g, !1);
                return ""
            }
            return im(a, b, c)
        }
    };
}).call(this);
