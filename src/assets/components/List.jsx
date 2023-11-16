import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Item from './Item'

const List=() => {
    const [data,setData] = useState ([])
    const [filteredDara,setFilteredData]= useState([])
    useEffect(()=>{
        axios.get("https://northwind.vercel.app/api/products").then(res => {
        setData(res.data)
        setFilteredData(res.data)
        })
    },[])
    const handleChange = (inputVal)=>{
        if(inputVal == " "){
            setData([...data])
        }
        else{
            setFilteredData([...data.filter((item)=> item.name.trim().toLowerCase().includes(inputVal.trim().toLowerCase()))])
        }
    }
    const handleClick=(e)=>{
        e.preventDefault()
        let sortedDatas=[...data.sort((a,b)=>a.unitPrice-b.unitPrice)]
        setData(sortedDatas)
    }
    const handleDiscounted=(e)=>{
        e.preventDefault()
        let discountedDatas=data.filter((item=>item.discontinued==true))
        setData([...discountedDatas])
        console.log(discountedDatas)
    }
  return (
    <div className="container">
        <div>
        <input type="text" placeholder='Search...' onChange={(e)=>{
            handleChange(e.target.value)
        }}/>
        <button onClick={(e)=>handleClick(e)}>Sort By Price</button>
        <button onClick={(e)=>handleDiscounted(e)}>Discounted</button>
        </div>
        <div>
            {
              filteredDara &&  filteredDara.map((item,index)=>{
                    return(
                        <ul>
                            <li key={index}>
                            <Item item={item} />
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    </div>
  )
}

export default List