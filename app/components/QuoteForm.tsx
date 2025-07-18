// "use client"

// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import toast from "react-hot-toast"
// import { useState } from "react"

// const schema = z.object({
//   company: z.string().min(2, "Company Name is required"),
//   focalPerson: z.string().min(2, "Focal Person is required"),
//   email: z.string().email("Invalid email address"),
//   phone: z.string().min(7, "Phone number is required"),
//   address: z.string().min(5, "Address is required"),
//   city: z.string().min(2, "City is required"),
//   state: z.string().min(2, "State/Region is required"),
//   zip: z.string().min(3, "Zip Code is required"),
//   product: z.string().min(1, "Select a product"),
//   quantity: z.string().min(1, "Product quantity is required"),
//   description: z.string().min(5, "Description is required"),
//   comments: z.string().optional(),
//   sample: z.any().optional()
// })

// type FormData = z.infer<typeof schema>

// export default function RequestQuoteForm() {
//   const [isSubmitting, setSubmitting] = useState(false)

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors }
//   } = useForm<FormData>({
//     resolver: zodResolver(schema)
//   })

//   const onSubmit = async (data: FormData) => {
//     const formData = new FormData()
//     Object.entries(data).forEach(([key, value]) => {
//       if (key === "sample" && value instanceof FileList && value.length > 0) {
//         formData.append("sample", value[0])
//       } else {
//         formData.append(key, value as string)
//       }
//     })

//     try {
//       setSubmitting(true)
//       const res = await fetch("/api/request-quote", {
//         method: "POST",
//         body: formData
//       })

