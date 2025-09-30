<template>
  <div class="form-contenedor">
    <form>
      <h2 class="title">Registro</h2>

      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" required>

      <label for="username">Username</label>
      <input type="text" id="username" name="username" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>

      <label for="telefono">Teléfono</label>
      <input type="tel" id="telefono" name="telefono" required>

      <label for="edad">Edad</label>
      <input type="number" id="edad" name="edad" required>

      <label for="password">Contraseña</label>
      <input type="password" id="password" name="password" required>

      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>

</script>

<style scoped>
.form-contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f9f9f9;
}

form {
  background: #fff;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
}

.title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  color: #333;
}

label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  color: #555;
}

input {
  width: 100%;
  padding: 0.7rem;
  margin-bottom: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74,144,226,0.2);
}

button {
  width: 100%;
  padding: 0.9rem;
  background: #4a90e2;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #357ab8;
}
</style>
