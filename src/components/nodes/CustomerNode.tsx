import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { User, QrCode } from 'lucide-react';

interface CustomerNodeProps {
  data: {
    label: string;
    status: string;
    details: string;
    timestamp: string;
  };
}

const CustomerNode = memo(({ data }: CustomerNodeProps) => {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-card border-2 border-muted p-4 min-w-[200px]">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-muted rounded-full">
          <User className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{data.label}</h3>
          <span className="text-sm text-muted-foreground">End User</span>
        </div>
      </div>
      
      <div className="space-y-2 mb-3">
        <div className="text-sm">
          <strong>Action:</strong> {data.details}
        </div>
        <div className="text-sm">
          <strong>Status:</strong> {data.timestamp}
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${data.status === 'active' ? 'bg-secondary' : 'bg-muted-foreground'}`}></div>
          <span className="text-sm capitalize">{data.status}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-2 p-2 bg-muted/50 rounded border-2 border-dashed border-muted-foreground/30">
        <QrCode className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Scan to Verify</span>
      </div>
      
      <Handle 
        type="target" 
        position={Position.Left} 
        className="w-3 h-3 bg-muted-foreground border-2 border-card" 
      />
    </div>
  );
});

CustomerNode.displayName = 'CustomerNode';

export default CustomerNode;