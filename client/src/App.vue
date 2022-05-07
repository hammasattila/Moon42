<template>
  <MainPage />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainPage from './components/MainPage.vue';

@Options({
  components: {
    MainPage
  }
})
export default class App extends Vue { }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.card {
  background-color: white;
  border: solid 1px;
  border-radius: 10px;
}

.container {
  padding: 1rem;
}
</style>
