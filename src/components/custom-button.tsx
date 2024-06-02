import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from './ui/button'

type ButtonProps = {
	text: string
	className?: string
	href: string
}

export default function CustomButton({ text, className, href }: ButtonProps) {
	return (
		<Button
			className={cn(
				`main-gradient px-[26px] py-[12px] min-w-[135px] font-bold text-[14px] rounded-[10px] [box-shadow:2px_2px_20px_rgb(1,_0,_1)] [transition:all_500ms_ease-in-out] text-white main-btn-hover`,
				className
			)}
		>
			<Link href={href}>{text}</Link>
		</Button>
	)
}
