import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import JobCard from './JobCard'
import DropDownButton from './JobSearcher'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CustomCard =styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
align-content: center;
justify-content: space-evenly;
// margin: 4%;
`
const FormWrapper = styled.div`
width: 70%;
margin: 2% auto;
display:flex;
justify-content: space-evenly;
align-content: center;
align-items: center;

`

export default function JobGrid(){

    const [companyArr, setCompanyArr] = useState([])
    const [tech, setTech] = useState('python')
    const [location, setLocation] = useState('San_Francisco')
    const tech_list = ['Python','Java', 'JavaScript', 'C++', 'C']
    const location_list = ['San_Francisco','Los_Angeles','New_York','Las_Vegas','San_Diego','Berkeley']



    useEffect(()=>{ 
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${tech}&full_time=true&location=${location}`)
    //.get('https://swapi.co/api/people/?page=1')
    .then(response=>{
        setCompanyArr(response.data);
    })
    .catch(error=> console.log(error))

    },[])

   
    console.log(companyArr)
    return(
        <div>
            <h2>{`There are ${companyArr.length} ${tech} jobs in ${location.split('_').join(' ')} `}</h2> 
            <FormWrapper>
                <FormGroup>
                    <Label for="exampleSelect">Select City</Label>
                    <Input type="select" name="select" id="exampleSelect">
                    {location_list.map(lang =>
                        <option>{lang.split('_').join(' ')}</option>
                        )}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select Language</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        {tech_list.map(lang =>
                        <option>{lang}</option>
                        )}
                    </Input>
                </FormGroup>
                <Button onClick={()=> console.log('clicked')}className='btn-lg btn-dark btn-lg'>Submit</Button>
            </FormWrapper>
            <CustomCard>
                {companyArr.map((obj, ind)=>
                    {return (<JobCard title={obj.company} created={obj.created_at} p_title={obj.title} type={obj.type} location={obj.location}/>)},)
                }
            </CustomCard>
        </div>
    )


}



{/* <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
</FormGroup> */}