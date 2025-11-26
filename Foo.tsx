//09
import React from "react";

export default function EventEditor({
  values,
  onChange,
  onAdd
}) {
  return (
    <div className="grid grid-cols-[150px_1fr] gap-y-4 gap-x-6 p-4 bg-[#0f1114] text-white">

      <label className="self-center">Start (date & time)</label>
      <input
        type="datetime-local"
        value={values.start}
        onChange={e => onChange("start", e.target.value)}
        className="w-full bg-[#1a1d21] border border-gray-600 rounded px-2 py-1"
      />

      <label className="self-center">End (date & time)</label>
      <input
        type="datetime-local"
        value={values.end}
        onChange={e => onChange("end", e.target.value)}
        className="w-full bg-[#1a1d21] border border-gray-600 rounded px-2 py-1"
      />

      <label className="self-center">Weight</label>
      <input
        type="number"
        step="0.01"
        value={values.weight}
        onChange={e => onChange("weight", e.target.value)}
        className="w-full bg-[#1a1d21] border border-gray-600 rounded px-2 py-1"
      />

      <label className="self-center">Description</label>
      <input
        type="text"
        value={values.description}
        onChange={e => onChange("description", e.target.value)}
        className="w-full bg-[#1a1d21] border border-gray-600 rounded px-2 py-1"
      />

      <label className="self-center">Event Type</label>
      <select
        value={values.eventType}
        onChange={e => onChange("eventType", e.target.value)}
        className="w-full bg-[#1a1d21] border border-gray-600 rounded px-2 py-1"
      >
        {values.eventTypeOptions.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>

      <label className="self-center">CCY</label>
      <select
        value={values.ccy}
        onChange={e => onChange("ccy", e.target.value)}
        className="w-full bg-[#1a1d21] border border-gray-600 rounded px-2 py-1"
      >
        {values.ccyOptions.map(ccy => (
          <option key={ccy} value={ccy}>{ccy}</option>
        ))}
      </select>

      <div />
      <button
        onClick={onAdd}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium"
      >
        Add
      </button>

    </div>
  );
}


import React, { useState } from "react";
import EventEditor from "./EventEditor";

export default function Panel() {
  const [form, setForm] = useState({
    start: "",
    end: "",
    weight: "",
    description: "",
    eventType: "",
    ccy: "",
    eventTypeOptions: ["ADDVOL", "MULTIVAR", "SOMETHING"],
    ccyOptions: ["USD", "JPY", "EUR", "GBP"]
  });

  const update = (field, value) =>
    setForm(f => ({ ...f, [field]: value }));

  const addEvent = () => {
    // dispatch to Redux here
    console.log("Adding event:", form);
  };

  return (
    <EventEditor values={form} onChange={update} onAdd={addEvent} />
  );
}