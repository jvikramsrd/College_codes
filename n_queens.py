def solve_n_queens(n):
    board = [['.'] * n for _ in range(n)]
    solutions = []

    def is_safe(r, c):
        # Check column, upper-left diagonal, and lower-left diagonal
        for i in range(r):
            if board[i][c] == 'Q': return False
            if c - (r - i) >= 0 and board[i][c - (r - i)] == 'Q': return False
            if c + (r - i) < n and board[i][c + (r - i)] == 'Q': return False
        return True

    def solve(row):
        if row == n:
            solutions.append(["".join(r) for r in board])
            return
        for col in range(n):
            if is_safe(row, col):
                board[row][col] = 'Q'
                solve(row + 1)
                board[row][col] = '.' # Backtrack

    solve(0)
    return solutions

# --- Example ---
print(f"4-Queens solutions: {solve_n_queens(4)}")
