// 1. CDN
// 2. Global acceleration guangzhou
// 3. Global acceleartion silicon valley

import { promisify } from 'node:util';
import stream from 'node:stream';
import fs from 'node:fs';
import got from 'got';

const pipeline = promisify(stream.pipeline);


console.log('San Francisco COS with CDN');
let i = 0
while (i < 10) {
	const startTime = new Date().getTime()
	await pipeline(
		got.stream('https://slt-binary-sv-1300963013.file.myqcloud.com/v3.20.3/serverless-tencent-macos-x64'),
		fs.createWriteStream('slt-macos')
	);
	const endTime = new Date().getTime()
	const timeCost = (endTime - startTime) / 1000
	console.log(`timeCost`, timeCost)

	i += 1;
}
console.log('GuangZhou COS with CDN');
i = 0
while (i < 10) {
	const startTime = new Date().getTime()
	await pipeline(
		got.stream('https://sp-assets-1300963013.file.myqcloud.com/serverless-tencent-macos-x64'),
		fs.createWriteStream('slt-macos')
	);
	const endTime = new Date().getTime()
	const timeCost = (endTime - startTime) / 1000
	console.log(`timeCost`, timeCost)

	i += 1;
}
console.log('San Francisco COS with Global acceleration');
i = 0
while (i < 10) {
	const startTime = new Date().getTime()
	await pipeline(
		got.stream('https://slt-binary-sv-1300963013.cos.accelerate.myqcloud.com/v3.20.3/serverless-tencent-macos-x64'),
		fs.createWriteStream('slt-macos')
	);
	const endTime = new Date().getTime()
	const timeCost = (endTime - startTime) / 1000
	console.log(`timeCost`, timeCost)

	i += 1;
}


