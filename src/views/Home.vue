<template>
  <div class="container bichart-chart-container">
    <div class="btns">
      <a class="btn">数据提取</a>
      <a class="btn" @click.stop="reCalc">数据修正</a>
<!--      <a class="btn" id="upload">EXCEL导入</a>-->
      <form :action="domain+'/import/importExcel'" method="post" enctype="multipart/form-data">
        <input type="file" name="filename">
        <input type="submit" value="提交文件">
      </form>
    </div>
    <div class="recalc">
      <p v-for="i in recalcList">{{i}}</p>
    </div>
    <div class="tab">
      <ul>
        <li v-for="(i,key) in tabList" :class="{on:i.value==tab}" :key="key" @click="changeTab(i)">{{i.name}}</li>
      </ul>
    </div>
    <div class="content">
      <div v-if="tab==0">
        <div class="table-container">
          <table class="fnormal-table">
            <tr>
              <th colspan="3">
                收入
              </th>
              <th colspan="3">
                支出
              </th>
            </tr>
            <tr>
              <th>科目</th>
              <th>行次</th>
              <th>决算数
              </th>
              <th>功能分类
              </th>
              <th>行次
              </th>
              <th>决算数
              </th>
            </tr>
            <tr v-for="(i,key) in list">
              <td>{{i.subjectName}}</td>
              <td>{{key+1}}</td>
              <td>{{i.incomeMoney}}</td>
              <td>{{i.expenFunName}}</td>
              <td>{{key+1+list.length}}</td>
              <td>{{i.expensesMoney}}</td>
            </tr>
          </table>
        </div>
        <div class="page-container"></div>
      </div>
      <div v-if="tab==1">
        <div class="table-container">
          <table class="fnormal-table">
            <tr>
              <th colspan="4">
              </th>
              <th rowspan="2">
                合计
              </th>
              <th colspan="14">
                工资福利支出
              </th>
              <th colspan="28">
                商品和服务支出
              </th>
              <th colspan="12">
                对个人和家庭的补助
              </th>
              <th colspan="5">
                债务利息及费用支出
              </th>
              <th colspan="13">
                资本性支出（基本建设）
              </th>
              <th colspan="17">
                资本性支出
              </th>
              <th colspan="3">
                对企业补助（基本建设）
              </th>
              <th colspan="6">
                对企业补助
              </th>
              <th colspan="3">
                对社会保障基金补助
              </th>
            </tr>
            <tr>
              <th>支出功能分类科目编码</th>
              <th>支出功能分类科目名称</th>
              <th>项目代码</th>
              <th>项目名称</th>
              <th v-for="i in zhichucolumn">{{i}}</th>
            </tr>
            <tr v-for="t in list">
              <th>{{t['支出功能分类科目编码']}}</th>
              <th>{{t['支出功能分类科目名称']}}</th>
              <th>{{t['项目代码']}}</th>
              <th>{{t['项目名称']}}</th>
              <th>{{t['合计']}}</th>
              <th v-for="i in nums">{{t[i]}}</th>
            </tr>
