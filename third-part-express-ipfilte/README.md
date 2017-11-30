express-ipfilter 
过滤ip地址中间件，可以允许某些ip访问，也可以禁止某些ip访问。
[express-ipfilter ](https://github.com/baminteractive/express-ipfilter)有两种模式，默认是阻止。

1. 安装第三方库

```js
npm install express-ipfilter --save
```

2. 引入第三方库

```js
var ipfilter = require('express-ipfilter').IpFilter;
```

3. 使用第三方库

```js
var ips = ['127.0.0.1','::1'];//local host 在ipv4默认对应127.0.0.1 ipv6默认对应::1

app.use(ipfilter(ips));
```

ipfilter有两个参数，第一个是要处理的IP地址，第二个options选项。

选项如下图示：
| Property       | Description                              | Type     | Default            |
| -------------- | ---------------------------------------- | -------- | ------------------ |
| mode           | whether to *deny* or *allow* to the IPs provided | string   | deny               |
| log            | console log actions                      | boolean  | true               |
| logLevel       | level of logging (*all*,*deny*,*allow*)  | string   | all                |
| allowedHeaders | an array of strings for header names that are acceptable for retrieving an IP address | array    | []                 |
| excluding      | routes that should be excluded from ip filtering | array    | []                 |
| detectIp       | define a custom function that takes an Express request object and returns an IP address to test against | function | built-in detection |

如果默认使用拒绝模式，被拒绝的访问将会抛出错误，需要进行错误处理。

4. 错误处理

```js
var IpDeniedError = require('express-ipfilter').IpDeniedError;

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  //对IpDeniedError类型错误的处理
  if(err instanceof IpDeniedError) {
    res.status(401);
  }else{
    res.status(err.status || 500);    
  }
  // render the error page
  res.render('error', {
    message: 'You shall not pass',
    error: err
  });
});
```

