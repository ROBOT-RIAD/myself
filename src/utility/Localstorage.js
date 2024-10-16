
const getStorejob =()=>{
    const storedjob =localStorage.getItem('job-appli');
    if(storedjob)
    {
        return JSON.parse(savejob);
    }
    return [];
}

const savejob = id =>
{
    const storedjob = getStorejob();
    const exists = storedjob.find(jobId=>jobId ===id);
    if(!exists)
    {
        storedjob.push(id);
        localStorage.setItem('job-appli' ,JSON.stringify(storedjob));
    }
}
export {savejob,getStorejob}