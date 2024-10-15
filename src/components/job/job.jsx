import PropTypes from 'prop-types';
import { MdLocationOn } from "react-icons/md";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const { id,job_title, logo,company_name,remote_or_onsite,location,job_type,salary, } = job;
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
                <img
                    src={logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className='px-5 mr-4 py-2 text-extrabold border rounded border-[#7e90fe]S'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 text-extrabold border rounded border-[#7e90fe]S'>{job_type}</button>
                </div>
                <div>
                    <h2 className='flex mr-2 items-center'><MdLocationOn className='text-2xl'></MdLocationOn>{location} <AiTwotoneDollarCircle className='ml-4'></AiTwotoneDollarCircle>{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button  className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.shape({
        job_description: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
    }).isRequired,
};

export default Job;
