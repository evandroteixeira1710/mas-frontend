import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { Background,Content, Container, FormContainer, InputContainer, Error } from "./styles";
import {FiLogIn,FiMail, FiLock} from 'react-icons/fi'

interface FormData{
    email: string;
    password: string;
}


export function Login(){

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
    
    const onSubimit = handleSubmit(data => alert(JSON.stringify(data)))

    return(
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça seu login</h2>
                    <form onSubmit={onSubimit}>
                        <InputContainer>
                            <FiMail size={40}/>
                            <input 
                                type="email" 
                                placeholder="E-mail"
                                { ...register("email", {required:true})}
                            />
                        </InputContainer>
                        {errors.email && <Error>O Preenchimento do campo é obrigatório... </Error> }
                        <InputContainer>
                            <FiLock size={40}/>
                            <input 
                                type="password" 
                                placeholder="Senha"
                                { ...register("password", {required:true})}
                            />
                        </InputContainer>
                        {errors.password && <Error>O Preenchimento do campo é obrigatório... </Error> }
                        <Button type="submit">Entrar</Button>
                    </form>
                    <Link to="/register">
                        <FiLogIn size={40}/>
                        Cadastre seu acesso
                    </Link>
                </FormContainer>
            </Content>
            <Background />
        </Container>
    )
}