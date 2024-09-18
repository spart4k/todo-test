<template>
  <div @click="$emit('click')" class="note--short">
    <div class="d-flex mr-10 align-center">
      <Color-Picker class="mr-5" readonly v-model="note.color" />
      <h3 class="note-title title-h3">{{ note.title }}</h3>
    </div>
    <ul class="note-todos">
      <Todo v-for="todo in note.todos" :todo="todo" />
    </ul>
  </div>
</template>

<script src="./setup.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
