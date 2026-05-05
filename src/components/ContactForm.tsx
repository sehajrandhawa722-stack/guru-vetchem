'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  buyerName: z.string().min(1, 'Name is required'),
  companyName: z.string().min(1, 'Company name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  product: z.string().min(1, 'Product is required'),
  grade: z.string().optional(),
  quantity: z.string().min(1, 'Quantity is required'),
  deliveryCity: z.string().min(1, 'Delivery city is required'),
  timeline: z.string().min(1, 'Timeline is required'),
  message: z.string().optional(),
  contactMethod: z.enum(['phone', 'email', 'whatsapp'])
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
        <p className="text-gray-600">Your request has been submitted. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Buyer Name *</label>
          <input {...register('buyerName')} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors.buyerName && <p className="text-red-500 text-sm">{errors.buyerName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name *</label>
          <input {...register('companyName')} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone *</label>
          <input {...register('phone')} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email *</label>
          <input {...register('email')} type="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Required *</label>
          <input {...register('product')} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors.product && <p className="text-red-500 text-sm">{errors.product.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Grade/Specification</label>
          <input {...register('grade')} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity *</label>
          <input {...register('quantity')} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Delivery City/State *</label>
          <input {...register('deliveryCity')} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors.deliveryCity && <p className="text-red-500 text-sm">{errors.deliveryCity.message}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Timeline *</label>
        <input {...register('timeline')} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        {errors.timeline && <p className="text-red-500 text-sm">{errors.timeline.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Preferred Contact Method *</label>
        <select {...register('contactMethod')} className="mt-1 block w-full border border-gray-300 rounded-md p-2">
          <option value="phone">Phone</option>
          <option value="email">Email</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
        {errors.contactMethod && <p className="text-red-500 text-sm">{errors.contactMethod.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea {...register('message')} rows={4} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  );
};

export default ContactForm;