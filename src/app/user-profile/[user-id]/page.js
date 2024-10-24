// import { notFound } from "next/navigation";

// export default async function UserPage({ params }) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   );
//   const post = await response.json();
//   if (!post) {
//     notFound();
//   }

//   return (
//     <>
//       <h1> Post {post.id}</h1>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//     </>
//   );
// }
