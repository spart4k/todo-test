<template>
  <div class="note-list">
    <Note
      @click="openNote(note)"
      v-for="note in mockData"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

<script src="./setup.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
