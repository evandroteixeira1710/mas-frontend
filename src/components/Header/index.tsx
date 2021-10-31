import { Button } from "../Button";
import { Container } from "../Button/styles";
import { Content } from "./styles";


export function Header(){
    return(
        <Container>
            <Content>
                <h1>My Atcivies Space</h1>
                <div>
                    <Button type="button">
                        Nova Unidade Curricular
                    </Button>
                    <Button type="button">
                        Nova Atividade
                    </Button>
                </div>
            </Content>
        </Container>
    )
}