import React from "react";
import { InfoUsuario } from "./InfoUsuario"

export function CardVideo() {
    function reproduzVideo() {
        alert("O video esta sendo reproduzido");
    }


    return (
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src="https://www.clubeparacachorros.com.br/wp-content/uploads/2018/05/filhote-com-bolinha.jpg" alt="" />
            <h4>Titulo do Video</h4>
            <InfoUsuario />
        </div>
    )
}