'use client'

import { Banknote, CreditCard, DollarSign, Landmark } from 'lucide-react'
import { useState } from 'react'

type SelectPayment = 'pix' | 'credit_card' | 'debit_card' | 'money' | null

export function SelectedPayment() {
  const [selectedPayment, setSelectedPayment] = useState<SelectPayment>(null)

  function handleSelectPayment(payment: SelectPayment) {
    setSelectedPayment(payment)
  }

  return (
    <div className="grid grid-cols-4 gap-3 mt-8">
      <button
        onClick={() => handleSelectPayment('credit_card')}
        type="button"
        data-active={selectedPayment === 'credit_card' ? 'true' : 'false'}
        className="flex border items-center justify-center gap-3 bg-zinc-200 p-4 rounded-md data-[active=true]:border-violet-500 hover:bg-zinc-300"
      >
        <CreditCard className="h-5 w-5 text-violet-600" />
        <span className="text-xs uppercase">cartão de crédito</span>
      </button>
      <button
        onClick={() => handleSelectPayment('debit_card')}
        type="button"
        data-active={selectedPayment === 'debit_card' ? 'true' : 'false'}
        className="flex border items-center justify-center gap-3 bg-zinc-200 p-4 rounded-md data-[active=true]:border-violet-500 hover:bg-zinc-300"
      >
        <Landmark className="h-5 w-5 text-violet-600" />
        <span className="text-xs uppercase">cartão de débito</span>
      </button>
      <button
        onClick={() => handleSelectPayment('money')}
        type="button"
        data-active={selectedPayment === 'money' ? 'true' : 'false'}
        className="flex border items-center justify-center gap-3 bg-zinc-200 p-4 rounded-md data-[active=true]:border-violet-500 hover:bg-zinc-300"
      >
        <Banknote className="h-5 w-5 text-violet-600" />
        <span className="text-xs uppercase">dinheiro</span>
      </button>
      <button
        onClick={() => handleSelectPayment('pix')}
        type="button"
        data-active={selectedPayment === 'pix' ? 'true' : 'false'}
        className="flex border items-center justify-center gap-3 bg-zinc-200 p-4 rounded-md data-[active=true]:border-violet-500 hover:bg-zinc-300"
      >
        <DollarSign className="h-5 w-5 text-violet-600" />
        <span className="text-xs uppercase">pix</span>
      </button>
    </div>
  )
}
