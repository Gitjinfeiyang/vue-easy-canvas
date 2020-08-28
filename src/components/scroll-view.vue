<template>
    <div style="display:none;">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        tag:{
            type:String,
            default:'scroll-view'
        },
        styles:{
            type:Object,
            default(){
                return {}
            }
        },
        on:{
            type:Object
        }
    }
}
</script>