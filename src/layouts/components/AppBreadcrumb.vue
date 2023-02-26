<script setup></script>

<template>
  <div>
    <ol class="breadcrumb mb-1">
      <li class="breadcrumb-item text-sm">
        <a class="text-dark opacity-[0.3]" href="javascript:;">Pages</a>
      </li>
      <li class="breadcrumb-item text-sm text-dark active" aria-current="page">
        Dashboard
      </li>
    </ol>
  </div>
</template>

<style scoped>
  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  .breadcrumb-item + .breadcrumb-item {
    padding-left: 0.5rem;
  }

  .breadcrumb-item + .breadcrumb-item::before {
    float: left;
    padding-right: 0.5rem;
    color: #6c757d;
    content: var(--bs-breadcrumb-divider, '/');
  }

  .breadcrumb-item.active {
    color: #6c757d;
  }
</style>
