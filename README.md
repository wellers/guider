Functions to convert from a guid to URL-friendly Id and the reverse.

**Example**
```js
const { toUrlFriendlyIdFromGuid, toGuidFromUrlFriendlyId } = require('guider');

const testGuid = '4a603b63-58f0-453c-a0f7-1526c3d5761e';

const id = toUrlFriendlyIdFromGuid(testGuid);
const guid = toGuidFromUrlFriendlyId(id);

// toUrlFriendlyIdFromGuid YztgSvBYPEWg9xUmw9V2Hg
console.log('toUrlFriendlyIdFromGuid', id);

// toGuidFromUrlFriendlyId 4a603b63-58f0-453c-a0f7-1526c3d5761e
console.log('toGuidFromUrlFriendlyId', guid);
```