<!--            <tr v-for="i in list">-->
<!--              <td>{{i.kmbm}}</td>-->
<!--              <td>{{i.kmmc}}</td>-->
<!--              <td>{{i.xmdm}}</td>-->
<!--              <td>{{i.xmmc}}</td>-->
<!--              <td>合计</td>-->
<!--              <td v-for="t in [1,2,3,4,5,6,7]"></td>-->
<!--              <td>{{i['30109']}}</td>-->
<!--              <td>{{i['30110']}}</td>-->
<!--              <td>{{i['30111']}}</td>-->
<!--              <td>{{i['30112']}}</td>-->
<!--              <td>{{i['30113']}}</td>-->
<!--              <td>{{i['30114']}}</td>-->
<!--              <td>{{i['30119']}}</td>-->
<!--              <td>小计</td>-->
<!--              <td>{{i['30201']}}</td>-->
<!--              <td>{{i['30202']}}</td>-->
<!--              <td>{{i['30203']}}</td>-->
<!--              <td>{{i['30204']}}</td>-->
<!--              <td>{{i['30205']}}</td>-->
<!--              <td>{{i['30206']}}</td>-->
<!--              <td>{{i['30207']}}</td>-->
<!--              <td>{{i['30208']}}</td>-->
<!--              <td>{{i['30209']}}</td>-->
<!--              <td>{{i['30211']}}</td>-->
<!--              <td>{{i['30212']}}</td>-->
<!--              <td>{{i['30213']}}</td>-->
<!--              <td>{{i['30214']}}</td>-->
<!--              <td>{{i['30215']}}</td>-->
<!--              <td>{{i['30216']}}</td>-->
<!--              <td>{{i['30217']}}</td>-->
<!--              <td>{{i['30218']}}</td>-->
<!--              <td>{{i['30224']}}</td>-->
<!--              <td>{{i['30225']}}</td>-->
<!--              <td>{{i['30226']}}</td>-->
<!--              <td>{{i['30227']}}</td>-->
<!--              <td>{{i['30228']}}</td>-->
<!--              <td>{{i['30229']}}</td>-->
<!--              <td>{{i['30231']}}</td>-->
<!--              <td>{{i['30239']}}</td>-->
<!--              <td>{{i['30240']}}</td>-->
<!--              <td>{{i['30299']}}</td>-->
<!--              <td>小计</td>-->
<!--              <td>{{i['30301']}}</td>-->
<!--              <td>{{i['30302']}}</td>-->
<!--              <td>{{i['30303']}}</td>-->
<!--              <td>{{i['30304']}}</td>-->
<!--              <td>{{i['30305']}}</td>-->
<!--              <td>{{i['30306']}}</td>-->
<!--              <td>{{i['30307']}}</td>-->
<!--              <td>{{i['30308']}}</td>-->
<!--              <td>{{i['30309']}}</td>-->
<!--              <td>{{i['30310']}}</td>-->
<!--              <td>{{i['30399']}}</td>-->
<!--              <td>小计</td>-->
<!--              <td>{{i['30701']}}</td>-->
<!--              <td>{{i['30702']}}</td>-->
<!--              <td>{{i['30703']}}</td>-->
<!--              <td>{{i['30704']}}</td>-->
<!--              <td>小计</td>-->
<!--              <td>{{i['30901']}}</td>-->
<!--              <td>{{i['30902']}}</td>-->
<!--              <td>{{i['30903']}}</td>-->
<!--              <td>{{i['30905']}}</td>-->
<!--              <td>{{i['30906']}}</td>-->
<!--              <td>{{i['30907']}}</td>-->
<!--              <td>{{i['30908']}}</td>-->
<!--              <td>{{i['30913']}}</td>-->
<!--              <td>{{i['30919']}}</td>-->
<!--              <td>{{i['30921']}}</td>-->
<!--              <td>{{i['30922']}}</td>-->
<!--              <td>{{i['30999']}}</td>-->
<!--              <td>小计</td>-->
<!--              <td>{{i['31001']}}</td>-->
<!--              <td>{{i['31002']}}</td>-->
<!--              <td>{{i['31003']}}</td>-->
<!--              <td>{{i['31005']}}</td>-->
<!--              <td>{{i['31006']}}</td>-->
<!--              <td>{{i['31007']}}</td>-->
<!--              <td>{{i['31008']}}</td>-->
<!--              <td>{{i['31009']}}</td>-->
<!--              <td>{{i['31010']}}</td>-->
<!--              <td>{{i['31011']}}</td>-->
<!--              <td>{{i['31012']}}</td>-->
<!--              <td>{{i['31013']}}</td>-->
<!--              <td>{{i['31019']}}</td>-->
<!--              <td>{{i['31021']}}</td>-->
<!--              <td>{{i['31022']}}</td>-->
<!--              <td>{{i['31099']}}</td>-->
<!--              <td>小计</td>-->
<!--              <td>{{i['31201']}}</td>-->
<!--              <td>{{i['31203']}}</td>-->
<!--              <td>{{i['31204']}}</td>-->
<!--              <td>{{i['31205']}}</td>-->
<!--              <td>{{i['31299']}}</td>-->
<!--              <td>小计</td>-->
<!--              <td>{{i['31302']}}</td>-->
<!--              <td>{{i['31303']}}</td>-->

