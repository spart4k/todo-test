<template>
  <form class="note note--default">
    <h3 class="note-title title-h2 mb-10 d-flex">
      <Color-Picker class="mr-10" v-model="formData.color" />
      <input
        class="field field-text"
        type="text"
        placeholder="Заголовок"
        v-model="formData.title"
      />
    </h3>
    <ul class="note-todos pl-10">
      <Todo
        ref="todos"
        @nextTodo="nextTodo(index, $event, todo)"
        v-for="(todo, index) in formData.todos"
        :key="todo.id"
        :todo="todo"
        v-model="todo.text"
      />
    </ul>
  </form>
</template>

<script src="./setup.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
