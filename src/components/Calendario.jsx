const Calendario = ({ fechaSeleccionada, onFechaCambio }) => {
	return (
		<div>
			<h2>Calendario</h2>
			<input
				type='date'
				value={fechaSeleccionada}
				onChange={(e) => onFechaCambio(e.target.value)}
			/>
		</div>
	);
};

export default Calendario;
