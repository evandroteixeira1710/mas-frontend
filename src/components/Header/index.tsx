

import { Content,Container } from "./styles";


export function Header(){
    return(
        <Container>
            <Content>
                <h1>My Atcivies Space</h1>
                <div>
                    <button type="button">
                        Nova Unidade Curricular
                    </button>
                    <button type="button">
                        Nova Atividade
                    </button>
                </div>
            </Content>
        </Container>
    )
}
/*Correcao Imports*/