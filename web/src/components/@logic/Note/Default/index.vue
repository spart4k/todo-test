<template>
  <form class="note note--default">
    <h3 class="note-title title-h2 mb-10 d-flex">
      <UI-Color-Picker class="mr-10" v-model="formData.color" />
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
        v-for="(todo, index) in formData.todos.filter((el) => !el.completed)"
        :key="todo.id"
        :todo="todo"
        :canRemove="true"
        @input="changeTodo(todo, index)"
        @removeTodo="removeTodo(index)"
      />
      <p
        class="title-h3 mb-5"
        v-if="formData.todos.filter((el) => el.completed).length"
      >
        Выполнено
      </p>
      <Todo
        ref="todos"
        @nextTodo="nextTodo(index, $event, todo)"
        v-for="(todo, index) in formData.todos.filter((el) => el.completed)"
        :key="todo.id"
        :todo="todo"
        @input="changeTodo(todo, index)"
      />
    </ul>
  </form>
</template>

<script src="./setup.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
