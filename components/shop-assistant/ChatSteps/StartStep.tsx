import Icon from "deco-sites/decoshop/components/ui/Icon.tsx";
import { useRef, useState } from "preact/hooks";

const transitionTime = 300;

export function StartStep({ onClickStart }: { onClickStart: () => void }) {
  const [isExiting, setIsExiting] = useState(false);
  const setupContainer = useRef<HTMLDivElement>(null);
  function handleClick() {
    setIsExiting(true);
    setupContainer.current?.addEventListener(
      "animationend",
      onClickStart,
      false,
    );
  }

  return (
    <div
      class="text-white space-y-20"
      ref={setupContainer}
      style={isExiting
        ? { animation: `slideout ${transitionTime}ms linear 1` }
        : {}}
    >
      <div class="text-2xl space-y-4">
        <div>Hi There!</div>
        <div>Let's start configuring your AI shopping assistant.</div>
      </div>
      <button
        class="bg-[#104E4A] hover:bg-[#051816] font-light py-4 px-6 rounded-[3rem] text-sm"
        type="button"
        onClick={handleClick}
      >
        <div class="flex flex-row items-center">
          <span class="mr-4">Start</span>
          <Icon id="ArrowRight" size={24} />
        </div>
      </button>
    </div>
  );
}
