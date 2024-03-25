import { MongoClient } from "mongodb";

async function handler(req,res){
    console.log('hello it is working here')
    if(req.method === 'POST'){
        const data=req.body;
    

    const url='mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/'
    // 'mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/meeetups?retryWrites=true&w=majority&appName=Cluster0'
    
    const client = await MongoClient.connect('mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
   
        const db=client.db('meetups');

        const result=await db.collection('meetupDetail').insertOne(data)

        console.log(result);

        client.close();

        res.status(201).json({message:'Meetup inserted'});
    }
}

export default handler;