import { useEffect, useState } from "react";
import Job from "../job/job";

const FreatureJob = () => {
    const [jobs , setjobs] =useState([]);

    //not best way 
    const [datalength ,setdatalength] = useState(4);





    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setjobs(data));
    },[]);
    return (
        <div>
            <h1 className="text-5xl  text-center">Featured Jobs</h1>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
             <div className="grid grid-cols-2 gap-6">
             {
                jobs.slice(0,datalength).map(job => <Job key={job.id} job={job}></Job>)
             } 
            </div> 
            <div className={datalength === jobs.length && 'hidden'}>
                <button
                onClick={()=>{setdatalength(jobs.length)}} className="btn  btn-primary">show all job</button>
            </div>
        </div>
    );
};

export default FreatureJob;