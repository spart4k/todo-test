<template>
  <div @click="$emit('click')" class="note--short">
    <div class="d-flex mr-10 mb-10 align-start">
      <UI-Color-Picker class="mt-3 mr-10" readonly v-model="note.color" />
      <h3 class="note-title title-h3">{{ note.title }}</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="note-remove"
        @click.stop="removeNote"
      >
        <path
          fill="currentColor"
          d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"
        />
      </svg>
    </div>
    <ul class="note-todos">
      <Todo v-for="todo in note.todos.slice(0, 3)" :todo="todo" />
    </ul>
  </div>
</template>

<script src="./setup.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
