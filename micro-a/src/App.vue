<template>
  <div id="ma-app">
    I'm MicroA, and I use vue-router
    <br/>
    <button @click="$router.back()">Go Back!</button>
    <div id="nav">
      <router-link to="/micro-a">Home</router-link> |
      <router-link to="/micro-a/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#ma-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
