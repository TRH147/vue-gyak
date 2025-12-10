import { defineStore } from 'pinia'
import axios from 'axios'

export const useMotorcyclesStore = defineStore('motorcycles', {
  state: () => ({
    motorcycles: []
  }),

  actions: {
    async fetchMotorcycles() {
      const response = await axios.get('http://localhost:3000/motorcycles')
      this.motorcycles = response.data
    }
  }
})
