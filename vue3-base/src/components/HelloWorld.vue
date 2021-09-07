<template>
<img alt="Vue logo" src="../assets/logo.png" />
  <h1>{{ msg }}</h1>
  <button @click="onCountClick">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { ref, toRefs, computed } from "vue";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props, context) {
    let count = ref(0);
    let counter = computed(() => {
      return count;
    })
    const onCountClick = function() {
      console.log("onCountClick ====")
      count.value++;
    }
    return {
      count,
      onCountClick
    }
  }
}
</script>
