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

  // --- inline reusable components ---
  const InputField = ({
    label,
    value,
    onChange,
  }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
  }) => (
    <div className="flex flex-col gap-[2px] w-full text-sm text-gray-200">
      <label className="text-[12px] leading-none">{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="h-[24px] px-[8px] bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.15)] 
                   rounded-t-[2px] text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
    <div className="flex flex-col gap-[2px] text-sm text-gray-200 w-[220px]">
      <label className="text-[12px] leading-none">{label}</label>
      <div
        className="flex items-center justify-between h-[24px] px-[8px] bg-[rgba(255,255,255,0.05)] 
                   border-t border-[rgba(255,255,255,0.10)] rounded-[2px]"
      >
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className="bg-transparent w-full text-gray-100 text-sm focus:outline-none appearance-none"
        >
          {options.map(opt => (
            <option key={opt} value={opt} className="bg-gray-800 text-gray-100">
              {opt}
            </option>
          ))}
        </select>
      </div>
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

  // --- main layout ---
  return (
    <div className="flex flex-col bg-gray-900 border-t border-gray-700 p-3 gap-3 text-gray-200">
      <div className="flex gap-4 flex-wrap items-start">
        <SelectField
          label="Corr"
          options={["Vol Parameter Corr", "Shift Corr", "Beta Corr"]}
          value={corrType}
          onChange={setCorrType}
        />

        <div className="flex gap-4 flex-1 flex-wrap">
          <InputField label="Short Corr" value={fields.shortCorr} onChange={v => handleChange("shortCorr", v)} />
          <InputField label="Long Corr" value={fields.longCorr} onChange={v => handleChange("longCorr", v)} />
          <InputField label="Mean Rev Corr" value={fields.meanRevCorr} onChange={v => handleChange("meanRevCorr", v)} />
        </div>
      </div>

      <div className="flex gap-4 flex-wrap">
        <InputField label="Initial Shift Corr" value={fields.initShiftCorr} onChange={v => handleChange("initShiftCorr", v)} />
        <InputField label="Mean Rev Initial Shift Corr" value={fields.meanRevInitShiftCorr} onChange={v => handleChange("meanRevInitShiftCorr", v)} />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <ActionButton label="Clear" onClick={clearAll} />
        <ActionButton label="Copy Finals to ATMs" onClick={copyToAtms} variant="primary" />
      </div>
    </div>
  );
};
