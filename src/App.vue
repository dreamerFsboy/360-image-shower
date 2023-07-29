<template>
    <Pannellum :src="nowImg" :files="files" />
    <div class="img-list" v-show="showList">
        <div v-for="item in files" class="img-box" @click="nowImg=item,showList=false">
            <img :src="`/imgs/${item}`" /><div class="img-detail">{{ item }}</div> 
        </div>
    </div>
    <button @click="showList=!showList" id="open-list">{{ showList?'关闭':'打开' }}图片列表</button>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
import Pannellum from './components/Pannellum.vue';
import files from './plugins/ImgName';
const nowImg = shallowRef<string>('/imgs/1.jpg')
const showList = shallowRef(true)
</script>

<style>
.img-list{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: flex;
    padding-top: 30px;
    background-color: rgba(0, 0, 0, .8);
    backdrop-filter: blur(3px);
    color: #eee;
    font-size: 16px;
    font-weight: 600;
    /* flex-wrap: wrap; */
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: auto;
}
.img-box{
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    padding: 10px 15px;
    /* width: 250px; */
    display: flex;
}
.img-box:hover {
    background-color: rgba(255,255,255,.3);
}
.img-detail{
    padding: 7px 17px;
    width: 100%;
    word-break: break-all;
}
.img-box img{
    width: 100px;
    height: 80px;
    border-radius: 3px;
}
#open-list{
    position: fixed;
    top: 10px;
    right: 5px;
    font-size: 16px;
}
</style>
