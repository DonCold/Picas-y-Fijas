import dotenv from 'dotenv'
import RPC from 'discord-rpc'

import { DETAILS_LIST } from './listActivities.js'

dotenv.config()
const client = new RPC.Client({ transport: 'ipc' })

const MINUTES = 50.5
const ACTIVE_END = false
const HOME_WORK = [0, 0]
const DETAILS = DETAILS_LIST.extra
const DEFAULT_STATUS = '🐺 Guardando Datos'

const STATE = HOME_WORK[1] === 0 ? DEFAULT_STATUS
: `Tareas Realizadas: ${HOME_WORK[0] === 0 ? `(0 de ${HOME_WORK[1]})` : ''}`

const assets = {
  large_image: DETAILS.image,
  large_text: DETAILS.description,
  small_image: 'awesome',
  small_text: 'LuisFOsG',
}

const buttons = [
  {
    label: 'Visita mi GitHub',
    url: "https://github.com/LuisFOsG"
  },
  {
    label: 'Video Recomendado',
    url: "https://youtu.be/XlgqZeeoOtI"
  }
]

const timestamps = ACTIVE_END
  ? {
      start: Date.now(),
      end: Date.now() + MINUTES * 60 * 1000
    }
  : {
    start: Date.now()
  }

const party = HOME_WORK.includes(0)
  ? {}
  : {
    id: 'LuisFOsG',
    size: HOME_WORK,
  }

const ACTIVITY = {
  state: STATE,
  details: DETAILS.name,
  assets,
  party,
  /* secrets: {
    join: 'MTI4NzM0OjFpMmhuZToxMjMxMjM=',
  }, */
  buttons,
  timestamps,
  instance: true
}

client.on('ready', () => {
  client.request('SET_ACTIVITY', {
    pid: process.pid,
    activity: ACTIVITY
  })

  console.log('============= Ready :D =============')
  console.log('Authed for user: ', client.user.username);
})

client.on('error', () => {
  console.log('Error :(')
})

client.login({
  clientId: process.env.CLIENT_ID,
})
