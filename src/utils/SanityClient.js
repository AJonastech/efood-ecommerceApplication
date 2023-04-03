import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: '1mym7gm0',
    dataset: 'production',
    token: 'skEflCSFJmHbOkUHhmd8PZHkkx4NGjioOQmy9LQmWVj3ijnEZFNQ6FWupTJIRthUw48zqVXigLAxXeQALfkh6IesbwQBaPlBDCxGPq8eAOR6sfgyWlDw73cfqjzvimxrQieEqPeCAi31x3uwBT7WvSJpMIfs2afOBroZEvdQS6Bq0N0dTceI',
    useCdn: true, // set to `true` to fetch from edge cache
    apiVersion: "2023-04-03", // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })