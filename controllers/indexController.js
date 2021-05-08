const {validationResult} = require('express-validator')

module.exports = {

index: function (req,res){
 
    console.log('entro al home del produt controller y redirijo')

        res.render('index')},


store: function (req,res) {


    console.log('SOY POST!')

        res.redirect('prueba')

}


}