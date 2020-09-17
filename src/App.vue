<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import './style/style.scss'

@Component({
  name: 'App'
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
