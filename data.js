import bcrypt from "bcryptjs";

const data = {
  admins: [
    {
      adminId: 1234,
      adminName: "Sadid",
      adminPassword: bcrypt.hashSync("sadid"),
      adminIs: true,
    },
    {
      adminId: 2609,
      adminName: "Tanmay",
      adminPassword: bcrypt.hashSync("tanmay"),
      adminIs: true,
    },
  ],
  departments: [
    {
      departmentName: "Web Development",
      departmentHead: "Sadid Shaikh",
      totalEmployee: 50,
    },
    {
      departmentName: "Marketing",
      departmentHead: "Tanmay Remble",
      totalEmployee: 13,
    },
    {
      departmentName: "App Development",
      departmentHead: "Harsh Patil",
      totalEmployee: 21,
    },
    {
      departmentName: "Support",
      departmentHead: "Ved K",
      totalEmployee: 85,
    },
  ],

  employee: [
    {
      employeeId: "6554",
      firstName: "Sadid",
      lastName: "Shaikh",
      email: "absdfs@gmail.com",
      phone: "3256478912",
      role: "FullStack WebDeveloper",
    },
    {
      employeeId: "53452",
      firstName: "Tanmay",
      lastName: "Remble",
      email: "abcsd@gmail.com",
      phone: "1234567890",
      role: "Node Developer",
    },
    {
      employeeId: "76762",
      firstName: "Harsh",
      lastName: "Patil",
      email: "abbfc@gmail.com",
      phone: "7620236431",
      role: "WordPress Developer",
    },
  ],

  activity: [
    {
      title: "Title One",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia praesentium dolores! Consequuntur similique iusto quam quae perspiciatis doloribus exercitationem voluptas, saepe voluptatibus nulla quisquam sunt explicabo fuga dignissimos sapiente. Amet, magni suscipit. Ab, consectetur ratione. Culpa error modi a neque, id beatae esse aperiam necessitatibus voluptas veniam hic dolor quidem rerum voluptates numquam impedit praesentium reiciendis quam provident qui.",
      author: "Ricpe",
    },
    {
      title: "Title Two",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia praesentium dolores! Consequuntur similique iusto quam quae perspiciatis doloribus exercitationem voluptas, saepe voluptatibus nulla quisquam sunt explicabo fuga dignissimos sapiente. Amet, magni suscipit. Ab, consectetur ratione. Culpa error modi a neque, id beatae esse aperiam necessitatibus voluptas veniam hic dolor quidem rerum voluptates numquam impedit praesentium reiciendis quam provident qui.",
      author: "Ricpe",
    },
  ],

  holidays: [
    {
      day: "Sunday",
      date: "26.01.2023",
      holiday: "Republic Day",
    },
    {
      day: "Saturday",
      date: "10.04.2023",
      holiday: "Ram Navmi",
    },
    {
      day: "Wednesday",
      date: "14.04.2023",
      holiday: "Ambedkar Jayanti",
    },
    {
      day: "Friday",
      date: "15.04.2023",
      holiday: "Good Friday",
    },
    {
      day: "Sunday",
      date: "03.05.2023",
      holiday: "Eid al-Fitr",
    },
    {
      day: "Monday",
      date: "15.08.2023",
      holiday: "Independence Day",
    },
    {
      day: "Monday",
      date: "02.10.2023",
      holiday: "Gandhi Jayanti",
    },
    {
      day: "Saturday",
      date: "24.10.2023",
      holiday: "Diwali",
    },
  ],

  accounts: [
    {
      invoiceNo: "Viit-3242",
      clients: "Google",
      type: "VISA",
      amount: "$4500.00",
    },
    {
      invoiceNo: "RCC-55844",
      clients: "STT Technology",
      type: "RUPAY",
      status: true,
      amount: "$1340.00",
    },
  ],
  events: [
    {
      startAt: "2021-11-21T18:00:00.000Z",
      endAt: "2021-11-21T19:00:00.000Z",
      summary: "test",
      color: "blue",
    },
    {
      startAt: "2021-11-21T18:00:00.000Z",
      endAt: "2021-11-21T19:00:00.000Z",
      summary: "test",
      color: "blue",
    },
    {
      startAt: "2022-09-25T18:00:00.000Z",
      endAt: "2022-10-20T19:00:00.000Z",
      timezoneStartAt: "Europe/Berlin", // optional
      summary: "We are starting work for a client from America",
      color: "red",
    },
    {
      startAt: "2022-10-25T18:00:00.000Z",
      endAt: "2022-10-27T19:00:00.000Z",
      summary: "Test",
      color: "green",
    },
  ],
  projects: [
    {
      clientName: "Tanmay Remble",
      project: "Admin Panel",
      projectCost: 800,
      payment: "Done",
      status: "Delivered",
    },
    {
      clientName: "Sadid Shaikh",
      project: "One Page For Portfolio",
      projectCost: 500,
    },
    {
      clientName: "Ved K",
      project: "Ecommerce Website",
      projectCost: 900,
    },
  ],
  users: [
    {
      userId: 2584,
      firstName: "Miljan",
      lastName: "Peric",
      email: "miljanperic@gmail.com",
      mobile: "+381/000-0000",
      role: "Full-Stack WebDeveloper",
      roleType: "Employee",
      password: bcrypt.hashSync("miljan"),
    },
    {
      userId: 3424,
      firstName: "John",
      lastName: "Deep",
      email: "deep@gmail.com",
      mobile: "+381/111-0000",
      role: "Boss",
      roleType: "Super Admin",
      password: bcrypt.hashSync("john"),
    },
    {
      userId: 6456,
      firstName: "Ana",
      lastName: "Simic",
      email: "ana@gmail.com",
      mobile: "+381/111-1111",
      role: "HR",
      roleType: "HR Admin",
      password: bcrypt.hashSync("ana"),
    },
  ],

  salaryChart: [
    {
      label: "Income",
      data: [3430, 4302, 2345, 4330, 4322, 2990, 1890],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Expense",
      data: [2500, 4302, 1900, 2654, 5434, 4564, 2200],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "January",
      salaryIncome: 3430,
      salaryExpense: 2500,
    },
    {
      label: "February",
      salaryIncome: 4302,
      salaryExpense: 4302,
    },
    {
      label: "March",
      salaryIncome: 2345,
      salaryExpense: 1900,
    },
    {
      label: "April",
      salaryIncome: 4330,
      salaryExpense: 2654,
    },
    {
      label: "May",
      salaryIncome: 4322,
      salaryExpense: 5434,
    },
    {
      label: "June",
      salaryIncome: 2990,
      salaryExpense: 4564,
    },
    {
      label: "July",
      salaryIncome: 1890,
      salaryExpense: 2200,
    },
  ],
};

export default data;
