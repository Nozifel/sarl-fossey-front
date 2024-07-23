<script lang="ts" setup>
import DefaultBreadcrumb from "../../components/layout/DefaultBreadcrumb.vue";

const contact = ref<any>({
  name: null,
  phone: null,
  subject: null,
  message: null,
});

const subjects = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
</script>

<template>
  <div class="container mx-auto">
    <DefaultBreadcrumb class="mb-10" />

    <h1>Nous contacter</h1>

    <div class="flex flex-wrap">
      <div class="w-full md:w-2/5">
        <div class="flex flex-wrap mt-10">
          <div class="basis-full mb-5">
            <label for="name" class="block mb-2">Prénom & Nom</label>
            <InputText id="name" class="w-full" v-model="contact.name" />
          </div>

          <div class="basis-full mb-5">
            <label for="phone" class="block mb-2">Téléphone</label>
            <InputMask
              id="phone"
              class="w-full"
              v-model="contact.phone"
              mask="99-99-99-99-99"
              placeholder="02-35-00-00-00"
            />
          </div>

          <div class="basis-full mb-5">
            <label for="subject" class="block mb-2">Sujet</label>
            <Select
              v-model="contact.subject"
              :options="subjects"
              optionLabel="name"
              placeholder="Sélectionnez le but de votre demande"
              class="w-full"
            />
          </div>

          <div class="basis-full mb-5">
            <label for="message" class="block mb-2">Message</label>
            <Textarea
              v-model="contact.message"
              autoResize
              rows="5"
              class="w-full"
            />
          </div>
        </div>

        <Button label="Envoyer" class="w-full mt-5 mb-10" />
      </div>

      <div class="w-full md:w-3/5 pl-20">
        <h2>Coordonnées</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </div>
    </div>
  </div>
</template>
