'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on shmn-p2p Module {0}'
};

module.exports = require('shmn-lib').errors.extend(spec);
