export const addFuncToEdges = (edges, funcName, funToAdd) => {
	return edges.map((edge) => {
        const newEdge = {...edge};
        newEdge.data = {...newEdge.data, [funcName]: funToAdd};
		return newEdge;
	});
};