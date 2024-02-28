
export async function POST(req: Request) {
    const formData = await req.json();

    //console.log("the url: "+formData.url);

    let fullUrl = "https://polisen.se" + formData.url;

    const res = await fetch(fullUrl)
    const data = await res.text();
    //console.log(product);



    return Response.json({data});

}