<template>
  <div id="detail">
    <div class="main" v-if="loadding">
      <div class="main_mask" v-show="show">
        <span class="close" v-on:click="hided"></span>
        <div class="middle_content">
          <div class="log">
            <img src="../assets/log.gif" alt="" />
          </div>
          <div class="head_text">
            <h4>找新房&nbsp;上云算</h4>
            <p>渠道&nbsp;分销&nbsp;专业房产平台</p>
          </div>
          <!-- <a class="downLoad" v-bind:href="'http://'+project_base_info.yunsuan_url">下载APP</a> -->
          <a class="downLoad" href="http://itunes.apple.com/app/id1371978352?mt=8">下载APP</a>
        </div>
      </div>
      <!-- <div class="banner_images" @click="goMockGallery">
        <ul>
          <li v-for="(imgs,index) in project_img" :key="index">
            <a href="javascript:;"><img v-bind:src="'http://120.27.21.136:2798/'+imgs.img_url" /></a>
          </li>

        </ul>
      </div> -->
      <div class="swiperbox">
        <div class="swiper-container" @click="goMockGallery">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in project_img" :key="index" :style="{backgroundImage:'url(' + 'http://120.27.21.136:2798/' + img.img_url + ')'}"></div>
          </div>
        </div>
        <div class="sign">{{idx}}/{{total}}</div>
      </div>
      <!-- <div class="show"></div> -->
      <div class="house_detail space">
        <div class="house_name">
          <h4>
            <font class="house_title">{{project_base_info.project_name}}</font>
            <font class="house_state" style="color:#1B98FF">{{project_base_info.sale_state}}</font>
          </h4>
        </div>
        <!-- <div class="house_cancle">
					<div class="fix">
						<div class="house_can">
							<a v-for="(item,index) in cancle" class="normal_house" href="javascript:;" :key='index'>{{item}}</a>
						</div>
						<div class="house_function">
							<a class="school_house" href="javascript:;">学区房</a>
							<a class="elctree_house" href="javascript:;">地铁房</a>
							<a class="elevator_house" href="javascript:;">电梯房</a>
						</div>
					</div>
					<div class="house_total">
						<div class="attention_count">
							<font>关注人数：</font>
							<font>{{focus.num}}</font>
						</div>
						<a class="attention_btn" href="javascript:;"></a>
					</div>
				</div> -->
        <div class="houseCancle">
          <div class="tagwrapper">
            <div class="houseCan">
              <ul class="flexUl fullHeight colorful">
                <li v-for="(item,index) in cancle" :key="index" class="liItem fullHeight">{{item}}</li>
              </ul>
            </div>
            <div class="split"></div>
            <div class="houseFunction flexUl">
              <div class="liItem bder">学区房</div>
              <div class="liItem bder">地铁房</div>
              <div class="liItem bder">电梯房</div>
            </div>
          </div>
          <div class="concerned">
          </div>
        </div>
        <div class="complit_time timer_content">
          <font>交房时间：</font>
          <font>暂无数据</font>
        </div>
        <div class="house_price timer_content">
          <font>均价：</font>
          <font>￥{{project_base_info.average_price}}元/㎡</font>
        </div>
        <a href="javascript:;" class="house_local timer_content">
          <font class="local_info" :name="project_base_info.latitude" :id="project_base_info.longitude"></font>
          <font id="base_loacl" class="rightside">{{project_base_info.absolute_address}}</font>
        </a>
      </div>
      <div class="bulding_info space">
        <div class="head_mod">
          <h3>楼盘信息</h3>
          <a href="javascript:;" @click="checkPropertyDetail">查看全部>></a>
        </div>
        <div class="info_detail">
          <div class="info_content">
            <font>开发商：</font>
            <font>{{project_base_info.developer_name}}</font>
          </div>
          <div class="info_content">
            <font>最新开盘：</font>
            <font>{{build_info.open_time}}</font>
          </div>
          <div class="info_content">
            <font>交房时间：</font>
            <font>{{build_info.handing_room_time}}</font>
          </div>
          <!-- <div class="info_content"> -->
          <!-- <font>产权：</font> -->
          <!-- <font>70年</font> -->
          <!-- <font>70年</font> -->
          <!-- </div> -->
        </div>
      </div>
      <div class="project_news space">
        <div class="head_mod">
          <h3>
            <font class="title">项目动态</font>&nbsp;
            <font style="color:#4CA0FF;">(共{{dynamic.count}}条)</font>
          </h3>
          <a @click="checkAllMessage">查看更多>></a>
        </div>
        <div class="project_notes">
          <a class="project_content">
            <h2>{{dynamic.first.title}}</h2>
            <h2 class="ctime">{{dynamic.first.create_time}}</h2>
            <div class="abstract">{{dynamic.first.abstract}}</div>
            <p id="dy_content">{{dynamic.first.content}}</p>
            <div class="split"></div>
          </a>
        </div>

      </div>
      <div class="project_img">
        <h3 class="space">楼栋信息</h3>
        <img v-bind:src="'http://120.27.21.136:2798/'+project_base_info.total_float_url" @click="checkBuildingPic" />
        <div class="house_info">
          <div class="head_mod">
            <h3 class="space">户型信息</h3>
            <!-- <a href="#">查看全部>></a> -->
          </div>
          <div id="scroll">
            <div class="house_type imgwrapper">
              <div v-for="(house,index) in house_type " class="house_type_content" :key="index" @click="getMoreDetails(house)">
                <img v-bind:src="'http://120.27.21.136:2798/'+house.img_url" />
                <div>
                  <p class="house_named">{{house.house_type_name}}</p>
                  <font>{{house.property_area_min}}㎡</font>
                </div>
                <div>{{house.house_type}}</div>
                <div>
                  <font style="color:#1B98FF">{{house.sale_state}}</font>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="around">
        <h3>周边及配套</h3>
        <div id="allmap">

        </div>
        <ul id="map_btn">
          <li class="anothercolorful">
            <a @click="shoplocal($event)" href="javascript:;">
              <font class="anothertxt1">教育</font>
            </a>
          </li>
          <li class="anothercolorful">
            <a @click="shoplocal($event)" href="javascript:;">
              <font class="anothertxt2">交通</font>
            </a>
          </li>
          <li class="anothercolorful">
            <a @click="shoplocal($event)" href="javascript:;">
              <font class="anothertxt3">医院</font>
            </a>
          </li>
          <li class="anothercolorful">
            <a @click="shoplocal($event)" href="javascript:;">
              <font class="anothertxt4">购物</font>
            </a>
          </li>
          <li class="anothercolorful">
            <a @click="shoplocal($event)" href="javascript:;">
              <font class="anothertxt5">餐饮</font>
            </a>
          </li>
        </ul>
      </div>
      <a id="call" :href="'tel:'+butter_tel">电话咨询</a>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
