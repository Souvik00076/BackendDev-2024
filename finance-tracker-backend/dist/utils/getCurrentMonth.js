"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentMonth = void 0;
const getCurrentMonth = () => {
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  // Get the current date
  const now = new Date();
  // Extract the current month (0-based index)
  const currentMonthIndex = now.getMonth();
  const currentMonthName = months[currentMonthIndex];
  return currentMonthName;
};
exports.getCurrentMonth = getCurrentMonth;
