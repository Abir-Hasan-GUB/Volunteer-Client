import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
        </div>
    );
};

export default Home;