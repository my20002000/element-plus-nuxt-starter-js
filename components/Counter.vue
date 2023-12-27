<script setup >
const {count}=useStore('user');
const a=isLogin();
</script>

<template>
  <div>
    {{ a }}
  <el-input-number v-model="count" :min="1" :max="10" />
  </div>

</template>
