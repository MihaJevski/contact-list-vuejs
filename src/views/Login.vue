<template>
  <div id="auth-layout">
    <div class="form-wrapper">
      <h3>Login</h3>
      <form @submit.prevent="login" action="">
        <div v-if="errors" class="errors">
          <p v-for="(error, field) in errors" :key="field">
            {{ error[0] }}
          </p>
        </div>
        <input type="email" v-model="form.email" placeholder="Your email" required><br>
        <input type="password" v-model="form.password" placeholder="Your password" required><br>
        <button>Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import {loginRequest} from "@/api/auth";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: null
    }
  },
  methods: {
    async login() {
      await loginRequest(this.form)
          .then(this.handleResponse);
    },
    handleResponse(response) {
      window.localStorage.setItem('ACCESS_TOKEN', response.data.auth_key);
      this.$store.dispatch('setAuth', response.data);
      this.$router.push({name: "home"});
    },
  }
}
</script>

<style scoped>
#auth-layout {
  padding: 50px;
}

#auth-layout .form-wrapper {
  background-color: white;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}

#auth-layout .form-wrapper h3 {
  text-align: center;
  margin-bottom: 30px;
}

#auth-layout form input {
  display: block;
  width: 100%;
  border: 2px solid #e6e6e6;
  padding: 6px 12px;
  transition: all 0.3s;
}

#auth-layout form input:focus {
  outline: 0;
  border-color: #4fb2c1;
}

#auth-layout form button {
  outline: 0;
  cursor: pointer;
  border: 1px solid #40a7b6;
  background-color: #4fb2c1;
  color: white;
  padding: 6px 12px;
  transition: all 0.3s;
}

#auth-layout form button:hover {
  background-color: #3a96a3;
}

#auth-layout form .errors {
  margin-bottom: 15px;
  padding: 10px 15px;
  color: #fff;
  background-color: #ff6969;
  font-size: 12px;
}

#auth-layout form .errors p {
  margin: 0;
}

#auth-layout form .link {
  font-size: 80%;
  float: right;
}
</style>
