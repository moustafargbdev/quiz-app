"use client"
import { registerAction } from '@/actions';
import { Button, Input } from '@/components'
import { registerSchema, registerTypes } from '@/utils/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link'
import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<registerTypes>({ resolver: zodResolver(registerSchema) });

  const handleRegister = async (data: registerTypes) => {
    const res = await registerAction(data);

    if (res?.error) {
      toast.error(res.error as string);
      return;
    }
    redirect('/auth/signin')
  }
  return (
    <div>
      <h2 className="h2">Sign up</h2>
      <form onSubmit={handleSubmit(handleRegister)}>
        <Input
          {...register("username")}
          placeholder="Username"
          errorMsg={errors.username?.message}
        />
        <div className='row space-x-4'>
          <Input
            {...register("firstName")}
            placeholder="First Name"
            errorMsg={errors.firstName?.message}
          />
          <Input
            {...register("lastName")}
            placeholder="Last Name"
            errorMsg={errors.lastName?.message}
          />
        </div>

        <Input
          {...register("email")}
          type="email"
          placeholder="Email"
          errorMsg={errors.email?.message}
        />
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
          errorMsg={errors.password?.message}
        />
        <Input
          {...register("rePassword")}
          type="password"
          placeholder="Confirm Password"
          errorMsg={errors.rePassword?.message}
        />
        <Input
          {...register("phone")}
          type="tel"
          placeholder="Phone Number"
          errorMsg={errors.phone?.message}
        />
        <div className="flex justify-center items-center space-x-1 mt-2">
          <p>Already have an account?</p>
          <Link href="/auth/signin" className="text-primary">Login</Link>
        </div>

        <Button className="mt-8 mb-3">Create Account</Button>
      </form>
    </div>
  )
}

export default RegisterPage