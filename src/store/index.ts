import Vue from 'vue'
import Vuex from 'vuex'

import axios, { AxiosResponse } from 'axios'

Vue.use(Vuex)

import { House } from '../models/house.model'

const apiUrl = 'http://mr-test-backend.sadek.usermd.net'

function getHouses(): Promise<AxiosResponse<{}>> {
  return axios.get<{}>(`${apiUrl}/houses`)
}

function getHouse(id: string): Promise<AxiosResponse<{}>> {
  return axios.get<{}>(`${apiUrl}/houses/${id}`)
}

function postHouse(house: House): Promise<AxiosResponse> {
  return axios.post(`${apiUrl}/houses`, house)
}

function deleteHouse(id: string): Promise<AxiosResponse> {
  return axios.delete(`${apiUrl}/houses/${id}`)
}

export default new Vuex.Store({
  state: {
    houses: [],
    selectedHouseId: '',
    selectedHouse: {}
  },
  mutations: {
    setHouses(state, payload) {
      Vue.set(state, 'houses', payload.houses)
    },
    setHouse(state, payload: {}) {
      Vue.set(state, 'selectedHouse', payload)
    },
    setHouseId(state, payload: string) {
      Vue.set(state, 'selectedHouseId', payload)
    }
  },
  actions: {
    getHouses({ commit }) {
      getHouses()
        .then(r => {
          commit('setHouses', r.data)
        })
        .catch(e => console.log(e))
    },

    getHouse({ commit, state }, id?: string) {
      getHouse(id || state.selectedHouseId)
        .then(r => {
          commit('setHouse', r.data)
          commit('setHouseId', (r.data as any)._id)
        })
        .catch(e => console.log(e))
    },

    postHouse({ dispatch }, payload: House) {
      postHouse(payload)
        .then(r => {
          dispatch('getHouses')
        })
        .catch(e => {
          console.log(e)
        })
    },

    deleteHouse({ dispatch, state }) {
      deleteHouse(state.selectedHouseId)
        .then(r => {
          dispatch('getHouses')
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  modules: {}
})