//       if (res.ok) {
//         toast.success("Quote request sent!")
//         reset()
//       } else {
//         toast.error("Something went wrong!")
//       }
//     } catch (error) {
//       toast.error("Server error")
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   return (
//     <div className="w-full min-h-screen flex justify-center items-start bg-white py-10 px-4">
//       <div className="w-full max-w-2xl bg-blue-500 text-white p-8 rounded-3xl shadow-2xl">
//         <h2 className="text-3xl font-bold mb-2 text-center">Request a Quote</h2>
//         <p className="text-white/80 text-center mb-6">
//           Fill out the form and we’ll get back to you with a custom quote.
//         </p>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           {[
//             { label: "Company Name", name: "company" },
//             { label: "Focal Person", name: "focalPerson" },
//             { label: "Email Address", name: "email", type: "email" },
//             { label: "Contact Number", name: "phone" },
//             { label: "Address", name: "address" },
//             { label: "City", name: "city" },
//             { label: "State/Region", name: "state" },
//             { label: "Zip Code", name: "zip" }
//           ].map((field) => (
//             <div key={field.name} className="flex flex-col gap-1">
//               <input
//                 {...register(field.name as keyof FormData)}
//                 type={field.type || "text"}
//                 placeholder={field.label}
//                 className="w-full px-4 py-2 rounded-md text-black border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-400 outline-none"
//               />
//               {
//                 errors[field.name as keyof FormData]?.message && (
//                   <p className="text-red-200 text-sm mt-1">
//                     {errors[field.name as keyof FormData]?.message?.toString()}
//                   </p>
//                 )
//               }
//             </div>
//           ))}

//           <div className="flex flex-col gap-1">
//             <select
//               {...register("product")}
//               className="w-full px-4 py-2 rounded-md text-black border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-400 outline-none"
//             >
//               <option value="">Select Your Product</option>
//               <option value="Polybag">Polybag</option>
//               <option value="Plastic Sheet">Plastic Sheet</option>
//               <option value="Garbage Bag">Garbage Bag</option>
//             </select>
//             {errors.product?.message && (
//               <p className="text-red-200 text-sm">{errors.product.message}</p>
//             )}
//           </div>

//           <div className="flex flex-col gap-1">
//             <input
//               {...register("quantity")}
//               placeholder="Product Quantity"
//               className="w-full px-4 py-2 rounded-md text-black border border-gray-300 focus:border-blue-600 focus:ring-2"
//             />
//             {errors.quantity?.message && (
//               <p className="text-red-200 text-sm">{errors.quantity.message}</p>
//             )}
//           </div>

//           <div className="flex flex-col gap-1">
//             <textarea
//               {...register("description")}
//               placeholder="Description with Size and Gauge"
//               rows={3}
//               className="w-full px-4 py-2 rounded-md text-black border border-gray-300 focus:border-blue-600 focus:ring-2 resize-none"
//             />
//             {errors.description?.message && (
//               <p className="text-red-200 text-sm">{errors.description.message}</p>
//             )}
//           </div>

//           <div className="flex flex-col gap-1">
//             <input
//               {...register("sample")}
//               type="file"
//               accept="image/*"
//               className="text-white file:text-white file:bg-blue-700 file:border-none file:px-4 file:py-1 file:rounded file:cursor-pointer"
//             />
//           </div>

//           <div className="flex flex-col gap-1">
//             <textarea
//               {...register("comments")}
//               placeholder="Additional Comments (optional)"
//               rows={2}
//               className="w-full px-4 py-2 rounded-md text-black border border-gray-300 focus:border-blue-600 focus:ring-2 resize-none"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full cursor-pointer bg-white text-blue-600 border-2 border-white py-2 px-6 rounded-md hover:text-white hover:bg-blue-700 transition font-semibold"
//           >
//             {isSubmitting ? "Submitting..." : "Submit Request"}
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import toast from "react-hot-toast"
import { useState } from "react"

const schema = z.object({
  company: z.string().min(2, "Company name is required"),
  focalPerson: z.string().min(2, "Focal person name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[0-9]{7,15}$/, "Invalid phone number"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State/Region is required"),
  zip: z.string().regex(/^\d{4,10}$/, "Invalid ZIP code"),
  product: z.string().min(1, "Select a product"),
  quantity: z.string().min(1, "Product quantity is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  comments: z.string().optional(),
  sample: z.any().optional()
})

type FormData = z.infer<typeof schema>

export default function RequestQuoteForm() {
  const [isSubmitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      if (key === "sample" && value instanceof FileList && value.length > 0) {
        formData.append("sample", value[0])
      } else {
        formData.append(key, value as string)
      }
    })

    try {
      setSubmitting(true)
      const res = await fetch("/api/request-quote", {
        method: "POST",
        body: formData
      })

      if (res.ok) {
        toast.success("Quote request sent!")
        reset()
      } else {
        toast.error("Something went wrong!")
      }
    } catch {
      toast.error("Server error")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-start bg-white py-10 px-4">
      <div className="w-full max-w-2xl bg-blue-500 text-white p-8 rounded-3xl shadow-2xl">
       

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {[
            { label: "Company Name", name: "company" },
            { label: "Focal Person", name: "focalPerson" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Contact Number", name: "phone" },
            { label: "Address", name: "address" },
            { label: "City", name: "city" },
            { label: "State/Region", name: "state" },
            { label: "Zip Code", name: "zip" }
          ].map((field) => (
            <div key={field.name} className="flex flex-col gap-1">
              <input
                {...register(field.name as keyof FormData)}
                type={field.type || "text"}
                placeholder={field.label}
                className="w-full px-4 py-2 rounded-md text-black border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {
                errors[field.name as keyof FormData]?.message && (
                  <p className="text-red-200 text-sm mt-1">
                    {errors[field.name as keyof FormData]?.message?.toString()}
                  </p>
                )
              }
            </div>
          ))}

          <div className="flex flex-col gap-1">
            <select
              {...register("product")}
              className="w-full px-4 py-2 rounded-md text-gray-800 border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-400 outline-none"
            >
             <option value="">Select Your Product</option>
<option value="HDPE / LDPE Bags">HDPE / LDPE Bags</option>
<option value="PVS Shrinkable Rolls">PVS Shrinkable Rolls</option>
<option value="Zip Lock Bags">Zip Lock Bags</option>
<option value="PP Bags / Rolls">PP Bags / Rolls</option>
<option value="Garbage Bags">Garbage Bags</option>
<option value="PE Shrink Film Sheet Rolls">PE Shrink Film Sheet Rolls</option>
<option value="PE Lamination Sheet Rolls">PE Lamination Sheet Rolls</option>
<option value="HDPE / LDPE Rolls">HDPE / LDPE Rolls</option>
<option value="POF / PE Stretch Films">POF / PE Stretch Films</option>
            </select>
            {errors.product?.message && (
              <p className="text-red-200 text-sm">{errors.product.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              {...register("quantity")}
              placeholder="Product Quantity"
              className="w-full px-4 py-2 rounded-md text-black border border-gray-300 focus:border-blue-600 focus:ring-2"
            />
            {errors.quantity?.message && (
              <p className="text-red-200 text-sm">{errors.quantity.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              {...register("description")}
              placeholder="Description with Size and Gauge"
              rows={3}
              className="w-full px-4 py-2 rounded-md text-black border border-gray-300 focus:border-blue-600 focus:ring-2 resize-none"
            />
            {errors.description?.message && (
              <p className="text-red-200 text-sm">{errors.description.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              {...register("sample")}
              type="file"
              accept="image/*"
              className="text-white file:text-white file:bg-blue-700 file:border-none file:px-4 file:py-1 file:rounded file:cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              {...register("comments")}
              placeholder="Additional Comments (optional)"
              rows={2}
              className="w-full px-4 py-2 rounded-md text-black border border-gray-300 focus:border-blue-600 focus:ring-2 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full cursor-pointer bg-white text-blue-600 border-2 border-white py-2 px-6 rounded-md hover:text-white hover:bg-blue-700 transition font-semibold"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  )
}
