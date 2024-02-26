'use client';

import React, { FC, useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { typesOfIncidents } from '../utils/types';
import TypeCheckboxes from './TypeCheckboxes';
import DataListOptions from './DataListOptions';

interface IProps {
  fetchQuery: string,
  setFetchQuery: Function,
  checkBoxFilters: boolean[], 
  setCheckBoxFilters: Function,
}

const FilteringOptions: FC<IProps> = ( props: IProps ): JSX.Element => {

    const [region, setRegion] = useState<string>("");
    const [showCheckboxes, setShowCheckboxes] = useState<boolean>(false);
    const [locationQuery, setLocationQuery] = useState<string>("");
    const [startTime, setStartTime] = useState<Date | null | undefined>();
    const [timeToText, setTimeToText] = useState<string>();
    const [timeQuery, setTimeQuery] = useState<string | undefined>("");
    const [checkedState, setCheckedState] = useState<boolean[]>(
      new Array(typesOfIncidents.types.length).fill(false)
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      
      setRegion(e.target.value)
      if (e.target.value === "Hela Sverige" || e.target.value === "") {
        setLocationQuery("");
        return;
      }
      let opts: any = document.getElementById('regions')?.children;
      for (let i=0; i<opts?.length; i++) {
        if(opts[i].value === e.target.value) {
          const locationStringFormat = "locationname=" + opts[i].value;
          setLocationQuery(locationStringFormat);
          break;
        }
      }
    }

    useEffect(() => {
      if (locationQuery !== "" && timeQuery !== "") {
        props.setFetchQuery("?" + locationQuery + "&" + timeQuery);
      } else if (locationQuery !== "") {
        props.setFetchQuery("?"+locationQuery);
      } else {
        props.setFetchQuery("?"+timeQuery);
      }
    }, [locationQuery, timeQuery])

    useEffect(() => {
      if (startTime === undefined) return;
      const timeQueryString: string | undefined = "DateTime=" + (startTime?.toLocaleDateString('sv-SE'))?.slice(0, 7);
      setTimeQuery(timeQueryString);
    }, [startTime])

    useEffect(() => {
      props.setCheckBoxFilters(checkedState);
    }, [checkedState])

    const datePickFunc = (date: Date):void => {
      setStartTime(date);

      let timeStr: string = date.toString();
      let month: string = timeStr.slice(4, 7);
      
      if (month === "May")
        month = "Maj";
      else if (month === "Oct")
        month = "Okt"
      
      timeStr = month + " " + timeStr.slice(13, 15);

      setTimeToText(timeStr);
    }

    const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
    const locale: any = {
      localize: {
        month: (n: number) => months[n]
      },
      /*
      formatLong: {
        date: () => 'mm/dd/yyyy'
      }*/
    }

  return (

    <div id="filter-container" className="border-2 w-1/2">

      <div id="region-and-date-container" className="flex">
        <div id ="region-container" className="h-50 p-2 flex flex-col justify-center bg-secondary w-3/5">
          <label className="mb-2 text-white">Kommun eller Län</label>
          <input list="regions" name="myBrowser" value={region} onChange={handleChange} placeholder='Hela Sverige'
              className="w-full mb-2 p-1 pl-2 pr-2"/>
          <DataListOptions />
        </div>
        
        <div id="date-container" className="h-50 p-2 flex flex-col justify-center bg-secondary w-2/5">
          <label className="mb-2 text-white">Månad</label>
          <DatePicker locale={locale} selected={startTime} onChange={datePickFunc} showMonthYearPicker value={timeToText}
          className="w-full mb-2 p-1 pl-2 pr-2"/>
        </div>
      </div>

      <button className="btn min-h-7 h-7 w-full bg-primary text-white" onClick={() => setShowCheckboxes(!showCheckboxes)}>
        Filtrera efter typ av händelse</button>
      <div id="crime-type" className="w-full">
        {showCheckboxes ? <TypeCheckboxes checkedState={checkedState} setCheckedState={setCheckedState} /> : <></>}
      </div>
    </div>
  )
}

export default FilteringOptions
