//閫氳繃搴旂敤瀹濊烦杞嚦app鏌愬姛鑳�
function qqAppToWintech(typeName,params){
    if(params==''){
         var intoAppUrlEncode =encodeURIComponent('wlbapp://winglung.com?action='+typeName);
    }else{
         var intoAppUrlEncode =encodeURIComponent('wlbapp://winglung.com?action='+typeName+"&" + params);
    }
    window.location.href='https://a.app.qq.com/o/simple.jsp?pkgname=com.wlb.android&ios_scheme=' + intoAppUrlEncode+'&android_scheme='+  intoAppUrlEncode;
}
		
//閫氳繃涓浆椤佃烦鑷砤pp鏌愬姛鑳�
function TransferPagetoWintech(typeName,params,lang){
	var url;
	if(params==''){
		url="https://push.cmbwinglungbank.com/AppPortal/html/appRedirect/" + lang + "/appRedirect.html?action=" + typeName;
	}else{
	    url="https://push.cmbwinglungbank.com/AppPortal/html/appRedirect/" + lang + "/appRedirect.html?action=" + typeName + "&" + params;
	}
	window.location.href=url;
	//fundShare(鍩洪噾鍒嗕韩),AccountEnquiry(璐︽埛鏌ヨ),FundTransfer(杞处),
	//BillPayment(缂磋垂),ForeignExchange(澶栨眹涔板崠),TtPurchase(涓€榛炲嵆鍖�),
	//StockOrder(璀夊埜璨疯常),FundSubscription(鍩洪噾璨疯常),SavToCurTransfer(娲绘湡杞敮绁�),
	//FixedDeposit(瀹氭湡瀛樻),RegisterEstatement(鐢靛瓙缁撳崟),AutoSweeping(鑷嫊杞暟),
	//TravelInsurance(鏃呮父淇濋櫓),ForeignCurrencyNote(棰勭害澶栨眹鎻愮幇),ApplyCheQueBook(鐢抽鏀エ绨�),
	//CashierOrder(鏈エ),StopCheQue(姝粯鏀エ),InwardRemittanceEnquiry(姹囧叆娆鹃」鏌ヨ),
	//GoldDealing(榛勯噾涔板崠),OverseasATMTranSetting(娴峰ATM浜ゆ槗璁惧畾),
	//ArtificialExperienceService(姘搁殕鐢佃瘽浜哄伐鏈嶅姟鏂颁綋楠�),ExchangeRateShare(姹囩巼),InterestRateShare(鍒╃巼)
}
	
function pushPagetoWintech(paramsStr,lang) {
	var url;
	url="https://push.cmbwinglungbank.com/AppPortal/html/appRedirect/" + lang + "/appRedirect.html?" + paramsStr;
	window.location.href=url;
}
function pushPageQqApptoWintech(paramsStr,lang) {
    var intoAppUrlEncode =encodeURIComponent('wlbapp://winglung.com?'+paramsStr);
    window.location.href='https://a.app.qq.com/o/simple.jsp?pkgname=com.wlb.android&ios_scheme=' + intoAppUrlEncode+'&android_scheme='+  intoAppUrlEncode;

}
function btn_back(){
	if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
		window.webkit.messageHandlers.PopBackView.postMessage('');
	}else if (navigator.userAgent.match(/android/i)) {
		window.FundJsHandler.PopBackView();
	}
}
function appSendEmail(emailurl){
	var object = new Object();
	object.addr=emailurl
	if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
		window.webkit.messageHandlers.SendEMail.postMessage(object);
	}else if (navigator.userAgent.match(/android/i)) {
		window.FundJsHandler.SendEMail(JSON.stringify(object));
	}
}


