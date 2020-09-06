<template>
  <div id="app">
    <ec-canvas :width="300" :height="600" debug>
      <ec-scroll-view :styles="{height:600}">

        <ec-view :styles="styles.imageWrapper">
          <ec-image src="https://tse1-mm.cn.bing.net/th/id/OIP.Dkj8fnK1SsPHIBmAN9XnUAHaNK?pid=Api&rs=1" :styles="styles.image" mode="aspectFill"></ec-image>
          <ec-view :styles="styles.homeTitleWrapper">
            <ec-text>easyCanvas</ec-text>
          </ec-view>
        </ec-view>

        <ec-view :styles="{padding:[10,5,5,5],backgroundColor:'#F2F6FC'}">
          <ec-view 
          :styles="{display:'inline-block',textAlign:'center',width:'25%',margin:5,}"
          v-for="(item,index) in examples" 
          :key="index"
          :on="{
            click(e){
              window.location.href = host + item.url
            }
          }">
            <ec-view :styles="{textAlign:'center'}">
              <ec-image :styles="{width:40,height:40,display:'inline-block',borderRadius:4}" mode="aspectFill" src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1709216491,2536617744&fm=26&gp=0.jpg" />
            </ec-view>
            <ec-view :styles="{textAlign:'center'}">
              <ec-text :styles="{fontSize:10,maxLine:1,color:'#333'}">{{item.title}}</ec-text>
            </ec-view>
            <ec-view v-if="item.tag"
              :styles="{
                position:'absolute',
                right:0,
                top:-4,
                backgroundColor:'#f00',
                color:'#fff',
                textAlign:'center',
                fontSize:8,
                lineHeight:12,
                padding:[0,4],
                borderRadius:7
              }">
              <ec-text>{{item.tag}}</ec-text>
            </ec-view>
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
            <ec-view :styles="{flex:1}">
              <ec-text>{{item.title}}</ec-text>
            </ec-view>
            <ec-image src="/images/arrow-right.png" :styles="{width:20}"></ec-image>
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
        title:{ color: '#333', fontSize: 18, fontWeight: 800,display:'flex' },
        desc: { color: '#999' }
      },

      examples : [
        { title: 'Basic', desc: '基本布局', url: 'basic.html',tag:'Hot' },
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
