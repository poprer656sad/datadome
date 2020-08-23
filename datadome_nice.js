'use strict';
!function e(i, o, r) {
  /**
   * @param {string} t
   * @param {?} u
   * @return {?}
   */
  function s(t, u) {
    if (!o[t]) {
      if (!i[t]) {
        var a = "function" == typeof require && require;
        if (!u && a) {
          return a(t, true);
        }
        if (i) {
          return i(t, true);
        }
        /** @type {!Error} */
        var f = new Error("Cannot find module '" + t + "'");
        throw f["code"] = "MODULE_NOT_FOUND", f;
      }
      var win = o[t] = {};
      o[t]["exports"] = {};
      i[t][0]["call"](win["exports"], function(e) {
        return s(i[t][1][e] || e);
      }, win, win["exports"], e, i, o, r);
    }
    return o[t]["exports"];
  }
  var i = "function" == typeof require && require;
  /** @type {number} */
  var o = 0;
  for (; o < r["length"]; o++) {
    s(r[o]);
  }
  return s;
}({
  1 : [function(canCreateDiscussions, module, isSlidingUp) {
    /**
     * @return {?}
     */
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined");
    }
    /**
     * @return {?}
     */
    function defaultClearTimeout() {
      throw new Error("clearTimeout has not been defined");
    }
    /**
     * @param {!Function} p
     * @return {?}
     */
    function get(p) {
      if (cachedSetTimeout === setTimeout) {
        return setTimeout(p, 0);
      }
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        return cachedSetTimeout = setTimeout, setTimeout(p, 0);
      }
      try {
        return cachedSetTimeout(p, 0);
      } catch (_0x2afd2e) {
        try {
          return cachedSetTimeout["call"](null, p, 0);
        } catch (_0x24c347) {
          return cachedSetTimeout["call"](this, p, 0);
        }
      }
    }
    /**
     * @return {undefined}
     */
    function op() {
      if (ownProperties && proto) {
        /** @type {boolean} */
        ownProperties = false;
        if (proto["length"]) {
          params = proto["concat"](params);
        } else {
          /** @type {number} */
          n = -1;
        }
        if (params["length"]) {
          match();
        }
      }
    }
    /**
     * @return {undefined}
     */
    function match() {
      if (!ownProperties) {
        var c = get(op);
        /** @type {boolean} */
        ownProperties = true;
        var key = params["length"];
        for (; key;) {
          proto = params;
          /** @type {!Array} */
          params = [];
          for (; ++n < key;) {
            if (proto) {
              proto[n]["run"]();
            }
          }
          /** @type {number} */
          n = -1;
          key = params["length"];
        }
        /** @type {null} */
        proto = null;
        /** @type {boolean} */
        ownProperties = false;
        (function(marker) {
          if (cachedClearTimeout === clearTimeout) {
            return clearTimeout(marker);
          }
          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            return cachedClearTimeout = clearTimeout, clearTimeout(marker);
          }
          try {
            cachedClearTimeout(marker);
          } catch (_0x1011b4) {
            try {
              return cachedClearTimeout["call"](null, marker);
            } catch (_0x5b59d3) {
              return cachedClearTimeout["call"](this, marker);
            }
          }
        })(c);
      }
    }
    /**
     * @param {?} handler
     * @param {?} scope
     * @return {undefined}
     */
    function Test(handler, scope) {
      this["fun"] = handler;
      this["array"] = scope;
    }
    /**
     * @return {undefined}
     */
    function value() {
    }
    var cachedSetTimeout;
    var cachedClearTimeout;
    var p = module["exports"] = {};
    !function() {
      try {
        /** @type {!Function} */
        cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
      } catch (_0x14d13d) {
        /** @type {function(): ?} */
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        /** @type {!Function} */
        cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch (_0x2db142) {
        /** @type {function(): ?} */
        cachedClearTimeout = defaultClearTimeout;
      }
    }();
    var proto;
    /** @type {!Array} */
    var params = [];
    /** @type {boolean} */
    var ownProperties = false;
    /** @type {number} */
    var n = -1;
    /**
     * @param {!Function} dupeNode
     * @return {undefined}
     */
    p["nextTick"] = function(dupeNode) {
      /** @type {!Array} */
      var properties = new Array(arguments["length"] - 1);
      if (arguments["length"] > 1) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments["length"]; i++) {
          properties[i - 1] = arguments[i];
        }
      }
      params["push"](new Test(dupeNode, properties));
      if (!(1 !== params["length"] || ownProperties)) {
        get(match);
      }
    };
    /**
     * @return {undefined}
     */
    Test["prototype"]["run"] = function() {
      this["fun"]["apply"](null, this["array"]);
    };
    /** @type {string} */
    p["title"] = "browser";
    /** @type {boolean} */
    p["browser"] = true;
    p["env"] = {};
    /** @type {!Array} */
    p["argv"] = [];
    /** @type {string} */
    p["version"] = "";
    p["versions"] = {};
    /** @type {function(): undefined} */
    p["on"] = value;
    /** @type {function(): undefined} */
    p["addListener"] = value;
    /** @type {function(): undefined} */
    p["once"] = value;
    /** @type {function(): undefined} */
    p["off"] = value;
    /** @type {function(): undefined} */
    p["removeListener"] = value;
    /** @type {function(): undefined} */
    p["removeAllListeners"] = value;
    /** @type {function(): undefined} */
    p["emit"] = value;
    /** @type {function(): undefined} */
    p["prependListener"] = value;
    /** @type {function(): undefined} */
    p["prependOnceListener"] = value;
    /**
     * @param {?} canCreateDiscussions
     * @return {?}
     */
    p["listeners"] = function(canCreateDiscussions) {
      return [];
    };
    /**
     * @param {?} canCreateDiscussions
     * @return {?}
     */
    p["binding"] = function(canCreateDiscussions) {
      throw new Error("process.binding is not supported");
    };
    /**
     * @return {?}
     */
    p["cwd"] = function() {
      return "/";
    };
    /**
     * @param {?} canCreateDiscussions
     * @return {?}
     */
    p["chdir"] = function(canCreateDiscussions) {
      throw new Error("process.chdir is not supported");
    };
    /**
     * @return {?}
     */
    p["umask"] = function() {
      return 0;
    };
  }, {}],
  2 : [function(canCreateDiscussions, module, isSlidingUp) {
    /**
     * @return {undefined}
     */
    module["exports"] = function() {
      /** @type {string} */
      this["endpoint"] = "https://api-js.datadome.co/js/";
      /** @type {string} */
      this["version"] = "4.1.8";
      /** @type {null} */
      this["ajaxListenerPath"] = null;
      /** @type {null} */
      this["customParam"] = null;
      /** @type {boolean} */
      this["exposeCaptchaFunction"] = false;
      /** @type {boolean} */
      this["abortAsyncOnCaptchaDisplay"] = true;
      /** @type {null} */
      this["patternToRemoveFromReferrerUrl"] = null;
      /** @type {boolean} */
      this["eventsTrackingEnabled"] = true;
      /** @type {boolean} */
      this["overrideAbortFetch"] = false;
      /** @type {string} */
      this["ddResponsePage"] = "origin";
      /** @type {boolean} */
      this["isSalesforce"] = false;
      /**
       * @param {!Object} options
       * @return {undefined}
       */
      this["check"] = function(options) {
        if (void 0 !== options["endpoint"]) {
          this["endpoint"] = options["endpoint"];
        }
        if (void 0 !== options["ajaxListenerPath"]) {
          if ("string" == typeof options["ajaxListenerPath"]) {
            /** @type {!Array} */
            this["ajaxListenerPath"] = [options["ajaxListenerPath"]];
          } else {
            this["ajaxListenerPath"] = options["ajaxListenerPath"];
          }
        }
        if (void 0 !== options["sfcc"]) {
          this["isSalesforce"] = options["sfcc"];
        }
        if (void 0 !== options["customParam"]) {
          this["customParam"] = options["customParam"];
        }
        if (void 0 !== options["exposeCaptchaFunction"]) {
          this["exposeCaptchaFunction"] = options["exposeCaptchaFunction"];
        }
        if (void 0 !== options["abortAsyncOnCaptchaDisplay"]) {
          this["abortAsyncOnCaptchaDisplay"] = options["abortAsyncOnCaptchaDisplay"];
        }
        if (void 0 !== options["debug"]) {
          this["debug"] = options["debug"];
        }
        if (void 0 !== options["eventsTrackingEnabled"]) {
          this["eventsTrackingEnabled"] = options["eventsTrackingEnabled"];
        }
        if (void 0 !== options["responsePage"]) {
          this["ddResponsePage"] = options["responsePage"];
        }
        if (void 0 !== options["patternToRemoveFromReferrerUrl"]) {
          this["patternToRemoveFromReferrerUrl"] = options["patternToRemoveFromReferrerUrl"];
        }
        if (void 0 !== options["overrideAbortFetch"]) {
          this["overrideAbortFetch"] = options["overrideAbortFetch"];
        }
      };
    };
  }, {}],
  3 : [function(canCreateDiscussions, module, isSlidingUp) {
    /**
     * @return {undefined}
     */
    module["exports"] = function() {
      /** @type {string} */
      this["dataDomeCookieName"] = "datadome";
      /**
       * @return {?}
       */
      this["getCookie"] = function() {
        var kvpair = (new RegExp(this["dataDomeCookieName"] + "=([^;]+)"))["exec"](document["cookie"]);
        return null != kvpair ? unescape(kvpair[1]) : null;
      };
      /**
       * @param {?} canCreateDiscussions
       * @param {?} isSlidingUp
       * @return {undefined}
       */
      this["debug"] = function(canCreateDiscussions, isSlidingUp) {
        if ("undefined" != typeof console && void 0 !== console["log"]) {
          window["dataDomeOptions"]["debug"];
        }
      };
      /**
       * @param {!Object} app
       * @param {number} componentName
       * @return {?}
       */
      this["removeSubstringPattern"] = function(app, componentName) {
        return componentName ? app["replace"](new RegExp(componentName), function(PL$20, PL$15) {
          return PL$20["replace"](PL$15, "");
        }) : app;
      };
      /**
       * @param {!Element} element
       * @param {string} type
       * @param {?} callback
       * @return {undefined}
       */
      this["addEventListener"] = function(element, type, callback) {
        if (element["addEventListener"]) {
          element["addEventListener"](type, callback);
        } else {
          if (void 0 !== element["attachEvent"]) {
            element["attachEvent"]("on" + type, callback);
          } else {
            element["on" + type] = callback;
          }
        }
      };
      /**
       * @param {!Object} w
       * @param {string} event
       * @param {?} cb
       * @return {undefined}
       */
      this["removeEventListener"] = function(w, event, cb) {
        if (w["removeEventListener"]) {
          w["removeEventListener"](event, cb);
        } else {
          if (w["detachEvent"]) {
            w["detachEvent"]("on" + event, cb);
          }
        }
      };
      /**
       * @param {?} canCreateDiscussions
       * @return {undefined}
       */
      this["safeDeleteVar"] = function(canCreateDiscussions) {
        try {
          0;
        } catch (_0x26dbfd) {
          void 0;
        }
      };
    };
  }, {}],
  4 : [function(require, window, canCreateDiscussions) {
    (function(options) {
      var Iconv = require("./../common/DataDomeTools");
      /**
       * @return {undefined}
       */
      var exports = function() {
        /**
         * @return {?}
         */
        function get() {
          return !!(window["ddAnalyzerData"]["cfpp"] || window["ddAnalyzerData"]["slat"] || window["ddAnalyzerData"]["cfcpw"] || window["ddAnalyzerData"]["cffpw"] || window["ddAnalyzerData"]["cfwpw"] || window["ddAnalyzerData"]["cfppf"] || window["ddAnalyzerData"]["slsf"]);
        }
        /**
         * @param {string} event
         * @return {undefined}
         */
        function dispatchEvent(event) {
          if (void 0 !== window["Event"] && "function" == typeof window["dispatchEvent"]) {
            /** @type {!Event} */
            var e = new Event(event);
            window["dispatchEvent"](e);
          }
        }
        /**
         * @return {?}
         */
        function runInContext() {
          return window["performance"] && "function" == typeof performance["now"] ? performance["now"]() : (new Date)["getTime"]();
        }
        /**
         * @param {?} url
         * @param {!Function} assertions
         * @return {undefined}
         */
        function done(url, assertions) {
          /** @type {!XMLHttpRequest} */
          var xhr = new XMLHttpRequest;
          /**
           * @return {undefined}
           */
          xhr["onreadystatechange"] = function() {
            try {
              if (4 == xhr["readyState"] && 200 == xhr["status"]) {
                assertions(xhr["responseText"]);
              }
            } catch (_0x24fb09) {
            }
          };
          xhr["open"]("GET", url, true);
          xhr["send"](null);
        }
        this["dataDomeTools"] = new Iconv;
        /**
         * @return {?}
         */
        this["process"] = function() {
          return window["ddAnalyzerData"] = {}, this["checkMousePosition"](), this["asynchronizeTask"](this["dd_a"]), this["asynchronizeTask"](this["dd_b"]), this["asynchronizeTask"](this["dd_c"]), this["asynchronizeTask"](this["dd_d"]), this["asynchronizeTask"](this["dd_e"]), this["asynchronizeTask"](this["dd_f"]), this["asynchronizeTask"](this["dd_g"]), this["asynchronizeTask"](this["dd_h"]), this["asynchronizeTask"](this["dd_i"]), this["asynchronizeTask"](this["dd_j"]), this["asynchronizeTask"](this["dd_k"]), 
          this["asynchronizeTask"](this["dd_l"]), this["asynchronizeTask"](this["dd_m"]), this["asynchronizeTask"](this["dd_n"]), this["asynchronizeTask"](this["dd_o"]), this["asynchronizeTask"](this["dd_p"]), this["asynchronizeTask"](this["dd_q"]), this["asynchronizeTask"](this["dd_r"]), this["asynchronizeTask"](this["dd_s"]), this["asynchronizeTask"](this["dd_t"]), this["asynchronizeTask"](this["dd_u"]), this["asynchronizeTask"](this["dd_v"]), this["asynchronizeTask"](this["dd_w"]), this["asynchronizeTask"](this["dd_x"]), 
          this["asynchronizeTask"](this["dd_y"]), this["asynchronizeTask"](this["dd_z"]), this["asynchronizeTask"](this["dd_A"]), this["asynchronizeTask"](this["dd_B"]), this["asynchronizeTask"](this["dd_C"]), this["asynchronizeTask"](this["dd_D"]), this["asynchronizeTask"](this["dd_E"]), this["asynchronizeTask"](this["dd_F"]), this["asynchronizeTask"](this["dd_G"]), this["asynchronizeTask"](this["dd_H"]), this["asynchronizeTask"](this["dd_I"]), this["asynchronizeTask"](this["dd_J"]), this["asynchronizeTask"](this["dd_K"]), 
          this["asynchronizeTask"](this["dd_L"]), this["asynchronizeTask"](this["dd_M"]), this["asynchronizeTask"](this["dd_N"]), this["asynchronizeTask"](this["dd_O"]), this["asynchronizeTask"](this["dd_P"]), this["asynchronizeTask"](this["dd_Q"]), this["asynchronizeTask"](this["dd_R"]), this["asynchronizeTask"](this["dd_S"]), this["asynchronizeTask"](this["dd_T"]), window["navigator"] && -1 === navigator["userAgent"]["toLowerCase"]()["indexOf"]("android") && -1 === navigator["userAgent"]["toLowerCase"]()["indexOf"]("iphone") && 
          -1 === navigator["userAgent"]["toLowerCase"]()["indexOf"]("ipad") && (this["asynchronizeTask"](this["dd_U"]), this["asynchronizeTask"](this["dd_V"]), this["asynchronizeTask"](this["dd_W"]), this["asynchronizeTask"](this["dd_X"]), this["asynchronizeTask"](this["dd_Y"]), this["asynchronizeTask"](this["dd_Z"])), "captcha" == window["dataDomeOptions"]["ddResponsePage"] && "8FE0CF7F8AB30EC588599D8046ED0E" != window["ddjskey"] && this["asynchronizeTask"](this["dd_aa"]), window["ddAnalyzerData"];
          /** @type {null} */
          window["ddAnalyzerData"]["plg"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["plgod"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["pltod"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["br_h"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["br_w"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["br_oh"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["br_ow"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["jsf"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cvs"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["phe"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["nm"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["sln"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["lo"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["lb"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mp_cx"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mp_cy"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mp_mx"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mp_my"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mp_sx"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mp_sy"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mp_tr"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["hc"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["rs_h"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["rs_w"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["rs_cd"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ua"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["lg"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["pr"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ars_h"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ars_w"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["tz"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["tzp"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["str_ss"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["str_ls"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["str_idb"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["str_odb"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["abk"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ts_mtp"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ts_tec"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ts_tsa"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["hl"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["so"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wo"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["sz"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["rtc"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wbd"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wbdm"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wdif"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wdifts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wdifrm"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wdw"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["prm"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["lgs"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["lgsod"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["usb"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vnd"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["bid"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mmt"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["plu"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["hdn"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["awe"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["geb"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["dat"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["eva"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["med"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ocpt"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["aco"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acmp"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acw"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acma"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acaa"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ac3"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acf"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acmp4"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acmp3"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acwm"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acots"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acmpts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acwts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acmats"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acaats"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ac3ts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acfts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acmp4ts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acmp3ts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acwmts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vco"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vch"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vcw"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vc3"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vcmp"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vcq"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vc1"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vcots"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vchts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vcwts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vc3ts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vcmpts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vcqts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vc1ts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["glrd"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["glvd"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cfpp"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cfppf"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cfcpw"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cffpw"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cfwpw"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["dvm"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["sqt"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["bgav"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["rri"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["idfr"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ancs"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["inlc"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cgca"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["inlf"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["tecd"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["sbct"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["aflt"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["rgp"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["bint"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mqmw"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mqmh"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mqol"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mqop"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["xr"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vpbq"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["svde"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["slat"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["slsf"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["spwn"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["emt"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["bfr"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ttst"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ewsi"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wwsi"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["slmk"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["dbov"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ifov"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cokys"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["crt"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["tagpu"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["tbce"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ecpc"] = null;
        };
        /**
         * @param {?} saveNotifs
         * @param {?} notifications
         * @param {?} timeToFadeIn
         * @return {undefined}
         */
        this["asynchronizeTask"] = function(saveNotifs, notifications, timeToFadeIn) {
          setTimeout(function() {
            if (!window["ddAnalyzerData"]["ttst"]) {
              /** @type {number} */
              window["ddAnalyzerData"]["ttst"] = 0;
            }
            var JSON3 = runInContext();
            try {
              saveNotifs(notifications);
            } catch (_0x1d50ff) {
            } finally {
              window["ddAnalyzerData"]["ttst"] += runInContext() - JSON3;
            }
          }, timeToFadeIn);
        };
        /**
         * @return {undefined}
         */
        this["clean"] = function() {
          this["dataDomeTools"]["removeEventListener"](window, "mousemove", this["getMousePosition"]);
          this["dataDomeTools"]["safeDeleteVar"](window["ddAnalyzerData"]);
        };
        /**
         * @return {undefined}
         */
        this["dd_a"] = function() {
          try {
            document["createElement"](34);
          } catch (stackToIndex) {
            try {
              var cache = stackToIndex["stack"]["split"]("\n");
              if (cache["length"] >= 2) {
                /** @type {boolean} */
                window["ddAnalyzerData"]["ifov"] = !!cache[1]["match"](/Ob[cej]{3}t\.a[lp]{3}y[\(< ]{3}an[oynm]{5}us>/);
              } else {
                /** @type {string} */
                window["ddAnalyzerData"]["ifov"] = "e1";
              }
            } catch (_0x5d1b69) {
              /** @type {string} */
              window["ddAnalyzerData"]["ifov"] = "e2";
            }
          }
        };
        /**
         * @return {undefined}
         */
        this["dd_b"] = function() {
          try {
            /** @type {boolean} */
            window["ddAnalyzerData"]["wdifts"] = false;
            /** @type {boolean} */
            window["ddAnalyzerData"]["wdifrm"] = false;
            /** @type {boolean} */
            window["ddAnalyzerData"]["wdif"] = false;
            var el = document["createElement"]("iframe");
            if (el["srcdoc"] = "/**/", el["setAttribute"]("style", "display: none;"), document && document["head"]) {
              if (document["head"]["appendChild"](el), void 0 !== window["Object"] && void 0 !== Object["getOwnPropertyDescriptors"]) {
                var innerFrame = Object["getOwnPropertyDescriptors"](HTMLIFrameElement["prototype"]);
                if (navigator["userAgent"]["indexOf"]("Chrome") > -1 && "function get contentWindow() { [native code] }" !== innerFrame["contentWindow"]["get"]["toString"]()) {
                  /** @type {boolean} */
                  window["ddAnalyzerData"]["wdifts"] = true;
                }
              }
              if (el["contentWindow"] === window) {
                /** @type {boolean} */
                window["ddAnalyzerData"]["wdifrm"] = true;
              }
              if (el["contentWindow"]["navigator"]["webdriver"]) {
                /** @type {boolean} */
                window["ddAnalyzerData"]["wdif"] = true;
              }
            }
          } catch (_0x5c909a) {
            /** @type {string} */
            window["ddAnalyzerData"]["wdif"] = "err";
          } finally {
            if (el && el["parentElement"]) {
              el["parentElement"]["removeChild"](el);
            }
          }
        };
        /**
         * @return {?}
         */
        this["dd_c"] = function() {
          return window["ddAnalyzerData"]["br_h"] = Math["max"](document["documentElement"]["clientHeight"], window["innerHeight"] || 0), window["ddAnalyzerData"]["br_w"] = Math["max"](document["documentElement"]["clientWidth"], window["innerWidth"] || 0), window["ddAnalyzerData"]["br_oh"] = window["outerHeight"], window["ddAnalyzerData"]["br_ow"] = window["outerWidth"], "br";
        };
        /**
         * @return {?}
         */
        this["dd_d"] = function() {
          return window["ddAnalyzerData"]["rs_h"] = window["screen"]["height"], window["ddAnalyzerData"]["rs_w"] = window["screen"]["width"], window["ddAnalyzerData"]["rs_cd"] = window["screen"]["colorDepth"], "rs";
        };
        /**
         * @return {?}
         */
        this["dd_h"] = function() {
          return window["ddAnalyzerData"]["ua"] = window["navigator"]["userAgent"], "ua";
        };
        /**
         * @return {?}
         */
        this["dd_X"] = function() {
          try {
            var canvas = document["createElement"]("canvas");
            /** @type {boolean} */
            window["ddAnalyzerData"]["cvs"] = !(!canvas["getContext"] || !canvas["getContext"]("2d"));
          } catch (_0x3c6d67) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["cvs"] = false;
          }
          return "cvs";
        };
        /**
         * @return {?}
         */
        this["dd_e"] = function() {
          return window["ddAnalyzerData"]["phe"] = !(!window["callPhantom"] && !window["_phantom"]), "phe";
        };
        /**
         * @return {?}
         */
        this["dd_f"] = function() {
          return window["ddAnalyzerData"]["nm"] = !!window["__nightmare"], "nm";
        };
        /**
         * @return {?}
         */
        this["dd_g"] = function() {
          return window["ddAnalyzerData"]["jsf"] = false, (!Function["prototype"]["bind"] || Function["prototype"]["bind"]["toString"]()["replace"](/bind/g, "Error") != Error["toString"]() && void 0 === window["Prototype"]) && (window["ddAnalyzerData"]["jsf"] = true), "jsf";
        };
        /**
         * @return {?}
         */
        this["dd_i"] = function() {
          return window["ddAnalyzerData"]["lg"] = navigator["language"] || navigator["userLanguage"] || navigator["browserLanguage"] || navigator["systemLanguage"] || "", "lg";
        };
        /**
         * @return {?}
         */
        this["dd_j"] = function() {
          return window["ddAnalyzerData"]["pr"] = window["devicePixelRatio"] || "unknown", "pr";
        };
        /**
         * @return {?}
         */
        this["dd_k"] = function() {
          return window["ddAnalyzerData"]["hc"] = navigator["hardwareConcurrency"], "hc";
        };
        /**
         * @return {?}
         */
        this["dd_l"] = function() {
          return screen["availWidth"] && screen["availHeight"] ? (window["ddAnalyzerData"]["ars_h"] = screen["availHeight"], window["ddAnalyzerData"]["ars_w"] = screen["availWidth"]) : (window["ddAnalyzerData"]["ars_h"] = 0, window["ddAnalyzerData"]["ars_w"] = 0), "ars";
        };
        /**
         * @return {?}
         */
        this["dd_m"] = function() {
          return window["ddAnalyzerData"]["tz"] = (new Date)["getTimezoneOffset"](), "tz";
        };
        /**
         * @return {?}
         */
        this["dd_W"] = function() {
          return window["ddAnalyzerData"]["tzp"] = "NA", window["Intl"] && Intl["DateTimeFormat"] && "function" == typeof Intl["DateTimeFormat"]["prototype"]["resolvedOptions"] && (window["ddAnalyzerData"]["tzp"] = Intl["DateTimeFormat"]()["resolvedOptions"]()["timeZone"] || "NA"), "tzp";
        };
        /**
         * @return {?}
         */
        this["dd_n"] = function() {
          try {
            /** @type {boolean} */
            window["ddAnalyzerData"]["str_ss"] = !!window["sessionStorage"];
          } catch (_0x4edcb0) {
            /** @type {string} */
            window["ddAnalyzerData"]["str_ss"] = "NA";
          }
          try {
            /** @type {boolean} */
            window["ddAnalyzerData"]["str_ls"] = !!window["localStorage"];
          } catch (_0x59b286) {
            /** @type {string} */
            window["ddAnalyzerData"]["str_ls"] = "NA";
          }
          try {
            /** @type {boolean} */
            window["ddAnalyzerData"]["str_idb"] = !!window["indexedDB"];
          } catch (_0x4dbdca) {
            /** @type {string} */
            window["ddAnalyzerData"]["str_idb"] = "NA";
          }
          try {
            /** @type {boolean} */
            window["ddAnalyzerData"]["str_odb"] = !!window["openDatabase"];
          } catch (_0x3c9ac1) {
            /** @type {string} */
            window["ddAnalyzerData"]["str_odb"] = "NA";
          }
          return "str";
        };
        /**
         * @return {?}
         */
        this["dd_o"] = function() {
          try {
            window["ddAnalyzerData"]["plg"] = navigator["plugins"]["length"];
            if (window["Object"] && window["Object"]["getOwnPropertyDescriptor"]) {
              /** @type {boolean} */
              window["ddAnalyzerData"]["plgod"] = !!Object["getOwnPropertyDescriptor"](navigator, "plugins");
            }
          } catch (_0x425434) {
            /** @type {number} */
            window["ddAnalyzerData"]["plg"] = 0;
          }
          return "plg";
        };
        /**
         * @return {undefined}
         */
        this["dd_p"] = function() {
          if (window["Object"] && window["Object"]["getOwnPropertyDescriptor"]) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["pltod"] = !!Object["getOwnPropertyDescriptor"](navigator, "platform");
          }
        };
        /**
         * @return {?}
         */
        this["dd_q"] = function() {
          var node = document["createElement"]("div");
          /** @type {string} */
          node["innerHTML"] = "&nbsp;";
          /** @type {string} */
          node["className"] = "adsbox";
          try {
            document["body"]["appendChild"](node);
            /** @type {boolean} */
            window["ddAnalyzerData"]["abk"] = 0 === document["getElementsByClassName"]("adsbox")[0]["offsetHeight"];
            document["body"]["removeChild"](node);
          } catch (_0xb01fc4) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["abk"] = false;
          }
          return "abk";
        };
        /**
         * @return {?}
         */
        this["dd_r"] = function() {
          /** @type {boolean} */
          window["ddAnalyzerData"]["lb"] = false;
          var undefined;
          var targetLocale = navigator["userAgent"]["toLowerCase"]();
          var dom_implemented = navigator["productSub"];
          if (!("Chrome" !== (undefined = targetLocale["indexOf"]("firefox") >= 0 ? "Firefox" : targetLocale["indexOf"]("opera") >= 0 || targetLocale["indexOf"]("opr") >= 0 ? "Opera" : targetLocale["indexOf"]("chrome") >= 0 ? "Chrome" : targetLocale["indexOf"]("safari") >= 0 ? "Safari" : targetLocale["indexOf"]("trident") >= 0 ? "Internet Explorer" : "Other") && "Safari" !== undefined && "Opera" !== undefined || "20030107" === dom_implemented)) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["lb"] = true;
          }
          var allDataAvailable;
          var index = eval["toString"]()["length"];
          window["ddAnalyzerData"]["eva"] = index;
          if (37 === index && "Safari" !== undefined && "Firefox" !== undefined && "Other" !== undefined) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["lb"] = true;
          } else {
            if (39 === index && "Internet Explorer" !== undefined && "Other" !== undefined) {
              /** @type {boolean} */
              window["ddAnalyzerData"]["lb"] = true;
            } else {
              if (33 === index && "Chrome" !== undefined && "Opera" !== undefined && "Other" !== undefined) {
                /** @type {boolean} */
                window["ddAnalyzerData"]["lb"] = true;
              }
            }
          }
          try {
            throw "a";
          } catch (ob) {
            try {
              ob["toSource"]();
              /** @type {boolean} */
              allDataAvailable = true;
            } catch (_0xa3e039) {
              /** @type {boolean} */
              allDataAvailable = false;
            }
          }
          return allDataAvailable && "Firefox" !== undefined && "Other" !== undefined && (window["ddAnalyzerData"]["lb"] = true), "lb";
        };
        /**
         * @return {?}
         */
        this["dd_s"] = function() {
          /** @type {boolean} */
          window["ddAnalyzerData"]["lo"] = false;
          var button;
          var targetLocale = navigator["userAgent"]["toLowerCase"]();
          var dom_implemented = navigator["oscpu"];
          var createMissingNativeApiListeners = navigator["platform"]["toLowerCase"]();
          return button = targetLocale["indexOf"]("windows phone") >= 0 ? "Windows Phone" : targetLocale["indexOf"]("win") >= 0 ? "Windows" : targetLocale["indexOf"]("android") >= 0 ? "Android" : targetLocale["indexOf"]("linux") >= 0 ? "Linux" : targetLocale["indexOf"]("iphone") >= 0 || targetLocale["indexOf"]("ipad") >= 0 ? "iOS" : targetLocale["indexOf"]("mac") >= 0 ? "Mac" : "Other", ("ontouchstart" in window || navigator["maxTouchPoints"] > 0 || navigator["msMaxTouchPoints"] > 0) && "Windows Phone" !== 
          button && "Android" !== button && "iOS" !== button && "Other" !== button && (window["ddAnalyzerData"]["lo"] = true), void 0 !== dom_implemented && ((dom_implemented = dom_implemented["toLowerCase"]())["indexOf"]("win") >= 0 && "Windows" !== button && "Windows Phone" !== button ? window["ddAnalyzerData"]["lo"] = true : dom_implemented["indexOf"]("linux") >= 0 && "Linux" !== button && "Android" !== button ? window["ddAnalyzerData"]["lo"] = true : dom_implemented["indexOf"]("mac") >= 0 && 
          "Mac" !== button && "iOS" !== button ? window["ddAnalyzerData"]["lo"] = true : 0 === dom_implemented["indexOf"]("win") && 0 === dom_implemented["indexOf"]("linux") && dom_implemented["indexOf"]("mac") >= 0 && "other" !== button && (window["ddAnalyzerData"]["lo"] = true)), createMissingNativeApiListeners["indexOf"]("win") >= 0 && "Windows" !== button && "Windows Phone" !== button ? window["ddAnalyzerData"]["lo"] = true : (createMissingNativeApiListeners["indexOf"]("linux") >= 0 || createMissingNativeApiListeners["indexOf"]("android") >= 
          0 || createMissingNativeApiListeners["indexOf"]("pike") >= 0) && "Linux" !== button && "Android" !== button ? window["ddAnalyzerData"]["lo"] = true : (createMissingNativeApiListeners["indexOf"]("mac") >= 0 || createMissingNativeApiListeners["indexOf"]("ipad") >= 0 || createMissingNativeApiListeners["indexOf"]("ipod") >= 0 || createMissingNativeApiListeners["indexOf"]("iphone") >= 0) && "Mac" !== button && "iOS" !== button ? window["ddAnalyzerData"]["lo"] = true : 0 === createMissingNativeApiListeners["indexOf"]("win") && 
          0 === createMissingNativeApiListeners["indexOf"]("linux") && createMissingNativeApiListeners["indexOf"]("mac") >= 0 && "other" !== button && (window["ddAnalyzerData"]["lo"] = true), void 0 === navigator["plugins"] && "Windows" !== button && "Windows Phone" !== button && (window["ddAnalyzerData"]["lo"] = true), "lo";
        };
        /**
         * @return {?}
         */
        this["dd_t"] = function() {
          /** @type {number} */
          var resetOne = 0;
          /** @type {boolean} */
          var updateOne = false;
          if (void 0 !== navigator["maxTouchPoints"]) {
            resetOne = navigator["maxTouchPoints"];
          } else {
            if (void 0 !== navigator["msMaxTouchPoints"]) {
              resetOne = navigator["msMaxTouchPoints"];
            }
          }
          try {
            document["createEvent"]("TouchEvent");
            /** @type {boolean} */
            updateOne = true;
          } catch (_0x40bebe) {
          }
          /** @type {boolean} */
          var IS_TOUCH_ENABLED = "ontouchstart" in window;
          return window["ddAnalyzerData"]["ts_mtp"] = resetOne, window["ddAnalyzerData"]["ts_tec"] = updateOne, window["ddAnalyzerData"]["ts_tsa"] = IS_TOUCH_ENABLED, "ts";
        };
        /**
         * @return {?}
         */
        this["dd_Y"] = function() {
          return void 0 === window["navigator"]["usb"] ? window["ddAnalyzerData"]["usb"] = "NA" : "object" == typeof window["navigator"]["usb"] ? window["ddAnalyzerData"]["usb"] = "defined" : window["ddAnalyzerData"]["usb"] = window["navigator"]["usb"], "usb";
        };
        /**
         * @return {undefined}
         */
        this["dd_v"] = function() {
          window["ddAnalyzerData"]["vnd"] = window["navigator"]["vendor"];
        };
        /**
         * @return {undefined}
         */
        this["dd_w"] = function() {
          if (void 0 === window["navigator"]["buildID"]) {
            /** @type {string} */
            window["ddAnalyzerData"]["bid"] = "NA";
          } else {
            window["ddAnalyzerData"]["bid"] = window["navigator"]["buildID"];
          }
        };
        /**
         * @return {?}
         */
        this["dd_x"] = function() {
          /** @type {string} */
          window["ddAnalyzerData"]["mmt"] = "";
          /** @type {number} */
          var j = 0;
          for (; j < window["navigator"]["mimeTypes"]["length"]; j++) {
            if (j == window["navigator"]["mimeTypes"]["length"] - 1) {
              window["ddAnalyzerData"]["mmt"] += window["navigator"]["mimeTypes"][j]["type"];
            } else {
              window["ddAnalyzerData"]["mmt"] += window["navigator"]["mimeTypes"][j]["type"] + ",";
            }
          }
          return "" == window["ddAnalyzerData"]["mmt"] && window["navigator"]["mimeTypes"] && 0 == window["navigator"]["mimeTypes"]["length"] && (window["ddAnalyzerData"]["mmt"] = "empty"), window["navigator"]["mimeTypes"] || (window["ddAnalyzerData"]["mmt"] = "NA"), "mmt";
        };
        /**
         * @return {?}
         */
        this["dd_y"] = function() {
          /** @type {string} */
          window["ddAnalyzerData"]["plu"] = "";
          /** @type {number} */
          var i = 0;
          for (; i < window["navigator"]["plugins"]["length"]; i++) {
            if (i === window["navigator"]["plugins"]["length"] - 1) {
              window["ddAnalyzerData"]["plu"] += window["navigator"]["plugins"][i]["name"];
            } else {
              window["ddAnalyzerData"]["plu"] += window["navigator"]["plugins"][i]["name"] + ",";
            }
          }
          return "" === window["ddAnalyzerData"]["plu"] && 0 === window["navigator"]["plugins"]["length"] && (window["ddAnalyzerData"]["plu"] = "empty"), window["navigator"]["plugins"] || (window["ddAnalyzerData"]["plu"] = "NA"), "plu";
        };
        /**
         * @return {?}
         */
        this["dd_z"] = function() {
          return window["ddAnalyzerData"]["hdn"] = !!document["hidden"], "hdn";
        };
        /**
         * @return {?}
         */
        this["dd_A"] = function() {
          return window["ddAnalyzerData"]["awe"] = !!window["awesomium"], "awe";
        };
        /**
         * @return {?}
         */
        this["dd_B"] = function() {
          return window["ddAnalyzerData"]["geb"] = !!window["geb"], "geb";
        };
        /**
         * @return {?}
         */
        this["dd_C"] = function() {
          return "domAutomation" in window || "domAutomationController" in window ? window["ddAnalyzerData"]["dat"] = true : window["ddAnalyzerData"]["dat"] = false, "dat";
        };
        /**
         * @return {?}
         */
        this["dd_D"] = function() {
          return void 0 === window["navigator"]["mediaDevices"] ? window["ddAnalyzerData"]["med"] = "NA" : "object" == typeof window["navigator"]["mediaDevices"] ? window["ddAnalyzerData"]["med"] = "defined" : window["ddAnalyzerData"]["med"] = "NA", "med";
        };
        /**
         * @return {?}
         */
        this["dd_E"] = function() {
          try {
            var elem = document["createElement"]("audio");
            var _0x5d29f6 = MediaSource || WebKitMediaSource;
            window["ddAnalyzerData"]["aco"] = elem["canPlayType"]('audio/ogg; codecs="vorbis"');
            window["ddAnalyzerData"]["acots"] = _0x5d29f6["isTypeSupported"]('audio/ogg; codecs="vorbis"');
            window["ddAnalyzerData"]["acmp"] = elem["canPlayType"]("audio/mpeg;");
            window["ddAnalyzerData"]["acmpts"] = _0x5d29f6["isTypeSupported"]('audio/mpeg;"');
            window["ddAnalyzerData"]["acw"] = elem["canPlayType"]('audio/wav; codecs="1"');
            window["ddAnalyzerData"]["acwts"] = _0x5d29f6["isTypeSupported"]('audio/wav; codecs="1"');
            window["ddAnalyzerData"]["acma"] = elem["canPlayType"]("audio/x-m4a;");
            window["ddAnalyzerData"]["acmats"] = _0x5d29f6["isTypeSupported"]("audio/x-m4a;");
            window["ddAnalyzerData"]["acaa"] = elem["canPlayType"]("audio/aac;");
            window["ddAnalyzerData"]["acaats"] = _0x5d29f6["isTypeSupported"]("audio/aac;");
            window["ddAnalyzerData"]["ac3"] = elem["canPlayType"]("audio/3gpp;");
            window["ddAnalyzerData"]["ac3ts"] = _0x5d29f6["isTypeSupported"]("audio/3gpp;");
            window["ddAnalyzerData"]["acf"] = elem["canPlayType"]("audio/flac;");
            window["ddAnalyzerData"]["acfts"] = _0x5d29f6["isTypeSupported"]("audio/flac;");
            window["ddAnalyzerData"]["acmp4"] = elem["canPlayType"]("audio/mp4;");
            window["ddAnalyzerData"]["acmp4ts"] = _0x5d29f6["isTypeSupported"]("audio/mp4;");
            window["ddAnalyzerData"]["acmp3"] = elem["canPlayType"]("audio/mp3;");
            window["ddAnalyzerData"]["acmp3ts"] = _0x5d29f6["isTypeSupported"]("audio/mp3;");
            window["ddAnalyzerData"]["acwm"] = elem["canPlayType"]("audio/webm;");
            window["ddAnalyzerData"]["acwmts"] = _0x5d29f6["isTypeSupported"]("audio/webm;");
            /** @type {boolean} */
            window["ddAnalyzerData"]["ocpt"] = -1 === elem["canPlayType"]["toString"]()["indexOf"]("canPlayType");
          } catch (_0x11bf52) {
            /** @type {string} */
            window["ddAnalyzerData"]["aco"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acmp"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acw"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acma"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acaa"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["ac3"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acf"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acmp4"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acmp3"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acwm"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acots"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acmpts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acwts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acmats"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acaats"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["ac3ts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acfts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acmp4ts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acmp3ts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acwmts"] = "NA";
          }
          return "aco";
        };
        /**
         * @return {?}
         */
        this["dd_F"] = function() {
          try {
            var elem = document["createElement"]("video");
            var _0x5d29f6 = MediaSource || WebKitMediaSource;
            window["ddAnalyzerData"]["vco"] = elem["canPlayType"]('video/ogg; codecs="theora"');
            window["ddAnalyzerData"]["vcots"] = _0x5d29f6["isTypeSupported"]('video/ogg; codecs="theora"');
            window["ddAnalyzerData"]["vch"] = elem["canPlayType"]('video/mp4; codecs="avc1.42E01E"');
            window["ddAnalyzerData"]["vchts"] = _0x5d29f6["isTypeSupported"]('video/mp4; codecs="avc1.42E01E"');
            window["ddAnalyzerData"]["vcw"] = elem["canPlayType"]('video/webm; codecs="vp8, vorbis"');
            window["ddAnalyzerData"]["vcwts"] = _0x5d29f6["isTypeSupported"]('video/webm; codecs="vp8, vorbis"');
            window["ddAnalyzerData"]["vc3"] = elem["canPlayType"]("video/3gpp;");
            window["ddAnalyzerData"]["vc3ts"] = _0x5d29f6["isTypeSupported"]("video/3gpp;");
            window["ddAnalyzerData"]["vcmp"] = elem["canPlayType"]("video/mpeg;");
            window["ddAnalyzerData"]["vcmpts"] = _0x5d29f6["isTypeSupported"]("video/mpeg");
            window["ddAnalyzerData"]["vcq"] = elem["canPlayType"]("video/quicktime;");
            window["ddAnalyzerData"]["vcqts"] = _0x5d29f6["isTypeSupported"]("video/quicktime;");
            window["ddAnalyzerData"]["vc1"] = elem["canPlayType"]('video/mp4; codecs="av01.0.08M.08"');
            window["ddAnalyzerData"]["vc1ts"] = _0x5d29f6["isTypeSupported"]('video/;mp4; codecs="av01.0.08M.08"');
          } catch (_0x54a823) {
            /** @type {string} */
            window["ddAnalyzerData"]["vco"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vch"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vcw"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vc3"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vcmp"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vcq"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vc1"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vcots"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vchts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vcwts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vc3ts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vcmpts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vcqts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vc1ts"] = "NA";
          }
          return "vco";
        };
        /**
         * @return {undefined}
         */
        this["dd_U"] = function() {
          try {
            var JSON3 = runInContext();
            var gl = document["createElement"]("canvas")["getContext"]("webgl");
            var info = gl["getExtension"]("WEBGL_debug_renderer_info");
            window["ddAnalyzerData"]["glvd"] = gl["getParameter"](info["UNMASKED_VENDOR_WEBGL"]);
            window["ddAnalyzerData"]["glrd"] = gl["getParameter"](info["UNMASKED_RENDERER_WEBGL"]);
            /** @type {number} */
            window["ddAnalyzerData"]["tagpu"] = runInContext() - JSON3;
          } catch (_0x411a3a) {
            /** @type {string} */
            window["ddAnalyzerData"]["glrd"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["glvd"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["tagpu"] = "NA";
          }
        };
        /**
         * @return {undefined}
         */
        this["dd_G"] = function() {
          window["ddAnalyzerData"]["dvm"] = navigator["deviceMemory"] || "NA";
        };
        /**
         * @return {undefined}
         */
        this["dd_H"] = function() {
          window["ddAnalyzerData"]["sqt"] = window["external"] && window["external"]["toString"] && window["external"]["toString"]()["indexOf"]("Sequentum") > -1;
        };
        /**
         * @return {?}
         */
        this["dd_K"] = function() {
          if (null !== document["body"] && void 0 !== document["body"]) {
            try {
              var el = document["createElement"]("div");
              el["setAttribute"]("id", "dpi");
              el["setAttribute"]("style", "height: 1in; width: 1in; left: 100%; position: fixed; top: 100%");
              document["body"]["appendChild"](el);
              var table = document["getElementById"]("dpi");
              if (!table) {
                return window["ddAnalyzerData"]["sz"] = -2, "sz";
              }
              /** @type {number} */
              var value = screen["width"] / table["offsetWidth"] || -1;
              /** @type {number} */
              var type = screen["height"] / table["offsetHeight"] || -1;
              document["body"]["removeChild"](el);
              window["ddAnalyzerData"]["sz"] = Math["sqrt"](Math["pow"](value, 2) + Math["pow"](type, 2));
            } catch (_0x236f23) {
            }
          } else {
            /** @type {number} */
            window["ddAnalyzerData"]["sz"] = -1;
          }
          return "sz";
        };
        /**
         * @return {?}
         */
        this["dd_I"] = function() {
          try {
            window["ddAnalyzerData"]["so"] = window["screen"]["orientation"]["type"];
          } catch (_0x4482e6) {
            try {
              window["ddAnalyzerData"]["so"] = window["screen"]["msOrientation"];
            } catch (_0x4aef6e) {
              return window["ddAnalyzerData"]["so"] = "NA", "so";
            }
          }
          return "so";
        };
        /**
         * @return {?}
         */
        this["dd_J"] = function() {
          return 0 === window["orientation"] ? window["ddAnalyzerData"]["wo"] = 0 : 90 === window["orientation"] ? window["ddAnalyzerData"]["wo"] = 90 : 180 === window["orientation"] ? window["ddAnalyzerData"]["wo"] = 180 : -90 === window["orientation"] ? window["ddAnalyzerData"]["wo"] = -90 : window["ddAnalyzerData"]["wo"] = "NA", "wo";
        };
        /**
         * @return {?}
         */
        this["dd_Z"] = function() {
          return setInterval(function() {
            try {
              if (void 0 !== document["getElementsByClassName"]) {
                if (document["getElementsByClassName"]("-web-scraper-selection-active")["length"] > 0 || document["getElementsByClassName"]("-web-scraper-img-on-top")["length"] > 0) {
                  if (true !== window["ddAnalyzerData"]["ewsi"]) {
                    /** @type {boolean} */
                    window["ddAnalyzerData"]["ewsi"] = true;
                    dispatchEvent("asyncChallengeFinished");
                  }
                } else {
                  /** @type {boolean} */
                  window["ddAnalyzerData"]["ewsi"] = false;
                }
              }
            } catch (_0x202403) {
              /** @type {string} */
              window["ddAnalyzerData"]["ewsi"] = "error";
            }
          }, 2000), "ewsi";
        };
        /**
         * @return {?}
         */
        this["dd_L"] = function() {
          return window["ddAnalyzerData"]["wbd"] = false, navigator["webdriver"] && (window["ddAnalyzerData"]["wbd"] = true), window["ddAnalyzerData"]["wbdm"] = false, void 0 !== window["Object"] && "function" == typeof Object["getOwnPropertyDescriptor"] && (window["ddAnalyzerData"]["wbdm"] = !!Object["getOwnPropertyDescriptor"](navigator["__proto__"], "webdriver")), "wbd";
        };
        /**
         * @return {undefined}
         */
        this["dd_N"] = function() {
          /** @type {boolean} */
          window["ddAnalyzerData"]["ecpc"] = !!window["process"];
          if ("undefined" != typeof window && "object" == typeof window["process"] && "renderer" === window["process"]["type"]) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["ecpc"] = true;
          }
          if (void 0 !== options && "object" == typeof options["versions"] && options["versions"]["electron"]) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["ecpc"] = true;
          }
          if (-1 !== window["close"]["toString"]()["indexOf"]("ELECTRON")) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["ecpc"] = true;
          }
        };
        /**
         * @return {?}
         */
        this["dd_M"] = function() {
          if (window["ddAnalyzerData"]["wdw"] = true, navigator["userAgent"] && navigator["userAgent"]["toLowerCase"]()["indexOf"]("chrome") >= 0 && !window["chrome"] && (window["ddAnalyzerData"]["wdw"] = false), window["chrome"]) {
            /** @type {string} */
            var css = "";
            var key;
            for (key in window["chrome"]) {
              /** @type {string} */
              css = css + key;
            }
            if (void 0 !== window["btoa"]) {
              /** @type {string} */
              window["ddAnalyzerData"]["cokys"] = btoa(css) + "L=";
            }
          }
          return "wdw";
        };
        /**
         * @return {?}
         */
        this["dd_V"] = function() {
          return window["ddAnalyzerData"]["prm"] = true, void 0 !== navigator["permissions"] && void 0 !== navigator["permissions"]["query"] && navigator["permissions"]["query"]({
            "name" : "notifications"
          })["then"](function(usStates) {
            if ("undefined" != typeof Notification && "denied" == Notification["permission"] && "prompt" == usStates["state"]) {
              /** @type {boolean} */
              window["ddAnalyzerData"]["prm"] = false;
            }
          }), "prm";
        };
        /**
         * @return {?}
         */
        this["dd_O"] = function() {
          return window["ddAnalyzerData"]["lgs"] = "" !== navigator["languages"], window["Object"] && window["Object"]["getOwnPropertyDescriptor"] && (window["ddAnalyzerData"]["lgsod"] = !!Object["getOwnPropertyDescriptor"](navigator, "languages")), "lgs";
        };
        /**
         * @return {undefined}
         */
        this["dd_P"] = function() {
          /**
           * @param {?} data
           * @return {?}
           */
          function init(data) {
            return "function" != typeof data || true === navigator["webdriver"] ? data : data["toString"]()["match"](/\{\s*\[native code\]\s*\}$/m) && data["toString"]["toString"]()["match"](/\{\s*\[native code\]\s*\}$/m) ? function() {
              if (_0x44a1ac <= 0) {
                return data["apply"](this, arguments);
              }
              if (_0x44a1ac--, get() || !dest) {
                return data["apply"](this, arguments);
              }
              try {
                null[0];
              } catch (stackToIndex) {
                if ("string" != typeof stackToIndex["stack"]) {
                  return data["apply"](this, arguments);
                }
                var props = stackToIndex["stack"]["split"]("\n");
                if (_0x113a94) {
                  /** @type {boolean} */
                  var _0xcf4dbc = false;
                  /** @type {boolean} */
                  var _0x1564f4 = false;
                  try {
                    /** @type {boolean} */
                    _0xcf4dbc = !!props[2]["match"](dt);
                    /** @type {boolean} */
                    _0x1564f4 = !!props[2]["match"](classnameRE);
                    if (_0xcf4dbc) {
                      /** @type {boolean} */
                      window["ddAnalyzerData"]["cfpp"] = true;
                      dispatchEvent("asyncChallengeFinished");
                    }
                    if (_0x1564f4) {
                      /** @type {boolean} */
                      window["ddAnalyzerData"]["cfcpw"] = true;
                      dispatchEvent("asyncChallengeFinished");
                    }
                  } catch (_0x4ba0e1) {
                  }
                } else {
                  if (_0x2da1e8) {
                    /** @type {boolean} */
                    var _0x2c26f4 = false;
                    /** @type {boolean} */
                    var _0x30d412 = false;
                    try {
                      /** @type {boolean} */
                      _0x2c26f4 = !!props[1]["match"](B1804);
                      /** @type {boolean} */
                      _0x30d412 = !!props[1]["match"](dt);
                      if (_0x2c26f4) {
                        /** @type {boolean} */
                        window["ddAnalyzerData"]["cffpw"] = true;
                        dispatchEvent("asyncChallengeFinished");
                      }
                      if (_0x30d412) {
                        /** @type {boolean} */
                        window["ddAnalyzerData"]["cfppf"] = true;
                        dispatchEvent("asyncChallengeFinished");
                      }
                    } catch (_0x115cef) {
                    }
                  } else {
                    if (cb) {
                      /** @type {boolean} */
                      var _0x3de599 = false;
                      /** @type {boolean} */
                      var _0x3f25db = false;
                      try {
                        if (props["length"] > 2) {
                          /** @type {boolean} */
                          _0x3de599 = !!props[2]["match"](revvedRx);
                          if (props["length"] > 4) {
                            /** @type {boolean} */
                            _0x3de599 = _0x3de599 || !!props[4]["match"](revvedRx);
                          }
                          var EVT_NOTE_OFF = Math["min"](props["length"], 5);
                          /** @type {number} */
                          var type = 2;
                          for (; type < EVT_NOTE_OFF; type++) {
                            /** @type {boolean} */
                            _0x3f25db = !!props[type]["match"](match);
                          }
                        }
                        if (_0x3de599) {
                          /** @type {boolean} */
                          window["ddAnalyzerData"]["cfwpw"] = true;
                          dispatchEvent("asyncChallengeFinished");
                        }
                        if (_0x3f25db) {
                          /** @type {boolean} */
                          window["ddAnalyzerData"]["slsf"] = true;
                          dispatchEvent("asyncChallengeFinished");
                        }
                      } catch (_0x4d73f7) {
                      }
                    }
                  }
                }
              }
              return data["apply"](this, arguments);
            } : data;
          }
          /** @type {boolean} */
          var dest = true;
          /** @type {boolean} */
          var _0x113a94 = !!navigator["deviceMemory"];
          /** @type {boolean} */
          var _0x2da1e8 = void 0 !== window["mozInnerScreenX"];
          /** @type {boolean} */
          var cb = "function" == typeof window["webkitURL"];
          /** @type {!RegExp} */
          var dt = new RegExp("[p_]{3}up[tep]{4}er[ae_v]{4}lua[noti]{4}");
          /** @type {!RegExp} */
          var classnameRE = new RegExp("__p[aly]{3}wr[w]{3}t_e[lva]{3}u");
          /** @type {!RegExp} */
          var B1804 = new RegExp("@de[gbu]{4}er e[avl]{3}");
          /** @type {!RegExp} */
          var revvedRx = new RegExp("ca[Flu]{4}nc[iot]{3}nOn");
          /** @type {!RegExp} */
          var match = new RegExp("ev[la]{2}uat[aeJ]{3}va[cS]{2}riptF[cun]{3}ti");
          /** @type {number} */
          var _0x44a1ac = 50;
          try {
            document["getElementById"] = init(document["getElementById"]);
            document["getElementsByTagName"] = init(document["getElementsByTagName"]);
            document["querySelector"] = init(document["querySelector"]);
            document["querySelectorAll"] = init(document["querySelectorAll"]);
            if (XMLSerializer && XMLSerializer["prototype"] && XMLSerializer["prototype"]["serializeToString"]) {
              XMLSerializer["prototype"]["serializeToString"] = init(XMLSerializer["prototype"]["serializeToString"]);
            }
            setTimeout(function() {
              /** @type {boolean} */
              dest = false;
            }, 5000);
          } catch (_0x3286e5) {
          }
        };
        /**
         * @return {undefined}
         */
        this["dd_Q"] = function() {
          /** @type {boolean} */
          window["ddAnalyzerData"]["svde"] = !!window["SVGDiscardElement"];
          /** @type {boolean} */
          window["ddAnalyzerData"]["vpbq"] = !!(window["HTMLVideoElement"] && window["HTMLVideoElement"]["prototype"] && window["HTMLVideoElement"]["prototype"]["getVideoPlaybackQuality"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["xr"] = !!navigator["xr"];
          /** @type {boolean} */
          window["ddAnalyzerData"]["bgav"] = !!(window["Bluetooth"] && Bluetooth["prototype"] && Bluetooth["prototype"]["getAvailability"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["rri"] = !!(window["RTCPeerConnection"] && RTCPeerConnection["prototype"] && RTCPeerConnection["prototype"]["restartIce"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["idfr"] = !!(window["Intl"] && Intl["DateTimeFormat"] && Intl["DateTimeFormat"]["prototype"] && Intl["DateTimeFormat"]["prototype"]["formatRange"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["ancs"] = !!window["Animation"];
          /** @type {boolean} */
          window["ddAnalyzerData"]["inlc"] = !(!window["Intl"] || !Intl["Locale"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["cgca"] = !!(window["CanvasRenderingContext2D"] && CanvasRenderingContext2D["prototype"] && CanvasRenderingContext2D["prototype"]["getContextAttributes"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["inlf"] = !(!window["Intl"] || !Intl["ListFormat"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["tecd"] = !!window["TextEncoderStream"];
          /** @type {boolean} */
          window["ddAnalyzerData"]["sbct"] = !!(window["SourceBuffer"] && SourceBuffer["prototype"] && SourceBuffer["prototype"]["changeType"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["aflt"] = !!(window["Array"] && Array["prototype"] && Array["prototype"]["flat"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["rgp"] = !!(window["RTCRtpSender"] && RTCRtpSender["prototype"] && RTCRtpSender["prototype"]["getParameters"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["bint"] = !!window["BigInt"];
        };
        /**
         * @return {undefined}
         */
        this["dd_R"] = function() {
          /**
           * @param {?} altKey
           * @return {undefined}
           */
          function onKeyDown(altKey) {
            if (altKey) {
              if (get()) {
                /** @type {boolean} */
                window["ddAnalyzerData"]["slat"] = true;
              } else {
                /** @type {boolean} */
                window["ddAnalyzerData"]["slat"] = true;
                /** @type {boolean} */
                window["ddAnalyzerData"]["slevt"] = true;
                dispatchEvent("asyncChallengeFinished");
              }
            }
          }
          /** @type {!Array} */
          var sections = ["__driver_evaluate", "__webdriver_evaluate", "__selenium_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__selenium_unwrapped", "__fxdriver_unwrapped", "_Selenium_IDE_Recorder", "_selenium", "calledSelenium", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor", "webdriver", "__webdriverFunc", "domAutomation", "domAutomationController", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "__webdriver_script_fn", 
          "__webdriver_script_func", "__webdriver_script_function", "_WEBDRIVER_ELEM_CACHE"];
          /** @type {!Array} */
          var classes = ["driver-evaluate", "webdriver-evaluate", "selenium-evaluate", "webdriverCommand", "webdriver-evaluate-response"];
          if ("function" == typeof document["addEventListener"]) {
            /** @type {number} */
            var j = 0;
            for (; j < classes["length"]; j++) {
              document["addEventListener"](classes[j], onKeyDown);
            }
          }
          setTimeout(function() {
            if ("function" == typeof document["removeEventListener"]) {
              /** @type {number} */
              var j = 0;
              for (; j < classes["length"]; j++) {
                document["removeEventListener"](classes[j], onKeyDown);
              }
            }
          }, 10000);
          /** @type {number} */
          var chat_retry = setInterval(function() {
            /** @type {number} */
            var i = 0;
            for (; i < sections["length"]; i++) {
              if ((sections[i] in window || sections[i] in document) && !get()) {
                return window["ddAnalyzerData"]["slat"] = true, dispatchEvent("asyncChallengeFinished"), clearInterval(chat_retry), "slat";
              }
            }
            if ("undefined" != typeof Object && "function" == typeof Object["keys"]) {
              var params = Object["keys"](document);
              /** @type {number} */
              i = 0;
              for (; i < params["length"]; i++) {
                var p = params[i];
                if (p && p["indexOf"]("$cdc_") > -1 && !get()) {
                  return window["ddAnalyzerData"]["slat"] = true, dispatchEvent("asyncChallengeFinished"), clearInterval(chat_retry), "slat";
                }
                try {
                  if (document[p] && void 0 === document[p]["window"] && void 0 !== document[p]["cache_"]) {
                    var htmlEntitiesMap;
                    for (htmlEntitiesMap in document[p]["cache_"]) {
                      if (htmlEntitiesMap && htmlEntitiesMap["match"](/[\d\w]{8}\-[\d\w]{4}\-[\d\w]{4}\-[\d\w]{4}\-[\d\w]{12}/)) {
                        if (!get()) {
                          window["ddAnalyzerData"]["slmk"] = p["substr"](0, 64);
                          /** @type {boolean} */
                          window["ddAnalyzerData"]["slat"] = true;
                          dispatchEvent("asyncChallengeFinished");
                          clearInterval(chat_retry);
                        }
                      }
                    }
                  }
                } catch (_0x54efcb) {
                }
              }
            }
          }, 500);
          setTimeout(function() {
            clearInterval(chat_retry);
          }, 10000);
        };
        /**
         * @return {undefined}
         */
        this["dd_S"] = function() {
          /** @type {boolean} */
          window["ddAnalyzerData"]["spwn"] = !!window["spawn"];
          /** @type {boolean} */
          window["ddAnalyzerData"]["emt"] = !!window["emit"];
          /** @type {boolean} */
          window["ddAnalyzerData"]["bfr"] = !!window["Buffer"];
        };
        /**
         * @return {?}
         */
        this["dd_T"] = function() {
          return void 0 !== window["console"] && "function" == typeof window["console"]["debug"] && (window["ddAnalyzerData"]["dbov"] = !!("" + window["console"]["debug"])["match"](/[\)\( ]{3}[>= ]{3}\{\n[ r]{9}etu[n r]{3}n[lu]{3}/)), "dbov";
        };
        /**
         * @return {undefined}
         */
        this["checkMousePosition"] = function() {
          /**
           * @param {(Event|number)} event
           * @return {undefined}
           */
          function listen(event) {
            if (event["isTrusted"]) {
              if (lastPos && event["timeStamp"] && (null === window["ddAnalyzerData"]["tbce"] || void 0 === window["ddAnalyzerData"]["tbce"])) {
                /** @type {number} */
                window["ddAnalyzerData"]["tbce"] = parseInt(event["timeStamp"] - lastPos);
                try {
                  this["dataDomeTools"]["removeEventListener"](window, "mousedown", listen);
                  this["dataDomeTools"]["removeEventListener"](window, "mouseup", listen);
                } catch (_0x4012f0) {
                }
              }
              if (event["timeStamp"]) {
                lastPos = event["timeStamp"];
              }
            }
          }
          var lastPos;
          this["dataDomeTools"]["addEventListener"](window, "mousemove", this["getMousePosition"]);
          this["dataDomeTools"]["addEventListener"](window, "mousedown", listen);
          this["dataDomeTools"]["addEventListener"](window, "mouseup", listen);
        };
        /**
         * @param {!Object} e
         * @return {?}
         */
        this["getMousePosition"] = function(e) {
          try {
            window["ddAnalyzerData"]["mp_cx"] = e["clientX"];
            window["ddAnalyzerData"]["mp_cy"] = e["clientY"];
            window["ddAnalyzerData"]["mp_tr"] = e["isTrusted"];
            window["ddAnalyzerData"]["mp_mx"] = e["movementX"];
            window["ddAnalyzerData"]["mp_my"] = e["movementY"];
            window["ddAnalyzerData"]["mp_sx"] = e["screenX"];
            window["ddAnalyzerData"]["mp_sy"] = e["screenY"];
          } catch (_0x2b48cf) {
          }
          return "mp";
        };
        /**
         * @return {?}
         */
        this["dd_aa"] = function() {
          /** @type {string} */
          var x = "jnhgnonknehpejjnehehllkliplmbmhn";
          /** @type {!Array} */
          var PL$13 = ["images/icon16.png"];
          /** @type {number} */
          var PL$17 = 0;
          for (; PL$17 < PL$13["length"]; PL$17++) {
            /** @type {string} */
            var left = "chrome-extension://";
            done(left = left["concat"](x, "/", PL$13[PL$17]), function(canCreateDiscussions) {
              if (canCreateDiscussions) {
                if (true !== window["ddAnalyzerData"]["wwsi"]) {
                  /** @type {boolean} */
                  window["ddAnalyzerData"]["wwsi"] = true;
                  dispatchEvent("asyncChallengeFinished");
                }
              } else {
                /** @type {boolean} */
                window["ddAnalyzerData"]["wwsi"] = false;
              }
            });
          }
          return "wwsi";
        };
      };
      /** @type {function(): undefined} */
      window["exports"] = exports;
      Iconv = require("./../common/DataDomeTools");
      /**
       * @return {undefined}
       */
      exports = function() {
        /**
         * @return {?}
         */
        function get() {
          return !!(window["ddAnalyzerData"]["cfpp"] || window["ddAnalyzerData"]["slat"] || window["ddAnalyzerData"]["cfcpw"] || window["ddAnalyzerData"]["cffpw"] || window["ddAnalyzerData"]["cfwpw"] || window["ddAnalyzerData"]["cfppf"] || window["ddAnalyzerData"]["slsf"]);
        }
        /**
         * @param {string} event
         * @return {undefined}
         */
        function dispatchEvent(event) {
          if (void 0 !== window["Event"] && "function" == typeof window["dispatchEvent"]) {
            /** @type {!Event} */
            var e = new Event(event);
            window["dispatchEvent"](e);
          }
        }
        /**
         * @return {?}
         */
        function runInContext() {
          return window["performance"] && "function" == typeof performance["now"] ? performance["now"]() : (new Date)["getTime"]();
        }
        /**
         * @param {?} url
         * @param {!Function} assertions
         * @return {undefined}
         */
        function done(url, assertions) {
          /** @type {!XMLHttpRequest} */
          var xhr = new XMLHttpRequest;
          /**
           * @return {undefined}
           */
          xhr["onreadystatechange"] = function() {
            try {
              if (4 == xhr["readyState"] && 200 == xhr["status"]) {
                assertions(xhr["responseText"]);
              }
            } catch (_0x1cd101) {
            }
          };
          xhr["open"]("GET", url, true);
          xhr["send"](null);
        }
        this["dataDomeTools"] = new Iconv;
        /**
         * @return {?}
         */
        this["process"] = function() {
          return window["ddAnalyzerData"] = {}, this["checkMousePosition"](), this["asynchronizeTask"](this["dd_a"]), this["asynchronizeTask"](this["dd_b"]), this["asynchronizeTask"](this["dd_c"]), this["asynchronizeTask"](this["dd_d"]), this["asynchronizeTask"](this["dd_e"]), this["asynchronizeTask"](this["dd_f"]), this["asynchronizeTask"](this["dd_g"]), this["asynchronizeTask"](this["dd_h"]), this["asynchronizeTask"](this["dd_i"]), this["asynchronizeTask"](this["dd_j"]), this["asynchronizeTask"](this["dd_k"]), 
          this["asynchronizeTask"](this["dd_l"]), this["asynchronizeTask"](this["dd_m"]), this["asynchronizeTask"](this["dd_n"]), this["asynchronizeTask"](this["dd_o"]), this["asynchronizeTask"](this["dd_p"]), this["asynchronizeTask"](this["dd_q"]), this["asynchronizeTask"](this["dd_r"]), this["asynchronizeTask"](this["dd_s"]), this["asynchronizeTask"](this["dd_t"]), this["asynchronizeTask"](this["dd_u"]), this["asynchronizeTask"](this["dd_v"]), this["asynchronizeTask"](this["dd_w"]), this["asynchronizeTask"](this["dd_x"]), 
          this["asynchronizeTask"](this["dd_y"]), this["asynchronizeTask"](this["dd_z"]), this["asynchronizeTask"](this["dd_A"]), this["asynchronizeTask"](this["dd_B"]), this["asynchronizeTask"](this["dd_C"]), this["asynchronizeTask"](this["dd_D"]), this["asynchronizeTask"](this["dd_E"]), this["asynchronizeTask"](this["dd_F"]), this["asynchronizeTask"](this["dd_G"]), this["asynchronizeTask"](this["dd_H"]), this["asynchronizeTask"](this["dd_I"]), this["asynchronizeTask"](this["dd_J"]), this["asynchronizeTask"](this["dd_K"]), 
          this["asynchronizeTask"](this["dd_L"]), this["asynchronizeTask"](this["dd_M"]), this["asynchronizeTask"](this["dd_N"]), this["asynchronizeTask"](this["dd_O"]), this["asynchronizeTask"](this["dd_P"]), this["asynchronizeTask"](this["dd_Q"]), this["asynchronizeTask"](this["dd_R"]), this["asynchronizeTask"](this["dd_S"]), this["asynchronizeTask"](this["dd_T"]), window["navigator"] && -1 === navigator["userAgent"]["toLowerCase"]()["indexOf"]("android") && -1 === navigator["userAgent"]["toLowerCase"]()["indexOf"]("iphone") && 
          -1 === navigator["userAgent"]["toLowerCase"]()["indexOf"]("ipad") && (this["asynchronizeTask"](this["dd_U"]), this["asynchronizeTask"](this["dd_V"]), this["asynchronizeTask"](this["dd_W"]), this["asynchronizeTask"](this["dd_X"]), this["asynchronizeTask"](this["dd_Y"]), this["asynchronizeTask"](this["dd_Z"])), "captcha" == window["dataDomeOptions"]["ddResponsePage"] && "8FE0CF7F8AB30EC588599D8046ED0E" != window["ddjskey"] && this["asynchronizeTask"](this["dd_aa"]), window["ddAnalyzerData"];
          /** @type {null} */
          window["ddAnalyzerData"]["plg"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["plgod"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["pltod"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["br_h"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["br_w"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["br_oh"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["br_ow"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["jsf"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cvs"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["phe"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["nm"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["sln"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["lo"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["lb"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mp_cx"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mp_cy"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mp_mx"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mp_my"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mp_sx"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mp_sy"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mp_tr"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["hc"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["rs_h"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["rs_w"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["rs_cd"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ua"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["lg"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["pr"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ars_h"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ars_w"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["tz"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["tzp"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["str_ss"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["str_ls"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["str_idb"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["str_odb"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["abk"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ts_mtp"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ts_tec"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ts_tsa"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["hl"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["so"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wo"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["sz"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["rtc"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wbd"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wbdm"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wdif"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wdifts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wdifrm"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wdw"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["prm"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["lgs"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["lgsod"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["usb"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vnd"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["bid"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mmt"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["plu"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["hdn"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["awe"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["geb"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["dat"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["eva"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["med"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ocpt"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["aco"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acmp"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acw"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acma"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acaa"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ac3"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acf"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acmp4"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acmp3"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acwm"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acots"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acmpts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acwts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acmats"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acaats"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ac3ts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acfts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acmp4ts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acmp3ts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["acwmts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vco"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vch"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vcw"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vc3"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vcmp"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vcq"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vc1"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vcots"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vchts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vcwts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vc3ts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vcmpts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vcqts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vc1ts"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["glrd"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["glvd"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cfpp"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cfppf"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cfcpw"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cffpw"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cfwpw"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["dvm"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["sqt"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["bgav"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["rri"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["idfr"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ancs"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["inlc"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cgca"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["inlf"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["tecd"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["sbct"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["aflt"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["rgp"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["bint"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mqmw"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mqmh"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mqol"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["mqop"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["xr"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["vpbq"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["svde"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["slat"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["slsf"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["spwn"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["emt"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["bfr"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ttst"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ewsi"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["wwsi"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["slmk"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["dbov"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ifov"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["cokys"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["crt"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["tagpu"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["tbce"] = null;
          /** @type {null} */
          window["ddAnalyzerData"]["ecpc"] = null;
        };
        /**
         * @param {?} saveNotifs
         * @param {?} notifications
         * @param {?} timeToFadeIn
         * @return {undefined}
         */
        this["asynchronizeTask"] = function(saveNotifs, notifications, timeToFadeIn) {
          setTimeout(function() {
            if (!window["ddAnalyzerData"]["ttst"]) {
              /** @type {number} */
              window["ddAnalyzerData"]["ttst"] = 0;
            }
            var JSON3 = runInContext();
            try {
              saveNotifs(notifications);
            } catch (_0x16eff2) {
            } finally {
              window["ddAnalyzerData"]["ttst"] += runInContext() - JSON3;
            }
          }, timeToFadeIn);
        };
        /**
         * @return {undefined}
         */
        this["clean"] = function() {
          this["dataDomeTools"]["removeEventListener"](window, "mousemove", this["getMousePosition"]);
          this["dataDomeTools"]["safeDeleteVar"](window["ddAnalyzerData"]);
        };
        /**
         * @return {undefined}
         */
        this["dd_a"] = function() {
          try {
            document["createElement"](34);
          } catch (stackToIndex) {
            try {
              var cache = stackToIndex["stack"]["split"]("\n");
              if (cache["length"] >= 2) {
                /** @type {boolean} */
                window["ddAnalyzerData"]["ifov"] = !!cache[1]["match"](/Ob[cej]{3}t\.a[lp]{3}y[\(< ]{3}an[oynm]{5}us>/);
              } else {
                /** @type {string} */
                window["ddAnalyzerData"]["ifov"] = "e1";
              }
            } catch (_0x2e0e6e) {
              /** @type {string} */
              window["ddAnalyzerData"]["ifov"] = "e2";
            }
          }
        };
        /**
         * @return {undefined}
         */
        this["dd_b"] = function() {
          try {
            /** @type {boolean} */
            window["ddAnalyzerData"]["wdifts"] = false;
            /** @type {boolean} */
            window["ddAnalyzerData"]["wdifrm"] = false;
            /** @type {boolean} */
            window["ddAnalyzerData"]["wdif"] = false;
            var el = document["createElement"]("iframe");
            if (el["srcdoc"] = "/**/", el["setAttribute"]("style", "display: none;"), document && document["head"]) {
              if (document["head"]["appendChild"](el), void 0 !== window["Object"] && void 0 !== Object["getOwnPropertyDescriptors"]) {
                var innerFrame = Object["getOwnPropertyDescriptors"](HTMLIFrameElement["prototype"]);
                if (navigator["userAgent"]["indexOf"]("Chrome") > -1 && "function get contentWindow() { [native code] }" !== innerFrame["contentWindow"]["get"]["toString"]()) {
                  /** @type {boolean} */
                  window["ddAnalyzerData"]["wdifts"] = true;
                }
              }
              if (el["contentWindow"] === window) {
                /** @type {boolean} */
                window["ddAnalyzerData"]["wdifrm"] = true;
              }
              if (el["contentWindow"]["navigator"]["webdriver"]) {
                /** @type {boolean} */
                window["ddAnalyzerData"]["wdif"] = true;
              }
            }
          } catch (_0x4dccfa) {
            /** @type {string} */
            window["ddAnalyzerData"]["wdif"] = "err";
          } finally {
            if (el && el["parentElement"]) {
              el["parentElement"]["removeChild"](el);
            }
          }
        };
        /**
         * @return {?}
         */
        this["dd_c"] = function() {
          return window["ddAnalyzerData"]["br_h"] = Math["max"](document["documentElement"]["clientHeight"], window["innerHeight"] || 0), window["ddAnalyzerData"]["br_w"] = Math["max"](document["documentElement"]["clientWidth"], window["innerWidth"] || 0), window["ddAnalyzerData"]["br_oh"] = window["outerHeight"], window["ddAnalyzerData"]["br_ow"] = window["outerWidth"], "br";
        };
        /**
         * @return {?}
         */
        this["dd_d"] = function() {
          return window["ddAnalyzerData"]["rs_h"] = window["screen"]["height"], window["ddAnalyzerData"]["rs_w"] = window["screen"]["width"], window["ddAnalyzerData"]["rs_cd"] = window["screen"]["colorDepth"], "rs";
        };
        /**
         * @return {?}
         */
        this["dd_h"] = function() {
          return window["ddAnalyzerData"]["ua"] = window["navigator"]["userAgent"], "ua";
        };
        /**
         * @return {?}
         */
        this["dd_X"] = function() {
          try {
            var canvas = document["createElement"]("canvas");
            /** @type {boolean} */
            window["ddAnalyzerData"]["cvs"] = !(!canvas["getContext"] || !canvas["getContext"]("2d"));
          } catch (_0x513de9) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["cvs"] = false;
          }
          return "cvs";
        };
        /**
         * @return {?}
         */
        this["dd_e"] = function() {
          return window["ddAnalyzerData"]["phe"] = !(!window["callPhantom"] && !window["_phantom"]), "phe";
        };
        /**
         * @return {?}
         */
        this["dd_f"] = function() {
          return window["ddAnalyzerData"]["nm"] = !!window["__nightmare"], "nm";
        };
        /**
         * @return {?}
         */
        this["dd_g"] = function() {
          return window["ddAnalyzerData"]["jsf"] = false, (!Function["prototype"]["bind"] || Function["prototype"]["bind"]["toString"]()["replace"](/bind/g, "Error") != Error["toString"]() && void 0 === window["Prototype"]) && (window["ddAnalyzerData"]["jsf"] = true), "jsf";
        };
        /**
         * @return {?}
         */
        this["dd_i"] = function() {
          return window["ddAnalyzerData"]["lg"] = navigator["language"] || navigator["userLanguage"] || navigator["browserLanguage"] || navigator["systemLanguage"] || "", "lg";
        };
        /**
         * @return {?}
         */
        this["dd_j"] = function() {
          return window["ddAnalyzerData"]["pr"] = window["devicePixelRatio"] || "unknown", "pr";
        };
        /**
         * @return {?}
         */
        this["dd_k"] = function() {
          return window["ddAnalyzerData"]["hc"] = navigator["hardwareConcurrency"], "hc";
        };
        /**
         * @return {?}
         */
        this["dd_l"] = function() {
          return screen["availWidth"] && screen["availHeight"] ? (window["ddAnalyzerData"]["ars_h"] = screen["availHeight"], window["ddAnalyzerData"]["ars_w"] = screen["availWidth"]) : (window["ddAnalyzerData"]["ars_h"] = 0, window["ddAnalyzerData"]["ars_w"] = 0), "ars";
        };
        /**
         * @return {?}
         */
        this["dd_m"] = function() {
          return window["ddAnalyzerData"]["tz"] = (new Date)["getTimezoneOffset"](), "tz";
        };
        /**
         * @return {?}
         */
        this["dd_W"] = function() {
          return window["ddAnalyzerData"]["tzp"] = "NA", window["Intl"] && Intl["DateTimeFormat"] && "function" == typeof Intl["DateTimeFormat"]["prototype"]["resolvedOptions"] && (window["ddAnalyzerData"]["tzp"] = Intl["DateTimeFormat"]()["resolvedOptions"]()["timeZone"] || "NA"), "tzp";
        };
        /**
         * @return {?}
         */
        this["dd_n"] = function() {
          try {
            /** @type {boolean} */
            window["ddAnalyzerData"]["str_ss"] = !!window["sessionStorage"];
          } catch (_0x14721f) {
            /** @type {string} */
            window["ddAnalyzerData"]["str_ss"] = "NA";
          }
          try {
            /** @type {boolean} */
            window["ddAnalyzerData"]["str_ls"] = !!window["localStorage"];
          } catch (_0x57e9d6) {
            /** @type {string} */
            window["ddAnalyzerData"]["str_ls"] = "NA";
          }
          try {
            /** @type {boolean} */
            window["ddAnalyzerData"]["str_idb"] = !!window["indexedDB"];
          } catch (_0x2a3089) {
            /** @type {string} */
            window["ddAnalyzerData"]["str_idb"] = "NA";
          }
          try {
            /** @type {boolean} */
            window["ddAnalyzerData"]["str_odb"] = !!window["openDatabase"];
          } catch (_0x4d86b0) {
            /** @type {string} */
            window["ddAnalyzerData"]["str_odb"] = "NA";
          }
          return "str";
        };
        /**
         * @return {?}
         */
        this["dd_o"] = function() {
          try {
            window["ddAnalyzerData"]["plg"] = navigator["plugins"]["length"];
            if (window["Object"] && window["Object"]["getOwnPropertyDescriptor"]) {
              /** @type {boolean} */
              window["ddAnalyzerData"]["plgod"] = !!Object["getOwnPropertyDescriptor"](navigator, "plugins");
            }
          } catch (_0x5a2d4c) {
            /** @type {number} */
            window["ddAnalyzerData"]["plg"] = 0;
          }
          return "plg";
        };
        /**
         * @return {undefined}
         */
        this["dd_p"] = function() {
          if (window["Object"] && window["Object"]["getOwnPropertyDescriptor"]) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["pltod"] = !!Object["getOwnPropertyDescriptor"](navigator, "platform");
          }
        };
        /**
         * @return {?}
         */
        this["dd_q"] = function() {
          var node = document["createElement"]("div");
          /** @type {string} */
          node["innerHTML"] = "&nbsp;";
          /** @type {string} */
          node["className"] = "adsbox";
          try {
            document["body"]["appendChild"](node);
            /** @type {boolean} */
            window["ddAnalyzerData"]["abk"] = 0 === document["getElementsByClassName"]("adsbox")[0]["offsetHeight"];
            document["body"]["removeChild"](node);
          } catch (_0x5414ae) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["abk"] = false;
          }
          return "abk";
        };
        /**
         * @return {?}
         */
        this["dd_r"] = function() {
          /** @type {boolean} */
          window["ddAnalyzerData"]["lb"] = false;
          var undefined;
          var targetLocale = navigator["userAgent"]["toLowerCase"]();
          var dom_implemented = navigator["productSub"];
          if (!("Chrome" !== (undefined = targetLocale["indexOf"]("firefox") >= 0 ? "Firefox" : targetLocale["indexOf"]("opera") >= 0 || targetLocale["indexOf"]("opr") >= 0 ? "Opera" : targetLocale["indexOf"]("chrome") >= 0 ? "Chrome" : targetLocale["indexOf"]("safari") >= 0 ? "Safari" : targetLocale["indexOf"]("trident") >= 0 ? "Internet Explorer" : "Other") && "Safari" !== undefined && "Opera" !== undefined || "20030107" === dom_implemented)) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["lb"] = true;
          }
          var allDataAvailable;
          var index = eval["toString"]()["length"];
          window["ddAnalyzerData"]["eva"] = index;
          if (37 === index && "Safari" !== undefined && "Firefox" !== undefined && "Other" !== undefined) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["lb"] = true;
          } else {
            if (39 === index && "Internet Explorer" !== undefined && "Other" !== undefined) {
              /** @type {boolean} */
              window["ddAnalyzerData"]["lb"] = true;
            } else {
              if (33 === index && "Chrome" !== undefined && "Opera" !== undefined && "Other" !== undefined) {
                /** @type {boolean} */
                window["ddAnalyzerData"]["lb"] = true;
              }
            }
          }
          try {
            throw "a";
          } catch (ob) {
            try {
              ob["toSource"]();
              /** @type {boolean} */
              allDataAvailable = true;
            } catch (_0x51a18c) {
              /** @type {boolean} */
              allDataAvailable = false;
            }
          }
          return allDataAvailable && "Firefox" !== undefined && "Other" !== undefined && (window["ddAnalyzerData"]["lb"] = true), "lb";
        };
        /**
         * @return {?}
         */
        this["dd_s"] = function() {
          /** @type {boolean} */
          window["ddAnalyzerData"]["lo"] = false;
          var button;
          var targetLocale = navigator["userAgent"]["toLowerCase"]();
          var dom_implemented = navigator["oscpu"];
          var createMissingNativeApiListeners = navigator["platform"]["toLowerCase"]();
          return button = targetLocale["indexOf"]("windows phone") >= 0 ? "Windows Phone" : targetLocale["indexOf"]("win") >= 0 ? "Windows" : targetLocale["indexOf"]("android") >= 0 ? "Android" : targetLocale["indexOf"]("linux") >= 0 ? "Linux" : targetLocale["indexOf"]("iphone") >= 0 || targetLocale["indexOf"]("ipad") >= 0 ? "iOS" : targetLocale["indexOf"]("mac") >= 0 ? "Mac" : "Other", ("ontouchstart" in window || navigator["maxTouchPoints"] > 0 || navigator["msMaxTouchPoints"] > 0) && "Windows Phone" !== 
          button && "Android" !== button && "iOS" !== button && "Other" !== button && (window["ddAnalyzerData"]["lo"] = true), void 0 !== dom_implemented && ((dom_implemented = dom_implemented["toLowerCase"]())["indexOf"]("win") >= 0 && "Windows" !== button && "Windows Phone" !== button ? window["ddAnalyzerData"]["lo"] = true : dom_implemented["indexOf"]("linux") >= 0 && "Linux" !== button && "Android" !== button ? window["ddAnalyzerData"]["lo"] = true : dom_implemented["indexOf"]("mac") >= 0 && 
          "Mac" !== button && "iOS" !== button ? window["ddAnalyzerData"]["lo"] = true : 0 === dom_implemented["indexOf"]("win") && 0 === dom_implemented["indexOf"]("linux") && dom_implemented["indexOf"]("mac") >= 0 && "other" !== button && (window["ddAnalyzerData"]["lo"] = true)), createMissingNativeApiListeners["indexOf"]("win") >= 0 && "Windows" !== button && "Windows Phone" !== button ? window["ddAnalyzerData"]["lo"] = true : (createMissingNativeApiListeners["indexOf"]("linux") >= 0 || createMissingNativeApiListeners["indexOf"]("android") >= 
          0 || createMissingNativeApiListeners["indexOf"]("pike") >= 0) && "Linux" !== button && "Android" !== button ? window["ddAnalyzerData"]["lo"] = true : (createMissingNativeApiListeners["indexOf"]("mac") >= 0 || createMissingNativeApiListeners["indexOf"]("ipad") >= 0 || createMissingNativeApiListeners["indexOf"]("ipod") >= 0 || createMissingNativeApiListeners["indexOf"]("iphone") >= 0) && "Mac" !== button && "iOS" !== button ? window["ddAnalyzerData"]["lo"] = true : 0 === createMissingNativeApiListeners["indexOf"]("win") && 
          0 === createMissingNativeApiListeners["indexOf"]("linux") && createMissingNativeApiListeners["indexOf"]("mac") >= 0 && "other" !== button && (window["ddAnalyzerData"]["lo"] = true), void 0 === navigator["plugins"] && "Windows" !== button && "Windows Phone" !== button && (window["ddAnalyzerData"]["lo"] = true), "lo";
        };
        /**
         * @return {?}
         */
        this["dd_t"] = function() {
          /** @type {number} */
          var resetOne = 0;
          /** @type {boolean} */
          var updateOne = false;
          if (void 0 !== navigator["maxTouchPoints"]) {
            resetOne = navigator["maxTouchPoints"];
          } else {
            if (void 0 !== navigator["msMaxTouchPoints"]) {
              resetOne = navigator["msMaxTouchPoints"];
            }
          }
          try {
            document["createEvent"]("TouchEvent");
            /** @type {boolean} */
            updateOne = true;
          } catch (_0x356dc8) {
          }
          /** @type {boolean} */
          var IS_TOUCH_ENABLED = "ontouchstart" in window;
          return window["ddAnalyzerData"]["ts_mtp"] = resetOne, window["ddAnalyzerData"]["ts_tec"] = updateOne, window["ddAnalyzerData"]["ts_tsa"] = IS_TOUCH_ENABLED, "ts";
        };
        /**
         * @return {?}
         */
        this["dd_Y"] = function() {
          return void 0 === window["navigator"]["usb"] ? window["ddAnalyzerData"]["usb"] = "NA" : "object" == typeof window["navigator"]["usb"] ? window["ddAnalyzerData"]["usb"] = "defined" : window["ddAnalyzerData"]["usb"] = window["navigator"]["usb"], "usb";
        };
        /**
         * @return {undefined}
         */
        this["dd_v"] = function() {
          window["ddAnalyzerData"]["vnd"] = window["navigator"]["vendor"];
        };
        /**
         * @return {undefined}
         */
        this["dd_w"] = function() {
          if (void 0 === window["navigator"]["buildID"]) {
            /** @type {string} */
            window["ddAnalyzerData"]["bid"] = "NA";
          } else {
            window["ddAnalyzerData"]["bid"] = window["navigator"]["buildID"];
          }
        };
        /**
         * @return {?}
         */
        this["dd_x"] = function() {
          /** @type {string} */
          window["ddAnalyzerData"]["mmt"] = "";
          /** @type {number} */
          var j = 0;
          for (; j < window["navigator"]["mimeTypes"]["length"]; j++) {
            if (j == window["navigator"]["mimeTypes"]["length"] - 1) {
              window["ddAnalyzerData"]["mmt"] += window["navigator"]["mimeTypes"][j]["type"];
            } else {
              window["ddAnalyzerData"]["mmt"] += window["navigator"]["mimeTypes"][j]["type"] + ",";
            }
          }
          return "" == window["ddAnalyzerData"]["mmt"] && window["navigator"]["mimeTypes"] && 0 == window["navigator"]["mimeTypes"]["length"] && (window["ddAnalyzerData"]["mmt"] = "empty"), window["navigator"]["mimeTypes"] || (window["ddAnalyzerData"]["mmt"] = "NA"), "mmt";
        };
        /**
         * @return {?}
         */
        this["dd_y"] = function() {
          /** @type {string} */
          window["ddAnalyzerData"]["plu"] = "";
          /** @type {number} */
          var i = 0;
          for (; i < window["navigator"]["plugins"]["length"]; i++) {
            if (i === window["navigator"]["plugins"]["length"] - 1) {
              window["ddAnalyzerData"]["plu"] += window["navigator"]["plugins"][i]["name"];
            } else {
              window["ddAnalyzerData"]["plu"] += window["navigator"]["plugins"][i]["name"] + ",";
            }
          }
          return "" === window["ddAnalyzerData"]["plu"] && 0 === window["navigator"]["plugins"]["length"] && (window["ddAnalyzerData"]["plu"] = "empty"), window["navigator"]["plugins"] || (window["ddAnalyzerData"]["plu"] = "NA"), "plu";
        };
        /**
         * @return {?}
         */
        this["dd_z"] = function() {
          return window["ddAnalyzerData"]["hdn"] = !!document["hidden"], "hdn";
        };
        /**
         * @return {?}
         */
        this["dd_A"] = function() {
          return window["ddAnalyzerData"]["awe"] = !!window["awesomium"], "awe";
        };
        /**
         * @return {?}
         */
        this["dd_B"] = function() {
          return window["ddAnalyzerData"]["geb"] = !!window["geb"], "geb";
        };
        /**
         * @return {?}
         */
        this["dd_C"] = function() {
          return "domAutomation" in window || "domAutomationController" in window ? window["ddAnalyzerData"]["dat"] = true : window["ddAnalyzerData"]["dat"] = false, "dat";
        };
        /**
         * @return {?}
         */
        this["dd_D"] = function() {
          return void 0 === window["navigator"]["mediaDevices"] ? window["ddAnalyzerData"]["med"] = "NA" : "object" == typeof window["navigator"]["mediaDevices"] ? window["ddAnalyzerData"]["med"] = "defined" : window["ddAnalyzerData"]["med"] = "NA", "med";
        };
        /**
         * @return {?}
         */
        this["dd_E"] = function() {
          try {
            var elem = document["createElement"]("audio");
            var _0x5d29f6 = MediaSource || WebKitMediaSource;
            window["ddAnalyzerData"]["aco"] = elem["canPlayType"]('audio/ogg; codecs="vorbis"');
            window["ddAnalyzerData"]["acots"] = _0x5d29f6["isTypeSupported"]('audio/ogg; codecs="vorbis"');
            window["ddAnalyzerData"]["acmp"] = elem["canPlayType"]("audio/mpeg;");
            window["ddAnalyzerData"]["acmpts"] = _0x5d29f6["isTypeSupported"]('audio/mpeg;"');
            window["ddAnalyzerData"]["acw"] = elem["canPlayType"]('audio/wav; codecs="1"');
            window["ddAnalyzerData"]["acwts"] = _0x5d29f6["isTypeSupported"]('audio/wav; codecs="1"');
            window["ddAnalyzerData"]["acma"] = elem["canPlayType"]("audio/x-m4a;");
            window["ddAnalyzerData"]["acmats"] = _0x5d29f6["isTypeSupported"]("audio/x-m4a;");
            window["ddAnalyzerData"]["acaa"] = elem["canPlayType"]("audio/aac;");
            window["ddAnalyzerData"]["acaats"] = _0x5d29f6["isTypeSupported"]("audio/aac;");
            window["ddAnalyzerData"]["ac3"] = elem["canPlayType"]("audio/3gpp;");
            window["ddAnalyzerData"]["ac3ts"] = _0x5d29f6["isTypeSupported"]("audio/3gpp;");
            window["ddAnalyzerData"]["acf"] = elem["canPlayType"]("audio/flac;");
            window["ddAnalyzerData"]["acfts"] = _0x5d29f6["isTypeSupported"]("audio/flac;");
            window["ddAnalyzerData"]["acmp4"] = elem["canPlayType"]("audio/mp4;");
            window["ddAnalyzerData"]["acmp4ts"] = _0x5d29f6["isTypeSupported"]("audio/mp4;");
            window["ddAnalyzerData"]["acmp3"] = elem["canPlayType"]("audio/mp3;");
            window["ddAnalyzerData"]["acmp3ts"] = _0x5d29f6["isTypeSupported"]("audio/mp3;");
            window["ddAnalyzerData"]["acwm"] = elem["canPlayType"]("audio/webm;");
            window["ddAnalyzerData"]["acwmts"] = _0x5d29f6["isTypeSupported"]("audio/webm;");
            /** @type {boolean} */
            window["ddAnalyzerData"]["ocpt"] = -1 === elem["canPlayType"]["toString"]()["indexOf"]("canPlayType");
          } catch (_0x40b78c) {
            /** @type {string} */
            window["ddAnalyzerData"]["aco"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acmp"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acw"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acma"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acaa"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["ac3"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acf"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acmp4"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acmp3"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acwm"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acots"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acmpts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acwts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acmats"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acaats"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["ac3ts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acfts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acmp4ts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acmp3ts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["acwmts"] = "NA";
          }
          return "aco";
        };
        /**
         * @return {?}
         */
        this["dd_F"] = function() {
          try {
            var elem = document["createElement"]("video");
            var _0x5d29f6 = MediaSource || WebKitMediaSource;
            window["ddAnalyzerData"]["vco"] = elem["canPlayType"]('video/ogg; codecs="theora"');
            window["ddAnalyzerData"]["vcots"] = _0x5d29f6["isTypeSupported"]('video/ogg; codecs="theora"');
            window["ddAnalyzerData"]["vch"] = elem["canPlayType"]('video/mp4; codecs="avc1.42E01E"');
            window["ddAnalyzerData"]["vchts"] = _0x5d29f6["isTypeSupported"]('video/mp4; codecs="avc1.42E01E"');
            window["ddAnalyzerData"]["vcw"] = elem["canPlayType"]('video/webm; codecs="vp8, vorbis"');
            window["ddAnalyzerData"]["vcwts"] = _0x5d29f6["isTypeSupported"]('video/webm; codecs="vp8, vorbis"');
            window["ddAnalyzerData"]["vc3"] = elem["canPlayType"]("video/3gpp;");
            window["ddAnalyzerData"]["vc3ts"] = _0x5d29f6["isTypeSupported"]("video/3gpp;");
            window["ddAnalyzerData"]["vcmp"] = elem["canPlayType"]("video/mpeg;");
            window["ddAnalyzerData"]["vcmpts"] = _0x5d29f6["isTypeSupported"]("video/mpeg");
            window["ddAnalyzerData"]["vcq"] = elem["canPlayType"]("video/quicktime;");
            window["ddAnalyzerData"]["vcqts"] = _0x5d29f6["isTypeSupported"]("video/quicktime;");
            window["ddAnalyzerData"]["vc1"] = elem["canPlayType"]('video/mp4; codecs="av01.0.08M.08"');
            window["ddAnalyzerData"]["vc1ts"] = _0x5d29f6["isTypeSupported"]('video/;mp4; codecs="av01.0.08M.08"');
          } catch (_0x1e727a) {
            /** @type {string} */
            window["ddAnalyzerData"]["vco"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vch"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vcw"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vc3"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vcmp"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vcq"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vc1"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vcots"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vchts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vcwts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vc3ts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vcmpts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vcqts"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["vc1ts"] = "NA";
          }
          return "vco";
        };
        /**
         * @return {undefined}
         */
        this["dd_U"] = function() {
          try {
            var JSON3 = runInContext();
            var gl = document["createElement"]("canvas")["getContext"]("webgl");
            var info = gl["getExtension"]("WEBGL_debug_renderer_info");
            window["ddAnalyzerData"]["glvd"] = gl["getParameter"](info["UNMASKED_VENDOR_WEBGL"]);
            window["ddAnalyzerData"]["glrd"] = gl["getParameter"](info["UNMASKED_RENDERER_WEBGL"]);
            /** @type {number} */
            window["ddAnalyzerData"]["tagpu"] = runInContext() - JSON3;
          } catch (_0xfa150) {
            /** @type {string} */
            window["ddAnalyzerData"]["glrd"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["glvd"] = "NA";
            /** @type {string} */
            window["ddAnalyzerData"]["tagpu"] = "NA";
          }
        };
        /**
         * @return {undefined}
         */
        this["dd_G"] = function() {
          window["ddAnalyzerData"]["dvm"] = navigator["deviceMemory"] || "NA";
        };
        /**
         * @return {undefined}
         */
        this["dd_H"] = function() {
          window["ddAnalyzerData"]["sqt"] = window["external"] && window["external"]["toString"] && window["external"]["toString"]()["indexOf"]("Sequentum") > -1;
        };
        /**
         * @return {?}
         */
        this["dd_K"] = function() {
          if (null !== document["body"] && void 0 !== document["body"]) {
            try {
              var el = document["createElement"]("div");
              el["setAttribute"]("id", "dpi");
              el["setAttribute"]("style", "height: 1in; width: 1in; left: 100%; position: fixed; top: 100%");
              document["body"]["appendChild"](el);
              var table = document["getElementById"]("dpi");
              if (!table) {
                return window["ddAnalyzerData"]["sz"] = -2, "sz";
              }
              /** @type {number} */
              var value = screen["width"] / table["offsetWidth"] || -1;
              /** @type {number} */
              var type = screen["height"] / table["offsetHeight"] || -1;
              document["body"]["removeChild"](el);
              window["ddAnalyzerData"]["sz"] = Math["sqrt"](Math["pow"](value, 2) + Math["pow"](type, 2));
            } catch (_0x27910f) {
            }
          } else {
            /** @type {number} */
            window["ddAnalyzerData"]["sz"] = -1;
          }
          return "sz";
        };
        /**
         * @return {?}
         */
        this["dd_I"] = function() {
          try {
            window["ddAnalyzerData"]["so"] = window["screen"]["orientation"]["type"];
          } catch (_0x48b69f) {
            try {
              window["ddAnalyzerData"]["so"] = window["screen"]["msOrientation"];
            } catch (_0x19cb76) {
              return window["ddAnalyzerData"]["so"] = "NA", "so";
            }
          }
          return "so";
        };
        /**
         * @return {?}
         */
        this["dd_J"] = function() {
          return 0 === window["orientation"] ? window["ddAnalyzerData"]["wo"] = 0 : 90 === window["orientation"] ? window["ddAnalyzerData"]["wo"] = 90 : 180 === window["orientation"] ? window["ddAnalyzerData"]["wo"] = 180 : -90 === window["orientation"] ? window["ddAnalyzerData"]["wo"] = -90 : window["ddAnalyzerData"]["wo"] = "NA", "wo";
        };
        /**
         * @return {?}
         */
        this["dd_Z"] = function() {
          return setInterval(function() {
            try {
              if (void 0 !== document["getElementsByClassName"]) {
                if (document["getElementsByClassName"]("-web-scraper-selection-active")["length"] > 0 || document["getElementsByClassName"]("-web-scraper-img-on-top")["length"] > 0) {
                  if (true !== window["ddAnalyzerData"]["ewsi"]) {
                    /** @type {boolean} */
                    window["ddAnalyzerData"]["ewsi"] = true;
                    dispatchEvent("asyncChallengeFinished");
                  }
                } else {
                  /** @type {boolean} */
                  window["ddAnalyzerData"]["ewsi"] = false;
                }
              }
            } catch (_0x4958c4) {
              /** @type {string} */
              window["ddAnalyzerData"]["ewsi"] = "error";
            }
          }, 2000), "ewsi";
        };
        /**
         * @return {?}
         */
        this["dd_L"] = function() {
          return window["ddAnalyzerData"]["wbd"] = false, navigator["webdriver"] && (window["ddAnalyzerData"]["wbd"] = true), window["ddAnalyzerData"]["wbdm"] = false, void 0 !== window["Object"] && "function" == typeof Object["getOwnPropertyDescriptor"] && (window["ddAnalyzerData"]["wbdm"] = !!Object["getOwnPropertyDescriptor"](navigator["__proto__"], "webdriver")), "wbd";
        };
        /**
         * @return {undefined}
         */
        this["dd_N"] = function() {
          /** @type {boolean} */
          window["ddAnalyzerData"]["ecpc"] = !!window["process"];
          if ("undefined" != typeof window && "object" == typeof window["process"] && "renderer" === window["process"]["type"]) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["ecpc"] = true;
          }
          if (void 0 !== options && "object" == typeof options["versions"] && options["versions"]["electron"]) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["ecpc"] = true;
          }
          if (-1 !== window["close"]["toString"]()["indexOf"]("ELECTRON")) {
            /** @type {boolean} */
            window["ddAnalyzerData"]["ecpc"] = true;
          }
        };
        /**
         * @return {?}
         */
        this["dd_M"] = function() {
          if (window["ddAnalyzerData"]["wdw"] = true, navigator["userAgent"] && navigator["userAgent"]["toLowerCase"]()["indexOf"]("chrome") >= 0 && !window["chrome"] && (window["ddAnalyzerData"]["wdw"] = false), window["chrome"]) {
            /** @type {string} */
            var css = "";
            var key;
            for (key in window["chrome"]) {
              /** @type {string} */
              css = css + key;
            }
            if (void 0 !== window["btoa"]) {
              /** @type {string} */
              window["ddAnalyzerData"]["cokys"] = btoa(css) + "L=";
            }
          }
          return "wdw";
        };
        /**
         * @return {?}
         */
        this["dd_V"] = function() {
          return window["ddAnalyzerData"]["prm"] = true, void 0 !== navigator["permissions"] && void 0 !== navigator["permissions"]["query"] && navigator["permissions"]["query"]({
            "name" : "notifications"
          })["then"](function(usStates) {
            if ("undefined" != typeof Notification && "denied" == Notification["permission"] && "prompt" == usStates["state"]) {
              /** @type {boolean} */
              window["ddAnalyzerData"]["prm"] = false;
            }
          }), "prm";
        };
        /**
         * @return {?}
         */
        this["dd_O"] = function() {
          return window["ddAnalyzerData"]["lgs"] = "" !== navigator["languages"], window["Object"] && window["Object"]["getOwnPropertyDescriptor"] && (window["ddAnalyzerData"]["lgsod"] = !!Object["getOwnPropertyDescriptor"](navigator, "languages")), "lgs";
        };
        /**
         * @return {undefined}
         */
        this["dd_P"] = function() {
          /**
           * @param {?} data
           * @return {?}
           */
          function init(data) {
            return "function" != typeof data || true === navigator["webdriver"] ? data : data["toString"]()["match"](/\{\s*\[native code\]\s*\}$/m) && data["toString"]["toString"]()["match"](/\{\s*\[native code\]\s*\}$/m) ? function() {
              if (_0x5ab57b <= 0) {
                return data["apply"](this, arguments);
              }
              if (_0x5ab57b--, get() || !dest) {
                return data["apply"](this, arguments);
              }
              try {
                null[0];
              } catch (stackToIndex) {
                if ("string" != typeof stackToIndex["stack"]) {
                  return data["apply"](this, arguments);
                }
                var props = stackToIndex["stack"]["split"]("\n");
                if (_0x113a94) {
                  /** @type {boolean} */
                  var _0x2cd8a5 = false;
                  /** @type {boolean} */
                  var _0x12ba53 = false;
                  try {
                    /** @type {boolean} */
                    _0x2cd8a5 = !!props[2]["match"](dt);
                    /** @type {boolean} */
                    _0x12ba53 = !!props[2]["match"](classnameRE);
                    if (_0x2cd8a5) {
                      /** @type {boolean} */
                      window["ddAnalyzerData"]["cfpp"] = true;
                      dispatchEvent("asyncChallengeFinished");
                    }
                    if (_0x12ba53) {
                      /** @type {boolean} */
                      window["ddAnalyzerData"]["cfcpw"] = true;
                      dispatchEvent("asyncChallengeFinished");
                    }
                  } catch (_0x3f4b43) {
                  }
                } else {
                  if (_0x2da1e8) {
                    /** @type {boolean} */
                    var _0x2fd384 = false;
                    /** @type {boolean} */
                    var _0x270d13 = false;
                    try {
                      /** @type {boolean} */
                      _0x2fd384 = !!props[1]["match"](B1804);
                      /** @type {boolean} */
                      _0x270d13 = !!props[1]["match"](dt);
                      if (_0x2fd384) {
                        /** @type {boolean} */
                        window["ddAnalyzerData"]["cffpw"] = true;
                        dispatchEvent("asyncChallengeFinished");
                      }
                      if (_0x270d13) {
                        /** @type {boolean} */
                        window["ddAnalyzerData"]["cfppf"] = true;
                        dispatchEvent("asyncChallengeFinished");
                      }
                    } catch (_0x32d34b) {
                    }
                  } else {
                    if (cb) {
                      /** @type {boolean} */
                      var _0x355a60 = false;
                      /** @type {boolean} */
                      var _0x5dbdd9 = false;
                      try {
                        if (props["length"] > 2) {
                          /** @type {boolean} */
                          _0x355a60 = !!props[2]["match"](revvedRx);
                          if (props["length"] > 4) {
                            /** @type {boolean} */
                            _0x355a60 = _0x355a60 || !!props[4]["match"](revvedRx);
                          }
                          var EVT_NOTE_OFF = Math["min"](props["length"], 5);
                          /** @type {number} */
                          var type = 2;
                          for (; type < EVT_NOTE_OFF; type++) {
                            /** @type {boolean} */
                            _0x5dbdd9 = !!props[type]["match"](match);
                          }
                        }
                        if (_0x355a60) {
                          /** @type {boolean} */
                          window["ddAnalyzerData"]["cfwpw"] = true;
                          dispatchEvent("asyncChallengeFinished");
                        }
                        if (_0x5dbdd9) {
                          /** @type {boolean} */
                          window["ddAnalyzerData"]["slsf"] = true;
                          dispatchEvent("asyncChallengeFinished");
                        }
                      } catch (_0x516743) {
                      }
                    }
                  }
                }
              }
              return data["apply"](this, arguments);
            } : data;
          }
          /** @type {boolean} */
          var dest = true;
          /** @type {boolean} */
          var _0x113a94 = !!navigator["deviceMemory"];
          /** @type {boolean} */
          var _0x2da1e8 = void 0 !== window["mozInnerScreenX"];
          /** @type {boolean} */
          var cb = "function" == typeof window["webkitURL"];
          /** @type {!RegExp} */
          var dt = new RegExp("[p_]{3}up[tep]{4}er[ae_v]{4}lua[noti]{4}");
          /** @type {!RegExp} */
          var classnameRE = new RegExp("__p[aly]{3}wr[\\w]{3}t_e[lva]{3}u");
          /** @type {!RegExp} */
          var B1804 = new RegExp("@de[gbu]{4}er e[avl]{3}");
          /** @type {!RegExp} */
          var revvedRx = new RegExp("ca[Flu]{4}nc[iot]{3}nOn");
          /** @type {!RegExp} */
          var match = new RegExp("ev[la]{2}uat[aeJ]{3}va[cS]{2}riptF[cun]{3}ti");
          /** @type {number} */
          var _0x5ab57b = 50;
          try {
            document["getElementById"] = init(document["getElementById"]);
            document["getElementsByTagName"] = init(document["getElementsByTagName"]);
            document["querySelector"] = init(document["querySelector"]);
            document["querySelectorAll"] = init(document["querySelectorAll"]);
            if (XMLSerializer && XMLSerializer["prototype"] && XMLSerializer["prototype"]["serializeToString"]) {
              XMLSerializer["prototype"]["serializeToString"] = init(XMLSerializer["prototype"]["serializeToString"]);
            }
            setTimeout(function() {
              /** @type {boolean} */
              dest = false;
            }, 5000);
          } catch (_0x28c506) {
          }
        };
        /**
         * @return {undefined}
         */
        this["dd_Q"] = function() {
          /** @type {boolean} */
          window["ddAnalyzerData"]["svde"] = !!window["SVGDiscardElement"];
          /** @type {boolean} */
          window["ddAnalyzerData"]["vpbq"] = !!(window["HTMLVideoElement"] && window["HTMLVideoElement"]["prototype"] && window["HTMLVideoElement"]["prototype"]["getVideoPlaybackQuality"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["xr"] = !!navigator["xr"];
          /** @type {boolean} */
          window["ddAnalyzerData"]["bgav"] = !!(window["Bluetooth"] && Bluetooth["prototype"] && Bluetooth["prototype"]["getAvailability"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["rri"] = !!(window["RTCPeerConnection"] && RTCPeerConnection["prototype"] && RTCPeerConnection["prototype"]["restartIce"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["idfr"] = !!(window["Intl"] && Intl["DateTimeFormat"] && Intl["DateTimeFormat"]["prototype"] && Intl["DateTimeFormat"]["prototype"]["formatRange"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["ancs"] = !!window["Animation"];
          /** @type {boolean} */
          window["ddAnalyzerData"]["inlc"] = !(!window["Intl"] || !Intl["Locale"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["cgca"] = !!(window["CanvasRenderingContext2D"] && CanvasRenderingContext2D["prototype"] && CanvasRenderingContext2D["prototype"]["getContextAttributes"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["inlf"] = !(!window["Intl"] || !Intl["ListFormat"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["tecd"] = !!window["TextEncoderStream"];
          /** @type {boolean} */
          window["ddAnalyzerData"]["sbct"] = !!(window["SourceBuffer"] && SourceBuffer["prototype"] && SourceBuffer["prototype"]["changeType"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["aflt"] = !!(window["Array"] && Array["prototype"] && Array["prototype"]["flat"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["rgp"] = !!(window["RTCRtpSender"] && RTCRtpSender["prototype"] && RTCRtpSender["prototype"]["getParameters"]);
          /** @type {boolean} */
          window["ddAnalyzerData"]["bint"] = !!window["BigInt"];
        };
        /**
         * @return {undefined}
         */
        this["dd_R"] = function() {
          /**
           * @param {?} altKey
           * @return {undefined}
           */
          function onKeyDown(altKey) {
            if (altKey) {
              if (get()) {
                /** @type {boolean} */
                window["ddAnalyzerData"]["slat"] = true;
              } else {
                /** @type {boolean} */
                window["ddAnalyzerData"]["slat"] = true;
                /** @type {boolean} */
                window["ddAnalyzerData"]["slevt"] = true;
                dispatchEvent("asyncChallengeFinished");
              }
            }
          }
          /** @type {!Array} */
          var sections = ["__driver_evaluate", "__webdriver_evaluate", "__selenium_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__selenium_unwrapped", "__fxdriver_unwrapped", "_Selenium_IDE_Recorder", "_selenium", "calledSelenium", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor", "webdriver", "__webdriverFunc", "domAutomation", "domAutomationController", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "__webdriver_script_fn", 
          "__webdriver_script_func", "__webdriver_script_function", "_WEBDRIVER_ELEM_CACHE"];
          /** @type {!Array} */
          var classes = ["driver-evaluate", "webdriver-evaluate", "selenium-evaluate", "webdriverCommand", "webdriver-evaluate-response"];
          if ("function" == typeof document["addEventListener"]) {
            /** @type {number} */
            var j = 0;
            for (; j < classes["length"]; j++) {
              document["addEventListener"](classes[j], onKeyDown);
            }
          }
          setTimeout(function() {
            if ("function" == typeof document["removeEventListener"]) {
              /** @type {number} */
              var j = 0;
              for (; j < classes["length"]; j++) {
                document["removeEventListener"](classes[j], onKeyDown);
              }
            }
          }, 10000);
          /** @type {number} */
          var chat_retry = setInterval(function() {
            /** @type {number} */
            var i = 0;
            for (; i < sections["length"]; i++) {
              if ((sections[i] in window || sections[i] in document) && !get()) {
                return window["ddAnalyzerData"]["slat"] = true, dispatchEvent("asyncChallengeFinished"), clearInterval(chat_retry), "slat";
              }
            }
            if ("undefined" != typeof Object && "function" == typeof Object["keys"]) {
              var params = Object["keys"](document);
              /** @type {number} */
              i = 0;
              for (; i < params["length"]; i++) {
                var p = params[i];
                if (p && p["indexOf"]("$cdc_") > -1 && !get()) {
                  return window["ddAnalyzerData"]["slat"] = true, dispatchEvent("asyncChallengeFinished"), clearInterval(chat_retry), "slat";
                }
                try {
                  if (document[p] && void 0 === document[p]["window"] && void 0 !== document[p]["cache_"]) {
                    var htmlEntitiesMap;
                    for (htmlEntitiesMap in document[p]["cache_"]) {
                      if (htmlEntitiesMap && htmlEntitiesMap["match"](/[\d\w]{8}\-[\d\w]{4}\-[\d\w]{4}\-[\d\w]{4}\-[\d\w]{12}/)) {
                        if (!get()) {
                          window["ddAnalyzerData"]["slmk"] = p["substr"](0, 64);
                          /** @type {boolean} */
                          window["ddAnalyzerData"]["slat"] = true;
                          dispatchEvent("asyncChallengeFinished");
                          clearInterval(chat_retry);
                        }
                      }
                    }
                  }
                } catch (_0x557d71) {
                }
              }
            }
          }, 500);
          setTimeout(function() {
            clearInterval(chat_retry);
          }, 10000);
        };
        /**
         * @return {undefined}
         */
        this["dd_S"] = function() {
          /** @type {boolean} */
          window["ddAnalyzerData"]["spwn"] = !!window["spawn"];
          /** @type {boolean} */
          window["ddAnalyzerData"]["emt"] = !!window["emit"];
          /** @type {boolean} */
          window["ddAnalyzerData"]["bfr"] = !!window["Buffer"];
        };
        /**
         * @return {?}
         */
        this["dd_T"] = function() {
          return void 0 !== window["console"] && "function" == typeof window["console"]["debug"] && (window["ddAnalyzerData"]["dbov"] = !!("" + window["console"]["debug"])["match"](/[\)\( ]{3}[>= ]{3}\{\n[ r]{9}etu[n r]{3}n[lu]{3}/)), "dbov";
        };
        /**
         * @return {undefined}
         */
        this["checkMousePosition"] = function() {
          /**
           * @param {(Event|number)} event
           * @return {undefined}
           */
          function listen(event) {
            if (event["isTrusted"]) {
              if (lastPos && event["timeStamp"] && (null === window["ddAnalyzerData"]["tbce"] || void 0 === window["ddAnalyzerData"]["tbce"])) {
                /** @type {number} */
                window["ddAnalyzerData"]["tbce"] = parseInt(event["timeStamp"] - lastPos);
                try {
                  this["dataDomeTools"]["removeEventListener"](window, "mousedown", listen);
                  this["dataDomeTools"]["removeEventListener"](window, "mouseup", listen);
                } catch (_0x2e2d14) {
                }
              }
              if (event["timeStamp"]) {
                lastPos = event["timeStamp"];
              }
            }
          }
          var lastPos;
          this["dataDomeTools"]["addEventListener"](window, "mousemove", this["getMousePosition"]);
          this["dataDomeTools"]["addEventListener"](window, "mousedown", listen);
          this["dataDomeTools"]["addEventListener"](window, "mouseup", listen);
        };
        /**
         * @param {!Object} e
         * @return {?}
         */
        this["getMousePosition"] = function(e) {
          try {
            window["ddAnalyzerData"]["mp_cx"] = e["clientX"];
            window["ddAnalyzerData"]["mp_cy"] = e["clientY"];
            window["ddAnalyzerData"]["mp_tr"] = e["isTrusted"];
            window["ddAnalyzerData"]["mp_mx"] = e["movementX"];
            window["ddAnalyzerData"]["mp_my"] = e["movementY"];
            window["ddAnalyzerData"]["mp_sx"] = e["screenX"];
            window["ddAnalyzerData"]["mp_sy"] = e["screenY"];
          } catch (_0x1efc6d) {
          }
          return "mp";
        };
        /**
         * @return {?}
         */
        this["dd_aa"] = function() {
          /** @type {string} */
          var x = "jnhgnonknehpejjnehehllkliplmbmhn";
          /** @type {!Array} */
          var PL$13 = ["images/icon16.png"];
          /** @type {number} */
          var PL$17 = 0;
          for (; PL$17 < PL$13["length"]; PL$17++) {
            /** @type {string} */
            var left = "chrome-extension://";
            done(left = left["concat"](x, "/", PL$13[PL$17]), function(canCreateDiscussions) {
              if (canCreateDiscussions) {
                if (true !== window["ddAnalyzerData"]["wwsi"]) {
                  /** @type {boolean} */
                  window["ddAnalyzerData"]["wwsi"] = true;
                  dispatchEvent("asyncChallengeFinished");
                }
              } else {
                /** @type {boolean} */
                window["ddAnalyzerData"]["wwsi"] = false;
              }
            });
          }
          return "wwsi";
        };
      };
      /** @type {function(): undefined} */
      window["exports"] = exports;
    })["call"](this, require("_process"));
  }, {
    "./../common/DataDomeTools" : 3,
    "_process" : 1
  }],
  5 : [function(floor, module, canCreateDiscussions) {
    var startYNew = floor("./../common/DataDomeTools");
    /**
     * @param {?} canCreateDiscussions
     * @return {undefined}
     */
    module["exports"] = function(canCreateDiscussions) {
      this["jsType"] = canCreateDiscussions;
      /** @type {boolean} */
      var r = false;
      if (window["navigator"]) {
        r = /^((?!chrome|android).)*safari/i["test"](navigator["userAgent"]);
      }
      /**
       * @param {?} abbr
       * @param {?} redeemScriptSig
       * @param {?} type
       * @param {?} eventInfo
       * @param {?} values
       * @param {?} c
       * @param {?} body
       * @return {undefined}
       */
      this["requestApi"] = function(abbr, redeemScriptSig, type, eventInfo, values, c, body) {
        var options = new startYNew;
        if (!r && !c && window["navigator"] && window["navigator"]["sendBeacon"] && window["Blob"]) {
          var input = this["getQueryParamsString"](redeemScriptSig, type, eventInfo, abbr, values, body);
          /** @type {(Blob|URLSearchParams)} */
          var artistTrack = "URLSearchParams" in window ? new URLSearchParams(input) : new Blob([input], {
            "type" : "application/x-www-form-urlencoded"
          });
          window["navigator"]["sendBeacon"](window["dataDomeOptions"]["endpoint"], artistTrack);
        } else {
          if (window["XMLHttpRequest"]) {
            /** @type {!XMLHttpRequest} */
            var xhr = new XMLHttpRequest;
            try {
              xhr["open"]("POST", window["dataDomeOptions"]["endpoint"], c);
              xhr["setRequestHeader"]("Content-type", "application/x-www-form-urlencoded");
              var input = this["getQueryParamsString"](redeemScriptSig, type, eventInfo, abbr, values, body);
              options["debug"]("xmlHttpString built.", input);
              if (null !== window["dataDomeOptions"]["customParam"]) {
                input = input + ("&custom=" + window["dataDomeOptions"]["customParam"]);
              }
              options["debug"]("Request sent.", xhr);
              xhr["send"](input);
            } catch (xhr) {
              options["debug"]("Error when trying to send request.", xhr);
            }
          }
        }
      };
      /**
       * @param {?} message
       * @param {?} data
       * @param {?} aSearchTerms
       * @param {?} value
       * @param {?} context
       * @param {?} name
       * @return {?}
       */
      this["getQueryParamsString"] = function(message, data, aSearchTerms, value, context, name) {
        var $ = new startYNew;
        return "jsData=" + encodeURIComponent(JSON["stringify"](message)) + "&events=" + encodeURIComponent(JSON["stringify"](data)) + "&eventCounters=" + encodeURIComponent(JSON["stringify"](aSearchTerms)) + "&jsType=" + this["jsType"] + "&cid=" + encodeURIComponent($["getCookie"]()) + "&ddk=" + escape(encodeURIComponent(value)) + "&Referer=" + escape(encodeURIComponent($["removeSubstringPattern"](document["referrer"], context))) + "&request=" + escape(encodeURIComponent(window["location"]["pathname"] + 
        window["location"]["search"] + window["location"]["hash"])) + "&responsePage=" + escape(encodeURIComponent(name)) + "&ddv=" + window["dataDomeOptions"]["version"];
      };
    };
  }, {
    "./../common/DataDomeTools" : 3
  }],
  6 : [function(floor, module, canCreateDiscussions) {
    var startYNew = floor("./../common/DataDomeTools");
    /**
     * @return {undefined}
     */
    module["exports"] = function() {
      /** @type {string} */
      this["dataDomeStatusHeader"] = "x-dd-b";
      /**
       * @param {!Object} a
       * @param {!Object} o
       * @param {!Object} newEntityErr
       * @param {?} dontForceConstraints
       * @param {!Object} fetchEntityErr
       * @param {string} isSeparator
       * @return {undefined}
       */
      this["process"] = function(a, o, newEntityErr, dontForceConstraints, fetchEntityErr, isSeparator) {
        if (true !== window["DataDomeCaptchaDisplayed"]) {
          /** @type {boolean} */
          var TimestampMessage = false;
          var row = this;
          if ("string" == typeof o) {
            if (String["prototype"]["trim"] || (String["prototype"]["trim"] = function() {
              return this["replace"](/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            }), Array["prototype"]["forEach"]) {
              o["trim"]()["split"](/[\r\n]+/)["forEach"](function(layoutSets) {
                if (layoutSets["split"](": ")["shift"]()["toLowerCase"]() === row["dataDomeStatusHeader"]) {
                  /** @type {boolean} */
                  TimestampMessage = true;
                }
              });
            } else {
              o = o["trim"]()["split"](/[\r\n]+/);
              /** @type {number} */
              var i = 0;
              for (; i < o["length"]; i++) {
                if (o[i]["split"](": ")["shift"]()["toLowerCase"]() === row["dataDomeStatusHeader"]) {
                  /** @type {boolean} */
                  TimestampMessage = true;
                }
              }
            }
          } else {
            if ("object" == typeof o && "Headers" === o["constructor"]["name"]) {
              /** @type {boolean} */
              TimestampMessage = !!o["get"](row["dataDomeStatusHeader"]);
            }
          }
          if ((false !== TimestampMessage || isSeparator) && a) {
            try {
              var urlEntities;
              if (isSeparator && "string" == typeof a && a["indexOf"]("dd={'cid'") > -1 && a["indexOf"]("googletagmanager") > -1) {
                var str = a["slice"](a["lastIndexOf"]("{"), a["lastIndexOf"]("}") + 1)["replace"]("&#x2d;", "-");
                var _0x54cd59 = JSON["parse"](str["replace"](/'/g, '"'));
                urlEntities = {};
                urlEntities["url"] = "https://" + _0x54cd59[["host"]] + "/captcha/?initialCid=" + _0x54cd59[["cid"]] + "&hash=" + _0x54cd59[["hsh"]] + "&t=" + _0x54cd59[["t"]];
              } else {
                urlEntities = "string" == typeof a ? JSON["parse"](a) : a;
              }
            } catch (_0x2b2114) {
              return;
            }
            if (urlEntities && urlEntities["url"]) {
              if (dontForceConstraints) {
                this["displayCaptchaPage"](urlEntities["url"]);
              }
              if (newEntityErr && fetchEntityErr) {
                fetchEntityErr["abort"]();
              }
            }
          }
        }
      };
      /**
       * @param {string} canCreateDiscussions
       * @return {undefined}
       */
      this["displayCaptchaPage"] = function(canCreateDiscussions) {
        var reste = new startYNew;
        var _0x2e8fca = reste["getCookie"]();
        /**
         * @param {!Object} data
         * @return {undefined}
         */
        var init = function(data) {
          try {
            if (data["isTrusted"] && (origin = data["origin"], ["https://c.datado.me", "https://c.captcha-delivery.com", "https://ct.captcha-delivery.com", "https://geo.captcha-delivery.com", "https://beta-c.captcha-delivery.com"]["indexOf"](origin) > -1) && data["data"]) {
              var rel;
              var params = JSON["parse"](data["data"]);
              document["cookie"] = params["cookie"];
              /** @type {string} */
              rel = params["url"] ? encodeURI(params["url"]) : encodeURI(window["location"]["href"]);
              setTimeout(function() {
                if ("function" == typeof ddReloadPageCustom) {
                  ddReloadPageCustom();
                } else {
                  window["location"]["href"] = rel;
                }
              }, 500);
              if ("function" != typeof ddReloadPageCustom) {
                setTimeout(function() {
                  window["location"]["reload"]();
                }, 750);
              }
            }
          } catch (_0xda1237) {
          }
          var origin;
        };
        if (window["addEventListener"] ? window["addEventListener"]("message", init, false) : window["attachEvent"] && window["attachEvent"]("onmessage", init), true !== window["DataDomeCaptchaDisplayed"]) {
          /** @type {string} */
          var artistTrack = '<div style="height:100vh;width:100%;position:absolute;top:0;left:0;z-index:2147483647;background-color:#ffffff;">';
          /** @type {string} */
          artistTrack = artistTrack + ('    <iframe src="' + canCreateDiscussions + "&cid=" + _0x2e8fca + '"  width="100%" height="100%" style="height:100vh;" FRAMEBORDER="0" border="0" scrolling="yes"></iframe>');
          /** @type {string} */
          artistTrack = artistTrack + "</div>";
          /** @type {string} */
          document["title"] = "You have been blocked";
          /**
           * @return {undefined}
           */
          var onError = function() {
            window["scrollTo"](0, 0);
          };
          reste["addEventListener"](window, "scroll", onError);
          onError();
          document["body"]["insertAdjacentHTML"]("beforeend", "<style> body { overflow: hidden; -webkit-transform: scale(1) !important; -moz-transform: scale(1) !important; transform: scale(1) !important; } </style>");
          document["body"]["insertAdjacentHTML"]("beforeend", artistTrack);
          /** @type {boolean} */
          window["DataDomeCaptchaDisplayed"] = true;
        }
      };
    };
  }, {
    "./../common/DataDomeTools" : 3
  }],
  7 : [function(getPixelOnImageSizeMax, canCreateDiscussions, isSlidingUp) {
    !function() {
      if (!window["dataDomeProcessed"]) {
        /** @type {boolean} */
        window["dataDomeProcessed"] = true;
        var pixelSizeTargetMax = getPixelOnImageSizeMax("./common/DataDomeOptions");
        window["dataDomeOptions"] = new pixelSizeTargetMax;
        if (window["ddoptions"] && void 0 !== window["ddoptions"]) {
          window["dataDomeOptions"]["check"](window["ddoptions"]);
        }
        /** @type {boolean} */
        window["DataDomeCaptchaDisplayed"] = false;
        var _0x398061 = new (getPixelOnImageSizeMax("./services/DataDomeApiClient"));
        if (true === window["dataDomeOptions"]["exposeCaptchaFunction"]) {
          var pixelSizeTargetMax = getPixelOnImageSizeMax("./http/DataDomeResponse");
          window["displayDataDomeCaptchaPage"] = (new pixelSizeTargetMax)["displayCaptchaPage"];
        }
        var cxnSettings = _0x398061["processSyncRequest"]();
        if ((null !== window["dataDomeOptions"]["ajaxListenerPath"] || window["dataDomeOptions"]["isSalesforce"]) && _0x398061["processAsyncRequests"](window["dataDomeOptions"]["ajaxListenerPath"], window["dataDomeOptions"]["abortAsyncOnCaptchaDisplay"], !window["dataDomeOptions"]["exposeCaptchaFunction"], window["dataDomeOptions"]["isSalesforce"]), window["dataDomeOptions"]["eventsTrackingEnabled"]) {
          (new (getPixelOnImageSizeMax("./live-events/DataDomeEventsTracking"))(cxnSettings))["process"]();
        }
        (new (getPixelOnImageSizeMax("./live-events/DataDomeAsyncChallengesTracking"))(cxnSettings))["process"]();
      }
    }();
  }, {
    "./common/DataDomeOptions" : 2,
    "./http/DataDomeResponse" : 6,
    "./live-events/DataDomeAsyncChallengesTracking" : 8,
    "./live-events/DataDomeEventsTracking" : 9,
    "./services/DataDomeApiClient" : 10
  }],
  8 : [function(floor, module, canCreateDiscussions) {
    var ThalassaAgent = floor("./../http/DataDomeRequest");
    var startXNew = floor("./../common/DataDomeTools");
    /**
     * @param {?} parentviewport
     * @return {undefined}
     */
    module["exports"] = function(parentviewport) {
      var parentmode = parentviewport;
      var thalassaAgent = new ThalassaAgent("ac");
      var http = new startXNew;
      /**
       * @return {undefined}
       */
      this["process"] = function() {
        http["addEventListener"](window, "asyncChallengeFinished", function(canCreateDiscussions) {
          thalassaAgent["requestApi"](window["ddjskey"], parentmode, [], [], window["dataDomeOptions"]["patternToRemoveFromReferrerUrl"], true, window["dataDomeOptions"]["ddResponsePage"]);
        });
      };
    };
  }, {
    "./../common/DataDomeTools" : 3,
    "./../http/DataDomeRequest" : 5
  }],
  9 : [function(getComputedStyle, module, canCreateDiscussions) {
    /**
     * @param {!Object} e
     * @param {string} src
     * @param {!Date} time
     * @param {string} id
     * @return {?}
     */
    function Event(e, src, time, id) {
      return {
        "source" : {
          "x" : e["clientX"],
          "y" : e["clientY"]
        },
        "message" : src,
        "date" : time,
        "id" : id
      };
    }
    /**
     * @param {!Object} event
     * @param {string} obj
     * @param {!Date} key
     * @param {string} val
     * @return {?}
     */
    function getCoord(event, obj, key, val) {
      return {
        "source" : {
          "x" : event["changedTouches"][0]["clientX"],
          "y" : event["changedTouches"][0]["clientY"]
        },
        "message" : obj,
        "date" : key,
        "id" : val
      };
    }
    /**
     * @param {?} timeout
     * @param {string} p
     * @param {!Date} i
     * @param {string} t
     * @return {?}
     */
    function message(timeout, p, i, t) {
      return {
        "source" : {
          "x" : 0,
          "y" : 0
        },
        "message" : p,
        "date" : i,
        "id" : t
      };
    }
    /**
     * @param {!Object} result
     * @param {string} template
     * @param {!Date} i
     * @param {string} name
     * @return {?}
     */
    function test(result, template, i, name) {
      return window["scrollY"], {
        "source" : {
          "x" : 0,
          "y" : result["y"]
        },
        "message" : template,
        "date" : i,
        "id" : name
      };
    }
    var style = getComputedStyle("./../http/DataDomeRequest");
    var firstListItemStyle = getComputedStyle("./../common/DataDomeTools");
    /**
     * @param {?} event
     * @param {?} keyCode
     * @param {?} type
     * @param {?} data
     * @return {undefined}
     */
    var KeyEvent = function(event, keyCode, type, data) {
      /** @type {number} */
      this["lastEventTimestamp"] = 0;
      /** @type {number} */
      this["counter"] = 0;
      this["eventName"] = event;
      this["eventMessage"] = keyCode;
      this["_toTrackingEvent"] = type;
      this["id"] = data;
    };
    /**
     * @param {?} mmaPushNotificationsComponent
     * @param {?} mmCoreSplitViewBlock
     * @return {?}
     */
    KeyEvent["prototype"]["processTrackingEvent"] = function(mmaPushNotificationsComponent, mmCoreSplitViewBlock) {
      return this["lastEventTimestamp"] = mmCoreSplitViewBlock, this["counter"]++, this["_toTrackingEvent"](mmaPushNotificationsComponent, this["eventMessage"], mmCoreSplitViewBlock, this["id"]);
    };
    if (!Object["create"]) {
      /**
       * @param {?} PL$8
       * @param {number} canCreateDiscussions
       * @return {?}
       */
      Object["create"] = function(PL$8, canCreateDiscussions) {
        /**
         * @return {undefined}
         */
        function PL$3() {
        }
        if (void 0 !== canCreateDiscussions) {
          throw "The multiple-argument version of Object.create is not provided by this browser and cannot be shimmed.";
        }
        return PL$3["prototype"] = PL$8, new PL$3;
      };
    }
    /**
     * @param {?} deny
     * @param {?} garbage
     * @param {?} allow
     * @param {?} delay
     * @return {undefined}
     */
    var WMCacheControl = function(deny, garbage, allow, delay) {
      KeyEvent["call"](this, deny, garbage, allow, delay);
      /** @type {number} */
      this["windowScrollY"] = 0;
    };
    WMCacheControl["prototype"] = Object["create"](KeyEvent["prototype"]);
    /** @type {function(?, ?, ?, ?): undefined} */
    KeyEvent["prototype"]["constructor"] = KeyEvent;
    /**
     * @param {?} canCreateDiscussions
     * @param {?} key
     * @return {?}
     */
    WMCacheControl["prototype"]["processTrackingEvent"] = function(canCreateDiscussions, key) {
      /** @type {number} */
      var languageOffsetY = window["scrollY"] - this["windowScrollY"];
      return this["windowScrollY"] = window["scrollY"], KeyEvent["prototype"]["processTrackingEvent"]["call"](this, {
        "y" : languageOffsetY
      }, key);
    };
    /**
     * @param {?} parentviewport
     * @return {undefined}
     */
    module["exports"] = function(parentviewport) {
      /**
       * @param {!Object} name
       * @return {?}
       */
      function getTest(name) {
        return function(PL$33) {
          !function(state, PL$22) {
            var result = (new Date)["getTime"]();
            if (lasterr || result < state["lastEventTimestamp"] + _) {
              return;
            }
            PL$27["push"](state["processTrackingEvent"](PL$22, result));
            (function() {
              if (null != _takingTooLongTimeout || allVideoIdsInitialized() && !hitPauseWhileBuffering || 0 == PL$27["length"]) {
                return;
              }
              /** @type {number} */
              _takingTooLongTimeout = setTimeout(function() {
                /** @type {boolean} */
                lasterr = true;
                help(true);
              }, _SERVICE_TAKING_TOO_LONG);
            })();
            if (PL$27["length"] >= _0x2cff3e) {
              nudgePick();
              help(true);
              /** @type {boolean} */
              lasterr = true;
            }
          }(name, PL$33);
        };
      }
      /**
       * @return {?}
       */
      function allVideoIdsInitialized() {
        return void 0 !== window["cancelAnimationFrame"];
      }
      /**
       * @param {boolean} newTab
       * @return {undefined}
       */
      function help(newTab) {
        if (PL$27["length"] > 0) {
          _related2["requestApi"](window["ddjskey"], parentmode, PL$27, function() {
            var result = {};
            /** @type {number} */
            var i = 0;
            for (; i < data["length"]; i++) {
              var row = data[i];
              result[row["eventMessage"]] = row["counter"];
            }
            return result;
          }(), window["dataDomeOptions"]["patternToRemoveFromReferrerUrl"], newTab, window["dataDomeOptions"]["ddResponsePage"]);
        }
      }
      /**
       * @return {undefined}
       */
      function nudgePick() {
        if (null != _takingTooLongTimeout) {
          clearTimeout(_takingTooLongTimeout);
        }
      }
      var _renderTimer;
      /** @type {number} */
      var _SERVICE_TAKING_TOO_LONG = 10000;
      /** @type {number} */
      var _0x2cff3e = 40;
      /** @type {number} */
      var _ = 100;
      /** @type {boolean} */
      var lasterr = false;
      var parentmode = parentviewport;
      var _related2 = new style("le");
      var providedFilters = new firstListItemStyle;
      /** @type {!Array} */
      var PL$27 = [];
      /** @type {null} */
      var _takingTooLongTimeout = null;
      /** @type {boolean} */
      var hitPauseWhileBuffering = false;
      /** @type {boolean} */
      var _0x38cebd = false;
      /** @type {number} */
      var _0x466cd8 = 0;
      /** @type {!Array} */
      var data = [new KeyEvent("mousemove", "mouse move", Event, _0x466cd8++), new KeyEvent("click", "mouse click", Event, _0x466cd8++), new WMCacheControl("scroll", "scroll", test, _0x466cd8++), new KeyEvent("touchstart", "touch start", getCoord, _0x466cd8++), new KeyEvent("touchend", "touch end", getCoord, _0x466cd8++), new KeyEvent("touchmove", "touch move", getCoord, _0x466cd8++), new KeyEvent("keypress", "key press", message, _0x466cd8++), new KeyEvent("keydown", "key down", message, _0x466cd8++), 
      new KeyEvent("keyup", "key up", message, _0x466cd8++)];
      /**
       * @return {undefined}
       */
      this["process"] = function() {
        !function() {
          /** @type {number} */
          var i = 0;
          for (; i < data["length"]; i++) {
            var value = data[i];
            providedFilters["addEventListener"](document, value["eventName"], getTest(value));
          }
        }();
        (function() {
          if (!allVideoIdsInitialized()) {
            return;
          }
          _renderTimer = window["requestAnimationFrame"](function() {
            /** @type {boolean} */
            hitPauseWhileBuffering = true;
          });
        })();
        /** @type {function(): undefined} */
        window["onpagehide"] = window["onbeforeunload"] = function() {
          if (!_0x38cebd) {
            /** @type {boolean} */
            _0x38cebd = true;
            nudgePick();
            (function() {
              if (void 0 === window["cancelAnimationFrame"]) {
                return;
              }
              window["cancelAnimationFrame"](_renderTimer);
            })();
            if (!lasterr) {
              help(false);
            }
          }
        };
      };
    };
  }, {
    "./../common/DataDomeTools" : 3,
    "./../http/DataDomeRequest" : 5
  }],
  10 : [function(opts, module, canCreateDiscussions) {
    var utc = opts("./../fingerprint/DataDomeAnalyzer");
    var formatter = opts("./../http/DataDomeRequest");
    var kmg2 = opts("./../http/DataDomeResponse");
    /**
     * @return {undefined}
     */
    module["exports"] = function() {
      if ("undefined" != typeof window && window["navigator"] && "serviceWorker" in window["navigator"]) {
        (function() {
          /**
           * @return {undefined}
           */
          function Channel() {
            try {
              var channel;
              if (window["MessageChannel"] && navigator["serviceWorker"]["controller"] && navigator["serviceWorker"]["controller"]["postMessage"]) {
                if ((channel = new MessageChannel)["port1"] && channel["port2"]) {
                  navigator["serviceWorker"]["controller"]["postMessage"]({
                    "type" : "INIT_PORT",
                    "ddOptions" : JSON["stringify"](window["dataDomeOptions"])
                  }, [channel["port2"]]);
                  /**
                   * @param {!Object} mdtRow
                   * @return {undefined}
                   */
                  channel["port1"]["onmessage"] = function(mdtRow) {
                    if (mdtRow["data"]["ddCaptchaUrl"]) {
                      (new kmg2)["displayCaptchaPage"](mdtRow["data"]["ddCaptchaUrl"]);
                    } else {
                      if (mdtRow["data"] && mdtRow["data"]["indexOf"] && (mdtRow["data"]["indexOf"]("datado") > -1 || mdtRow["data"]["indexOf"]("captcha") > -1)) {
                        (new kmg2)["displayCaptchaPage"](mdtRow["data"]);
                      }
                    }
                  };
                }
              }
            } catch (_0x5240d5) {
            }
          }
          if (void 0 !== navigator["serviceWorker"]["ready"]) {
            navigator["serviceWorker"]["ready"]["then"](Channel);
          }
          if (navigator["serviceWorker"]["controller"]) {
            Channel();
          }
        })();
      }
      /**
       * @return {?}
       */
      this["processSyncRequest"] = function() {
        var initConfig = new utc;
        var artistTrack = initConfig["process"]();
        return setTimeout(function() {
          (new formatter("ch"))["requestApi"](window["ddjskey"], artistTrack, [], [], window["dataDomeOptions"]["patternToRemoveFromReferrerUrl"], true, window["dataDomeOptions"]["ddResponsePage"]);
          setTimeout(function() {
            initConfig["clean"]();
          }, 2000);
        }), artistTrack;
      };
      /**
       * @param {?} params
       * @param {?} mmaFrontpagePriority
       * @param {?} isBgroundImg
       * @param {?} usage
       * @return {undefined}
       */
      this["processAsyncRequests"] = function(params, mmaFrontpagePriority, isBgroundImg, usage) {
        var model = this;
        if (window["XMLHttpRequest"]) {
          var function__361 = XMLHttpRequest["prototype"]["open"];
          /**
           * @return {undefined}
           */
          XMLHttpRequest["prototype"]["open"] = function() {
            if (void 0 !== this["addEventListener"]) {
              this["addEventListener"]("load", function(event) {
                var data = event["currentTarget"];
                if (!("text" !== data["responseType"] && "" !== data["responseType"] && "json" !== data["responseType"] || !model["filterAsyncResponse"](data["responseURL"], params, usage))) {
                  (new kmg2)["process"]("json" === data["responseType"] ? data["response"] : data["responseText"], data["getAllResponseHeaders"](), mmaFrontpagePriority, isBgroundImg, data, usage);
                }
              });
            }
            function__361["apply"](this, arguments);
          };
        }
        if (window["fetch"]) {
          var f = window["fetch"];
          /**
           * @return {?}
           */
          window["fetch"] = function() {
            if (window["dataDomeOptions"]["overrideAbortFetch"] && arguments["length"] > 1 && arguments[1] && void 0 !== arguments[1]["signal"] && model["filterAsyncResponse"](arguments[0], params, usage)) {
              try {
                delete arguments[1]["signal"];
              } catch (_0x505f1a) {
              }
            }
            var value = f["apply"](this, arguments);
            return void 0 === value["then"] ? value : (value["catch"](function(canCreateDiscussions) {
            }), value["then"](function(kwArgs) {
              kwArgs["clone"]()["text"]()["then"](function(data) {
                try {
                  var agents_html = JSON["parse"](data);
                  if (model["filterAsyncResponse"](kwArgs["url"], params)) {
                    (new kmg2)["process"](agents_html, kwArgs["headers"], mmaFrontpagePriority, isBgroundImg, null, usage);
                  }
                } catch (_0x5c1cca) {
                }
              });
            }), value);
          };
        }
      };
      /**
       * @param {!Object} text
       * @param {!Object} params
       * @param {?} canCreateDiscussions
       * @return {?}
       */
      this["filterAsyncResponse"] = function(text, params, canCreateDiscussions) {
        if (text === window["dataDomeOptions"]["endpoint"]) {
          return false;
        }
        if (null == text) {
          return true;
        }
        if (canCreateDiscussions) {
          /** @type {string} */
          var t = "DDUser-Challenge";
          return text["slice"](text["length"] - t["length"]) === t;
        }
        if (0 === params["length"]) {
          return true;
        }
        /** @type {boolean} */
        var isShopify = false;
        /** @type {number} */
        var i = 0;
        for (; !isShopify && i < params["length"];) {
          var val = params[i];
          if ("" !== val && text["indexOf"](val) > -1) {
            /** @type {boolean} */
            isShopify = true;
          }
          i++;
        }
        return isShopify;
      };
    };
  }, {
    "./../fingerprint/DataDomeAnalyzer" : 4,
    "./../http/DataDomeRequest" : 5,
    "./../http/DataDomeResponse" : 6
  }]
}, {}, [7]);
