import { RocketIcon } from '@radix-ui/react-icons';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AlertPage() {
	return (
		<div className='grid gap-3'>
			<Alert>
				<RocketIcon className='h-4 w-4' />
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>You can add components to your app using the cli.</AlertDescription>
			</Alert>

			<Alert variant={'destructive'}>
				<RocketIcon className='h-4 w-4' />
				<AlertTitle>Destructive!</AlertTitle>
				<AlertDescription>You can add components to your app using the cli.</AlertDescription>
			</Alert>

			<Alert variant={'successs'}>
				<RocketIcon className='h-4 w-4' />
				<AlertTitle>Successs!</AlertTitle>
				<AlertDescription>You can add components to your app using the cli.</AlertDescription>
			</Alert>
		</div>
	);
}
