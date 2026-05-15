import { useState } from "react";

const additionalInfo = (
    <div>
        <p className="text-[20px]! tracking-widest uppercase text-white mb-4!">
            Product Specifications
        </p>
        {[
            ["Material", "100% Premium Long-Staple Cotton"],
            ["Thread Count", "600 TC — Ultra-fine weave"],
            ["Origin", "Crafted in Portugal"],
            ["Dimensions", 'King: 108" × 98"  |  Queen: 90" × 90"'],
            ["Weight", "Lightweight — 6.5 oz/yd²"],
            ["Finish", "Sateen — Silky, luminous surface"],
            ["Care", "Machine wash cold, tumble dry low"],
            ["Certifications", "OEKO-TEX® Standard 100 Certified"],
        ].map(([label, val]) => (
            <div key={label} className="flex gap-8! py-2! border-b border-white/5 text-sm">
                <span className="text-white/35! italic min-w-[160px]!">{label}</span>
                <span className="text-white/75!">{val}</span>
            </div>
        ))}
        <hr className="border-white my-6!" />
        <p className="text-[15px]! tracking-widest uppercase text-white mb-3!">About This Piece</p>
        <p className="text-sm! text-white/65 leading-loose! italic">
            Woven from the finest Egyptian cotton harvested at peak season, each thread is selected
            for its natural luster and extraordinary softness. The sateen weave catches light with a
            gentle sheen — understated elegance that only deepens with every wash.
        </p>
    </div>
);

const reviews = (
    <div>
        <p className="text-xs tracking-widest uppercase text-white mb-4!">Customer Reviews</p>
        {[
            { name: "Sophia A.", date: "March 2025", stars: 5, text: `"Genuinely the most luxurious sheets I have ever slept in. The weight is perfect — cool in summer, cozy in winter. Worth every penny and then some."` },
            { name: "James R.", date: "February 2025", stars: 5, text: `"I bought these as a gift for my wife and she hasn't stopped talking about them. The sateen finish feels like sleeping inside a cloud."` },
            { name: "Nadia K.", date: "January 2025", stars: 4, text: `"Beautiful quality and the colour is exactly as shown. Took one star off only because shipping took slightly longer than expected."` },
            { name: "Lena M.", date: "December 2024", stars: 5, text: `"Second purchase. The quality is absolutely consistent — this brand has earned a lifelong customer."` },
        ].map(({ name, date, stars, text }) => (
            <div key={name} className="py-5! border-b border-white/7">
                <div className="flex items-baseline gap-3! mb-1!">
                    <span className="text-purple-400 tracking-wider">{"★".repeat(stars)}{"☆".repeat(5 - stars)}</span>
                    <span className="text-white! text-sm font-medium tracking-wide">{name}</span>
                    <span className="text-white/30! text-xs tracking-widest">{date}</span>
                </div>
                <p className="text-sm! text-white/60 leading-loose! italic">{text}</p>
            </div>
        ))}
    </div>
);

const shipping = (
    <div>
        <p className="text-xs tracking-widest uppercase text-white mb-5!">Shipping Policy</p>
        <p className="text-sm! text-white/70 leading-loose! mb-5!">
            Every order is handled with the same care that goes into crafting our products. Once your
            purchase is confirmed, our fulfillment team carefully inspects, folds, and packages your
            linens in our signature matte black box with tissue lining.
        </p>
        <p className="text-sm! text-white/70 leading-loose! mb-5!">
            <span className="text-purple-300! italic">Standard delivery</span> arrives within{" "}
            <span className="text-purple-300! italic">5 to 7 business days</span>. Our{" "}
            <span className="text-purple-300! italic">express service</span> guarantees delivery within{" "}
            <span className="text-purple-300! italic">2 to 3 business days</span> — available at checkout.
        </p>
        <p className="text-sm! text-white/70 leading-loose! mb-5!">
            We ship internationally to over 40 countries. International orders arrive within{" "}
            <span className="text-purple-300! italic">7 to 14 business days</span>. Import duties or taxes
            are the responsibility of the recipient and are not included in the listed price.
        </p>
        <p className="text-sm! text-white/70 leading-loose! mb-5!">
            All orders above <span className="text-purple-300! italic">$150</span> qualify for complimentary
            standard shipping. Once dispatched, you will receive a tracking number via email.
        </p>
        <p className="text-sm! text-white/70 leading-loose! mb-5!">
            In the rare event of a delay or damage in transit, our support team is available seven days
            a week to resolve matters swiftly and without complication.
        </p>
        <p className="text-xs! text-white/30 leading-loose! italic mt-8!">
            Shipping timelines are estimates and may vary during peak seasons or due to unforeseen
            carrier disruptions. We appreciate your patience and understanding.
        </p>
    </div>
);

const data = [
    { label: "Additional Information", value: "AdditionalInformation", content: additionalInfo },
    { label: "Reviews", value: "Reviews", content: reviews },
    { label: "Shipping", value: "shipping", content: shipping },
];

export default function ProductTabs() {
    const [active, setActive] = useState("AdditionalInformation");

    return (
        <div>
            <div className="flex justify-center items-center rounded-xl p-1! gap-0.5 w-full">
                {data.map(({ label, value }) => (
                    <button
                        key={value}
                        onClick={() => setActive(value)}
                        className={`flex items-center gap-2 px-10! py-2! text-sm rounded-lg cursor-pointer transition-all
              ${active === value
                                ? "bg-purple-600 text-white font-medium shadow-sm"
                                : "text-white"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="p-15! text-sm text-white leading-relaxed">
                {data.find((d) => d.value === active)?.content}
            </div>
        </div>
    );
}