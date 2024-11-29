import React from 'react'

const Button = ({ className, children, ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={"bg-primary hover:bg-logo py-3 w-full shadow-lg rounded-2xl text-white " + className} {...props}>{children}</button>
  )
}

export default Button