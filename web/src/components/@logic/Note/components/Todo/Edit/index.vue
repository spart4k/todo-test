<template>
  <li class="d-flex">
    <input
      @keydown.tab="$emit('nextTodo', $event)"
      class="field field-text"
      placeholder="Текст"
      type="text"
      v-model="proxyValue"
    />
  </li>
</template>

<script src="./setup.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
