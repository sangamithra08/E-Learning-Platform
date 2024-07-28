import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "../ui/table"
  
  const invoices = [
    {
      id : "1",
      name: "Sangamithra M",
      rollno:"727822TUCS201",
      email: "727822tucs201@skct.edu.in",
      password: "20",
    },
    {
      id : "2",
      name: "Sanjanashalini S",
      rollno:"727822TUCS202",
      email: "727822tucs202@skct.edu.in",
      password: "20",
    },
    {
      id : "3",
      name: "Sanjay R",
      rollno:"727822TUCS203",
      email: "727822tucs203@skct.edu.in",
      password: "20",
    },
    {
      id : "4",
      name: "Sanjeev K",
      rollno:"727822TUCS204",
      email: "727822tucs204@skct.edu.in",
      password: "20",
    },
    {
      id : "5",
      name: "Santhana Kumar A",
      rollno:"727822TUCS205",
      email: "727822tucs205@skct.edu.in",
      password: "20",
    },
    {
      id : "6",
      name: "Santhish V",
      rollno:"727822TUCS206",
      email: "727822tucs206@skct.edu.in",
      password: "20",
    },
    {
      id : "7",
      name: "Santhosh V",
      rollno:"727822TUCS207",
      email: "727822tucs207@skct.edu.in",
      password: "20",
    },
    {
      id : "8",
      name: "Sanvi S",
      rollno:"727822TUCS208",
      email: "727822tucs208@skct.edu.in",
      password: "20",
    },
    
  ]
  
  export function AdminStudentTable() {
    return (
      <div className=" w-full flex justify-center items-center flex-col  ">
        <h1 className="text-3xl font-bold text-primary ">Annual Statistics</h1>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className='w-full'>
            <TableHead className=" text-2xl font-medium">S.no</TableHead>
            <TableHead className="text-2xl">Roll No</TableHead>
            <TableHead className="text-2xl">Name</TableHead>
            <TableHead className="text-2xl">Email</TableHead>
            <TableHead className="text-2xl ">Password</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-small text-x">{invoice.id}</TableCell>
              <TableCell className="font-small text-x">{invoice.rollno}</TableCell>
              <TableCell className="font-small text-x">{invoice.name}</TableCell>
              <TableCell className="font-small text-x">{invoice.email}</TableCell>
              <TableCell className="text-x ">${invoice.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter  className='w-full'>
          <TableRow>
            <TableCell colSpan={3}>Total Number of Students </TableCell>
            <TableCell className="font-bold text-right">8</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </div>
    )
  }
  