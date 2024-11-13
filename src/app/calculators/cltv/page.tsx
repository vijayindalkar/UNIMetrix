"use client"
import React from "react";
import { useState } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { cn } from "@/lib/utils";

export default function CLTVCalculator() {
  const [annualRevenue, setAnnualRevenue] = useState(0);
  const [relationshipYears, setRelationshipYears] = useState(0);
  const [acquisitionCost, setAcquisitionCost] = useState(0);
  const [cltv, setCltv] = useState<number | null>(null);

  const calculateCLTV = () => {
    const calculatedCltv = annualRevenue * relationshipYears - acquisitionCost;
    setCltv(calculatedCltv);
  };

  return (

    
    <div className=" pt-24 max-w-xl mx-auto">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl pt-10 md:text-2xl lg:text-5xl font-sans py-2 md:pb-5 font-bold tracking-tight">
        Customer Lifetime Value (CLTV) Calculator
      </h2>

      <p className="text-lg	 text-center text-gray-700 dark:text-gray-300 my-6">
        Calculate the estimated net profit from a customer's future relationship
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 
  <div className="space-y-4">
    <div>
      <LabelInputContainer>
        <Label htmlFor="Annual Revenue per Customer">Annual Revenue per Customer</Label>
        <Input
          id="Annual_Revenue_per_Customer"
          type="number"
          value={annualRevenue}
          onChange={(e) => setAnnualRevenue(Number(e.target.value))}
        />
      </LabelInputContainer>
    </div>
    <div>
      <LabelInputContainer>
        <Label htmlFor="Customer Relationship in Years">Customer Relationship in Years</Label>
        <Input
          id="Customer_Relationship_in_Years"
          type="number"
          value={relationshipYears}
          onChange={(e) => setRelationshipYears(Number(e.target.value))}
        />
      </LabelInputContainer>
    </div>
    <div>
      <LabelInputContainer>
        <Label htmlFor="Customer Acquisition Cost">Customer Acquisition Cost</Label>
        <Input
          id="Customer_Acquisition_Cost"
          type="number"
          value={acquisitionCost}
          onChange={(e) => setAcquisitionCost(Number(e.target.value))}
        />
      </LabelInputContainer>
    </div>

    <button
      className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
      onClick={calculateCLTV}
    >
      Calculate CLTV &rarr;
      <BottomGradient />
    </button>
  </div>

  <div>
    {cltv !== null && (
      <div className="mt-4 p-4 bg-gradient-to-r from-blue-400 to-emerald-400  text-black dark:text-black rounded-md">
        <h3 className="text-lg font-bold">CLTV Result</h3>
        <p>
          The Customer Lifetime Value is:{" "}
          <span className="font-semibold">${cltv}</span>
        </p>
      </div>
    )}
  </div>
</div>


    </div>
  );
}


const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
