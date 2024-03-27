import React from 'react'
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

const HomePage = (props) => {
  return (
    <>
        <Head>
          <title>React Meetup</title>
        </Head>
        <meta name='description'
        content='Browse a huge list of highly active React meetups!'
        />
        <MeetupList meetups={props.meetups}/>
    </>
  )
}

export async function getServerSideProps(){
  //fetch data from an API
  const url='mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/'
  // 'mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/meeetups?retryWrites=true&w=majority&appName=Cluster0'
  
  const client = await MongoClient.connect('mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
 
      const db=client.db('meetups');

      const meetupsCollection=db.collection('meetupDetail');

      const meetups=await meetupsCollection.find().toArray();

      client.close();

      //htis
      
    return {
        props:{
            meetups:meetups.map((item)=>({
              title:item.title,
              image:item.image,
              address:item.address,
              id:item._id.toString()
            }))
        },
        
    };
}

export default HomePage