import Icon from "deco-sites/decoshop/components/ui/Icon.tsx";

export function StartStep({ onClickStart }: { onClickStart: () => void }) {
  return (
    <div class="text-white">
      <div class="text-2xl space-y-4">
        <div>Hi There!</div>
        <div>Let's start configuring your AI shopping assistant.</div>
      </div>
      <button
        class="bg-[#104E4A] hover:bg-[#051816] font-light py-4 px-6 rounded-[3rem] text-sm absolute bottom-8"
        type="button"
        onClick={onClickStart}
      >
        <div class="flex flex-row items-center">
          <span class="mr-4">Start</span>
          <Icon id="ArrowRight" size={24} />
        </div>
      </button>
    </div>
  );
}
