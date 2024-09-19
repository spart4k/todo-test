<template>
  <div v-show="isShow" class="alert-wrap">
    <div class="alert">
      <p>{{ text }}</p>
      <div class="d-flex mt-10 justify-center">
        <UI-Btn-Default
          @click="closeAlert"
          class="alert-reject mr-10"
          type="error"
          >Отменить</UI-Btn-Default
        >
        <UI-Btn-Default @click="success" class="alert-confirm" type="success"
          >Подтвердить</UI-Btn-Default
        >
      </div>
    </div>
  </div>
</template>

<script src="./setup.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
