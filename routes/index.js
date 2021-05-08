var express = require ('express')
var router = express.Router();
const methodOverride = require('method-override');
router.use(methodOverride('_method'));


var controller  = require ('../controllers/indexController')


router.get ('/', controller.index )

router.post ('/', controller.store)
console.log('llegue al routes');



module.exports = router
