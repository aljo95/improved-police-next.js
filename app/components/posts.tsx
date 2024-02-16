// posts will be populated at build time by getStaticProps()
export default function Posts({ posts }: any) {
    console.log(posts);
    return (
      <div>
        eh
        {posts}
      </div>
    )
  }
   
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch("https://polisen.se/api/events")
    const posts = await res.json()
   
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }