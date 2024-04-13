"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// https://react-bootstrap.netlify.app/docs/forms/overview

function CadCliente() {
  return (
    <div >
    <Form >
      
        <div className="nome">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite o nome" />
          </Form.Group>
        </div>

        <div className="email">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </div>

        <div className="select_tipo">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tipo</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Selecione uma opção</option>
              <option value="CPF-1">Física</option>
              <option value="CNPJ">Jurídica</option>
            </Form.Select>
          </Form.Group>
        </div>

        <div className="password">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </div>

        <div>          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>

      
    </Form>
    </div>
  );
}

export default CadCliente;
