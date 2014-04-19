html2video
==========

Prepare a video with html, made from javascript-generated stills.
Why?  Don't ask.  Note: this has nothing to do with html5 video!

Make a html file, say `index.html`, that does whatever you want.
Include this javascript somewhere in it:
```
document.config = {
  first: 1,   // First frame of video
  last: 30,   // Last frame of video
  width: 300, // Width in pixels
  height: 200 // Height in pixels
};

document.step = function(frame) {
  // This function will be called just before rendering each frame.
  // For now, you can assume the frames will be rendered in order -
  // but that may not always be the case.
}
```

Now, get `phantomjs`, and then run:

```
./produce.js index.html
```

You'll get an oodle of `.png` files that you can convert to
a movie using any of a million converters out there.
