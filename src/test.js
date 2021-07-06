const nodeList = {
	rootNodeId: 1,
	isReadOnly: true / false,
	IsAllNodeExpanded: true / false,
	nodes: {
		1: {
			// node id
			nodeConfig: {
				parentNodeId: null,
				isLeaf: false / true,
				isDraggable: true / false,
				showExpanded: true / false,
				isCardExpended: true / false,
			},
			nodeToRender: <react-component></react-component>,
			position: { x: 100, y: 100 },
			nodeId: 1,
		},
		2: {
			// node id
			nodeConfig: {
				parentNodeId: 1,
				isLeaf: false / true,
				isDraggable: true / false,
				showExpanded: true / false,
				isCardExpended: true / false,
			},
			nodeToRender: <react-component></react-component>,
			position: { x: 100, y: 100 },
			nodeId: 2,
		},
		3: {
			// node id
			nodeConfig: {
				parentNodeId: 2,
				isLeaf: false / true,
				isDraggable: true / false,
				showExpanded: true / false,
				isCardExpended: true / false,
			},
			nodeToRender: <react-component></react-component>,
			position: { x: 100, y: 100 },
			nodeId: 2,
		},
		4: {
			// node id
			nodeConfig: {
				parentNodeId: 2,
				isLeaf: false / true,
				isDraggable: true / false,
				showExpanded: true / false,
				isCardExpended: true / false,
			},
			nodeToRender: <react-component></react-component>,
			position: { x: 100, y: 100 },
			nodeId: 2,
		},
		5: {
			// node id
			nodeConfig: {
				parentNodeId: 2,
				isLeaf: false / true,
				isDraggable: true / false,
				showExpanded: true / false,
				isCardExpended: true / false,
			},
			nodeToRender: <react-component></react-component>,
			position: { x: 100, y: 100 },
			nodeId: 2,
		},
	},
	edges: [
		{ source: 1, targte: 2, dropable: true / false },
		{ source: 2, targte: 3, dropable: true / false },
		{ source: 2, targte: 4, dropable: true / false },
		{ source: 2, targte: 5, dropable: true / false },
	],
};