// var mark = false;
export default {
  name: "projectView",
  data() {
    return {
      data: "",
      dynamic: [],
      focus: [],
      house_type: [],
      project_base_info: {},
      project_img: [],
      loadding: false,
      cancles: [],
      show: true,
      local: "",
      butter_tel: "",
      map: "",
      project_id: "",
      idx: 1,
      total: undefined
    };
  },
  methods: {
    goMockGallery() {
      this.$router.push({
        name: "gallery",
        query: { id: this.$route.query.id }
      });
    },
    checkBuildingPic() {
      let pic = this.data.project_basic_info.total_float_url_phone;
      let id = this.project_base_info.project_id;
      this.$router.push({
        name: "buildingPic",
        params: { projectId: id, pic }
      });
    },
    checkAllMessage() {
      let id = this.project_base_info.project_id;
      let pname = this.project_base_info.project_name;
      this.$router.push({
        name: "newMessage",
        query: { project_id: id, pname }
      });
    },
    getMoreDetails(house) {
      let id = house.id;
      this.$router.push({ name: "estatedetail", query: { id } });
    },
    checkPropertyDetail() {
      let id = this.project_base_info.project_id;
      this.$router.push({ name: "propertyInformation", query: { id } });
    },
    hided() {
      this.show = false;
    },
    location() {
      var latitude = this.project_base_info.latitude;
      var longitude = this.project_base_info.longitude;
      this.map = new BMap.Map("allmap");
      this.map.centerAndZoom(new BMap.Point(longitude, latitude), 12);
      this.local = new BMap.LocalSearch(this.map, {
        renderOptions: { map: this.map, autoViewport: true }
      });
    },
    shoplocal: function(e) {
      var m = e.currentTarget;
      var option = m.querySelector("font").innerHTML;
      var info = $("#base_loacl").html();
      this.local.searchNearby(option, info, 15);
    },
    ajusctTextContent: function cuttext(eleclassname, count, words) {
      var p_boxs = document.querySelectorAll(eleclassname, count);
      if (p_boxs.length > 0) {
        for (var i = 0; i < p_boxs.length; i++) {
          if (p_boxs[i].innerHTML.length > count) {
            p_boxs[i].innerHTML =
              p_boxs[i].innerHTML.substring(0, count) +
              "<font>..." +
              words +
              "</font>";
          } else {
            p_boxs[i].innerHTML =
              p_boxs[i].innerHTML + "<font>" + words + "</font>";
          }
        }
      }
    }
    // GetQueryString(name) {
    //   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //   var r = window.location.href.substr(1).match(reg);
    //   if (r != null) {
    //     return unescape(r[2]);
    //   }
    //   return null;
    // }
  },
  created() {
    var _this = this;
    this.project_id = this.$route.query.id;
    // this.project_id = this.GetQueryString("project_id");
    // this.project_id = this.project_id === null ? 1 : this.project_id;
    var url =
      "http://120.27.21.136:2798/user/project/detail?project_id=" +
      this.project_id +
      "&agent_id=0";
    $.ajax({
      url: url,
      async: "false",
      type: "get",
      dataType: "json",
      success: function(res) {
        console.log(res);
        _this.build_info = res.data.build_info;
        _this.data = res.data;
        _this.dynamic = res.data.dynamic;
        _this.focus = res.data.focus;
        _this.house_type = res.data.house_type;
        _this.project_base_info = res.data.project_basic_info;
        _this.project_img = res.data.project_img.url;
        _this.total = _this.project_img.length;
        _this.cancle = res.data.project_basic_info.property_type;
        _this.butter_tel = res.data.butter_tel;
        _this.loadding = true;
        _this.$nextTick(function() {
          var swiper = new Swiper(".swiper-container", {
            observeParents: true,
            observer: true,
            speed: 300,
            autoplay: false
          });
          swiper.on("slideChange", function() {
            _this.idx = swiper.activeIndex + 1;
          });
        });
        // _this.$nextTick(_this.location)
      }
    });
  },
  mounted() {},
  updated() {
    // slider();
    this.ajusctTextContent(".house_named", 4, "");
    // this.ajusctTextContent("#dy_content", 20, "");
    this.location();
  }
};
function obj(dynamic, project_base_info, house_type) {}
function slider() {
  var moveUl = document.querySelector(".banner_images ul"); //移动的ul
  var indexLiArr = document.querySelectorAll(".banner_images ul li"); //作为小点的ul
  moveul(moveUl, indexLiArr);
  function moveul(moveUl, indexLiArr) {
    var width = document.body.offsetWidth;
    var index = 0;
    var show = document.querySelector(".show");

    show.innerHTML = index + 1 + "/" + indexLiArr.length;
    moveUl.style.width = 100 * indexLiArr.length + "%";
    for (var i = 0; i < indexLiArr.length; i++) {
      indexLiArr[i].style.width = (index + 1) / indexLiArr.length * 100 + "%";
    }
    var timeId = setInterval(function() {
      index++;
      if (index == indexLiArr.length) {
        index = 0;
        moveUl.style.transition = "";
        moveUl.style.transform = "translateX(" + index * width * -1 + "px)";
        show.innerHTML = index + 1 + "/" + indexLiArr.length;
      } else {
        moveUl.style.transition = "all .3s";
        moveUl.style.transform = "translateX(" + index * width * -1 + "px)";
        show.innerHTML = index + 1 + "/" + indexLiArr.length;
      }
    }, 5000);

    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    moveUl.addEventListener("touchstart", function(event) {
      clearInterval(timeId);
      moveUl.style.transition = "";
      startX = event.touches[0].clientX;
    });
    moveUl.addEventListener("touchmove", function(event) {
      moveX = event.touches[0].clientX - startX;
      moveUl.style.transform =
        "translateX(" + (moveX + index * -1 * width) + "px)";
    });
    moveUl.addEventListener("touchend", function(event) {
      var maxDistance = width / 3;
      if (Math.abs(moveX) > maxDistance) {
        if (moveX > 0) {
          index--;
        } else {
          index++;
        }
        if (index == indexLiArr.length) {
          index = indexLiArr.length - 1;
          moveUl.style.transition = "";
          moveUl.style.transform = "translateX(" + index * width * -1 + "px)";
          show.innerHTML = index + 1 + "/" + indexLiArr.length;
        } else if (index < 0) {
          index = 0;
          moveUl.style.transition = "";
          moveUl.style.transform = "translateX(" + index * width * -1 + "px)";
          show.innerHTML = index + 1 + "/" + indexLiArr.length;
        } else {
          show.innerHTML = index + 1 + "/" + indexLiArr.length;
          moveUl.style.transition = "all .3s";
          moveUl.style.transform = "translateX(" + index * -1 * width + "px)";
        }
      } else {
        show.innerHTML = index + 1 + "/" + indexLiArr.length;
        moveUl.style.transition = "all .3s";
        moveUl.style.transform = "translateX(" + index * -1 * width + "px)";
      }
      timeId = setInterval(function() {
        if (index == indexLiArr.length) {
          index = 0;
          moveUl.style.transition = "";
          moveUl.style.transform = "translateX(" + index * width * -1 + "px)";
          show.innerHTML = index + 1 + "/" + indexLiArr.length;
        } else {
          moveUl.style.transition = "all .3s";
          moveUl.style.transform = "translateX(" + index * width * -1 + "px)";
          show.innerHTML = index + 1 + "/" + indexLiArr.length;
        }
      }, 5000);
    });
  }
}
</script>

