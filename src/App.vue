<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ $t('message.hello') }}</h1>
  <p>{{ desc }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useT } from './i18n'

export default defineComponent({
  name: 'App',
  setup () {
    let desc = useT('message.hello')
    return { desc }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>