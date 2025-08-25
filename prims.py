import heapq

def prims(graph,start):
    visited=set()
    mst=[]
    pq=[(0,start,-1)]
    while pq:
        weight,node,parent=heapq.heappop(pq)
        if node not in visited:
            visited.add(node)
            if parent!=-1:
                mst.append((parent,node,weight))
            for nei,w in graph[node]:
                if nei not in visited:
                    heapq.heappush(pq,(w,nei,node))
    return mst



graph = {
    0: [(1, 10), (2, 6), (3, 5)],
    1: [(0, 10), (3, 15)],
    2: [(0, 6), (3, 4)],
    3: [(0, 5), (1, 15), (2, 4)]
}
print("Prim’s MST:", prims(graph, 0))
