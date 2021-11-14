import {Container,Content,FormContainer, InputContainer, Error, Background} from './styles';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button';
import {useAuth} from '../../hooks/Auth';

interface FormData {
    email: string;
    password: string
}

export function Login() {

    const {signIn} = useAuth();

    const history = useHistory();

    const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

    const onSubmit = handleSubmit( async data => await signIn({
            email: data.email,
            password: data.password
        }).then(() => history.push('/dashboard'))
    );

    return (
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça seu login</h2>
                    <form onSubmit={onSubmit}>
                        <InputContainer>
                            <FiMail size={20}/>
                            <input 
                                placeholder="E-mail" 
                                {...register("email", {required:true})}
                                type="email"
                            />                         
                        </InputContainer>
                        {errors.email && <Error>O prenchimento do campo é obrigatório</Error>}
                        <InputContainer>
                            <FiLock size={20}/>
                            <input 
                                placeholder="Senha" 
                                {...register("password", {required:true})} 
                                type="password"
                            />
                        </InputContainer>                     
                        {errors.password && <Error>O prenchimento do campo é obrigatório</Error>}  
                        <Button type="submit">Entrar</Button>
                    </form>
                    <Link to="/register">
                        <FiLogIn />
                        Cadastre sua conta
                    </Link>
                </FormContainer>
                
            </Content>
            <Background />
        </Container>

    )
}

/*import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { Background,Content, Container, FormContainer, InputContainer, Error } from "./styles";
import {FiLogIn,FiMail, FiLock} from 'react-icons/fi'
import api from '../../services/api';

interface FormData{
    email: string;
    password: string;
}


export function Login(){

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
    
    //const onSubimit = handleSubmit(data => alert(JSON.stringify(data)))
    const onSubimit = handleSubmit(data => api.post('/auth', data).then(response => alert(response.data)))

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
}*/