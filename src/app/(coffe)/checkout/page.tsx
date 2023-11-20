import { CoffesSelected } from '@/components/coffes-selected'
import { FooterTotal } from '@/components/footer-total'
import { SelectedPayment } from '@/components/selected-payment'
import { DollarSign, MapPin } from 'lucide-react'

export default function Checkout() {
  return (
    <div className="grid grid-cols-2 mt-10">
      <div className="space-y-4">
        <h1 className="text-lg font-bold font-baloo">Complete seu pedido</h1>
        <div className="space-y-3">
          <div className="bg-zinc-100 p-10 rounded-md flex flex-col">
            <div className="flex gap-2">
              <MapPin className="h-5 w-5 text-amber-600" />
              <div className="flex flex-col">
                <span className="text-base">Endereço de entrega</span>
                <span className="text-sm">
                  Informe o endereço onde deseja receber seu pedido
                </span>
              </div>
            </div>
            <form className="grid grid-cols-3 mt-8 gap-x-3 gap-y-4">
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="CEP"
                  className="w-full bg-zinc-200 p-3 border border-zinc-200 outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-600"
                />
              </div>
              <div className="col-span-3">
                <input
                  type="text"
                  placeholder="Rua"
                  className="w-full bg-zinc-200 p-3 border border-zinc-200 outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-600"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="Número"
                  className="w-full bg-zinc-200 p-3 border border-zinc-200 outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-600"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Complemento"
                  className="w-full bg-zinc-200 p-3 border border-zinc-200 outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-600"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="w-full bg-zinc-200 p-3 border border-zinc-200 outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-600"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="w-full bg-zinc-200 p-3 border border-zinc-200 outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-600"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="UF"
                  className="w-full bg-zinc-200 p-3 border border-zinc-200 outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-600"
                />
              </div>
            </form>
          </div>
          <div className="bg-zinc-100 p-10 rounded-md flex flex-col">
            <div className="flex gap-2">
              <DollarSign className="h-5 w-5 text-violet-600" />
              <div className="flex flex-col">
                <span className="text-base">Pagamento</span>
                <span className="text-sm">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>
            <SelectedPayment />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-lg font-bold font-baloo">Cafés selecionados</h1>
        <div className="bg-zinc-100 w-11/12 ml-auto p-10 flex flex-col gap-8 rounded-tl-xl rounded-br-xl rounded-tr-coffeSelected rounded-bl-coffeSelected">
          <CoffesSelected />
          <div className="h-px w-full bg-zinc-400" />
          <FooterTotal />
        </div>
      </div>
    </div>
  )
}
