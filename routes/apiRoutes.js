const db = require('../models')

module.exports=function(app){
    app.get('/api/faqs', function(req, res){
        db.Faq.find({}).then(data=>res.json(data)).catch(err=>console.log(err))
    })
    app.post('/api/newfaqs',function(req,res){
        db.Faq.create(req.body)
        .then((data)=>res.send(data)).catch(err=>console.log(err))
    })
    app.delete('/api/deletefaq/:id',function(req,res){
        db.Faq.findOneAndDelete({_id: req.params.id }).then((data)=>res.send(data)).catch(err=>console.log(err))
    })
    app.put('/api/updatefaq/:id',function(req,res){
        console.log(req.body)
        db.Faq.updateOne({_id: req.params.id }, {$set: {question: req.body.question, answer: req.body.answer}}).then((data)=>res.send(data)).catch(err=>console.log(err))
    })
}