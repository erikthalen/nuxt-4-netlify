<script lang="ts" setup>
const { data } = await useFetch('/api/foobar')

console.log(data)
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1>{{ data }}</h1>
    <NuxtWelcome />
  </div>
</template>
