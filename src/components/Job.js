import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import DOMParser from 'dom-parser'

const TextWrap = styled.div`
display:flex;
justify-contetn:center;
align-content: center;
align-items: center;
margin: auto;
`
const RightWrap = styled.div`
width: 60%;
margin: 3% 3% 3% 1.5%;
`
const LeftWrap = styled.div`
width: 35%;
margin: 3% 1.5% 3% 3%;

`

export default function Job(props){
    const [jobObj, setJobObj] = useState([])
    
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
       
        
      }, []);
    console.log(jobObj)
    console.log(props)
    function noHTML(text){
      if (text){
      return text.replace(/<[^>]*>?/gm, '');
      }
    }
    function ComponentPlease(text){
      // not working 
      console.log(text)
      if (text){
        const parser = new DOMParser()
        const firedHTML = parser.parseFromString(text, 'text/xml')
        const wrapper  = document.createElement('div')
        console.log(firedHTML)
        // wrapper.appendChild(firedHTML)
        // console.log(wrapper.firstChild.innerHTML)
        return({firedHTML})
    }
    }

    return(
      <TextWrap>
        <LeftWrap>
        <h1>{jobObj.title}</h1>
        <p>{noHTML  (jobObj.how_to_apply)}</p>
        </LeftWrap>
        <RightWrap>
        {noHTML(jobObj.description)}
        </RightWrap>
      </TextWrap>
    )
}

//"https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=undefined&full_time=true&location=undefined"

//fdajkjfkjpfp9upofpofnnnvkjlfkfhidhfsdfhwppujjdfklsdjljjslkdkjflksdjfsjffdjfidjjfjiosadifjsdfjjfdifjbggrgrrfdddsaf