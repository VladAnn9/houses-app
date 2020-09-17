<template>
  <div>
    <v-dialog :value="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title class="headline"> Delete selected house?</v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn outlined @click="$emit('close-dialog', false)">
            No
          </v-btn>

          <v-btn
            color="green darken-1"
            outlined
            @click="$emit('close-dialog', true)"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ConfirmDialog extends Vue {
  @Prop({ default: false }) readonly dialog: boolean = false
}
</script>

<style scoped></style>
