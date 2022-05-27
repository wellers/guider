const { toUrlFriendlyIdFromGuid, toGuidFromUrlFriendlyId } = require('guider');

const testGuid = '4a603b63-58f0-453c-a0f7-1526c3d5761e';

console.log(testGuid);

const id = toUrlFriendlyIdFromGuid(testGuid);
console.log('toUrlFriendlyIdFromGuid', id);

const guid = toGuidFromUrlFriendlyId(id);
console.log('toGuidFromUrlFriendlyId', guid);