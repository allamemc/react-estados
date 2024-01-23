import Calendario from './Calendario';
const CalendarioHijo = ({
	fechaSeleccionada,
	onFechaCambio,
	email,
	onEmailCambio,
}) => {
	return (
		<div>
			<Calendario
				fechaSeleccionada={fechaSeleccionada}
				onFechaCambio={onFechaCambio}
			/>
			<h2>Email</h2>
			<input
				type='email'
				value={email}
				onChange={(e) => onEmailCambio(e.target.value)}
				placeholder='Ingrese su email'
			/>
		</div>
	);
};

export default CalendarioHijo;
