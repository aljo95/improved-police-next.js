Improving search functionality of the Swedish police's incident reports page by using their API (https://polisen.se/api/events).
The official police site only lets you choose a location in Sweden even though the API has functionality for much more.
<br><br>
Also scraping text from the separate page of each incident containing more detailed information. Removing the need to navigate back and forth between pages to view the full reports.

- [x] Added location picker
- [x] Added date (month) picker
- [x] Added filtering for types of incidents
- [x] SSR components where possible
- [x] Backend API for fetching full description of incident on button click
- [x] Fix text formatting because the police doesn't uphold any kind of standard...
- [x] The API provided by the police is literally broken when a title (summary key in the API) is longer than 110 characters. I fixed it by substringing the important parts and adding the full summary text on button.

Built with <u>**next.js**</u> and <u>**TypeScript**</u> using its serverless functionality.
<br>
Styling was done with <u>**tailwind**</u> and a <u>**daisyUI**</u> theme, some colors may be changed soon.
<br><br>
[You can preview the app here.](https://enklapolisrapporter.vercel.app/)
<br><br>
If you want to deploy it with your own domain or make changes that you think are improvements then feel free to request or fork.