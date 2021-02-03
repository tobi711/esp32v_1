// Decoder for device payload encoder "PLAIN"
// copy&paste to TTN Console -> Applications -> PayloadFormat -> Decoder

function Decoder(bytes, port) {
  var decoded = {};

  if (port === 1) {
    var i = 0;

    if (bytes.length >= 2) {
      decoded.wifi = (bytes[i++] << 8) | bytes[i++];
    }
     
    if (bytes.length === 4 || bytes.length > 15) {
      decoded.ble = (bytes[i++] << 8) | bytes[i++];
    }

    if (bytes.length > 4) {
      decoded.latitude = ((bytes[i++] << 24) | (bytes[i++] << 16) | (bytes[i++] << 8) | bytes[i++]);
      decoded.longitude = ((bytes[i++] << 24) | (bytes[i++] << 16) | (bytes[i++] << 8) | bytes[i++]);
      decoded.sats = bytes[i++];
      decoded.hdop = (bytes[i++] << 8) | (bytes[i++]);
      decoded.altitude = ((bytes[i++] << 8) | (bytes[i++]));
    }
  }

  if (port === 2) {
    var i = 0;
    decoded.battery = ((bytes[i++] << 8) | bytes[i++]);
    decoded.uptime = ((bytes[i++] << 56) | (bytes[i++] << 48) | (bytes[i++] << 40) | (bytes[i++] << 32) |
      (bytes[i++] << 24) | (bytes[i++] << 16) | (bytes[i++] << 8) | bytes[i++]);
    decoded.temp = bytes[i++];
    decoded.memory = ((bytes[i++] << 24) | (bytes[i++] << 16) | (bytes[i++] << 8) | bytes[i++]);
    decoded.reset0 = bytes[i++];
    decoded.reset1 = bytes[i++];
  }

  if (port === 4) {
    var i = 0;
    decoded.latitude = ((bytes[i++] << 24) | (bytes[i++] << 16) | (bytes[i++] << 8) | bytes[i++]);
    decoded.longitude = ((bytes[i++] << 24) | (bytes[i++] << 16) | (bytes[i++] << 8) | bytes[i++]);
    decoded.sats = bytes[i++];
    decoded.hdop = (bytes[i++] << 8) | (bytes[i++]);
    decoded.altitude = ((bytes[i++] << 8) | (bytes[i++]));
  }

  if (port === 5) {
    var i = 0;
    decoded.button = bytes[i++];
  }

  if (port === 6) {
    var i = 0;
    decoded.rssi = bytes[i++];
    decoded.beacon = bytes[i++];
  }

  if (port === 7) {
    var i = 0;
    decoded.temperature = ((bytes[i++] << 8) | bytes[i++]);
    decoded.pressure = ((bytes[i++] << 8) | bytes[i++]);
    decoded.humidity = ((bytes[i++] << 8) | bytes[i++]);
    decoded.air = ((bytes[i++] << 8) | bytes[i++]);
  }

  if (port === 8) {
    var i = 0;
    if (bytes.length >= 2) {
      decoded.battery = (bytes[i++] << 8) | bytes[i++];
    }
  }

  if (port === 9) {
    // timesync request
    if (bytes.length === 1) {
      decoded.timesync_seqno = bytes[0];
    }
    // epoch time answer
    if (bytes.length === 5) {
      var i = 0;
      decoded.time = ((bytes[i++] << 24) | (bytes[i++] << 16) | (bytes[i++] << 8) | bytes[i++]);
      decoded.timestatus = bytes[i++];
    }
  }

  if (port === 10) {
    var i = 0;
    if (bytes.length >= 2) {
      decoded.ens = (bytes[i++] << 8) | bytes[i++];
    }
  }

  // User data + with for loop 
  if (port === 11) {

    var i = 0;
    var j = 2;
    var z= 4; 
    var u = 6;
    var o = 8;
    var p= 10; 
    var w = 12;
    var e = 14;
    var r= 16; 
    var g= 18;

    // 16 MACs = 32 Bytes 
    if (bytes.length >= 2) {

      decoded.macsBuffer1 = (bytes[i++] << 8) | bytes[i++];
      decoded.macsBuffer2 = (bytes[j++] << 8) | bytes[j++];
      decoded.macsBuffer3 = (bytes[z++] << 8) | bytes[z++];
      decoded.macsBuffer4 = (bytes[u++] << 8) | bytes[u++];
      decoded.macsBuffer5 = (bytes[o++] << 8) | bytes[o++];
      decoded.macsBuffer6 = (bytes[p++] << 8) | bytes[p++]; 
      decoded.macsBuffer7 = (bytes[w++] << 8) | bytes[w++]; 
      decoded.macsBuffer8 = (bytes[e++] << 8) | bytes[e++]; 
      decoded.macsBuffer9 = (bytes[r++] << 8) | bytes[r++]; 

      decoded.macsBufferA = (bytes[g++] << 8) | bytes[g++]; 
      decoded.macsBufferB = (bytes[g+2] << 8) | bytes[g+2]; 
      decoded.macsBufferC = (bytes[g+4] << 8) | bytes[g+4]; 
      decoded.macsBufferD = (bytes[g+6] << 8) | bytes[g+6]; 
      decoded.macsBufferE = (bytes[g+8] << 8) | bytes[g+8]; 
      decoded.macsBufferF = (bytes[g+10] << 8) | bytes[g+10]; 
      decoded.macsBufferG = (bytes[g+12] << 8) | bytes[g+12]; 

    }

    }
  

    

  return decoded;
}
