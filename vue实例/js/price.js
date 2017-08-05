/**
 * Created by Administrator on 2017/8/3.
 */
var _data=[
    { 'name':'A','price':10},
    { 'name':'B','price':20},
    { 'name':'C','price':30},
    { 'name':'D','price':5},
    { 'name':'E','price':1},
    { 'name':'AB','price':15},
    { 'name':'AC','price':22},
    { 'name':'AD','price':50},
    { 'name':'AE','price':125}
];
var _type=[
    { label:'小于5万',value:'<5'},
    { label:'5万-10万',value:'5-10'},
    { label:'10万-15万',value:'10-15'},
    { label:'15万-20万',value:'15-20'},
    { label:'20万-25万',value:'20-25'},
    { label:'大于25万',value:'>25'},
];
var child={
    template:'#myTem',
    props:['dataMes','typeMes'],
    data:function(){
        return {
            curChange:''
        }
    },
    methods:{
        doChange:function(value){
            this.curChange=value;
        }
    },
    computed:{
        dataFil:function(){
            var _out=[];
            if(!this.curChange){
                _out=this.dataMes;
            }else if(this.curChange=='<5'){
                _out=this.dataMes.filter(function(data){
                    return data.price<5;
                });
            }else if(this.curChange=='5-10'){
                _out=this.dataMes.filter(function(data){
                    return data.price>=5 &&data.price<=10
                })
            }else if(this.curChange=='10-15'){
                _out=this.dataMes.filter(function(data){
                    return data.price>=10 &&data.price<=15
                })
            }else if(this.curChange=='15-20'){
                _out=this.dataMes.filter(function(data){
                    return data.price>=15 &&data.price<=20
                })
            }else if(this.curChange=='20-25'){
                _out=this.dataMes.filter(function(data){
                    return data.price>=20 &&data.price<=25
                })
            }else if(this.curChange=='>25'){
                _out=this.dataMes.filter(function(data){
                    return data.price>25
                })
            }
            return _out;
        }
    }
}
new Vue({
    el:'#app',
    data:{
        dataList:_data,
        dataType:_type,

    },
    components:{
        "price":child,
    }
})