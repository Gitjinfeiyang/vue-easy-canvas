<template>
  <div id="app">
    <component :is="current" />
    <div class="nav">
      <a class="item" :class="current === item?'active':''" v-for="(item,index) in routes" :key="index"
        @click="current = item">{{item}}</a>
    </div>
  </div>
</template>

<script>
import Index from './examples/index'
import Table from './examples/Table'
export default {
  name: 'App',
  components: {
    Index,
    Table,
  },
  data() {
    return {
      current: 'Index',
      routes: ['Index', 'Table'],
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 40px;
  line-height: 40px;
}
.nav .item {
  display: inline-block;
  padding: 0 10px;
}
.nav .item.active {
  text-decoration: underline;
}
</style>
