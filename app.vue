<script setup>

const sidebar=ref(false)

const switchSideBar=()=>{
  console.log("OK")
  sidebar.value=!sidebar.value
}

onMounted(() => {
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#edeff5",
      "text": "#838391"
    },
    "button": {
      "background": "#4b81e8"
    }
  }
});
});


</script>

<template>
<i-layout>
<i-layout-header>
  <i-navbar fluid >
    <i-navbar-brand>
      <i-nav style="margin-right:20px">
      <span class="title">OOCAM</span>
      </i-nav>
       <i-nav>
      <i-nav-item>
        <nuxt-icon name="EnabCam" class="iconbtn" />
      </i-nav-item>
      <i-nav-item>
        <nuxt-icon name="EnabMic" class="iconbtn" />
      </i-nav-item>
      <i-nav-item>
        <nuxt-icon name="settings" class="iconbtn" @click="switchSideBar" />
      </i-nav-item>
     <i-nav-item>
    <i-hamburger-menu  animation="arrow-left" />
    </i-nav-item>
    </i-nav>
 
    </i-navbar-brand>

    <i-navbar-collapsible  class="_justify-content:flex-end">
      <i-nav>
      <i-input placeholder="Type something.." >
        <template #append>
          <i-button color="primary">
            <nuxt-icon name="call" />
          </i-button>
        </template>
      </i-input>
      </i-nav>
    </i-navbar-collapsible>

  </i-navbar>
</i-layout-header>


    <i-layout vertical class="_padding-top:1/2">
        <i-sidebar v-model="sidebar" :collapse="true" collapse-position="absolute">
            <i-nav vertical>
                <i-nav-item to="/">
                    Home
                </i-nav-item>
                <i-nav-item to="/about">
                    Contact
                </i-nav-item>
                <i-nav-item to="/contact">
                    Contact
                </i-nav-item>
            </i-nav>
        </i-sidebar>
        <i-layout-content>
            <i-container fluid>
                <i-row>
                    <i-column>
                        <h1>
                            Sidebar
                        </h1>
                        <p>
                            Example content for a page with a sidebar that collapses on large screens, a layout typically seen in Documentation pages and Web Application dashboards.
                        </p>
                    </i-column>
                </i-row>
            </i-container>
        </i-layout-content>
    </i-layout>
  </i-layout>
</template>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&family=Rubik+Moonrocks&family=Secular+One&display=swap");
@import "@inkline/inkline/css/variables";
@import "@inkline/inkline/css/mixins";

.title {
  font-family: "Secular One", sans-serif;
  color: white;
  font-size: 2.5em;
  font-weight: 900;
  margin: 0;
  padding: 0;
}

.iconbtn {
  font-size: 2em;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: white;
}



@include i-navbar() {

  ----item--color: white;
  ----collapsed--item--color: green;
  ----collapsed--background: green;

  @include variant("light") {
      ----padding: 0;
  ----margin:0;
    
    ----background: rgb(118, 167, 207);
  }
}
</style>

