#跨域CORS
网页中不能相应协议、IP、端口任一不同的请求
#解决跨域
1.JSONP
2.服务端设置
Access-Control-Allow-Origin：*
Access-Control-Allow-Methods： ‘’
3.node、nginx代理
4.相同2级域名的 可以设置document.domain

#XSS 恶意脚步
例如表单提交<script>alert(233)</script>

措施
1.对特殊符号进行转义
2.cookie设置http-only
3.cookie不设置隐私信息

#CSRF 跨站请求伪造
img 和script标签不受跨域影响
先访问a网站
在b网站的img标签中发起a网站的请求 就带上了a网站的cookie

措施
    请求参数里可以加入后台返回的token

#SQl注入
