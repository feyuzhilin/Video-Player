
function myJsonp(options) {
    return new Promise((resolve, reject) => {
        //判断是否是第一次jsonp请求
        if (!window.jsonpCount) {
            window.jsonpCount = 1
        } else {
            window.jsonpCount++
        }

        let {
            url,
            data,
            timeout = 5000,
            cbkey = 'callback',
        } = options

        //保证每次请求接收的方法都不会重复
        let funcName = 'jsonpReceive' + window.jsonpCount

        //清除本次jsonp请求产生的一些无用东西
        function clear() {
            window[funcName] = null
            script.parentNode.removeChild(script);
            clearTimeout(timer)
        }

        //定义jsonp接收函数
        window[funcName] = function (res) {
            //一旦函数执行了，就等于说请求成功了
            resolve(res)
            clear()
        }

        //请求超时计时器
        let timer = setTimeout(() => {
            reject('超时了')
            clear()
        }, timeout)

        //定义请求的参数
        let params = ''

        //如果有参数
        if (Object.keys(data).length) {
            for (let key in data) {
                params += `&${key}=${encodeURIComponent(data[key])}`;
            }

            params = params.substr(1)
        }

        //拼接最终的请求路径，结尾拼接回调的方法名
        url = url + '?' + params + `&${cbkey}=${funcName}`

        let script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
    })
}


let options = {
    url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
    cbkey: 'jsonpCallback',
    data: {
        // g_tk: 1928093487,
        // inCharset: 'utf-8',
        // outCharset: 'utf-8',
        // notice: 0,
        format: 'jsonp',
        // platform: 'h5',
        // uin: 0,
        // needNewCode: 1
    },
    // QQ音乐接口Jsonp字段
}

myJsonp(options)
    .then(res => {
        console.log(res);
    }, err => {
        console.log(err)
    })
