import PropTypes from 'prop-types'

const Job = ({job}) => {
    console.log(job)
    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job
    return (
        <div>
            <div className='mt-3 border border-gray-300 rounded-lg'>
            <div className=" p-10 shadow-xl">
  <div className='mb-11'><figure><img src={logo} alt="Shoes" /></figure></div>
  <div className="space-y-5">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className='flex items-center gap-4'>
        <div className='box-border border rounded py-2 px-5'><p className='text-blue-400 text-base font-extrabold'>{remote_or_onsite}</p></div>
        <div className='box-border border rounded py-2 px-5 '><p className='text-blue-400 text-base font-extrabold'>{job_type}</p></div>
    </div>
    <div className='flex items-center gap-6'>
        <div className='flex items-center gap-2'>
            <img src="/src/assets/icons/Location.png" alt="location" />
            {location}
        </div>
        <div className='flex items-center gap-2'>
            <img src="/src/assets/icons/money.png" alt="" />
            {salary}
        </div>
    </div>
    <div className="card-actions ">
      <button className="btn bg-gradient-to-r from-blue-400 to-indigo-500">View Details</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
}

export default Job;