import axios from 'axios'

export default {
    getFaqs: function(){
        return axios.get('/api/faqs')
    }
}