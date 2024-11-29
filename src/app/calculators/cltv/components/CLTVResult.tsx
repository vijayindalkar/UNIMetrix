import React from 'react';

interface CLTVResultProps {
  cltv: number | null;
}

export function CLTVResult({ cltv }: CLTVResultProps) {
  if (cltv === null) return null;

  return (
    <div className="mt-4 p-4 bg-gradient-to-r from-blue-400 to-emerald-400 text-black dark:text-black rounded-md">
      <h3 className="text-lg font-bold">CLTV Result</h3>
      <p>
        The Customer Lifetime Value is:{" "}
        <span className="font-semibold">${cltv.toLocaleString()}</span>
      </p>
    </div>
  );
}