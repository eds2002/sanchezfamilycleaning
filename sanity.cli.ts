/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */

// @ts-nocheck

import path from 'path'
import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({
  api: { projectId, dataset },
  vite: (config) => {
    if (!config.resolve) config.resolve = {}
    if (!config.resolve.alias) config.resolve.alias = {}

    config.resolve.alias['@'] = path.resolve(__dirname, '.')

    return config
  },
})
