import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import SlideBar from './SlideBar';

const MovieCard = () => {
    //const [searchkey, setSearchKey] = useState("");
    const [rechercher, setRechercher] = useState("");
    const myFilm = [
        { id:1, title: "la reine des neiges", description: "Créée par Chris Buck, Elsa est inspirée du personnage éponyme du conte La Reine des neiges  publié en 1844. ", postUrl: "https://youtu.be/wQP9XZc2Y_c", rating: "" },
        { id:2, title: "Cendrillon", description: "Cendrillon (Cinderella) est le personnage éponyme du long-métrage animé Cendrillon sorti en 1950. ", postUrl: "https://youtu.be/joQVQj3mClY", rating: "" },
        { id:3, title: "Une super Prof", description: "", postUrl: "", rating: "" },
        { id:4, title: "la reine des neiges", description: "", postUrl: "", rating: "" },
        { id: 5, title: "la reine des neiges", description: "", postUrl: "", rating: "" },
        { id: 6, title: "la reine des neiges", description: "", postUrl: "", rating: "" },
        { id:7, title: "la reine des neiges", description: "", postUrl: "", rating: "" }
        
    ];
    const rechercherChange = (e) => {
        setRechercher(e.target.value)
    }
    const filteredList=()=>{
        return myFilm.filter((films) => {
            if (rechercher == "") {
                return films
            }
            else if (films.title.toLowerCase().includes(rechercher.toLowerCase())) {
                return films
            }
                
            })
    }
    useEffect(() => {
        if (rechercher) {
            filteredList()
        }
    })
    
    return (
        <>
            <SlideBar/>
            <div>
                <input type="search" placeholder="Rechercher...." autoComplete="off" name={rechercher} onChange={rechercherChange}/>
            </div>
            <div className="rowTable">
            <table className ="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Url</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                {filteredList().map(index =>
                    <tbody>
                        <tr key={index.id}>
                                        <th scope="row">{index.id}</th>
                                        <td>{index.title}</td>
                                        <td>{index.description}</td>
                                        <td>{index.postUrl}</td>
                                        <td>{index.rating}</td>
                        </tr>
                    </tbody>
                )
                }
                </table>
            </div>    
        </>
    );
};

export default MovieCard;