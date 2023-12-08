import { useEffect, useState } from "preact/hooks";

export function SetupStep({ onSetupFinish }: { onSetupFinish: () => void }) {
  const storeType = "Shopify";
  const [readStep, setReadStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  const msgObj = {
    catalog: "Reading your catalog...",
    discount: "Reading your discounts...",
    brand: "Reading about your brand...",
  };

  useEffect(() => {
    if (readStep < 3) {
      setLoading(true);
      setTimeout(() => {
        setReadStep(readStep + 1);
        // Simulate reading data
        if (readStep === 0) {
          setMessages([msgObj.catalog]);
        }
        if (readStep === 1) {
          setMessages([msgObj.catalog, msgObj.discount]);
        }
        if (readStep === 2) {
          setMessages([
            msgObj.catalog,
            msgObj.discount,
            msgObj.brand,
          ]);
        }
      }, 1000);
    }
    if (readStep === 3) {
      setTimeout(() => {
        onSetupFinish();
      }, 2000);
    }
  }, [readStep]);

  return (
    <>
      <style>
        {`@keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }`}
      </style>
      <div
        class="text-2xl space-y-4 text-white mb-8"
        style={{ animation: "slidein 0.3s linear" }}
      >
        <div>
          I see that your store runs on{" "}
          <span class="text-[#08F67C]">{storeType}</span>! Let me take a look at
          your products and discounts.
        </div>
        <div class={`space-y-4 (${readStep} > 0 ? pb-32 : '')`}>
          {messages.map((message, index) => (
            <div
              key={index}
              style={{ "animation": "fadein 0.4s linear" }}
              class="flex flex-row space-x-3"
            >
              <div>
                {message}
              </div>
              <Loader />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Loader() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Loader anim">
        <path
          id="Subtract"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.6362 23.3638 2.66667 16 2.66667C8.6362 2.66667 2.66667 8.6362 2.66667 16C2.66667 23.3638 8.6362 29.3333 16 29.3333Z"
          fill="url(#paint0_angular_36_20681)"
        />
        <path
          id="Ellipse 8 (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.3758 12.8009C31.1061 12.7067 31.7745 13.2223 31.8687 13.9527C31.9563 14.6316 32.0003 15.3154 32.0003 16C32.0003 16.7364 31.4033 17.3333 30.6669 17.3333C29.9306 17.3333 29.3336 16.7364 29.3336 16C29.3336 15.4295 29.297 14.8597 29.224 14.2939C29.1298 13.5636 29.6454 12.8951 30.3758 12.8009Z"
          fill="#3AE180"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_angular_36_20681"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16 16) scale(16)"
        >
          <stop stopColor="#3AE180" stopOpacity="0" />
          <stop offset="1" stopColor="#3AE180" />
        </radialGradient>
      </defs>
    </svg>
  );
}
