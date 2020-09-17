<template>
  <div class="house">
    <h2>House</h2>

    <v-card elevation="6" max-width="900">
      <v-card-title class="headline"
        >Your house
        <v-spacer></v-spacer>
        <v-btn @click="confirmDialog = true" outlined>Delete</v-btn>
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item two-line v-for="(value, name) in house" :key="name">
            <v-list-item-content>
              <v-list-item-title>{{ name }}:</v-list-item-title>
              <v-list-item-subtitle>{{ value }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <confirm-dialog
      :dialog="confirmDialog"
      @close-dialog="dialogClosed"
    ></confirm-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import ConfirmDialog from '../components/ConfirmDialog.vue'

@Component({ components: { 'confirm-dialog': ConfirmDialog } })
export default class House extends Vue {
  confirmDialog = false
  get house() {
    return this.$store.state.selectedHouse
  }

  dialogClosed(e: boolean) {
    this.confirmDialog = false
    if (e) {
      this.$store.dispatch('deleteHouse')
      this.$router.push('/list')
    }
  }

  beforeMount() {
    const id = this.$route.params.id
    this.$store.dispatch('getHouse', id)
  }
}
</script>

<style lang="scss">
@import '@/style/_variable.scss';
.house {
  padding: $space * 2;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: $space * 2;
  }
}
</style>
