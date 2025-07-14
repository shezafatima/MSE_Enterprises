
"use client"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import toast from 'react-hot-toast'


const formSchema = z.object({
  fullName: z.string().min(3, 'Full Name is required'),
  company: z.string().min(2, 'Company Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message should be at least 10 characters')
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        toast.success('Message sent successfully!')
        reset()
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch  {
      toast.error('An error occurred. Please try again later.')
    }
  }

  return (
    <div className="bg-orange-500 text-black p-8 rounded-3xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
      <p className="text-gray-600 mb-6">
        We&apos;d love to hear your thoughts or help with your inquiries.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('fullName')}
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-sm border border-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
          {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>}
        </div>

        <div>
          <input
            {...register('company')}
            placeholder="Company Name"
            className="w-full px-4 py-2 rounded-sm border border-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
          {errors.company && <p className="text-red-600 text-sm mt-1">{errors.company.message}</p>}
        </div>

        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded-sm border border-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="w-full px-4 py-2 rounded-sm border border-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
          {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>}
        </div>

        <div>
          <textarea
            {...register('message')}
            placeholder="Message"
            rows={5}
            className="w-full px-4 py-2 rounded-sm border border-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 outline-none resize-none transition"
          ></textarea>
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer bg-black text-orange-600 border-2 border-black py-2 px-6 rounded-sm hover:text-black hover:bg-orange-600 transition font-semibold"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
