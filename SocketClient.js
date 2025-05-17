! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.SocketClient = e() : t.SocketClient = e() }(this, (function() {
    return function(t) { var e = {};

        function n(r) { if (e[r]) return e[r].exports; var o = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } return n.m = t, n.c = e, n.d = function(t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var o in t) n.d(r, o, function(e) { return t[e] }.bind(null, o)); return r }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 10) }([function(t, e) { var n;
        n = function() { return this }(); try { n = n || new Function("return this")() } catch (t) { "object" == typeof window && (n = window) }
        t.exports = n }, function(t, e, n) { var r = n(21),
            o = function() { return !this }();

        function i(t, e) { this.name = "AuthTokenExpiredError", this.message = t, this.expiry = e, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function s(t) { this.name = "AuthTokenInvalidError", this.message = t, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function a(t, e) { this.name = "AuthTokenNotBeforeError", this.message = t, this.date = e, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function u(t) { this.name = "AuthTokenError", this.message = t, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function c(t) { this.name = "AuthError", this.message = t, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function h(t, e) { this.name = "SilentMiddlewareBlockedError", this.message = t, this.type = e, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function l(t) { this.name = "InvalidActionError", this.message = t, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function p(t) { this.name = "InvalidArgumentsError", this.message = t, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function f(t) { this.name = "InvalidOptionsError", this.message = t, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function d(t) { this.name = "InvalidMessageError", this.message = t, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function m(t, e) { this.name = "SocketProtocolError", this.message = t, this.code = e, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function y(t) { this.name = "ServerProtocolError", this.message = t, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function g(t) { this.name = "HTTPServerError", this.message = t, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function b(t) { this.name = "ResourceLimitError", this.message = t, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function _(t) { this.name = "TimeoutError", this.message = t, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function k(t, e) { this.name = "BadConnectionError", this.message = t, this.type = e, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function v(t) { this.name = "BrokerError", this.message = t, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function E(t, e) { this.name = "ProcessExitError", this.message = t, this.code = e, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }

        function S(t) { this.name = "UnknownError", this.message = t, Error.captureStackTrace && !o ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack }
        i.prototype = Object.create(Error.prototype), s.prototype = Object.create(Error.prototype), a.prototype = Object.create(Error.prototype), u.prototype = Object.create(Error.prototype), c.prototype = Object.create(Error.prototype), h.prototype = Object.create(Error.prototype), l.prototype = Object.create(Error.prototype), p.prototype = Object.create(Error.prototype), f.prototype = Object.create(Error.prototype), d.prototype = Object.create(Error.prototype), m.prototype = Object.create(Error.prototype), y.prototype = Object.create(Error.prototype), g.prototype = Object.create(Error.prototype), b.prototype = Object.create(Error.prototype), _.prototype = Object.create(Error.prototype), k.prototype = Object.create(Error.prototype), v.prototype = Object.create(Error.prototype), E.prototype = Object.create(Error.prototype), S.prototype = Object.create(Error.prototype), t.exports = { AuthTokenExpiredError: i, AuthTokenInvalidError: s, AuthTokenNotBeforeError: a, AuthTokenError: u, AuthError: c, SilentMiddlewareBlockedError: h, InvalidActionError: l, InvalidArgumentsError: p, InvalidOptionsError: f, InvalidMessageError: d, SocketProtocolError: m, ServerProtocolError: y, HTTPServerError: g, ResourceLimitError: b, TimeoutError: _, BadConnectionError: k, BrokerError: v, ProcessExitError: E, UnknownError: S }, t.exports.socketProtocolErrorStatuses = { 1001: "Socket was disconnected", 1002: "A WebSocket protocol error was encountered", 1003: "Server terminated socket because it received invalid data", 1005: "Socket closed without status code", 1006: "Socket hung up", 1007: "Message format was incorrect", 1008: "Encountered a policy violation", 1009: "Message was too big to process", 1010: "Client ended the connection because the server did not comply with extension requirements", 1011: "Server encountered an unexpected fatal condition", 4e3: "Server ping timed out", 4001: "Client pong timed out", 4002: "Server failed to sign auth token", 4003: "Failed to complete handshake", 4004: "Client failed to save auth token", 4005: "Did not receive #handshake from client before timeout", 4006: "Failed to bind socket to message broker", 4007: "Client connection establishment timed out", 4008: "Server rejected handshake from client", 4009: "Server received a message before the client handshake" }, t.exports.socketProtocolIgnoreStatuses = { 1e3: "Socket closed normally", 1001: "Socket hung up" }; var C = { domain: 1, domainEmitter: 1, domainThrown: 1 };
        t.exports.dehydrateError = function(t, e) { var n; if (t && "object" == typeof t)
                for (var o in n = { message: t.message }, e && (n.stack = t.stack), t) C[o] || (n[o] = t[o]);
            else n = "function" == typeof t ? "[function " + (t.name || "anonymous") + "]" : t; return r(n) }, t.exports.hydrateError = function(t) { var e = null; if (null != t)
                if ("object" == typeof t)
                    for (var n in e = new Error(t.message), t) t.hasOwnProperty(n) && (e[n] = t[n]);
                else e = t;
            return e }, t.exports.decycle = r }, function(t, e) { class n { async next(t) { let e = this.createConsumer(t),
                    n = await e.next(); return e.return(), n }
            async once(t) { let e = await this.next(t); return e.done && await new Promise(() => {}), e.value }
            createConsumer() { throw new TypeError("Method must be overriden by subclass") }[Symbol.asyncIterator]() { return this.createConsumer() } }
        t.exports = n }, function(t, e, n) {
        (function(e) { const r = n(4),
                o = n(15),
                i = n(16),
                s = n(17),
                a = n(18),
                u = n(19),
                c = n(5),
                h = n(25),
                l = n(27),
                p = n(6).Buffer,
                f = n(34),
                d = n(1),
                m = d.InvalidArgumentsError,
                y = d.InvalidMessageError,
                g = (d.InvalidActionError, d.SocketProtocolError),
                b = d.TimeoutError,
                _ = d.BadConnectionError,
                k = "undefined" != typeof window,
                v = t => t.includes(":") ? t : t + ":";

            function E(t) { o.call(this); let n = Object.assign({ path: "/socketcluster/", secure: !1, protocolScheme: null, socketPath: null, autoConnect: !0, autoReconnect: !0, autoSubscribeOnConnect: !0, connectTimeout: 2e4, ackTimeout: 1e4, timestampRequests: !1, timestampParam: "t", authTokenName: "socketcluster.authToken", binaryType: "arraybuffer", batchOnHandshake: !1, batchOnHandshakeDuration: 100, batchInterval: 50, protocolVersion: 2, wsOptions: {}, cloneData: !1 }, t);
                this.id = null, this.version = n.version || null, this.protocolVersion = n.protocolVersion, this.state = this.CLOSED, this.authState = this.UNAUTHENTICATED, this.signedAuthToken = null, this.authToken = null, this.pendingReconnect = !1, this.pendingReconnectTimeout = null, this.preparingPendingSubscriptions = !1, this.clientId = n.clientId, this.wsOptions = n.wsOptions, this.connectTimeout = n.connectTimeout, this.ackTimeout = n.ackTimeout, this.channelPrefix = n.channelPrefix || null, this.disconnectOnUnload = null == n.disconnectOnUnload || n.disconnectOnUnload, this.authTokenName = n.authTokenName, n.pingTimeout = n.connectTimeout, this.pingTimeout = n.pingTimeout, this.pingTimeoutDisabled = !!n.pingTimeoutDisabled; let i = Math.pow(2, 31) - 1,
                    u = t => { if (this[t] > i) throw new m(`The ${t} value provided exceeded the maximum amount allowed`) }; if (u("connectTimeout"), u("ackTimeout"), u("pingTimeout"), this.connectAttempts = 0, this.isBatching = !1, this.batchOnHandshake = n.batchOnHandshake, this.batchOnHandshakeDuration = n.batchOnHandshakeDuration, this._batchingIntervalId = null, this._outboundBuffer = new h, this._channelMap = {}, this._channelEventDemux = new r, this._channelDataDemux = new r, this._receiverDemux = new r, this._procedureDemux = new r, this.options = n, this._cid = 1, this.options.callIdGenerator = () => this._cid++, this.options.autoReconnect) { null == this.options.autoReconnectOptions && (this.options.autoReconnectOptions = {}); let t = this.options.autoReconnectOptions;
                    null == t.initialDelay && (t.initialDelay = 1e4), null == t.randomness && (t.randomness = 1e4), null == t.multiplier && (t.multiplier = 1.5), null == t.maxDelay && (t.maxDelay = 6e4) } if (null == this.options.subscriptionRetryOptions && (this.options.subscriptionRetryOptions = {}), this.options.authEngine ? this.auth = this.options.authEngine : this.auth = new s, this.options.codecEngine ? this.codec = this.options.codecEngine : this.codec = a, this.options.protocol) { let t = new m('The "protocol" option does not affect socketcluster-client - If you want to utilize SSL/TLS, use "secure" option instead');
                    this._onError(t) }
                this.options.query = n.query || {}, "string" == typeof this.options.query && (this.options.query = c.parse(this.options.query)), k && this.disconnectOnUnload && e.addEventListener && e.removeEventListener && this._handleBrowserUnload(), this.options.autoConnect && this.connect() }
            E.prototype = Object.create(o.prototype), E.CONNECTING = E.prototype.CONNECTING = u.prototype.CONNECTING, E.OPEN = E.prototype.OPEN = u.prototype.OPEN, E.CLOSED = E.prototype.CLOSED = u.prototype.CLOSED, E.AUTHENTICATED = E.prototype.AUTHENTICATED = "authenticated", E.UNAUTHENTICATED = E.prototype.UNAUTHENTICATED = "unauthenticated", E.SUBSCRIBED = E.prototype.SUBSCRIBED = i.SUBSCRIBED, E.PENDING = E.prototype.PENDING = i.PENDING, E.UNSUBSCRIBED = E.prototype.UNSUBSCRIBED = i.UNSUBSCRIBED, E.ignoreStatuses = d.socketProtocolIgnoreStatuses, E.errorStatuses = d.socketProtocolErrorStatuses, Object.defineProperty(E.prototype, "isBufferingBatch", { get: function() { return this.transport.isBufferingBatch } }), E.prototype.getBackpressure = function() { return Math.max(this.getAllListenersBackpressure(), this.getAllReceiversBackpressure(), this.getAllProceduresBackpressure(), this.getAllChannelsBackpressure()) }, E.prototype._handleBrowserUnload = async function() { let t = () => { this.disconnect() },
                    n = !1;
                (async() => { let r = this.listener("connecting").createConsumer(); for (;;) { if ((await r.next()).done) break;
                        n || (n = !0, e.addEventListener("beforeunload", t, !1)) } })(), (async() => { let r = this.listener("close").createConsumer(); for (;;) { if ((await r.next()).done) break;
                        n && (n = !1, e.removeEventListener("beforeunload", t, !1)) } })() }, E.prototype._setAuthToken = function(t) { this._changeToAuthenticatedState(t.token), (async() => { try { await this.auth.saveToken(this.authTokenName, t.token, {}) } catch (t) { this._onError(t) } })() }, E.prototype._removeAuthToken = function(t) {
                (async() => { let t; try { t = await this.auth.removeToken(this.authTokenName) } catch (t) { return void this._onError(t) }
                    this.emit("removeAuthToken", { oldAuthToken: t }) })(), this._changeToUnauthenticatedStateAndClearTokens() }, E.prototype._privateDataHandlerMap = { "#publish": function(t) { let e = this._undecorateChannelName(t.channel);
                    this.isSubscribed(e, !0) && this._channelDataDemux.write(e, t.data) }, "#kickOut": function(t) { let e = this._undecorateChannelName(t.channel),
                        n = this._channelMap[e];
                    n && (this.emit("kickOut", { channel: e, message: t.message }), this._channelEventDemux.write(e + "/kickOut", { message: t.message }), this._triggerChannelUnsubscribe(n)) }, "#setAuthToken": function(t) { t && this._setAuthToken(t) }, "#removeAuthToken": function(t) { this._removeAuthToken(t) } }, E.prototype._privateRPCHandlerMap = { "#setAuthToken": function(t, e) { t ? (this._setAuthToken(t), e.end()) : e.error(new y("No token data provided by #setAuthToken event")) }, "#removeAuthToken": function(t, e) { this._removeAuthToken(t), e.end() } }, E.prototype.getState = function() { return this.state }, E.prototype.getBytesReceived = function() { return this.transport.getBytesReceived() }, E.prototype.deauthenticate = async function() {
                (async() => { let t; try { t = await this.auth.removeToken(this.authTokenName) } catch (t) { return void this._onError(t) }
                    this.emit("removeAuthToken", { oldAuthToken: t }) })(), this.state !== this.CLOSED && this.transmit("#removeAuthToken"), this._changeToUnauthenticatedStateAndClearTokens(), await f(0) }, E.prototype.connect = function() { if (this.state === this.CLOSED) { this.pendingReconnect = !1, this.pendingReconnectTimeout = null, clearTimeout(this._reconnectTimeoutRef), this.state = this.CONNECTING, this.emit("connecting", {}), this.transport && this.transport.clearAllListeners(); let t = { onOpen: t => { this.state = this.OPEN, this._onOpen(t) }, onOpenAbort: t => { this.state !== this.CLOSED && (this.state = this.CLOSED, this._destroy(t.code, t.reason, !0)) }, onClose: t => { this.state !== this.CLOSED && (this.state = this.CLOSED, this._destroy(t.code, t.reason)) }, onEvent: t => { this.emit(t.event, t.data) }, onError: t => { this._onError(t.error) }, onInboundInvoke: t => { this._onInboundInvoke(t) }, onInboundTransmit: t => { this._onInboundTransmit(t.event, t.data) } };
                    this.transport = new u(this.auth, this.codec, this.options, this.wsOptions, t) } }, E.prototype.reconnect = function(t, e) { this.disconnect(t, e), this.connect() }, E.prototype.disconnect = function(t, e) { if ("number" != typeof(t = t || 1e3)) throw new m("If specified, the code argument must be a number"); let n = this.state === this.CONNECTING;
                n || this.state === this.OPEN ? (this.state = this.CLOSED, this._destroy(t, e, n), this.transport.close(t, e)) : (this.pendingReconnect = !1, this.pendingReconnectTimeout = null, clearTimeout(this._reconnectTimeoutRef)) }, E.prototype._changeToUnauthenticatedStateAndClearTokens = function() { if (this.authState !== this.UNAUTHENTICATED) { let t = this.authState,
                        e = this.authToken,
                        n = this.signedAuthToken;
                    this.authState = this.UNAUTHENTICATED, this.signedAuthToken = null, this.authToken = null; let r = { oldAuthState: t, newAuthState: this.authState };
                    this.emit("authStateChange", r), this.emit("deauthenticate", { oldSignedAuthToken: n, oldAuthToken: e }) } }, E.prototype._changeToAuthenticatedState = function(t) { if (this.signedAuthToken = t, this.authToken = this._extractAuthTokenData(t), this.authToken && this.authToken instanceof Object && this.authToken.prefix && (this.channelPrefix = v(this.authToken.prefix)), this.authState !== this.AUTHENTICATED) { let e = this.authState;
                    this.authState = this.AUTHENTICATED; let n = { oldAuthState: e, newAuthState: this.authState, signedAuthToken: t, authToken: this.authToken };
                    this.preparingPendingSubscriptions || this.processPendingSubscriptions(), this.emit("authStateChange", n) }
                this.emit("authenticate", { signedAuthToken: t, authToken: this.authToken }) }, E.prototype.decodeBase64 = function(t) { return p.from(t, "base64").toString("utf8") }, E.prototype.encodeBase64 = function(t) { return p.from(t, "utf8").toString("base64") }, E.prototype._extractAuthTokenData = function(t) { let e = (t || "").split(".")[1]; if (null != e) { let t = e; try { return t = this.decodeBase64(t), JSON.parse(t) } catch (e) { return t } } return null }, E.prototype.getAuthToken = function() { return this.authToken }, E.prototype.getSignedAuthToken = function() { return this.signedAuthToken }, E.prototype.authenticate = async function(t) { let e; try { e = await this.invoke("#authenticate", t) } catch (t) { throw "BadConnectionError" !== t.name && "TimeoutError" !== t.name && this._changeToUnauthenticatedStateAndClearTokens(), await f(0), t } return e && null != e.isAuthenticated ? e.authError && (e.authError = d.hydrateError(e.authError)) : e = { isAuthenticated: this.authState, authError: null }, e.isAuthenticated ? this._changeToAuthenticatedState(t) : this._changeToUnauthenticatedStateAndClearTokens(), (async() => { try { await this.auth.saveToken(this.authTokenName, t, {}) } catch (t) { this._onError(t) } })(), await f(0), e }, E.prototype._tryReconnect = function(t) { let e, n = this.connectAttempts++,
                    r = this.options.autoReconnectOptions; if (null == t || n > 0) { let t = Math.round(r.initialDelay + (r.randomness || 0) * Math.random());
                    e = Math.round(t * Math.pow(r.multiplier, n)) } else e = t;
                e > r.maxDelay && (e = r.maxDelay), clearTimeout(this._reconnectTimeoutRef), this.pendingReconnect = !0, this.pendingReconnectTimeout = e, this._reconnectTimeoutRef = setTimeout(() => { this.connect() }, e) }, E.prototype._onOpen = function(t) { this.isBatching ? this._startBatching() : this.batchOnHandshake && (this._startBatching(), setTimeout(() => { this.isBatching || this._stopBatching() }, this.batchOnHandshakeDuration)), this.preparingPendingSubscriptions = !0, t ? (this.id = t.id, this.pingTimeout = t.pingTimeout, t.isAuthenticated ? this._changeToAuthenticatedState(t.authToken) : this._changeToUnauthenticatedStateAndClearTokens()) : this._changeToUnauthenticatedStateAndClearTokens(), this.connectAttempts = 0, this.options.autoSubscribeOnConnect && this.processPendingSubscriptions(), this.emit("connect", {...t, processPendingSubscriptions: () => { this.processPendingSubscriptions() } }), this.state === this.OPEN && this._flushOutboundBuffer() }, E.prototype._onError = function(t) { this.emit("error", { error: t }) }, E.prototype._suspendSubscriptions = function() { Object.keys(this._channelMap).forEach(t => { let e = this._channelMap[t];
                    this._triggerChannelUnsubscribe(e, !0) }) }, E.prototype._abortAllPendingEventsDueToBadConnection = function(t) { let e, n = this._outboundBuffer.head; for (; n;) { e = n.next; let r = n.data;
                    clearTimeout(r.timeout), delete r.timeout, n.detach(), n = e; let o = r.callback; if (o) { delete r.callback; let e = `Event "${r.event}" was aborted due to a bad connection`,
                            n = new _(e, t);
                        o.call(r, n, r) }
                    r.cid && this.transport.cancelPendingResponse(r.cid) } }, E.prototype._destroy = function(t, e, n) { if (this.id = null, this._cancelBatching(), this.transport && this.transport.clearAllListeners(), this.pendingReconnect = !1, this.pendingReconnectTimeout = null, clearTimeout(this._reconnectTimeoutRef), this._suspendSubscriptions(), n ? this.emit("connectAbort", { code: t, reason: e }) : this.emit("disconnect", { code: t, reason: e }), this.emit("close", { code: t, reason: e }), !E.ignoreStatuses[t]) { let n;
                    n = e ? "Socket connection closed with status code " + t + " and reason: " + e : "Socket connection closed with status code " + t; let r = new g(E.errorStatuses[t] || n, t);
                    this._onError(r) }
                this._abortAllPendingEventsDueToBadConnection(n ? "connectAbort" : "disconnect"), this.options.autoReconnect && (4e3 === t || 4001 === t || 1005 === t ? this._tryReconnect(0) : 1e3 !== t && t < 4500 && this._tryReconnect()) }, E.prototype._onInboundTransmit = function(t, e) { let n = this._privateDataHandlerMap[t];
                n ? n.call(this, e) : this._receiverDemux.write(t, e) }, E.prototype._onInboundInvoke = function(t) { let { procedure: e, data: n } = t, r = this._privateRPCHandlerMap[e];
                r ? r.call(this, n, t) : this._procedureDemux.write(e, t) }, E.prototype.decode = function(t) { return this.transport.decode(t) }, E.prototype.encode = function(t) { return this.transport.encode(t) }, E.prototype._flushOutboundBuffer = function() { let t, e = this._outboundBuffer.head; for (; e;) { t = e.next; let n = e.data;
                    e.detach(), this.transport.transmitObject(n), e = t } }, E.prototype._handleEventAckTimeout = function(t, e) { e && e.detach(), delete t.timeout; let n = t.callback; if (n) { delete t.callback; let e = new b(`Event response for "${t.event}" timed out`);
                    n.call(t, e, t) }
                t.cid && this.transport.cancelPendingResponse(t.cid) }, E.prototype._processOutboundEvent = function(t, e, n, r) { if (n = n || {}, this.state === this.CLOSED && this.connect(), !r && this.authState !== this.AUTHENTICATED) return; let o, i = { event: t };
                o = r ? new Promise((t, e) => { i.callback = (n, r) => { n ? e(n) : t(r) } }) : Promise.resolve(); let s = new h.Item;
                this.options.cloneData ? i.data = l(e) : i.data = e, s.data = i; let a = null == n.ackTimeout ? this.ackTimeout : n.ackTimeout; return i.timeout = setTimeout(() => { this._handleEventAckTimeout(i, s) }, a), this._outboundBuffer.append(s), this.state === this.OPEN && this._flushOutboundBuffer(), o }, E.prototype.send = function(t) { this.transport.send(t) }, E.prototype.transmit = function(t, e, n) { return this._processOutboundEvent(t, e, n) }, E.prototype.invoke = function(t, e, n) { return this._processOutboundEvent(t, e, n, !0) }, E.prototype.transmitPublish = function(t, e) { let n = { channel: this._decorateChannelName(t), data: e }; return this.transmit("#publish", n) }, E.prototype.invokePublish = function(t, e) { let n = { channel: this._decorateChannelName(t), data: e }; return this.invoke("#publish", n) }, E.prototype._triggerChannelSubscribe = function(t, e) { let n = t.name; if (t.state !== i.SUBSCRIBED) { let r = t.state;
                    t.state = i.SUBSCRIBED; let o = { oldChannelState: r, newChannelState: t.state, subscriptionOptions: e };
                    this._channelEventDemux.write(n + "/subscribeStateChange", o), this._channelEventDemux.write(n + "/subscribe", { subscriptionOptions: e }), this.emit("subscribeStateChange", { channel: n, ...o }), this.emit("subscribe", { channel: n, subscriptionOptions: e }) } }, E.prototype._triggerChannelSubscribeFail = function(t, e, n) { let r = e.name,
                    o = !e.options.waitForAuth || this.authState === this.AUTHENTICATED;!!this._channelMap[r] && o && (delete this._channelMap[r], this._channelEventDemux.write(r + "/subscribeFail", { error: t, subscriptionOptions: n }), this.emit("subscribeFail", { error: t, channel: r, subscriptionOptions: n })) }, E.prototype.setChannelPrefix = function(t) { return this.channelPrefix = v(t) }, E.prototype._cancelPendingSubscribeCallback = function(t) { null != t._pendingSubscriptionCid && (this.transport.cancelPendingResponse(t._pendingSubscriptionCid), delete t._pendingSubscriptionCid) }, E.prototype._decorateChannelName = function(t) { return this.channelPrefix && (t = this.channelPrefix + t), t }, E.prototype._undecorateChannelName = function(t) { return this.channelPrefix && 0 === t.indexOf(this.channelPrefix) ? t.replace(this.channelPrefix, "") : t }, E.prototype.startBatch = function() { this.transport.startBatch() }, E.prototype.flushBatch = function() { this.transport.flushBatch() }, E.prototype.cancelBatch = function() { this.transport.cancelBatch() }, E.prototype._startBatching = function() { null == this._batchingIntervalId && (this.startBatch(), this._batchingIntervalId = setInterval(() => { this.flushBatch(), this.startBatch() }, this.options.batchInterval)) }, E.prototype.startBatching = function() { this.isBatching = !0, this._startBatching() }, E.prototype._stopBatching = function() { null != this._batchingIntervalId && clearInterval(this._batchingIntervalId), this._batchingIntervalId = null, this.flushBatch() }, E.prototype.stopBatching = function() { this.isBatching = !1, this._stopBatching() }, E.prototype._cancelBatching = function() { null != this._batchingIntervalId && clearInterval(this._batchingIntervalId), this._batchingIntervalId = null, this.cancelBatch() }, E.prototype.cancelBatching = function() { this.isBatching = !1, this._cancelBatching() }, E.prototype._trySubscribe = function(t) { let e = !t.options.waitForAuth || this.authState === this.AUTHENTICATED; if (this.state === this.OPEN && !this.preparingPendingSubscriptions && null == t._pendingSubscriptionCid && e) { let e = { noTimeout: !0 },
                        n = {};
                    t.options.waitForAuth && (e.waitForAuth = !0, n.waitForAuth = e.waitForAuth), t.options.data && (n.data = t.options.data), t._pendingSubscriptionCid = this.transport.invokeRaw("#subscribe", { channel: this._decorateChannelName(t.name), ...n }, e, e => { if (e) { if ("BadConnectionError" === e.name) return;
                            delete t._pendingSubscriptionCid, this._triggerChannelSubscribeFail(e, t, n) } else delete t._pendingSubscriptionCid, this._triggerChannelSubscribe(t, n) }), this.emit("subscribeRequest", { channel: t.name, subscriptionOptions: n }) } }, E.prototype.subscribe = function(t, e) { e = e || {}; let n = this._channelMap[t],
                    r = { waitForAuth: !0 }; return null != e.priority && (r.priority = e.priority), void 0 !== e.data && (r.data = e.data), n ? e && (n.options = r) : (n = { name: t, state: i.PENDING, options: r }, this._channelMap[t] = n, this._trySubscribe(n)), new i(t, this, this._channelEventDemux, this._channelDataDemux) }, E.prototype._triggerChannelUnsubscribe = function(t, e) { let n = t.name; if (this._cancelPendingSubscribeCallback(t), t.state === i.SUBSCRIBED) { let r = { oldChannelState: t.state, newChannelState: e ? i.PENDING : i.UNSUBSCRIBED };
                    this._channelEventDemux.write(n + "/subscribeStateChange", r), this._channelEventDemux.write(n + "/unsubscribe", {}), this.emit("subscribeStateChange", { channel: n, ...r }), this.emit("unsubscribe", { channel: n }) }
                e ? t.state = i.PENDING : delete this._channelMap[n] }, E.prototype._tryUnsubscribe = function(t) { if (this.state === this.OPEN) { let e = { noTimeout: !0 };
                    this._cancelPendingSubscribeCallback(t); let n = this._decorateChannelName(t.name);
                    this.transport.transmit("#unsubscribe", n, e) } }, E.prototype.unsubscribe = function(t) { let e = this._channelMap[t];
                e && (this._triggerChannelUnsubscribe(e), this._tryUnsubscribe(e)) }, E.prototype.receiver = function(t) { return this._receiverDemux.stream(t) }, E.prototype.closeReceiver = function(t) { this._receiverDemux.close(t) }, E.prototype.closeAllReceivers = function() { this._receiverDemux.closeAll() }, E.prototype.killReceiver = function(t) { this._receiverDemux.kill(t) }, E.prototype.killAllReceivers = function() { this._receiverDemux.killAll() }, E.prototype.killReceiverConsumer = function(t) { this._receiverDemux.killConsumer(t) }, E.prototype.getReceiverConsumerStats = function(t) { return this._receiverDemux.getConsumerStats(t) }, E.prototype.getReceiverConsumerStatsList = function(t) { return this._receiverDemux.getConsumerStatsList(t) }, E.prototype.getAllReceiversConsumerStatsList = function() { return this._receiverDemux.getConsumerStatsListAll() }, E.prototype.getReceiverBackpressure = function(t) { return this._receiverDemux.getBackpressure(t) }, E.prototype.getAllReceiversBackpressure = function() { return this._receiverDemux.getBackpressureAll() }, E.prototype.getReceiverConsumerBackpressure = function(t) { return this._receiverDemux.getConsumerBackpressure(t) }, E.prototype.hasReceiverConsumer = function(t, e) { return this._receiverDemux.hasConsumer(t, e) }, E.prototype.hasAnyReceiverConsumer = function(t) { return this._receiverDemux.hasConsumerAll(t) }, E.prototype.procedure = function(t) { return this._procedureDemux.stream(t) }, E.prototype.closeProcedure = function(t) { this._procedureDemux.close(t) }, E.prototype.closeAllProcedures = function() { this._procedureDemux.closeAll() }, E.prototype.killProcedure = function(t) { this._procedureDemux.kill(t) }, E.prototype.killAllProcedures = function() { this._procedureDemux.killAll() }, E.prototype.killProcedureConsumer = function(t) { this._procedureDemux.killConsumer(t) }, E.prototype.getProcedureConsumerStats = function(t) { return this._procedureDemux.getConsumerStats(t) }, E.prototype.getProcedureConsumerStatsList = function(t) { return this._procedureDemux.getConsumerStatsList(t) }, E.prototype.getAllProceduresConsumerStatsList = function() { return this._procedureDemux.getConsumerStatsListAll() }, E.prototype.getProcedureBackpressure = function(t) { return this._procedureDemux.getBackpressure(t) }, E.prototype.getAllProceduresBackpressure = function() { return this._procedureDemux.getBackpressureAll() }, E.prototype.getProcedureConsumerBackpressure = function(t) { return this._procedureDemux.getConsumerBackpressure(t) }, E.prototype.hasProcedureConsumer = function(t, e) { return this._procedureDemux.hasConsumer(t, e) }, E.prototype.hasAnyProcedureConsumer = function(t) { return this._procedureDemux.hasConsumerAll(t) }, E.prototype.channel = function(t) { this._channelMap[t]; return new i(t, this, this._channelEventDemux, this._channelDataDemux) }, E.prototype.closeChannel = function(t) { this.channelCloseOutput(t), this.channelCloseAllListeners(t) }, E.prototype.closeAllChannelOutputs = function() { this._channelDataDemux.closeAll() }, E.prototype.closeAllChannelListeners = function() { this._channelEventDemux.closeAll() }, E.prototype.closeAllChannels = function() { this.closeAllChannelOutputs(), this.closeAllChannelListeners() }, E.prototype.killChannel = function(t) { this.channelKillOutput(t), this.channelKillAllListeners(t) }, E.prototype.killAllChannelOutputs = function() { this._channelDataDemux.killAll() }, E.prototype.killAllChannelListeners = function() { this._channelEventDemux.killAll() }, E.prototype.killAllChannels = function() { this.killAllChannelOutputs(), this.killAllChannelListeners() }, E.prototype.killChannelOutputConsumer = function(t) { this._channelDataDemux.killConsumer(t) }, E.prototype.killChannelListenerConsumer = function(t) { this._channelEventDemux.killConsumer(t) }, E.prototype.getChannelOutputConsumerStats = function(t) { return this._channelDataDemux.getConsumerStats(t) }, E.prototype.getChannelListenerConsumerStats = function(t) { return this._channelEventDemux.getConsumerStats(t) }, E.prototype.getAllChannelOutputsConsumerStatsList = function() { return this._channelDataDemux.getConsumerStatsListAll() }, E.prototype.getAllChannelListenersConsumerStatsList = function() { return this._channelEventDemux.getConsumerStatsListAll() }, E.prototype.getChannelBackpressure = function(t) { return Math.max(this.channelGetOutputBackpressure(t), this.channelGetAllListenersBackpressure(t)) }, E.prototype.getAllChannelOutputsBackpressure = function() { return this._channelDataDemux.getBackpressureAll() }, E.prototype.getAllChannelListenersBackpressure = function() { return this._channelEventDemux.getBackpressureAll() }, E.prototype.getAllChannelsBackpressure = function() { return Math.max(this.getAllChannelOutputsBackpressure(), this.getAllChannelListenersBackpressure()) }, E.prototype.getChannelListenerConsumerBackpressure = function(t) { return this._channelEventDemux.getConsumerBackpressure(t) }, E.prototype.getChannelOutputConsumerBackpressure = function(t) { return this._channelDataDemux.getConsumerBackpressure(t) }, E.prototype.hasAnyChannelOutputConsumer = function(t) { return this._channelDataDemux.hasConsumerAll(t) }, E.prototype.hasAnyChannelListenerConsumer = function(t) { return this._channelEventDemux.hasConsumerAll(t) }, E.prototype.getChannelState = function(t) { let e = this._channelMap[t]; return e ? e.state : i.UNSUBSCRIBED }, E.prototype.getChannelOptions = function(t) { let e = this._channelMap[t]; return e ? {...e.options } : {} }, E.prototype._getAllChannelStreamNames = function(t) { let e = this._channelEventDemux.getConsumerStatsListAll().filter(e => 0 === e.stream.indexOf(t + "/")).reduce((t, e) => (t[e.stream] = !0, t), {}); return Object.keys(e) }, E.prototype.channelCloseOutput = function(t) { this._channelDataDemux.close(t) }, E.prototype.channelCloseListener = function(t, e) { this._channelEventDemux.close(`${t}/${e}`) }, E.prototype.channelCloseAllListeners = function(t) { this._getAllChannelStreamNames(t).forEach(t => { this._channelEventDemux.close(t) }) }, E.prototype.channelKillOutput = function(t) { this._channelDataDemux.kill(t) }, E.prototype.channelKillListener = function(t, e) { this._channelEventDemux.kill(`${t}/${e}`) }, E.prototype.channelKillAllListeners = function(t) { this._getAllChannelStreamNames(t).forEach(t => { this._channelEventDemux.kill(t) }) }, E.prototype.channelGetOutputConsumerStatsList = function(t) { return this._channelDataDemux.getConsumerStatsList(t) }, E.prototype.channelGetListenerConsumerStatsList = function(t, e) { return this._channelEventDemux.getConsumerStatsList(`${t}/${e}`) }, E.prototype.channelGetAllListenersConsumerStatsList = function(t) { return this._getAllChannelStreamNames(t).map(t => this._channelEventDemux.getConsumerStatsList(t)).reduce((t, e) => (e.forEach(e => { t.push(e) }), t), []) }, E.prototype.channelGetOutputBackpressure = function(t) { return this._channelDataDemux.getBackpressure(t) }, E.prototype.channelGetListenerBackpressure = function(t, e) { return this._channelEventDemux.getBackpressure(`${t}/${e}`) }, E.prototype.channelGetAllListenersBackpressure = function(t) { let e = this._getAllChannelStreamNames(t).map(t => this._channelEventDemux.getBackpressure(t)); return Math.max(...e.concat(0)) }, E.prototype.channelHasOutputConsumer = function(t, e) { return this._channelDataDemux.hasConsumer(t, e) }, E.prototype.channelHasListenerConsumer = function(t, e, n) { return this._channelEventDemux.hasConsumer(`${t}/${e}`, n) }, E.prototype.channelHasAnyListenerConsumer = function(t, e) { return this._getAllChannelStreamNames(t).some(t => this._channelEventDemux.hasConsumer(t, e)) }, E.prototype.subscriptions = function(t) { let e = []; return Object.keys(this._channelMap).forEach(n => {
                    (t || this._channelMap[n].state === i.SUBSCRIBED) && e.push(n) }), e }, E.prototype.isSubscribed = function(t, e) { let n = this._channelMap[t]; return e ? !!n : !!n && n.state === i.SUBSCRIBED }, E.prototype.processPendingSubscriptions = function() { this.preparingPendingSubscriptions = !1; let t = [];
                Object.keys(this._channelMap).forEach(e => { let n = this._channelMap[e];
                    n.state === i.PENDING && t.push(n) }), t.sort((t, e) => { let n = t.options.priority || 0,
                        r = e.options.priority || 0; return n > r ? -1 : n < r ? 1 : 0 }), t.forEach(t => { this._trySubscribe(t) }) }, t.exports = E }).call(this, n(0)) }, function(t, e, n) { const r = n(12),
            o = n(14);
        t.exports = class { constructor() { this._mainStream = new r }
            write(t, e) { this._mainStream.write({ stream: t, data: { value: e, done: !1 } }) }
            close(t, e) { this._mainStream.write({ stream: t, data: { value: e, done: !0 } }) }
            closeAll(t) { this._mainStream.close(t) }
            writeToConsumer(t, e) { this._mainStream.writeToConsumer(t, { consumerId: t, data: { value: e, done: !1 } }) }
            closeConsumer(t, e) { this._mainStream.closeConsumer(t, { consumerId: t, data: { value: e, done: !0 } }) }
            getConsumerStats(t) { return this._mainStream.getConsumerStats(t) }
            getConsumerStatsList(t) { return this._mainStream.getConsumerStatsList().filter(e => e.stream === t) }
            getConsumerStatsListAll() { return this._mainStream.getConsumerStatsList() }
            kill(t, e) { let n = this.getConsumerStatsList(t),
                    r = n.length; for (let t = 0; t < r; t++) this.killConsumer(n[t].id, e) }
            killAll(t) { this._mainStream.kill(t) }
            killConsumer(t, e) { this._mainStream.killConsumer(t, e) }
            getBackpressure(t) { let e = this.getConsumerStatsList(t),
                    n = e.length,
                    r = 0; for (let t = 0; t < n; t++) { let n = e[t];
                    n.backpressure > r && (r = n.backpressure) } return r }
            getBackpressureAll() { return this._mainStream.getBackpressure() }
            getConsumerBackpressure(t) { return this._mainStream.getConsumerBackpressure(t) }
            hasConsumer(t, e) { let n = this._mainStream.getConsumerStats(e); return !!n && n.stream === t }
            hasConsumerAll(t) { return this._mainStream.hasConsumer(t) }
            createConsumer(t, e) { let n = this._mainStream.createConsumer(e),
                    r = n.next;
                n.next = async function() { for (;;) { let e = await r.apply(this, arguments); if (e.value && (e.value.stream === t || e.value.consumerId === this.id)) return e.value.data.done && this.return(), e.value.data; if (e.done) return e } }; let o = n.getStats;
                n.getStats = function() { let e = o.apply(this, arguments); return e.stream = t, e }; let i = n.applyBackpressure;
                n.applyBackpressure = function(e) {!e.value || e.value.stream !== t && e.value.consumerId !== this.id ? e.done && i.apply(this, arguments) : i.apply(this, arguments) }; let s = n.releaseBackpressure; return n.releaseBackpressure = function(e) {!e.value || e.value.stream !== t && e.value.consumerId !== this.id ? e.done && s.apply(this, arguments) : s.apply(this, arguments) }, n }
            stream(t) { return new o(this, t) } } }, function(t, e, n) { "use strict";
        e.decode = e.parse = n(22), e.encode = e.stringify = n(23) }, function(t, e, n) {
        "use strict";
        (function(t) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <http://feross.org>
             * @license  MIT
             */
            var r = n(29),
                o = n(30),
                i = n(31);

            function s() { return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

            function a(t, e) { if (s() < e) throw new RangeError("Invalid typed array length"); return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t }

            function u(t, e, n) { if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, n); if ("number" == typeof t) { if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string"); return l(this, t) } return c(this, t, e, n) }

            function c(t, e, n, r) { if ("number" == typeof e) throw new TypeError('"value" argument must not be a number'); return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) { if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds"); if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                    e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
                    u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = p(t, e); return t }(t, e, n, r) : "string" == typeof e ? function(t, e, n) { "string" == typeof n && "" !== n || (n = "utf8"); if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding'); var r = 0 | d(e, n),
                        o = (t = a(t, r)).write(e, n);
                    o !== r && (t = t.slice(0, o)); return t }(t, e, n) : function(t, e) { if (u.isBuffer(e)) { var n = 0 | f(e.length); return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n), t } if (e) { if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : p(t, e); if ("Buffer" === e.type && i(e.data)) return p(t, e.data) } var r; throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }(t, e) }

            function h(t) { if ("number" != typeof t) throw new TypeError('"size" argument must be a number'); if (t < 0) throw new RangeError('"size" argument must not be negative') }

            function l(t, e) { if (h(e), t = a(t, e < 0 ? 0 : 0 | f(e)), !u.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < e; ++n) t[n] = 0; return t }

            function p(t, e) { var n = e.length < 0 ? 0 : 0 | f(e.length);
                t = a(t, n); for (var r = 0; r < n; r += 1) t[r] = 255 & e[r]; return t }

            function f(t) { if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes"); return 0 | t }

            function d(t, e) { if (u.isBuffer(t)) return t.length; if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength; "string" != typeof t && (t = "" + t); var n = t.length; if (0 === n) return 0; for (var r = !1;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return H(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return Y(t).length;
                    default:
                        if (r) return H(t).length;
                        e = ("" + e).toLowerCase(), r = !0 } }

            function m(t, e, n) { var r = !1; if ((void 0 === e || e < 0) && (e = 0), e > this.length) return ""; if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return ""; if ((n >>>= 0) <= (e >>>= 0)) return ""; for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return O(this, e, n);
                    case "utf8":
                    case "utf-8":
                        return T(this, e, n);
                    case "ascii":
                        return A(this, e, n);
                    case "latin1":
                    case "binary":
                        return B(this, e, n);
                    case "base64":
                        return w(this, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return x(this, e, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), r = !0 } }

            function y(t, e, n) { var r = t[e];
                t[e] = t[n], t[n] = r }

            function g(t, e, n, r, o) { if (0 === t.length) return -1; if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) { if (o) return -1;
                    n = t.length - 1 } else if (n < 0) { if (!o) return -1;
                    n = 0 } if ("string" == typeof e && (e = u.from(e, r)), u.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, n, r, o); if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : b(t, [e], n, r, o); throw new TypeError("val must be string, number or Buffer") }

            function b(t, e, n, r, o) { var i, s = 1,
                    a = t.length,
                    u = e.length; if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) { if (t.length < 2 || e.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, n /= 2 }

                function c(t, e) { return 1 === s ? t[e] : t.readUInt16BE(e * s) } if (o) { var h = -1; for (i = n; i < a; i++)
                        if (c(t, i) === c(e, -1 === h ? 0 : i - h)) { if (-1 === h && (h = i), i - h + 1 === u) return h * s } else -1 !== h && (i -= i - h), h = -1 } else
                    for (n + u > a && (n = a - u), i = n; i >= 0; i--) { for (var l = !0, p = 0; p < u; p++)
                            if (c(t, i + p) !== c(e, p)) { l = !1; break }
                        if (l) return i }
                return -1 }

            function _(t, e, n, r) { n = Number(n) || 0; var o = t.length - n;
                r ? (r = Number(r)) > o && (r = o) : r = o; var i = e.length; if (i % 2 != 0) throw new TypeError("Invalid hex string");
                r > i / 2 && (r = i / 2); for (var s = 0; s < r; ++s) { var a = parseInt(e.substr(2 * s, 2), 16); if (isNaN(a)) return s;
                    t[n + s] = a } return s }

            function k(t, e, n, r) { return G(H(e, t.length - n), t, n, r) }

            function v(t, e, n, r) { return G(function(t) { for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n)); return e }(e), t, n, r) }

            function E(t, e, n, r) { return v(t, e, n, r) }

            function S(t, e, n, r) { return G(Y(e), t, n, r) }

            function C(t, e, n, r) { return G(function(t, e) { for (var n, r, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = t.charCodeAt(s), r = n >> 8, o = n % 256, i.push(o), i.push(r); return i }(e, t.length - n), t, n, r) }

            function w(t, e, n) { return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n)) }

            function T(t, e, n) { n = Math.min(t.length, n); for (var r = [], o = e; o < n;) { var i, s, a, u, c = t[o],
                        h = null,
                        l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1; if (o + l <= n) switch (l) {
                        case 1:
                            c < 128 && (h = c); break;
                        case 2:
                            128 == (192 & (i = t[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (h = u); break;
                        case 3:
                            i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (h = u); break;
                        case 4:
                            i = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (h = u) }
                    null === h ? (h = 65533, l = 1) : h > 65535 && (h -= 65536, r.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), r.push(h), o += l } return function(t) { var e = t.length; if (e <= 4096) return String.fromCharCode.apply(String, t); var n = "",
                        r = 0; for (; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += 4096)); return n }(r) }
            e.Buffer = u, e.SlowBuffer = function(t) {+t != t && (t = 0); return u.alloc(+t) }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() { try { var t = new Uint8Array(1); return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength } catch (t) { return !1 } }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function(t) { return t.__proto__ = u.prototype, t }, u.from = function(t, e, n) { return c(null, t, e, n) }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, { value: null, configurable: !0 })), u.alloc = function(t, e, n) { return function(t, e, n, r) { return h(e), e <= 0 ? a(t, e) : void 0 !== n ? "string" == typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n) : a(t, e) }(null, t, e, n) }, u.allocUnsafe = function(t) { return l(null, t) }, u.allocUnsafeSlow = function(t) { return l(null, t) }, u.isBuffer = function(t) { return !(null == t || !t._isBuffer) }, u.compare = function(t, e) { if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers"); if (t === e) return 0; for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o)
                    if (t[o] !== e[o]) { n = t[o], r = e[o]; break }
                return n < r ? -1 : r < n ? 1 : 0 }, u.isEncoding = function(t) { switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1 } }, u.concat = function(t, e) { if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === t.length) return u.alloc(0); var n; if (void 0 === e)
                    for (e = 0, n = 0; n < t.length; ++n) e += t[n].length; var r = u.allocUnsafe(e),
                    o = 0; for (n = 0; n < t.length; ++n) { var s = t[n]; if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(r, o), o += s.length } return r }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function() { var t = this.length; if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var e = 0; e < t; e += 2) y(this, e, e + 1); return this }, u.prototype.swap32 = function() { var t = this.length; if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2); return this }, u.prototype.swap64 = function() { var t = this.length; if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4); return this }, u.prototype.toString = function() { var t = 0 | this.length; return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : m.apply(this, arguments) }, u.prototype.equals = function(t) { if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); return this === t || 0 === u.compare(this, t) }, u.prototype.inspect = function() { var t = "",
                    n = e.INSPECT_MAX_BYTES; return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">" }, u.prototype.compare = function(t, e, n, r, o) { if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index"); if (r >= o && e >= n) return 0; if (r >= o) return -1; if (e >= n) return 1; if (this === t) return 0; for (var i = (o >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(i, s), c = this.slice(r, o), h = t.slice(e, n), l = 0; l < a; ++l)
                    if (c[l] !== h[l]) { i = c[l], s = h[l]; break }
                return i < s ? -1 : s < i ? 1 : 0 }, u.prototype.includes = function(t, e, n) { return -1 !== this.indexOf(t, e, n) }, u.prototype.indexOf = function(t, e, n) { return g(this, t, e, n, !0) }, u.prototype.lastIndexOf = function(t, e, n) { return g(this, t, e, n, !1) }, u.prototype.write = function(t, e, n, r) { if (void 0 === e) r = "utf8", n = this.length, e = 0;
                else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                else { if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0) } var o = this.length - e; if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8"); for (var i = !1;;) switch (r) {
                    case "hex":
                        return _(this, t, e, n);
                    case "utf8":
                    case "utf-8":
                        return k(this, t, e, n);
                    case "ascii":
                        return v(this, t, e, n);
                    case "latin1":
                    case "binary":
                        return E(this, t, e, n);
                    case "base64":
                        return S(this, t, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return C(this, t, e, n);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), i = !0 } }, u.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };

            function A(t, e, n) { var r = "";
                n = Math.min(t.length, n); for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]); return r }

            function B(t, e, n) { var r = "";
                n = Math.min(t.length, n); for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]); return r }

            function O(t, e, n) { var r = t.length;
                (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r); for (var o = "", i = e; i < n; ++i) o += M(t[i]); return o }

            function x(t, e, n) { for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]); return o }

            function D(t, e, n) { if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint"); if (t + e > n) throw new RangeError("Trying to access beyond buffer length") }

            function I(t, e, n, r, o, i) { if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (e > o || e < i) throw new RangeError('"value" argument is out of bounds'); if (n + r > t.length) throw new RangeError("Index out of range") }

            function P(t, e, n, r) { e < 0 && (e = 65535 + e + 1); for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o) }

            function R(t, e, n, r) { e < 0 && (e = 4294967295 + e + 1); for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255 }

            function L(t, e, n, r, o, i) { if (n + r > t.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

            function N(t, e, n, r, i) { return i || L(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4 }

            function U(t, e, n, r, i) { return i || L(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8 }
            u.prototype.slice = function(t, e) { var n, r = this.length; if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = u.prototype;
                else { var o = e - t;
                    n = new u(o, void 0); for (var i = 0; i < o; ++i) n[i] = this[i + t] } return n }, u.prototype.readUIntLE = function(t, e, n) { t |= 0, e |= 0, n || D(t, e, this.length); for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o; return r }, u.prototype.readUIntBE = function(t, e, n) { t |= 0, e |= 0, n || D(t, e, this.length); for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) r += this[t + --e] * o; return r }, u.prototype.readUInt8 = function(t, e) { return e || D(t, 1, this.length), this[t] }, u.prototype.readUInt16LE = function(t, e) { return e || D(t, 2, this.length), this[t] | this[t + 1] << 8 }, u.prototype.readUInt16BE = function(t, e) { return e || D(t, 2, this.length), this[t] << 8 | this[t + 1] }, u.prototype.readUInt32LE = function(t, e) { return e || D(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3] }, u.prototype.readUInt32BE = function(t, e) { return e || D(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]) }, u.prototype.readIntLE = function(t, e, n) { t |= 0, e |= 0, n || D(t, e, this.length); for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o; return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r }, u.prototype.readIntBE = function(t, e, n) { t |= 0, e |= 0, n || D(t, e, this.length); for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);) i += this[t + --r] * o; return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i }, u.prototype.readInt8 = function(t, e) { return e || D(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t] }, u.prototype.readInt16LE = function(t, e) { e || D(t, 2, this.length); var n = this[t] | this[t + 1] << 8; return 32768 & n ? 4294901760 | n : n }, u.prototype.readInt16BE = function(t, e) { e || D(t, 2, this.length); var n = this[t + 1] | this[t] << 8; return 32768 & n ? 4294901760 | n : n }, u.prototype.readInt32LE = function(t, e) { return e || D(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24 }, u.prototype.readInt32BE = function(t, e) { return e || D(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3] }, u.prototype.readFloatLE = function(t, e) { return e || D(t, 4, this.length), o.read(this, t, !0, 23, 4) }, u.prototype.readFloatBE = function(t, e) { return e || D(t, 4, this.length), o.read(this, t, !1, 23, 4) }, u.prototype.readDoubleLE = function(t, e) { return e || D(t, 8, this.length), o.read(this, t, !0, 52, 8) }, u.prototype.readDoubleBE = function(t, e) { return e || D(t, 8, this.length), o.read(this, t, !1, 52, 8) }, u.prototype.writeUIntLE = function(t, e, n, r) {
                (t = +t, e |= 0, n |= 0, r) || I(this, t, e, n, Math.pow(2, 8 * n) - 1, 0); var o = 1,
                    i = 0; for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255; return e + n }, u.prototype.writeUIntBE = function(t, e, n, r) {
                (t = +t, e |= 0, n |= 0, r) || I(this, t, e, n, Math.pow(2, 8 * n) - 1, 0); var o = n - 1,
                    i = 1; for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255; return e + n }, u.prototype.writeUInt8 = function(t, e, n) { return t = +t, e |= 0, n || I(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1 }, u.prototype.writeUInt16LE = function(t, e, n) { return t = +t, e |= 0, n || I(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : P(this, t, e, !0), e + 2 }, u.prototype.writeUInt16BE = function(t, e, n) { return t = +t, e |= 0, n || I(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : P(this, t, e, !1), e + 2 }, u.prototype.writeUInt32LE = function(t, e, n) { return t = +t, e |= 0, n || I(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : R(this, t, e, !0), e + 4 }, u.prototype.writeUInt32BE = function(t, e, n) { return t = +t, e |= 0, n || I(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : R(this, t, e, !1), e + 4 }, u.prototype.writeIntLE = function(t, e, n, r) { if (t = +t, e |= 0, !r) { var o = Math.pow(2, 8 * n - 1);
                    I(this, t, e, n, o - 1, -o) } var i = 0,
                    s = 1,
                    a = 0; for (this[e] = 255 & t; ++i < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255; return e + n }, u.prototype.writeIntBE = function(t, e, n, r) { if (t = +t, e |= 0, !r) { var o = Math.pow(2, 8 * n - 1);
                    I(this, t, e, n, o - 1, -o) } var i = n - 1,
                    s = 1,
                    a = 0; for (this[e + i] = 255 & t; --i >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255; return e + n }, u.prototype.writeInt8 = function(t, e, n) { return t = +t, e |= 0, n || I(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1 }, u.prototype.writeInt16LE = function(t, e, n) { return t = +t, e |= 0, n || I(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : P(this, t, e, !0), e + 2 }, u.prototype.writeInt16BE = function(t, e, n) { return t = +t, e |= 0, n || I(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : P(this, t, e, !1), e + 2 }, u.prototype.writeInt32LE = function(t, e, n) { return t = +t, e |= 0, n || I(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : R(this, t, e, !0), e + 4 }, u.prototype.writeInt32BE = function(t, e, n) { return t = +t, e |= 0, n || I(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : R(this, t, e, !1), e + 4 }, u.prototype.writeFloatLE = function(t, e, n) { return N(this, t, e, !0, n) }, u.prototype.writeFloatBE = function(t, e, n) { return N(this, t, e, !1, n) }, u.prototype.writeDoubleLE = function(t, e, n) { return U(this, t, e, !0, n) }, u.prototype.writeDoubleBE = function(t, e, n) { return U(this, t, e, !1, n) }, u.prototype.copy = function(t, e, n, r) { if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0; if (0 === t.length || 0 === this.length) return 0; if (e < 0) throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds"); if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n); var o, i = r - n; if (this === t && n < e && e < r)
                    for (o = i - 1; o >= 0; --o) t[o + e] = this[o + n];
                else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                    for (o = 0; o < i; ++o) t[o + e] = this[o + n];
                else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e); return i }, u.prototype.fill = function(t, e, n, r) { if ("string" == typeof t) { if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) { var o = t.charCodeAt(0);
                        o < 256 && (t = o) } if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string"); if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r) } else "number" == typeof t && (t &= 255); if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index"); if (n <= e) return this; var i; if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                    for (i = e; i < n; ++i) this[i] = t;
                else { var s = u.isBuffer(t) ? t : H(new u(t, r).toString()),
                        a = s.length; for (i = 0; i < n - e; ++i) this[i + e] = s[i % a] } return this };
            var j = /[^+\/0-9A-Za-z-_]/g;

            function M(t) { return t < 16 ? "0" + t.toString(16) : t.toString(16) }

            function H(t, e) { var n;
                e = e || 1 / 0; for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) { if ((n = t.charCodeAt(s)) > 55295 && n < 57344) { if (!o) { if (n > 56319) {
                                (e -= 3) > -1 && i.push(239, 191, 189); continue } if (s + 1 === r) {
                                (e -= 3) > -1 && i.push(239, 191, 189); continue }
                            o = n; continue } if (n < 56320) {
                            (e -= 3) > -1 && i.push(239, 191, 189), o = n; continue }
                        n = 65536 + (o - 55296 << 10 | n - 56320) } else o && (e -= 3) > -1 && i.push(239, 191, 189); if (o = null, n < 128) { if ((e -= 1) < 0) break;
                        i.push(n) } else if (n < 2048) { if ((e -= 2) < 0) break;
                        i.push(n >> 6 | 192, 63 & n | 128) } else if (n < 65536) { if ((e -= 3) < 0) break;
                        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128) } else { if (!(n < 1114112)) throw new Error("Invalid code point"); if ((e -= 4) < 0) break;
                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128) } } return i }

            function Y(t) { return r.toByteArray(function(t) { if ((t = function(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }(t).replace(j, "")).length < 2) return ""; for (; t.length % 4 != 0;) t += "="; return t }(t)) }

            function G(t, e, n, r) { for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o]; return o }
        }).call(this, n(0))
    }, function(t, e) { var n = Object.prototype.toString;

        function r(t) { return "function" == typeof t.constructor ? t.constructor.name : null }
        t.exports = function(t) { if (void 0 === t) return "undefined"; if (null === t) return "null"; var e = typeof t; if ("boolean" === e) return "boolean"; if ("string" === e) return "string"; if ("number" === e) return "number"; if ("symbol" === e) return "symbol"; if ("function" === e) return "GeneratorFunction" === r(t) ? "generatorfunction" : "function"; if (function(t) { return Array.isArray ? Array.isArray(t) : t instanceof Array }(t)) return "array"; if (function(t) { if (t.constructor && "function" == typeof t.constructor.isBuffer) return t.constructor.isBuffer(t); return !1 }(t)) return "buffer"; if (function(t) { try { if ("number" == typeof t.length && "function" == typeof t.callee) return !0 } catch (t) { if (-1 !== t.message.indexOf("callee")) return !0 } return !1 }(t)) return "arguments"; if (function(t) { return t instanceof Date || "function" == typeof t.toDateString && "function" == typeof t.getDate && "function" == typeof t.setDate }(t)) return "date"; if (function(t) { return t instanceof Error || "string" == typeof t.message && t.constructor && "number" == typeof t.constructor.stackTraceLimit }(t)) return "error"; if (function(t) { return t instanceof RegExp || "string" == typeof t.flags && "boolean" == typeof t.ignoreCase && "boolean" == typeof t.multiline && "boolean" == typeof t.global }(t)) return "regexp"; switch (r(t)) {
                case "Symbol":
                    return "symbol";
                case "Promise":
                    return "promise";
                case "WeakMap":
                    return "weakmap";
                case "WeakSet":
                    return "weakset";
                case "Map":
                    return "map";
                case "Set":
                    return "set";
                case "Int8Array":
                    return "int8array";
                case "Uint8Array":
                    return "uint8array";
                case "Uint8ClampedArray":
                    return "uint8clampedarray";
                case "Int16Array":
                    return "int16array";
                case "Uint16Array":
                    return "uint16array";
                case "Int32Array":
                    return "int32array";
                case "Uint32Array":
                    return "uint32array";
                case "Float32Array":
                    return "float32array";
                case "Float64Array":
                    return "float64array" } if (function(t) { return "function" == typeof t.throw && "function" == typeof t.return && "function" == typeof t.next }(t)) return "generator"; switch (e = n.call(t)) {
                case "[object Object]":
                    return "object";
                case "[object Map Iterator]":
                    return "mapiterator";
                case "[object Set Iterator]":
                    return "setiterator";
                case "[object String Iterator]":
                    return "stringiterator";
                case "[object Array Iterator]":
                    return "arrayiterator" } return e.slice(8, -1).toLowerCase().replace(/\s/g, "") } }, function(t, e) { var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto); if (n) { var r = new Uint8Array(16);
            t.exports = function() { return n(r), r } } else { var o = new Array(16);
            t.exports = function() { for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), o[e] = t >>> ((3 & e) << 3) & 255; return o } } }, function(t, e) { for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
        t.exports = function(t, e) { var r = e || 0,
                o = n; return [o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]]].join("") } }, function(t, e, n) {
        function r(t, e, n, r, o, i, s) { try { var a = t[i](s),
                    u = a.value } catch (t) { return void n(t) }
            a.done ? e(u) : Promise.resolve(u).then(r, o) }

        function o(t) { return function() { var e = this,
                    n = arguments; return new Promise((function(o, i) { var s = t.apply(e, n);

                    function a(t) { r(s, o, i, a, u, "next", t) }

                    function u(t) { r(s, o, i, a, u, "throw", t) }
                    a(void 0) })) } } var i = n(11),
            s = "socket.aasatech.asia";

        function a(t, e) { return u.apply(this, arguments) }

        function u() { return (u = o((function*(t, e) { var n = new Headers;
                n.append("Content-Type", "application/json"); var r = { method: "POST", headers: n, body: JSON.stringify(e) },
                    o = yield fetch(t, r); return yield o.json() }))).apply(this, arguments) } var c = "socketcluster.authToken",
            h = function() { var t = o((function*(t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = e ? "https" : "http",
                        r = "".concat(n, "://").concat(s, "/auth"),
                        o = yield a(r, { token: t }).catch(t => { throw t }); return o.jwt })); return function(e) { return t.apply(this, arguments) } }(),
            l = { secure: !0, authType: "ws", authEngine: null };
        t.exports = class { constructor(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
                this.apiKey = t, this.options = Object.assign({}, l, e) }
            connect() { var t = this; return o((function*() { if (!t.apiKey) throw new Error("missing apiKey"); try { var e = t.options.authEngine || localStorage; if (t.http && !(yield e.getItem(c))) { var n = yield h(t.apiKey, t.options.secure).catch(t => { throw t }); if (!n) return;
                            yield e.setItem(c, n) } var r = i.create({ hostname: s, port: t.port, secure: t.options.secure, rejectUnauthorized: !0, authEngine: t.options.authEngine }),
                            o = yield r.listener("connect").once(); if (t.http && !o.isAuthenticated) return yield e.removeItem(c), t.connect(); if (t.ws) try { yield Promise.all([r.invoke("login", { apiKey: t.apiKey }), r.listener("authenticate").once()]) } catch (t) { throw t }
                        return r } catch (t) { throw t } }))() }
            get http() { return "http" === this.options.authType }
            get ws() { return "ws" === this.options.authType }
            get port() { return this.options.secure ? 443 : 80 } } }, function(t, e, n) { const r = n(3),
            o = n(35);
        t.exports.factory = o, t.exports.AGClientSocket = r, t.exports.create = function(t) { return o.create({...t, version: "16.0.1" }) }, t.exports.version = "16.0.1" }, function(t, e, n) { const r = n(2),
            o = n(13);
        t.exports = class extends r { constructor() { super(), this.nextConsumerId = 1, this._consumers = {}, this._tailNode = { next: null, data: { value: void 0, done: !1 } } }
            _write(t, e, n) { let r = { data: { value: t, done: e }, next: null };
                n && (r.consumerId = n), this._tailNode.next = r, this._tailNode = r; let o = Object.values(this._consumers),
                    i = o.length; for (let t = 0; t < i; t++) { o[t].write(r.data) } }
            write(t) { this._write(t, !1) }
            close(t) { this._write(t, !0) }
            writeToConsumer(t, e) { this._write(e, !1, t) }
            closeConsumer(t, e) { this._write(e, !0, t) }
            kill(t) { let e = Object.keys(this._consumers),
                    n = e.length; for (let r = 0; r < n; r++) this.killConsumer(e[r], t) }
            killConsumer(t, e) { let n = this._consumers[t];
                n && n.kill(e) }
            getBackpressure() { let t = Object.values(this._consumers),
                    e = t.length,
                    n = 0; for (let r = 0; r < e; r++) { let e = t[r].getBackpressure();
                    e > n && (n = e) } return n }
            getConsumerBackpressure(t) { let e = this._consumers[t]; return e ? e.getBackpressure() : 0 }
            hasConsumer(t) { return !!this._consumers[t] }
            setConsumer(t, e) { this._consumers[t] = e, e.currentNode || (e.currentNode = this._tailNode) }
            removeConsumer(t) { delete this._consumers[t] }
            getConsumerStats(t) { let e = this._consumers[t]; if (e) return e.getStats() }
            getConsumerStatsList() { let t = [],
                    e = Object.values(this._consumers),
                    n = e.length; for (let r = 0; r < n; r++) { let n = e[r];
                    t.push(n.getStats()) } return t }
            createConsumer(t) { return new o(this, this.nextConsumerId++, this._tailNode, t) } } }, function(t, e) { class n { constructor(t, e, n, r) { this.id = e, this._backpressure = 0, this.stream = t, this.currentNode = n, this.timeout = r, this.isAlive = !0, this.stream.setConsumer(this.id, this) }
            getStats() { let t = { id: this.id, backpressure: this._backpressure }; return null != this.timeout && (t.timeout = this.timeout), t }
            _resetBackpressure() { this._backpressure = 0 }
            applyBackpressure(t) { this._backpressure++ }
            releaseBackpressure(t) { this._backpressure-- }
            getBackpressure() { return this._backpressure }
            write(t) { void 0 !== this._timeoutId && (clearTimeout(this._timeoutId), delete this._timeoutId), this.applyBackpressure(t), this._resolve && (this._resolve(), delete this._resolve) }
            kill(t) { void 0 !== this._timeoutId && (clearTimeout(this._timeoutId), delete this._timeoutId), this._killPacket = { value: t, done: !0 }, this._destroy(), this._resolve && (this._resolve(), delete this._resolve) }
            _destroy() { this.isAlive = !1, this._resetBackpressure(), this.stream.removeConsumer(this.id) }
            async _waitForNextItem(t) { return new Promise((e, n) => { let r; if (this._resolve = e, void 0 !== t) { let e = new Error("Stream consumer iteration timed out");
                        (async() => { let o = function(t) { let e, n = new Promise(n => { e = setTimeout(n, t) }); return { timeoutId: e, promise: n } }(t);
                            r = o.timeoutId, await o.promise, e.name = "TimeoutError", delete this._resolve, n(e) })() }
                    this._timeoutId = r }) }
            async next() { for (this.stream.setConsumer(this.id, this);;) { if (!this.currentNode.next) try { await this._waitForNextItem(this.timeout) } catch (t) { throw this._destroy(), t }
                    if (this._killPacket) { this._destroy(); let t = this._killPacket; return delete this._killPacket, t } if (this.currentNode = this.currentNode.next, this.releaseBackpressure(this.currentNode.data), !this.currentNode.consumerId || this.currentNode.consumerId === this.id) return this.currentNode.data.done && this._destroy(), this.currentNode.data } }
            return () { return delete this.currentNode, this._destroy(), {} }[Symbol.asyncIterator]() { return this } }
        t.exports = n }, function(t, e, n) { const r = n(2);
        t.exports = class extends r { constructor(t, e) { super(), this.name = e, this._streamDemux = t }
            createConsumer(t) { return this._streamDemux.createConsumer(this.name, t) } } }, function(t, e, n) { const r = n(4);

        function o() { this._listenerDemux = new r }
        o.prototype.emit = function(t, e) { this._listenerDemux.write(t, e) }, o.prototype.listener = function(t) { return this._listenerDemux.stream(t) }, o.prototype.closeListener = function(t) { this._listenerDemux.close(t) }, o.prototype.closeAllListeners = function() { this._listenerDemux.closeAll() }, o.prototype.getListenerConsumerStats = function(t) { return this._listenerDemux.getConsumerStats(t) }, o.prototype.getListenerConsumerStatsList = function(t) { return this._listenerDemux.getConsumerStatsList(t) }, o.prototype.getAllListenersConsumerStatsList = function() { return this._listenerDemux.getConsumerStatsListAll() }, o.prototype.killListener = function(t) { this._listenerDemux.kill(t) }, o.prototype.killAllListeners = function() { this._listenerDemux.killAll() }, o.prototype.killListenerConsumer = function(t) { this._listenerDemux.killConsumer(t) }, o.prototype.getListenerBackpressure = function(t) { return this._listenerDemux.getBackpressure(t) }, o.prototype.getAllListenersBackpressure = function() { return this._listenerDemux.getBackpressureAll() }, o.prototype.getListenerConsumerBackpressure = function(t) { return this._listenerDemux.getConsumerBackpressure(t) }, o.prototype.hasListenerConsumer = function(t, e) { return this._listenerDemux.hasConsumer(t, e) }, o.prototype.hasAnyListenerConsumer = function(t) { return this._listenerDemux.hasConsumerAll(t) }, t.exports = o }, function(t, e, n) { const r = n(2);
        class o extends r { constructor(t, e, n, r) { super(), this.PENDING = o.PENDING, this.SUBSCRIBED = o.SUBSCRIBED, this.UNSUBSCRIBED = o.UNSUBSCRIBED, this.name = t, this.client = e, this._eventDemux = n, this._dataStream = r.stream(this.name) }
            createConsumer(t) { return this._dataStream.createConsumer(t) }
            listener(t) { return this._eventDemux.stream(`${this.name}/${t}`) }
            close() { this.client.closeChannel(this.name) }
            kill() { this.client.killChannel(this.name) }
            killOutputConsumer(t) { this.hasOutputConsumer(t) && this.client.killChannelOutputConsumer(t) }
            killListenerConsumer(t) { this.hasAnyListenerConsumer(t) && this.client.killChannelListenerConsumer(t) }
            getOutputConsumerStats(t) { if (this.hasOutputConsumer(t)) return this.client.getChannelOutputConsumerStats(t) }
            getListenerConsumerStats(t) { if (this.hasAnyListenerConsumer(t)) return this.client.getChannelListenerConsumerStats(t) }
            getBackpressure() { return this.client.getChannelBackpressure(this.name) }
            getListenerConsumerBackpressure(t) { return this.hasAnyListenerConsumer(t) ? this.client.getChannelListenerConsumerBackpressure(t) : 0 }
            getOutputConsumerBackpressure(t) { return this.hasOutputConsumer(t) ? this.client.getChannelOutputConsumerBackpressure(t) : 0 }
            closeOutput() { this.client.channelCloseOutput(this.name) }
            closeListener(t) { this.client.channelCloseListener(this.name, t) }
            closeAllListeners() { this.client.channelCloseAllListeners(this.name) }
            killOutput() { this.client.channelKillOutput(this.name) }
            killListener(t) { this.client.channelKillListener(this.name, t) }
            killAllListeners() { this.client.channelKillAllListeners(this.name) }
            getOutputConsumerStatsList() { return this.client.channelGetOutputConsumerStatsList(this.name) }
            getListenerConsumerStatsList(t) { return this.client.channelGetListenerConsumerStatsList(this.name, t) }
            getAllListenersConsumerStatsList() { return this.client.channelGetAllListenersConsumerStatsList(this.name) }
            getOutputBackpressure() { return this.client.channelGetOutputBackpressure(this.name) }
            getListenerBackpressure(t) { return this.client.channelGetListenerBackpressure(this.name, t) }
            getAllListenersBackpressure() { return this.client.channelGetAllListenersBackpressure(this.name) }
            hasOutputConsumer(t) { return this.client.channelHasOutputConsumer(this.name, t) }
            hasListenerConsumer(t, e) { return this.client.channelHasListenerConsumer(this.name, t, e) }
            hasAnyListenerConsumer(t) { return this.client.channelHasAnyListenerConsumer(this.name, t) }
            get state() { return this.client.getChannelState(this.name) }
            set state(t) { throw new Error("Cannot directly set channel state") }
            get options() { return this.client.getChannelOptions(this.name) }
            set options(t) { throw new Error("Cannot directly set channel options") }
            subscribe(t) { this.client.subscribe(this.name, t) }
            unsubscribe() { this.client.unsubscribe(this.name) }
            isSubscribed(t) { return this.client.isSubscribed(this.name, t) }
            transmitPublish(t) { return this.client.transmitPublish(this.name, t) }
            invokePublish(t) { return this.client.invokePublish(this.name, t) } }
        o.PENDING = "pending", o.SUBSCRIBED = "subscribed", o.UNSUBSCRIBED = "unsubscribed", t.exports = o }, function(t, e, n) {
        (function(e) {
            function n() { this._internalStorage = {}, this.isLocalStorageEnabled = this._checkLocalStorageEnabled() }
            n.prototype._checkLocalStorageEnabled = function() { let t; try { e.localStorage, e.localStorage.setItem("__scLocalStorageTest", 1), e.localStorage.removeItem("__scLocalStorageTest") } catch (e) { t = e } return !t }, n.prototype.saveToken = function(t, n, r) { return this.isLocalStorageEnabled && e.localStorage ? e.localStorage.setItem(t, n) : this._internalStorage[t] = n, Promise.resolve(n) }, n.prototype.removeToken = function(t) { let n = this.loadToken(t); return this.isLocalStorageEnabled && e.localStorage ? e.localStorage.removeItem(t) : delete this._internalStorage[t], n }, n.prototype.loadToken = function(t) { let n; return n = this.isLocalStorageEnabled && e.localStorage ? e.localStorage.getItem(t) : this._internalStorage[t] || null, Promise.resolve(n) }, t.exports = n }).call(this, n(0)) }, function(t, e, n) {
        (function(e) { var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                r = /^[ \n\r\t]*[{\[]/,
                o = function(t) { for (var e = new Uint8Array(t), r = e.length, o = "", i = 0; i < r; i += 3) o += n[e[i] >> 2], o += n[(3 & e[i]) << 4 | e[i + 1] >> 4], o += n[(15 & e[i + 1]) << 2 | e[i + 2] >> 6], o += n[63 & e[i + 2]]; return r % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o },
                i = function(t, n) { if (e.ArrayBuffer && n instanceof e.ArrayBuffer) return { base64: !0, data: o(n) }; if (e.Buffer) { if (n instanceof e.Buffer) return { base64: !0, data: n.toString("base64") }; if (n && "Buffer" === n.type && Array.isArray(n.data)) return { base64: !0, data: (e.Buffer.from ? e.Buffer.from(n.data) : new e.Buffer(n.data)).toString("base64") } } return n };
            t.exports.decode = function(t) { if (null == t) return null; if ("#1" === t || "#2" === t) return t; var e = t.toString(); if (!r.test(e)) return e; try { return JSON.parse(e) } catch (t) {} return e }, t.exports.encode = function(t) { return "#1" === t || "#2" === t ? t : JSON.stringify(t, i) } }).call(this, n(0)) }, function(t, e, n) {
        (function(e) { const r = n(20),
                o = n(5); let i, s;
            e.WebSocket ? (i = e.WebSocket, s = function(t, e) { return new i(t) }) : (i = n(24), s = function(t, e) { return new i(t, null, e) }); const a = n(1),
                u = a.TimeoutError,
                c = a.BadConnectionError;

            function h(t, e, n, r, o) { this.state = this.CLOSED, this.auth = t, this.codec = e, this.options = n, this.wsOptions = r, this.protocolVersion = n.protocolVersion, this.connectTimeout = n.connectTimeout, this.pingTimeout = n.pingTimeout, this.pingTimeoutDisabled = !!n.pingTimeoutDisabled, this.callIdGenerator = n.callIdGenerator, this.authTokenName = n.authTokenName, this.isBufferingBatch = !1, this._pingTimeoutTicker = null, this._callbackMap = {}, this._batchBuffer = [], o || (o = {}), this._onOpenHandler = o.onOpen || function() {}, this._onOpenAbortHandler = o.onOpenAbort || function() {}, this._onCloseHandler = o.onClose || function() {}, this._onEventHandler = o.onEvent || function() {}, this._onErrorHandler = o.onError || function() {}, this._onInboundInvokeHandler = o.onInboundInvoke || function() {}, this._onInboundTransmitHandler = o.onInboundTransmit || function() {}, this.state = this.CONNECTING; let i = this.uri(),
                    a = s(i, r);
                a.binaryType = this.options.binaryType, this.socket = a, a.onopen = () => { this._onOpen() }, a.onclose = async t => { let e;
                    e = null == t.code ? 1005 : t.code, this._destroy(e, t.reason) }, a.onmessage = (t, e) => { this._onMessage(t.data) }, a.onerror = t => { this.state === this.CONNECTING && this._destroy(1006) }, this._connectTimeoutRef = setTimeout(() => { this._destroy(4007), this.socket.close(4007) }, this.connectTimeout), 1 === this.protocolVersion ? this._handlePing = t => "#1" === t && (this._resetPingTimeout(), this.socket.readyState === this.socket.OPEN && this.send("#2"), !0) : this._handlePing = t => "" === t && (this._resetPingTimeout(), this.socket.readyState === this.socket.OPEN && this.send(""), !0) }
            h.CONNECTING = h.prototype.CONNECTING = "connecting", h.OPEN = h.prototype.OPEN = "open", h.CLOSED = h.prototype.CLOSED = "closed", h.prototype.uri = function() { let t, e, n, r = this.options.query || {}; if (t = null == this.options.protocolScheme ? this.options.secure ? "wss" : "ws" : this.options.protocolScheme, this.options.timestampRequests && (r[this.options.timestampParam] = (new Date).getTime()), r = o.encode(r), r.length && (r = "?" + r), null == this.options.socketPath) { if (this.options.host) e = this.options.host;
                    else { let n = "";
                        this.options.port && ("wss" === t && 443 !== this.options.port || "ws" === t && 80 !== this.options.port) && (n = ":" + this.options.port), e = this.options.hostname + n }
                    n = this.options.path } else e = this.options.socketPath, n = ":" + this.options.path; return t + "://" + e + n + r }, h.prototype._onOpen = async function() { let t;
                clearTimeout(this._connectTimeoutRef), this._resetPingTimeout(); try { t = await this._handshake() } catch (t) { return null == t.statusCode && (t.statusCode = 4003), this._onError(t), this._destroy(t.statusCode, t.toString()), void this.socket.close(t.statusCode) }
                this.state = this.OPEN, t && (this.pingTimeout = t.pingTimeout), this._resetPingTimeout(), this._onOpenHandler(t) }, h.prototype._handshake = async function() { let t = await this.auth.loadToken(this.authTokenName),
                    e = await this.invoke("#handshake", { authToken: t }, { force: !0 }); return e && (e.authToken = t, e.authError && (e.authError = a.hydrateError(e.authError))), e }, h.prototype._abortAllPendingEventsDueToBadConnection = function(t) { Object.keys(this._callbackMap || {}).forEach(e => { let n = this._callbackMap[e];
                    delete this._callbackMap[e], clearTimeout(n.timeout), delete n.timeout; let r = `Event "${n.event}" was aborted due to a bad connection`,
                        o = new c(r, t),
                        i = n.callback;
                    delete n.callback, i.call(n, o, n) }) }, h.prototype._destroy = function(t, e) { a.socketProtocolErrorStatuses[t];!e && a.socketProtocolErrorStatuses[t] && (e = a.socketProtocolErrorStatuses[t]), delete this.socket.onopen, delete this.socket.onclose, delete this.socket.onmessage, delete this.socket.onerror, clearTimeout(this._connectTimeoutRef), clearTimeout(this._pingTimeoutTicker), this.state === this.OPEN ? (this.state = this.CLOSED, this._abortAllPendingEventsDueToBadConnection("disconnect"), this._onCloseHandler({ code: t, reason: e })) : this.state === this.CONNECTING ? (this.state = this.CLOSED, this._abortAllPendingEventsDueToBadConnection("connectAbort"), this._onOpenAbortHandler({ code: t, reason: e })) : this.state === this.CLOSED && this._abortAllPendingEventsDueToBadConnection("connectAbort") }, h.prototype._processInboundPacket = function(t, e) { if (t && null != t.event)
                    if (null == t.cid) this._onInboundTransmitHandler({...t });
                    else { let e = new r(this, t.cid, t.event, t.data);
                        this._onInboundInvokeHandler(e) }
                else if (t && null != t.rid) { let e = this._callbackMap[t.rid]; if (e && (clearTimeout(e.timeout), delete e.timeout, delete this._callbackMap[t.rid], e.callback)) { let n = a.hydrateError(t.error);
                        e.callback(n, t.data) } } else this._onEventHandler({ event: "raw", data: { message: e } }) }, h.prototype._onMessage = function(t) { if (this._onEventHandler({ event: "message", data: { message: t } }), this._handlePing(t)) return; let e = this.decode(t); if (Array.isArray(e)) { let n = e.length; for (let r = 0; r < n; r++) this._processInboundPacket(e[r], t) } else this._processInboundPacket(e, t) }, h.prototype._onError = function(t) { this._onErrorHandler({ error: t }) }, h.prototype._resetPingTimeout = function() { if (this.pingTimeoutDisabled) return;
                (new Date).getTime();
                clearTimeout(this._pingTimeoutTicker), this._pingTimeoutTicker = setTimeout(() => { this._destroy(4e3), this.socket.close(4e3) }, this.pingTimeout) }, h.prototype.clearAllListeners = function() { this._onOpenHandler = function() {}, this._onOpenAbortHandler = function() {}, this._onCloseHandler = function() {}, this._onEventHandler = function() {}, this._onErrorHandler = function() {}, this._onInboundInvokeHandler = function() {}, this._onInboundTransmitHandler = function() {} }, h.prototype.startBatch = function() { this.isBufferingBatch = !0, this._batchBuffer = [] }, h.prototype.flushBatch = function() { if (this.isBufferingBatch = !1, !this._batchBuffer.length) return; let t = this.serializeObject(this._batchBuffer);
                this._batchBuffer = [], this.send(t) }, h.prototype.cancelBatch = function() { this.isBufferingBatch = !1, this._batchBuffer = [] }, h.prototype.getBytesReceived = function() { return this.socket.bytesReceived }, h.prototype.close = function(t, e) { this.state !== this.OPEN && this.state !== this.CONNECTING || (t = t || 1e3, this._destroy(t, e), this.socket.close(t, e)) }, h.prototype.transmitObject = function(t) { let e = { event: t.event, data: t.data }; return t.callback && (e.cid = t.cid = this.callIdGenerator(), this._callbackMap[t.cid] = t), this.sendObject(e), t.cid || null }, h.prototype._handleEventAckTimeout = function(t) { t.cid && delete this._callbackMap[t.cid], delete t.timeout; let e = t.callback; if (e) { delete t.callback; let n = new u(`Event response for "${t.event}" timed out`);
                    e.call(t, n, t) } }, h.prototype.transmit = function(t, e, n) { let r = { event: t, data: e }; return (this.state === this.OPEN || n.force) && this.transmitObject(r), Promise.resolve() }, h.prototype.invokeRaw = function(t, e, n, r) { let o = { event: t, data: e, callback: r };
                n.noTimeout || (o.timeout = setTimeout(() => { this._handleEventAckTimeout(o) }, this.options.ackTimeout)); let i = null; return (this.state === this.OPEN || n.force) && (i = this.transmitObject(o)), i }, h.prototype.invoke = function(t, e, n) { return new Promise((r, o) => { this.invokeRaw(t, e, n, (t, e) => { t ? o(t) : r(e) }) }) }, h.prototype.cancelPendingResponse = function(t) { delete this._callbackMap[t] }, h.prototype.decode = function(t) { return this.codec.decode(t) }, h.prototype.encode = function(t) { return this.codec.encode(t) }, h.prototype.send = function(t) { this.socket.readyState !== this.socket.OPEN ? this._destroy(1005) : this.socket.send(t) }, h.prototype.serializeObject = function(t) { let e; try { e = this.encode(t) } catch (t) { return this._onError(t), null } return e }, h.prototype.sendObject = function(t) { if (this.isBufferingBatch) return void this._batchBuffer.push(t); let e = this.serializeObject(t);
                null != e && this.send(e) }, t.exports = h }).call(this, n(0)) }, function(t, e, n) { const r = n(1),
            o = r.InvalidActionError;
        t.exports = function(t, e, n, i) { this.socket = t, this.id = e, this.procedure = n, this.data = i, this.sent = !1, this._respond = (t, e) => { if (this.sent) throw new o(`Response to request ${this.id} has already been sent`);
                this.sent = !0, this.socket.sendObject(t, e) }, this.end = (t, e) => { let n = { rid: this.id };
                void 0 !== t && (n.data = t), this._respond(n, e) }, this.error = (t, e) => { let n = { rid: this.id, error: r.dehydrateError(t) };
                this._respond(n, e) } } }, function(t, e) { t.exports = function(t) { var e = [],
                n = []; return function t(r, o) { var i, s, a; if (!("object" != typeof r || null === r || r instanceof Boolean || r instanceof Date || r instanceof Number || r instanceof RegExp || r instanceof String)) { for (i = 0; i < e.length; i += 1)
                        if (e[i] === r) return { $ref: n[i] };
                    if (e.push(r), n.push(o), "[object Array]" === Object.prototype.toString.apply(r))
                        for (a = [], i = 0; i < r.length; i += 1) a[i] = t(r[i], o + "[" + i + "]");
                    else
                        for (s in a = {}, r) Object.prototype.hasOwnProperty.call(r, s) && (a[s] = t(r[s], o + "[" + JSON.stringify(s) + "]")); return a } return r }(t, "$") } }, function(t, e, n) { "use strict";

        function r(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }
        t.exports = function(t, e, n, i) { e = e || "&", n = n || "="; var s = {}; if ("string" != typeof t || 0 === t.length) return s; var a = /\+/g;
            t = t.split(e); var u = 1e3;
            i && "number" == typeof i.maxKeys && (u = i.maxKeys); var c = t.length;
            u > 0 && c > u && (c = u); for (var h = 0; h < c; ++h) { var l, p, f, d, m = t[h].replace(a, "%20"),
                    y = m.indexOf(n);
                y >= 0 ? (l = m.substr(0, y), p = m.substr(y + 1)) : (l = m, p = ""), f = decodeURIComponent(l), d = decodeURIComponent(p), r(s, f) ? o(s[f]) ? s[f].push(d) : s[f] = [s[f], d] : s[f] = d } return s }; var o = Array.isArray || function(t) { return "[object Array]" === Object.prototype.toString.call(t) } }, function(t, e, n) { "use strict"; var r = function(t) { switch (typeof t) {
                case "string":
                    return t;
                case "boolean":
                    return t ? "true" : "false";
                case "number":
                    return isFinite(t) ? t : "";
                default:
                    return "" } };
        t.exports = function(t, e, n, a) { return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? i(s(t), (function(s) { var a = encodeURIComponent(r(s)) + n; return o(t[s]) ? i(t[s], (function(t) { return a + encodeURIComponent(r(t)) })).join(e) : a + encodeURIComponent(r(t[s])) })).join(e) : a ? encodeURIComponent(r(a)) + n + encodeURIComponent(r(t)) : "" }; var o = Array.isArray || function(t) { return "[object Array]" === Object.prototype.toString.call(t) };

        function i(t, e) { if (t.map) return t.map(e); for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r)); return n } var s = Object.keys || function(t) { var e = []; for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n); return e } }, function(t, e) { let n;
        n = "undefined" != typeof WorkerGlobalScope ? self : "undefined" != typeof window && window || function() { return this }(); const r = n.WebSocket || n.MozWebSocket;

        function o(t, e, n) { let o; return o = e ? new r(t, e) : new r(t), o }
        r && (o.prototype = r.prototype), t.exports = r ? o : null }, function(t, e, n) { "use strict";
        t.exports = n(26) }, function(t, e, n) { "use strict"; var r, o;

        function i() { if (arguments.length) return i.from(arguments) }

        function s() {}
        r = "An argument without append, prepend, or detach methods was given to `List", o = i.prototype, i.of = function() { return i.from.call(this, arguments) }, i.from = function(t) { var e, n, r, o = new this; if (t && (e = t.length))
                for (n = -1; ++n < e;) null != (r = t[n]) && o.append(r); return o }, o.head = null, o.tail = null, o.toArray = function() { for (var t = this.head, e = []; t;) e.push(t), t = t.next; return e }, o.prepend = function(t) { if (!t) return !1; if (!t.append || !t.prepend || !t.detach) throw new Error(r + "#prepend`."); var e; return this, (e = this.head) ? e.prepend(t) : (t.detach(), t.list = this, this.head = t, t) }, o.append = function(t) { if (!t) return !1; if (!t.append || !t.prepend || !t.detach) throw new Error(r + "#append`."); var e, n; return this, (n = this.tail) ? n.append(t) : (e = this.head) ? e.append(t) : (t.detach(), t.list = this, this.head = t, t) }, i.Item = s; var a = s.prototype;
        a.next = null, a.prev = null, a.list = null, a.detach = function() { var t = this.list,
                e = this.prev,
                n = this.next; return t ? (t.tail === this && (t.tail = e), t.head === this && (t.head = n), t.tail === t.head && (t.tail = null), e && (e.next = n), n && (n.prev = e), this.prev = this.next = this.list = null, this) : this }, a.prepend = function(t) { if (!(t && t.append && t.prepend && t.detach)) throw new Error(r + "Item#prepend`."); var e = this.list,
                n = this.prev; return !!e && (t.detach(), n && (t.prev = n, n.next = t), t.next = this, t.list = e, this.prev = t, this === e.head && (e.head = t), e.tail || (e.tail = this), t) }, a.append = function(t) { if (!(t && t.append && t.prepend && t.detach)) throw new Error(r + "Item#append`."); var e = this.list,
                n = this.next; return !!e && (t.detach(), n && (t.next = n, n.prev = t), t.prev = this, t.list = e, this.next = t, this !== e.tail && e.tail || (e.tail = t), t) }, t.exports = i }, function(t, e, n) { "use strict"; const r = n(28),
            o = n(7),
            i = n(32);

        function s(t, e) { switch (o(t)) {
                case "object":
                    return function(t, e) { if ("function" == typeof e) return e(t); if (e || i(t)) { const n = new t.constructor; for (let r in t) n[r] = s(t[r], e); return n } return t }(t, e);
                case "array":
                    return function(t, e) { const n = new t.constructor(t.length); for (let r = 0; r < t.length; r++) n[r] = s(t[r], e); return n }(t, e);
                default:
                    return r(t) } }
        t.exports = s }, function(t, e, n) {
        "use strict";
        (function(e) {
            /*!
             * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
             *
             * Copyright (c) 2015-present, Jon Schlinkert.
             * Released under the MIT License.
             */
            const r = Symbol.prototype.valueOf,
                o = n(7);
            t.exports = function(t, n) { switch (o(t)) {
                    case "array":
                        return t.slice();
                    case "object":
                        return Object.assign({}, t);
                    case "date":
                        return new t.constructor(Number(t));
                    case "map":
                        return new Map(t);
                    case "set":
                        return new Set(t);
                    case "buffer":
                        return function(t) { const n = t.length,
                                r = e.allocUnsafe ? e.allocUnsafe(n) : e.from(n); return t.copy(r), r }(t);
                    case "symbol":
                        return function(t) { return r ? Object(r.call(t)) : {} }(t);
                    case "arraybuffer":
                        return function(t) { const e = new t.constructor(t.byteLength); return new Uint8Array(e).set(new Uint8Array(t)), e }(t);
                    case "float32array":
                    case "float64array":
                    case "int16array":
                    case "int32array":
                    case "int8array":
                    case "uint16array":
                    case "uint32array":
                    case "uint8clampedarray":
                    case "uint8array":
                        return function(t, e) { return new t.constructor(t.buffer, t.byteOffset, t.length) }(t);
                    case "regexp":
                        return function(t) { const e = void 0 !== t.flags ? t.flags : /\w+$/.exec(t) || void 0,
                                n = new t.constructor(t.source, e); return n.lastIndex = t.lastIndex, n }(t);
                    case "error":
                        return Object.create(t);
                    default:
                        return t } }
        }).call(this, n(6).Buffer)
    }, function(t, e, n) { "use strict";
        e.byteLength = function(t) { var e = c(t),
                n = e[0],
                r = e[1]; return 3 * (n + r) / 4 - r }, e.toByteArray = function(t) { var e, n, r = c(t),
                s = r[0],
                a = r[1],
                u = new i(function(t, e, n) { return 3 * (e + n) / 4 - n }(0, s, a)),
                h = 0,
                l = a > 0 ? s - 4 : s; for (n = 0; n < l; n += 4) e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)], u[h++] = e >> 16 & 255, u[h++] = e >> 8 & 255, u[h++] = 255 & e;
            2 === a && (e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4, u[h++] = 255 & e);
            1 === a && (e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2, u[h++] = e >> 8 & 255, u[h++] = 255 & e); return u }, e.fromByteArray = function(t) { for (var e, n = t.length, o = n % 3, i = [], s = 0, a = n - o; s < a; s += 16383) i.push(h(t, s, s + 16383 > a ? a : s + 16383));
            1 === o ? (e = t[n - 1], i.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")); return i.join("") }; for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) r[a] = s[a], o[s.charCodeAt(a)] = a;

        function c(t) { var e = t.length; if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var n = t.indexOf("="); return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4] }

        function h(t, e, n) { for (var o, i, s = [], a = e; a < n; a += 3) o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]); return s.join("") }
        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63 }, function(t, e) { e.read = function(t, e, n, r, o) { var i, s, a = 8 * o - r - 1,
                u = (1 << a) - 1,
                c = u >> 1,
                h = -7,
                l = n ? o - 1 : 0,
                p = n ? -1 : 1,
                f = t[e + l]; for (l += p, i = f & (1 << -h) - 1, f >>= -h, h += a; h > 0; i = 256 * i + t[e + l], l += p, h -= 8); for (s = i & (1 << -h) - 1, i >>= -h, h += r; h > 0; s = 256 * s + t[e + l], l += p, h -= 8); if (0 === i) i = 1 - c;
            else { if (i === u) return s ? NaN : 1 / 0 * (f ? -1 : 1);
                s += Math.pow(2, r), i -= c } return (f ? -1 : 1) * s * Math.pow(2, i - r) }, e.write = function(t, e, n, r, o, i) { var s, a, u, c = 8 * i - o - 1,
                h = (1 << c) - 1,
                l = h >> 1,
                p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                f = r ? 0 : i - 1,
                d = r ? 1 : -1,
                m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0; for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + l >= 1 ? p / u : p * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= h ? (a = 0, s = h) : s + l >= 1 ? (a = (e * u - 1) * Math.pow(2, o), s += l) : (a = e * Math.pow(2, l - 1) * Math.pow(2, o), s = 0)); o >= 8; t[n + f] = 255 & a, f += d, a /= 256, o -= 8); for (s = s << o | a, c += o; c > 0; t[n + f] = 255 & s, f += d, s /= 256, c -= 8);
            t[n + f - d] |= 128 * m } }, function(t, e) { var n = {}.toString;
        t.exports = Array.isArray || function(t) { return "[object Array]" == n.call(t) } }, function(t, e, n) { "use strict";
        /*!
         * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
         *
         * Copyright (c) 2014-2017, Jon Schlinkert.
         * Released under the MIT License.
         */
        var r = n(33);

        function o(t) { return !0 === r(t) && "[object Object]" === Object.prototype.toString.call(t) }
        t.exports = function(t) { var e, n; return !1 !== o(t) && ("function" == typeof(e = t.constructor) && (!1 !== o(n = e.prototype) && !1 !== n.hasOwnProperty("isPrototypeOf"))) } }, function(t, e, n) { "use strict";
        /*!
         * isobject <https://github.com/jonschlinkert/isobject>
         *
         * Copyright (c) 2014-2017, Jon Schlinkert.
         * Released under the MIT License.
         */
        t.exports = function(t) { return null != t && "object" == typeof t && !1 === Array.isArray(t) } }, function(t, e) { t.exports = function(t) { return new Promise(e => { setTimeout(() => { e() }, t) }) } }, function(t, e, n) {
        (function(e) { const r = n(3),
                o = n(36),
                i = n(1).InvalidArgumentsError;

            function s(t, n) { let r = null == t.secure ? n : t.secure; return t.port || (e.location && location.port ? location.port : r ? 443 : 80) }
            t.exports = { create: function(t) { if ((t = t || {}).host && !t.host.match(/[^:]+:\d{2,5}/)) throw new i('The host option should include both the hostname and the port number in the format "hostname:port"'); if (t.host && t.hostname) throw new i('The host option should already include the hostname and the port number in the format "hostname:port" - Because of this, you should never use host and hostname options together'); if (t.host && t.port) throw new i('The host option should already include the hostname and the port number in the format "hostname:port" - Because of this, you should never use host and port options together'); let n = e.location && "https:" === location.protocol,
                        a = { clientId: o.v4(), port: s(t, n), hostname: e.location && location.hostname || "localhost", secure: n }; return Object.assign(a, t), new r(a) } } }).call(this, n(0)) }, function(t, e, n) { var r = n(37),
            o = n(38),
            i = o;
        i.v1 = r, i.v4 = o, t.exports = i }, function(t, e, n) { var r, o, i = n(8),
            s = n(9),
            a = 0,
            u = 0;
        t.exports = function(t, e, n) { var c = e && n || 0,
                h = e || [],
                l = (t = t || {}).node || r,
                p = void 0 !== t.clockseq ? t.clockseq : o; if (null == l || null == p) { var f = i();
                null == l && (l = r = [1 | f[0], f[1], f[2], f[3], f[4], f[5]]), null == p && (p = o = 16383 & (f[6] << 8 | f[7])) } var d = void 0 !== t.msecs ? t.msecs : (new Date).getTime(),
                m = void 0 !== t.nsecs ? t.nsecs : u + 1,
                y = d - a + (m - u) / 1e4; if (y < 0 && void 0 === t.clockseq && (p = p + 1 & 16383), (y < 0 || d > a) && void 0 === t.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            a = d, u = m, o = p; var g = (1e4 * (268435455 & (d += 122192928e5)) + m) % 4294967296;
            h[c++] = g >>> 24 & 255, h[c++] = g >>> 16 & 255, h[c++] = g >>> 8 & 255, h[c++] = 255 & g; var b = d / 4294967296 * 1e4 & 268435455;
            h[c++] = b >>> 8 & 255, h[c++] = 255 & b, h[c++] = b >>> 24 & 15 | 16, h[c++] = b >>> 16 & 255, h[c++] = p >>> 8 | 128, h[c++] = 255 & p; for (var _ = 0; _ < 6; ++_) h[c + _] = l[_]; return e || s(h) } }, function(t, e, n) { var r = n(8),
            o = n(9);
        t.exports = function(t, e, n) { var i = e && n || 0; "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null); var s = (t = t || {}).random || (t.rng || r)(); if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e)
                for (var a = 0; a < 16; ++a) e[i + a] = s[a]; return e || o(s) } }])
}));