import { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Custom node components
import ProducerNode from './nodes/ProducerNode';
import DistributorNode from './nodes/DistributorNode';
import RetailerNode from './nodes/RetailerNode';
import CustomerNode from './nodes/CustomerNode';

const nodeTypes = {
  producer: ProducerNode,
  distributor: DistributorNode,
  retailer: RetailerNode,
  customer: CustomerNode,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'producer',
    position: { x: 100, y: 100 },
    data: { 
      label: 'Producer',
      status: 'active',
      details: 'Organic Farm Co.',
      timestamp: '2024-01-15 08:00'
    },
  },
  {
    id: '2',
    type: 'distributor',
    position: { x: 400, y: 100 },
    data: { 
      label: 'Distributor',
      status: 'active',
      details: 'FreshLogistics Ltd.',
      timestamp: '2024-01-16 14:30'
    },
  },
  {
    id: '3',
    type: 'retailer',
    position: { x: 700, y: 100 },
    data: { 
      label: 'Retailer',
      status: 'active',
      details: 'GreenMarket Store',
      timestamp: '2024-01-17 09:15'
    },
  },
  {
    id: '4',
    type: 'customer',
    position: { x: 1000, y: 100 },
    data: { 
      label: 'Customer',
      status: 'pending',
      details: 'QR Code Scan',
      timestamp: 'Pending'
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: 'hsl(217 91% 60%)', strokeWidth: 3 },
    label: 'Shipped',
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    style: { stroke: 'hsl(217 91% 60%)', strokeWidth: 3 },
    label: 'Delivered',
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: false,
    style: { stroke: 'hsl(215 16% 47%)', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Ready to Scan',
  },
];

const SupplyChainFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Supply Chain Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how products move through the blockchain-secured supply chain with real-time tracking and verification.
          </p>
        </div>
        
        <div className="bg-card rounded-2xl shadow-card border p-8 h-[600px]">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            className="bg-muted/10 rounded-lg"
          >
            <Controls className="bg-card shadow-card" />
            <MiniMap 
              className="bg-card shadow-card border rounded-lg"
              nodeColor={(node) => {
                switch (node.type) {
                  case 'producer': return 'hsl(142 76% 36%)';
                  case 'distributor': return 'hsl(217 91% 60%)';
                  case 'retailer': return 'hsl(45 93% 58%)';
                  case 'customer': return 'hsl(215 16% 47%)';
                  default: return 'hsl(215 16% 47%)';
                }
              }}
            />
            <Background gap={12} size={1} className="opacity-30" />
          </ReactFlow>
        </div>
      </div>
    </section>
  );
};

export default SupplyChainFlow;