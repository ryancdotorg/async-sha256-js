//require('./async-sha256');
require('./dist/async-sha256-min');

var sha256 = new AsyncSha256();
console.log('self test:        ' + (sha256.self_test() ? 'pass' : 'fail'));
msg_chunk = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
console.log('async_block_size: ' + sha256.async_block_size);
msg = msg_chunk;
msg += msg;
msg += msg;
msg += msg;
msg += msg;
msg += msg;
msg += msg;
msg += msg;
msg += msg;
msg += msg;
msg += msg;
msg += msg;
msg += msg;
console.log('msg.length:       ' + msg.length);
var t1 = +new Date;
console.log(sha256.sdigest(msg));
console.log('sdigest:          ' + ((+new Date) - t1) + 'ms');
t1 = +new Date
sha256.adigest(msg, function (h) {
  console.log(h);
  console.log('adigest 1:        ' + ((+new Date) - t1) + 'ms');
});
sha256.adigest(msg, function (h) {
  console.log(h);
  console.log('adigest 2:        ' + ((+new Date) - t1) + 'ms');
});
sha256.adigest(msg, function (h) {
  console.log(h);
  console.log('adigest 3:        ' + ((+new Date) - t1) + 'ms');
});