function goToEoffer(url){
	//event.preventDefault();
	var obj = new Object();
		obj.action = url;
		obj.params="";

		if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
			//iOS
			window.webkit.messageHandlers.GoToAppModule.postMessage(obj);

		}else if (navigator.userAgent.match(/android/i)) {
			//android
			window.FundJsHandler.GoToAppModule(JSON.stringify(obj));
		}
	
}
function goToAppIndex(){
		if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
			//iOS
      window.webkit.messageHandlers.WlbHome.postMessage('');
		}else if (navigator.userAgent.match(/android/i)) {
			//android
			window.FundJsHandler.WlbHome();
		}
	
}

//杩炴帴璺宠浆浜嬩欢
	function gotoUrl(IoslinkUrl,AndroidlinkUrl,way){
		if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){

			var _linkUrl;
			// alert("浼犲叆link--"+IoslinkUrl);

			if(IoslinkUrl.indexOf("https://")>-1 || IoslinkUrl.indexOf("http://")>-1 ){
				_linkUrl=IoslinkUrl;
			} else if(way=="FAQ"){
				_linkUrl='https://push.cmbwinglungbank.com/AppPortal/html/sec_mobileSite/html/others/FAQ/html/'+_pingtai+'/'+_language+'/'+IoslinkUrl;
			}else {
				_linkUrl='https://push.cmbwinglungbank.com/AppPortal/html/sec_mobileSite/html/others/Function_Introduction/'+_pingtai+'/'+_language+'/'+IoslinkUrl;
			}
			// alert("鎷兼帴鍚庣殑link--"+_linkUrl);

			try{
				if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){
					window.webkit.messageHandlers.PushNewView.postMessage({url:_linkUrl});
					// alert("ios");
				}else if(navigator.userAgent.match(/android/i)){
					window.FundJsHandler.PushNewView(_linkUrl);
					// alert("android");
				}		
			}catch(err){

			}

		}else if(navigator.userAgent.match(/android/i)){
			window.location.href=AndroidlinkUrl;

		}
	}

//閲囩敤link鐨勬柟寮忕洿鎺ヨ烦杞� 
function gotoUrl_2(linkUrl){
		//window.location.href=linkUrl;
		
		//灏辨槸褰撹繑鍥炴椂锛屼竴绾х骇杩斿洖銆�
		if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){
			window.webkit.messageHandlers.PushNewView.postMessage({url:linkUrl});
			// alert("ios");
		}else if(navigator.userAgent.match(/android/i)){
			window.FundJsHandler.PushNewView(linkUrl);
			// alert("android");
		}	
	}
//app鍏у鏅傜当涓€瑾跨殑璺宠綁鏂规硶
function gotoPageOfApp(typeName,params,lang){
   if(ShowProgressViewClose()==1){
      goToEoffer(typeName)
   }else{
    TransferPagetoWintech(typeName,params,lang)
   }
}
//鍒ゆ柇鏄惁鍦╝pp鍐�
function ShowProgressViewClose(){
	var retVal = 1;
	try{
		if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
			window.webkit.messageHandlers.ShowProgressViewClose.postMessage(''); 
	    }else if (navigator.userAgent.match(/android/i)) {
			window.FundJsHandler.ShowProgressViewClose();
	    }else{
	    	retVal = 0;
	    }
	}catch(e){
		retVal = 0;
	}
	return retVal;   //1: app //2: not app
}
var isApp = ShowProgressViewClose();
  function iosDownLoadApp(){
     if(isApp==1){
       goToAppIndex()
     }else{
     	window.location.href="https://itunes.apple.com/hk/app/%E6%B0%B8%E9%9A%86%E9%8A%80%E8%A1%8C%E4%B8%80%E9%BB%9E%E9%80%9A/id526663971?mt=8"
     }
  }
   function AndWLBDownLoadApp(){
     if(isApp==1){
       goToAppIndex()
     }else{
     	window.location.href="https://push.cmbwinglungbank.com/AppPortal/Admin/AppPackage/Android/CMBWLB.apk"
     }
  }
   function AndGoogleDownLoadApp(){
     if(isApp==1){
       goToAppIndex()
     }else{
     	window.location.href="https://play.google.com/store/apps/details?id=com.wlb.android"
     }
  }