const { toUrlFriendlyId, toGuid } = require('guider');

const testGuid = '4a603b63-58f0-453c-a0f7-1526c3d5761e';

console.log(testGuid);

const id = toUrlFriendlyId(testGuid);
console.log('toUrlFriendlyId', id);

const guid = toGuid(id);
console.log('toGuid', guid);