import { CreateCheckoutFormData } from '@/components/address-payment-form'
import { DollarSign, MapPin, Timer } from 'lucide-react'
import Image from 'next/image'

interface SuccessProps {
  searchParams: {
    address: string
  }
}

export default function Success({ searchParams: { address } }: SuccessProps) {
  const parsedAddress: CreateCheckoutFormData = JSON.parse(address)

  function getPaymentType(payment: string) {
    switch (payment) {
      case 'pix':
        return 'Pix'
      case 'money':
        return 'Dinheiro'
      case 'credit_card':
        return 'Cartão de Crédito'
      case 'debit_card':
        return 'Cartão de Débito'
      default:
        break
    }
  }
  return (
    <div className="grid grid-cols-2 mt-10 gap-x-20">
      <div className="flex flex-col gap-10">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold font-baloo text-amber-600 leading-tight">
            Uhu! Pedido confirmado
          </h1>
          <span className="text-xl">
            Agora é só aguardar que logo o café chegará até você
          </span>
        </div>

        <div className="border border-amber-400 rounded-tl-xl rounded-br-xl rounded-tr-coffeSelected rounded-bl-coffeSelected p-10 space-y-8">
          <div className="flex gap-3 items-center justify-start">
            <div className="rounded-full bg-violet-500 w-8 h-8 flex items-center justify-center text-white">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p>
                Entrega em{' '}
                <span className="font-bold">
                  {parsedAddress.address}, {parsedAddress.number}
                </span>
              </p>
              <span>
                {parsedAddress.neighborhood} - {parsedAddress.city},{' '}
                {parsedAddress.state}
              </span>
            </div>
          </div>
          <div className="flex gap-3 items-center justify-start">
            <div className="rounded-full bg-amber-500 w-8 h-8 flex items-center justify-center text-white">
              <Timer className="w-4 h-4" />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <span className="font-bold">20 min - 30 min</span>
            </div>
          </div>
          <div className="flex gap-3 items-center justify-start">
            <div className="rounded-full bg-amber-700 w-8 h-8 flex items-center justify-center text-white">
              <DollarSign className="w-4 h-4" />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <span className="font-bold">
                {getPaymentType(parsedAddress.payment)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="w-successWidth h-72 object-contain self-end"
        src="/success.png"
        width={492}
        height={293}
        quality={100}
        alt=""
      />
    </div>
  )
}
