// const router = require('express').Router();

// let Contact = require('./models');
// router.route('/').get((req, res) =>{

//   Contact.find()
//       .then(contact => res.json(contact))
//       .catch(err => res.status(400).json('Error : ' + err));
   
// });
// //add 
// router.route('/add').post((req,res) => {

//     const fullname = req.body.fullname;
//     const email= req.body.email;
//     const number = req.body.number;
//     const location= req.body.location;
//     const date = req.body.date;
    

//     const newContact = new Contact({fullname,email,number,location, date});

//     newContact.save()
//            .then( () => res.json('New Record Added.'))
//            .catch(err => res.status(400).json('Error: '+ err));

// })

// //details
// router.route('/view/:id').get((req,res)=> {
//     Contact.findById(req.params.id)
//         .then(contact => res.json(contact))
//         .catch(err => res.status(400).json('Error: '+ err));
// })

// //delete
// router.route('/delete/:id').delete((req,res)=> {
//     Contact.findByIdAndDelete(req.params.id)
//         .then(contact => res.json('Record was deleted.'))
//         .catch(err => res.status(400).json('Error: '+ err));
// })

// //UPDATE
// router.route("/update/:id").put((req, res) => {
//     Contact.findById(req.params.id)
//       .then((contact) => {
//         contact.fullname= req.body.fullname,
//         contact.email=req.body.email,
//         contact.number= req.body.number,
//         contact.location= req.body.location,
//         contact.date= req.body.date,
        
//         contact.save()
          
//           .then((user) => res.json("Record was updated."))
//           .catch((err) => res.status(400).json("Error: " + err));
//       })
//       .catch((err) => res.status(400).json("Error: " + err));
//   });

// module.exports = router;