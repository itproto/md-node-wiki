input[type="date"]::-webkit-calendar-picker-indicator,
input[type="datetime-local"]::-webkit-calendar-picker-indicator {
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='red'><path d='M6 1v2H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-3V1h-2v2H8V1H6zm11 5H3v10h14V6z'/></svg>") center no-repeat;
  color: transparent;      /* hide built-in icon */
  opacity: 1;
}
