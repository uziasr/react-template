import React, {useEffect, useState} from 'react'
import axios from 'axios'


export default function Job(props){
    const [jobObj, setJobObj] = useState()
    
    // const [job,city, id] = url.split('-')
    useEffect(() => {
        const [job,city, id] = (props.match.params.id).split('-')
        console.log(job, city, id)
        
            // setUrl(props.match.params.id)
            // console.log(url)
            console.log('outside axios')
          axios
            .get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${job}&full_time=true&location=${city}`)
            .then(response => {
              setJobObj(response.data[id])
            })
            .catch(error => {
              console.error('Server Error', error);
            });
       
        
      }, [jobObj]);
    
    console.log(jobObj)
    
    return(
        <h1>it's working </h1> 
    )
}

//"https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=undefined&full_time=true&location=undefined"

//fdajkjfkjpfp9upofpofnnnvkjlfkfhidhfsdfhwppujjdfklsdjljjslkdkjflksdjfsjffdjfidjjfjiosadifjsdfjjfdifjbggrgrrfdddsaf