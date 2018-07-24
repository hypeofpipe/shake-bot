"use strict"

import * as request from "request"
import * as path from "path"
import * as fs from "fs"
import { Restaurant } from "../types/restaurant"
import { Geolocation } from "../types/geolocation"
import { buildURL } from "../helpers/functions"

const config = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../../shake_reader/config", "config.json"),
    "utf8"
  )
)

const restaurant: Restaurant = new Restaurant(
  config.restaurant.name,
  config.restaurant.url,
  config.restaurant.minimal_quote
)

const geolocation: Geolocation = new Geolocation(
  config.geolocation.city,
  config.geolocation.street,
  config.geolocation.street_number
)

// request(buildURL(config.webstore, restaurant.url), (error, response, body) => {
//   try {
//     console.log(body.slice(body.search("Shake"), body.search("Shake") + 20))
//   } catch (err) {
//     throw err
//   }
// })
//TO-DO: Parse list of shakes
