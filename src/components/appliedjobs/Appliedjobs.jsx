import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import { useState } from "react";

const Appliedjobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(() => {
        const storedJobs = getStoredJobApplication()
        
        console.log(storedJobs)
        if(jobs.length > 0) {
            const jobsApplied = []
            for(const id of storedJobs){
                const job = jobs.find(job => job.id === id)
                if(job){
                    jobsApplied.push(job)
                }
            }
            // const jobsApplied = jobs.filter(job => storedJobs.includes(job.id))
            console.log(setAppliedJobs)
            setAppliedJobs(jobsApplied)
            
        }
    },[])
    return (
        <div>
            <h2>Applied Jobs: {appliedJobs.length}</h2>

        <details className="dropdown">
            <summary className="m-1 btn">open or close</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><a>All job</a></li>
                <li><a>Remote</a></li>
                <li><a>Onsite</a></li>
             </ul>
    </details>

            <div>
                {
                   appliedJobs.map(job => <li key={job.id}>
                    <span>{job.job_title}</span>
                    <span className="text-xl font-medium">{job.company_name}</span>:
                    <span>{job.remote_or_onsite}</span>
                   </li>) 
                }
            </div>
        </div>
    );
};

export default Appliedjobs;