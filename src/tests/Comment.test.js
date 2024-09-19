import { render, screen, fireEvent } from '@testing-library/react';
import CommentSection from './CommentSection'; // ajuste o caminho conforme necessário

test('should insert two comments', () => {
  render(<CommentSection />);

  // Simular a inserção do primeiro comentário
  fireEvent.change(screen.getByTestId('comment-input'), { target: { value: 'Primeiro comentário' } });
  fireEvent.click(screen.getByTestId('submit-comment'));

  // Simular a inserção do segundo comentário
  fireEvent.change(screen.getByTestId('comment-input'), { target: { value: 'Segundo comentário' } });
  fireEvent.click(screen.getByTestId('submit-comment'));

  // Verificar se os comentários foram adicionados
  expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
  expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
});