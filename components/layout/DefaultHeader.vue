<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  {
    label: "Notre expertise",
    root: true,
    icon: "mdi mdi-certificate",
    items: [
      [
        {
          items: [
            {
              label: "Electricité",
              icon: "mdi mdi-power-plug-outline",
              link: "/expertises/#electricite",
            },
          ],
        },
      ],
      [
        {
          items: [
            {
              label: "Maçonnerie",
              icon: "mdi mdi-wheel-barrow",
              link: "/expertises/#maconnerie",
            },
          ],
        },
      ],
      [
        {
          items: [
            {
              label: "Placo",
              icon: "mdi mdi-box-cutter",
              link: "/expertises/#placo",
            },
          ],
        },
      ],
    ],
  },
  {
    label: "Réalisations",
    root: true,
    icon: "mdi mdi-excavator",
    items: [
      [
        {
          items: [
            {
              label: "Chauffage au sol",
              icon: "mdi mdi-heating-coil",
              link: "/realisations/?category=chauffage",
            },
          ],
        },
      ],
      [
        {
          items: [
            {
              label: "Maisons",
              icon: "mdi mdi-home-modern",
              link: "/realisations/?category=maison",
            },
          ],
        },
      ],
    ],
  },
  {
    label: "L'équipe",
    root: true,
    icon: "mdi mdi-badge-account",
    link: "/l-equipe",
  },
  {
    label: "Contact",
    root: true,
    icon: "mdi mdi-email-arrow-right-outline",
    link: "/contact/nous-contacter",
  },
]);
</script>

<template>
  <MegaMenu :model="items" class="border-none">
    <template #start>
      <img src="/logo.png" alt="logo" class="w-56 p-4" />
    </template>
    <template #item="{ item }">
      <a
        v-if="item.root"
        v-ripple
        class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative text-lg"
        style="border-radius: 2rem"
        @click="() => item.link ? navigateTo(item.link) : null"
      >
        <span :class="item.icon" class="text-3xl text-primary" />
        <span class="ml-2">{{ item.label }}</span>
    </a>
      <a
        v-else-if="!item.image"
        class="flex items-center p-4 cursor-pointer mb-2 gap-3"
        @click="() => item.link ? navigateTo(item.link) : null"
      >
        <span
          class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12"
        >
          <i :class="[item.icon, 'text-2xl']"></i>
        </span>
        <span class="inline-flex flex-col gap-1">
          <span class="font-bold text-lg">{{ item.label }}</span>
          <span class="whitespace-nowrap">{{ item.subtext }}</span>
        </span>
      </a>
    </template>
    <template #end>
      <Button
        label="Demander un devis"
        class="px-10"
        rounded
        severity="primary"
        @click="() => navigateTo('/contact/devis')"
      />
    </template>
  </MegaMenu>
</template>
