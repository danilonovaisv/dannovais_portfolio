import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  it('should render the hero section with title and description', () => {
    render(<Hero />);
    expect(screen.getByText('Hi, I am Danilo Novais')).toBeInTheDocument();
    expect(
      screen.getByText(
        /I am a Software Engineer passionate about creating/
      )
    ).toBeInTheDocument();
  });
});
