'use client'

import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Banknote,
  CreditCard,
  DollarSign,
  Landmark,
  MapPin,
} from 'lucide-react'

import * as RadioGroup from '@radix-ui/react-radio-group'

const createCheckoutFormSchema = z.object({
  cep: z.string().max(8).min(8),
  address: z.string().min(1, 'Address must be informed'),
  number: z.number().min(1, 'Address number must be informed'),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, 'Neighborhood must be informed'),
  city: z.string().min(1, 'City must be informed'),
  state: z
    .string()
    .min(2, 'Must be have minimum 2 caracteres')
    .max(2, 'Must be have maximum 2 caracteres'),
  payment: z.string().min(1, 'Payment must be informed'),
})

type CreateCheckoutFormData = z.infer<typeof createCheckoutFormSchema>

export function AddressPaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreateCheckoutFormData>({
    resolver: zodResolver(createCheckoutFormSchema),
  })

  function createCheckout(data: any) {
    console.log(data)
  }

  return (
    <form
      className="p-10 rounded-md flex flex-col gap-3"
      onSubmit={handleSubmit(createCheckout)}
      id="address-payment-form"
    >
      <div className="bg-zinc-100 p-10 rounded-md">
        <div className="flex gap-2">
          <MapPin className="h-5 w-5 text-amber-600" />
          <div className="flex flex-col">
            <span className="text-base">Endereço de entrega</span>
            <span className="text-sm">
              Informe o endereço onde deseja receber seu pedido
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-8 gap-x-3 gap-y-4">
          <div className="col-span-1">
            <input
              type="text"
              placeholder="CEP"
              className="w-full bg-zinc-200 p-3 border border-zinc-200 outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-600"
              {...register('cep')}
            />
            {errors.cep && (
              <span className="block text-sm text-red-600">
                {errors.cep.message}
              </span>
            )}
          </div>
          <div className="col-span-3">
            <input
              type="text"
              placeholder="Rua"
              className="w-full bg-zinc-200 p-3 border border-zinc-200 outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-600"
              {...register('address')}
            />
            {errors.address && (
              <span className="block text-sm text-red-600">
                {errors.address.message}
              </span>
            )}
          </div>
          <div className="col-span-1">
            <input
              type="number"
              placeholder="Número"
              className="w-full bg-zinc-200 p-3 border border-zinc-200 outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-600"
              {...register('number', { valueAsNumber: true })}
            />
            {errors.number && (
              <span className="block text-sm text-red-600">
                {errors.number.message}
              </span>
            )}
          </div>
          <div className="col-span-2">
            <input
              type="text"
              placeholder="Complemento"
              className="w-full bg-zinc-200 p-3 border border-zinc-200 outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-600"
              {...register('complement')}
            />
            {errors.complement && (
              <span className="block text-sm text-red-600">
                {errors.complement.message}
              </span>
            )}
          </div>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Bairro"
              className="w-full bg-zinc-200 p-3 border border-zinc-200 outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-600"
              {...register('neighborhood')}
            />
            {errors.neighborhood && (
              <span className="block text-sm text-red-600">
                {errors.neighborhood.message}
              </span>
            )}
          </div>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Cidade"
              className="w-full bg-zinc-200 p-3 border border-zinc-200 outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-600"
              {...register('city')}
            />
            {errors.city && (
              <span className="block text-sm text-red-600">
                {errors.city.message}
              </span>
            )}
          </div>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="UF"
              className="w-full bg-zinc-200 p-3 border border-zinc-200 outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-600"
              {...register('state')}
            />
            {errors.state && (
              <span className="block text-sm text-red-600">
                {errors.state.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 p-10 rounded-md flex flex-col">
        <div className="flex gap-2">
          <DollarSign className="h-5 w-5 text-violet-600" />
          <div className="flex flex-col">
            <span className="text-base">Pagamento</span>
            <span className="text-sm">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>
        <Controller
          name="payment"
          control={control}
          render={({ field }) => {
            return (
              <RadioGroup.Root
                className="flex flex-col gap-3"
                {...register('payment')}
                onChange={field.onChange}
                ref={field.ref}
              >
                <div className="grid grid-cols-4 gap-3 mt-8">
                  <RadioGroup.Item
                    value="credit_card"
                    className="flex border items-center justify-center gap-3 bg-zinc-200 p-4 rounded-md data-[state=checked]:border-violet-500 hover:bg-zinc-300"
                  >
                    <CreditCard className="h-5 w-5 text-violet-600" />
                    <span className="text-xs uppercase">cartão de crédito</span>
                  </RadioGroup.Item>
                  <RadioGroup.Item
                    value="debit_card"
                    className="flex border items-center justify-center gap-3 bg-zinc-200 p-4 rounded-md data-[state=checked]:border-violet-500 hover:bg-zinc-300"
                  >
                    <Landmark className="h-5 w-5 text-violet-600" />
                    <span className="text-xs uppercase">cartão de débito</span>
                  </RadioGroup.Item>
                  <RadioGroup.Item
                    value="money"
                    className="flex border items-center justify-center gap-3 bg-zinc-200 p-4 rounded-md data-[state=checked]:border-violet-500 hover:bg-zinc-300"
                  >
                    <Banknote className="h-5 w-5 text-violet-600" />
                    <span className="text-xs uppercase">dinheiro</span>
                  </RadioGroup.Item>
                  <RadioGroup.Item
                    value="pix"
                    className="flex border items-center justify-center gap-3 bg-zinc-200 p-4 rounded-md data-[state=checked]:border-violet-500 hover:bg-zinc-300"
                  >
                    <DollarSign className="h-5 w-5 text-violet-600" />
                    <span className="text-xs uppercase">pix</span>
                  </RadioGroup.Item>
                </div>
                {errors.payment && (
                  <span className="block text-sm text-red-600">
                    {errors.payment.message}
                  </span>
                )}
              </RadioGroup.Root>
            )
          }}
        />
      </div>
    </form>
  )
}
