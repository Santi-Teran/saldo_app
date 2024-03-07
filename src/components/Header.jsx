'use client'
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Header() {
  const {data:session} = useSession();

  return (
    <nav className="h-20 flex justify-between items-center py-6 px-40 shadow-lg">
      <Link href='/'>
        <Image src='/logo-saldo-color.svg' alt="logo" width={120} height={200}/>
      </Link>
      {session?.user ? (
        <div className="flex justify-between w-full">
          <Link href='/systems' className="mx-10 text-green hover:underline">Systems</Link>
          <div className="flex gap-x-10">
            <div className="flex gap-x-2">
              <Image src='/profile.png' alt="Profile" width={25} height={25}/>
              <p>{session.user.name}</p>
            </div>
            <button onClick={ async() => { signOut( {callbackUrl: '/'} ) } } className="text-green hover:underline">Cerrar sesion</button>
          </div>
        </div>
      ) : (
        <button onClick={() => signIn()} className="text-green hover:underline">Iniciar sesión</button>
      )} 

    </nav>
  );
}