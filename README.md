## Overview

Functions to convert from GUIDs to URL-friendly IDs and the reverse.

**Example**
```js
const { toUrlFriendlyId, toGuid } = require('guider');

const testGuid = '4a603b63-58f0-453c-a0f7-1526c3d5761e';

const id = toUrlFriendlyId(testGuid);
const guid = toGuid(id);

// toUrlFriendlyId YztgSvBYPEWg9xUmw9V2Hg
console.log('toUrlFriendlyId', id);

// toGuid 4a603b63-58f0-453c-a0f7-1526c3d5761e
console.log('toGuid', guid);
```

## API

`toUrlFriendlyId(guid)` - converts a GUID string into a URL-friendly ID string.
* guid - `string`

`toGuid(id)` - converts a URL-friendly ID into a GUID string.
* id - `string`
