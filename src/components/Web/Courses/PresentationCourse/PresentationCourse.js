import React from 'react';
import AcademyLogo from '../../../../assets/img/png/academy-logo.png';

import './PresentationCourse.scss';

export default function PresentationCourse() {
    return (
        <div className="presentation-course">
            <img src={AcademyLogo} alt="Cursos de en internet" />
            <p>
                En Jorgito vas a encontrar los mejores cursos online de desarrollo web en español. Unete a nosotros y
                empieza tu camino como desarrollador web o desarrollador CMS. Sinceramente, estos cursos es el tipo de
                contenido que a mi me hubiera gustado encontrar.
            </p>
            <p>¡Echale un vistazo y aprovecha las ofertas!</p>
        </div>
    );
}
