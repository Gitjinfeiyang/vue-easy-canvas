# vue-easy-canvas
将 easy-canvas-layout 封装成vue组件进行使用

## Installation
``` bash
npm install vue-easy-canvas --save
```

## Usage
``` javascript
import easyCanvas from 'vue-easy-canvas'
Vue.use(easyCanvas)
```

``` html
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
```