<style scoped>
@import "../assets/resetByHuang.css";


.abstract{
  font-size: 12px;
  margin-top: 0.1rem;
  color: #999
}



.sign {
  position: absolute;
  right: 0.3rem;
  bottom: 0.3rem;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  z-index: 9999;
  background-color: #fff !important;
  font-size: 14px;
  text-align: center;
  line-height: 0.9rem
}
.space {
  padding: 0 0.3rem;
}

div#scroll {
  width: 100%;
  overflow-x: auto;
}
.imgwrapper {
  display: -webkit-box;
}
#detail {
  width: 100%;
  float: left;
  background: #eee;
}

/* #detail ul {
  float: left;
  width: 60%;
  display: flex;
} */
/* #detail li {
  float: left;
  height: 2.1875rem;
  padding: 0px 10px;
  flex: 1;
} */
/* #detail a {
  float: left;
  width: 40px;
  font-size: 0.75rem;
  font-weight: 500;
  height: 2.1875rem;
  line-height: 2.1875rem;
  color: #666;
} */
/* #detail ul li a {
  width: 2rem;
} */

.main {
  width: 100%;
  float: left;
  position: relative;
  /* height: 100%; */
}
.main_mask {
  /* float:left; */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.6rem;
  background: #0facfc;
  /* position:absolute; */
  /* top:0px; */
  /* left:0px; */
  display: flex;
  flex-wrap: nowrap;
  padding: 0.2rem;
  z-index: 1000;
  align-items: center;
}
.main_mask span {
  margin-right: 0.2rem;
  color: #fff;
  /* font-size:034rem; */
  /* font-size: 12px; */
  width: 0.5rem;
  height: 0.5rem;
  /* border: 1px solid red; */
  /* margin-left: 0.3rem; */
  /* margin-top: 0.32rem; */
  /* margin-right: 0.3rem; */
  background-image: url("../assets/close.png");
  background-size: cover;
  /* float:left; */
  /* font-weight: 400; */
}
.main_mask .log {
  width: 1.2rem;
  height: 1.2rem;
  /* float:left; */
}
.main_mask .log img {
  width: 1.2rem;
  height: 1.2rem;
  /* float:left; */
  border-radius: 0.25rem;
}
.main_mask .middle_content {
  /* float:left; */
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.head_text {
  /* float:left; */
  /* width:11.5rem; */
  height: 0.84rem;
  padding-left: 0.5rem;
  margin-right: 0.35rem;
  flex-grow: 1;
}
.head_text h4,
.head_text p {
  width: 100%;
  height: 14px;
  line-height: 14px;
  /* font-size:0.75rem; */
  font-size: 14px;
  color: #fff;
  font-weight: 500;
}
.head_text p {
  font-size: 12px;
  margin-top: 0.1rem;
}
#detail .main_mask .downLoad {
  /* float:right; */
  width: 1.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 12px;
  background: #fff;
  color: #1b98ff;
  border-radius: 0.125rem;
  /* margin-top:0.25rem; */
}
#detail .banner_images {
  float: left;
  width: 100%;
  height: 5.5rem;
  position: relative;
  overflow: hidden;
}
#detail .banner_images ul {
  /* float:left; */
  display: flex;
  width: 300%;
  height: 5.5rem;
}
#detail .banner_images ul li {
  float: left;
  width: 33%;
  padding: 0px;
  height: 5.5rem;
}
#detail .banner_images ul li a,
#detail .banner_images ul li img {
  float: left;
  width: 100%;
  height: 5.5rem;
}
#detail .show {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  background: #d0cecd;
  color: #333333;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  z-index: 100;
  text-align: center;
  line-height: 0.9rem;
  font-size: 12px;
}
.house_detail {
  width: 100%;
  background: #fff;
  float: left;
}
.house_detail h4 {
  width: 100%;
  /* height:1.5625rem; */
  font-size: 16px;
  /* line-height:1.5625rem; */
}
.house_detail h4 font {
  float: left;
  height: 1.5rem;
  line-height: 1.5rem;
}
.house_detail .house_state {
  /* font-size: 0.6rem; */
  font-size: 16px;
  font-weight: 400;
  margin-left: 0.5rem;
}
.house_detail .house_title {
  color: #666;
  font-size: 18px;
  font-weight: 500;
}
.fix {
  display: flex;
  width: 240px;
  height: 120px;
  flex-wrap: wrap;
}
.house_detail .house_cancle {
  /* float:left; */
  display: flex;
  width: 100%;
  height: 1rem;
  align-items: flex-start;
}
.house_detail .house_cancle .house_can {
  /* float:left; */
  display: flex;
  /* flex-wrap: wrap; */
  /* width: 5rem; */
  height: 60px;
  padding: 0.25rem 0;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
}
#detail .house_detail .house_cancle .house_can a {
  /* width: calc(333.3333% - 10px); */
  width: 30px;
  /* float:left; */
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  margin-right: 0.25rem;
  padding: 0rem 0.65rem;
  font-size: 16px;
  border-radius: 0.1rem;
}
#detail .house_detail .house_cancle .house_can a:nth-child(1) {
  color: #d5f2ff;
  background: #40a9ff;
}
#detail .house_detail .house_cancle .house_can a:nth-child(2) {
  color: #6cbba6;
  background: #eaf2ed;
}
#detail .house_detail .house_cancle .house_can a:nth-child(3) {
  color: #37bdc7;
  background: #d0f3f5;
}
#detail .house_detail .house_cancle .house_can a:nth-child(4) {
  color: #d5f2ff;
  background: #40a9ff;
}
#detail .house_detail .house_cancle .house_total {
  /* float: left; */
  flex-grow: 1;
  /* width: 1rem; */
  height: 0.5rem;
  padding: 0.25rem 0rem 0.25rem 2rem;
}
#detail .house_detail .house_cancle .house_total .attention_count {
  /* float: left; */
  width: 4rem;
}
#detail .house_detail .house_cancle .house_total .attention_count font {
  float: left;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.65rem;
  color: #666;
}
#detail .house_detail .house_cancle .house_total .attention_btn {
  width: 1.5rem;
  height: 1.5rem;
  background: url(../assets/favi.gif) no-repeat;
  background-size: 1.5rem 1.5rem;
  margin-left: 0.5rem;
}
#detail .house_detail .house_function {
  /* float: left; */

  display: flex;
  /* flex-wrap: wrap; */
  /* width: 5rem; */
  height: 60px;
  padding: 0.25rem 0;
  border: 1px solid red;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.25rem 0rem;
}
#detail .house_detail .house_function a {
  /* float: left; */
  width: 0.36rem;
  height: 0.48rem;
  line-height: 0.3rem;
  text-align: center;
  border: 1px solid #ddd;
  font-size: 14px;
  margin-right: 0.2rem;
  border-radius: 0.125rem;
}
#detail .house_detail .timer_content {
  float: left;
  width: 100%;
  height: 1rem;
  text-align: center;
  /* line-height: 1rem; */
  position: relative;
  margin-top: 0.1rem;
}
#detail .house_detail .timer_content font {
  float: left;
  font-size: 14px;
  color: #666;
  font-weight: 500;
  /* height: 0.2rem; */
  /* line-height: 0.2rem; */
  text-align: center;
}
#detail .house_detail .house_price font:nth-child(1) {
  font-size: 16px;
  color: #737373;
}
#detail .house_detail .house_price font:nth-child(2) {
  font-size: 16px;
  color: #ff4646;
}
#detail .house_detail .house_local font:nth-child(1) {
  float: left;
  width: 0.36rem;
  height: 0.48rem;
  background: url(../assets/location.gif) no-repeat;
  background-size: cover;
  margin: auto 0;
  position: absolute;
  left: 0;
  top: 31%;
  margin-top: -0.24rem;
}
.bulding_info {
  float: left;
  width: 100%;
  margin-top: 0.2rem;
  /* height: 9.3125rem; */
  height: 4.5rem;
  background: #fff;
  /* padding: 0.5rem; */
}
#detail .head_mod {
  /* float: left; */
  width: 100%;
  height: 1.5625rem;
  display: flex;
  align-items: center;
}
#detail .head_mod h3 {
  float: left;
  /* width: 8rem; */
  flex-grow: 1;
  /* height: 1.5625rem; */
  height: 1rem;
  /* line-height: 1.5625rem; */
  line-height: 1rem;
  font-size: 16px !important;
}
#detail .head_mod a {
  /* float: right; */
  text-align: right;
  /* font-size: 0.6rem; */
  font-size: 14px;
  color: #999;
}
#detail .head_mod h3 {
  color: #666;
  font-weight: 500;
}
#detail .info_detail {
  float: left;
  width: 100%;
  /* height: 6.25rem; */
  height: 2.8rem;
  /* margin-top: 0.5rem; */
  font-size: 16px;
}
#detail .info_detail .info_content {
  float: left;
  width: 100%;
  display: flex;
  /* height: 1.5rem; */
  height: 1rem;
}
#detail .info_detail .info_content font {
  float: left;
  /* height: 1.5rem; */
  height: 0.75rem;
  line-height: 0.75rem;
  /* font-size: 0.65rem; */
  font-size: 14px;
  color: #666;
}

