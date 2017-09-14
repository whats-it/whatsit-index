'use strict';

var NRP = require('node-redis-pubsub');
var config = require('../config/redis');
var nrp = new NRP(config.connector);
var createPod = require('../lib/createPod');
var PODNAME = '';
var AwPubSub = require('whatsit-pubsub')

exports.on = function () {

  let awPubSub = new AwPubSub()
  awPubSub.nrp.on('whatsit/index/video', function(data, channel) {
    console.log('connectionName =>' + channel);

    if (channel.includes("video")) {
      console.log('video ok!')

      //create bigquery pod !
      PODNAME = "video";
      createPod.spawnPod(PODNAME)

    }
  })
}

