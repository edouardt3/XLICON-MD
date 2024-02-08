const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "237697258114"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'edouardticky6@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'CAMEROUN 
global.gurl = 'https://instagram.com/TEF/' // add your username
global.sudo = process.env.SUDO || '237697258114' 
global.devs = '237697258114';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+237697258114
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU4zUTJGUEFuSTQwUVkyMktpZFRETXlTWHhYeE5PRVM3V3dRZTVDQU1Haz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSENCN05BM01yUVAxdDlrYlVUMmJiUHUzZlE3NzlJYWtJV1oyVU81SmppST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SE85MmsyeWlReXlxMkR4SU42ZXRQWXVRcit6K3MxTXJpeXMyQmM2WW1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuc2w2SDlSd2ErQjBaM3RBc2V0Y2YrUk1PSW95czRIWWRuTHNIM3J3RWlRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDTUZLRDFneXRHOE5UQTZRV1ppSklwSmtqQXpMTVRjdXlZQ0lTblFVRXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpWL0JJQXUyRTk5NjdlK0cxREpIV0grT0x1cUNRV0xuYnh1d2tmbjk1MW89In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzdlYzTjUzVWVHY0l1SFV0UmwzZlN1OXhIb3M2dWNPQ3NpdjB2MTlWRlJONUtKMW8rN2dXZlFsZXpKaEtrYmpOemxCTG4wNDJ3elZ3Vm5LVFMydTJoZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI2LCJhZHZTZWNyZXRLZXkiOiJaZlpiTEVnZjlZOU5wbE1YOWlkK3gybjRWeGFlU2NINFZPQjE5MnRScndjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqbnowMzNoZlNlcVpLeTBOYU1zYUFBIiwicGhvbmVJZCI6IjllYmFjNWIxLTU3ZWYtNDkxYi05NjZmLTNkMDQ1MGNiYTU1MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4eTUzZzJMNGs3Y0tTRmxrL1FEdU8rSE5zaVE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQwcExuM0srbFpXZ2tlMTVoYlljaThxeVVJRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ082UmdlSUdFTy9LazY0R0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRxWDhWQTFDYXgwcFJ0amFuUy9Ea21Dc2U4bGJtKzZ2UkxaeTlIdmsza0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVGbDRJbzZGdDB1eVRuY2pPMGZUamRWY1JYQ2czVFBTTlczaG5CelAxSVF3UHhRMlVtSUt6WWZmOTRyOGV0emRlY0NiTnJFZTAzMlN2S25jQkM0Y0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1S3RBNlUweThxdW1TaDUwTU1QakFUSWI5UHdGS0pUTTZnTkNxcXB2ZUVScE5UU1p2aHkxbnRnZ2d1ajBSS0Z6OFRGcDh0Y01aUjdWR1RDaDJOVFloQT09In0sIm1lIjp7ImlkIjoiMjM3Njk3MjU4MTE0OjlAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njk3MjU4MTE0OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUTZsL0ZRTlFtc2RLVWJZMnAwdnc1SmdySHZKVzV2dXIwUzJjdlI3NU41QSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNzQwMjYxMH0= ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Tef',
  packname:  process.env.PACK_NAME || 'Tef',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Tef' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