#detail .info_detail .info_content font:nth-child(1) {
  width: 4.4rem;
}
#detail .info_detail .info_content font:nth-child(2) {
  flex: 1;
}
#detail .project_news {
  float: left;
  width: 100%;
  margin-top: 0.2rem;
  /* padding: 0.5rem; */
  background: #fff;
  /* margin-bottom: 0.2rem; */
}
div.head_mod {
  display: flex;
}
#detail .project_news h3 {
  flex-grow: 1;
  /* float: left; */
  /* display: flex; */
  /* width: 10rem; */
}
#detail .project_news h3 font {
  /* float: left; */
  /* font-size: 0.85rem; */
  font-size: 16px;
}
#detail .project_news h3 font:nth-child(2) {
  /* margin-left: 1rem; */
}
#detail .project_notes {
  /* float: left; */
  width: 100%;
  /* margin-top: 0.5rem; */
}
#detail .project_notes a {
  /* float: left; */
  width: 100%;
  height: auto;
}
#detail .project_notes h2 {
  /* float: left; */
  font-size: 14px;
  width: 100%;
  margin-bottom: 0.5rem;
}
#detail .project_notes p {
  /* float: left; */
  font-size: 14px;
  width: 100%;
  padding-top: 0.1rem;
  line-height: 20px;
  color: #737373;
  /* height: 2rem; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0.1rem;
}
#detail .project_img {
  float: left;
  width: 100%;
  margin-top: 0.2rem;
  background: #fff;
}
#detail .project_img > h3,
#detail .around > h3 {
  width: 100%;
  /* padding: 0.5rem; */
  padding: 0.3rem;
  font-weight: 500;
  color: #666;
  font-size: 16px;
}
/* h3 {
  font-size: 0.85rem;
} */
#detail .project_img .house_info {
  float: left;
  width: 100%;
  /* padding: 0.5rem; */
}
#detail .project_img .house_type {
  margin: 0 0.2rem;
  /* float: left; */
  /* width: 100%; */
}
#detail .project_img .house_type_content {
  /* float: left; */
  width: 3.1rem;
  margin-right: 0.5rem;
}
#detail .project_img .house_type_content img {
  float: left;
  width: 100%;
  height: 3.1rem;
}
/* #detail .project_img .house_type_content:nth-child(3) {
  float: left;
  width: 3.1rem;
  margin-right: 0rem;
} */
#detail .project_img .house_type_content div {
  /* float: left; */
  width: 100%;
  display: flex;
  font-size: 14px;
}
#detail .project_img .house_type_content div p {
  float: left;
  width: 4.6rem;
  /* font-size: 0.65rem; */
  font-size: 12px;
  text-align: left;
  height: 1rem;
  line-height: 1rem;
}
#detail .project_img .house_type_content div p > font {
  display: inline-block;
}
#detail .project_img .house_type_content div > font {
  text-align: right;
  width: 3rem;
  /* font-size: 0.65rem; */
  font-size: 12px;
  text-align: left;
  height: 1rem;
  line-height: 1rem;
}
#detail #call {
  width: 100%;
  float: left;
  height: 1.2rem;
  background: #0caffc;
  color: #fff;
  text-align: center;
  line-height: 1.2rem;
  font-size: 16px;
}
#detail .around {
  float: left;
  width: 100%;
}
#allmap {
  float: left;
  width: 100%;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
  height: 5.85rem;
}
#detail #map_btn {
  float: left;
  height: 2rem;
  background: #eee;
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
#detail #map_btn li {
  float: left;
  width: 1.8rem;
  height: 0.8rem;
  /* margin-right: 0.5rem; */
  border: 1px solid #ddd;
  border-radius: 0.05rem;
  padding: 0rem;
}
#detail #map_btn li a {
  float: left;
  display: block;
  width: 100%;
  height: 100%;
  line-height: 0.8rem;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  /* padding: 0rem 0.25rem; */
}
#detail #map_btn li a font {
  float: left;
  width: 100%;
  text-align: center;
  line-height: 0.8rem;
}
#detail #map_btn li,
#detail #map_btn li a:nth-last-child {
  margin-right: 0rem;
}
#detail #map_btn li a:nth-child(1) {
  border-bottom: none;
}
#detail #allmap p,
#detail #allmap div,
#detail #allmap tr,
#detail #allmap td {
  width: auto;

  margin: 0px;
  padding: 0px;
  height: auto;
}
#detail #allmap p {
  float: left !important;
  text-align: left !important;
  height: 1rem !important;
  line-height: 1rem !important;
}
#detail #allmap p a {
  float: right !important;
  height: 1rem !important;
  width: auto !important;
  /* display: inline-block!important; */
  line-height: 1rem !important;
}
#detail #allmap table {
  table-layout: auto !important;
}

