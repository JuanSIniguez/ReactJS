import Container from "react-bootstrap/esm/Container";

export const Footer = () => {
	return (
		<Container fluid className="bg-dark bottom py-3" fixed="bottom">
			<ul className="bg-dark pt-2 text-white">
				<li>Dirección: Dellepiane Norte 4781 - Lugano</li>
				<li>Horario de atención: 10 a 20 hs</li>
				<li>Teléfono: 11-2775-0955</li>
			</ul>
		</Container>
	);
};
