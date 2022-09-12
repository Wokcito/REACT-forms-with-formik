import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Formulario = () => {
    const [formSent, setFormSent] = useState(false);

    return (
        <>
            <Formik
                initialValues={{
                    nombre: "",
                    correo: "",
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.nombre) {
                        errores.nombre = "Por favor ingresa un nombre";
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = "El nombre solo puede contener letra y espacios";
                    }

                    if (!valores.correo) {
                        errores.correo = "Por favor ingresa un correo";
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                        errores.correo = "El correo tiene que ser valido";
                    }

                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    console.log(valores);
                    setFormSent(true);
                    setTimeout(() => setFormSent(false), 5000);
                }}
            >
                {({ errors }) => (
                    <Form>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <Field type="text" id="nombre" name="nombre" placeholder="John Doe" />
                            <ErrorMessage name="nombre" component={() => <div>{errors.nombre}</div>} />
                        </div>

                        <div>
                            <label htmlFor="correo">Correo</label>
                            <Field type="text" id="correo" name="correo" placeholder="correo@correo.com" />
                            <ErrorMessage name="correo" component={() => <div>{errors.correo}</div>} />
                        </div>

                        <div>
                            <Field name="pais" as="select">
                                <option value="argentina">Argentina</option>
                                <option value="mexico">Mexico</option>
                            </Field>
                        </div>

                        <div>
                            <label>
                                <Field type="radio" name="sexo" value="hombre" /> Hombre
                            </label>
                            <label>
                                <Field type="radio" name="sexo" value="mujer" /> Mujer
                            </label>
                        </div>

                        <div>
                            <Field name="mensaje" as="textarea" placeholder="mensaje" />
                        </div>

                        <button type="submit">Enviar</button>
                        {formSent && <p>Formulario enviado</p>}
                    </Form>
                )}

                {/* {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                    <form onSubmit={handleSubmit}>
                        {console.log(errors)}
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="John Doe"
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.nombre && errors.nombre && <div>{errors.nombre}</div>}
                        </div>
                        <div>
                            <label htmlFor="correo">Correo</label>
                            <input
                                type="text"
                                id="correo"
                                name="correo"
                                placeholder="correo@correo.com"
                                value={values.correo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.correo && errors.correo && <div>{errors.correo}</div>}
                        </div>
                        <button type="submit">Enviar</button>
                        {formSent && <p>Formulario enviado</p>}
                    </form>
                )} */}
            </Formik>
        </>
    );
};

export default Formulario;
