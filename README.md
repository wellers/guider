Functions to convert from a guid to URL-friendly Id and the reverse.

**Example**
```js
const { toStringFromGuid, toGuidFromString } = require('guider');

const testGuid = '4a603b63-58f0-453c-a0f7-1526c3d5761e';

const string = toStringFromGuid(testGuid);

// toStringFromGuid YztgSvBYPEWg9xUmw9V2Hg
console.log('toStringFromGuid', string);

const guid = toGuidFromString(string);

// toGuidFromString 4a603b63-58f0-453c-a0f7-1526c3d5761e
console.log('toGuidFromString', guid);
```
