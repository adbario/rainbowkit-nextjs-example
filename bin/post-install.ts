import { access, copyFile } from 'node:fs/promises'
import path from 'node:path'
import log from './log'

const root = path.resolve(__dirname, '../')

async function copyEnv() {
  log.info('Copying .env.example to .env.local...')

  try {
    await access(`${root}/.env.local`)

    log.warning('Skipping as .env.local already exists...')
  } catch (error) {
    await copyFile(`${root}/.env.example`, `${root}/.env.local`)

    log.info('...done')
  }
}

async function postInstall() {
  // Skip on CI/VERCEL
  if (process.env.CI || process.env.VERCEL) return

  await copyEnv()
}

postInstall()
