<script setup>
const selfStream=useSelfStream()


const testStream=(stream)=>{
  console.log("streamtest",stream)
}

</script>
<template>
<div>
        <video @click="testStream(selfStream)"
          ref="selfStreamVideo"
          width="300"
          height="300"
          autoplay="autoplay"
          muted="muted"
          :srcObject="selfStream"
        ></video>
        
        </div>
</template>