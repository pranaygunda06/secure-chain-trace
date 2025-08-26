import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Store } from 'lucide-react';

interface RetailerNodeProps {
  data: {
    label: string;
    status: string;
    details: string;
    timestamp: string;
  };
}

const RetailerNode = memo(({ data }: RetailerNodeProps) => {
  return (
    <div className="bg-gradient-premium text-accent-foreground rounded-lg shadow-premium border-2 border-accent/20 p-4 min-w-[200px]">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-accent-foreground/10 rounded-full">
          <Store className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{data.label}</h3>
          <span className="text-sm opacity-80">Store</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="text-sm">
          <strong>Store:</strong> {data.details}
        </div>
        <div className="text-sm">
          <strong>Timestamp:</strong> {data.timestamp}
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${data.status === 'active' ? 'bg-accent-foreground' : 'bg-muted'}`}></div>
          <span className="text-sm capitalize">{data.status}</span>
        </div>
      </div>
      
      <Handle 
        type="target" 
        position={Position.Left} 
        className="w-3 h-3 bg-accent border-2 border-accent-foreground" 
      />
      <Handle 
        type="source" 
        position={Position.Right} 
        className="w-3 h-3 bg-accent border-2 border-accent-foreground" 
      />
    </div>
  );
});

RetailerNode.displayName = 'RetailerNode';

export default RetailerNode;