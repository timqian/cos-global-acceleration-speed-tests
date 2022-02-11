# cos-global-acceleration-speed-tests

对于位于sp-shanghai 的 COS 桶

测试了在开启与关闭全球加速的情况下，下列操作所需时间

- 获取链接(getUrl)
- 上传文件(putFile)
- 下载文件(getFile)

## How to test

1. fill in `secretId` and `secretKey` [here](https://github.com/timqian/cos-global-acceleration-speed-tests/blob/main/index.mjs#L19)
2. Install dependencies and run script
```bash
npm i
node index.mjs
```

## Results(by Tim)

结论：
1. 国内本地网络，通过全球加速访问上海 COS，速度与直接访问差不多，
2. 在 GitHub 机器上，直接通过全球加速访问上海 COS，稳定性较差容易出现上传几分钟甚至需要 10 几分钟才成功的情况，使用全球加速之后稳定性提升

### 1. 本地测试(重庆电信)

```
Shanghai, With global accelerate

getUrl: 5.037ms
putFile: 4.605s
getFile: 14.330s
getUrl: 8.345ms
putFile: 4.502s
getFile: 14.282s
getUrl: 2.834ms
putFile: 5.234s
getFile: 13.941s
getUrl: 3.034ms
putFile: 4.398s
getFile: 13.741s
getUrl: 11.196ms
putFile: 4.724s
getFile: 13.787s
getUrl: 2.881ms
putFile: 4.668s
getFile: 14.440s
getUrl: 9.875ms
putFile: 4.385s
getFile: 15.062s
getUrl: 8.171ms
putFile: 4.325s
getFile: 13.361s
getUrl: 8.682ms
putFile: 4.273s
getFile: 14.311s
getUrl: 7.573ms
putFile: 4.420s
getFile: 14.408s

Shanghai, No global accelerate

getUrl: 3.019ms
putFile: 6.854s
getFile: 15.816s
getUrl: 9.453ms
putFile: 8.651s
getFile: 15.812s
getUrl: 9.135ms
putFile: 8.266s
getFile: 15.271s
getUrl: 4.374ms
putFile: 7.911s
getFile: 14.443s
getUrl: 4.008ms
putFile: 11.121s
getFile: 15.731s
getUrl: 4.015ms
putFile: 8.596s
getFile: 16.178s
getUrl: 11.145ms
putFile: 7.821s
getFile: 16.159s
getUrl: 3.358ms
putFile: 9.166s
getFile: 14.038s
getUrl: 4.71ms
putFile: 8.675s
getFile: 14.129s
getUrl: 8.922ms
putFile: 4.850s
getFile: 15.165s
```

### 2. On github codespace
```
Shanghai, With global accelerate

getUrl: 3.493ms
putFile: 5.527s
getFile: 18.550s
getUrl: 2.085ms
putFile: 5.373s
getFile: 8.453s
getUrl: 2.285ms
putFile: 5.299s
getFile: 9.814s
getUrl: 4.315ms
putFile: 6.983s
getFile: 8.571s
getUrl: 2.017ms
putFile: 2.352s
getFile: 2.633s
getUrl: 1.37ms
putFile: 2.622s
getFile: 1.733s
getUrl: 2.38ms
putFile: 2.568s
getFile: 27.037s
getUrl: 1.412ms
putFile: 2.335s
getFile: 2.124s
getUrl: 1.361ms
putFile: 2.542s
getFile: 1.624s
getUrl: 1.91ms
putFile: 2.263s
getFile: 14.156s

Shanghai, No global accelerate

getUrl: 1.157ms
putFile: 19.673s
getFile: 11.911s
getUrl: 1.409ms
putFile: 10:50.642 (m:ss.mmm)
getFile: 4.866s
getUrl: 3.083ms
putFile: 6.339s
getFile: 4.287s
getUrl: 1.003ms
putFile: 6.946s
getFile: 3.053s
getUrl: 1.514ms
putFile: 14.875s
getFile: 4.220s
getUrl: 1.129ms
putFile: 28.809s
getFile: 8.671s
getUrl: 1.313ms
putFile: 11.459s
getFile: 1.843s
getUrl: 1.159ms
putFile: 10:59.924 (m:ss.mmm)
getFile: 6.958s
getUrl: 1.852ms
putFile: 10.483s
getFile: 4.906s
getUrl: 1.264ms
putFile: 1:59.072 (m:ss.mmm)
getFile: 12.463s
```
