// page.tsx

import React from "react";
import { CardHoverEffectDemo } from "@/components/HoveredCards";

const projects = [
  {
    title: "Customer Lifetime Value Calculator (CLTV)",
    description:
        "CLTV predicts net profit from a customer's future relationship, defining the upper limit for acquisition",
    link: "/calcultors/cltv",
  },
  {
    title: "Marketing % Of Customer Acquisition Cost",
    description:
      "The Marketing % of Customer Acquisition Cost is the marketing portion of your total CAC, calculated as a percentage of the overall CAC.",
    link: "https://netflix.com",
  },
  {
    title: "Marketing Originated Customer %",
    description:
      "The Marketing Originated Customer % indicates the portion of new customers acquired through marketing efforts",
    link: "https://google.com",
  },
  {
    title: "Marketing Influenced Customer %",
    description:
      "The Marketing Influenced Customer % reflects new customers that marketing engaged with during the sales process.",
    link: "https://meta.com",
  },
  {
    title: "Email Marketing ROI Calculator",
    description:
      "Investing in marketing without forecasting ROI exposes your funds to risks; ROI calculators help mitigate this.",
    link: "https://amazon.com",
  },
  {
    title: "Online Marketing Conversion Calculator",
    description:
      "This online calculator helps evaluate the entire sales process, from ad clicks to sales, testing your marketing funnel and strategy.",
    link: "https://microsoft.com",
  },
  {
    title: "Target ROAS Calculator",
    description:
      "Target ROAS calculator helps evaluate expected return on ad spend, comparing actual performance against targets.",
    link: "https://microsoft.com",
  },
  {
    title: "Average CPC Calculator",
    description:
      "Cost Per Click (CPC) is a bidding strategy where advertisers pay based on ad clicks, targeting the right audience",
    link: "https://microsoft.com",
  },
  {
    title: "Product Return Rate Calculator",
    description:
      "Business growth relies not just on sales, but also on customer satisfaction and revenue for success.",
    link: "https://microsoft.com",
  },
  {
    title: "Retention Rate Calculator",
    description:
      "A customer’s journey starts after a purchase, and retaining existing clients is more cost-effective than acquiring new ones.",
    link: "https://microsoft.com",
  },
  {
    title: "Redemption Rate Calculator",
    description:
      "Reward redemption rate measures the percentage of incentives redeemed compared to the total granted in loyalty programs.",
    link: "https://microsoft.com",
  },
  {
    title: "Repeat Purchase Rate Calculator",
    description:
      "The repurchase rate measures the number of customers making multiple purchases, reflecting marketing and retention effectiveness",
    link: "https://microsoft.com",
  },
  {
    title: "Loyal Customer Rate Calculator",
    description:
      "Customer loyalty is an emotional bond that drives repeat purchases and preference over competitors",
    link: "https://microsoft.com",
  },
  {
    title: "Burn Rate and Cash Runway Calculator",
    description:
      "Cash flow is crucial for success, making it essential for founders to focus on lowering burn rate.",
    link: "https://microsoft.com",
  },
  {
    title: "Rule of 40 Calculator",
    description:
      "SaaS companies provide software-based services, offering a more affordable alternative to traditional one-time software purchases.",
    link: "https://microsoft.com",
  },
];

export default function AllServices() {
  return (
    <div className="pt-24">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-1xl pt-10 md:text-2xl lg:text-5xl font-sans py-2 md:pb-5 relative z-20 font-bold tracking-tight ">
        Marketing Calculators
      </h2>
      <CardHoverEffectDemo projects={projects} /> 
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-1xl pt-10 md:text-2xl lg:text-5xl font-sans py-2 md:pb-5 relative z-20 font-bold tracking-tight ">
        PPC Calculator
      </h2>
      {/* <CardHoverEffectDemo projects={projects} />  */}
    </div>
  );
}
