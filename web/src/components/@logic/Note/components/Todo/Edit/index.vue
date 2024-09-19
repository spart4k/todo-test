<template>
  <li class="d-flex todo">
    <input class="mr-5" v-model="proxyValue.completed" type="checkbox" />
    <input
      @keydown.tab="$emit('nextTodo', $event)"
      class="field field-text"
      placeholder="Текст"
      type="text"
      v-model="proxyValue.text"
    />
  </li>
</template>

<script src="./setup.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
