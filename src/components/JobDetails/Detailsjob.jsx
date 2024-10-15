import { useLoaderData, useParams} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Detailsjob = () => {
    const jobs = useLoaderData();
    const {id} =useParams();
    const innit = parseInt(id);
    const job = jobs.find(job => job.id ===innit);
    const notify = () => toast("you have applied successfully!!");
    return (
        <div>
            <h2>job Details of :{job.job_title}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-3 border ">
                      <h2 className="text-2xl">{job.company_name}</h2>
                </div>
                <div className="border">
                    <h2 className="text-3xl">out think </h2>
                    <button onClick={notify} className="btn w-full ">Apply Now</button>
                     <ToastContainer/>
                </div>

            </div>
            
            
        </div>
    );
};

export default Detailsjob;