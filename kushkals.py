def kruskals_mst(edges, num_nodes):
    parent = list(range(num_nodes))
    def find(i):
        if parent[i] == i: return i
        parent[i] = find(parent[i])
        return parent[i]

    def union(i, j):
        root_i, root_j = find(i), find(j)
        if root_i != root_j:
            parent[root_i] = root_j
            return True
        return False

    edges.sort() # Sort edges by weight
    mst_weight = 0

    for weight, u, v in edges:
        if union(u, v):
            mst_weight += weight

    return mst_weight

# --- Example ---
# Edges: (weight, node1, node2)
edges = [(10, 0, 1), (6, 0, 2), (5, 0, 3), (4, 2, 3)]
print(f"Kruskal's MST Weight: {kruskals_mst(edges, 4)}")
