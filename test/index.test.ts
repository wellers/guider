import { strictEqual } from 'assert';
import { testArray, Test } from '@wellers/testarray';
import { toUrlFriendlyId, toGuid } from '../src/index.js';

const tests: Test[] = [
	{
		name: 'given a guid, should return URL friendly Id',
		args: {
			query: () => toUrlFriendlyId('4a603b63-58f0-453c-a0f7-1526c3d5761e'),
			result: 'YztgSvBYPEWg9xUmw9V2Hg'
		}
	},
	{
		name: 'given an URL friendly Id, should return guid',
		args: {
			query: () => toGuid('YztgSvBYPEWg9xUmw9V2Hg'),
			result: '4a603b63-58f0-453c-a0f7-1526c3d5761e'
		}
	}
];

type TestArguments = {
	query: Function,
	result: string
}

testArray(tests, ({ query, result }: TestArguments) => {
	strictEqual(query(), result);
});