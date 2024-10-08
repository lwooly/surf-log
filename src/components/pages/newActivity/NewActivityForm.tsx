'use client'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createActivity } from '@/actions/activities.actions';

const schema = z.object({
  location: z.string().min(1, { message: 'Required' }),
  duration: z.number(),
});

const NewActivityForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <section className='container p-16 w-1/2 mx-auto'>
      <form className="flex flex-col gap-4" action={createActivity}>
        <label className='flex gap-4'>
          <p>Location</p>
          <input className='border-2 border-slate-800 rounded' {...register('location')} placeholder='Location'/>
          {errors.location?.message && <p>{errors.location?.message}</p>}
        </label>
        <label className='flex gap-4'>
          <p>Duration</p>
        <input className='border-2 border-slate-800 rounded' type="number" {...register('duration', { valueAsNumber: true })} placeholder='Duration' />
        {errors.duration?.message && <p>{errors.duration?.message}</p>}
        </label>
        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default NewActivityForm