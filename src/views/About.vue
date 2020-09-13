<template>
  <div class="daping">
    <h1>财务-资产分析展示</h1>
    <div class="flex-div">
      <div class="chart">
        <h3>收支分析-每月收支情况分析</h3>
        <div id="szfx-mysz"></div>
      </div>
      <div class="chart">
        <h3>收支分析-三公经费分析</h3>
        <div id="szfx-sgjf"></div>
      </div>
    </div>
    <div class="flex-div">
      <div class="chart">
        <h3>项目支出-项目支出进度前10名</h3>
        <div id="xmzc"></div>
      </div>
      <div class="chart">
        <h3>资产类别分布情况</h3>
        <div id="zclb"></div>
      </div>
    </div>
    <div class="flex-div">
      <div class="chart">
        <h3>资产使用状态统计</h3>
        <div id="zcsy"></div>
      </div>
      <div class="chart">
        <h3>多饼</h3>
        <div id="db"></div>
      </div>
    </div>
  </div>
</template>
<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'About',
        components: {
            // HelloWorld
        },
        data () {
            return {
                color:['rgb(78, 112, 240)','rgb(0, 197, 210)','rgb(255, 206, 43)','rgb(255, 129, 44)','rgb(249, 80, 62)','rgb(237, 6, 175)']
            }
        },
        mounted(){
            this.getszfxmysz();
            this.getszfxsgjf();
            this.getxmzc();
            this.getzclb();
            this.getzcsy();
            this.getdb();
        },
        methods: {
            // rendEchart(id){
            //     this.getszfxmysz();
            //
            // },
            getszfxmysz(){
                var that=this;

                axios.get('http://10.2.21.85:8099/revenueExpenditure/query')
                    .then(function(res){
                        if(res.status==200){
                            var data1=[];
                            var data2=[];
                            res.data.data.forEach(function(ele){
                                data1.push(ele.revenue)
                                data2.push(ele.expenditure)
                            })
                            var myChart = echarts.init(document.getElementById("szfx-mysz"));
                            var option =  {
                                color:that.color,
                                title: {
                                    show:false
                                },
                                tooltip: {
                                    trigger: 'axis'
                                },
                                legend: {
                                    data: ['最高气温', '最低气温'],
                                    textStyle:{
                                        color:"#fff"
                                    }
                                },
                                toolbox: {
                                    show: false,
                                },
                                xAxis: {
                                    type: 'category',
                                    boundaryGap: false,
                                    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月', '九月', '十月', '十一月', '十二月'],
                                    axisLabel:{color:'#fff'},
                                    axisLine:{
                                        lineStyle: {
                                            width: 1,
                                            type: 'dashed',
                                            color:'rgba(219, 219, 219, 0.4)'
                                        }
                                    },
                                },
                                yAxis: {
                                    type: 'value',
                                    axisLabel: {
                                        formatter: '{value} 元',
                                        color:'#fff',
                                        width:200
                                    },
                                    axisLine:{
                                        lineStyle: {
                                            width: 1,
                                            type: 'dashed',
                                            color:'rgba(219, 219, 219, 0.4)'
                                        }
                                    },
                                    splitLine:{
                                        lineStyle: {
                                            width: 1,
                                            type: 'dashed',
                                            color:'rgba(219, 219, 219, 0.4)'
                                        }
                                    },
                                },
                                series: [
                                    {
                                        name: '最高气温',
                                        type: 'line',
                                        data: data1,
                                    },
                                    {
                                        name: '最低气温',
                                        type: 'line',
                                        data: data2,
                                    }
                                ]
                            };
                            myChart.setOption(option);
                            window.addEventListener("resize",function(){
                                myChart.resize();
                            })
                        }
                    })
            },
            getszfxsgjf(){
                var that=this;
                axios.get('http://10.2.21.85:8099/public/query')
                    .then(function(res){
                        console.log(res)
                        if(res.status==200){
                            var myChart = echarts.init(document.getElementById("szfx-sgjf"));
                            var data=res.data.data;
                            data.a='分类'
                            var option =  {
                                color:that.color,
                                title: {
                                    show:false
                                },
                                tooltip: {
                                    trigger: 'axis'
                                },
                                dataset: {
                                    dimensions: ['a','official', 'overseasTrips', 'publicrun'],
                                    source: [
                                        data
                                    ]
                                },
                                legend: {
                                    textStyle:{
                                        color:"#fff"
                                    }
                                },
                                xAxis: {
                                    type: 'category',
                                    axisLabel:{color:'#fff'},
                                    axisLine:{
                                        lineStyle: {
                                            width: 1,
                                            type: 'dashed',
                                            color:'rgba(219, 219, 219, 0.4)'
                                        }
                                    },},
                                yAxis: {
                                    axisLabel:{color:'#fff'},
                                    axisLine:{
                                        lineStyle: {
                                            width: 1,
                                            type: 'dashed',
                                            color:'rgba(219, 219, 219, 0.4)'
                                        }
                                    },
                                    splitLine:{
                                        lineStyle: {
                                            width: 1,
                                            type: 'dashed',
                                            color:'rgba(219, 219, 219, 0.4)'
                                        }
                                    },
                                },
                                // Declare several bar series, each will be mapped
                                // to a column of dataset.source by default.
                                series: [
                                    {type: 'bar'},
                                    {type: 'bar'},
                                    {type: 'bar'}
                                ]
                            };
                            myChart.setOption(option);
                            window.addEventListener("resize",function(){
                                myChart.resize();
                            })
                        }
                    })
            },
            getxmzc(){
                var that=this;
                axios.get('http://10.2.21.85:8099/revenueExpenditure/query')
                    .then(function(res){
                        console.log(res)
                        if(res.status==200){
                            var myChart = echarts.init(document.getElementById("xmzc"));
                            var option =   {
                                color:that.color,
                                legend: {
                                    textStyle:{
                                        color:"#fff"
                                    }
                                },
                                xAxis: {
                                    axisLabel:{color:'#fff'},
                                    axisLine:{
                                        lineStyle: {
                                            width: 1,
                                            type: 'dashed',
                                            color:'rgba(219, 219, 219, 0.4)'
                                        }
                                    },
                                    type: 'category',
                                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                },
                                yAxis: {
                                    axisLabel:{color:'#fff'},
                                    axisLine:{
                                        lineStyle: {
                                            width: 1,
                                            type: 'dashed',
                                            color:'rgba(219, 219, 219, 0.4)'
                                        }
                                    },
                                    splitLine:{
                                        lineStyle: {
                                            width: 1,
                                            type: 'dashed',
                                            color:'rgba(219, 219, 219, 0.4)'
                                        }
                                    },
                                    type: 'value'
                                },
                                series: [{
                                    data: [120, 200, 150, 80, 70, 110, 130],
                                    type: 'bar'
                                }]
                            };
                            myChart.setOption(option);
                            window.addEventListener("resize",function(){
                                myChart.resize();
                            })
                        }
                    })
            },
            getzclb(){
                var that=this;
                axios.get('http://10.2.21.85:8099/revenueExpenditure/query')
                    .then(function(res){
                        console.log(res)
                        if(res.status==200){
                            var myChart = echarts.init(document.getElementById("zclb"));
                            var option =  {
                                color:that.color,
                                legend: {
                                    textStyle:{
                                        color:"#fff"
                                    }
                                },
                                tooltip: {
                                    trigger: 'item',
                                    formatter: "{a} <br/>{b} : {c}%"
                                },
                                toolbox: {
                                    feature: {
                                        dataView: {readOnly: false},
                                        restore: {},
                                        saveAsImage: {}
                                    }
                                },
                                legend: {
                                    data: ['展现','点击','访问','咨询','订单'],
                                    textStyle:{
                                        color:"#fff"
                                    }
                                },

                                series: [
                                    {
                                        name:'漏斗图',
                                        type:'funnel',
                                        left: '10%',
                                        top: 60,
                                        //x2: 80,
                                        bottom: 60,
                                        width: '80%',
                                        // height: {totalHeight} - y - y2,
                                        min: 0,
                                        max: 100,
                                        minSize: '0%',
                                        maxSize: '100%',
                                        sort: 'descending',
                                        gap: 2,
                                        label: {
                                            show: true,
                                            position: 'inside'
                                        },
                                        labelLine: {
                                            length: 10,
                                            lineStyle: {
                                                width: 1,
                                                type: 'solid',
                                                color:'#eee'
                                            }
                                        },
                                        itemStyle: {
                                            borderColor: '#fff',
                                            borderWidth: 1
                                        },
                                        emphasis: {
                                            label: {
                                                fontSize: 20
                                            }
                                        },
                                        data: [
                                            {value: 60, name: '访问'},
                                            {value: 40, name: '咨询'},
                                            {value: 20, name: '订单'},
                                            {value: 80, name: '点击'},
                                            {value: 100, name: '展现'}
                                        ]
                                    }
                                ]
                            };
                            myChart.setOption(option);
                            window.addEventListener("resize",function(){
                                myChart.resize();
                            })
                        }
                    })
            },
            getzcsy(){
                var that=this;
                axios.get('http://10.2.21.85:8099/revenueExpenditure/query')
                    .then(function(res){
                        console.log(res)
                        if(res.status==200){
                            var myChart = echarts.init(document.getElementById("zcsy"));
                            var option =  {
                                color:that.color,
                                legend: {
                                    textStyle:{
                                        color:"#fff"
                                    }
                                },
                                tooltip: {
                                    trigger: 'axis',
                                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                    }
                                },
                                legend: {
                                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                                    textStyle:{
                                        color:"#fff"
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis: {
                                    type: 'value',
                                    axisLabel:{color:'#fff'},
                                    axisLine:{
                                        lineStyle: {
                                            width: 1,
                                            type: 'dashed',
                                            color:'rgba(219, 219, 219, 0.4)'
                                        }
                                    },
                                    splitLine:{
                                        show:false,
                                        lineStyle: {
                                            width: 1,
                                            type: 'dashed',
                                            color:'rgba(219, 219, 219, 0.4)'
                                        }
                                    },
                                },
                                yAxis: {
                                    axisLabel:{color:'#fff'},
                                    axisLine:{
                                        lineStyle: {
                                            width: 1,
                                            type: 'dashed',
                                            color:'rgba(219, 219, 219, 0.4)'
                                        }
                                    },
                                    splitLine:{
                                        lineStyle: {
                                            width: 1,
                                            type: 'dashed',
                                            color:'rgba(219, 219, 219, 0.4)'
                                        }
                                    },
                                    type: 'category',
                                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                                },
                                series: [
                                    {
                                        name: '直接访问',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            show: true,
                                            position: 'insideRight'
                                        },
                                        data: [320, 302, 301, 334, 390, 330, 320]
                                    },
                                    {
                                        name: '邮件营销',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            show: true,
                                            position: 'insideRight'
                                        },
                                        data: [120, 132, 101, 134, 90, 230, 210]
                                    },
                                    {
                                        name: '联盟广告',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            show: true,
                                            position: 'insideRight'
                                        },
                                        data: [220, 182, 191, 234, 290, 330, 310]
                                    },
                                    {
                                        name: '视频广告',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            show: true,
                                            position: 'insideRight'
                                        },
                                        data: [150, 212, 201, 154, 190, 330, 410]
                                    },
                                    {
                                        name: '搜索引擎',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            show: true,
                                            position: 'insideRight'
                                        },
                                        data: [820, 832, 901, 934, 1290, 1330, 1320]
                                    }
                                ]
                            };
                            myChart.setOption(option);
                            window.addEventListener("resize",function(){
                                myChart.resize();
                            })
                        }
                    })
            },
            getdb(){
                var that=this;
                axios.get('http://10.2.21.85:8099/revenueExpenditure/query')
                    .then(function(res){
                        console.log(res)
                        if(res.status==200){
                            var myChart = echarts.init(document.getElementById("db"));
                            var data = [{
                                name: 'Apples',
                                value: 70
                            }, {
                                name: 'Strawberries',
                                value: 68
                            }, {
                                name: 'Bananas',
                                value: 48
                            }, {
                                name: 'Oranges',
                                value: 40
                            }, {
                                name: 'Pears',
                                value: 32
                            }, {
                                name: 'Pineapples',
                                value: 27
                            }, {
                                name: 'Grapes',
                                value: 18
                            }];
                            var option =  {
                                color:that.color,
                                series: [{
                                    type: 'pie',
                                    radius: '25%',
                                    center: ['50%', '50%'],
                                    data: data,
                                    animation: false,
                                    label: {
                                        position: 'outer',
                                        alignTo: 'none',
                                        bleedMargin: 5
                                    },
                                    left: 0,
                                    right: '66.6667%',
                                    top: 0,
                                    bottom: 0
                                }, {
                                    type: 'pie',
                                    radius: '25%',
                                    center: ['50%', '50%'],
                                    data: data,
                                    animation: false,
                                    label: {
                                        position: 'outer',
                                        alignTo: 'labelLine',
                                        bleedMargin: 5
                                    },
                                    left: '33.3333%',
                                    right: '33.3333%',
                                    top: 0,
                                    bottom: 0
                                }, {
                                    type: 'pie',
                                    radius: '25%',
                                    center: ['50%', '50%'],
                                    data: data,
                                    animation: false,
                                    label: {
                                        position: 'outer',
                                        alignTo: 'edge',
                                        margin: 20
                                    },
                                    left: '66.6667%',
                                    right: 0,
                                    top: 0,
                                    bottom: 0
                                }]
                            };
                            myChart.setOption(option);
                            window.addEventListener("resize",function(){
                                myChart.resize();
                            })
                        }
                    })
            }
        }
    }
</script>
<style scoped>
  .daping{
    background: url("/img/bg.png");
    min-height: 100vh;
    color: #fff;
  }
  h1{
    text-align: center;
    line-height: 86px;
    font-size: 44px;
  }
  .flex-div{
    width:100%;
    display: flex;

  }
  .flex-div h3{
    color: rgba(76,246,243,1);
    font-size: 22px;
    margin-bottom:20px;
  }
  .flex-div>div{
    flex:1;
    margin:10px;
  }
  .chart{
    height: 400px;
    border:1px solid rgb(0, 188, 255);
    background:rgba(0, 188, 255, 0.23) ;
    padding:20px;
  }
  .chart >div{
    height: 380px;
    width: 100%;
  }
</style>
