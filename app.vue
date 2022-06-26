<script setup>
useHead({
  titleTemplate: "N3APP",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
});
const route = useRoute();
const showsidebar = ref(false);

const switchSideBar = () => {
  showsidebar.value = !showsidebar.value;
};

const getSlug = () => {
  return route.path.replace(/\//g, "");
};
const checkSlug = () => {
  console.log("chekslug", getSlug() == "");
  return getSlug() == "";
};

const ubc = useBrowserConf();

onMounted(() => {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: "#edeff5",
        text: "#838391",
      },
      button: {
        background: "#4b81e8",
      },
    },
  });
});
</script>

<template>
  <i-layout>
    <i-layout-header>
      <i-navbar size="sm" :collapse="false" class="_background:primary" style="padding:0;margin:0">
        <i-navbar-brand>
          <span class="title">TITLE {{ getSlug() }}</span>
        </i-navbar-brand>

        <i-nav size="sm" v-if="!checkSlug()">
          <i-nav-item>
            <nuxt-icon
              name="EnabCam"
              class="iconbtn"
              v-if="ubc.camera_status"
              @click="MediaControl.switchCam()"
            />
            <nuxt-icon
              name="DisabCam"
              class="iconbtn"
              v-else
              @click="MediaControl.switchCam()"
            />
          </i-nav-item>
          <i-nav-item>
            <nuxt-icon
              name="EnabMic"
              class="iconbtn"
              v-if="ubc.micro_status"
              @click="MediaControl.switchMic()"
            />
            <nuxt-icon
              name="DisabMic"
              class="iconbtn"
              v-else
              @click="MediaControl.switchMic()"
            />
          </i-nav-item>
          <i-nav-item>
            <nuxt-icon name="settings" class="iconbtn" @click="switchSideBar" />
          </i-nav-item>
        </i-nav>
      </i-navbar>
    </i-layout-header>
    <i-layout vertical class="_padding-top:1/2">
      <i-sidebar
        v-model="showsidebar"
        :collapse="true"
        collapse-position="absolute"
        placement="right"
        :collapseOnItemClick="false"
      >
        <Settings />
      </i-sidebar>
      <i-layout-content>
        <i-container fluid style="height:90vh;padding:0;margin:0">
          <Welcome v-if="checkSlug()" />
          <Main v-else />
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

@media (prefers-color-scheme: dark) {
}

@include i-navbar() {
  ----item--color: white;
  @include variant("light") {
    ----padding: 0;
    ----margin: 0;
    ----background: primary;
  }
}
.title {
  font-family: "Secular One", sans-serif;
  color: white;
  font-size: 2em;
  font-weight: 900;
}

.iconbtn {
  font-size: 2em;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: white;
}
.videocard.card {
  --padding-top: 0.4rem;
  --padding-bottom: 0;
  --padding-right: 0;
  --padding-left: 0;
  ----background: var(--color--dark);
}

.videocard.-light {
  --background: primary;
}

.main.-light {
  --background: primary;
}
</style>

