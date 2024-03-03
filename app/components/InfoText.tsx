import React from 'react'

const InfoText = () => {
  return (
    <div className="">
        <p>This website was created with next.js using server-side rendering and serverless functions, and can be found at&nbsp;
            <a href="https://github.com/aljo95/improved-police-next.js" 
            className="underline text-blue-100 hover:text-blue-300 visited:text-purple-200" target="_blank"> 
            GitHub
            </a>.<br></br>
        </p>
        <br></br>
        <p>
            It uses the Swedish police&apos;s <a href="https://polisen.se/om-polisen/om-webbplatsen/oppna-data/api-over-polisens-handelser/"
            className="underline text-blue-100 hover:text-blue-300 visited:text-purple-200" target="_blank">API</a> 
            &nbsp;for recently reported incidents along with scraping the text from each incident&apos;s full report page.
            <br></br><br></br>
            This allows for more detailed search queries along with a smoother experience when a user wants to read the full report without
            having to navigate back and forth between pages.
        </p>
    </div>
  )
}

export default InfoText