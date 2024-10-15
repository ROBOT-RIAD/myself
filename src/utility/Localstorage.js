
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
    

}
export {savejob,getStorejob}