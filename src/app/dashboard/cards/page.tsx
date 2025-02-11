import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CardsPage() {
	return (
		<div className='grid grid-cols-1 gap-2 sm:grid-cols-3'>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
				<Card key={i}>
					<CardHeader>
						<CardTitle>Card Title</CardTitle>
						<CardDescription>Card Description</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Card Content</p>
					</CardContent>
					<CardFooter className='flex justify-between'>
						<Button variant={'ghost'} capitalize>
							info
						</Button>
						<Button variant={'default'}>more</Button>
					</CardFooter>
				</Card>
			))}
			<Card className='col-span-1 sm:col-span-2'>
				<CardHeader>
					<CardTitle>Create project</CardTitle>
					<CardDescription>Deploy your new project in one-click.</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className='grid w-full items-center gap-4'>
							<div className='flex flex-col space-y-1.5'>
								<Label htmlFor='name'>Name</Label>
								<Input id='name' placeholder='Name of your project' />
							</div>
							<div className='flex flex-col space-y-1.5'>
								<Label htmlFor='framework'>Framework</Label>
								<Input id='framework' placeholder='Framework of your project' />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className='flex justify-between'>
					<Button variant='outline'>Cancel</Button>
					<Button>Deploy</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
