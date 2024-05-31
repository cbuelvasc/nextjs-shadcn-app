import { Badge } from '@/components/ui/badge';

export default function BadgePage() {
	return (
		<div className='flex gap-4'>
			<Badge>Default Badge</Badge>
			<Badge variant={'destructive'}>Destructive Badge</Badge>
			<Badge variant={'secondary'}>Secondary Badge</Badge>
			<Badge variant={'outline'}>Outline Badge</Badge>
			<Badge capitalize variant={'successs'}>
				Successs Badge
			</Badge>
			<Badge capitalize variant={'info'}>
				info badge
			</Badge>
		</div>
	);
}
