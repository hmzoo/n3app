<script setup>
</script>

<template>
  <i-navbar>
    <i-navbar-brand to="/">
      <div class="title">Navbar</div>
    </i-navbar-brand>

    <i-navbar-collapsible>
      <i-nav>
        <i-nav-item > Home </i-nav-item>
      </i-nav>
      <i-nav>
        <i-nav-item > OK </i-nav-item>
      </i-nav>
    </i-navbar-collapsible>
    <i-nav-item > OK </i-nav-item>
    <i-nav-item>
      <i-button><nuxt-icon name="settings" /></i-button>
    </i-nav-item>
  </i-navbar>
</template>

<style lang="scss">
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';
:root {
  --body--background:color(#FF0000)
      --color--primary--h: 195deg;
      --color--primary--s: 77%;
      --color--primary--l: 39%;
}

.title {
  color:white;
  margin:0;
  font-size:3em;
  font-weight:900;
  margin:0;
  padding:0;
}


@include i-navbar() {
      
         @include variant('light') {

        ----background:steelblue;
        ----item--color:white;
       
        }
}
</style>

