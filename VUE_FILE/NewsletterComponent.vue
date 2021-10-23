<template>
  <div class="newsletter">
    <form @submit="onSubmit">
      <input v-model='email' type="email" placeholder="email" required>
      <button type="submit" >Zapisz się!</button>
      <p v-if="message"> {{ message }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'newsletter',
  data() {
    return {
      email: '',
      message: '',
      err: ''
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      return axios.post(`api/newsletter/addToNewsletter/${this.email}`)
      .then(res => {
        this.message = 'witamy na pokładzie!'
        this.email = '';
      })
      .catch(err => {
        this.err = err.response;
        if(this.err.data.message == 'ER_DUP_ENTRY' ) {
          this.message = 'ten mail znajduje się już w bazie'
        } else {
          this.message = 'wystąpił błąd :('
        }
          this.email = '';
      })
    }
  }
}
</script>

<style scoped>

</style>
