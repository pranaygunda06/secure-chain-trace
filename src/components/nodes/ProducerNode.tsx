import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Sprout } from 'lucide-react';

interface ProducerNodeProps {
  data: {
    label: string;
    status: string;
    details: string;
    timestamp: string;
  };
}

const ProducerNode = memo(({ data }: ProducerNodeProps) => {
  return (
    <div className="bg-gradient-trust text-secondary-foreground rounded-lg shadow-card border-2 border-secondary/20 p-4 min-w-[200px]">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-secondary-foreground/10 rounded-full">
          <Sprout className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{data.label}</h3>
          <span className="text-sm opacity-80">Source</span>
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
          <div className={`w-2 h-2 rounded-full ${data.status === 'active' ? 'bg-secondary-foreground' : 'bg-muted'}`}></div>
          <span className="text-sm capitalize">{data.status}</span>
        </div>
      </div>
      
      <Handle 
        type="source" 
        position={Position.Right} 
        className="w-3 h-3 bg-secondary border-2 border-secondary-foreground" 
      />
    </div>
  );
});

ProducerNode.displayName = 'ProducerNode';

export default ProducerNode;