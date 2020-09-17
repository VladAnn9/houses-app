<template>
  <div class="list-container">
    <h2 class="text-center">Check Houses</h2>
    <v-btn outlined @click.stop="createNewHouseDialog = true"
      >Add new house</v-btn
    >

    <div class="list-container-header list-container-sections">
      <div>address</div>
      <div>owner</div>
      <div>price</div>
      <div></div>
    </div>
    <div class="list-container-body ">
      <div
        class="list-container-body-item list-container-sections"
        v-for="house in houses"
        :key="house._id"
        @click="goToHouse(house._id, $event)"
      >
        <div>{{ house.address }}</div>
        <div>{{ house.owner }}</div>
        <div>{{ house.price }}</div>
        <div>
          <v-btn @click="deleteHouse(house._id)" icon
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </div>
      </div>
    </div>
    <new-house :dialogProp.sync="createNewHouseDialog"></new-house>
    <confirm-dialog
      :dialog="confirmDialog"
      @close-dialog="dialogClosed"
    ></confirm-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import CreateNewHouse from '../components/CreateNewHouse.vue'
import ConfirmDialog from '../components/ConfirmDialog.vue'

@Component({
  components: {
    'new-house': CreateNewHouse,
    'confirm-dialog': ConfirmDialog
  }
})
export default class List extends Vue {
  createNewHouseDialog = false
  confirmDialog = false

  get houses() {
    return this.$store.state.houses
  }

  goToHouse(id: string, e) {
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'I') {
      this.$router.push({ name: 'House', params: { id } })
      this.$store.commit('setHouseId', id)
    }
  }

  dialogClosed(e: boolean) {
    this.confirmDialog = false
    if (e) {
      this.$store.dispatch('deleteHouse')
    }
  }

  deleteHouse(id: string) {
    this.confirmDialog = true
    this.$store.commit('setHouseId', id)
  }

  beforeMount() {
    this.$store.dispatch('getHouses')
  }
}
</script>

<style scoped lang="scss">
@import '@/style/_variable.scss';
.list-container {
  padding: $space * 2;
  h2 {
    text-align: center;
    margin-bottom: $space;
  }

  &-header {
    font-weight: 600;
    margin-top: $space * 2;

    > div {
      text-transform: uppercase;
      background: linear-gradient(to right, $secondColor 0%, $fontColor 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &-body {
    &-item {
      display: flex;
      border-radius: 3px;
      background: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);

      background-position: 0 100%;
      background-repeat: no-repeat;
      background-size: 100% 1px;
      transition: background-size 0.2s ease-in-out;
      line-height: 2.5;
      cursor: pointer;

      &:hover {
        background-size: 100% 100%;
      }

      // > *:last-child {
      //   width: 80%;
      //   display: flex;
      //   justify-content: flex-end;
      //   > *:last-child {
      //    margin-left: $space * 4;
      //   }
      // }
    }
  }

  &-sections {
    display: flex;
    justify-content: space-between;

    > div:nth-child(1) {
      flex: 0 1 40%;
    }
    > div:nth-child(2) {
      flex: 0 1 40%;
    }
    > div:nth-child(3) {
      flex: 0 1 40%;
    }
    > div:nth-child(4) {
      flex: 0 1 5%;
    }

    > div {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
