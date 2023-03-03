const User=require("../Services/UserServices")


const getallUsers=async(req,res)=>{
    try{
       const result= await User.getallUsers()
        res.status(200).json(result)
    }catch(error)
    {
        res.status(500).json({msg:error})
    }
}
const getUserbyid=async(req,res)=>{
  
    try{
        const result= await User.getUserbyid(req.params.id)
         res.status(200).json(result)
      }catch(error)
      {
          res.status(404).json({error})
      }
    
}
const ajouteUser= async(req,res)=>{
    const tmp=req.body
    try{
        await User.ajouteUser(tmp)
         res.status(201).json({msg:"User bien ajoute"})
      }catch(error)
      {
          res.status(500).json({error})
      }
    
}
const deleteUser=async (req,res)=>{
    const id=req.params.id
    try{
        const result= await User.deleteUser(id)
         res.status(200).json({msg:"User supprimer"})
      }catch(error)
      {
          res.status(500).json({error})
      }
    
}
const UpdateUser=async (req,res)=>{
    try{
        const result= await User.UpdateUserbyid(req.body)
         res.status(200).json({msg:"User updated"})
      }catch(error)
      {
          res.status(500).json({error})
      }
    
}

module.exports=
{
    getallUsers,
    getUserbyid,
    ajouteUser,
    deleteUser,
    UpdateUser
}
