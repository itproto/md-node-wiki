function pythonFormatFloat(n) {
  if (n === 0) return "0.0";

  const absn = Math.abs(n);

  // Python switches to exponential below 1e-4 or above/equal 1e16
  if (absn < 1e-4 || absn >= 1e16) {
    // format like Python: exponential, lowercase 'e', exponent at least 2 digits
    return n.toExponential().replace(/e\+?(-?0*)(\d+)/, (m, zeros, digits) => {
      return "e" + (n < 0 && !m.includes("e-") ? "-" : "") + digits.padStart(2, "0");
    });
  }

  // fixed-point display similar to Python (remove unnecessary trailing zeros)
  let s = n.toString();
  if (!s.includes(".")) s += ".0";
  return s;
}
