import axios from 'axios'

export default {
    getFaqs: function(){
        return axios.get('/api/faqs')
    },
    postFaqs: function(formData){
        return axios.post('/api/newfaqs', formData)
    },
    deleteFaq: function(id){
        return axios.delete('/api/deletefaq/'+id)
    },
    updateFaq: function(id, data){
        return axios.put('/api/updatefaq/'+id,data)
    }
}