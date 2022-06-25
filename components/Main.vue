<script setup>



 onMounted(() => {
        MediaControl.show()
        MediaControl.getDevices()
        
      });
</script>
<template>
    <div style="height:300px">
        <MediaVideoSelf />
    </div>
</template>