<template>
  <div class="note--short">
    <h3 class="note-title title-h3">Today</h3>
    <ul class="note-todos">
      <Todo v-for="todo in 5" :todo="todo" />
    </ul>
  </div>
</template>

<script src="./setup.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
