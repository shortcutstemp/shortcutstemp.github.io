/*
 * @Description: 
 * @Version: 
 * @Author: 杨宇鹏
 * @Date: 2023-04-19 19:21:15
 * @LastEditors: 杨宇鹏
 * @LastEditTime: 2023-04-19 21:35:57
 */
new Vue({
    el: '#app',
    data: {
        data: [],
        filterData: [],
        titleList: new Set(),
        typeIndex: 0,
        productItem: {}
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
                    _this.filterData = res
                }
            })
        },
        itemClick(e) {
            let id = e.id
            window.location.href=`./product.html?id=${id}`
        },
        typeClick(e, item) {
            this.typeIndex = e
            if (e == 0) {
                this.filterData = this.data
                return
            } 
            this.filterData = this.data.filter((e) => {
                return e.type == item
            })
        }
    }
})