import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
// import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name:'Credentials',
      credentials:{
        email: { label: '', type: 'text', placeholder: 'Correo electrónico *'},
        password: { label: '', type:'password', placeholder: 'Contraseña *'}
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch('https://api.saldo.com.ar/bridge/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          });
      
          const user = await res.json();
      
          if (res.ok && user) {
            return user;
          } else {
            console.error('Error en la respuesta:', res.status, res.statusText);
            console.error('Contenido de la respuesta:', await res.text());
          }
        } catch (error) {
          console.error('Error al realizar la solicitud:', error);
        }
      
        return null;
      }      
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // })
  ]
})

export {handler as GET, handler as POST}