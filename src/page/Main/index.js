import { Component } from 'react';
import { Form, SubmitButton, List } from './style';
import Container from '../../components/container/index';
import {FaGithubAlt, FaPlus, FaSpinner, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../services/api';

export default class Main extends Component {
    state = {
        newRepo: '',
        repositorio: [],
        loading: false
    }

    //Estou carregando os dados do localStorage
    componentDidMount = () => {
        const repositorio = localStorage.getItem('repositorio');

        if(repositorio) {
            this.setState({ repositorio: JSON.parse(repositorio) })
        }
    }


    // Estou salvando os dados no localStorage
    componentDidUpdate = (_, prevState) => {
        const { repositorio } = this.state;

        if(prevState.repositorio !== repositorio) {
            localStorage.setItem('repositorio', JSON.stringify(repositorio));
        }
    }

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value })
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true });

        const { newRepo, repositorio } = this.state;
        const response = await api.get(`/repos/${newRepo}`)

        const data = {
            name: response.data.full_name
        }

        this.setState({ repositorio: [...repositorio, data],
            newRepo: '',
            loading: false
        });
    }

    handledelete = (repositorio) => {
        this.setState({ repositorio: this.state.repositorio.filter(repo => repo !== repositorio) })
    }

    render() {
        const { newRepo, loading, repositorio } = this.state;
        
        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    repositório
                </h1>

                <Form onSubmit={this.handleSubmit}>
                    <input
                     type='text'
                      placeholder='Adicionar repósitorio'
                      value={newRepo}
                      onChange={this.handleInputChange}
                    />
                    <SubmitButton loading={loading}>
                        {loading ? <FaSpinner /> : <FaPlus />}
                    </SubmitButton>
                </Form>

                <List>
                    {repositorio.map(repository => (
                        <li key={repository.name}>
                            <span>
                                {repository.name}

                                <button type='button' onClick={()=> this.handledelete(repository)}>
                                    <FaTrashAlt />
                                </button>
                            </span>

                            <Link
                             to={`/repository/${encodeURIComponent(repository.name)}`}>
                             Detalhes
                            </Link>
                        </li>
                    ))}
                </List>
            </Container>
        )
    }
}