<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="card-body p-3">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 1rem;
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
  }

  .card-body {
    flex: 1 1 auto;
  }
</style>
