"use server"

import { cookies } from "next/headers";
import { Account, Client } from "node-appwrite";

import { AUTH_COOKIE_NAME } from "./constant";

export const getCurrentUser = async () => {
  try{
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

    const session = cookies().get(AUTH_COOKIE_NAME);
    
    
    if (!session) {
      return null;
      }
    
    client.setSession(session.value);
    const account = new Account(client);
    console.log("Cookies available:", session);

    return await account.get();;  
  } catch(error) {
    console.error("Error in getCurrentUser:", error);
    return null;
  }
}