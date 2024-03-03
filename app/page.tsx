'use client';

import FilteringOptions from './components/FilteringOptions';
import InfoText from './components/InfoText';
import { typesOfIncidents } from './utils/types';
import { useEffect, useState } from 'react';
import { GoInfo } from "react-icons/go";

async function getIncidents(fetchQuery: string) {
  let apiString: string = "https://polisen.se/api/events/";
  apiString = apiString + fetchQuery;
  const res = await fetch(apiString, {cache: "no-store"});
  const incidents = await res.json()
  return incidents;
}

interface listOfInc {
  listOfIncidents: object[];
  type: string;
}

export default function Home() {

  const [fetchQuery, setFetchQuery] = useState<string>("");
  const [listOfIncidents, setListOfIncidents] = useState<listOfInc[]>([]);
  const [prevList, setPrevList] = useState<listOfInc[]>([]);
  const [checkBoxFilters, setCheckBoxFilters] = useState<boolean[]>([]);
  const [typesFilter, setTypesFilter] = useState<string[]>([]);
  const [toggleInfo, setToggleInfo] = useState<boolean>(false);


  useEffect(() => {
    //console.log("FETCH QUERY: " + fetchQuery);
    const incidents = getIncidents(fetchQuery);
    incidents.then(res => { 
      setListOfIncidents(res);
      setPrevList(res);
    });
  }, [fetchQuery])


  useEffect(() => {
    setTypesFilter([]);
    let tempArr: string[] = [];
    for (let i=0; i<checkBoxFilters.length; i++) {
      if (checkBoxFilters[i] === true) {
        //console.log(typesOfIncidents.types[i].typeOfCrime);
        tempArr.push(typesOfIncidents.types[i].typeOfCrime);
      }
    }
    setTypesFilter(tempArr);
  }, [checkBoxFilters])


  useEffect(() => {
    let tempIncidents: listOfInc[] = [];
    let shallowTypesArr = typesFilterIntoShallowArr();

    if (shallowTypesArr.length === 0) {
      setListOfIncidents(prevList);
      return;
    }

    for (let i=0; i<prevList.length; i++) {
      if (shallowTypesArr.indexOf(prevList[i].type) !== -1) { 
        //console.log(prevList[i].type)
        tempIncidents.push(prevList[i]);
      }
    }

    if (tempIncidents.length > 0) {
      setListOfIncidents(tempIncidents);
    } else {
      setListOfIncidents([]);
    }
  }, [typesFilter, fetchQuery, listOfIncidents, prevList])   // <--- listOfIncidents & prevList 


  const typesFilterIntoShallowArr = (): string[] => {
    let shallowTypesArr: string[] = [];
    for (let i=0; i<typesFilter.length; i++) {
      let tempArr: string[] = typesFilter[i].split("-");
      for (let j=0; j<tempArr.length; j++) {
        shallowTypesArr.push(tempArr[j]);
      }
    } 
    return shallowTypesArr;
  }
  

  /* Kind of long function - refactor later */
  const fetchInfo: any = async (e: any, url: any, indx: string) => {

    let contentElem = document.getElementById(indx);
    let orgText = contentElem?.innerHTML; // Necessary or refactor?

    if (contentElem === null) return;

    let indxNumber: number = +indx;
    let cID: number = indxNumber + 500;
    let containerElem = document.getElementById(cID.toString());

    contentElem.classList.remove('animate-fadeOut');
    
    if (e.target.innerHTML === "Visa mindre")
      e.target.innerHTML = "Visa mer";
    
    if ((contentElem.innerHTML).includes("<br>")) {
      let indx: number = (contentElem.innerHTML).indexOf("<br>");
      let tempStr: string = (contentElem.innerHTML).slice(0, indx);
      contentElem.innerHTML = tempStr;
      if (containerElem !== null)
        containerElem.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    let newStr: string = "";
    newStr = contentElem.innerHTML;

    console.log(contentElem.innerHTML);
    console.log(orgText)
    
    /* FETCHING HTML STARTS HERE - REST OF FUNCTION */ 
    fetch('http://192.168.0.4:3000/api/HtmlPostFetch', {
        method: 'POST',
        body: JSON.stringify({ url })
    })
      .then(res => res.text())
      .then(data => {

        e.target.innerHTML = "Visa mindre";

        if (contentElem !== null)
          contentElem.classList.add('animate-fadeOut');

        let parser = new DOMParser();
        let doc = parser.parseFromString(data, "text/html");
        let targetElem = doc.querySelectorAll("p");


        for (let i=1; i<targetElem.length; i++) {
          if (targetElem[i].innerHTML === "Kontakta polisen") {
            newStr += 
            `Har du information som kan kopplas till det inträffade?
             <a
              class="underline font-medium text-blue-600 dark:text-blue-500 hover:underline"
              href="https://polisen.se/om-polisen/kontakt/tipsa-polisen/">Kontakta oss</a>
            `
            break;
          }
          if (newStr === "") {
            newStr += "<br>" + targetElem[i].innerHTML;
          } else
            newStr += "<br><br>" + targetElem[i].innerHTML;
        }

        /* HANDLING ALL WEIRD/STUPID CASES BECAUSE SWEDISH POLICE CAN'T WRITE PROPERLY */ 
        newStr = newStr.replace('\\"tips\\"', '"tips"' );
        newStr = newStr.replace("kontakta polisen", `<a
        class="underline font-medium text-blue-100 dark:text-blue-500 hover:text-blue-300"
        href="https://polisen.se/om-polisen/kontakt/tipsa-polisen/">Kontakta Polisen</a>`)
        
        if (newStr.slice(0, -4) === "<br>") newStr = newStr.slice(0, -4);
        if (newStr.includes("&nbsp;")) newStr = newStr.replace("&nbsp;", "");
        
        if (contentElem !== null)
          contentElem.innerHTML = newStr;

        if (((contentElem !== null) && (contentElem.innerHTML).includes("<br>")) || contentElem.innerHTML === orgText) {
          let hrefStr: string = "https://polisen.se"+url;
          contentElem.innerHTML += `
          </br><a href=${hrefStr} 
          class="underline font-medium text-blue-100  mb-5 hover:text-blue-300 m-auto mt-5 visited:text-purple-200">
          Se originalnotisen</a>
          `
        }
        else contentElem.innerHTML = newStr;

        if (containerElem !== null)
          containerElem.scrollIntoView({ behavior: 'smooth' });

      })
    .catch(function(err) {  
      console.log('Failed to fetch page: ', err);
    })
  }





  /* Toggle off info-text + smooth fade transitions */
  const handleWhenToggleIsTrue = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    let con: HTMLDivElement | null = document.querySelector("#full-screen-info-container");
    con?.classList.remove("animate-fadeOut");
    con?.offsetHeight;
    con?.classList.add("animate-fadeIn");
    
    setTimeout(() => {
      setToggleInfo(false);
      con?.classList.remove("animate-fadeIn");
    }, 400)
    //con?.classList.add("animate-fadeOut") - Not needed, added every time component mounts anyways?
  } 

  return (




    <main id="main" className="border-primary border-4 flex justify-center items-center flex-col 
    w-full md:w-4/5 lg:w-3/5 2xl:w-2/5 m-auto bg-neutral-content relative z-10 pb-10 rounded-lg">
      <div id="info-container"
      className="absolute top-0 right-0 z-20 w-8 h-8 mt-2 mr-2 rounded-full" >
        <button className="w-full h-full rounded-full"  onClick={() => setToggleInfo(true) }>
          <GoInfo className="w-full h-full rounded-full"/>
        </button>
      {toggleInfo ?
        <div id="full-screen-info-container" className="fixed w-screen h-screen top-0 left-0 flex z-10 bg-black bg-opacity-50 
        animate-fadeOut" onClick={(e) => handleWhenToggleIsTrue(e)}>
          <div className="relative m-auto mt-20 w-3/4 lg:w-1/4 border-4 border-neutral-content 
          bg-primary text-white z-0 p-10 rounded-3xl shadow-inner"
          onClick={(e) => e.stopPropagation()}>
            <InfoText />
          </div> 
        </div>
      :
        <></>
      }
      
      
      </div>
      <p className="m-5 text-2xl font-bold text-black animate-fader ">Aktuella händelser</p>
        
      <FilteringOptions 
        fetchQuery={fetchQuery} setFetchQuery={setFetchQuery} 
        checkBoxFilters={checkBoxFilters} setCheckBoxFilters={setCheckBoxFilters}
      />


      {listOfIncidents.map((info: any, index: number) => ( 
        
        <div key={index} id={(index+500).toString()} 
        className="border flex flex-col justify-center items-center mt-5 pt-2 pb-2 
        relative h-full animate-fadeOut bg-primary text-white rounded-lg w-11/12 sm:w-4/5"
        
        >
          
          <p className="text-sm w-11/12 text-center">{info.name}</p>

          <p className="text-lg w-11/12 flex flex-col mt-2 customCSS text-center">{info.summary}</p>


          <div className="text-lg w-11/12 text-start mb-4 flex flex-col" id={index.toString()}>
            {/* innerHTML content goes here in function fetchInfo */}
          </div>

          <button className="btn w-full absolute right-0 bottom-0 min-h-5 h-5 bg-primary  text-white rounded-none 
          rounded-b-lg border-0 border-t border-slate-400 text-sm active:text-xs no-animation"
          onClick={(e) => { fetchInfo(e, info.url, index.toString()); }}>Visa mer</button>
        </div>
      ))}



    </main>
  )
}
