import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AvatarPage() {
	return (
		<div className='flex h-[500px] items-center justify-center'>
			<Avatar>
				<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<p className='m-2'>@shadcn</p>
		</div>
	);
}