<!--              &lt;!&ndash;              <td v-for="j in nums">{{i[j]}}</td>&ndash;&gt;-->
<!--&lt;!&ndash;              <td v-for="i in zhichucolumn">{{i}}</td>&ndash;&gt;-->
<!--            </tr>-->

          </table>
        </div>
        <div class="page-container"></div>
      </div>
      <div v-if="tab==2">
        <div class="table-container">
          <table class="fnormal-table">
            <tr>
              <th rowspan="2">
              </th>
              <th rowspan="2">
                行次
              </th>
              <th rowspan="2">
                资产分类
              </th>
              <th rowspan="2">
                资产编号
              </th>
              <th rowspan="2">
                车牌号
              </th>
              <th colspan="3">
                期末账面数
              </th>
              <th rowspan="2">
                使用状况
              </th>
              <th rowspan="2">
                车辆用途
              </th>
            </tr>
            <tr>
              <th>价值</th>
              <th>累计折旧</th>
              <th>净值</th>
            </tr>
            <tr>
              <td>栏次</td>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
            <tr v-for="(i,key) in list">
              <td style="background: #efefef"></td>
              <td>{{key+1}}</td>
              <td>{{i.zicfl}}</td>
              <td>{{i.billcode}}</td>
              <td>{{i.cheph}}</td>
              <td>{{i.jiaz}}</td>
              <td>{{i.leijzj}}</td>
              <td>{{i.jingz}}</td>
              <td>{{i.syzk}}</td>
              <td>{{i.clyt}}</td>
            </tr>
          </table>
        </div>
        <div class="page-container"></div>
      </div>
      <div v-if="tab==3">
        <div class="table-container">
          <table class="fnormal-table">
            <tr>
              <th rowspan="3">
                资产类别
              </th>
              <th rowspan="3">
                行次
              </th>
              <th colspan="4" rowspan="2">
                期初账面数
              </th>
              <th colspan="20">
                期末账面数
              </th>

            </tr>
            <!--          <tr>-->
            <!--                        <th>数量</th>-->
            <!--                        <th>价值</th>-->
            <!--                        <th>累计折旧/摊销</th>-->
            <!--                        <th>净值</th>-->
            <!--          </tr>-->
            <tr>
              <!--            <th>数量</th>-->
              <!--            <th>价值</th>-->
              <!--            <th>累计折旧/摊销</th>-->
              <!--            <th>净值</th>-->
              <th colspan="4">合计</th>
              <th colspan="4">在用</th>
              <th colspan="4">出租出借</th>
              <th colspan="4">闲置</th>
              <th colspan="4">待处置（待报废、毁损等）</th>
            </tr>
            <tr>
              <th>数量</th>
              <th>价值</th>
              <th>累计折旧/摊销</th>
              <th>净值</th>
              <th>数量</th>
              <th>价值</th>
              <th>累计折旧/摊销</th>
              <th>净值</th>
              <th>数量</th>
              <th>价值</th>
              <th>累计折旧/摊销</th>
              <th>净值</th>
              <th>数量</th>
              <th>价值</th>
              <th>累计折旧/摊销</th>
              <th>净值</th>
              <th>数量</th>
              <th>价值</th>
              <th>累计折旧/摊销</th>
              <th>净值</th>
              <th>数量</th>
              <th>价值</th>
              <th>累计折旧/摊销</th>
              <th>净值</th>
            </tr>
            <tr>
              <td>栏次</td>
              <td></td>
              <td v-for="i in numList">{{i}}</td>
            </tr>
            <tr>
              <td>合计</td>
              <td>1</td>
              <td v-for="i in c">{{list[i+'5']||'——'}}</td>
            </tr>
            <tr>
              <td style="white-space: nowrap">一、固定资产 </td>
              <td>2</td>
              <td v-for="i in c">{{list[i+'6']||'——'}}</td>
            </tr>
            <tr>
              <td style="white-space: nowrap">（一）土地、房屋及构筑物</td>
              <td>3</td>
              <td v-for="i in c">{{list[i+'7']||'——'}}</td>
            </tr>
            <tr>
              <td style="white-space: nowrap">（二）通用设备（个、台、辆等）</td>
              <td>4</td>
              <td v-for="i in c">{{list[i+'8']||'——'}}</td>
            </tr>
            <tr>
              <td style="white-space: nowrap">（三）专用设备（个、台等）</td>
              <td>5</td>
              <td v-for="i in c">{{list[i+'9']||'——'}}</td>
            </tr>
            <tr>
              <td style="white-space: nowrap">（四）文物和陈列品（个、件等）</td>
              <td>6</td>
              <td v-for="i in c">{{list[i+'10']||'——'}}</td>
            </tr>
            <tr>
              <td style="white-space: nowrap">（五）图书档案（本、套等）</td>
              <td>7</td>
              <td v-for="i in c">{{list[i+'11']||'——'}}</td>
            </tr>
            <tr>
              <td style="white-space: nowrap">（六）家具、用具、装具及动植物（个、套等）</td>
              <td>8</td>
              <td v-for="i in c">{{list[i+'12']||'——'}}</td>
            </tr>
            <tr>
              <td style="white-space: nowrap">二、无形资产</td>
              <td>9</td>
              <td v-for="i in c">{{list[i+'13']||'——'}}</td>
            </tr>

          </table>
        </div>
        <div class="page-container"></div>
      </div>

    </div>
  </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            // HelloWorld
        },
        data() {
            return {
                domain:domain,
                clist:[],
                nums:[],
                zhichucolumn: [],
                numList: [],
                tabList: [
                    {
                        name: '收入支出固定表',
                        value: 0
                    },
                    {
                        name: '项目支出决算明细表',
                        value: 1
                    },
                    {
                        name: '车辆情况表',
                        value: 2
                    },
                    {
                        name: '固定和无形资产存量情况表',
                        value: 3
                    },
                ],
                tab: 0,
                pageInfo: {
                    curPage: 1,
                    pageSize: 10,
                    total: 20
                },
                list: [
                    {
                        kemu: '一、一般公共预算财政拨款收入',
                        juesuanshu: '  凭证子表中对应科目代码分别以“600101”或“600102”开头的凭证数据中，贷方金额合计减去借方金额合计',
                        gongneng: '一、一般公共服务支出',
                        'juesuanshu2': '凭证子表中对应科目以7201、7301、7401、7501开头，辅助组合项中支出功能分类代码以 201  开头的凭证数据，借方合计金额减去贷方合计金额'
                    }
                ],
                recalcList: [],
                c:[]
            }
        },
        mounted() {
            var s = '小计	基本工资	津贴补贴	奖金	伙食补助费	绩效工资	机关事业单位基本养老保险缴费	职业年金缴费	职工基本医疗保险缴费	公务员医疗补助缴费	其他社会保障缴费	住房公积金	医疗费	其他工资福利支出	小计	办公费	印刷费	咨询费	手续费	水费	电费	邮电费	取暖费	物业管理费	差旅费	因公出国（境）费用	维修（护）费	租赁费	会议费	培训费	公务接待费	专用材料费	被装购置费	专用燃料费	劳务费	委托业务费	工会经费	福利费	公务用车运行维护费	其他交通费用	税金及附加费用	其他商品和服务支出	小计	离休费	退休费	退职（役）费	抚恤金	生活补助	救济费	医疗费补助	助学金	奖励金	个人农业生产补贴	其他对个人和家庭的补助	小计	国内债务付息	国外债务付息	国内债务发行费用	国外债务发行费用	小计	房屋建筑物购建	办公设备购置	专用设备购置	基础设施建设	大型修缮	信息网络及软件购置更新	物资储备	公务用车购置	其他交通工具购置	文物和陈列品购置	无形资产购置	其他基本建设支出	小计	房屋建筑物购建	办公设备购置	专用设备购置	基础设施建设	大型修缮	信息网络及软件购置更新	物资储备	土地补偿	安置补助	地上附着物和青苗补偿	拆迁补偿	公务用车购置	其他交通工具购置	文物和陈列品购置	无形资产购置	其他资本性支出	小计	资本金注入	其他对企业补助	小计	资本金注入	政府投资基金股权投资	费用补贴	利息补贴	其他对企业补助	小计	对社会保险基金补助	补充全国社会保障基金'
            var ss = '小计301	基本工资	津贴补贴	奖金	伙食补助费	绩效工资	机关事业单位基本养老保险缴费	职业年金缴费	职工基本医疗保险缴费	公务员医疗补助缴费	其他社会保障缴费	住房公积金	医疗费	其他工资福利支出	小计302	办公费	印刷费	咨询费	手续费	水费	电费	邮电费	取暖费	物业管理费	差旅费	因公出国（境）费用	维修（护）费	租赁费	会议费	培训费	公务接待费	专用材料费	被装购置费	专用燃料费	劳务费	委托业务费	工会经费	福利费	公务用车运行维护费	其他交通费用	税金及附加费用	其他商品和服务支出	小计303	离休费	退休费	退职（役）费	抚恤金	生活补助	救济费	医疗费补助	助学金	奖励金	个人农业生产补贴	其他对个人和家庭的补助	小计307	国内债务付息	国外债务付息	国内债务发行费用	国外债务发行费用	小计309	房屋建筑物购建	办公设备购置	专用设备购置	基础设施建设	大型修缮	信息网络及软件购置更新	物资储备	公务用车购置	其他交通工具购置	文物和陈列品购置	无形资产购置	其他基本建设支出	小计310	房屋建筑物购建	办公设备购置	专用设备购置	基础设施建设	大型修缮	信息网络及软件购置更新	物资储备	土地补偿	安置补助	地上附着物和青苗补偿	拆迁补偿	公务用车购置	其他交通工具购置	文物和陈列品购置	无形资产购置	其他资本性支出	小计311	资本金注入	其他对企业补助	小计312	资本金注入	政府投资基金股权投资	费用补贴	利息补贴	其他对企业补助	小计313	对社会保险基金补助	补充全国社会保障基金'
            // console.log(s.split('\t'))
            this.zhichucolumn = s.split('\t');
            this.nums = ss.split('\t');
            // for(let i=0;i<)
            for (let i = 1; i < 25; i++) {
                this.numList.push(i)
            }
            // for(let i=30109;i<)

            // this.initUpload();
            this.c=['C','D','E','F','G',"H",'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            this.clist=[];
            // for(let i=5;i<14;i++){
            //     for(let j in c){
            //         this.clist.push(c[j]+i);
            //     }
            // }
            // console.log(this.clist)
            this.getList0();
        },
        methods: {
            reCalc() {
                var that = this;
                axios.get(domain+'/competition/VNRecalculation')
                    .then(function (res) {
                        if(res.status==200){
                            that.recalcList=res.data.data;
                        }
                    })
            },
            changeTab(i) {
                this.tab = i.value;
                this['getList' + i.value]();
            },
            updateFile: function () {
                var url = '/api/file/update/';
                that.$post(url, this.tableDetail)
                    .then(function (res) {
                        if (res.status == 200) {
                            that.tableDetail = res.data;
                            that.$forceUpdate();
                        }
                    })
            },
            initUpload: function () {
                var that = this;
                var r = new Resumable({
                    target: domain+'/import/importExcel',
                    chunkSize: 1 * 1024 * 1024,
                    simultaneousUploads: 4,
                    testChunks: false,
                    throttleProgressCallbacks: 1,
                    method: 'multipart',
                    uploadMethod: 'POST',
                    testMethod: 'POST',
                    fileParameterName: 'file',
                    chunkNumberParameterName: 'chunkNumber',
                    chunkSizeParameterName: 'chunkSize',
                    currentChunkSizeParameterName: 'currentChunkSize',
                    totalSizeParameterName: 'totalSize',
                    typeParameterName: 'resumableType',
                    identifierParameterName: 'identifier',
                    fileNameParameterName: 'filename',
                    relativePathParameterName: 'relativePath',
                    totalChunksParameterName: 'totalChunks',
                    fileType: ['xls', 'xlsx'],
                    dragOverClass: 'drag-over',
                    maxFiles: 1
                    // permanentErrors:[400, 401, 403, 404, 409, 415, 500, 501,9999],
                });
                // Resumable.js isn't supported, fall back on a different method
                if (!r.support) {
                    // $('.resumable-error').show();
                } else {
                    // Show a place for dropping/selecting files
                    // $('.resumable-drop').show();
                    r.assignDrop($(this.$el).find("#upload")[0]);
                    r.assignBrowse($(this.$el).find("#upload")[0]);

                    // Handle file add event
                    r.on('fileAdded', function (file) {
                        // Show progress pabr
                        $('.resumable-progress, .resumable-list').show();
                        // Show pause, hide resume
                        $('.resumable-progress .progress-resume-link').hide();
                        $('.resumable-progress .progress-pause-link').show();
                        // Add the file to the list
                        $('.resumable-list').append('<li class="resumable-file-' + file.uniqueIdentifier + '">Uploading <span class="resumable-file-name"></span> <span class="resumable-file-progress"></span>');
                        $('.resumable-file-' + file.uniqueIdentifier + ' .resumable-file-name').html(file.fileName);
                        // Actually start the upload
                        r.upload();
                    });
                    r.on('pause', function () {
                        // Show resume, hide pause
                        $('.resumable-progress .progress-resume-link').show();
                        $('.resumable-progress .progress-pause-link').hide();
                    });
                    r.on('complete', function () {
                        // Hide pause/resume when the upload has completed
                        $('.resumable-progress .progress-resume-link, .resumable-progress .progress-pause-link').hide();
                    });
                    r.on('fileSuccess', function (file, message) {
                        // Reflect that the file upload has completed
                        $('.resumable-file-' + file.uniqueIdentifier + ' .resumable-file-progress').html('(completed)');
                        var res = JSON.parse(message);
                        // that.isNewfile=true;
                        // that.newFile=res.data;
                        // that.getFileData(res.data);
                        // that.editor=null;
                        r.removeFile(file)
                    });
                    r.on('fileError', function (file, message) {
                        // Reflect that the file upload has resulted in error
                        $('.resumable-file-' + file.uniqueIdentifier + ' .resumable-file-progress').html('(file could not be uploaded: ' + message + ')');
                    });
                    r.on('fileProgress', function (file) {
                        // Handle progress for both the file and the overall upload
                        $('.resumable-file-' + file.uniqueIdentifier + ' .resumable-file-progress').html(Math.floor(file.progress() * 100) + '%');
                        $('.progress-bar').css({width: Math.floor(r.progress() * 100) + '%'});
                    });
                }
            },
            getList0() {
                var that = this;
                that.list=[];
                axios.get(domain+'/incomeExpensesForm/getIncomeData')
                    .then(function (res) {
                        console.log(res)
                        if (res.status == 200) {
                            var a = [
                                {
                                    "srkm": "科目1",
                                    "srjss": 1111,
                                    "zcgn": "功能1",
                                    "zcjss": 1122,
                                },
                                {
                                    "srkm": "科目1",
                                    "srjss": 1111,
                                    "zcgn": "功能1",
                                    "zcjss": 1122,
                                }, {
                                    "srkm": "科目1",
                                    "srjss": 1111,
                                    "zcgn": "功能1",
                                    "zcjss": 1122,
                                }
                            ]
                            that.list = res.data.data;
                            that.initPage();
                        }
                    })
            },
            getList1() {
                var that = this;
                that.list=[];
                axios.get(domain+'/projectexpend')
                    .then(function (res) {
                        console.log(res)
                        if (res.status == 200) {
                            that.list = res.data.data;
                            // for (let i in res.data.data){
                            //     let d=res.data.data[i];
                            //     let name=i.split('-');
                            //     d.kmbm=name[0];
                            //     d.kmmc=name[1];
                            //     d.xmdm=name[2];
                            //     d.xmmc=name[3];
                            //     that.list.push(d)
                            // }
                            that.$forceUpdate();
                            console.log(that.list)
                            that.initPage();
                        }
                    })
            },
            getList2() {
                var that = this;
                that.list=[];
                axios.get(domain+'/car/carInfo')
                    .then(function (res) {
                        console.log(res)
                        if (res.status == 200) {
                            that.list = res.data.data;
                            that.initPage();
                        }
                    })
            },
            getList3() {
                var that = this;
                that.list=[];
                axios.get(domain+'/fixasset/query')
                    .then(function (res) {
                        console.log(res)
                        if (res.status == 200) {
                            that.list = res.data.data;
                            that.initPage();
                        }
                    })
            },
            goPage(p) {

            },
            initPage: function () {
                var that = this
                // new Page($(this.$el).find('.page-container')[0], {
                //         goPage: function (p) {
                //             that.goPage(p)
                //         }
                //     }
                //     , that.pageInfo
                // )
            },
        }
    }
