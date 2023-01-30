<template>
  <MyButton>Demo Basic</MyButton>
</template>

<script lang="ts">
// import { MyButton } from 'test-ui';
import MyButton from '../component.vue';

// 目前vue-live导出defineComponent存在问题，所以仅支持普通对象导出。
export default {
  name: 'BasicDemo',
  components: {
    MyButton,
  },
};
</script>
