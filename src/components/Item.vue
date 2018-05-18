<template>
    <div id="item">
        <div class="title">
            <slot></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: "Item"
};
</script>

<style>
#item {
  display: flex;
  align-items: flex-start;
  position: relative;
  border-bottom: 1px solid #dcdcdc
}
/* #item::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 300%;
  height: 300%;
  border: 1px solid #dcdcdc;
  color: #dcdcdc;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scale(0.3333333);
  transform: scale(0.3333333);
} */
.title {
  width: 3.5rem;
  margin: 0.3rem 0;
  flex-shrink: 0
}
.content {
  flex-grow: 1;
  margin: 0.3rem 0;
}
</style>
