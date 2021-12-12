const PersonModel = require('../models/person');

let newperson = ({
    nom:'Bruno',
    age:25,
    favoriteFoods:["Chicken","Pizza","Corned beef"]
})
var objectperson = [
    {
        nom: 'Marie',
        age:25,
        favoriteFoods:["Chicken","Pizza","Corned beef"]
    },
    {
        nom: 'Lina',
        age:28,
        favoriteFoods:["Steak","Mozzarella cheese","Waffles"]
    },
    {
        nom: 'John',
        age:30,
        favoriteFoods:["Pizza","Steak","Corned beef"]
    },
    {
      nom: 'Marie',
      age:25,
      favoriteFoods:["Chicken","Pizza","Corned beef"]
  },
  {
    nom: 'Alex',
    age:30,
    favoriteFoods:["Pizza","Steak","Corned beef"]
},
  {
      nom: 'Marie',
      age:28,
      favoriteFoods:["Steak","Mozzarella cheese","Waffles"]
  },
  {
      nom: 'Marie',
      age:30,
      favoriteFoods:["Pizza","Steak","Corned beef"]
  }
  ];
//newperson
  const postNewPerson = async (req, res)=> {
    
        PersonModel.create( newperson , function ( err , result ) {
          if ( err ) {
            console. log ( err ) 
          } else {
            console. log ( result ) 
          }
          })
          
              res.send(newperson)
      }
//InsertMany
 const postManyNewPerson = async (req, res)=> {
    PersonModel.create( objectperson , function ( err , result ) {
        if ( err ) {
          console. log ( err ) 
        } else {
          console. log ( result ) 
        }
        })
        res.send(objectperson)
}
// Model.find() ->[NOM Person]
const getFindNomPerson = async (req, res) => {
    try {
      const users = await PersonModel.find({nom :'Lina'})
      if (!users) throw Error('No users exist');
      res.json(users);
    } 
    catch (err) {
      res.status(400).json({ msg: err.message });
    } 
}
// Model.findOne() -> FavoriteFoods
const getFindFavoriteFoods= async (req, res) => {
    try {
      const users = await PersonModel.findOne({favoriteFoods :'Pizza'})
      if (!users) throw Error('No users exist');
      res.json(users);
    } 
    catch (err) {
      res.status(400).json({ msg: err.message });
    } 
  }
// Use model.findById() to Search Your Database By _id
const getFindById = async (req, res) => {

    try {
      const users = await PersonModel.findById({_id :'61b4c1adc53b46d74f4bdd04'})
      if (!users) throw Error('No users exist');
      res.json(users);
    } 
   
    catch (err) {
      res.status(400).json({ msg: err.message });
    } 
  }
// Perform Classic Updates by Running Find, Edit, then Save
const putUpdateById= async (req, res) => {
    try {
      const users = await PersonModel.findOneAndUpdate(
        {
          _id :'61b5fe736ff6a64d8d854c9f'
        },
        { $push: { favoriteFoods : "hamburgers" }},
   
        {   
        new: true,                       // return updated doc
        }
        )
        if (!users) throw Error('No users exist');
      
      res.send(users);
    } 
    catch (err) {
      res.status((500)).json({ msg: err.message });
    } 
  }
// Perform New Updates on a Document Using model.findOneAndUpdate()
const putUpdateAge =async (req, res) => {
    try {
      const users = await PersonModel.findOneAndUpdate(
        {
          nom :'bruno'
        },
        {
          age: 20
        },
        {   
        new: true,                       // return updated doc
        }
        )
        if (!users) throw Error('No users exist');
        res.send(users);
    } 
    catch (err) {
      res.status((500)).json({ msg: err.message });
    } 
  }
//Delete One Document Using model.findByIdAndRemove
const DeleteById= async (req, res) => {
  
    try {
      const users = await PersonModel.findByIdAndRemove(
        {
          _id :'61b4c1adc53b46d74f4bdd04'
        })
        if (!users) throw Error('No users exist');
        res.send(users);
    } 
    catch (err) {
      res.status((500)).json({ msg: err.message });
    } 
  }
//MongoDB and Mongoose - Delete Many Documents with model.remove()
const romoveByName =async (req, res) => {
  
    try {
      const users =await PersonModel.remove(
        { 
          nom: 'Marie' 
        });
       
        if (!users) throw Error('No users exist');
        res.send(users);
    } 
    catch (err) {
      res.status((500)).json({ msg: err.message });
    } 
  }
//Chain Search Query Helpers to Narrow Search Result
const getSearch=async (req, res) => {
    const mysort = { nom: 1 };
    try {
      const users = await PersonModel.find({favoriteFoods :'Chicken'},{_id:1,nom: 1,favoriteFoods:1}).sort(mysort).exec(
        function ( err , result ){
  
          if ( err ) {
            console. log ( err ) 
          } else {
            console. log ( result ) 
          }
         
          res.send(result)
  
        }
      )
    } 
    catch (err) {
      res.status(400).json({ msg: err.message });
    } 
  }
module.exports ={postNewPerson,postManyNewPerson,getFindNomPerson,getFindFavoriteFoods,getFindById,putUpdateById,putUpdateAge,DeleteById,romoveByName,getSearch};

  