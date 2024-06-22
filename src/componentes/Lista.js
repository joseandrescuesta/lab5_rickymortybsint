import { useDispatch, useSelector } from "react-redux";
import { setDetails, setEpisodios } from "../reducers";
function Lista() {

    let disp = useDispatch();
    let datos = useSelector(state => state.holaAPP.info);
    console.log(datos);

    const personaje = datos;
    function detail(pjdetail) {
        return {
            image: pjdetail.image,
            origin: pjdetail.origin.name,
            location: pjdetail.location.name
        }
    }
    const pjrow = personaje.map((pj) => (
        <tr key={pj.id}>
            <td>{pj.id}</td>
            <td>{pj.name}</td>
            <td>{pj.status}</td>
            <td>{pj.species}</td>
            <td><button onClick={() => disp(setEpisodios(pj.episode))}>Episodios</button></td>
            <td><button onClick={() => disp(setDetails(detail(pj)))}>Detalles</button></td>
        </tr>
    ))

    return (
        <div>
            <table border="1">
                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Species</th>
                    </tr>

                </thead>
                <tbody>
                    {pjrow}
                </tbody>
            </table>
        </div>
    );
}
export default Lista;