</script>
<style>
  .recalc{
    max-height: 120px;
    overflow: auto;
    font-size: 14px;
    line-height: 16px;
  }
  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  .fnormal-table {
    /*width:100%;*/
    table-layout: fixed;
    min-width: 100%;
  }

  .fnormal-table tr {
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  .fnormal-table td, .fnormal-table th {
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    line-height: 26px;
    font-size: 12px;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .fnormal-table th, .fnormal-table td {
    width: 100px;
  }

  .fnormal-table tr th {
    background: #efefef;
    white-space: nowrap;
  }

  .fnormal-table tr:hover {
    background: #efefef;
  }

  .container {
    width: 90%;
    min-width: 1200px;
    margin: 0 auto;
    margin-top: 40px;
  }

  .tab ul {
    list-style: none;
    display: flex;
    padding: 0;
  }

  .tab ul li {
    line-height: 32px;
    background: #efefef;
    padding: 0 10px;
    font-size: 14px;
    border-right: 1px solid #ccc;
    cursor: pointer;
  }

  .tab ul li.on {
    background: #2196f3;
    color: #fff;
  }

  .tab ul li:last-child {
    border: 0;
  }

  .content > div {
    width: 100%;
    overflow: hidden;
  }

  .content > div .table-container {
    overflow: auto;
  }

  .content > div table {
    width: auto;
  }

  .bichart-chart-container .page-container .chart-page a {
    cursor: pointer;
  }

  .btn {
    font-size: 14px;
    border: 1px solid #ccc;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    line-height: 32px;
    padding: 0 10px;
    border-radius: 4px;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
  }
  .btns{
    display: flex;
    align-items: center;
  }
</style>
