<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="mx-auto">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1 class="text-3xl font-bold underline text-yellow-500 mt-6">
      Hello world!
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
