const express = require('express')
const router = express.Router()


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  // console.log('Time: ', Date.now())
  next()
})

router.get('/', async function(req, res) {




  await res.status(200).send('hello6001!')
})


module.exports = router
