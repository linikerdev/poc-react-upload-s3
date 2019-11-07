import AWS from 'aws-sdk'

const aws = new AWS.Config({
  accessKeyId: 'AKID',
  secretAccessKey: 'SECRET',
  region: 'us-west-2'
})

export default aws
