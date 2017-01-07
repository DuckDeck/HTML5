<template>
    <div class="radio-wrapper">
				<ul class="list clearfix" v-cloak>
					<li v-for="anchor in anchorInfo">
						<a class="link">
							<div class="live" v-show="getLivingSatus(anchor)">
								<p>观看直播</p>
							</div>
                            <img :src="getUserImg(anchor.userID)" class="user" />
							<img src="../assert/img/play.png" class="play" />
                            <!--静态资源使用相对路径就行-->
							<p class="add" v-show="anchor.showAdd">+1</p>
						</a>
						<div class="user-wrapper">
							<div class="name" v-text="anchor.anchorName" @click="jumpProfile(anchor.userID)">
							</div>
							<div class="num" v-text="anchor.supportCnt">
							</div>
						</div>
						<template v-if="getVoteStatus(anchor)">
							<div class="had-btn">
							    今日已支持
							</div>
						</template>
						<template v-else>
							<div class="do-btn" @click="singlerVote(anchor)">
								支持
							</div>
						</template>
					</li>
				</ul>
			</div>
		</div>
</template>
<script>
    import axios from 'axios'
    import {a,urlParams} from '../tool/urlPara'
    const url = window.location
    const selfUserID = urlParams(url)['userID']
    const selfSessionID = urlParams(url)['sessionID']
    const selfSessionToken = urlParams(url)['sessionToken']
    const selfPeerID = urlParams(url)['peerID']
    export default{
        data(){
            return{
                anchorInfo:[],
                livingInfo:[],
                anchorUserID:'',
                todayHadVote:false,
                setIntervalGetAnchorInfo: null,
                setIntervalGetLiveStatus: null,
                intervalDuration: 60 * 1000,
            }
        },
        mounted(){
           this.getAnchors()
           this.getLiveStatus()
           this.queryVoteStatus()
           this.initSetTimeout()
        },
        methods:{
           getAnchors(){
                axios.get('http://127.0.0.1:8080/activity/getAnchorInfo').then(response=>{
                    var res = response.data;
                    if(res.rtn == 0) {
                        this.anchorInfo = res.data;
                    }
               })
           },
           getLiveStatus(){
               axios.get('http://127.0.0.1:8080/activity/getLiveStatus').then(response=>{
                    var res = response.data;
                    if(res.rtn == 0) {
                        this.livingInfo = res.data;
                    }
               })
           },
           queryVoteStatus(){
               axios.get('http://127.0.0.1:8080/activity/queryVoteStatus?userID='+selfUserID).then(response=>{
                   var res = response.data;
                    if(res.rtn == 0) {
                        this.todayHadVote = false
                    }
                    else if(res.rtn == 1){
                        this.todayHadVote = true
                        this.anchorUserID = res.data.anchorUserID
                    }
               })
           },
           getVoteStatus(anchor){
               if(anchor.userID == this.anchorUserID){
                    return true
                }
                else{
                    return false
                }
           },
           getLivingSatus(anchor){
               //这是一个异步方法，目前还没有找到方法来解决，目前只好用同步方法了
            //    return new Promise(function(resolve,reject){
            //          this.livingInfo.forEach((living)=>{
            //         if(living.createUserID == anchor.userID){
            //             if(living.state == '1'){
            //                 console.log('true')
            //                 isLiving = true
            //             }
            //            }
            //         })
            //    })
            var isLiving = false
              for(var l of this.livingInfo){
                if(l.createUserID == anchor.userID){
                    if(l.state == '3'){
                        // console.log('true')
                        isLiving = true
                    }
                 }
              }
              return isLiving
           },
           getUserImg(id){
              return 'http://a.impingo.me/static/activity/singer/resource/' + id + '.jpg';
           },
           initSetTimeout(){
               var that = this
               that.setIntervalGetAnchorInfo = setInterval(function(){
                   that.getAnchors() 
               },that.intervalDuration)
               that.setIntervalGetLiveStatus = setInterval(function(){
                   that.getLiveStatus()
               },that.intervalDuration)
           },
           singlerVote(anchor){
               var getTargetUserID = anchor.userID
               if(this.todayHadVote){
                   console.log('每日仅支持一次！')
                   return
               }
               //需要这么多参数， 我就没办法了
               axios.get('http://127.0.0.1:8080/activity/singerVote'+
               '?userID=' + selfUserID + '&targetUserID=' + getTargetUserID +
                '&sessionID=' + selfSessionID + '&sessionToken=' + selfSessionToken + '&peerID=' + selfPeerID).then(response=>{
                    var res = response.data;
                    if(res.rtn == 0) {
                        anchor.showAdd = true
                        anchor.supportCnt++
                        this.anchorUserID = getTargetUserID
                        this.todayHadVote = true
                        clearInterval(this.setIntervalGetAnchorInfo)
                        setTimeout(function() {
                            that.getAnchors()
                            that.getLiveStatus()
                            that.setIntervalGetAnchorInfo = setInterval(function(){
                                 that.getAnchors() 
                            },that.intervalDuration)
                        }, 2000);
                    }
                    else if(res.rtn == 2||res.rtn == 3||res.rtn == 1){
                        console.log(res.msg)
                    }
                })
           },
           jumpProfile(userID){
               window.location.href = 'http://api.impingo.me/static/singer/preselection-live.html?userID=' + userID; // 视频地址
           }
        }
    }
</script>

<style>
.clearfix:before,.clearfix:after{content:" ";display:table}
.clearfix:after{clear:both} 
.radio-wrapper{
  font-family: 'Microsoft YaHei', sans-serif;
  margin: 0 auto;
  font-size: 0.32rem;
  background: black;
}
.radio-wrapper .list {
  padding-left: 0.24rem;
  padding-right: 0.24rem;
  padding-top: 0.46666667rem;
}
.radio-wrapper .list li {
  background-color: #fff;
  width: 10rem;
  height: 6.50666667rem;
  position: relative;
  margin-bottom: 0.26666667rem;
  float: left;
  display: table;
  margin: 1rem;
}
.radio-wrapper .list li .live {
  position: absolute;
  background-color: #2aa2fe;
  width: 5rem;
  height: 0.66666667rem;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  top: 1.5rem;
  padding-left: 0.8rem;
  z-index: 99;
  display: table;
  color: white;
  font-size: 1rem;
}
.radio-wrapper .list li .user {
  padding: 0.5rem;
  display: block;
  width: 15rem;
}
.radio-wrapper .list li .add {
  position: absolute;
  font-size: 0.4rem;
  font-weight: bold;
  color: #f919b6;
  z-index: 99;
  right: 0.4rem;
  top: 12.13333333rem;
  animation: fadeOutUp 2s .2s ease both;
}
.radio-wrapper .list li .user-wrapper {
    padding: 0.5rem;
    font-size: 1.5rem;
}
.radio-wrapper .list li .play {
  width: 3rem;
  position: absolute;
  left: 1rem;
  top: 12rem;
}
.radio-wrapper .list li .user-wrapper .name{
    display: inline-block;
}
.radio-wrapper .list li .user-wrapper .name:hover{
    cursor: pointer;
}
.radio-wrapper .list li .user-wrapper .num{
    display: inline-block;
    float: right;
    color: #f919b6;
}
.radio-wrapper .list li .had-btn {
  background-color: #ffb9e8;
  text-align: center;
  border-radius: 0.2rem;
  width: 80%;
  height: 2rem;
  margin: auto;
  margin-bottom: 0.6rem;
  color: white;
  font-size: 1rem;
  line-height: 2rem;
}
.radio-wrapper .list li .do-btn {
  background-color: #f919b6;
  text-align: center;
  border-radius: 0.2rem;
  width: 80%;
  height: 2rem;
  margin: auto;
  margin-bottom: 0.6rem;
  color: white;
  font-size: 1rem;
  line-height: 2rem;
}
.radio-wrapper .list li .do-btn:hover{
    cursor: pointer;
}
</style>