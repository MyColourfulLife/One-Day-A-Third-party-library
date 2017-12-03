[debug](https://github.com/visionmedia/debug)是JavaScript的一个小型的调试工具

使用说明：它暴露了一个函数，这个函数传递一个名字作为参数，它会返回一个装饰过的打印函数，根据名字会有不同的颜色的打印结果，可以方便的去调试代码。

使用
```js
//一个参见 返回的是一个 打印函数
var a = require('debug')('worker:a')
// 使用新的a函数打印日志
a('doing working');
```

只有在调试模式下才会输出日志
```sh
DEBUG=http npm start //查看 http命名的debug 
DEBUG=worker:a npm start //查看 worker：a 的debug
DEBUG=worker:* npm start //查看workker：匹配到的debug
DEBUG=* npm start //查看所有的debug
```