.flexUl {
  display: flex;
  align-items: center;
}

.houseCancle {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 2rem;
  font-size: 14px;
  /* border: 1px solid red */
}
.tagwrapper {
  flex-grow: 1;
  /* border: 1px solid blue; */
  height: 100%;
}
.houseCan {
  height: 0.7rem;
  margin-bottom: 0.1rem;
}
.split {
  overflow: hidden;
}
.houseFunction {
  height: 0.7rem;
  margin-top: 0.2rem;
}
.fullHeight {
  height: 100%;
}
.concerned {
}

.liItem {
  /* height: 0.6rem; */
  line-height: 0.7rem;
  text-align: center;
  padding: 0 0.15rem;
  margin-right: 0.2rem;
  /* margin: 0 0.15rem; */
}
.anothercolorful:nth-child(1) {
  background: #d5f2ff;
}
.anothertxt1 {
  color: #40a9ff !important;
}
.anothercolorful:nth-child(2) {
  background: #eaf2ed;
}
.anothertxt2 {
  color: #6cbba6;
}
.anothercolorful:nth-child(3) {
  background: #d0f3f5;
}
.anothertxt3 {
  color: #4fa6ab;
}
.anothercolorful:nth-child(4) {
  background: #ffedd3;
}
.anothertxt4 {
  color: #e78800;
}
.anothercolorful:nth-child(5) {
  background: #ffb99e;
}
.anothertxt5 {
  color: #c84e1f;
}

.colorful :nth-child(1) {
  color: #d5f2ff;
  background: #1ea0e9;
  /* background: #d5f2ff; */
}
.colorful :nth-child(2) {
  color: #6cbba6;
  background: #eaf2ed;
}
.colorful :nth-child(3) {
  color: #37bdc7;
  background: #d0f3f5;
}
.colorful :nth-child(4) {
  color: #d5f2ff;
  background: #40a9ff;
}
.bder {
  position: relative;
}
.bder::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 200%;
  height: 200%;
  border: 1px solid #dcdcdc;
  color: #d5d5d6;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}

.rightside {
  margin-left: 0.36rem;
}
div.around {
  background-color: #fff;
}
a#call {
  height: 1.2rem;
}
.swiperbox{
  position: relative;
  width: 100%;
  height: 5.5rem;
}
.swiper-container {
  width: 100%;
  height: 100%;
  /* height: 5.5rem; */
  transition-timing-function: cubic-bezier(0, 0, 1, 1);
}
.slide-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}

.ctime {
  font-size: 12px !important;
}
</style>