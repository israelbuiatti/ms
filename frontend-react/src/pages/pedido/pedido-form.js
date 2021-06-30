import React, {useState} from 'react';
import Row from '../../components/row';
import Card from '../../components/card';
import Content from '../../components/content';
import GridField from '../../components/GridField';
import { Link, useParams } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import FormGrid from '../../components/FormGrid';
import { AutoComplete } from 'primereact/autocomplete';

export default function PedidoForm() {

    const [obj, setObj] = useState({});

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);

    const countries = [
        {label:"Counatry-1"},
        {label:"Counatry-2"},
        {label:"Counbtry-3"},
        {label:"Counbtry-4"},
        {label:"Counbtry-5"}
    ];

    const searchCountry = (event) => {
        setTimeout(() => {
            if (!event.query.trim().length) {
                setFilteredCountries([...this.countries]);
            }
            else {
                setFilteredCountries(countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                }));
            }
        }, 250);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setObj({...obj, [name]: value});
    }

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const params = useParams();
    // console.log(params);

    const breadcrumb = [
        {label: 'Pedido', url:'/pedido'},
        {label: 'Cadastrar Pedido', active:true},
    ];

    const handleSubmit = () => {
        console.log(obj);
    }


    return (
        <div className="content-wrapper"> *** {JSON.stringify(obj)}

            <Content breadcrumb={breadcrumb} title="Cadastrar Pedido">

                <Row>
                    <Card title="Pedidos" col="6">

                        <FormGrid>
                            <GridField label="Data">
                                <Calendar onChange={(e) => handleChange(e)} name="data" dateFormat="dd/mm/yy"></Calendar>
                            </GridField>
                            <GridField label="Tipo de Pagamento">
                                <InputText name="tipo_pagamento" type="text" onChange={(e) => handleChange(e)}/>
                            </GridField>
                            <GridField label="Prazo">
                                <InputText name="prazo" type="text" onChange={(e) => handleChange(e)}/>
                            </GridField>
                        </FormGrid>

                        <FormGrid>
                            <GridField label="Cliente">
                                <AutoComplete value={obj.cliente} suggestions={filteredCountries} completeMethod={searchCountry} field="name" name="cliente" onChange={(e) => handleChange(e)} />
                            </GridField>
                        </FormGrid>


                        <FormGrid>
                            <GridField label="Fornecedor">
                                <Dropdown options={cities} optionLabel="name" placeholder="- Selecione -" onChange={(e) => handleChange(e)} name="fornecedor"/>
                            </GridField>
                            <GridField label="Vendedor">
                                <Dropdown options={cities} optionLabel="name" placeholder="- Selecione -" onChange={(e) => handleChange(e)} name="vendedor"/>
                            </GridField>
                            <GridField label="Telemarketing">
                                <Dropdown options={cities} optionLabel="name" placeholder="- Selecione -" onChange={(e) => handleChange(e)} name="telemark"/>
                            </GridField>
                        </FormGrid>

                        <div className="box-footer">
                            <button type="submit" className="btn btn-primary" style={{marginRight: '10px'}} onClick={handleSubmit}>Cadastrar</button>
                            <Link to="/pedido">
                                <button type="button" className="btn">Cancelar</button>
                            </Link>
                        </div>

                    </Card>
                </Row>

            </Content>

        </div>


    )
}
