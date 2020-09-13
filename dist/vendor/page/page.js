(function (window) {
    var option = {
        type: "String"
    }

    function Page(container, options, data) {
        this.option = $.extend(true, {}, option, options);
        this.data =data;
        this.container = container;
        this.init();
    }

    Page.prototype = {
        init:function(){
            this.container.innerHTML='';
            var html=this.rendPageHtml(this.data,option)
            this.container.append(html)
            if(html==''){
                this.container.style.display='none';
                if(typeof this.option.noData=='function'){
                    this.option.noData(true)
                }
            }
            else{
                this.container.style.display='block'
            }

        },
        getpages(pagedata) {
            var cur = pagedata.curPage;
            var total = parseInt(Math.ceil(pagedata.total / pagedata.pageSize));
            var min = 1, max = 1;
            if (cur <= 3) {
                min = 1;
                max = total > 5 ? 5 : total;
            } else {
                min = cur - 2;
                max = (parseInt(cur) + 2) > total ? total : (parseInt(cur) + 2);
            }
            var pages = [];
            for (var j = min; j <= max; j++) {
                pages.push(j);
            }
            return {pages, total}
        },
        rendSinglePage(p, cur) {
            var that=this;
            let phtml = document.createElement("a");
            phtml.classList.add("chart-p");
            phtml.innerText = p;
            if (p == cur) {
                phtml.classList.add("chart-page-cur");
            } else {
                phtml.onclick = function () {
                    that.goPage(p);
                }
            }
            return phtml;

        },
        rendOtherPage(p, name) {
            var that=this;
            let phtml = document.createElement("a");
            phtml.classList.add("chart-p");
            phtml.innerText = name;
            phtml.onclick = function () {
                that.goPage(p);
            }
            return phtml;
        },
        rendPageHtml(pagedata, option) {
            var that=this;
            var pagehtml = document.createElement("div");
            pagehtml.classList.add("chart-page");
            if (pagedata.curPage > 1) {
                if (!option || !option.hidenum) {
                    pagehtml.append(this.rendOtherPage(1, '首页'));
                }
                pagehtml.append(this.rendOtherPage(pagedata.curPage - 1, (option && option.pre) || '上一页'));
            }
            var {pages, total} = this.getpages(pagedata);
            if (pages.length <= 1) {
                return '';
            }
            if (pages.length > 0 && (!option || !option.hidenum)) {
                pages.forEach(function (p) {
                    pagehtml.append(that.rendSinglePage(p, pagedata.curPage));
                })
            }
            if (pagedata.curPage < total) {

                pagehtml.append(this.rendOtherPage(pagedata.curPage + 1, (option && option.next) || '下一页'));
                if (!option || !option.hidenum) {
                    pagehtml.append(this.rendOtherPage(total, '尾页'));
                }
            }
            pagehtml.append(this.rendTotal());
            return pagehtml;
        },
        rendTotal:function(){
            var that=this;
            let phtml = document.createElement("a");
            phtml.classList.add("page-total");
            phtml.innerText = '共'+this.data.total+'条';
            return phtml;
        },
        goPage:function(p){
            if(typeof this.option.goPage=='function'){
                this.option.goPage(p)
            }
        }
    }
    window.Page=Page;
})(window)
var pagecss=["/page.css"];
for(let i=0;i<pagecss.length;i++){
    let s=document.currentScript.src;
    let url=s.substr(0,s.lastIndexOf('/'))+pagecss[i];
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}
// var dynamicLoadCss=function(urllist) {
//     var s=document.currentScript.src;
//     for(let i=0;i<["/page.css"].length;i++){
//         left s=document.currentScript.src;
//         let url=s.substr(0,s.lastIndexOf('/'))+urllist[i];
//         var head = document.getElementsByTagName('head')[0];
//         var link = document.createElement('link');
//         link.type = 'text/css';
//         link.rel = 'stylesheet';
//         link.href = url;
//         head.appendChild(link);
//     }
// }
//
// var urllist=["/page.css"];
// dynamicLoadCss(urllist)