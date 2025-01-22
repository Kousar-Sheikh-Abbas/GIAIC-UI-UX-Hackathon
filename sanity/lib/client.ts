import { createClient } from '@sanity/client';

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "process.env.z0kuquo4",
  dataset: "process.env.production",
  apiVersion: '2023-01-01',
  token: "skSICJTacHDUaKZdvsaPlFuU8Lv7imzJW611NkUx2Hunxfen8rLDz4Hpm3dzPE1bf5qRUl4Ndm2wBXa5Te2fHy8DYBqwtHly2PGecaE5RE4Cy7flyww5hbKGohCQ8oP6dNE8fV43rbIaXBOnKCZfq8c0BJFabOdojxwu2mK9C7h0GXExX0UX",
  useCdn: false// Set to false if statically generating pages, using ISR or tag-based revalidation
})
