

import Link from 'next/link'
import FilteringOptions from './components/FilteringOptions';
import Todo from "./serverFetch"

async function getIncidents() {
  const res = await fetch("https://polisen.se/api/events", {cache: "no-store"});
  const incidents = await res.json();
  return incidents;
}


export default async function Home( {posts}: any ) {

  //const incidents = await getIncidents();
  console.log("-----");
  //console.log(incidents);
  console.log("-----");
  return (
    <main className="border flex justify-center items-center flex-col">
      <div>
        
      </div>

      { /*<Navloginbar /> */ }


      <FilteringOptions />

      <ul>
      {/*incidents.map((todo: any) => (
        <Todo key={todo.id} {...todo} />
      ))*/}
      </ul>


      <h1>test</h1>



      <h1><Link href="/users">Users</Link></h1> {/* for later */}

    </main>
  )
}
