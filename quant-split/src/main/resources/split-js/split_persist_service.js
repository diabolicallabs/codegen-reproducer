/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module split-js/split_persist_service */
var utils = require('vertx-js/util/utils');
var Vertx = require('vertx-js/vertx');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JSplitPersistService = com.diabolicallabs.quant.split.SplitPersistService;
var Split = com.diabolicallabs.quant.model.Split;

/**
 @class
*/
var SplitPersistService = function(j_val) {

  var j_splitPersistService = j_val;
  var that = this;

  /**

   @public
   @param split {Object} 
   @param handler {function} 
   */
  this.create = function(split, handler) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_splitPersistService["create(com.diabolicallabs.quant.model.Split,io.vertx.core.Handler)"](split != null ? new Split(new JsonObject(JSON.stringify(split))) : null, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnDataObject(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param id {string} 
   @param handler {function} 
   */
  this.read = function(id, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_splitPersistService["read(java.lang.String,io.vertx.core.Handler)"](id, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnDataObject(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param split {Object} 
   @param handler {function} 
   */
  this.update = function(split, handler) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_splitPersistService["update(com.diabolicallabs.quant.model.Split,io.vertx.core.Handler)"](split != null ? new Split(new JsonObject(JSON.stringify(split))) : null, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param id {string} 
   @param handler {function} 
   */
  this.delete = function(id, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_splitPersistService["delete(java.lang.String,io.vertx.core.Handler)"](id, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_splitPersistService;
};

/**

 @memberof module:split-js/split_persist_service
 @param vertx {Vertx} 
 @param address {string} 
 @return {SplitPersistService}
 */
SplitPersistService.createProxy = function(vertx, address) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'string') {
    return utils.convReturnVertxGen(JSplitPersistService["createProxy(io.vertx.core.Vertx,java.lang.String)"](vertx._jdel, address), SplitPersistService);
  } else throw new TypeError('function invoked with invalid arguments');
};

// We export the Constructor function
module.exports = SplitPersistService;