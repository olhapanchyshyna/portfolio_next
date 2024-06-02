import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTrigger,
} from '@/components/ui/sheet'
import { HamburgerMenuIcon, ShadowInnerIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import TextWithCircle from './text-with-circle'
import CustomButton from './custom-button'
import SidePanel from './side-panel'

export default function FirstScreen() {
	return (
		<section className="bg-[url('/first-screen-bg.jpg')] bg-cover bg-no-repeat h-[100vh]">
			<div className='flex justify-end'>
				<Sheet>
					<SheetTrigger className='text-[#e6e9eb] w-[35px] h-[35px] mt-[30px] mr-[30px]'>
						<HamburgerMenuIcon className=' w-[35px] h-[35px]' />
					</SheetTrigger>
					<SheetContent
						side='left'
						className='main-bg-color w-[350px] border-none'
					>
						<SheetDescription className='flex flex-col mt-[150px] mx-[15px] text-[#fff] font-medium text-[28px] leading-[36px] uppercase'>
							<Link
								href='/'
								className='flex items-center mb-[10px] hover:text-sky-300'
							>
								<ShadowInnerIcon className='mr-[10px] ' />
								<div>About me</div>
							</Link>
							<Link
								href='/'
								className='flex  items-center mb-[10px] hover:text-sky-300'
							>
								<ShadowInnerIcon className='mr-[10px]' />
								<div>My Skills</div>
							</Link>
							<Link
								href='/'
								className='flex  items-center  mb-[10px] hover:text-sky-300'
							>
								<ShadowInnerIcon className='mr-[10px]' />
								<div>My Portfolio</div>
							</Link>
							<Link
								href='/'
								className='flex  items-center  mb-[10px] hover:text-sky-300'
							>
								<ShadowInnerIcon className='mr-[10px]' />
								<div>My Educations</div>
							</Link>
						</SheetDescription>
					</SheetContent>
				</Sheet>
			</div>

			<div className='pt-[200px] m-auto flex flex-col w-[870px]'>
				<TextWithCircle text='My name is Olha Panchyshyna' />
				<h1 className='text-center text-[115px] leading-[110px] mb-[60px] text-[rgba(255,_255,_255,_0.8901960784)] [text-shadow:#930196_5px_5px] font-bold'>
					I&apos;m a Frontend developer
				</h1>
				
				<div className='w-[500px] flex justify-between m-auto'>
					<CustomButton text='Portfolio' href='/' />
					<CustomButton text='About me' href='/' />
				</div>
			</div>

			<SidePanel/>
		</section>
	)
}
