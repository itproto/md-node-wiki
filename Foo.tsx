const DATE_TIME_FORMAT = /^(\d{4})(\d{2})(\d{2}) (\d{2})(\d{2})$/;

export function DateTimeTextEditor(props) {
  const [value, setValue] = useState("");

  // Format timestamp or Date into your desired string
  const formatIn = v => {
    if (!v) return "";
    const d = new Date(v);
    const yyyy = d.getFullYear().toString();
    const dd   = String(d.getDate()).padStart(2, "0");
    const mm   = String(d.getMonth() + 1).padStart(2, "0");
    const HH   = String(d.getHours()).padStart(2, "0");
    const MM   = String(d.getMinutes()).padStart(2, "0");
    return `${yyyy}${dd}${mm} ${HH}${MM}`;
  };

  // Take the string back to timestamp (or keep string if you want)
  const parseOut = s => {
    if (!DATE_TIME_FORMAT.test(s)) return props.value;
    const yyyy = s.slice(0, 4);
    const dd   = s.slice(4, 6);
    const mm   = s.slice(6, 8);
    const HH   = s.slice(9, 11);
    const MM   = s.slice(11, 13);
    return new Date(`${yyyy}-${mm}-${dd}T${HH}:${MM}:00`).getTime();
  };

  useEffect(() => {
    setValue(formatIn(props.value));
  }, []);

  return (
    <input
      autoFocus
      style={{ width: "100%", height: "100%" }}
      value={value}
      onChange={e => setValue(e.target.value)}
      onBlur={() => props.stopEditing()}
      onKeyDown={e => {
        if (e.key === "Enter") props.stopEditing();
      }}
    />
  );
}

// Required by AG Grid
DateTimeTextEditor.prototype.getValue = function () {
  return parseOut(this.state.value);
};
