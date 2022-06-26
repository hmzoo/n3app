<script setup>
const camchecked=ref()
const micchecked=ref()

const bconf = useBrowserConf();
const uad = useAudioDevices();
const uvd = useVideoDevices();

const changeDevice = ()=> {
MediaControl.changeDevice()
}
</script>

<template>
  <i-container>
    <i-row>
      <i-column>
          <i-form-group size="sm">
              <i-form-label>Cameras :</i-form-label>
        <i-radio-group v-model="bconf.camid" @change="changeDevice">
              <i-radio  v-for="(item, index) in uvd" :key="'uvd_' + index" :value="item.id"  >{{item.label}}</i-radio>

        </i-radio-group>
        </i-form-group>
      </i-column>
    </i-row>
    <i-row>
      <i-column>
          <i-form-group size="sm">
              <i-form-label>Micros :</i-form-label>
        <i-radio-group v-model="bconf.micid" @change="changeDevice">
          <i-radio  v-for="(item, index) in uad" :key="'uvd_' + index" :value="item.id"  >{{item.label}}</i-radio>

        </i-radio-group>
        </i-form-group>
      </i-column>
    </i-row>
    <i-row>
    <i-column>

    </i-column>
          
    </i-row>
  </i-container>
</template>