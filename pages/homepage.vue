<template>
  <main>
    <div>
      <strong>homepage</strong><br />
      {{ new Date().toLocaleString() }}
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {},
})
</script>
