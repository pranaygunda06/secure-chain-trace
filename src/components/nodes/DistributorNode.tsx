import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Truck } from 'lucide-react';

interface DistributorNodeProps {
  data: {
    label: string;
    status: string;
    details: string;
    timestamp: string;
  };
}

const DistributorNode = memo(({ data }: DistributorNodeProps) => {
  return (
    <div className="bg-gradient-primary text-primary-foreground rounded-lg shadow-card border-2 border-primary/20 p-4 min-w-[200px]">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-primary-foreground/10 rounded-full">
          <Truck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{data.label}</h3>
          <span className="text-sm opacity-80">Logistics</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="text-sm">
          <strong>Company:</strong> {data.details}
        </div>
        <div className="text-sm">
          <strong>Timestamp:</strong> {data.timestamp}
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${data.status === 'active' ? 'bg-primary-foreground' : 'bg-muted'}`}></div>
          <span className="text-sm capitalize">{data.status}</span>
        </div>
      </div>
      
      <Handle 
        type="target" 
        position={Position.Left} 
        className="w-3 h-3 bg-primary border-2 border-primary-foreground" 
      />
      <Handle 
        type="source" 
        position={Position.Right} 
        className="w-3 h-3 bg-primary border-2 border-primary-foreground" 
      />
    </div>
  );
});

DistributorNode.displayName = 'DistributorNode';

export default DistributorNode;