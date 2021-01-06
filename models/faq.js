const mongoose=require("mongoose")
const Schema = mongoose.Schema;

const faqSchema = new mongoose.Schema({
    faqId: {type: String, required: true},
    question: String,
    answer: String
})

const Faq=mongoose.model('Faq', faqSchema)

module.exports = Faq;