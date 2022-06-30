const fs = require('fs')
const imgPath = './samurai.jpg'
let imgInfo = fs.statSync(imgPath)
let fileSize = imgInfo.size
let fileSizeMB = imgInfo.size / (1024 * 1024)
console.log('File size in kb:' + fileSize)
console.log('File size in mb:' + fileSizeMB)


//copy file
const copy = './resources/samurai.jpg'
fs.copyFile(imgPath, copy, (error) => {
  if (error) {
    throw error
  } else {
    console.log('File has been moved to another folder.')
  }
})



