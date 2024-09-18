<template>
  <div class="note-list">
    <Note v-for="note in 10" :note="note" />
  </div>
</template>

<script src="./setup.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
