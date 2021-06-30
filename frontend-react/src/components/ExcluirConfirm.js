import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import Button2 from './Button';
 
export default function ExcluirConfirm(props) {

    const[show, setShow] = useState(false);

    const renderFooter = () => {
        return (
            <div>
                <Button label="Confirmar" onClick={() => { props.onConfirm(); setShow(false) } } autoFocus className="p-button-danger"/>
                <Button label="Cancelar" onClick={() => setShow(false)} className="p-button-text" />
            </div>
        );
    }

    return (
        <>
            <Button2 icon="trash" tooltip="Excluir" onClick={() => setShow(true)}></Button2>
            <Dialog header="Confirmar Exclusão" visible={show} style={{ width: '50vw' }} footer={renderFooter()} onHide={() => setShow(false)}>
                Deseja realmente excluir este item?
            </Dialog>
        </>
    )

}
