import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import SweetAlertComponent from '../Sweetalert/Sweetalert'
import {list,productRemove} from '../Redux/ProSlice';
// import { Navigate, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import CreateList from '../Components/CreateList'
// import Button from '@mui/material/Button';

const Product = () => {
  const { items } = useSelector((state) => state?.Pro);
  const [delete_id, setDelete_id] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const delete_funcc = (id) => {
    if (delete_id !== "") {
      dispatch(productRemove({ id: delete_id })).then(() => {
        dispatch(list());
      });
    }
    setDelete_id("");
    setIsDelete(false);
  };
  
  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(list());
  }, []);
  
 
//   const navigate=useNavigate()
//   const fn1=()=>{
// navigate("/CreateList")
//   }
  
  return (
    <div>
       <Button type="button" variant='contained' style={{marginTop:"20px",marginLeft:"20px"}}>
      <Link to='/CreateList' style={{textDecoration:"none",color:"white"}}>
      Create List
      </Link>
   
    </Button>
    
    <ul>
    {Array.isArray(items) && items?.map((elements,index)=>{
      
         return (
          <>
           
          <li key={index}>
            <Card  sx={{ maxWidth: 250 }}>
            
            <CardContent>
              <Card style={{height:"150px",width:"215px"}}>
                <img src={elements.image} alt="Image" />
              </Card>
              <Typography gutterBottom variant="h5" component="div">
                {elements.title}
              </Typography>
             
              <Typography variant="body2" color="text.secondary">
               {elements.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant='contained' color='success'>
                update
                </Button>
<Button size="small" variant='contained' color='error'>
              <Link style={{textDecoration:"none",color:"white"}}
            to=""
            onClick={() => {
              setDelete_id(elements?._id);
              setIsDelete(true);
            }}
            // className="btn btn-primary mr"
          >
            Delete
          </Link>
          </Button>

            </CardActions>
          </Card>
          </li>
          <br /><br />
          </>
          
        )}
        )}
        </ul>
  
    {isDelete && (
        <SweetAlertComponent
          confirm={delete_funcc}
          cancle={() => setIsDelete(false)}
          title={"Are you sure you want to delete?"}
          subtitle={"You will not be able to recover!"}
        />
      )}
    </div>
  
  );
};

export default Product;
