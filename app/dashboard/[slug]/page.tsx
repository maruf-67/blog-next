// type perams = Promise<{ slug: string }>;
import Counter from "@/app/components/Counter";

export default async function Slug({params}) {
  // This is a dynamic route that will match any slug
  const { slug } = await params.slug;
  return (
    <div>
      <h1>Hello World from {slug}</h1>
      <Counter />
    </div>
  );
}
