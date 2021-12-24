import * as  React from 'react';
import {useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useForm} from 'react-hook-form';

const MovieList = () => {

    
    const[title, setTitle]=useState("");
    const[description, setDescription]= useState("");
    const [postUrl, setPostUrl] = useState("");
    const [rating, setRating] = useState("");
    const [list, setList] = useState({title:"",description:"",postUrl:"",rating:"" });
    
    const titleChange=(e)=>{
        setTitle(e.target.value)
    }
    const descriptionChange=(e)=>{
        setDescription(e.target.value)
    }
    const postUrlChange=(e)=>{
        setPostUrl(e.target.value)
    }
    const ratingChange=(e)=>{
        setRating(e.target.value)
    }
    const handleChange = async (e) => {
        e.preventDefault();
        if(title, description,postUrl, rating)
            setList({
             title:title,
             description:description,
            postUrl:postUrl,
            rating:rating
            })
        console.log(list);
    }
    

    

    return (
                <div>
                    <form>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '60ch', marginTop:'50px', padding:'6px' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                <div>
                    
                    <div>
                    <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    name={title}
                                defaultValue="Cendrillon"
                                 type="text"
                    onChange={titleChange}
                    />
                    </div>
                    <div>
                    <TextField
                    required
                    id="outlined-required"
                    label="Description"
                    defaultValue="description"
                                name={description}
                                 type="text"
                    multiline
                    rows= {4}
                    onChange={descriptionChange}
                    />
                    </div>
                    <div>
                     <TextField
                    required
                    id="outlined-required"
                                label="PosteURl"
                                type="text"
                    name={postUrl}
                    defaultValue="posteUrl"
                    onChange={postUrlChange}
                    />
                    </div>
                    <div>
                     <TextField
                    required
                    id="outlined-required"
                                label="Rating"
                                 type="text"
                    name={rating}        
                    defaultValue="rating"
                    onChange={ratingChange}
                    />
                    </div>
                    <div>
                    <Button variant="contained" type="submit" onClick={handleChange}>
                        Contained
                    </Button>
                        </div>
                        </div>
                        </Box>
                    
                        </form>
                
                
                
                
                    </div>
                );
            };

export default MovieList;