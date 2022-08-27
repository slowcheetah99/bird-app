export const useValidation = (sample, tester) => {
  if (sample) {
    const passed = tester.test(sample);
    if (!passed) {
    }
  }
};

const passed = emailTest.test(text);
if (text) {
  if (!passed) {
    setTextError("Please enter a valid email address");
    setTimeout(() => {
      setTextError("");
    }, 5000);
    return;
  }
  setNext(true);
  return;
}
setTextError("Please fill out this field");
setTimeout(() => {
  setTextError("");
}, 5000);
