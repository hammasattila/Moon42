<template>
  <form v-on:submit.prevent="submit">
    <div class="field">
      <input v-model="input" class="input center" type="text"
        placeholder="input argument for the REST API. Example: first second third fourth .">
    </div>
    <div>
      <button class="center" style="display: block;">Send HTTP request</button>
    </div>
  </form>

  <div id="response_container" class="center card">
    <h3>Response from the REST API</h3>
    <p>{{ response }}</p>
  </div>

</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

const API_URL: string = process.env.VUE_APP_API_URL || 'http://localhost:8000';

export default class MainPage extends Vue {
  input = '';
  response = '';

  public submit (): void {
    console.log(API_URL);

    const params = new URLSearchParams();
    params.set('input', this.input);

    fetch(`${API_URL}/api/interview/magic?` + params, {
      method: 'GET'
    }).then(resp => {
      // Check for HTTP status.
      if (resp.status !== 200) {
        this.response = "ERROR: The input was invalid. It should start with the term 'first' or 'second'.";
        console.error(this.response);
        return;
      }

      // HTTP staus OK
      resp.json().then(data => {
        this.response = data.join(' ');
        if (data.length === 0) {
          this.response = 'INFO: The response is an empty array.';
        }
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
form {
  >div {
    margin: 1rem;
  }
}

.center {
  /* Center horizontally */
  margin-left: auto!important;
  margin-right: auto!important;
}

.field {
  position: relative;

  label,
  input {
    display: block;
  }

  input {
    position: relative;
    width: 80%;
  }
}

#response_container {
  width: 80%;
  p,h1,h2,h3,h4,h6 {
    text-align: center;
  }
}
</style>
