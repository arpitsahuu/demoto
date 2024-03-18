import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const ForgetPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
//   const { student, error } = useSelector((state) => state.student);

  const {id} = router.query;
  const { allApplication} = useSelector(
    (state) => state.employee
  );
  const [Resume , setResume] = useState({});

  useEffect(() => {
    let resume = allApplication?.find((student) => student?.studentId?._id == id)
    setResume(resume.studentId);
    console.log(Resume)
  }, [allApplication]);

  return (
    <div className="flex relative text-black">
     <h1>{id}</h1>
     <h2>{ Resume && Resume.email}</h2>
    </div>
  );
};

export default ForgetPage;
