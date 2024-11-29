import Button from "@/components/button"
import Input from "@/components/input"
import Link from "next/link"


const SignInPage = () => {
  return (
    <div>
      <Input type="email" placeholder="Enter Email" />
      <Input type="password" placeholder="Enter Password" />
      <div className="flex justify-end">
        <Link href="/resetPassword" className="text-primary">Recover Password ?</Link>
      </div>

      <Button className="mt-8 mb-3">Sign in</Button>
    </div>
  )
}

export default SignInPage