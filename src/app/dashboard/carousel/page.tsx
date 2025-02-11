'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

export default function CarouselPage() {
	return (
		<div className='flex w-full justify-center'>
			<Carousel className='w-full max-w-xs' opts={{ loop: true }} autoplay={2000}>
				<CarouselContent>
					{Array.from({ length: 7 }).map((_, index) => (
						<CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
							<div className='p-1'>
								<Card>
									<CardContent className='flex aspect-square items-center justify-center p-6'>
										<span className='text-4xl font-semibold'>{index + 1}</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='hidden items-center justify-center sm:flex' />
				<CarouselNext className='hidden items-center justify-center sm:flex' />
			</Carousel>
		</div>
	);
}
