const DrugData = ({users,setList}) =>{

    const handleClick=(id)=>{
       users.filter((item,index)=>{
           if(index === id){
            setList(item.drugDetails)
            return true;
           
           }
        })
    }

    return(<>
    {users.map((item,index)=>{
        const {drugName}=item;
        return(
            <tr key={index}>
                <li  onClick={()=>handleClick(index)}>{drugName}</li>
            </tr>
        )
    
    })}
    </>)
    }
    export default DrugData;