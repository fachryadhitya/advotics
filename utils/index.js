import {
  addDays,
  subDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
  startOfYear,
  endOfYear,
  addYears,
} from "date-fns";

export const defineds = {
  startOfWeek: startOfWeek(new Date()),
  endOfWeek: endOfWeek(new Date()),
  startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
  endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
  startOfToday: startOfDay(new Date()),
  startOfLastSevenDay: startOfDay(addDays(new Date(), -7)),
  startOfLastThirtyDay: startOfDay(addDays(new Date(), -30)),
  startOfLastNintyDay: startOfDay(addDays(new Date(), -90)),
  endOfToday: endOfDay(new Date()),
  startOfYesterday: startOfDay(addDays(new Date(), -1)),
  endOfYesterday: endOfDay(addDays(new Date(), -1)),
  startOfMonth: startOfMonth(new Date()),
  endOfMonth: endOfMonth(new Date()),
  startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
  endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
  startOfYear: startOfYear(new Date()),
  endOfYear: endOfYear(new Date()),
  startOflastYear: startOfYear(addYears(new Date(), -1)),
  endOflastYear: endOfYear(addYears(new Date(), -1)),
};

export const dummyData = [
  {
    name: "Nama Produk",
    image:
      "https://images.unsplash.com/photo-1541727687969-ce40493cd847?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80",
    harga: 20_000,
    qty: 20,
  },
  {
    name: "Nama Produk",
    image:
      "https://images.unsplash.com/photo-1541727687969-ce40493cd847?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80",
    harga: 20_000,
    qty: 20,
  },
  {
    name: "Nama Produk",
    image:
      "https://images.unsplash.com/photo-1541727687969-ce40493cd847?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80",
    harga: 20_000,
    qty: 20,
  },
  {
    name: "Nama Produk",
    image:
      "https://images.unsplash.com/photo-1541727687969-ce40493cd847?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80",
    harga: 20_000,
    qty: 20,
  },
  {
    name: "Nama Produk",
    image:
      "https://images.unsplash.com/photo-1541727687969-ce40493cd847?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80",
    harga: 20_000,
    qty: 20,
  },
];

export const data1 = [
  {
    name: "Jan",
    gross: 590,
    nett: 800,
    apv: 1400,
    upt: 490,
  },
  {
    name: "Feb",
    gross: 868,
    nett: 967,
    apv: 1506,
    upt: 590,
  },
  {
    name: "Mar",
    gross: 1397,
    nett: 1098,
    apv: 989,
    upt: 350,
  },
  {
    name: "Apr",
    gross: 1480,
    nett: 1200,
    apv: 1228,
    upt: 480,
  },
  {
    name: "May",
    gross: 1520,
    nett: 1108,
    apv: 1100,
    upt: 460,
  },
  {
    name: "June",
    gross: 1400,
    nett: 680,
    apv: 1700,
    upt: 380,
  },
];

export const data2 = [
  {
    name: "Jan",
    gross: 590,
    nett: 800,
    apv: 1400,
    upt: 490,
  },
  {
    name: "Feb",
    gross: 868,
    nett: 967,
    apv: 1506,
    upt: 590,
  },
];
