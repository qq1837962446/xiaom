//家电
{
    let fon1 = document.querySelectorAll(".fon .wenzi1");
    let lift1 = document.querySelectorAll(".lift");
    fon1.forEach(function (val, index) {
        val.onmouseout = function () {
            fon1.forEach(function (value, dom) {
                value.classList.remove("wenzi3");
                lift1[dom].classList.remove("lift")
            });
            val.classList.add("wenzi3");
            lift1[index].classList.add("lift")
        }
    });
}
//智能
{
    let fon1 = document.querySelectorAll(".zhineng .wenzi1");
    let lift1 = document.querySelectorAll(".zhineng1");
    fon1.forEach(function (val, index) {
        val.onmouseout = function () {
            fon1.forEach(function (value, dom) {
                value.classList.remove("wenzi3");
                lift1[dom].classList.remove("zhineng1")
            });
            val.classList.add("wenzi3");
            lift1[index].classList.add("zhineng1")
        }
    });
}
//搭配
{
    let fon1 = document.querySelectorAll(".dapei .wenzi1");
    let lift1 = document.querySelectorAll(".dapeiwo");
    fon1.forEach(function (val, index) {
        val.onmouseout = function () {
            fon1.forEach(function (value, dom) {
                value.classList.remove("wenzi3");
                lift1[dom].classList.remove("dapeiwo")
            });
            val.classList.add("wenzi3");
            lift1[index].classList.add("dapeiwo")
        }
    });
}
//配件
{
    let fon1 = document.querySelectorAll(".peijianni .wenzi1");
    let lift1 = document.querySelectorAll(".peijiannin");
    fon1.forEach(function (val, index) {
        val.onmouseout = function () {
            fon1.forEach(function (value, dom) {
                value.classList.remove("wenzi3");
                lift1[dom].classList.remove("peijiannin")
            });
            val.classList.add("wenzi3");
            lift1[index].classList.add("peijiannin")
        }
    });
}
//周边
{
    let fon1 = document.querySelectorAll(".zhoubian3 .wenzi1");
    let lift1 = document.querySelectorAll(".zhoubian3");
    fon1.forEach(function (val, index) {
        val.onmouseout = function () {
            fon1.forEach(function (value, dom) {
                value.classList.remove("wenzi3");
                lift1[dom].classList.remove("zhoubian3")
            });
            val.classList.add("wenzi3");
            lift1[index].classList.add("zhoubian3")
        }
    });
}
//banner
{
    let ban=document.querySelectorAll(".banner-img ul");
    let ban1=document.querySelector(".banner");
    let left1=document.querySelector(".left");
    let right1=document.querySelector(".right");
    let dian=document.querySelectorAll(".lunbodian ul li");
    let n=0;
    let dom=function () {
        n++;
        if(n ===ban.length){
            n=0;
        }
        ban.forEach(function (value,ion) {
            value.classList.remove("active");
            dian[ion].classList.remove("active")
        });
        ban[n].classList.add("active");
        dian[n].classList.add("active")
    };
    let sj=setInterval(dom,2000);
    ban1.onmouseover=function () {
        clearInterval(sj)
    };
    ban1.onmouseout=function () {
        sj=setInterval(dom,2000);
    };
    left1.onclick=function () {
        if(!flag){
            return
        }
        flag=false;
        n--;
        if(n ==-1){
            n = ban.length-1;
        }
        ban.forEach(function (value,index) {
            value.classList.remove("active");
            dian[index].classList.remove("active")
        });
        ban[n].classList.add("active");
        dian[n].classList.add("active")
    };
    right1.onclick=function () {
        dom()
    };
    dian.forEach(function (val,index) {
        val.onclick=function () {
            dian.forEach(function (value,i) {
                value.classList.remove("active");
                ban[i].classList.remove("active")
            });
            dian[index].classList.add("active");
            ban[index].classList.add("active");
            n=index;
        }
    })
}
//banner
{
    let ban=document.querySelector(".banner-l");
    let smxz = document.querySelectorAll(".leftm li");
    let xmkz = document.querySelectorAll(".to .lefthz");
    smxz.forEach(function (val, index) {
        val.onmouseover = function () {
            smxz.forEach(function (a, b) {
                a.classList.remove("active")
            });
            val.classList.add("active");
            xmkz.forEach(function (a, b) {
                a.classList.remove("active")
            });
            xmkz[index].classList.add("active")
        }
    });
    ban.onmouseout=function () {
        smxz.forEach(function (a, b) {
            a.classList.remove("active")
        });
        xmkz.forEach(function (a, b) {
            a.classList.remove("active")
        })
    }
}
// 内容
{
    function bao(niniubi) {
        let contents = niniubi.querySelector(".content-tu");
        let dianObj = niniubi.querySelectorAll(".content-dian li");
        let lefts = niniubi.querySelector(".content-list .leftq");
        let rights = niniubi.querySelector(".content-list .rightq");
        console.log(lefts);
        dianObj.forEach(function (ele, index) {
            ele.onclick = function () {
                for (let i = 0; i < dianObj.length; i++) {
                    dianObj[i].classList.remove("active");
                }
                ele.classList.add("active");
                contents.style.marginLeft = -296 * index + "px";
            }
        });
        let t = 0;
        rights.onclick = function () {
            lickFn()
        };
        lefts.onclick = function () {
            lickFn(2)
        };
        function lickFn(wo = 1) {
            if (wo === 1) {
                t++;
                if (t === dianObj.length) {
                    t = dianObj.length - 1
                }
            } else if (wo === 2) {
                t--;
                if (t === -1) {
                    t = 0;
                }
            }
            console.log(wo);
            for (let i = 0; i < dianObj.length; i++) {
                dianObj[i].classList.remove("active");
            }
            dianObj[t].classList.add("active");
            contents.style.marginLeft = -296 * t + "px";
        }
    }
    let arr= document.querySelectorAll(".content-btom .content-list");
    for(let i = 0;i<arr.length;i++){
        bao(arr[i]);
    }
}
{
// 单品
    let left=document.querySelector(".top-ico1");
    let right=document.querySelector(".top-ico");
    let bottoms=document.querySelector(".bottoms");
    let danpins = document.querySelector(".danpin");
    right.onclick=function () {
        left.classList.add("active");
        right.classList.remove("active");
        bottoms.style.marginLeft="-1245px";
    };
    left.onclick=function () {
        left.classList.remove("active");
        right.classList.add("active");
        bottoms.style.marginLeft = "0";
    };
    let fa=setInterval(fin,3000);
    let q = 1;
    function fin() {
        q++;
        if(q % 2== 0){
            bottoms.style.marginLeft = "-1245px";
        }else{
            bottoms.style.marginLeft = "0";
        }
    }
    danpins.onmouseover=function () {
        clearInterval(fa);
    };
    danpins.onmouseout=function () {
        fa=setInterval(fin,3000);
    };
}
// 维你推荐
{
    let leftObj = document.querySelector(".top-ico2");
    let rightObj = document.querySelector(".top-ico3");
    let bottomObj = document.querySelector(".danpin-bottom");
    let topObj = document.querySelector(".danpin-top-right");
    rightObj.onclick=function(){
        leftObj.classList.add("active");
        rightObj.classList.remove("active");
        bottomObj.style.marginLeft="-1245px";
    };
    leftObj.onclick=function(){
        leftObj.classList.remove("active");
        rightObj.classList.add("active");
        bottomObj.style.marginLeft="0";
    };
    let arr = 1;
    let nani =setInterval(bo,4000);
    function bo(){
        arr++;
        if(arr%2===0){
            bottomObj.style.marginLeft="-1245px";
        }else{
            bottomObj.style.marginLeft="0";
        }
    }
    topObj.onmouseover=function () {
        clearInterval(nani);
    };
    topObj.onmouseout=function () {
        nani =setInterval(bo,4000);
    };
}