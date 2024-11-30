import Link from "next/link";

export default async function Home() {

  return (
    <div>
      <Link href="/auth/signin" className="text-3xl">sign in </Link>
    </div>
  );
}
