import React from 'react'
import { useSelector } from 'react-redux'
const Localizacion = () => {

    let det = useSelector(state => state.holaAPP.details)
    console.log(det)
    return (
        <div>
            <div>
                <table border="1">
                    <thead>

                        <tr>
                            <th style={{ display: "flex", justifyContent: "space-between" }}>Detalles</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={det.image} alt="imagen"></img></td>
                        </tr>
                        <tr>
                            <td>Origen {det.origin}</td>
                        </tr>
                        <tr>
                            <td>Ubicacion {det.location}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Localizacion