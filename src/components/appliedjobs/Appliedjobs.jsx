import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Appliedjobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(() => {
        const storedJobs = getStoredJobApplication()

        console.log(storedJobs)
        if (jobs.length > 0) {
            const jobsApplied = []
            for (const id of storedJobs) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job)
                }
            }
            // const jobsApplied = jobs.filter(job => storedJobs.includes(job.id))

            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)

        }
    }, [jobs])
    return (
        <div>
            <Helmet>
                <title>Carrer hub apply job</title>
            </Helmet>
            <h2>Applied Jobs: {appliedJobs.length}</h2>

            <details className="dropdown">
                <summary className="m-1 btn">Filter By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All job</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>

            <div>
                {
                    displayJobs.map(job => <li key={job.id}>
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