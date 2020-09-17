<template>
  <div>
    <v-dialog :value="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title class="headline">Create new House</v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="house.address"
                  label="Adress"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="house.owner"
                  label="Owner"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="house.price"
                  label="Price"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="house.area"
                  type="number"
                  label="Area"
                  required
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn outlined @click="dialog = false">
            Cancel
          </v-btn>

          <v-btn color="green darken-1" outlined @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from 'vue-property-decorator'

import { House } from '../models/house.model'

@Component
export default class CreateNewHouse extends Vue {
  @PropSync('dialogProp', { type: Boolean }) dialog!: boolean

  house: House = {
    address: '',
    owner: '',
    price: '',
    area: 0
  }

  save() {
    this.$store.dispatch('postHouse', this.house)
    this.house = { address: '', owner: '', price: '', area: 0 }
    this.dialog = false
  }
}
</script>

<style scoped></style>
