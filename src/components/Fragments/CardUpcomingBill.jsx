import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from '@mui/material/CircularProgress';

function CardUpcomingBill(props) {
  const { data } = props;

  // Mencocokkan nama file dari API dengan Ikon di React Anda
  const iconMap = {
    "Figma.png": <Icon.Figma />,
    "Adobe.png": <Icon.Adobe />
  };

  const billData = (
    <div className="flex flex-col justify-around h-full">
      {data.map((item) => (
        <div key={item.id} className="flex justify-between pt-3 pb-3">
          <div className="flex">
            <div className="bg-special-bg p-4 rounded-lg flex flex-col text-center">
              <span className="text-xs">{item.month}</span>
              <span className="text-2xl font-bold">{item.date}</span>
            </div>
            <div className="ms-10">
              <div className="flex items-center gap-2">
                {/* Menampilkan ikon Figma / Adobe */}
                {iconMap[item.logo] || <Icon.Figma />} 
                <span className="font-bold">{item.name}</span>
              </div>
              <br />
              <span className="text-xs">Last Charge - {item.lastCharge}</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="py-2 px-4 border border-gray-05 rounded-lg font-bold text-gray-01">
              ${item.amount}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Card
        title="Upcoming Bill"
        link="/bill"
        desc={
          // Mengecek apakah data tagihan masih kosong (belum di-fetch dari API)
          data.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-full text-primary">
              <CircularProgress color="inherit" size={50} />
              <div className="mt-4 font-bold">Loading Data...</div>
            </div>
          ) : (
            billData
          )
        }
      />
    </>
  );
}

export default CardUpcomingBill;
