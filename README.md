async-sha256-js
===============
This is a JavaScript implementation of SHA256 based on one written
by Christoph Bichlmeier <informatik@zombiearena.de> refactored for
asyncronous operation. Details for the original are on his site:
http://www.bichlmeier.info/sha256.html

Usage
=====

Initialize

    var sha256 = new AsyncSha256();

Check the async block size determined by benchmark

    console.log(sha256.async_block_size);

Manually set the async block size (not reccomended, must be a multiple of 64)

    sha256.async_block_size = 65536

Compute a sha256 digest syncronously

    console.log(sha256.sdigest(msg));

Compute a sha256 digest asyncronously

    sha256.adigest(msg, function(hash) { console.log(hash); });
