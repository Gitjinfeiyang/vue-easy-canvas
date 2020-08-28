<template>
  <div id="app">
    <ec-canvas :width="300" :height="600">
      <ec-scroll-view :styles="{height:600}">

        <ec-view :styles="styles.imageWrapper">
          <ec-image src="https://tse1-mm.cn.bing.net/th/id/OIP.Dkj8fnK1SsPHIBmAN9XnUAHaNK?pid=Api&rs=1" :styles="styles.image" mode="aspectFill"></ec-image>
          <ec-view :styles="styles.homeTitleWrapper">
            <ec-text>easyCanvas</ec-text>
          </ec-view>
        </ec-view>

        <ec-view :styles="styles.itemWrapper" 
          v-for="(item,index) in examples" 
          :key="index"
          :on="{
            click(e){
              window.location.href = host + item.url
            }
          }">
          <ec-view :styles="styles.title">
            <ec-text>{{item.title}}</ec-text>
          </ec-view>
          <ec-view :styles="styles.desc">
            <ec-text>{{item.desc}}</ec-text>
          </ec-view>
        </ec-view>

      </ec-scroll-view>
    </ec-canvas>
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      styles:{
        imageWrapper:{width:'100%',height:300},
        image:{ width: '100%', height: '100%', position: 'absolute' },
        homeTitleWrapper: { backgroundColor: 'rgba(255,255,255,0.5)', fontSize: 30, padding: 10, position: 'absolute', bottom: 0, left: 0, width: '100%', textAlign: 'center' },
        itemWrapper:{
            backgroundColor: '#fff',
            padding: 10,
            marginBottom: 10,
        },
        title:{ color: '#333', fontSize: 18, fontWeight: 800 },
        desc: { color: '#999' }
      },

      examples : [
        { title: 'Basic', desc: '基本布局', url: 'basic.html' },
        { title: 'Event 事件', desc: '事件监听', url: 'event.html' },
        { title: 'Image 图片', desc: '图片缩放类型', url: 'image.html' },
        { title: 'Demo', desc: '展示了滚动、事件、flex布局、文本换行对齐等能力', url: 'test.html' },
        { title: 'Test', desc: '测试用', url: 'test1.html' },
      ],
      host : 'https://gitjinfeiyang.github.io/easy-canvas/example/',
      window
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
