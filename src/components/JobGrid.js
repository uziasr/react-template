import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import JobCard from './JobCard'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom'
import {languages, cityNames} from './data'

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
margin: 0 auto;
display:flex;
justify-content: space-evenly;
align-content: center;
align-items: center;
background-color: white;

`
const GridContainer = styled.div`
// padding: 2% 0;
`


export default function JobGrid(){

    const [companyArr, setCompanyArr] = useState([])
    const [tech, setTech] = useState('Python')
    const [location, setLocation] = useState('San_Francisco')
    const [url ,setTheUrl] = useState(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=Python&full_time=true&location=$San_Franciso`)

    const setUrl = (loc,lang) =>{
        return (`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${lang}&full_time=true&location=${loc}`)
    }
    
    const tech_list = ['Python','Java', 'JavaScript', 'C++', 'C']
    const location_list = ['San_Francisco','Los_Angeles','New_York','Las_Vegas','San_Diego','Berkeley']

    function getInput(){
        let city = document.getElementById('citySelect').value
        let lang = document.getElementById('langSelect').value
        setLocation(city)
        setTech(lang)
        return setTheUrl(setUrl(city, lang))
        
        
    }


    useEffect(()=>{ 
    axios
    .get(url)
    //.get('https://swapi.co/api/people/?page=1')
    .then(response=>{
        setCompanyArr(response.data);
    })
    .catch(error=> console.log(error))

    },[url])

   
    console.log(companyArr)
    return(
        <GridContainer>
            <h2>{`There are ${companyArr.length} ${tech} jobs in ${location.split('_').join(' ')} `}</h2> 
            <FormWrapper>
                <FormGroup>
                    <Label for="exampleSelect">Select City</Label>
                    <Input type="select" name="select" id="citySelect">
                    {cityNames.map(lang =>
                        <option>{lang.split('_').join(' ')}</option>
                        )}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select Language</Label>
                    <Input type="select" name="select" id="langSelect">
                        {languages.map(lang =>
                        <option>{lang}</option>
                        )}
                    </Input>
                </FormGroup>
                <Button type="submit" onClick={()=> getInput()}className='btn-lg btn-dark btn-lg'>Submit</Button>
            </FormWrapper>
            <CustomCard className='card-section'>
                {companyArr.map((obj, ind)=>
                    { 
                        return (<JobCard key={ind} id={ind} job={tech} city={location} title={obj.company} created={obj.created_at.split(' ').splice(0,3).join(' ')} p_title={obj.title} type={obj.type}/>);},)
                }
            </CustomCard>
        </GridContainer >
    )


}
