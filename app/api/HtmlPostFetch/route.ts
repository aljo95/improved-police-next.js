
export async function POST(req: Request) {
    const formData = await req.json();

    let fullUrl = "https://polisen.se" + formData.url;

    const res = await fetch(fullUrl)
    const data = await res.text();

    return Response.json({data});
}
