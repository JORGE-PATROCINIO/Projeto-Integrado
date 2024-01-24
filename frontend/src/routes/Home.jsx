import React from "react";
import partyFetch from "../axios/config";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./Home.css";

const Home = () =>{
    const [parties, setParties] = useState(null);

    // carregar festas
    useEffect(() => {
        const loadParties = async () => {
            const res = await partyFetch.get("/parties"); // função para fazer a chamada da API.

            console.log(res);
            setParties(res.data);
        };
        loadParties();
    },[]);
    // map para carregar as festas e com validação caso o banco de dados esteja vazio!
    if(!parties) return <p>Carregando...</p>
    return (
        <div className="home">
            <h1>Suas Festas</h1>
           <div className="parties-containers">
            {parties.length === 0 && <p>Não há festas cadastradas !</p>}
            {parties.map((party) => (
                <div className="party" key={party._id}>
                    <img src={party.image} alt={party.title}/>
                    <h3></h3>
                    <Link to ={`/party/${party._id}`} className="btn-secondary">
                        Detalhes
                    </Link>
                </div>
            ))}
           </div>
        </div>
    );
};

export default Home;