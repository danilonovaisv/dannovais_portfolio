import { render, screen } from '@testing-library/react';
import Hero from './Hero';

jest.mock('./HeroGlassTorus', () => () => null);

describe('Hero Component', () => {
  it('should render the hero lines and primary CTA', () => {
    render(<Hero />);
    const heroLines = ['Design,', 'não é só', 'estética.'];
    heroLines.forEach((line) => {
      expect(screen.getByText(line)).toBeInTheDocument();
    });
    expect(screen.getByText('get to know me better')).toBeInTheDocument();
  });
});
