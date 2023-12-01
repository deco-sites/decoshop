import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
    text?: string;
    logo?: ImageWidget;
}

export default function socialMedia(props:Props){
    return (
        <div class="max-w-7xl mx-auto">
         <div class="text-center py-6">
           <Image src={props.logo} alt="deco.cx logo" class="mx-auto h-12"/>
        </div>


        <main>
            <h1 class="mb-[16px] text-center text-neutral-900 text-7xl font-bold font-['Albert Sans'] leading-[86.40px]">
                Find personalized product recommendations in 30s
            </h1>
    
            <p class="text-center text-neutral-900 text-2xl font-normal font-['Albert Sans'] leading-9">
                Insert your Instagram or TikTok handle to get recommendations
            </p>

            <div class="relative flex items-center max-w-[608px] mx-auto mt-[64px]">
                <div class="relative">
                    <input class="w-[608px] appearance-none focus:outline-none h-[60px] pl-4 py-1 pr-1 bg-white rounded-[60px] border-2 border-neutral-300 border-opacity-30 justify-start items-center gap-4 inline-flex" type="text" placeholder="@instagram" aria-label="Instagram handle"/>
                </div>
                <button class=" absolute right-0 w-[111px] h-[52px] px-10 m-[4px] py-4 bg-fuchsia-400 rounded-[60px] justify-center items-center gap-2 inline-flex" type="button">
                Find
                </button>
            </div>

        </main>
        </div>
    );
}
