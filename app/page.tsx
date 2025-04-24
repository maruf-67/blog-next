import prisma from "./utils/prisma";

async function getPost() {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      published: true,
      author: {
        select: {
          id: true,
          name: true,
        },
      },
      createdAt: true,
       },
  });
  return data;
}

export default async function Home() {
  const posts = await getPost();
  return (
      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            <p className="text-sm text-gray-500">By {post.author.name}</p>
            <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    
  );
}
