'use strict';

import COS from 'cos-nodejs-sdk-v5';
import util from 'util';
import Axios from 'axios';
import fs from 'fs'

const axiosConfig = {
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
};

const axios = Axios.create();
axios.defaults.headers.common = {};
axios.defaults.headers.put = {};
axios.defaults.headers.get = {};

const cos = new COS({
  SecretId: '',
  SecretKey: '',
});

const getObjectUrl = util.promisify(cos.getObjectUrl.bind(cos));
let i;

console.log('Shanghai, With global accelerate');
i = 0
while (i < 10) {
  console.time('getUrl');
  const urlInfo = await getObjectUrl({
    Bucket: 'sp-ins-dev-1300963013',
    Region: 'ap-shanghai',
    Method: 'PUT',
    Key: 'speed-test.zip',
    Sign: true,
    Expires: 100000,
    Domain: 'sp-ins-dev-1300963013.cos.accelerate.myqcloud.com',
  });

  console.timeEnd('getUrl');
  console.time('putFile');

  await axios.put(urlInfo.Url, fs.readFileSync('./speed-test.zip'), axiosConfig)

  console.timeEnd('putFile');
  const urlInfo2 = await getObjectUrl({
    Bucket: 'sp-ins-dev-1300963013',
    Region: 'ap-shanghai',
    Method: 'GET',
    Key: 'speed-test.zip',
    Sign: true,
    Expires: 100000,
    Domain: 'sp-ins-dev-1300963013.cos.accelerate.myqcloud.com',
  });
  console.time('getFile');

  await axios.get(urlInfo2.Url, axiosConfig)

  console.timeEnd('getFile');
  i += 1;
}

console.log('Shanghai, No global accelerate');
i = 0
while (i < 10) {
  console.time('getUrl');
  const urlInfo = await getObjectUrl({
    Bucket: 'sp-ins-dev-1300963013',
    Region: 'ap-shanghai',
    Method: 'PUT',
    Key: 'speed-test.zip',
    Sign: true,
    Expires: 100000,
    // Domain: 'sp-ins-dev-1300963013.cos.accelerate.myqcloud.com',
  });

  console.timeEnd('getUrl');
  console.time('putFile');

  await axios.put(urlInfo.Url, fs.readFileSync('./speed-test.zip'), axiosConfig)

  console.timeEnd('putFile');
  const urlInfo2 = await getObjectUrl({
    Bucket: 'sp-ins-dev-1300963013',
    Region: 'ap-shanghai',
    Method: 'GET',
    Key: 'speed-test.zip',
    Sign: true,
    Expires: 100000,
    // Domain: 'sp-ins-dev-1300963013.cos.accelerate.myqcloud.com',
  });
  console.time('getFile');

  await axios.get(urlInfo2.Url, axiosConfig)

  console.timeEnd('getFile');
  i += 1;
}

