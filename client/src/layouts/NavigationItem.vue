<template>
  <q-item
    clickable
    @click="onClick"
  >
    <q-item-section avatar>
      <q-icon
        color="primary"
        :name="icon"
      />
    </q-item-section>
    <q-item-section>
      {{label}}
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: ['icon', 'label', 'to'],
  methods: {
    onClick () {
      if (this.to) {
        this.$router.push(this.to)
      }
    }
  }
}
</script>
