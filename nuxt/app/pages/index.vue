<script lang="ts" setup>
const { data: serverData } = await useFetch('/api/foobar')

const { data, refresh } = useSanityQuery(FRONTPAGE_QUERY)

console.log(data)
</script>

<template>
  <div class="bg-amber-200">
    <pre><code>{{ data }}</code></pre>
    <NuxtWelcome />
  </div>
</template>
