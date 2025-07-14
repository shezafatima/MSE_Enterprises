'use client'


import { z } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'

const formSchema = z.object({
  company: z.string().min(1, 'Company Name is required'),
  name: z.string().min(1, "Focal Person's Full Name is required"),
  email: z.string().email('Enter a valid email address'),
  contact: z
    .string()
    .min(10, 'Contact must be at least 10 digits')
    .max(15, 'Contact must be no more than 15 digits')
    .regex(/^\+?[0-9]{10,15}$/, 'Enter a valid contact number'),
  quantity: z.string().regex(/^[0-9,]+$/, 'Enter a valid product quantity (e.g. 5,000)'),
  description: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function ProductForm({ product }: { product: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const form = document.createElement('form')
    form.action = 'https://formspree.io/f/xldeeyep'
    form.method = 'POST'
    form.style.display = 'none'

    Object.entries({ ...data, 'Product Name': product }).forEach(([key, value]) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = String(value)
      form.appendChild(input)
    })

    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)

    toast.success('Thank you! Your request has been submitted.')
    reset()
  }

  return (
    <div className="bg-orange-500 text-black p-8 rounded-3xl shadow-2xl md:mt-40">
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            type="text"
            placeholder="Company Name"
            {...register('company')}
            className="w-full px-4 py-2 rounded-sm border border-gray-900 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
          {errors.company && <p className="text-sm text-red-700 mt-1">{errors.company.message}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Focal Person's Full Name"
            {...register('name')}
            className="w-full px-4 py-2 rounded-sm border border-gray-900 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
          {errors.name && <p className="text-sm text-red-700 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...register('email')}
            className="w-full px-4 py-2 rounded-sm border border-gray-900 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
          {errors.email && <p className="text-sm text-red-700 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Contact Number"
            {...register('contact')}
            className="w-full px-4 py-2 rounded-sm border border-gray-900 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
          {errors.contact && <p className="text-sm text-red-700 mt-1">{errors.contact.message}</p>}
        </div>

        <div className="md:col-span-2">
          <input
            type="text"
            placeholder="Product Quantity (e.g. 5,000)"
            {...register('quantity')}
            className="w-full px-4 py-2 rounded-sm border border-gray-900 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
          {errors.quantity && <p className="text-sm text-red-700 mt-1">{errors.quantity.message}</p>}
        </div>

        <div className="md:col-span-2">
          <textarea
            placeholder="Description with Size & Gauge (e.g. 10x16 .0015 Flat Poly Bags)"
            {...register('description')}
            rows={5}
            className="w-full px-4 py-2 rounded-sm border border-gray-900 focus:ring-2 focus:ring-orange-400 outline-none resize-none transition"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="cursor-pointer bg-black text-orange-600 border-2 border-black py-2 px-6 rounded-sm hover:text-black hover:bg-orange-600 transition font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
