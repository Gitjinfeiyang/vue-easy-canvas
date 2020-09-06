<template>
<div>
    <canvas ref="canvas" :style="canvasStyle" @touchstart="ontouchstart" @touchmove="ontouchmove" @touchend="ontouchend" @click="onClick"></canvas>
    <slot />
</div>
</template>

<script>
import easyCanvas from 'easy-canvas-layout'

export default {
    props:{
        width:{
            type:Number,
            default:300
        },
        height:{
            type:Number,
            default:300
        },
        debug:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            layer:null,
            canvas:null,
            ctx:null,
            node:null,
            tag:'view',
            options:{

            }
        }
    },
    computed:{
        canvasStyle(){
            return {
                width:this.width+'px',
                height:this.height+'px'
            }
        }
    },
    mounted(){
        this.init()
        this.generateElement()
        this.mountNode()
    },
    updated(){
        this.generateElement()
        this.mountNode()
    },
    methods:{
        init(){
            this.canvas = this.$refs.canvas
            this.ctx = this.canvas.getContext('2d')
            const dpr = window.devicePixelRatio
            const w = this.width
            const h = this.height
            this.canvas.width = w * dpr
            this.canvas.height = h * dpr
            this.ctx.scale(dpr, dpr)
            this.layer = easyCanvas.createLayer(this.ctx,{
                dpr,
                width:w,
                height:h
            })
        },

        generateElement(){
            this.node = generate(this, easyCanvas.createElement)
        },

        mountNode(){
            this.node.mount(this.layer)
            console.log(this.node)
        },

        ontouchstart(e) {
            e.preventDefault()
            this.layer.eventManager.touchstart(e.touches[0].pageX, e.touches[0].pageY)
        },
        ontouchmove(e) {
        e.preventDefault()
        this.layer.eventManager.touchmove(e.touches[0].pageX, e.touches[0].pageY)
        },
        ontouchend(e) {
        e.preventDefault()
        this.layer.eventManager.touchend(
            e.changedTouches[0].pageX,
            e.changedTouches[0].pageY
        )
        },
        onClick(e) {
        e.preventDefault()
        this.layer.eventManager.click(e.pageX, e.pageY)
        },
    }
}

function generate(node,c){
    let children = []
    if(node.$children){
        children = node.$children.map(child => {
            return generate(child,c)
        })
    }
    if(node.tag === 'text'){
        return c((h) => h(node.tag,{
            styles:node.styles,
            attrs:node.$attrs,
            on:node.on || {}
        },node.$el.innerText))
    }else{
        return c((h) => h(node.tag,{
            styles:node.styles,
            attrs:node.$attrs,
            on:node.on || {}
        },children))
    }
}
</script>
