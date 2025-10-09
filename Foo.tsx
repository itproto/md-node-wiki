import React, { useState } from "react";

export const CorrPanel: React.FC = () => {
  const [corrType, setCorrType] = useState("Vol Parameter Corr");
  const [fields, setFields] = useState({
    shortCorr: "-88.00",
    longCorr: "-88.00",
    meanRevCorr: "-88.00",
    initShiftCorr: "-88.00",
    meanRevInitShiftCorr: "-88.00",
  });

  const handleChange = (k: keyof typeof fields, v: string) =>
    setFields(prev => ({ ...prev, [k]: v }));

  const clearAll = () =>
    setFields(Object.fromEntries(Object.keys(fields).map(k => [k, ""])) as typeof fields);

  const copyToAtms = () => console.log("Copying finals to ATMs:", fields);

  // --- small reusable controls ---
  const InputField = ({
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
    <div className={`flex flex-col gap-[2px] ${className}`}>
      <label className="text-[12px] leading-none text-gray-300">{label}</label>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        className="h-[24px] px-[8px] bg-[rgba(255,255,255,0.05)]
                   border-b border-[rgba(255,255,255,0.15)]
                   rounded-t-[2px] text-gray-100 text-sm 
                   focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );

  const SelectField = ({
    label,
    options,
    value,
    onChange,
  }: {
    label: string;
    options: string[];
    value: string;
    onChange: (v: string) => void;
  }) => (
    <div className="flex flex-col gap-[2px] w-[220px]">
      <label className="text-[12px] leading-none text-gray-300">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="h-[24px] px-[8px] bg-[rgba(255,255,255,0.05)] 
                   border-t border-[rgba(255,255,255,0.10)] 
                   rounded-[2px] text-gray-100 text-sm 
                   focus:outline-none"
      >
        {options.map(opt => (
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
    variant = "secondary",
  }: {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
  }) => {
    const base = "px-4 h-[24px] text-sm rounded-[2px] font-medium";
    const style =
      variant === "primary"
        ? "bg-blue-600 hover:bg-blue-700 text-white"
        : "bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-gray-200 border border-[rgba(255,255,255,0.1)]";
    return (
      <button className={`${base} ${style}`} onClick={onClick}>
        {label}
      </button>
    );
  };

  // --- layout ---
  return (
    <div className="flex flex-col bg-gray-900 border-t border-gray-700 px-3 py-4 text-gray-200 gap-3">
      {/* Row 1: Corr dropdown + three inputs */}
      <div className="flex flex-row gap-4 items-end">
        <SelectField
          label="Corr"
          options={["Vol Parameter Corr", "Shift Corr", "Beta Corr"]}
          value={corrType}
          onChange={setCorrType}
        />
        <InputField
          label="Short Corr"
          value={fields.shortCorr}
          onChange={v => handleChange("shortCorr", v)}
          className="w-[140px]"
        />
        <InputField
          label="Long Corr"
          value={fields.longCorr}
          onChange={v => handleChange("longCorr", v)}
          className="w-[140px]"
        />
        <InputField
          label="Mean Rev Corr"
          value={fields.meanRevCorr}
          onChange={v => handleChange("meanRevCorr", v)}
          className="w-[160px]"
        />
      </div>

      {/* Row 2: two wider inputs */}
      <div className="flex flex-row gap-4 items-end">
        <InputField
          label="Initial Shift Corr"
          value={fields.initShiftCorr}
          onChange={v => handleChange("initShiftCorr", v)}
          className="flex-1 min-w-[260px]"
        />
        <InputField
          label="Mean Rev Initial Shift Corr"
          value={fields.meanRevInitShiftCorr}
          onChange={v => handleChange("meanRevInitShiftCorr", v)}
          className="flex-1 min-w-[260px]"
        />
      </div>

      {/* Row 3: buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <ActionButton label="Clear" onClick={clearAll} />
        <ActionButton label="Copy Finals to ATMs" onClick={copyToAtms} variant="primary" />
      </div>
    </div>
  );
};
