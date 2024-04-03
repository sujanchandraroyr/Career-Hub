import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../utility/localstorage";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";

const Jobdetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    
    const {job_title, salary, job_description,job_responsibility,  educational_requirements, experiences, contact_information} = job
    const handleApplyedjob = () => {
        saveJobApplication(idInt)
        toast("you have appliedjob successfully")
    }
    return (
        <div>
            <Helmet>
                <title>Career hub job details</title>
            </Helmet>
            <div className="grid grid-cols-4 gap-6 my-16">
                <div className="col-span-3  min-h-10 border space-y-6">
                    <p><span>Job Descrption: {job_description}</span></p>
                    <p><span>job Responsibility: {job_responsibility}</span></p>
                    <p><span>Educational Requirements: {educational_requirements}</span></p>
                    <p><span>Experiences: {experiences}</span></p>
                </div>
                <div className="col-span-1 min-h-10 border pt-7 pl-7 flex flex-col">
                    <div><h3 className="text-xl font-extrabold">Job Details</h3></div>
                    <hr />
                    <div className="flex-grow">
                        <div>
                            <p>Salary: {salary}</p>
                        </div>
                        <div>
                            <p>Job Title: {job_title}</p>

                        </div>
                    </div>
                    <hr />
                    <div>
                        <h2>contact Information</h2>
                        <hr />
                        
                    </div>
                    <div className="">
                        <NavLink><button onClick={() => handleApplyedjob()} className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg btn w-full">Apply Now</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;