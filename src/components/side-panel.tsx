import Image from 'next/image'
import Link from 'next/link'

export default function SidePanel() {
	return (
		<aside className='flex justify-between items-center max-w-[340px] w-full fixed top-[350px] -left-[115px] -rotate-90'>
			<div className='text-[#fff] '>Social media</div>
			<div className='w-[70px] h-0 border-[2px] border-[solid] border-[#fff]'></div>
			<Link
				href='https://github.com/olhapanchyshyna'
				target='_blank'
				className='hover:scale-125 [transition:transform_0.3s_ease]'
			>
				<Image
					src='/github.png'
					alt='GitHub'
					className='w-[20px] h-[20px] hover:fill-[#930196]'
					width={24}
					height={24}
				/>
			</Link>
			<Link
				href='https://www.linkedin.com/in/olha-panchyshyna/'
				target='_blank'
				className='hover:scale-125 [transition:transform_0.3s_ease]'
			>
				<Image
					src='/linkedin.png'
					alt='LinkedIn'
					className='w-[20px] h-[20px] hover:text-[#930196]'
					width={24}
					height={24}
				/>
			</Link>
			<Link
				href='/'
				target='_blank'
				className='hover:scale-125 [transition:transform_0.3s_ease]'
			>
				<Image
					src='/telegram.png'
					alt='Telegram'
					className=' w-[20px] h-[20px] hover:text-[#930196]'
					width={24}
					height={24}
				/>
			</Link>
		</aside>
	)
}
