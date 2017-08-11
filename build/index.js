'use strict';













var _jestUtil = require('jest-util');
var _jestMock = require('jest-mock');var _jestMock2 = _interopRequireDefault(_jestMock);
var _jsdom = require('jsdom');var _jsdom2 = _interopRequireDefault(_jsdom);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}const

JSDOM = _jsdom2.default.JSDOM; /**
                                * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                *
                                * This source code is licensed under the BSD-style license found in the
                                * LICENSE file in the root directory of this source tree. An additional grant
                                * of patent rights can be found in the PATENTS file in the same directory.
                                * 
                                */class JSDOMEnvironment {
  constructor(config) {
    // lazy require
    // this.document = JSDom.jsdom(/* markup */ undefined, {
    //   url: config.testURL,
    // });
    // const global = (this.global = this.document.defaultView);
    // Node's error-message stack size is limited at 10, but it's pretty useful
    // to see more than that when a test fails.
    // this.global.Error.stackTraceLimit = 100;

    /* UPDATE start */
    this.dom = new JSDOM(``, {
      url: config.testURL,
      runScripts: "outside-only" });

    this.document = this.dom.window.document;

    const global = this.global = this.dom.window;
    /* UPDATE end */

    (0, _jestUtil.installCommonGlobals)(global, config.globals);

    this.moduleMocker = new _jestMock2.default.ModuleMocker(global);
    this.fakeTimers = new _jestUtil.FakeTimers(global, this.moduleMocker, config);
  }

  dispose() {
    if (this.fakeTimers) {
      this.fakeTimers.dispose();
    }
    if (this.global) {
      this.global.close();
    }
    this.global = null;
    this.document = null;
    this.fakeTimers = null;
  }

  runScript(script) {
    /* UPDATE start */
    if (this.global) {
      return this.dom.runVMScript(script);
    }
    /* UPDATE end */
    return null;
  }}


module.exports = JSDOMEnvironment;