import { useEffect, useState } from "preact/hooks";

export function SetupStep() {
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
  }, [readStep]);

  return (
    <div class="text-2xl space-y-4 text-white mb-8">
      <div>
        I see that your store runs on{" "}
        <span class="text-[#08F67C]">{storeType}</span>! Let me take a look at
        your products and discounts.
      </div>
      <div class={`space-y-4 (${readStep} > 0 ? pb-32 : '')`}>
        {messages.map((message, index) => (
          <div class="flex flex-row space-x-3">
            <div key={index}>{message}</div>
            <object type="image/svg+xml" data="./loader.svg"></object>
          </div>
        ))}
      </div>
    </div>
  );
}
