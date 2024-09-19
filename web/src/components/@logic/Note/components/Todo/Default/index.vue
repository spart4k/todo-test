<template>
  <li class="d-flex todo">
    <input :value="todo.completed" class="mr-5" type="checkbox" />
    <input
      class="field field-text"
      placeholder="Текст"
      type="text"
      :value="todo.text"
    />
  </li>
</template>

<script src="./setup.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
