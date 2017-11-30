### express-useragent中间件
[express-useragent](https://github.com/biggora/express-useragent)用来暴露用户代理，使用这个中间件可以方便的知道访问的设备来源。比如iPhone还是Android Chrome还是IE等

在express中作为中间件的使用方法

1. 安装依赖
```js
npm install express-useragent --save
```

2. 使用中间件，在express中注意使用方法

```js
var useragent = require('express-useragent');
app.use(useragent.express());

```

3. 使用中间件之后，req中就会多一个useragent的属性，这个对象里保存了用户代理的信息
比如打印一下：

```js
app.use(function (req,res,next) {
  console.log(req.useragent);
  next();
});
```

打印结果:
```
{ isAuthoritative: true,
  isMobile: false,
  isTablet: false,
  isiPad: false,
  isiPod: false,
  isiPhone: false,
  isAndroid: false,
  isBlackberry: false,
  isOpera: false,
  isIE: false,
  isEdge: false,
  isIECompatibilityMode: false,
  isSafari: false,
  isFirefox: false,
  isWebkit: false,
  isChrome: true,
  isKonqueror: false,
  isOmniWeb: false,
  isSeaMonkey: false,
  isFlock: false,
  isAmaya: false,
  isPhantomJS: false,
  isEpiphany: false,
  isDesktop: true,
  isWindows: false,
  isLinux: false,
  isLinux64: false,
  isMac: true,
  isChromeOS: false,
  isBada: false,
  isSamsung: false,
  isRaspberry: false,
  isBot: false,
  isCurl: false,
  isAndroidTablet: false,
  isWinJs: false,
  isKindleFire: false,
  isSilk: false,
  isCaptive: false,
  isSmartTV: false,
  isUC: false,
  isFacebook: false,
  silkAccelerated: false,
  browser: 'Chrome',
  version: '62.0.3202.94',
  os: 'OS X',
  platform: 'Apple Mac',
  geoIp: {},
  source: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, likeGecko) Chrome/62.0.3202.94 Safari/537.36' }
```
