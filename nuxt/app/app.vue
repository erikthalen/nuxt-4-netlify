<script lang="ts" setup>
const { data: serverData } = await useFetch('/api/foobar')

const query = groq`*[_type == "frontpage"][0]`

const { data, refresh } = useSanityQuery(query)

console.log(data)
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <pre><code>{{ data }}</code></pre>
    <NuxtWelcome />
  </div>
</template>
