import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Shoes from './Shoes';
import { beforeEach, test, expect, vi } from 'vitest';
import { nanoid } from 'nanoid';

const updateSize = vi.fn();
const addShoe = vi.fn();
const removeShoe = vi.fn();

const initialShoes = [
    { id: nanoid(), size: '' },
    { id: nanoid(), size: '' }
];

beforeEach(() => {
  render(<Shoes updateSize={updateSize} addShoe={addShoe} removeShoe={removeShoe} shoes={initialShoes} />);
});

test('renders Shoes component', () => {

    const heading = screen.getByRole('heading', { level: 2, name: /Shoes/i });
  expect(heading).toBeInTheDocument();

  initialShoes.forEach((shoe, index) => {
    const shoeInput = screen.getAllByRole('textbox')[index];
    expect(shoeInput).toBeInTheDocument();
  });


  const removeButtons = screen.getAllByRole('button', { name: '-' });
  const addButton = screen.getByRole('button', { name: '+' });

  expect(removeButtons).toHaveLength(initialShoes.length);
  expect(addButton).toBeInTheDocument();
});

test('adds a shoe input', () => {

    fireEvent.click(screen.getByRole('button', { name: '+' }));
  
  expect(addShoe).toHaveBeenCalledTimes(1);
  expect(addShoe).toHaveBeenCalledWith(expect.any(String)); 
  
});

test('removes a shoe input', () => {
 
  const removeButtons = screen.getAllByRole('button', { name: '-' });
  fireEvent.click(removeButtons[0]);


  expect(removeShoe).toHaveBeenCalledTimes(1);
  expect(removeShoe).toHaveBeenCalledWith(initialShoes[0].id);
});

test('updates shoe size', () => {

  const shoeInput = screen.getAllByRole('textbox')[0];
  fireEvent.change(shoeInput, { target: { value: '42' } });

 

  expect(updateSize).toHaveBeenCalledTimes(1);
  expect(updateSize).toHaveBeenCalledWith(expect.any(Object));
});