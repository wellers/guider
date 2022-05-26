const { toStringFromGuid, toGuidFromString } = require('guider');

const testGuid = '4a603b63-58f0-453c-a0f7-1526c3d5761e';

console.log(testGuid);

const string = toStringFromGuid(testGuid);
console.log('toStringFromGuid', string);

const guid = toGuidFromString(string);
console.log('toGuidFromString', guid);