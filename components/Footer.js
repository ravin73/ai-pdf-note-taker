import Image from "next/image";

export function Footer(){
    return (
        <div className="pt-[80px] pb-[40px] bg-slate-200">
            <div className="flex items-center justify-center gap-x-[12px]">
                <Image
                    src={'/logo.svg'}
                    alt='Logo'
                    width={30}
                    height={40}
                />
                <p className="font-bold text-slate-800">AI PDF Notes</p>
            </div>
         
            <p className="pt-[56px] text-center text-[14px] text-slate-800 font-medium">&copy; 2024 AI PDF Note-Taker. All rights reserved.</p>

        </div>
    )
}