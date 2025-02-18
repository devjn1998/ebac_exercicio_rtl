import { render, screen, fireEvent } from "@testing-library/react";
import Post from ".";
import "@testing-library/jest-dom";

describe("Post", () => {
  const mockImageUrl = "https://exemplo.com/imagem.jpg";
  const mockText = "Texto do post";

  it("deve adicionar dois comentários corretamente", () => {
    render(<Post imageUrl={mockImageUrl}>{mockText}</Post>);

    expect(screen.getByTestId("post")).toBeInTheDocument();
    expect(screen.getByTestId("post-image")).toHaveAttribute(
      "src",
      mockImageUrl
    );
    expect(screen.getByTestId("post-text")).toHaveTextContent(mockText);

    const commentInput = screen.getByTestId("comment-input");

    fireEvent.change(commentInput, {
      target: { value: "Primeiro comentário" },
    });
    fireEvent.click(screen.getByTestId("submit-comment"));
    fireEvent.change(commentInput, { target: { value: "Segundo comentário" } });
    fireEvent.click(screen.getByTestId("submit-comment"));

    const comments = screen.getAllByTestId("comment-item");
    expect(comments).toHaveLength(2);
    expect(comments[0]).toHaveTextContent("Primeiro comentário");
    expect(comments[1]).toHaveTextContent("Segundo comentário");
  });
});
