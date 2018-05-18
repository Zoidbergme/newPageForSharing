<template>
    <div id="newMessage">
        <div>
            <!-- 导航 -->
        </div>
        <div class="info">
            <ul>
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
        </div>
    </div>
</template>

<script>
export default {
  name: "NewMessage",
  data: function() {
    return {
      condition: false,
      items: ["a", "b"]
    };
  }
};
</script>

<style scoped>
@import "../assets/reset.css";
.info {
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
