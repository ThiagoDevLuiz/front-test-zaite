import React from 'react';
import { mockClients } from '../constants/mock';
import styled from 'styled-components';

const ClientsList = props => {
  const clientList = props.clients.length > 0 ? props.clients : mockClients;

  return (
    <ClientsContainer>
      <Title>CLIENTES</Title>
      <LogoGrid>
        {clientList.map(client => (
          <Logo
            key={client.id}
            src={client.brand}
            alt={`Logomarca-${client.name}`}
          />
        ))}
      </LogoGrid>
    </ClientsContainer>
  );
};

export default ClientsList;

const ClientsContainer = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  color: #007832;
  padding: 50px 0 35px 0;
  letter-spacing: 3px;
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 40px 30px;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const Logo = styled.img`
  width: 100%;
  max-width: 210px;
  border: 1px solid #66666669;
  padding: 10px;
`;

