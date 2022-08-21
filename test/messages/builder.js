'use strict';

var should = require('chai').should();
var P2P = require('../../');
var builder = P2P.Messages.builder;
var shmn-lib = require('shmn-lib');

describe('Messages Builder', function() {

  describe('@constructor', function() {

    it('should return commands based on default', function() {
      // instantiate
      var b = builder();
      should.exist(b);
    });

    it('should return commands with customizations', function() {
      // instantiate
      var b = builder({
        network: shmn-lib.Networks.testnet,
        Block: shmn-lib.Block,
        Transaction: shmn-lib.Transaction
      });
      should.exist(b);
    });

  });

});
