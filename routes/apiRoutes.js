const db = require('../models')

module.exports=function(app){
    app.get('/api/faqs', function(req, res){
        db.Faq.find({}).then(data=>res.json(data)).catch(err=>console.log(err))
    })
}