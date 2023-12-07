import Image from "apps/website/components/Image.tsx";

export interface Props {
  onUser(user: string): void;
}

export default function StoreSearch({ onUser }: Props) {
  return (
    <div class="bg-[#022524] h-screen flex items-center flex-col justify-center">
      <div class="absolute top-0 py-8">
        <Image
          src="https://raw.githubusercontent.com/vitortrindader/movier/main/deco.cx-logo-outline.png"
          class="object-cover"
          alt="deco.cx"
          width={150}
        />
      </div>
      <div class="flex justify-center">
        <div
          class="h-[600px] w-[600px] rounded-full absolute bottom-[-300px]"
          style={{
            background: "rgba(26, 205, 95, 0.30)",
            filter: "blur(162px)",
          }}
        >
        </div>
        <div class="max-w-4xl">
          <main>
            <h1 class="mb-4 text-center text-white text-7xl font-semibold font-['Albert Sans']">
              Build your own AI powered shopping assistant
            </h1>

            <h1 class="text-center text-[#08F67C] text-7xl font-semibold font-['Albert Sans']">
              in 5 minutes
            </h1>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.target as HTMLFormElement;
                const storeValue = form.elements.namedItem(
                  "store",
                ) as HTMLInputElement;

                onUser(storeValue.value);
              }}
              class="relative flex items-center mt-16 mx-4 drop-shadow-lg"
            >
              <div class="relative w-full">
                <input
                  class="bg-[#022524] p-8 w-full rounded-[32px] border-8 border-neutral-300 border-opacity-40 justify-start items-center"
                  type="text"
                  name="store"
                  placeholder="Add the url of your store..."
                  aria-label="store handle"
                />
              </div>
              <button
                class="absolute right-0 bg-[#0BF179] justify-center items-center mr-8 px-6 py-3 font-bold rounded-xl"
                type="submit"
              >
                Start
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
