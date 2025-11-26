<div className="w-full max-w-[420px] p-4 bg-[#0f1114] text-white
                grid grid-cols-[140px_1fr] gap-y-4 gap-x-6">

  <label className="self-center">Start (date & time)</label>
  <input
    type="datetime-local"
    className="w-full bg-[#1a1d21] border border-gray-600 rounded px-2 py-1"
  />

  <label className="self-center">End (date & time)</label>
  <input
    type="datetime-local"
    className="w-full bg-[#1a1d21] border border-gray-600 rounded px-2 py-1"
  />

  <label className="self-center">Weight</label>
  <input
    type="number"
    step="0.01"
    className="w-full bg-[#1a1d21] border border-gray-600 rounded px-2 py-1"
  />

  <label className="self-center">Description</label>
  <input
    type="text"
    className="w-full bg-[#1a1d21] border border-gray-600 rounded px-2 py-1"
  />

  <label className="self-center">Event Type</label>
  <select
    className="w-full bg-[#1a1d21] border border-gray-600 rounded px-2 py-1"
  >
    <option>ADDVOL</option>
  </select>

  <label className="self-center">CCY</label>
  <select
    className="w-full bg-[#1a1d21] border border-gray-600 rounded px-2 py-1"
  >
    <option>USD</option>
  </select>

  <div />
  <button
    className="bg-blue-600 hover:bg-blue-700 w-full px-4 py-2 rounded font-medium"
  >
    Add
  </button>
</div>
