import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth()
  console.log(session)
  return (
    <div>
      <Link href="/auth/signin" className="text-3xl">sign in </Link>
    </div>
  );
}
