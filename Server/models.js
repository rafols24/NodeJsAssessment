const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const contactSchema = new Schema(
    {
        fullname: {
            type:String,
            required:true,
            trim:true
        },
        

        email: {
            type:String,
            required:true,
            trim:true
        },

        number: {
            type:Number,
            required:true,
            trim:true
        },
        
        location: {
            type:String,
            required:true,
            trim:true
        },
        
        date: {
            type:String,
            required:true,
            trim:true
        },
    },
    {
        timestamps:true,
    }
);

const Contact = mongoose.model('contacts', contactSchema);
module.exports = Contact;