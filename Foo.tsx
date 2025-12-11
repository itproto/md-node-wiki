// Props come from AG Grid
// value: current value
// initialValue: value when editing started
// onValueChange: call this whenever your logical value changes

const DISPLAY_FORMAT = 'YYYYMMDD HH:mm';

const DateTimeEditor = ({ value, initialValue, onValueChange }) => {
  const [text, setText] = React.useState(
    value ? moment(value).format(DISPLAY_FORMAT) : ''
  );

  // Optional: keep local text in sync if grid changes value while editing
  React.useEffect(() => {
    if (value) {
      setText(moment(value).format(DISPLAY_FORMAT));
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);

    const m = moment(newText, DISPLAY_FORMAT, true);
    if (m.isValid()) {
      // AG Grid will hold this edited value and only write it to row data
      // when editing stops
      onValueChange(m.toDate());
    } else {
      // You can choose to pass null or keep previous value
      onValueChange(null);
    }
  };

  // Optional callbacks like isCancelAfterEnd / validation etc
  useGridCellEditor({
    isCancelAfterEnd: () =>
      !moment(text, DISPLAY_FORMAT, true).isValid(),
  });

  return (
    <input
      id="ag-grid-datetime-input"
      type="text"
      value={text}
      onChange={handleChange}
      placeholder="yyyymmdd hh:mm"
      style={{ width: '100%' }}
      autoFocus
    />
  );
};
