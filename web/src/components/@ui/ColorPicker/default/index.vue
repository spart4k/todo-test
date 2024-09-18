<template>
  <label class="color-picker">
    <input
      :disabled="readonly"
      v-model="proxyValue"
      style="display: none"
      type="color"
    />
    <div :style="{ backgroundColor: proxyValue }" class="thumb"></div>
  </label>
</template>

<script src="./setup.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
