// page.tsx

import React from "react";
import { CardHoverEffectDemo } from "@/components/HoveredCards";

const projects = [
  {
    title: "Customer Lifetime Value Calculator (CLTV)",
    description:
      "Customer Life Time Value is the predicted net profit attributed to the entire future relationship with a customer. CLTV also defines the upper limit for Customer acquisition.",
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
      "The Marketing Originated Customer % is a ratio that shows what new business is driven by marketing, by determining which portion of your total customer acquisitions directly originated from marketing efforts.",
    link: "https://google.com",
  },
  {
    title: "Marketing Influenced Customer %",
    description:
      "The Marketing Influenced Customer % takes into account all of the new customers that marketing interacted with while they were leads, anytime during the sales process.",
    link: "https://meta.com",
  },
  {
    title: "Email Marketing ROI Calculator",
    description:
      "Investing your money in any marketing channel without forecasting its ROI is simply just exposing your funds to risks. To avoid such risks, ROI calculators are widely used to measure any uncertainty in your plan.",
    link: "https://amazon.com",
  },
  {
    title: "Online Marketing Conversion Calculator",
    description:
      "This online marketing conversion calculator allows you to evaluate the entire process of internet sales and marketing, from ad clicks to actual sales and ROI. It can be used to test your marketing funnel and determine whether your new digital marketing strategy is productive or needs further changes.",
    link: "https://microsoft.com",
  },
  {
    title: "Target ROAS Calculator",
    description:
      "Target ROAS calculator helps you evaluate targeted return on ad spend, a key metric that indicates the estimated effectiveness of marketing efforts. This target ROAS calculator helps in simply getting an idea of the targeted returns expected so that the user can evaluate actual performance against target performance.",
    link: "https://microsoft.com",
  },
  {
    title: "Average CPC Calculator",
    description:
      "Cost Per Click, popularly known as CPC, is a bidding strategy that has been helping marketers to reach the right audience based on the right keywords. CPC (cost per click) is a measure that determines how much advertisers pay for advertisements on websites or social media based on how many clicks the ad receives.",
    link: "https://microsoft.com",
  },
  {
    title: "Product Return Rate Calculator",
    description:
      "Business growth and performance do not solely depend on the sales of your product. Customer satisfaction and revenue are two important factors that determine the success of your product.",
    link: "https://microsoft.com",
  },
  {
    title: "Retention Rate Calculator",
    description:
      "The journey of a customer doesn’t end when he/she makes a purchase. In fact, it begins there. Most businesses forget to understand that it costs significantly more to acquire new clients than it does to keep existing ones.",
    link: "https://microsoft.com",
  },
  {
    title: "Redemption Rate Calculator",
    description:
      "One of the most significant KPIs for tracking loyalty programs is the incentive redemption rate, also known as the rewards redemption rate. When compared to the total number of incentives granted, it counts how many incentives have been redeemed.",
    link: "https://microsoft.com",
  },
  {
    title: "Repeat Purchase Rate Calculator",
    description:
      "The number of customers who have made multiple purchases in a certain time period is known as the repurchase rate (also known as the repeat buy rate). Every brand must monitor the repurchase rate in order to evaluate the effectiveness of its marketing and customer retention strategies.",
    link: "https://microsoft.com",
  },
  {
    title: "Loyal Customer Rate Calculator",
    description:
      "Customer loyalty is a continuing emotional bond between you and your customers that shows their willingness to interact with you and make repeat purchases from you as opposed to your competition.",
    link: "https://microsoft.com",
  },
  {
    title: "Burn Rate and Cash Runway Calculator",
    description:
      "Cash flow is one important indicator of a successful company. Thus, lowering the burn rate should always be one of the primary concerns of a founder.",
    link: "https://microsoft.com",
  },
  {
    title: "Rule of 40 Calculator",
    description:
      "SaaS companies are businesses that use software to offer services to clients. It’s a more affordable option than the outdated one-time software purchase that requires customers to host, implement, and maintain it themselves.",
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
