import React from 'react'
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
const DUMMY_MEETUPS=[
    {
      id:'m1',
      title:'Ashoka',
      image:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
      address:'vpo lidhran jalandhar',
      description:'this is my first meetups'
    },
    {
      id:'m2',
      title:'Nitish',
      image:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
      address:'vpo lidhran jalandhar',
      description:'this is my first meetups'
    },
    {
      id:'m3',
      title:'Sameer',
      image:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
      address:'vpo lidhran jalandhar',
      description:'this is my first meetups'
    },
    {
      id:'m4',
      title:'Preet',
      image:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
      address:'vpo lidhran jalandhar',
      description:'this is my first meetups'
    },
    {
      id:'m5',
      title:'Mahesh',
      image:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
      address:'vpo lidhran jalandhar',
      description:'this is my first meetups'
    },
  ]
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

export async function getStaticProps(){
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
        revalidate:1
    };
}

export default HomePage