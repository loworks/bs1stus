import React from "react";

const UsageGuidelinesTable: React.FC = () => {
  const data = [
    {
      item: "Melting point (initial)",
      details: "Begins melting: 77℉–82℉ (25–28℃)",
      condition: "",
    },
    {
      item: "Partial softening",
      details: "82℉–90℉ (28–32℃)",
      condition: "",
    },
    {
      item: "Fully liquefied",
      details: "95℉–104℉ (35–40℃)",
      condition: "",
    },
    {
      item: "Smoke point",
      details: "302℉‒356℉ (150–180℃)",
      condition: "Not recommended for deep frying",
    },
    {
      item: "Storage & shipping",
      details: "Refrigerated shipping recommended",
      condition: "Avoid heat and humidity",
    },
  ];

  return (
    <table className="[&_th]:font-ob-nar-b [&_td]:font-ob-nar mx-auto text-left max-md:mx-[16px] md:[&_td]:text-2xl">
      <thead className="border-bx-[1px]">
        <tr className="bg-gray-100">
          <th className="py-6 max-md:px-2 md:pr-24">Item</th>
          <th className="py-6 max-md:px-2 md:pr-24">Details</th>
          <th className="py-6">Temperature / Condition</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="py-2 max-md:px-2 md:pr-24">{row.item}</td>
            <td className="py-2 max-md:px-2 md:pr-24">{row.details}</td>
            <td className="py-2">{row.condition || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsageGuidelinesTable;
