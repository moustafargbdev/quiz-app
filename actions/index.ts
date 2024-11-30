"use server";
import { CredentialsSignin } from "next-auth";

import { signIn } from "@/auth";
import { signInTypes } from "@/utils/validations";

export const signInAction = async (formData: signInTypes) => {
  try {
    await signIn("credentials", {
      ...formData,
      redirect: false,
    });
  } catch (error) {
    const err = error as CredentialsSignin;

    console.log(err?.message, "FROM ACRIONS ERROR");
    return { error: err.cause?.message };
  }
};
