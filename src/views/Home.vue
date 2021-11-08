<template>
  <div class="home">
    <ComingSoon />
  </div>
</template>

<script>
// @ is an alias to /src
import ComingSoon from '@/components/comingSoon.vue'

export default {
  name: 'Home',
  components: {
    ComingSoon
  }
}
</script>
