<template>
  <div class="container">
    <header class="main-header">
      <h1>Iniciar Sessió</h1>
      <router-link to="/register" class="home-link">
        No tens compte? Registra't
      </router-link>
    </header>

    <div class="content">
      <div class="form-card">
        <form @submit.prevent="login">
          <input v-model="username" placeholder="Usuari" required />
          <input v-model="password" type="password" placeholder="Contrasenya" required />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const username = ref("")
const password = ref("")
const router = useRouter()

const login = async () => {
  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  })

  if (res.ok) {
    router.push("/")
  } else {
    alert("Credenciales incorrectas")
  }
}
</script>

<style scoped>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.main-header {
  background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-radius: 0 0 20px 20px;
}

.home-link {
  color: white;
  text-decoration: underline;
  display: block;
  margin-top: 10px;
}

.content {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
}

.form-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #4facfe;
}

button {
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(to right, #4facfe, #00f2fe);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  opacity: 0.9;
}
</style>
