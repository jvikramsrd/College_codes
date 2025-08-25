def gc(g,nc):
    n=len(g)
    colours=[0]*n

    def is_safe(v,c):
        for i in range(n):
            if g[v][i]==1 and colours[i]==c:
                return False
        return True

    def solve(v):
        if v==n:
            return True
        for c in range (1,nc+1):
            if is_safe(v,c):
                colours[v]=c
                if solve(v+1):
                    return True
                colours[v]=0
        return False

    if solve(0):
        return colours
    return None

    graph = [[0, 1, 1], [1, 0, 1], [1, 1, 0]]
    print(f"Graph coloring solution: {gc(graph, 3)}")
