'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var shmn-lib = require('shmn-lib');

/**
 * @param {Array=} arg - An array of addrs
 * @param {Object=} options
 * @extends Message
 * @constructor
 */
function SendCmpct(arg, options) {
  Message.call(this, options);
  this.command = 'sendcmpct';
}
inherits(SendCmpct, Message);

SendCmpct.prototype.setPayload = function(payload) {
};

SendCmpct.prototype.getPayload = function() {
};

module.exports = SendCmpct;
