<script setup lang="ts">
  import { CardProps } from '@/core-ui/card/card.type'
  import AssetCard from '@/core-ui/card/AssetCard.vue'
  import Card from '@/core-ui/card/Card.vue'
  import image from '@/assets/img/curved-images/white-curved.jpeg'
</script>

<template>
  <div class="mx-3">
    <div
      class="docs-card card-background shadow-none card-background-mask-secondary"
    >
      <div
        :style="{ 'background-image': `url(${image})` }"
        class="full-background"
      ></div>

      <div class="text-start p-3 w-full h-full flex-1 docs-card-body">
        <div class="docs-info">
          <h6 class="text-white up mb-0">Need help?</h6>
          <p class="text-xs font-bold">CoinCap Api 2.0</p>
          <a
            href="https://komgrip.co.th/coincap"
            target="_blank"
            class="btn btn-white btn-sm w-full mb-0 mt-4"
            >Documentation</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .docs-card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 1rem;
  }
  .docs-card.card-background {
    align-items: center;
  }
  .full-background {
    background-position: 50%;
    background-size: cover;
    margin-bottom: 30px;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 1rem;
    left: 0;
  }

  .docs-card.card-background.card-background-mask-secondary:after {
    background-image: linear-gradient(310deg, #627594 0%, #a8b8d8 100%);
    opacity: 0.85;
  }

  .docs-card.card-background:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    display: block;
    content: '';
    background: rgba(0, 0, 0, 0.4);
    border-radius: 1rem;
    opacity: 0.65;
  }

  .docs-card.card-background .docs-card-body {
    color: #fff;
    position: relative;
    z-index: 2;
  }
</style>
