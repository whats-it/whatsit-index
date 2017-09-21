'use strict';

var createPod = require('../lib/createPod');
var PODNAME = '';
var AwPubSub = require('whatsit-pubsub')

exports.on = function () {

  let awPubSub = new AwPubSub()
  awPubSub.nrp.on('whatsit/index/video', function(data, channel) {
    console.log('connectionName =>' + channel);
    console.log('whatsit/index/video data =>' + data);

    if (channel.includes("video")) {
      console.log('video ok!')

      //create bigquery pod !
      PODNAME = "video";
      createPod.spawnPod(PODNAME, data);

    }
  })
}

