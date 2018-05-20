<template>
    <div id="newMessage">
        <div class="nav">
            <!-- 导航 -->
        </div>
        <div class="position-box">
            <div class="wrapper" ref="wrapper" style="height:300px">
                <ul class="content">
                    <li v-for="(item,index) in items" :key="index" class="white">
                        <div class="title">云算公馆参考价格5000元/m</div>
                        <div class="time">2017-02-23</div>
                        <div class="content">是的那就是电脑加速度静安寺疯狂撒积分卡积分卡撒反对垃圾分类看见啊浪费空间啊</div>
                        <div class="pic" v-if="condition">
                            <ul>
                                <li v-for="(pic,index) in pics" :key="index"></li>
                            </ul>
                        </div>
                        <div class="btn">阅读全文&nbsp;>></div>
                        <div class="split" v-if="index !== items.length - 1"></div>
                    </li>
                </ul>
                <div class="loading-wrapper"></div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
import VueBetterScroll from 'vue2-better-scroll'
export default {
  name: "NewMessage",
  components:{
      VueBetterScroll
  },
  data: function() {
    return {
      condition: false,
      items: []
    };
  },
  methods: {
    loadData() {
      this.$http
        .get("http://120.27.21.136:2798/user/dynamic/list?project_id=1&page=1")
        .then(res => {
          console.log(res.data.data);
          this.items = res.data.data.data.concat(this.items);
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.wrapper, {});
              this.scroll.on("touchEnd", pos => {
                if (pos.y > 1) {
                  this.loadData();
                  console.log("asdasdadsasdada");
                }
              });
            } else {
              this.scroll.refresh();
            }
          });
        });
    }
  },
  created() {
    // this.$http.get('http://120.27.21.136:2798/user/dynamic/list?project_id=1&page=1').then(function(res){
    //   console.log(res)
    //   this.items = res.data
    //   this.$nextTick(()=>{
    //     this.scroll = new BScroll(this.$refs.wrapper,{})
    //   })

    // })
    this.loadData();
  }
  // mounted(){
  //   this.$nextTick(()=>{
  //     this.scroll = new BScroll(this.$refs.wrapper,{})
  //   })
  // }
};
</script>

<style scoped>
@import "../assets/reset.css";
.nav{
    position: fixed;
    left: 0;
    right: 0;
    height: 0.6rem
}
.position-box{
    position: fixed;
    left:0;
    right:0;
    top:0.6rem;
    bottom:0
}
.wrapper{
    height: 100%;
    margin-left:0.35rem
}
.wrapper {
  margin-left: 0.35rem;
  background-color: #f0f0f0;
}
.white {
  background-color: #ffffff;
}
.title {
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 16px;
  font-weight: bold;
}
.time {
  font-size: 12px;
  color: #737373;
  margin-bottom: 0.5rem;
}
.content {
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.btn {
  font-size: 14px;
  color: #aaaaaa;
  height: 1.2rem;
  text-align: right;
  line-height: 1.2rem;
}
.split {
  height: 0.1rem;
  background-color: #f0f0f0;
}
</style>