import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorejob } from "../../utility/Localstorage";

const AppliedJobss = () => {
    // const jobs = useLoaderData();
    // useEffect(()=>{
    //     const storedjobid = getStorejob();
    //     if(jobs.length>0)
    //     {
    //        const applyedjobs = jobs.filter(job => storedjobid.includes(job.id))
    //        console.log(applyedjobs);
    //     }
    // },[])
    return (
        <div>
            <h1>i aplaid job</h1>
        </div>
    );
};

export default AppliedJobss;