import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        script: [
            {
                src: "https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js",
                body: true,
            }]
    },
    modules: [
        '@inkline/nuxt',
        'nuxt-icons'
    ],
    inkline: {
        css: true
        // Plugin options (optional)
    }

})

//https://icones.js.org/