import { useEffect, useState } from 'react';
import {format, parseISO} from 'date-fns'
import { Container } from './styles';
import api from '../../services/api';

interface CourseUnit {
    name: string;
}

interface Activy {
    id: string;
    name: string;
    grade: number;
    activy_date: string;
    course_unit: CourseUnit
}

export function ActivyTable() {

    const [activies, setActivies] = useState<Activy[]>([])

    useEffect(() => {

        api.get('/activy')
            .then(response => setActivies(response.data))
    },[])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade Curricular</th>
                        <th>Atividade</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        activies.map(activy => {
                            return (
                                <tr key={activy.id}>
                                    <td>{activy.course_unit.name}</td>
                                    <td>{activy.name}</td>
                                    <td>{activy.grade}</td>
                                    <td>{format(parseISO(activy.activy_date), 'dd/MM/yyyy')}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Container>
    )
}
/* import { Container } from "./styles";


export function ActivyTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade Curricular</th>
                        <th>Atividade</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programação Web</td>
                        <td>Desenvolvimento do Frontend</td>
                        <td>8.50</td>
                        <td>05/04/2021</td>
                    </tr>
                    <tr>
                        <td>Programação Web</td>
                        <td>Implmentação de autenticação</td>
                        <td>9.00</td>
                        <td>05/04/2021</td>
                    </tr>
                    <tr>
                        <td>Programação Web</td>
                        <td>Alterar estilos de páginas</td>
                        <td>10.00</td>
                        <td>05/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>

    )
}
*/