"use client";

import StudentImg from "@/public/me.png";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { LuClipboardCheck } from "react-icons/lu";

const Page = () => {
  const [category, setCategory] = useState("common");

  const examRoutine = [
    {
      date: "07/12/2024",
      examTime: "02:30 PM To 05:30 PM",
      subject: "CSE 0613-2203 Object Oriented Programming",
      location: "B2-305",
    },
    {
      date: "08/12/2024",
      examTime: "02:30 PM To 05:30 PM",
      subject: "CSE 0541-2205 Numerical Methods",
      location: "B2-305",
    },
    {
      date: "10/12/2024",
      examTime: "02:30 PM To 05:30 PM",
      subject: "CSE 0612-2207 Database Management Systems",
      location: "B2-305",
    },
    {
      date: "14/12/2024",
      examTime: "02:30 PM To 05:30 PM",
      subject: "CSE 0613-2201 System Analysis & Design",
      location: "B2-305",
    },
    {
      date: "15/12/2024",
      examTime: "02:30 PM To 05:30 PM",
      subject: "ACN 0411-2201 Accounting",
      location: "B2-305",
    },
    {
      date: "17/12/2024",
      examTime: "02:30 PM To 05:30 PM",
      subject:
        "MAT 0541-2201 Complex Variable, Vector Analysis and Coordinate Geometry",
      location: "B2-305",
    },
    {
      date: "21/12/2024",
      examTime: "02:30 PM To 05:30 PM",
      subject: "CSE 0613-2209 Web Programming",
      location: "B2-305",
    },
  ];

  const notices = {
    common: [
      {
        title: "Semester Exam Schedule",
        date: "December 5, 2024",
        description:
          "The final exam schedule for all courses has been released. Please check the notice board for more details.",
      },
      {
        title: "Holiday Announcement",
        date: "December 7, 2024",
        description:
          "The university will be closed on December 10th for a public holiday.",
      },
    ],
    departmental: [
      {
        title: "Departmental Meeting on Project Work",
        date: "December 9, 2024",
        description:
          "All department heads are requested to attend the project work meeting on December 9th at 3 PM.",
      },
      {
        title: "Software Engineering Workshop",
        date: "December 12, 2024",
        description:
          "A workshop on advanced software engineering techniques will be held in Room 101 at 10 AM.",
      },
    ],
  };

  const attendanceData = [
    {
      course: "Object Oriented Programming",
      totalClasses: 40,
      present: 35,
      absent: 5,
    },
    {
      course: "Numerical Methods",
      totalClasses: 30,
      present: 28,
      absent: 2,
    },
    {
      course: "Database Management Systems",
      totalClasses: 45,
      present: 42,
      absent: 3,
    },
    {
      course: "System Analysis & Design",
      totalClasses: 40,
      present: 37,
      absent: 3,
    },
    {
      course: "Web Programming",
      totalClasses: 50,
      present: 48,
      absent: 2,
    },
  ];

  return (
    <div className="space-y-3">
      <h1 className="text-xl mb-4 border-l-8 pl-2 border-sky-500 font-bold text-gray-800">
        Student Profile
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="left col-span-1 xl:col-span-2 space-y-6">
          {/* Profile card */}
          <section className="profile_card">
            <div className="bg-white overflow-hidden border border-t-8 border-t-sky-500 rounded-lg shadow-md">
              <div className="sm:p-6 p-4 space-y-5">
                <div className="flex flex-col items-center sm:items-start md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Image
                        src={StudentImg}
                        alt="Profile image"
                        className="sm:h-44 h-36 sm:w-44 w-36 object-cover border rounded-t-md shadow-sm"
                      />
                      <div className="absolute top-0 left-0 bg-green-600/90 mt-2 text-sm font-semibold text-white px-3 rounded-e-md">
                        Active
                      </div>
                    </div>
                    <ul className="summary border-b py-1 border-x bg-slate-50 rounded-b-md">
                      <li className="text-center">
                        <span className="font-semibold">Ahsan Habib</span>
                      </li>
                      <li className="text-center text-sm">
                        <span className="font-semibold">Student ID:</span>{" "}
                        12311033
                      </li>
                    </ul>
                  </div>
                  <ul className="flex-1 sm:space-y-3 space-y-2 sm:text-start text-center">
                    <li className="text-2xl text-center sm:text-start font-bold text-gray-700">
                      Welcome, <span className="text-sky-600">Ahsan Habib</span>
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold">Program:</span> B.Sc. in
                      Computer Science & Engineering (CSE)
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold">Email:</span>{" "}
                      ahsanhabib@gmail.com
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold">Admission:</span>{" "}
                      Winter-2023
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold">Reg. No:</span> 136905244
                      (Summer-2024)
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold">Semester:</span> 4th
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="font-semibold">Section:</span> A
                    </li>
                    <li className="text-gray-600"></li>
                    {/* <li>
                <button className="px-4 py-2 bg-sky-600 text-white rounded-md shadow hover:bg-sky-800 transition-all">
                Edit Profile
                </button>
                </li> */}
                  </ul>
                </div>
                <p className="text-center py-3 border-2 border-dashed bg-green-50 text-green-600 sm:text-lg text-base font-semibold border-green-200">
                  You are permitted for examination: Summer-2024
                </p>
              </div>
            </div>
          </section>

          {/* Routines */}
          <section className="routine_card">
            <div className="bg-white rounded-lg border shadow-md">
              <div className="heading sm:pt-5 sm:px-6 p-4 pb-0 flex gap-3 items-center justify-between">
                <h1 className="text-xl flex-grow leading-none font-bold text-gray-800">
                  Exam Routine
                </h1>
                <div className="hidden sm:block bg-cyan-500 py-[1px] text-sm text-white px-4 rounded-full font-medium">
                  Summer: 2024
                </div>
                <div className="hidden sm:block bg-lime-500 py-[1px] text-sm text-white px-4 rounded-full font-medium">
                  Final Term
                </div>
              </div>

              {/* Responsive Table Wrapper */}
              <div className="sm:p-6 sm:pt-4 p-4 overflow-x-auto">
                <table className="min-w-full border table-auto border-collapse">
                  <thead className="bg-purple-200">
                    <tr>
                      <th className="sm:px-4 sm:py-2 p-2 border border-purple-300 text-left sm:text-base text-sm font-semibold text-gray-700">
                        Date
                      </th>
                      <th className="sm:px-4 sm:py-2 p-2 border border-purple-300 text-left sm:text-base text-sm font-semibold text-gray-700">
                        Exam Time
                      </th>
                      <th className="sm:px-4 sm:py-2 p-2 border border-purple-300 text-left sm:text-base text-sm font-semibold text-gray-700">
                        Subject
                      </th>
                      <th className="sm:px-4 sm:py-2 p-2 border border-purple-300 text-left sm:text-base text-sm font-semibold text-gray-700">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {examRoutine.map((exam, index) => (
                      <tr
                        key={index}
                        className="even:bg-purple-50 odd:bg-white"
                      >
                        <td className="sm:px-4 sm:py-2 p-1 break-all border sm:text-base text-sm text-gray-600">
                          {exam.date}
                        </td>
                        <td className="sm:px-4 sm:py-2 p-1 border sm:text-base text-sm text-gray-600">
                          {exam.examTime}
                        </td>
                        <td className="sm:px-4 sm:py-2 p-1 border sm:text-base text-sm text-gray-600">
                          {exam.subject}
                        </td>
                        <td className="sm:px-4 sm:py-2 p-1 text-center border sm:text-base text-sm text-gray-600">
                          {exam.location}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="notices sm:p-6 p-4 bg-white rounded-md shadow-md border space-y-4">
            <h2 className="text-xl font-bold border-l-8 border-amber-500 pl-2">
              Notice Board
            </h2>
            {/* Category selection buttons */}
            <div className="flex gap-4 mb-4">
              <button
                className={`px-4 py-2 rounded-md text-sm font-semibold ${
                  category === "common"
                    ? "bg-amber-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setCategory("common")}
              >
                Common
              </button>
              <button
                className={`px-4 py-2 text-sm rounded-md font-semibold ${
                  category === "departmental"
                    ? "bg-amber-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setCategory("departmental")}
              >
                Departmental
              </button>
            </div>

            {/* Notices list */}
            <div className="notices-list space-y-4">
              {notices[category].map((notice, index) => (
                <div
                  key={index}
                  className="notice bg-white p-4 rounded-md border"
                >
                  <h2 className="text-lg font-bold text-gray-800">
                    {notice.title}
                  </h2>
                  <p className="text-sm text-gray-600">{notice.date}</p>
                  <p className="text-gray-700 mt-2">{notice.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right panel */}
        <div className="col-span-1 space-y-6">
          <section className="stats grid 2xl:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="result border flex gap-5 items-center bg-white shadow-md rounded-lg p-4 overflow-hidden border-l-8 border-l-cyan-400">
              <div className="icon text-4xl text-cyan-400 pr-5 border-r">
                <LuClipboardCheck />
              </div>
              <div className="text 2xl:text-center">
                <h3 className="text-slate-500 font-semibold">Current CGPA</h3>
                <p className="font-bold text-2xl">4.00</p>
              </div>
            </div>
            <div className="due border flex gap-5 items-center bg-white shadow-md rounded-lg p-4 overflow-hidden border-l-8 border-l-lime-400">
              <div className="icon text-4xl text-lime-400 pr-5 border-r">
                <HiOutlineBanknotes />
              </div>
              <div className="text 2xl:text-center">
                <h3 className="text-slate-500 font-semibold">Total Due</h3>
                <p className="font-bold text-2xl">2000.00</p>
              </div>
            </div>
          </section>

          {/* Attendence section */}
          <section className="attendance sm:p-6 p-4 bg-white rounded-md shadow-md border space-y-4">
            <h2 className="text-xl font-bold border-l-8 border-fuchsia-500 pl-2">
              Attendance
            </h2>

            <div className="attendance-report space-y-4">
              {attendanceData.map((course, index) => {
                const percentage = (
                  (course.present / course.totalClasses) *
                  100
                ).toFixed(2);

                return (
                  <div
                    key={index}
                    className="report-card p-4 bg-gray-50 border rounded-lg shadow-sm flex justify-between items-center"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {course.course}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Total Classes: {course.totalClasses}
                      </p>
                      <p className="text-sm text-gray-600">
                        Present: {course.present} | Absent: {course.absent}
                      </p>
                    </div>
                    <div className="percentage flex items-center">
                      <span
                        className={`text-lg font-bold ${
                          percentage >= 75 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {percentage}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
