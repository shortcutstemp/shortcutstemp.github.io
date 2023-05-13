/*
 * @Description: 
 * @Version: 
 * @Author: 杨宇鹏
 * @Date: 2023-04-19 20:13:22
 * @LastEditors: 杨宇鹏
 * @LastEditTime: 2023-04-19 22:38:52
 */
new Vue({
    el: '#item',
    data: {
        data: [],
        titleList: new Set(),
        typeIndex: 0,
        productItem: {},
        active: 0
    },
    created () {
        this.getData()
    },
    methods: {
        getData() {
            let _this = this;
            $.ajax({
                url: './data.json',
                success: function (res) {
                    _this.data = res;
                    res.forEach(e => {
                        _this.titleList.add(e.type)
                    });
                    let url = window.location.href
                        let obj = {}
                        /*
                        * 正则匹配
                        * [?&]:匹配?或&其一
                        * [^?&]:非?或非&
                        * */
                        let reg = /[?&][^?&]+=[^?&]+/g
                        let arr = url.match(reg) // return ["?id=123456","&a=b"]
                        if (arr) {
                            arr.forEach((item) => {
                                let tempArr = item.substring(1).split('=')
                                let key = tempArr[0]
                                let val = tempArr[1]
                                obj[key] = val
                            })
                    }
                    let id = ''
                    if (obj.id.indexOf('#') == -1) {
                        id = obj.id
                    } else {
                        id = obj.id.match(/(\S*)#/)[1];
                    }
                    res.forEach(e => {
                        if (e.id == id) {
                            _this.productItem = e
                        }
                    });
                }
            })
        },
        handleDiv(e) {
            this.active = e
        }
    }
})