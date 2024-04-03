import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
                <p className="text-base font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center my-3 ${dataLength === jobs.length ? 'hidden' : ''}`}>
                <button onClick={() => setDataLength(jobs.length)} className="rounded-lg bg-gradient-to-r from-blue-400 to-indigo-500 py-5 px-7 ">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;