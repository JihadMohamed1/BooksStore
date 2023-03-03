import axios from "./http_common"


async function getAll()
{
    return  await axios.get("/User")
}
async function getone(id)
{
    return  await axios.get(`/User/${id}`)
}
async function Deleteone(id)
{
    return  await axios.delete(`/User/${id}`)
}
async function Addone(tmp)
{
    return  await axios.post("/User/",tmp)

}async function Updateone(tmp)
{
    return  await axios.put(`/User/${tmp._id}`,tmp)
}

const req3={getAll,Deleteone,Addone,getone,Updateone}
export default req3