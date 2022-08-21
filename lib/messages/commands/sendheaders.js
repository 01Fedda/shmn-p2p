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
function SendHeadersMessage(arg, options) {
  Message.call(this, options);
  this.command = 'sendheaders';
}
inherits(SendHeadersMessage, Message);

SendHeadersMessage.prototype.setPayload = function(payload) {
};

SendHeadersMessage.prototype.getPayload = function() {
};

module.exports = SendHeadersMessage;
