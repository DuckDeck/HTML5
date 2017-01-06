<template>
    <div class="radio-wrapper">
				<ul class="list clearfix" v-cloak>
					<li v-for="anchor in anchorInfo">
						<a class="link">
							<div class="live" v-show="getLivingSatus(anchor)">
								<p>观看直播</p>
							</div>
							<img :src="getUserImg(anchor.userID)" class="user" />
							<img src="assert/img/play.png" class="play" />
							<p class="add">+1</p>
						</a>
						<div class="user-wrapper">
							<div class="name" v-text="anchor.anchorName">
							</div>
							<div class="num" v-text="anchor.supportCnt">
							</div>
						</div>
						<template v-if="getVoteStatus(anchor)">
							<div class="had-btn">
								<p>今日已支持</p>
							</div>
						</template>
						<template v-else>
							<div class="do-btn" @click="singlerVote(anchor)">
								<p>支持</p>
							</div>
						</template>
					</li>
				</ul>
			</div>
		</div>
</template>
<script>
    export default{
        data(){
            return{
                anchorInfo:[]
            }
        },
        mounted(){
            let anchor1 = {anchorName:'stan',supportCnt:11,userID:1}
            let anchor2 = {anchorName:'stan',supportCnt:11,userID:1}
            this.anchorInfo.push(anchor1)
            this.anchorInfo.push(anchor2)
         },
        methods:{
           getLivingSatus(anchor){
               return false
           },
           getUserImg(id){
               return 'http://d.5857.com/stmnvz_150519/005.jpg'
           },
           getVoteStatus(anchor){
               return false
           }
        }
    }
</script>

<style>
.radio-wrapper .list {
  padding-left: 0.24rem;
  padding-right: 0.24rem;
  padding-top: 0.46666667rem;
}
.radio-wrapper .list li {
  background-color: #fff;
  width: 4.61333333rem;
  height: 6.50666667rem;
  position: relative;
  margin-bottom: 0.26666667rem;
  float: left;
  display: table;
}
.radio-wrapper .list li .user {
  width: 4.32rem;
  display: block;
}
</style>