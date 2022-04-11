import * as DELIMITS from './delimits'

export const DELIMITS_ARRAY = []

for (const i of Object.entries(DELIMITS)) {
  DELIMITS_ARRAY.push(i[1])
}

export const UNIPAZ_LOCATIONS = {
  type: 'FeatureCollection',
  features: [
    ...DELIMITS_ARRAY
  ]
}
