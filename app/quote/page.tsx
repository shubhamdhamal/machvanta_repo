"use client"; import { useForm } from "react-hook-form"; import { toast } from "sonner";
export default function Quote() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => { await fetch('/api/quote', { method: 'POST', body: JSON.stringify(data)}); toast.success("Quote Requested!"); };
  return (
    <div className="min-h-screen bg-white dark:bg-darkbg pt-8 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Request a Quote</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input {...register("name")} placeholder="Name" className="input-field" required />
          <input {...register("company")} placeholder="Company" className="input-field" required />
          <input {...register("email")} placeholder="Email" className="input-field" required />
          <input {...register("phone")} placeholder="Phone" className="input-field" required />
          <textarea {...register("details")} placeholder="Project Details" rows={5} className="input-field col-span-full" required />
          <button className="col-span-full bg-cyan-500 text-white py-3 rounded-lg font-bold">Submit Request</button>
        </form>
      </div>
    </div>
  );
}