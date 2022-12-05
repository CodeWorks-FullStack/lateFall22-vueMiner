import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"

let _interval = null

class PointsService {
  mineVuePoints() {
    AppState.vuePoints++
    let clicks = AppState.upgrades.filter(u => u.type == 'click')
    clicks.forEach(c => AppState.vuePoints += c.multiplier * c.quantity)
  }

  buyUpgrade(id) {
    let upgrade = AppState.upgrades.find(u => u.id == id)
    if (upgrade.price <= AppState.vuePoints) {
      AppState.vuePoints -= upgrade.price
      upgrade.quantity++
      upgrade.price *= 1.5
    }
  }

  startPointInterval() {
    // the if and private interval keep it from being started multiple times
    logger.log('starting interval')
    if (!_interval) {
      _interval = setInterval(() => {
        let autos = AppState.upgrades.filter(u => u.type == 'auto')
        autos.forEach(a => {
          AppState.vuePoints += a.multiplier * a.quantity
        })
      }, 3000)
    } else {
      logger.log('interval already started')
    }
  }
}

export const pointsService = new PointsService()
