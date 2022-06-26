<script setup>
onMounted(() => {
    setTimeout(()=>{ 
        MediaControl.show();
  MediaControl.getDevices();},100)


});
</script>
<template>
  <i-row center style="background-image:url('./assets/background.jpg');background-size:100%;height:85vh;padding:10px;margin:0px" >
    <i-column xs="12" md="8" lg="6" color="dark" >
        <div >
      <MediaVideoSelf />
      </div>
    </i-column>
        <i-column xs="12" md="2" lg="2" >
            <div  >
      <MediaVideoSelf />
      </div>
    </i-column>
  </i-row>
</template>