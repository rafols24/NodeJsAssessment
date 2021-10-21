

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

let Contact = require('./models'); 
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3400;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

const { check, validationResult } = require('express-validator');

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB Connection Established.');

})


//home
app.get('/',(req, res) => {

    Contact.find()

        .then(contact => res.json(contact))
        .catch(err => res.status(400).json('Error : ' + err));

});

//add
app.post('/add', [
    check('fullname').not().isEmpty().withMessage("Fullname Field cannot be blank.").bail()
                     .isLength({ max : 30 }).withMessage("Fullname field accepts up to 30 in size only!").bail()
                     .matches(/^[aA-zZ\s]+\,[aA-zZ\s]+$/).withMessage("Fullname field accepts characters values only!").bail(),
    check('email').not().isEmpty().withMessage("Email Address Field cannot be blank.").bail()
                .isLength({ max : 45 }).withMessage("Email Address field accepts up to 45 in size only!").bail()
                .matches(/^([A-Za-z\d.-]+)@([A-Za-z\d]+)\.([A-Za-z]{2,45})$/).withMessage("Email needs proper domain!").bail(),
    check('number').not().isEmpty().withMessage("Contact Number Field cannot be blank.").bail()
                   .matches(/^\d+$/).withMessage("Contact Number field accepts numeric values only.").bail()
                   .isLength({ max : 11 }).withMessage("Contact Number field accepts up to 11 in size only!").bail(),
    check('location').not().isEmpty().withMessage("Location Field cannot be blank.").bail(),
    check('date').not().isEmpty().withMessage("Registered Date Field cannot be blank.").bail()


],(req, res) => {

    let allErrors ={};

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
     errors.array().forEach(error => {
       allErrors[error.param] = [
           allErrors[error.param],
           error.msg,
       ]
     })
     return res.status(400).json(allErrors);

    }
    
    const fullname = req.body.fullname;
    const email = req.body.email;
    const number = req.body.number;
    const location = req.body.location;
    const date = req.body.date;
    const newContact = new Contact({ fullname, email, number, location, date });
    newContact.save()



});

//view a contact
app.get('/view/:id',(req,res)=> {
    Contact.findById(req.params.id)
        .then(contact => res.json(contact))
        .catch(err => res.status(400).json('Error: '+ err));
})


//delete a contact
app.delete('/delete/:id',(req,res)=> {
    Contact.findByIdAndDelete(req.params.id)
        .then(contact => res.json('Record was deleted.'))
        .catch(err => res.status(400).json('Error: '+ err));
})

//UPDATE
app.put("/update/:id",(req, res) => {
    Contact.findById(req.params.id)
      .then((contact) => {
        contact.fullname= req.body.fullname,
        contact.email=req.body.email,
        contact.number= req.body.number,
        contact.location= req.body.location,
        contact.date= req.body.date,
        
        contact.save()
          
          .then((user) => res.json("Record was updated."))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });


//getting the registered User in Manila
app.get('/viewReportsManila', (req, res) => {
    Contact.find({ "location": "Manila" })
        .then(contact => res.json(contact))
        .catch(err => res.status(400).json('Error : ' + err));

});

//getting the registered User in Cebu
app.get('/viewReportsCebu', (req, res) => {
    Contact.find({ "location": "Cebu" })
        .then(contact => res.json(contact))
        .catch(err => res.status(400).json('Error : ' + err));

});
//2021
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
const jan = /^2021-01/;
const feb = /^2021-02/;
const mar = /^2021-03/;
const apr = /^2021-04/;
const may = /^2021-05/;
const jun = /^2021-06/;
const jul = /^2021-07/;
const aug = /^2021-08/;
const sep = /^2021-09/;
const oct = /^2021-10/;
const nov = /^2021-11/;
const dec = /^2021-12/;
const listofMonths = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]



for (let ctr = 0; ctr < listofMonths.length; ctr++) {

    app.get(`/${months[ctr]}`, (req, res) => {
        console.log(months[ctr])

        Contact.find({
            date: {
                 $regex: listofMonths[ctr], $options: 'm'
                 }
        })

            .then(contact => res.json(contact))
            .catch(err => res.status(400).json('Error : ' + err));

    });
}
//2020

const months1 = ["jan1", "feb1", "mar1", "apr1", "may1", "jun1", "jul1", "aug1", "sep1", "oct1", "nov1", "dec1"]

const jan1 = /^2020-01/;
const feb1 = /^2020-02/;
const mar1 = /^2020-03/;
const apr1 = /^2020-04/;
const may1 = /^2020-05/;
const jun1 = /^2020-06/;
const jul1 = /^2020-07/;
const aug1 = /^2020-08/;
const sep1 = /^2020-09/;
const oct1 = /^2020-10/;
const nov1 = /^2020-11/;
const dec1 = /^2020-12/;
const listofMonths1 = [jan1, feb1, mar1, apr1, may1, jun1, jul1, aug1, sep1, oct1, nov1, dec1]



for (let ctr1 = 0; ctr1 < listofMonths1.length; ctr1++) {

    app.get(`/${months1[ctr1]}`, (req, res) => {

        Contact.find({
            date: { $regex: listofMonths1[ctr1], $options: 'm' }
        })

            .then(contact => res.json(contact))
            .catch(err => res.status(400).json('Error : ' + err));

    });
}






app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});


