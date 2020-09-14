position:

bfc

absolute/fixed/relative

display

ajax

Node

// 带并发度控制的请求调度

// eg
function comboRequest(apiList: string[], count: number) {

}

comboRequest([...apiList], 2); 

// 并发请求
function request(urls: string[]) {

}

// eg.
request(['/api1', '/api2'])

// 链式调用
存在三个函数 a b c，调用分别打印出 'a' 'b' 'c'
实现 a().b().c() 的调用 // 'a' 'b' 'c'

c().b().a()

HTTP

request/response

header 

request header/response header

content-type

Node Stream

method