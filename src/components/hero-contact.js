import React from "react"
import Swal from 'sweetalert2'
import styled from "styled-components"
import withReactContent from 'sweetalert2-react-content'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RiSendPlaneFill } from "react-icons/ri";

const MySwal = withReactContent(Swal)
const maxWidth = 550;

const HeroWrap = styled.div`
    padding-top: 50px;
    padding-bottom: 80px;
    background: #07113a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
      }
`;
const FormWrapper = styled(Form)`
    max-width: ${maxWidth}px;
`;
const Title = styled.h2`
    max-width: ${maxWidth}px;
    color: #44bbff;
    font-family: "Ubuntu Condensed";
`;
const Description = styled.p`
    max-width: ${maxWidth}px;
    color: #ffffff;
    font-family: "Ubuntu";
    text-align: justify;
    margin-top: 20px;
    margin-bottom: 60px;
`;
const TextField = styled(Field)`
    font-family: "Ubuntu Condensed";
    font-size: 1.2em;
    background-color: #1c285d;
    background-color: #253163;
    padding: 15px 25px;
    width: 100%;
    border: 2px solid #333333;
    border: none;
    margin-bottom: 10px;
    color: #ff4c01;
`;
const Error = styled(ErrorMessage)`
    font-size: 0.7rem;
    color: #ff4c01;
    color: #ffffff;
    background-color: #1c285d;
    background-color: #253163;
    float: left;
    padding: 0px 20px;
    font-family: "Ubuntu";
`;
const Button = styled.button`
    margin: auto;
    margin-right: 0;
    background: #ff4c01;
    border: none;
    color: #ffffff;
    padding: 0.5rem 1.6rem;
    display: flex;
    flex-direction: row;
`;
const ButtonText = styled.div`
    font-family: "Ubuntu Condensed";
    font-size: 1.4em;
`;
const ButtonIcon = styled(RiSendPlaneFill)`
    font-size: 1.6rem;
    margin-left: 15px;
`;


const Contact = () => {

    return (
        <HeroWrap id="contact">
            <Title>Contact</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Description>
            <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validate={values => {
                    let errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    } else if (values.name.length > 50) {
                        errors.name = 'Must be less than 50 characters';
                    }
                    if (!values.email) {
                        errors.email = "Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = "Invalid email address";
                    }
                    if (!values.message) {
                        errors.message = 'Required';
                    } else if (values.message.length < 4) {
                        errors.message = 'Must be more than 4 characters';
                    } else if (values.message.length > 255) {
                        errors.message = 'Must be 255 characters or less';
                    }
                    return errors;
                }}

                onSubmit={(values, { setSubmitting, resetForm }) => {
                    //
                    // Create your own free account at https://formspree.io
                    // and replace the URL bellow
                    //
                    try {
                        fetch("https://formspree1.io/xxxxxxx", {
                            method: 'POST',
                            mode: 'cors',
                            cache: 'no-cache',
                            body: JSON.stringify(values),
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                            },
                        }).then((response) => {
                            if (response.status === 200 && !response.redirected) {
                                MySwal.fire({
                                    icon: 'success',
                                    title: <p>Success </p>,
                                    footer: 'Message Send Successfully',
                                    confirmButtonColor: '#253163',
                                })
                            }
                            else {
                                MySwal.fire({
                                    icon: 'error',
                                    title: <p>Error </p>,
                                    footer: 'Server respond failure. Please try later',
                                    confirmButtonColor: '#253163',
                                })
                            }
                        })
                            .catch(err => {
                                MySwal.fire({
                                    icon: 'error',
                                    title: <p>Error </p>,
                                    footer: 'Server not responding. Please try later',
                                    confirmButtonColor: '#253163',
                                })
                            });
                        ;
                    } catch (error) {
                        MySwal.fire({
                            icon: 'error',
                            title: <p>Error </p>,
                            footer: 'Cannot send messages. Please try later',
                            confirmButtonColor: '#253163',
                        })
                    }

                    resetForm();
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <FormWrapper>
                        <Error name="name" component="div" />
                        <TextField type="name" name="name" placeholder="Name" />
                        <Error name="email" component="div" />
                        <TextField type="email" name="email" placeholder="Email" />
                        <Error name="message" component="div" />
                        <TextField
                            type="textarea"
                            name="message"
                            placeholder="Message"
                            component="textarea"
                        />
                        <Button type="submit" disabled={isSubmitting}>
                            <ButtonText>Send</ButtonText>
                            <ButtonIcon />
                        </Button>
                    </FormWrapper>
                )}
            </Formik>

        </HeroWrap>
    )
}

export default Contact
