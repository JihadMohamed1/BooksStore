const User=require("../Models/UserModel")
const bcrypt=require("bcrypt")

const getallUsers=async()=>{return await User.find()}
const getUserbyid=async(id)=>{
    return await User.findById({_id:id})
}
    

const ajouteUser=async(tmp)=>{

    const password=tmp.password
    const selt=await bcrypt.genSalt()
    const HashedPassword=await bcrypt.hash(password,selt)
    tmp.password=HashedPassword
    return await User.create(tmp)}
const deleteUser=async(id)=>{return await User.deleteOne({_id:id})}
const UpdateUserbyid=async(tmp)=>{return await User.findByIdAndUpdate(tmp._id,tmp)}

module.exports=
{
    getallUsers,
    getUserbyid,
    ajouteUser,
    deleteUser,
    UpdateUserbyid
}