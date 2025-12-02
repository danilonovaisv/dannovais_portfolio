import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  it('should render the hero lines, primary CTA, and manifesto trigger', () => {
    render(<Hero />);
    const heroLines = ['Design,', 'não é só', 'estética.'];
    heroLines.forEach((line) => {
      expect(screen.getByText(line)).toBeInTheDocument();
    });
    expect(screen.getByText('get to know me better')).toBeInTheDocument();
    expect(screen.getByText(/Vídeo manifesto/)).toBeInTheDocument();
  });
});
