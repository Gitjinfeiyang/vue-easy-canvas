import canvas from './components/canvas'
import element from './components/element'
import image from './components/image'
import scrollView from './components/scroll-view'
import text from './components/text'
import view from './components/view'

export default {
    install(vue){
        vue.component('ec-canvas',canvas)
        vue.component('ec-element',element)
        vue.component('ec-image',image)
        vue.component('ec-scroll-view',scrollView)
        vue.component('ec-text',text)
        vue.component('ec-view',view)
    }
}