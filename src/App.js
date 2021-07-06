import React, { useState, useEffect } from 'react';
import ReactFlow, {
	MiniMap,
	Controls,
	Background,
	isEdge,
	isNode,
} from 'react-flow-renderer';

import CustomEdge from './CustomEdge';
import customNode from './customNode';
import { Nodes, Edge } from "./constant";
import { addFuncToEdges } from "./helpers/helper";

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const onElementClick = (event, element) => console.log('click', element);

const nodeTypes = {
	selectorNode: customNode,
};


const edgeTypes = {
	custom: CustomEdge,
};

function App() {
	const [elements, setElements] = useState([]);

	useEffect(() => {
		const onDropEdge = (id, source, target) => {
		const rand = Math.random().toString().substr(2, 8);
			const targetNewEdge = {
			id: `target-edges-${rand}`,
			source: `node-${rand}`,
			target,
			className: 'normal-edge',
			data: { text: 'new edge', onDropEdge, source: `node-${rand}`, target },
			type: 'custom',
			};
			
		setElements((els) =>{
			const newElement = [];
			let isTargetFound = false;
			let removeNodeTargetEdge = {};
			els.forEach((element, index) => {
			if (isEdge(element)) {
				if(element.source === source) {
				element.id = `source-edges-${rand}`;
				element.target = `node-${rand}`;
				element.data.target = `node-${rand}`;
				}
			}
			if(isNode(element)) {
				if(element.id ===  source) {
				newElement.push(element);
				const newNode = { id: `node-${rand}`, 
					type: 'selectorNode',
					data: { label: 'new node', id: `node-${rand}` }, 
					position: { x: 600, y: element.position.y + 250 }, 
					draggable: false 
				}
				newElement.push(newNode);
				} else if(element.id === target) {
				isTargetFound = true;
				element.position = {
					...element.position,
					y: element.position.y + 300
				}
				newElement.push(element);
				}else {
				if (
									element.type !== "input" &&
									isTargetFound
								) {
									element.position = {
										...element.position,
										y: element.position.y,
									};
								}
				if(element.id !== id) {
					newElement.push(element);
				}
				}
			} else {
				if(element.target === id) {
				removeNodeTargetEdge = element;
				}
				if (element.source === id) {
				removeNodeTargetEdge.target = element.target
				newElement.push(removeNodeTargetEdge);
				}
				if(element.source !== id && element.target !== id) {
				newElement.push(element);
				}
			}
			})
			newElement.push(targetNewEdge);
			return newElement;
		});
		}

		const edges = [...addFuncToEdges(Edge, "onDropEdge", onDropEdge )];
		setElements([...Nodes, ...edges]);

	}, [])

	
	return (
		<div style={{height: '900px'}}> 
			<ReactFlow
			elements={elements}
			onElementClick={onElementClick}
			onLoad={onLoad}
			snapToGrid={true}
			edgeTypes={edgeTypes}
			key="edges"
			nodeTypes={nodeTypes}
			>
			<MiniMap />
			<Controls />
			<Background />
			</ReactFlow>
		</div>
	);
}

export default App;
