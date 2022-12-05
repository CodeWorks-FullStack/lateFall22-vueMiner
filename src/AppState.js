import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  vuePoints: 1000,
  upgrades: [
    {
      id: 1,
      price: 100,
      type: 'click',
      name: 'vue Docs',
      multiplier: 1,
      quantity: 0
    },
    {
      id: 2,
      price: 200,
      type: 'click',
      name: 'vue Videos',
      multiplier: 5,
      quantity: 0
    },
    {
      id: 3,
      price: 500,
      type: 'auto',
      name: 'Vite Compiler',
      multiplier: 5,
      quantity: 0
    },
    {
      id: 4,
      price: 10000,
      type: 'auto',
      name: 'Evan You',
      multiplier: 1000,
      quantity: 0
    },
  ]
})
