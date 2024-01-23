import { useState } from 'react';
import CalendarioHijo from './Hijo';

const CalendarioPadre = () => {
	const [fecha, setFecha] = useState('');
	const [email, setEmail] = useState('');

	const manejarCambioFecha = (nuevaFecha) => {
		setFecha(nuevaFecha);
	};

	const manejarCambioEmail = (nuevoEmail) => {
		setEmail(nuevoEmail);
	};

	return (
		<div>
			<h1>Formulario</h1>
			<CalendarioHijo
				fechaSeleccionada={fecha}
				onFechaCambio={manejarCambioFecha}
				email={email}
				onEmailCambio={manejarCambioEmail}
			/>
			<p>Fecha seleccionada en el padre: {fecha}</p>
			<p>Email seleccionado en el padre: {email}</p>
		</div>
	);
};

export default CalendarioPadre;
