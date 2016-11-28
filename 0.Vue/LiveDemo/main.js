var lib = {
	urlParams: function(url) {
		var urlParamsList = {};
		var params = url.search.replace(/^\?/, "").split('&'); //分开成各个不同的对像，去掉'&'
		for(var i = 0; i < params.length; i++) {
			var param = params[i];
			var temp = param.split("=");
			urlParamsList[temp[0]] = decodeURI(temp[1]);
		}
		return urlParamsList;
	}
};
window.onload = function() {
		var attachFastClick = Origami.fastclick;
		attachFastClick(document.body);

		var windowLocation = window.location,
			selfUserID = lib.urlParams(windowLocation)['userID'],
			selfSessionID = lib.urlParams(windowLocation)['sessionID'],
			selfSessionToken = lib.urlParams(windowLocation)['sessionToken'],
			selfPeerID = lib.urlParams(windowLocation)['peerID'];

		var app = new Vue({
			el: "#app",
			data: {
				anchorInfo: [],
				getAnchorInfoUrl: "http://a.impingo.me/activity/getAnchorInfo",
				livingInfo:[],
				getLiveStatusUrl:"http://a.impingo.me/activity/getLiveStatus",
				queryVoteStatusUrl:'http://a.impingo.me/activity/queryVoteStatus',
				anchorUserID:'',
				todayHaveVotes:false,
				// get info every some time
				setIntervalGetAnchorInfo:null,
				setIntervalGetLiveStatus:null,
				intervalDuration:60 * 1000,
				singerVoteUrl: "http://a.impingo.me/activity/singerVote",
			},
			mounted: function() {
				this.getAnchorInfo();
				this.getLiveStatus();
				this.queryVoteSatus();
				this.initSetTimeout();
			},
			methods: {
				getAnchorInfo: function() {
					this.$http.jsonp(this.getAnchorInfoUrl).then(function(res) {
						var rtnData = res.data;
						if(rtnData.rtn == 0) {
							this.$set(this, 'anchorInfo', rtnData.data)
						}
					}).catch(function(res) {
						console.info(res);
						
					})
				},
				
				getLiveStatus:function(){
					this.$http.jsonp(this.getLiveStatusUrl).then(function(res) {
						var that = this;
						var rtnData = res.data;
					
						if(rtnData.rtn == 0) {
							this.$set(that, 'livingInfo', rtnData.data)
						}
					}).catch(function(res) {
						console.info(res);
					})

				},
				getLivingSatus:function(anchor){
					this.livingInfo.forEach(function(living){
						if(living.createUserID === anchor.userID){
							if(living.state == "1"){
								return true
							}
						}
					})
					return false
				},
				
				queryVoteSatus:function(){
					this.$http.jsonp(this.queryVoteStatusUrl + '?userId='+selfUserID).then(function(res){
						var rtnData = res.data;
						if(rtnData.rtn == 0){
							this.todayHadVote = false;
						}
						else if(rtnData.rtn == 1){
							thos.todayHadVote = true;
							this.anchorUserID = rtnData.data.anchorUserID;
						}
					})
					.catch(function(res){
						console.info(res)
					})
				},
				getUserImg: function(val) {
					return 'http://a.impingo.me/static/activity/singer/resource/' + val + '.jpg';
				},
				getVoteStatus:function(anchor){
					if(anchor.userID == this.anchorUserID){
						return true
					}
					else{
						return false
					}
				},
				initSetTimeout:function(){
					var that = this;
					setIntervalGetAnchorInfo = setInterval(function(){
						that.getAnchorInfo();},that.intervalDuration
					);
					
					setIntervalGetLiveStatus = setInterval(function(){
						that.getLiveStatus();
					},that.intervalDuration);
				},
				singlerVote:function(anchor){
					var getUserID = selfUserID, getTargetUserID = anchor.userID;
					if(this.todayHaveVote){
						console.info('每日只能投一次')
						return;
					}
					this.$http.jsonp(this.singerVoteUrl+'?userID='+getUserID + 
					'&targetUserID=' + getTargetUserID + '&sessionID=' + selfSessionID + 
					'&sessionToken=' + selfSessionToken + '&peerID=' + selfPeerID).then(function(res){
						var rtnData = res.data;
						var that = this;
						if(rtnData.rtn == 0){
							Vue.set(anchor,'showAdd',true);
							anchor.supportCnt++;
							this.anchorUserID = getTargetUserID;
							this.todayHaveVote = true;
							clearInterval(setIntervalGetAnchorInfo);
							 // 点击投票，动画（2秒）以后，重新拉取直播状态以及直播信息
							setTimeOut(function(){
								that.getAnchorInfo();
								that.getLiveStatus()
								setIntervalGetAnchorInfo = setInterval(function(){
									that.getAnchorInfo();},2000
								);

							})
						}
						else if(rtnData.rtn == 2||rtnData.rtn == 3||rtnData.rtn == 1){
							console.info(rtnData.msg);
						}
					}).catch(function(res){
						console.info(res);
						
					})
				},
			}
		})

	}
	// Vue2。0 不支持把过滤器放在bind里面