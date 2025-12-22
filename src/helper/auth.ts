import { supabase } from "./supabase"

export async function signUpNewUser(email: string, password: string) {
    return supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });
  }

export async function signInWithEmail(email: string, password: string) {
    return supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
}

export async function signOut() {
    return supabase.auth.signOut()
  }

export async function getSession() {
    return supabase.auth.getSession();
}

export async function getUser() {
    return supabase.auth.getUser();
}