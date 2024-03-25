import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router';
import Head from 'next/head';

const newMeetupPage = () => {

   const router= useRouter();

    async function addMeetupHandler(enteredMeetupData){
      //this one is at level

      console.log(enteredMeetupData);
        const response=await fetch('/api/new-meetup',{
          method:'POST',
          body:JSON.stringify(enteredMeetupData),
          headers:{
            'Content-Type':'application/json'
          }
        });

        const data=await response.json();
        console.log(data);
        router.push('/');
    }
  return <>
     <Head>
          <title>React Meetup</title>
        </Head>
        <meta name='description'
        content='Add your own meetup and create amzing networking opportunity!'
        />
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </>
}

export default newMeetupPage