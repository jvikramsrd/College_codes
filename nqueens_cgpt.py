def is_safe(board, row, col, n):
    for i in range(col):
        if board[i] == row or abs(board[i]-row) == abs(i-col):
            return False
    return True

def solve(col, board, n):
    if col == n:
        print(board)
        return True
    for row in range(n):
        if is_safe(board, row, col, n):
            board[col] = row
            solve(col+1, board, n)
            board[col] = -1
    return False

n = 4
board = [-1]*n
solve(0, board, n)
