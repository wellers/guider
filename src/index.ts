import { Buffer } from 'node:buffer';

function toStringFromGuid(input: string) {
	const guid = guidToBytes(input)
	const buffer = Buffer.from(guid);
	const base64: string = buffer.toString('base64');

	return base64.replace("/", "-").replace("+", "_").replace("==", "");
}

function toGuidFromString(input: string) {
	input = input.replace("-", "/").replace("_", "+") + "==";

	const buffer = Buffer.from(input, 'base64');
	const byteArray = Uint16Array.from(buffer);

	return arrayToGuidString(byteArray);
}

function guidToBytes(guid: string) {
	const regex = /.{1,2}/g;

	let bytes: number[] = [];

	if (!guid.includes('-')) {
		throw Error('GUID is badly formatted.');
	}

	guid.split('-').map((value: string, index: number) => {
		const matches = value.match(regex);

		if (!Array.isArray(matches) || matches.length === 0) {
			throw Error('GUID is badly formatted.');
		}

		const bytesInChar: string[] = index < 3
			? matches.reverse()
			: matches;

		bytesInChar.map(byte => bytes.push(parseInt(byte, 16)));
	});

	return bytes;
}

function arrayToGuidString(byteArray: Uint16Array) {
	let guid = "";

	//AD GUID needs to be in this order	
	let order = [3, 2, 1, 0, 5, 4, 7, 6, 8, 9, 10, 11, 12, 13, 14, 15];

	for (let i = 0; i < order.length; i++) {
		const hex = Number(byteArray[order[i]]).toString(16);
		
		let part = `0${hex}`;

		guid += part.slice(-2);
	}

	guid = guid.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, "$1-$2-$3-$4-$5")

	return guid;
}

export { toStringFromGuid, toGuidFromString }