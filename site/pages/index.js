import React from 'react';

import Head from 'next/head';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import { Jumbotron, Container } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Home() {
    return (
        <div>
            <Head>
                <title>Home - Celke</title>
            </Head>
            <Menu />
            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                        background-color: #050c3d;
                        color: #00a1fc;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className="text-center">
                    <h1 className="display-4">Temos a solução que a sua empresa precisa!</h1>
                    <p className="lead">Este é um simples componente jumbotron para chamar mais atenção a um determinado conteúdo ou informação.</p>
                    <p className="lead">
                        <a href='/orcamento' className="btn btn-outline-primary btn-lg mt-4">Orçamento</a>
                    </p>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="servicos">
                <style>
                    {`.servicos{
                        backgound-color: #fff;
                        margin-bottom: 0rem !important;
                    }.circulo{
                        width: 140px;
                        height: 140px;
                        background-color: #0A197D;
                        font-size: 52px;
                        color: #fff;
                        padding-top: 24px;
                    }.centralizar{
                        margin: 0 auto !important;
                        float: none !important;
                    }`}
                </style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">Serviços</h2>
                        <p className="lead pb-4">Mauris vehicula, augue eu dapibus condimentum, velit orci condimentum risus, vel tristique sapien elit quis dolor.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="laptop-code" />
                            </div>
                            <h2 className="mt-4 mb-4">Serviço um</h2>
                            <p>Fusce eget nibh volutpat, mollis felis eget, molestie orci. Suspendisse ullamcorper, odio ac molestie sodales, ante nisi mattis quam...</p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="mobile-alt" />
                            </div>
                            <h2 className="mt-4 mb-4">Serviço dois</h2>
                            <p>Etiam lacinia, risus vitae ultricies volutpat, sem ex volutpat orci, posuere porttitor mi tellus facilisis elit.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="network-wired" />
                            </div>
                            <h2 className="mt-4 mb-4">Serviço três</h2>
                            <p>Nullam consectetur, turpis in vestibulum imperdiet, massa nisi laoreet augue, at suscipit lacus orci ac tortor. Maecenas auctor...</p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>

            <Rodape />
        </div>
    )
}

export default Home;