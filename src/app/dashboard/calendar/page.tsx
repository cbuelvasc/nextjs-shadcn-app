'use client';

import { useState } from 'react';

import { Calendar } from '@/components/ui/calendar';

export default function CalendarPage() {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [multipleDates, setmultipleDates] = useState<Date[] | undefined>([]);

	const smallDate = date?.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});

	return (
		<div className='flex-col gap-4 sm:flex sm:flex-row sm:flex-wrap'>
			<Calendar
				mode='single'
				selected={date}
				onSelect={setDate}
				className='rounded-md border shadow'
				disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
			/>
			<Calendar
				mode='single'
				selected={date}
				onSelect={setDate}
				className='rounded-md border shadow'
				disabled={(date) => date > new Date()}
			/>
			<Calendar
				mode='multiple'
				selected={multipleDates}
				onSelect={setmultipleDates}
				className='rounded-md border shadow'
			/>
			<div>
				<div className='text-3xl'>Information</div>
				<div className='border-b'></div>
				<p>{smallDate}</p>
				<p>{multipleDates?.map((date) => date.toLocaleDateString()).join(', ')}</p>
			</div>
		</div>
	);
}
