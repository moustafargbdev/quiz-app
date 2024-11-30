"use client"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast from "react-hot-toast"

import { signInAction } from "@/actions"
import { Button, Input } from "@/components"
import { signInSchema, signInTypes } from "@/utils/validations"

const SignInPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<signInTypes>({ resolver: zodResolver(signInSchema) });

  const handleSignin = async (data: signInTypes) => {
    const res = await signInAction(data);

    if (res?.error) {
      toast.error(res.error as string);
      return;
    }
    redirect('/')
  }

  return (
    <div>
      <h2 className="h2">Sign in</h2>
      <form onSubmit={handleSubmit(handleSignin)} >
        <Input
          {...register("email")}
          type="email"
          placeholder="Enter Email"
          errorMsg={errors.email?.message}
        />
        <Input
          {...register("password")}
          type="password"
          placeholder="Enter Password"
          errorMsg={errors.password?.message}
        />
        <div className="flex justify-end">
          <Link href="/auth/resetPassword" className="text-primary mt-1">Recover Password ?</Link>
        </div>

        <Button className="mt-8 mb-3" >Sign in</Button>
      </form>
    </div>
  )
}

export default SignInPage