"use server";
import { CredentialsSignin } from "next-auth";

import { signIn } from "@/auth";
import { registerTypes, signInTypes } from "@/utils/validations";
import { postFetch } from "@/utils";

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

export const registerAction = async (formData: registerTypes) => {
  try {
    const response = await postFetch("/auth/signup", formData);
    if (response?.code) {
      throw new Error(response?.message, {
        cause: response?.message,
      });
    }
  } catch (error) {
    const err = error as Error;
    return { error: err?.cause };
  }
};
