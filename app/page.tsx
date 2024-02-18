'use client';

import Link from 'next/link'
import FilteringOptions from './components/FilteringOptions';
import { useEffect, useState } from 'react';

async function getIncidents(fetchQuery: string) {
  let apiString: string = "https://polisen.se/api/events/";

  /* Logic for fetching */  // /api/events/?location=visby
  apiString = apiString + fetchQuery;

  console.log("IN GETINCIS: " + apiString);

  const res = await fetch(apiString, {cache: "no-store"});
  const incidents = await res.json()
  return incidents;
}


export default function Home() {

  const [fetchQuery, setFetchQuery] = useState<string>("");
  const [listOfIncidents, setListOfIncidents] = useState<object[]>([]);
  

  useEffect(() => {
    console.log("----WHEN----")
    const incidents = getIncidents(fetchQuery);
    incidents.then(res => setListOfIncidents(res));
  }, [fetchQuery])

  //console.log(typeof setFetchQuery); = Fuction | function ?

  return (
    <main className="border flex justify-center items-center flex-col">

      { /*<Navloginbar />  startTime={startTime} setStartTime={setStartTime}
        endTime={endTime} setEndTime={setEndTime}*/ }
      <FilteringOptions 
        fetchQuery={fetchQuery} setFetchQuery={setFetchQuery} 
        
      />

      {listOfIncidents.map((info: any, index: number) => (
        <p key={index} className="border">{info.summary}{info.location.name}{info.type}</p>
      ))}





      

    </main>
  )
 /* <h1><Link href="/users">Users</Link></h1> */ }
