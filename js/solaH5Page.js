$(function(){

})
function solaH5Page(configs){
    var winswipeUp  = $(".winswipeUp");
    var section = $(".winswipeUp > section");
    var sX,sY,mX,mY,casY;
    var autoplay = configs.autoplay;
    var page1 = document.getElementById("page1");
    var isTouchmove = false;
    var pageMusic = document.getElementById(configs.pageMusicId) ;
    var sildeDirect = configs.sildeDirect;
    var defaultPage = configs.defaultPage || "section1"
    $("."+defaultPage).addClass("active"); 

    if(configs.style==1){
       winswipeUp.addClass("style1")
    }else if(configs.style==2){
       winswipeUp.addClass("style2")
    }else if(configs.style==3){
       winswipeUp.addClass("style3")
    }
   if(configs.sildeDirect==0){
       winswipeUp.addClass("sildeDirect")
    }else if(configs.sildeDirect==1){
       winswipeUp.addClass("sildeDirect1")
    }
    window.addEventListener("touchstart",function(event){
        if(isIOs()){
          pageMusicPreForIos();
        }
        sX = event.touches[0].pageX;
        sY = event.touches[0].pageY;
    })
    window.addEventListener("touchmove",function(event){
        mX = event.touches[0].pageX;
        mY = event.touches[0].pageY;
        casY = mY-sY;
        casX = mX-sX;
        isTouchmove =true;
    })
    function pageMusicPreForIos(){
      if(pageMusic){
         pageMusic.play();
         pageMusic.pause();
      }
    }

    window.addEventListener("touchend",function(event){
      if(isTouchmove){
        if(sildeDirect==0){
            if(casY>50){
                pageToBefore();
                configs.pageDownEnd()
            }else if(casY<-50){   
                pageToNext();
                configs.pageUpEnd()
           }
        }else if(sildeDirect==1){
            if(casX>50){
                pageToBefore();
                configs.pageDownEnd()
            }else if(casX<-50){   
                pageToNext();
                configs.pageUpEnd()
           }
        }
      
      }
       isTouchmove =false;
    })
 
    mainInit();

    function mainInit(){
      startan();
      addNextSection();
      addBeforeSection();
      pageLi();
      pageLiAddActive();
      autoPlay();
    }

    function autoPlay(){
      if(autoplay){
        setTimeout(function(){
             pageToNext();
             autoPlay();
          },3000)
      }
      
    }

    function pageToBefore(){
        var thisSection = $(".winswipeUp > section.active");
        var nextSection = $(".winswipeUp > section.next");
        var beforeSection = $(".winswipeUp > section.before");
        beforeSection.prev().addClass("before")
        beforeSection.removeClass("before").addClass("active");
        thisSection.removeClass("active").addClass("next")
        nextSection.removeClass("next")
        addBeforeSection();
        pageLiAddActive();
        startan()
    }

    function pageToNext(){
          var thisSection = $(".winswipeUp > section.active");
          var nextSection = $(".winswipeUp > section.next");
          var beforeSection = $(".winswipeUp > section.before");
           beforeSection.removeClass("before");
          thisSection.removeClass("active").addClass("before")

          nextSection.removeClass("next").addClass("active")
          nextSection.next().addClass("next")
          addNextSection();
          pageLiAddActive();
          startan()
    }
    function addNextSection(){
      var thisSection = $(".winswipeUp > section.active");
      var firstSection = $(".winswipeUp > section:first-child");
      if(thisSection.next().length>0){
         thisSection.next().addClass("next")
        }else{
              firstSection.remove();
              thisSection.after(firstSection)
              firstSection.addClass("next")
        }
    }
    function addBeforeSection(){
      var thisSection = $(".winswipeUp > section.active");
      var lastSection = $(".winswipeUp > section:last-child");
        if(thisSection.prev().length>0){
            thisSection.prev().addClass("before")
          }else{
              lastSection.remove();
              thisSection.before(lastSection)
              lastSection.addClass("before")
          }
    }
    $(".animateBox").each(function(){
      var thisAnimateClass= this.dataset.animate;
          this.addEventListener("animationend",function(){
            $(this).removeClass(thisAnimateClass).addClass("aniEnd");
        })
    })
    function startan(){
      $("section.active .animateBox").each(function(){
          $(this).css({
            "animation-play-state":"running",
            "-webkit-animation-play-state":"running",
          });
        var thisAnimateClass= this.dataset.animate;
        if($(this).hasClass("aniEnd")){
            $(this).removeClass("aniEnd").addClass(thisAnimateClass)
        }else{
            $(this).removeClass(thisAnimateClass);
            var $this = $(this)
            setTimeout(function(){
               $this.addClass(thisAnimateClass)
            },10)
        }
       })
    }

  function pageLi(){
    var page_li =$("#page_li")
    var num = section.length;
    for(var i=0 ;i<num ; i++){
        page_li.append("<li></li>")
    }
  }
  function pageLiAddActive(){
    var pageActive = $(".winswipeUp > section.active")
    var num = (((pageActive.attr("class").split(" "))[0]).split("section"))[1]

    $("#page_li li").removeClass("active")
    $("#page_li").children().eq(num-1).addClass("active")
  }
}

function gotoUrl(url){
    window.location.href = url;
}

function isIOs(){
    var sUserAgent = navigator.userAgent;
        return sUserAgent.match(/(iPhone|iPod|iPad)/i) != null;
}

function isAndroid() {
    var sUserAgent = navigator.userAgent;
        return sUserAgent.match(/Android/i) != null;
}

function isWeixin() {
  var ua =window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == "micromessenger";
}