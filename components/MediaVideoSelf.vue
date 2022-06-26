<script setup>
const selfStream=useSelfStream()


const testStream=(stream)=>{
  console.log("streamtest",stream)
}

</script>
<template>
<i-card class="videocard " >

        <video @click="testStream(selfStream)"
          ref="selfStreamVideo"
          style="object-fit: contain;width: 100%    !important; height: 100%   !important;"
          autoplay="autoplay"
          muted="muted"
          :srcObject="selfStream"
        ></video>
        
        </i-card>
</template>