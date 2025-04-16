import { render, screen } from "@testing-library/react"
import Todo from "./Todo"
import { expect, describe, test, vi } from "vitest"

describe('Todo component', () => {
  const baseTodo = {
    _id: '1',
    text: 'Test Todo'
  }

  const deleteMock = vi.fn()
  const completeMock = vi.fn()

  test('shows "done" info if todo.done is true', () => {
    const todo = { ...baseTodo, done: true }

    render(
      <Todo
        todo={todo}
        deleteTodo={deleteMock}
        completeTodo={completeMock}
      />
    )

    expect(screen.getByText('This todo is done')).to.exist
    expect(screen.getByText('Delete')).to.exist
    expect(screen.queryByText('Set as done')).to.be.null
  })

  test('shows "not done" info if todo.done is false', () => {
    const todo = { ...baseTodo, done: false }

    render(
      <Todo
        todo={todo}
        deleteTodo={deleteMock}
        completeTodo={completeMock}
      />
    )

    expect(screen.getByText('This todo is not done')).to.exist
    expect(screen.getByText('Delete')).to.exist
    expect(screen.getByText('Set as done')).to.exist
  })
})