const mongoose=require('mongoose');
const db=require('../models')
require('dotenv').config()

mongoose.connect(
    "mongodb+srv://kendayao:"+process.env.DB_PASS+"@practice.zj8pj.mongodb.net/practice?retryWrites=true&w=majority"
)

const faqSeed=[
    {
        faqId: 1,
        question: 'What is Swifts?',
        answer: 'Here at Swifts we like things comfortable! Who doesn’t? The founder of comfortable has a simple fashion style. One day while browsing around different shoe stores looking for a pair of casual walking shoes, he noticed that there wasn’t a huge selection of simple styled shoes. Most of the shoes he saw were flashy with over the top bright colors. The shoes that he saw that matched his style were from popular brands,  very expensive, and not very comfortable. This is when Swifts was born!'
        },
        {
        faqId: 2,
        question: 'Where are the items being shipped from?',
        answer: 'Our warehouses are located in the United States and China. Where orders are shipped from is dependent on the items ordered and the supply.'
        },
        {
        faqId: 3,
        question: 'Can I cancel my order?',
        answer: 'In order to provide a smooth shopping experience for our customers, our systems are fully automated so orders cannot be cancelled after they have been placed.'
        },
        {
        faqId: 4,
        question: 'How much do you charge for shipping?',
        answer: 'Shipping is free with all orders'
        },
        {
        faqId: 5,
        question: 'How long will it take me to receive my order?',
        answer: ' All orders are sent to the warehouse for dispatch within 24 hours after the order is placed. It may take an additional 1-2 days for the order to ship out. Customers will receive an email with a tracking number once the order has been shipped out. Once shipped out, please expect 1-2 weeks for orders to arrive at their destination.Most times orders will arrive much quicker but due to some factors out of our control, shipping times may take longer.'
        },
        {
        faqId: 6,
        question: 'I received my order, but it is defective/broken?',
        answer: 'Please provide us with the order number, tell us what went wrong, and send us a picture of the product and the damage to support@swifts.com. After that, we will issue you a full refund. You can either keep the item or you might want to donate it depending on the severity of the damage.'
        },
        {
        faqId: 7,
        question: 'I received my order, but it is not what I ordered?',
        answer: 'Please provide us with the order number, tell us what went wrong, and send us a picture of the product support@swifts.com After that, we will issue you a full refund. You can either keep the item or you might want to donate it.'
        },
        {
        faqId: 8,
        question: 'I never received my order',
        answer: 'Due to factors such as delayed logistics and customs clearings, please expect 1-2 weeks for orders to arrive at their destination. Most times orders will arrive much quicker but due to some factors out of our control, shipping times may take longer. If after 2 weeks you still have not received your order, please contact us at support@swifts.com.'
        },
        {
        faqId: 9,
        question: 'Tracking status shows delivered, but I do not have the package',
        answer: 'If the tracking number shows delivered but you have not yet received the package, please wait an additional 24 hours from the time of delivery to see if the package gets delivered. If after 24 hours and you have not received the package, please check with your neighbors as the package may have been delivered to them by mistake. If the package has not been found, please report to the shipping carrier that delivered your package. If you have any additional questions, please reach to our team at support@swifts.com'
        },
        {
        faqId: 10,
        question: 'Where is my tracking number?',
        answer: 'All orders are sent to the warehouse for dispatch within 24 hours after the order is placed. It may take an additional 1-2 days for the order to ship out. Customers will receive an email with a tracking number once the order has been shipped out.'
        },
        {
        faqId: 11,
        question: 'What forms of payments do you accept',
        answer: 'All major credit cards.'
        },
        {
        faqId: 12,
        question: 'I never received my refund?',
        answer: 'Once a refund is approved, we will email you letting you know that the refund has been issued. Please note that all refunds are returned to the original form of payment. Please allow 3-5 business days for the refund to be processed and returned to the original form of payment.'
        },
    
    ]
    
db.Faq.remove({})
    .then(()=>db.Faq.collection.insertMany(faqSeed))
    .then(data=>{
        console.log(data.result.n+ "records inserted!");
        process.exit(0)
    })
    .catch(err=>{
        console.error(err);
        process.exit(1)
    })
    
