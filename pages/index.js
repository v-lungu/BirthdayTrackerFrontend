import Head from "next/head";
import SeeAll from "../components/SeeAll";
import { GetStaticProps } from "next";
import BirthdayTable from "../components/BirthdayTable";
import AddBirthday from "../components/AddBirthday";
import { useState } from "react";

export async function getStaticProps() {
  const resToday = await fetch("http://localhost:7777/api/birthdays/today");
  const today = await resToday.json();

  const resUpcoming = await fetch(
    "http://localhost:7777/api/birthdays/upcoming"
  );
  const upcoming = await resUpcoming.json();

  const resAll = await fetch(`http://localhost:7777/api/birthdays`);
  const all = await resAll.json();

  return {
    props: {
      todayStatic: today,
      upcomingStatic: upcoming,
      allStatic: all,
    },
  };
}

export default function Home({ todayStatic, upcomingStatic, allStatic }) {
  const [today, setToday] = useState(todayStatic);
  const [upcoming, setUpcoming] = useState(upcomingStatic);
  const [allBirthdays, setAllBirthdays] = useState(allStatic);
  const [seeAll, setSeeAll] = useState(false);

  return (
    <>
      <Head>
        <title>Birthday Tracker</title>
      </Head>
      <main className="text-dark w-full h-[80%]">
        <div className="grid grid-rows-6 grid-cols-3 gap-4 h-full p-8">
          <div className="row-span-2 col-span-2 bg-white rounded-md px-4 py-2">
            <BirthdayTable data={today} title="Today"></BirthdayTable>
          </div>
          <div className="row-span-5 col-span-1 bg-white rounded-md">
            <AddBirthday
              setToday={setToday}
              setUpcoming={setUpcoming}
              setAllBirthdays={setAllBirthdays}
            ></AddBirthday>
          </div>
          <div className="row-span-4 col-span-2 bg-white rounded-md px-4 py-2">
            <BirthdayTable
              data={seeAll ? allBirthdays : upcoming}
              title={seeAll ? "All" : "Upcoming"}
            ></BirthdayTable>
          </div>
          <SeeAll
            className="row-span-1 col-span-1"
            seeAll={seeAll}
            setSeeAll={setSeeAll}
          ></SeeAll>
        </div>
      </main>
    </>
  );
}
