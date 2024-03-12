<template>
  <h1>
    Awww heyyyy!
  </h1>

  <p>
    This is the data from the server: {{ serverData?.value }}

    Thank you <a href="https://dev.to/ghacosta/til-setting-up-proxy-server-on-vite-2cng">Guille Acosta</a>!
  </p>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      serverData: null
    }
  },
  async mounted() {
    this.serverData = (await axios.get('/api/the-data')).data

    console.log(this.serverData)
  }
}


</script>