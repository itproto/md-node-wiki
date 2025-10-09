import React, { useState } from "react";

export const CorrPanel: React.FC = () => {
  const [corrType, setCorrType] = useState("Vol Parameter Corr");
  const [fields, setFields] = useState({
    initShiftCorr: "-88.00",
    shortCorr: "-88.00",
    longCorr: "-88.00",
    meanRevInitShiftCorr: "-88.00",
    meanRevCorr: "-88.00",
  });

  const handleChange = (k: keyof typeof fields, v: string) =>
    setFields(prev => ({ ...prev, [k]: v }));

  const clearAll = () =>
    setFields(Object.fromEntries(Object.keys(fields).map(k => [k, ""])) as typeof fields);

  const copyToAtms = () => console.log("Copy Finals:", fields);

  // --- inline reusable field ---
  const InlineField = ({
    label,
    value,
    onChange,
    className = "",
  }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    className?: string;
  }) => (
    <div className={`flex items-center h-[24px] px-[8px] gap-[4px] ${className}`}>
      <span className="text-[11px] font-normal text-gray-300 w-max">{label}</span>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-[46px] h-[24px] bg-[rgba(255,255,255,0.05)] 
                   border-b border-[rgba(255,255,255,0.15)] rounded-t-[2px]
                   text-[11px] text-gray-100 text-center focus:outline-none
                   focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );

  // --- inline dropdown ---
  const CorrSelect = ({
    value,
    onChange,
  }: {
    value: string;
    onChange: (v: string) => void;
  }) => (
    <div className="flex items-center h-[24px] px-[8px] gap-[4px]">
      <span className="text-[11px] text-gray-300">Corr</span>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="h-[24px] bg-[rgba(255,255,255,0.05)] 
                   border-t border-[rgba(255,255,255,0.10)]
                   rounded-[2px] text-[11px] text-gray-100 px-[6px]
                   focus:outline-none"
      >
        {["Vol Parameter Corr", "Shift Corr", "Beta Corr"].map(opt => (
          <option key={opt} value={opt} className="bg-gray-800 text-gray-100">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

  const ActionButton = ({
    label,
    onClick,
    primary = false,
  }: {
    label: string;
    onClick: () => void;
    primary?: boolean;
  }) => (
    <button
      onClick={onClick}
      className={`h-[24px] px-4 text-[11px] rounded-[2px] font-medium ${
        primary
          ? "bg-blue-600 hover:bg-blue-700 text-white"
          : "bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] text-gray-200"
      }`}
    >
      {label}
    </button>
  );

  // --- layout ---
  return (
    <div
      className="flex flex-col bg-gray-900 border-t border-gray-700 px-3 py-2 text-gray-200
                 text-[11px] font-['Roboto'] gap-2"
    >
      {/* Inline field row */}
      <div className="flex flex-wrap items-center gap-[8px]">
        <CorrSelect value={corrType} onChange={setCorrType} />
        <InlineField
          label="Initial Shift Corr"
          value={fields.initShiftCorr}
          onChange={v => handleChange("initShiftCorr", v)}
        />
        <InlineField
          label="Short Corr"
          value={fields.shortCorr}
          onChange={v => handleChange("shortCorr", v)}
        />
        <InlineField
          label="Long Corr"
          value={fields.longCorr}
          onChange={v => handleChange("longCorr", v)}
        />
        <InlineField
          label="Mean Rev Initial Shift Corr"
          value={fields.meanRevInitShiftCorr}
          onChange={v => handleChange("meanRevInitShiftCorr", v)}
        />
        <InlineField
          label="Mean Rev Corr"
          value={fields.meanRevCorr}
          onChange={v => handleChange("meanRevCorr", v)}
        />
      </div>

      {/* Buttons row */}
      <div className="flex justify-end gap-2 pt-[2px]">
        <ActionButton label="Clear" onClick={clearAll} />
        <ActionButton label="Copy Finals to ATMs" onClick={copyToAtms} primary />
      </div>
    </div>
  );
};
