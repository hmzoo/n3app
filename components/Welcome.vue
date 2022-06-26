<script setup>
const number= ref('')
const onSubmit=()=>{
  navigateTo(number.value)
}

const validNum = (n) => {
  return /^\d{6}$/.test(n);
};
const buttonColor = (n) => {
  return validNum(n) ? "success" : "primary";
};
</script>
<template>
      <i-header  class="_text-align:center _height:100%" style="background-color: white;background-image:url('./assets/background.jpg') ;background-size: 100% auto;border-style:solid;border-width:1px;border-color:#AAAAAA">
          
            <i-row center>
              <i-column xs="12" md="6" lg="4">
                <i-form @submit="onSubmit">
            <i-input v-model="number" inputmode="numeric" pattern="[0-9]*" placeholder="000000" size="lg" class="_font-weight:bold _font-size:xl _font-family:monospace">
              <template #append>
                <i-button :color="buttonColor(number)" :disabled="!validNum(number)">
                  <nuxt-icon name="call" class="iconbtn"/>
                </i-button>
              </template>
            </i-input>
            </i-form>
            </i-column>
            </i-row>
          </i-header>
</template>