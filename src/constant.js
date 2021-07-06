import { CustomNode } from './components/CustomNode'

export const ItemTypes = {
	NODE: "NODE",
};

export const nodeConfig = {
	WIDTH: '200'
}

export const moveStep = "Move here";

export const Nodes = [
	{
		id: "node-1",
		type: "selectorNode",
		data: { customNodeComponent: CustomNode, label: "Input 1", type: "input" },
		position: { x: 600, y: 50 },
		draggable: false,
	},
	{
		id: "node-2",
		type: "selectorNode",
		data: {
			customNodeComponent: CustomNode,
			label: "Node 2",
			width: "200",
			draggable: false,
		},
		position: { x: 600, y: 300 },
		draggable: false,
	},
	{
		id: "node-10",
		type: "selectorNode",
		data: { customNodeComponent: CustomNode, label: "Node 7", width: "200" },
		position: { x: 600, y: 600 },
		draggable: false,
	},
	{
		id: "node-9",
		type: "selectorNode",
		data: { customNodeComponent: CustomNode, label: "Node 9" },
		position: { x: 600, y: 900 },
		draggable: false,
	},
	{
		id: "node-3",
		type: "selectorNode",
		data: { customNodeComponent: CustomNode, label: "Node 3" },
		position: { x: 300, y: 1100 },
		draggable: false,
	},
	{
		id: "node-4",
		type: "selectorNode",
		data: { customNodeComponent: CustomNode, label: "Node 4" },
		position: { x: 600, y: 1100 },
		draggable: false,
	},
	{
		id: "node-5",
		type: "selectorNode",
		data: { customNodeComponent: CustomNode, label: "Node 5" },
		position: { x: 900, y: 1100 },
		draggable: false,
	},
	{
		id: "node-6",
		type: "selectorNode",
		data: {
			customNodeComponent: CustomNode,
			label: "Output Node 3",
			type: "output",
		},
		position: { x: 300, y: 1400 },
		draggable: false,
	},
	{
		id: "node-7",
		type: "selectorNode",
		data: {
			customNodeComponent: CustomNode,
			label: "Output Node 4",
			type: "output",
		},
		position: { x: 600, y: 1400 },
		draggable: false,
	},
	{
		id: "node-8",
		type: "selectorNode",
		data: {
			customNodeComponent: CustomNode,
			style: {
					border: "1px solid #000",
					padding: "10px 60px",
					borderRadius: "3px",
				},
			label: "Output Node 5",
			type: "output",
		},
		position: { x: 900, y: 1400 },
		draggable: false,
	},
];

export const Edge = [
	{
		id: "edges-e1-1",
		source: "node-1",
		target: "node-2",
		className: "normal-edge",
		data: {
			text: "bezier edge",
			height: 50,
			width: 125,
			droppable: false,
			style: {
				color: "#fff",
				backgroundColor: "green",
				borderRadius: "10px",
				padding: "5px 10px",
			},
		},
		type: "custom",
	},
	{
		id: "edges-e1-2",
		source: "node-2",
		target: "node-10",
		className: "normal-edge",
		data: {
			text: "bezier edge",

			width: "200",
		},
		type: "custom",
	},
	{
		id: "edges-e1-3",
		source: "node-10",
		target: "node-9",
		className: "normal-edge",
		data: {
			text: "bezier edge",
		},
		type: "custom",
	},
	{
		id: "edges-e1-4",
		source: "node-9",
		target: "node-3",
		data: {
			text: "true",
			height: 50,
			width: 125,
			droppable: false,
			style: {
				color: "#fff",
				backgroundColor: "green",
				borderRadius: "10px",
				padding: "5px 10px",
			},
		},
		type: "custom",
	},
	{
		id: "edges-e2-4",
		source: "node-9",
		target: "node-4",
		data: {
			text: "false",
			height: 50,
			width: 125,
			droppable: false,
			style: {
				color: "#fff",
				backgroundColor: "green",
				borderRadius: "10px",
				padding: "5px 10px",
			},
		},
		type: "custom",
	},
	{
		id: "edges-e2-5",
		source: "node-9",
		target: "node-5",
		data: {
			text: "step edge",
			height: 50,
			width: 125,
			droppable: false,
			style: {
				color: "#fff",
				backgroundColor: "green",
				borderRadius: "10px",
				padding: "5px 10px",
			},
		},
		type: "custom",
	},
	{
		id: "edges-e3-1",
		source: "node-3",
		target: "node-6",
		data: {
			text: "step edge",
		},
		type: "custom",
	},
	{
		id: "edges-e3-2",
		source: "node-4",
		target: "node-7",
		data: {
			text: "step edge",
		},
		type: "custom",
	},
	{
		id: "edges-e3-3",
		source: "node-5",
		target: "node-8",
		data: {
			text: "step edge",
		},
		type: "custom",
	},
];

export const defaultNodeStyle = {
	border: "1px solid #000",
	padding: "10px 60px",
	borderRadius: "3px",
};