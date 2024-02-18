'use client';

import React, { FC, useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
  fetchQuery: string,
  setFetchQuery: Function,
  /*
  startTime: Date | undefined,
  setStartTime: Function,
  endTime: Date | undefined,
  setEndTime: Function,
  */

}
        //{ fetchQuery, setFetchQuery }
const FilteringOptions: FC<IProps> = ( props: IProps ): JSX.Element => {

    const [region, setRegion] = useState<string>("");
    const [showCheckboxes, setShowCheckboxes] = useState<boolean>(false);

    const [location, setLocation] = useState<string>("");

    const [startTime, setStartTime] = useState<Date | null | undefined>();
    const [timeQuery, setTimeQuery] = useState<string | undefined>("");



    /*  REGION INPUT AND QUERY STRING CONCAT   */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      
      setRegion(e.target.value)
      if (e.target.value === "Hela Sverige" || e.target.value === "") {
        setLocation("");
        return;
      }
      let opts: any = document.getElementById('regions')?.children;
      for (let i=0; i<opts?.length; i++) {
        if(opts[i].value === e.target.value) {

          //let
          const locationQuery = "locationname=" + opts[i].value;

          setLocation(locationQuery);
          // alert(opts[i].value);
          break;
        }
      }
    }


    /*  When any of the query states change we update fetchQuery!  */
    useEffect(() => {


      if (location !== "" && timeQuery !== "") {
        props.setFetchQuery("?" + location + "&" + timeQuery);
      } else if (location !== "") {
        props.setFetchQuery("?"+location);
      } else {
        props.setFetchQuery("?"+timeQuery);
      }
      


    }, [location, timeQuery/*, showCheckboxes */])


    useEffect(() => {
      
      //console.log((startTime?.toLocaleDateString('sv-SE'))?.slice(0, 7));
      if (startTime === undefined) return;
      
      const timeQueryString: string | undefined = "DateTime=" + (startTime?.toLocaleDateString('sv-SE'))?.slice(0, 7);
      setTimeQuery(timeQueryString);


    }, [startTime])





  return (
    <>
        <label>Region: 
            <input list="regions" name="myBrowser" value={region} onChange={handleChange} placeholder='Hela Sverige'/>
        </label>
        <datalist id="regions" onSelect={() => console.log("HELLO")}>
            { /* this list can be SSR, just pass state as prop? */ }
            <option value="Hela Sverige">Hela Sverige</option>
            <option value="Ale">Ale</option>
            <option value="Alingsås">Alingsås</option>
            <option value="Älmhult">Älmhult</option>
            <option value="Älvdalen">Älvdalen</option>
            <option value="Alvesta">Alvesta</option>
            <option value="Älvkarleby">Älvkarleby</option>
            <option value="Älvsbyn">Älvsbyn</option>
            <option value="Åmål">Åmål</option>
            <option value="Aneby">Aneby</option>
            <option value="Ånge">Ånge</option>
            <option value="Ängelholm">Ängelholm</option>
            <option value="Arboga">Arboga</option>
            <option value="Åre">Åre</option>
            <option value="Årjäng">Årjäng</option>
            <option value="Arjeplog">Arjeplog</option>
            <option value="Arvidsjaur">Arvidsjaur</option>
            <option value="Arvika">Arvika</option>
            <option value="Åsele">Åsele</option>
            <option value="Askersund">Askersund</option>
            <option value="Åstorp">Åstorp</option>
            <option value="Åtvidaberg">Åtvidaberg</option>
            <option value="Avesta">Avesta</option>
            <option value="Båstad">Båstad</option>
            <option value="Bengtsfors">Bengtsfors</option>
            <option value="Berg">Berg</option>
            <option value="Bjurholm">Bjurholm</option>
            <option value="Bjuv">Bjuv</option>
            <option value="Blekinge län">Blekinge län</option>
            <option value="Boden">Boden</option>
            <option value="Bollebygd">Bollebygd</option>
            <option value="Bollnäs">Bollnäs</option>
            <option value="Borås">Borås</option>
            <option value="Borgholm">Borgholm</option>
            <option value="Borlänge">Borlänge</option>
            <option value="Botkyrka">Botkyrka</option>
            <option value="Boxholm">Boxholm</option>
            <option value="Bräcke">Bräcke</option>
            <option value="Bromölla">Bromölla</option>
            <option value="Burlöv">Burlöv</option>
            <option value="Dalarnas län">Dalarnas län</option>
            <option value="Dals-ed">Dals-ed</option>
            <option value="Danderyd">Danderyd</option>
            <option value="Degerfors">Degerfors</option>
            <option value="Dorotea">Dorotea</option>
            <option value="Eda">Eda</option>
            <option value="Ekerö">Ekerö</option>
            <option value="Eksjö">Eksjö</option>
            <option value="Emmaboda">Emmaboda</option>
            <option value="Enköping">Enköping</option>
            <option value="Eskilstuna">Eskilstuna</option>
            <option value="Eslöv">Eslöv</option>
            <option value="Essunga">Essunga</option>
            <option value="Fagersta">Fagersta</option>
            <option value="Falkenberg">Falkenberg</option>
            <option value="Falköping">Falköping</option>
            <option value="Falun">Falun</option>
            <option value="Färgelanda">Färgelanda</option>
            <option value="Filipstad">Filipstad</option>
            <option value="Finspång">Finspång</option>
            <option value="Flen">Flen</option>
            <option value="Forshaga">Forshaga</option>
            <option value="Gagnef">Gagnef</option>
            <option value="Gällivare">Gällivare</option>
            <option value="Gävle">Gävle</option>
            <option value="Gävleborgs län">Gävleborgs län</option>
            <option value="Gislaved">Gislaved</option>
            <option value="Gnesta">Gnesta</option>
            <option value="Gnosjö">Gnosjö</option>
            <option value="Göteborg">Göteborg</option>
            <option value="Götene">Götene</option>
            <option value="Gotland">Gotland</option>
            <option value="Gotlands län">Gotlands län</option>
            <option value="Grästorp">Grästorp</option>
            <option value="Grums">Grums</option>
            <option value="Gullspång">Gullspång</option>
            <option value="Habo">Habo</option>
            <option value="Håbo">Håbo</option>
            <option value="Hagfors">Hagfors</option>
            <option value="Hallands län">Hallands län</option>
            <option value="Hällefors">Hällefors</option>
            <option value="Hallsberg">Hallsberg</option>
            <option value="Hallstahammar">Hallstahammar</option>
            <option value="Halmstad">Halmstad</option>
            <option value="Hammarö">Hammarö</option>
            <option value="Haninge">Haninge</option>
            <option value="Haparanda">Haparanda</option>
            <option value="Härjedalen">Härjedalen</option>
            <option value="Härnösand">Härnösand</option>
            <option value="Härryda">Härryda</option>
            <option value="Hässleholm">Hässleholm</option>
            <option value="Heby">Heby</option>
            <option value="Hedemora">Hedemora</option>
            <option value="Helsingborg">Helsingborg</option>
            <option value="Herrljunga">Herrljunga</option>
            <option value="Hjo">Hjo</option>
            <option value="Hofors">Hofors</option>
            <option value="Höganäs">Höganäs</option>
            <option value="Högsby">Högsby</option>
            <option value="Höör">Höör</option>
            <option value="Hörby">Hörby</option>
            <option value="Huddinge">Huddinge</option>
            <option value="Hudiksvall">Hudiksvall</option>
            <option value="Hultsfred">Hultsfred</option>
            <option value="Hylte">Hylte</option>
            <option value="Jämtlands län">Jämtlands län</option>
            <option value="Järfälla">Järfälla</option>
            <option value="Jokkmokk">Jokkmokk</option>
            <option value="Jönköping">Jönköping</option>
            <option value="Jönköpings län">Jönköpings län</option>
            <option value="Kalix">Kalix</option>
            <option value="Kalmar">Kalmar</option>
            <option value="Kalmar län">Kalmar län</option>
            <option value="Karlsborg">Karlsborg</option>
            <option value="Karlshamn">Karlshamn</option>
            <option value="Karlskoga">Karlskoga</option>
            <option value="Karlskrona">Karlskrona</option>
            <option value="Karlstad">Karlstad</option>
            <option value="Katrineholm">Katrineholm</option>
            <option value="Kävlinge">Kävlinge</option>
            <option value="Kil">Kil</option>
            <option value="Kinda">Kinda</option>
            <option value="Kiruna">Kiruna</option>
            <option value="Klippan">Klippan</option>
            <option value="Knivsta">Knivsta</option>
            <option value="Köping">Köping</option>
            <option value="Kramfors">Kramfors</option>
            <option value="Kristianstad">Kristianstad</option>
            <option value="Kristinehamn">Kristinehamn</option>
            <option value="Krokom">Krokom</option>
            <option value="Kronobergs län">Kronobergs län</option>
            <option value="Kumla">Kumla</option>
            <option value="Kungälv">Kungälv</option>
            <option value="Kungsbacka">Kungsbacka</option>
            <option value="Kungsör">Kungsör</option>
            <option value="Laholm">Laholm</option>
            <option value="Landskrona">Landskrona</option>
            <option value="Laxå">Laxå</option>
            <option value="Lekeberg">Lekeberg</option>
            <option value="Leksand">Leksand</option>
            <option value="Lerum">Lerum</option>
            <option value="Lessebo">Lessebo</option>
            <option value="Lidingö">Lidingö</option>
            <option value="Lidköping">Lidköping</option>
            <option value="Lilla edet">Lilla edet</option>
            <option value="Lindesberg">Lindesberg</option>
            <option value="Linköping">Linköping</option>
            <option value="Ljungby">Ljungby</option>
            <option value="Ljusdal">Ljusdal</option>
            <option value="Ljusnarsberg">Ljusnarsberg</option>
            <option value="Lomma">Lomma</option>
            <option value="Ludvika">Ludvika</option>
            <option value="Luleå">Luleå</option>
            <option value="Lund">Lund</option>
            <option value="Lycksele">Lycksele</option>
            <option value="Lysekil">Lysekil</option>
            <option value="Malå">Malå</option>
            <option value="Malmö">Malmö</option>
            <option value="Malung-Sälen">Malung-Sälen</option>
            <option value="Mariestad">Mariestad</option>
            <option value="Mark">Mark</option>
            <option value="Markaryd">Markaryd</option>
            <option value="Mellerud">Mellerud</option>
            <option value="Mjölby">Mjölby</option>
            <option value="Mölndal">Mölndal</option>
            <option value="Mönsterås">Mönsterås</option>
            <option value="Mora">Mora</option>
            <option value="Mörbylånga">Mörbylånga</option>
            <option value="Motala">Motala</option>
            <option value="Mullsjö">Mullsjö</option>
            <option value="Munkedal">Munkedal</option>
            <option value="Munkfors">Munkfors</option>
            <option value="Nacka">Nacka</option>
            <option value="Nässjö">Nässjö</option>
            <option value="Nora">Nora</option>
            <option value="Norberg">Norberg</option>
            <option value="Nordanstig">Nordanstig</option>
            <option value="Nordmaling">Nordmaling</option>
            <option value="Norrbottens län">Norrbottens län</option>
            <option value="Norrköping">Norrköping</option>
            <option value="Norrtälje">Norrtälje</option>
            <option value="Norsjö">Norsjö</option>
            <option value="Nybro">Nybro</option>
            <option value="Nyköping">Nyköping</option>
            <option value="Nykvarn">Nykvarn</option>
            <option value="Nynäshamn">Nynäshamn</option>
            <option value="Ockelbo">Ockelbo</option>
            <option value="Öckerö">Öckerö</option>
            <option value="Ödeshög">Ödeshög</option>
            <option value="Olofström">Olofström</option>
            <option value="Örebro">Örebro</option>
            <option value="Örebro län">Örebro län</option>
            <option value="Örkelljunga">Örkelljunga</option>
            <option value="Örnsköldsvik">Örnsköldsvik</option>
            <option value="Orsa">Orsa</option>
            <option value="Orust">Orust</option>
            <option value="Osby">Osby</option>
            <option value="Oskarshamn">Oskarshamn</option>
            <option value="Österåker">Österåker</option>
            <option value="Östergötlands län">Östergötlands län</option>
            <option value="Östersund">Östersund</option>
            <option value="Östhammar">Östhammar</option>
            <option value="Östra göinge">Östra göinge</option>
            <option value="Ovanåker">Ovanåker</option>
            <option value="Överkalix">Överkalix</option>
            <option value="Övertorneå">Övertorneå</option>
            <option value="Oxelösund">Oxelösund</option>
            <option value="Pajala">Pajala</option>
            <option value="Partille">Partille</option>
            <option value="Perstorp">Perstorp</option>
            <option value="Piteå">Piteå</option>
            <option value="Ragunda">Ragunda</option>
            <option value="Rättvik">Rättvik</option>
            <option value="Robertsfors">Robertsfors</option>
            <option value="Ronneby">Ronneby</option>
            <option value="Säffle">Säffle</option>
            <option value="Sala">Sala</option>
            <option value="Salem">Salem</option>
            <option value="Sandviken">Sandviken</option>
            <option value="Säter">Säter</option>
            <option value="Sävsjö">Sävsjö</option>
            <option value="Sigtuna">Sigtuna</option>
            <option value="Simrishamn">Simrishamn</option>
            <option value="Sjöbo">Sjöbo</option>
            <option value="Skåne län">Skåne län</option>
            <option value="Skara">Skara</option>
            <option value="Skellefteå">Skellefteå</option>
            <option value="Skinnskatteberg">Skinnskatteberg</option>
            <option value="Skövde">Skövde</option>
            <option value="Skurup">Skurup</option>
            <option value="Smedjebacken">Smedjebacken</option>
            <option value="Söderhamn">Söderhamn</option>
            <option value="Söderköping">Söderköping</option>
            <option value="Södermanlands län">Södermanlands län</option>
            <option value="Södertälje">Södertälje</option>
            <option value="Sollefteå">Sollefteå</option>
            <option value="Sollentuna">Sollentuna</option>
            <option value="Solna">Solna</option>
            <option value="Sölvesborg">Sölvesborg</option>
            <option value="Sorsele">Sorsele</option>
            <option value="Sotenäs">Sotenäs</option>
            <option value="Staffanstorp">Staffanstorp</option>
            <option value="Stenungsund">Stenungsund</option>
            <option value="Stockholm">Stockholm</option>
            <option value="Stockholms län">Stockholms län</option>
            <option value="Storfors">Storfors</option>
            <option value="Storuman">Storuman</option>
            <option value="Strängnäs">Strängnäs</option>
            <option value="Strömstad">Strömstad</option>
            <option value="Strömsund">Strömsund</option>
            <option value="Sundbyberg">Sundbyberg</option>
            <option value="Sundsvall">Sundsvall</option>
            <option value="Sunne">Sunne</option>
            <option value="Surahammar">Surahammar</option>
            <option value="Svalöv">Svalöv</option>
            <option value="Svedala">Svedala</option>
            <option value="Svenljunga">Svenljunga</option>
            <option value="Täby">Täby</option>
            <option value="Tanum">Tanum</option>
            <option value="Tibro">Tibro</option>
            <option value="Tidaholm">Tidaholm</option>
            <option value="Tierp">Tierp</option>
            <option value="Timrå">Timrå</option>
            <option value="Tingsryd">Tingsryd</option>
            <option value="Tjörn">Tjörn</option>
            <option value="Tomelilla">Tomelilla</option>
            <option value="Töreboda">Töreboda</option>
            <option value="Torsås">Torsås</option>
            <option value="Torsby">Torsby</option>
            <option value="Tranås">Tranås</option>
            <option value="Tranemo">Tranemo</option>
            <option value="Trelleborg">Trelleborg</option>
            <option value="Trollhättan">Trollhättan</option>
            <option value="Trosa">Trosa</option>
            <option value="Tyresö">Tyresö</option>
            <option value="Uddevalla">Uddevalla</option>
            <option value="Ulricehamn">Ulricehamn</option>
            <option value="Umeå">Umeå</option>
            <option value="Upplands väsby">Upplands väsby</option>
            <option value="Upplands-bro">Upplands-bro</option>
            <option value="Uppsala">Uppsala</option>
            <option value="Uppsala län">Uppsala län</option>
            <option value="Uppvidinge">Uppvidinge</option>
            <option value="Vadstena">Vadstena</option>
            <option value="Vaggeryd">Vaggeryd</option>
            <option value="Valdemarsvik">Valdemarsvik</option>
            <option value="Vallentuna">Vallentuna</option>
            <option value="Vänersborg">Vänersborg</option>
            <option value="Vännäs">Vännäs</option>
            <option value="Vansbro">Vansbro</option>
            <option value="Vara">Vara</option>
            <option value="Varberg">Varberg</option>
            <option value="Vårgårda">Vårgårda</option>
            <option value="Värmdö">Värmdö</option>
            <option value="Värmlands län">Värmlands län</option>
            <option value="Värnamo">Värnamo</option>
            <option value="Västerås">Västerås</option>
            <option value="Västerbottens län">Västerbottens län</option>
            <option value="Västernorrlands län">Västernorrlands län</option>
            <option value="Västervik">Västervik</option>
            <option value="Västmanlands län">Västmanlands län</option>
            <option value="Västra Götalands län">Västra Götalands län</option>
            <option value="Vaxholm">Vaxholm</option>
            <option value="Växjö">Växjö</option>
            <option value="Vellinge">Vellinge</option>
            <option value="Vetlanda">Vetlanda</option>
            <option value="Vilhelmina">Vilhelmina</option>
            <option value="Vimmerby">Vimmerby</option>
            <option value="Vindeln">Vindeln</option>
            <option value="Vingåker">Vingåker</option>
            <option value="Ydre">Ydre</option>
        </datalist>

      
        <div id="date-container">
          Show from month: 
          <DatePicker selected={startTime} onChange={(date : Date) => setStartTime(date)} showMonthYearPicker dateFormat="yyyy-MM"/>
        </div>


        <div id="crime-type" onClick={() => setShowCheckboxes(!showCheckboxes)}>
          Types
          { /* conditional render för att öppna en meny med checkboxes och välj dom som man vill se */ }
        {showCheckboxes ? <div>helo</div> : <></>}
        </div>
        

    </>
  )
}

export default FilteringOptions