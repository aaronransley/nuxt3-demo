<template>
  <h2>hello from nuxt3</h2>
  <div>
    <NuxtPage />
  </div>
  <nav>
    <NuxtLink :to="{ name: 'homepage' }">to homepage</NuxtLink><br />
    <NuxtLink :to="{ path: '/asfjkasfj' }">to wildcard</NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  margin: 2em;
}
</style>
