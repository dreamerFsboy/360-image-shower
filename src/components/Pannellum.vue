<template>
    <div ref="container" id="p"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import PannellumRender from '@/plugins/PannellumRender'
import arr from '@/plugins/ImgName';

// const RandomId = shallowRef((Math.random()*Date.now()).toFixed(3))
const container = ref<HTMLDivElement>()

const props = defineProps({
    src: String,
    files: Array<string>
})
let rendered = false
let viewer:any = null

type ObjMap = {
    [key: string]: any
}

const scenes:ObjMap = {}
props.files?.forEach((v) => {
    scenes[v] = {
        type: 'equirectangular',
        panorama: '/imgs/' + v,
    }
})

watch(props, () => {
    if(rendered){
        viewer.loadScene(props.src)
    }
})

onMounted(() => {
    rendered = true
    viewer = PannellumRender(container.value,
    {
        default: {
            firstScene: props.files?props.files[0]:'',
            sceneFadeDuration: 1000,
            "autoLoad": true
        },
        'scenes':scenes,
    })

})
</script>