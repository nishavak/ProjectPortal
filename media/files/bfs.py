node_count = int(input("Enter number of nodes:\t"))
nodes = []
for i in range(node_count):
    nodes.append(input(f"Node {i+1}:\t"))
graph = dict.fromkeys(nodes, [])
cost = []
# O(n*e)
for node in nodes:
    edges = int(input(f"Edges directed from {node} count:\t"))
    connections = []
    for i in range(edges):
        connecting_vertex = input("Connecting vertex:\t").strip()
        edge_cost = float(input("Edge cost:\t").strip())
        connections.append(connecting_vertex)
        cost.append((node, connecting_vertex, edge_cost))
    graph[node] = connections
    del connections
# O(e)


def cleanCost():
    costmap = {}
    for i in cost:
        costmap.update({(i[0], i[1]): i[2]})
    return costmap
# O(n)


def pathCost(path):
    path_cost = 0
    costmap = cleanCost()
    for i in range(len(path) - 1):
        key = (path[i], path[i+1])
        path_cost += costmap[key]
    return path_cost


def bfs(graph, start, end):
    counter = 0
    queue = []
    queue.append([start])
    while queue:
        print("queue:\t", queue)
        print("fringe:\t", [(i[-1], pathCost(i)) for i in queue])
        counter += 1
        path = queue.pop(0)
        node = path[-1]
        if node == end:
            return path, counter
        for adjacent in graph.get(node, []):
            new_path = list(path)
            new_path.append(adjacent)
            queue.append(new_path)


start = input("Enter start node:\t")
goal = input("Enter goal node:\t")

path, counter = bfs(graph, start, goal)
path_cost = pathCost(path)

print("-->".join(path))
print("Cost:\t", path_cost)
print("iterations:\t", counter)
