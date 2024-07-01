import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => { 

    const inputValue1 = 'Saitama';
    const inputValue2 = 'Goku';

    test('debe realizar el snapshot', () => { 
        const {container} = render(<GifExpertApp/>);

        expect(container).toMatchSnapshot();
    })

    test('debe poderse escribir en el input', () => { 
        render(<GifExpertApp/>);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: inputValue1}});

        expect(input.value).toBe(inputValue1);
    })

    test('debe no poderse ingresar dos categorias iguales', () => { 
        render(<GifExpertApp/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //Primera busqueda
        fireEvent.input(input, {target: {value: inputValue1}});
        fireEvent.submit(form);
        //Segunda busqueda
        fireEvent.input(input, {target: {value: inputValue1}});
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1);
        screen.debug();
    })

    test('debe poderse ingresar dos categorias diferentes', () => { 

        render(<GifExpertApp/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //Primera busqueda
        fireEvent.input(input, {target: {value: inputValue1}});
        fireEvent.submit(form);
        //Segunda busqueda
        fireEvent.input(input, {target: {value: inputValue2}});
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2);
        screen.debug();
    })

})