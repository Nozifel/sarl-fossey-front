<script lang="ts" setup>
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
import DefaultBreadcrumb from "../../components/layout/DefaultBreadcrumb.vue";
import Row from "~/components/blocs/Row.vue";
</script>

<template>
  <div class="container mx-auto mb-20">
    <DefaultBreadcrumb />

    <h1>Realisations</h1>
  </div>

  <Row :columns="3" :isPrimary="false">
    <div class="col-span-2">
      <ImgComparisonSlider class="my-10 border">
        <!-- eslint-disable -->
        <img slot="first" src="/villa.webp" class="w-full" alt="" />
        <img slot="second" src="/villa.webp" class="w-full grayscale" alt="" />
        <!-- eslint-enable -->
      </ImgComparisonSlider>
    </div>
    <div class="text-white flex justify-center items-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore sit
      delectus deserunt, excepturi cupiditate omnis repellat amet repellendus
      id, cumque doloremque inventore consequatur a voluptate. Quod esse porro
      at?
    </div>
  </Row>

  <Row :columns="3">
    <div class="col-span-2">
      <div class="text-white flex justify-center items-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore sit
      delectus deserunt, excepturi cupiditate omnis repellat amet repellendus
      id, cumque doloremque inventore consequatur a voluptate. Quod esse porro
      at?
    </div>
      <ImgComparisonSlider class="my-10 border">
        <!-- eslint-disable -->
        <img slot="first" src="/villa.webp" class="w-full" alt="" />
        <img slot="second" src="/villa.webp" class="w-full grayscale" alt="" />
        <!-- eslint-enable -->
      </ImgComparisonSlider>
    </div>
    
  </Row>

  <Row :columns="3" :isPrimary="false">
    <div class="col-span-2">
      <div class="text-white flex justify-center items-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore sit
      delectus deserunt, excepturi cupiditate omnis repellat amet repellendus
      id, cumque doloremque inventore consequatur a voluptate. Quod esse porro
      at?
    </div>
      <ImgComparisonSlider class="my-10 border">
        <!-- eslint-disable -->
        <img slot="first" src="/villa.webp" class="w-full" alt="" />
        <img slot="second" src="/villa.webp" class="w-full grayscale" alt="" />
        <!-- eslint-enable -->
      </ImgComparisonSlider>
    </div>
    
  </Row>

  <Row :isPrimary="false"> </Row>
</template>
