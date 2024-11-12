import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";



export function Hero() {
    return (
        <div className="pt-8 lg:pt-16">
            <div className="px-[20px] lg:[280px]">
                <h1 className="text-slate-600 justify-between font-medium text-center text-[24px] lg:text-[64px] lg:leading-[72px]">Simplify PDF Note-Taking with AI-Powered</h1>
                <p className="pt-6 text-center text-slate-500">Elevate your note-taking experience with our AI-powered PDF app. Seamlessly extract key insights, summaries, and annotations from any PDF with just a few clicks</p>
                <div className="flex items-center justify-center w-full p-10 gap-x-5">
                    <Link href={'/dashboard/upgrade'}>
                        <Button className='rounded-full p-4 lg:p-7'>View Pricing</Button>
                    </Link>
                    <Link href={'/'}>
                        <Button className='text-black bg-slate-300 rounded-3xl p-4 lg:p-7'>Learn More</Button>
                    </Link>
                </div>
            </div>
            <div className="relative flex h-full w-full justify-center"> 
              <Image src={'/Gradient.svg'} alt='Gradient' width={500} height={500}
              className="min-h-[500px] w-full object-cover lg:h-auto lg:p-10"/>
              <div className="absolute bottom-16 flex w-full flex-col items-center">
                <Image
                    src={'/Image.svg'}
                    alt='Images'
                    width={600}
                    height={600}
                    className="border-0 rounded-lg -ml-4 h-[310px] lg:w-[1200px] lg:h-[650px] "
                />
                <div className="flex w-full flex-col items-center text-slate-200">
                    <p className="text-center">Trusted by these companies</p>
                    <div className="grid grid-cols-3 items-center justify-center gap-5 justify-items-center">
                        <Image src={'/Google.svg'} alt="Google" width={48} height={48}/>
                        <Image src={'/Slack.svg'} alt='Slack' width={48} height={48}/>
                        <Image src={'/Cnn.svg'} alt="Cnn" width={48} height={48}/>
                        
                    </div>
                    
                </div>

              </div>
            </div>
        </div>
    )
}