import Link from "next/link";

export default async function Systems() {
  const res = await fetch('https://api.saldo.com.ar/json/rates/banco');
  const json = await res.json();

  const formatNumber = (number) => {
    return parseFloat(number).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="h-screen">
      <table className="mx-auto text-xl mt-28">
        <thead>
          <tr className="text-right">
            <th></th>
            <th className="px-16">Compra</th>
            <th className="p-4">Venta</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(json).map((billeteKey, index) => (
            <tr key={index} className="text-right border-b-2">
              <td className="pr-16 pl-2 text-left py-2">{billeteKey.toUpperCase()}</td>
              <td className="px-16 text-green hover:underline"><Link href={json[billeteKey].bid_url} target="_BLANK">{formatNumber(json[billeteKey].ask)}</Link></td>
              <td className="pl-16 pr-2 text-green hover:underline"><Link href={json[billeteKey].ask_url} target="_BLANK">{formatNumber(json[billeteKey].bid)}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}