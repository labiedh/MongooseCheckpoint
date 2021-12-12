const express = require('express');
const PersonControl = require('../controller/person');
const router = express.Router()


//newperson
router.post('/add',PersonControl.postNewPerson )
//
//InsertMany 
router.post('/addall', PersonControl.postManyNewPerson)
//
// Model.find()
router.get('/search', PersonControl.getFindNomPerson);
// 
// Model.findOne() -> FavoriteFoods
router.get('/searchOne', PersonControl.getFindFavoriteFoods);
//
// Use model.findById() to Search Your Database By _id
router.get('/searchById', PersonControl.getFindById);
//
// Perform Classic Updates by Running Find, Edit, then Save
router.put('/Update', PersonControl.putUpdateById);
//
// Perform New Updates on a Document Using model.findOneAndUpdate()
router.put('/findOneAndUpdate', PersonControl.putUpdateAge);
//
//Delete One Document Using model.findByIdAndRemove
router.delete('/Delete',PersonControl.DeleteById);
//
//MongoDB and Mongoose - Delete Many Documents with model.remove()
router.delete('/Remove', PersonControl.romoveByName);
//
//Chain Search Query Helpers to Narrow Search Result
router.get('/searchFavFood', PersonControl.getSearch);
// 

module.exports = router