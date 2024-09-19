import React, { useEffect, useState } from "react";
import Card from "./Card";
import fetcher from "../../../utils/fetcher";
import { useRouter } from "next/navigation";

const CardHolder = ({ data, setData }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleRequest = async () => {
    setLoading(true);
    let res = await fetcher("/api", {
      method: "POST",
      body: JSON.stringify(data),
    });
    router.push("/workout/" + res.data.id);
  };
  useEffect(() => {
    if (data.progress == 4) {
      handleRequest();
    }
  }, [data.progress]);
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (data.progress == 1) {
    return (
      <Card
        data={data}
        setData={setData}
        question={"What is your first name?"}
        btn={"Next"}
        dataParam={"name"}
        inputType={"text"}
      />
    );
  }
  if (data.progress == 2) {
    console.log(data);
    return (
      <Card
        data={data}
        setData={setData}
        question={"What is your fitness goal?"}
        btn={"Next"}
        dataParam={"fitnessGoals"}
        inputType={"checkbox"}
      />
    );
  }
  if (data.progress == 3) {
    console.log(data);
    return (
      <Card
        data={data}
        setData={setData}
        question={"How many days per week would you like to workout?"}
        btn={"Next"}
        dataParam={"daysPerWeek"}
        inputType={"number"}
      />
    );
  }
};

export default CardHolder;
