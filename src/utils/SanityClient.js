import {createClient} from '@sanity/client'
var date = new Date();
let  year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
month = month<10 ? "0"+month: month
let compiledDate= `${year}-${month}-${day}`
export const client = createClient({
    projectId: '1mym7gm0',
    dataset: 'production',
    token: 'skEflCSFJmHbOkUHhmd8PZHkkx4NGjioOQmy9LQmWVj3ijnEZFNQ6FWupTJIRthUw48zqVXigLAxXeQALfkh6IesbwQBaPlBDCxGPq8eAOR6sfgyWlDw73cfqjzvimxrQieEqPeCAi31x3uwBT7WvSJpMIfs2afOBroZEvdQS6Bq0N0dTceI',
    useCdn: true, // set to `true` to fetch from edge cache
    apiVersion: compiledDate, // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })