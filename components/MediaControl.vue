<script setup>
const emit = defineEmits(["onStreamOn", "onStreamOff"]);

const info = ref("info");

const uss = useSelfStream();
const bconf = useBrowserConf();
const uad = useAudioDevices();
const uvd = useVideoDevices();

const switchCam = () => {
  
  bConfCamSwitch();
  if (selfStreamIsOn() && !bConfCanStream()) {
    closeSelfStream("STREAM CLOSED") 
  }
  if (!selfStreamIsOn()) {
    getMedias();
  }
};
const switchMic = () => {
  bConfMicSwitch();
  if (selfStreamIsOn() && !bConfCanStream()) {
    closeSelfStream("STREAM CLOSED")
  }
   
  if (!selfStreamIsOn() && bConfCanStream()) {
    getMedias();
  }

};
const selectMic = (id) => {
  closeSelfStream("CHANGE MIC")
  selectAudioDevice(id);
  switchMic()
};
const selectCam = (id) => {
  console.log("selectdevice",id,getConstrains())
  closeSelfStream("CHANGE CAM")
  selectVideoDevice(id);
  switchCam();
};

const getDevices = () => {
  logit("MEDIAS","GEDEVICES")
  navigator.mediaDevices.getUserMedia({video:true,audio:true}).then(stream=>{
  startSelfStream(stream)
  return navigator.mediaDevices.enumerateDevices().then(buildDevices);}
  ).catch(err=>{ closeSelfStream(err.toString()) })
};



const getMedias = () => {

 if (selfStreamIsOn() && !bConfCanStream()) {
    closeSelfStream("STREAM CLOSED")
  }
   
  if (!selfStreamIsOn() && bConfCanStream()) {
  logit("MEDIAS", "GETMEDIAS");

  navigator.mediaDevices
    .getUserMedia(getConstrains())
    .then((stream) => {
      startSelfStream(stream);
    })
    .catch((err) => {
      closeSelfStream(err.toString());
    });
}};

onMounted(() => {
  getDevices();
});
</script>

<template>
  <i-container>
    <div>
      <small>{{ bconf.stream_info }}</small>
    </div>
    <div>
      <i-button @click="switchCam" v-if="bconf.camera_status"
        >Camera off</i-button
      >
      <i-button @click="switchCam" v-else>Camera on</i-button>
      <i-button @click="switchMic" v-if="bconf.micro_status">Micro off</i-button>
      <i-button @click="switchMic" v-else>micro on</i-button>
    </div>
    <div>
      <div
        style="margin: 3px"
        v-for="(item, index) in uvd"
        :key="'uvd_' + index"
      >
        <i-button
          size="sm"
          :color="item.selected ? 'success' : 'light'"
          @click="selectCam(item.id)"
          >{{ item.label }}</i-button
        >
      </div>
    </div>
    <div>
      <div
        style="margin: 3px"
        v-for="(item, index) in uad"
        :key="'uvd_' + index"
      >
        <i-button
          size="sm"
          :color="item.selected ? 'success' : 'light'"
          @click="selectMic(item.id)"
          >{{ item.label }}</i-button
        >
      </div>
    </div>
  </i-container>
</template>