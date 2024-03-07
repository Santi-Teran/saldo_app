import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between gap-x-6 items-center py-16 px-6">
        <div className="flex w-1/2 justify-center">
          <Image src='images-landing-2-v2.svg' alt="imagen" width={250} height={254}/>
        </div>
        <div className="flex-col w-1/2">
          <h2 className="text-5xl pb-4">Cambia USD y EUR por ARS</h2>
          <p className="text-xl text-gray-400 pb-4">Con Saldo puedes comprar, vender e intercambiar dólares y euros de cuentas bancarias del exterior, usando plataformas como PayPal, Skrill, Neteller, Transferencia Bancaria en Euros, Perfect Money, entre otros.</p>
          <p className="cursor-pointer hover:underline text-green">Cotizar Euros a Pesos Argentinos</p>
        </div>
      </div>

      <div className="flex justify-between gap-x-6 items-center py-16 px-6">
        <div className="flex w-1/2 justify-center">
          <Image src='images-landing-3-v2.svg' alt="imagen" width={250} height={254}/>
        </div>
        <div className="flex-col w-1/2">
          <h2 className="text-5xl pb-4">¿Quieres recargar tu cuenta PayPal?</h2>
          <p className="text-xl text-gray-400 pb-4">Saldo te ofrece más de 20 métodos de intercambio para que accedas al mundo cripto, de manera fácil y segura.</p>
          <p className="cursor-pointer hover:underline text-green">Cotizar PayPal a cuenta Bancaria</p>
        </div>
      </div>

      <div className="flex justify-between gap-x-6 items-center py-16 px-6">
        <div className="flex w-1/2 justify-center">
          <Image src='images-landing-4-v2.svg' alt="imagen" width={250} height={254}/>
        </div>
        <div className="flex-col w-1/2">
          <h2 className="text-5xl pb-4">¿Quieres recargar tu cuenta PayPal?</h2>
          <p className="text-xl text-gray-400 pb-4">Te ofrecemos y enviamos por correo una tarjeta virtual (VCC) para que la cargues y verifiques tu cuenta. Tiene una vigencia de 3 a 5 años.</p>
          <p className="text-xl text-gray-400 pb-4">Tendrás un mayor límite de compras en línea, además podrás recibir montos más altos de dinero que una cuenta no verificada.</p>
          <p className="cursor-pointer hover:underline text-green">Comprar Tarjeta VCC</p>
        </div>
      </div>
    </div>
  );
}
