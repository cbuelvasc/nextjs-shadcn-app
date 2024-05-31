import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const items = [
	{
		id: 'item-1',
		question: 'Is it accessible?',
		answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
	},
	{
		id: 'item-2',
		question: 'Is it styled?',
		answer: "Yes. It comes with default styles that matches the other components' aesthetic.",
	},
	{
		id: 'item-3',
		question: 'Is it animated?',
		answer: "Yes. It's animated by default, but you can disable it if you prefer.",
	},
	{
		id: 'item-4',
		question: 'Is it responsive?',
		answer: "Yes. It's responsive by default, but you can disable it if you prefer.",
	},
	{
		id: 'item-5',
		question: 'Is it customizable?',
		answer: 'Yes. You can customize the styles, animations, and behavior to fit your needs.',
	},
];

export default function AccordionPage() {
	return (
		<Accordion type='multiple' className='w-full'>
			{items.map((item, index) => (
				<AccordionItem key={item.id} value={item.id}>
					<AccordionTrigger>{item.question}</AccordionTrigger>
					<AccordionContent>{item.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
