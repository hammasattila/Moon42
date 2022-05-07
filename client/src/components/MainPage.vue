<template>
  <div class="center container">
    <form v-on:submit.prevent="submit">
      <div class="form">
        <div class="field">
          <label class="label">Input</label>
          <div class="control">
            <input v-model="input" class="input" type="text" placeholder="Text input">
          </div>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
      </div>
    </form>

    <div class="center container">
      <p>{{ response }}</p>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class MainPage extends Vue {
  input = '';
  response = '';

  public submit (): void {
    console.log(this.input);

    const params = new URLSearchParams();
    params.set('input', this.input);

    fetch('http://localhost:8000/api?' + params, {
      method: 'GET'
    }).then(resp => {
      // Check for HTTP status.
      if (resp.status !== 200) {
        console.error("The input was invalid. It should start with the term 'first' or 'second'.");
        return;
      }

      // HTTP staus OK
      resp.json().then(data => {
        this.response = data.join(' ');
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.center {
  width: 100%;
  max-width: 600px;
  /* Center horizontally*/
  margin: 0 auto;
}
</style>
