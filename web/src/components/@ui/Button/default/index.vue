<template>
  <button
    @click="$emit('click')"
    :class="[`button--${color}`, `button--${type}`]"
    class="button button--default"
  >
    <slot />
  </button>
</template>

<script src="./setup.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
