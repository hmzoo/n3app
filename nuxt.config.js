import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

modules: [
        '@inkline/nuxt',
        'nuxt-icons'
    ],
    inkline: {
        css :true
        // Plugin options (optional)
    }

})

//https://icones.js.org/