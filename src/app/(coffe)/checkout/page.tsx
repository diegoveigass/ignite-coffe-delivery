import { AddressPaymentForm } from '@/components/address-payment-form'
import { CoffesSelected } from '@/components/coffes-selected'
import { FooterTotal } from '@/components/footer-total'

export default function Checkout() {
  return (
    <div className="grid grid-cols-2 mt-10">
      <div className="space-y-4">
        <h1 className="text-lg font-bold font-baloo">Complete seu pedido</h1>
        <div className="space-y-3">
          <AddressPaymentForm />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-lg font-bold font-baloo">Cafés selecionados</h1>
        <div className="bg-zinc-100 w-11/12 ml-auto p-10 flex flex-col gap-8 rounded-tl-xl rounded-br-xl rounded-tr-coffeSelected rounded-bl-coffeSelected">
          <CoffesSelected />
          <FooterTotal />
        </div>
      </div>
    </div>
  )
}
