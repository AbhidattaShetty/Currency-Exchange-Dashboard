import React from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Login() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            email: '',
        }
    })
    const navigate = useNavigate()

    const formSubmit = () => {
        navigate('barchart')
    }
    return (
        <div>
            <Card style={{ width: '20rem' }} className="shadow p-3 mb-5 bg-white rounded py-2">
                <Card.Body>
                <Card.Title><h3 className='heading'>Sign in Form </h3></Card.Title>
                    <Form noValidate onSubmit={handleSubmit(formSubmit)}>
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Controller
                                    name='firstName'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Form.Control isInvalid={errors.firstName} type="text" {...field} placeholder="First name" />
                                    )}
                                />
                                <Form.Control.Feedback type="invalid">FirstName required</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label>Email</Form.Label>
                                <Controller
                                    name='email'
                                    control={control}
                                    rules={{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }}
                                    render={({ field }) => (
                                        <Form.Control isInvalid={errors.email} type="text" {...field} placeholder="Email" />
                                    )}
                                />
                                {errors.email?.type === "pattern" && (
                                    <Form.Control.Feedback type="invalid">
                                        Invalid email
                                    </Form.Control.Feedback>
                                )}
                                {errors.email?.type === "required" && (
                                    <Form.Control.Feedback type="invalid">
                                        Email required
                                    </Form.Control.Feedback>
                                )}
                            </Form.Group>
                        </Row>                      
                        <Button type="submit">Get Data</Button>
                    </Form>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Login