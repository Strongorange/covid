/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const Contents = ({ countryOption }) => {
  const [confirmedData, setConfirmedData] = useState({});
  const [quarantinedData, setQuarantinedData] = useState({});
  const [comparedData, setComparedData] = useState({});

  const whichCountry =
    countryOption === "KR" ? "국내" : countryOption === "US" ? "미국" : "음...";

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await axios(
        `https://api.covid19api.com/total/dayone/country/${countryOption}`
      );

      makeData(res.data);
    };

    const makeData = (items) => {
      const arr = items.reduce((acc, cur) => {
        const currentDate = new Date(cur.Date);
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const date = currentDate.getDate();
        const confirmed = cur.Confirmed;
        const active = cur.Active;
        const deaths = cur.Deaths;
        const recovered = cur.Recovered;

        const findItem = acc.find((a) => a.year === year && a.month === month);

        if (!findItem) {
          acc.push({
            year,
            month,
            date,
            confirmed,
            active,
            deaths,
            recovered,
          });
        }

        if (findItem && findItem.date < date) {
          findItem.active = active;
          findItem.confirmed = confirmed;
          findItem.recovered = recovered;
          findItem.deaths = active;
          findItem.year = year;
          findItem.month = month;
          findItem.date = date;
        }

        return acc;
      }, []);

      const labels = arr.map((a) => `${a.month}월`);
      setConfirmedData({
        labels,
        datasets: [
          {
            label: `${whichCountry} 확진자`,
            backgroundColor: "salmon",
            fill: true,
            data: arr.map((a) => a.confirmed),
          },
        ],
      });

      setQuarantinedData({
        labels,
        datasets: [
          {
            label: "월별 격리자 현황",
            backgroundColor: "salmon",
            fill: false,
            borderColor: "salmon",
            data: arr.map((a) => a.active),
          },
        ],
      });

      const last = arr[arr.length - 1];
      setComparedData({
        labels: ["확진자", "격리해제", "사망"],
        datasets: [
          {
            label: "월별 격리자 현황",
            backgroundColor: ["#ff3d67", "#059bff", "#ffc233"],
            fill: false,
            borderColor: "salmon",
            data: [last.confirmed, last.recovered, last.deaths],
          },
        ],
      });
    };

    fetchEvent();
  }, [countryOption]);

  return (
    <div className="contents">
      <h1>{`${whichCountry} 코로나 현황`}</h1>
      <Bar
        className="contents__bar"
        data={confirmedData}
        options={{
          title: {
            display: true,
            text: "누적 확진자 추이",
            fontsize: 16,
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
      <Line
        className="contents__line"
        data={quarantinedData}
        options={{
          title: {
            display: true,
            text: "누적 확진자 추이",
            fontsize: 16,
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
      <div className="contents__doughnut__container">
        <Doughnut
          className="contents__doughnut"
          data={comparedData}
          options={{
            title: {
              display: true,
              text: "확진자, 격리해제, 사망",
              fontsize: 16,
            },
            legend: {
              display: true,
              position: "bottom",
            },
            responsive: true,
          }}
        />
      </div>
    </div>
  );
};

export default Contents;
