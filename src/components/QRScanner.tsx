import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Scan, CheckCircle, Package, Truck, Store, User } from "lucide-react";

const QRScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedProduct, setScannedProduct] = useState<any>(null);

  const mockProductData = {
    id: "SCT-2024-001",
    name: "Organic Tomatoes - Premium Grade",
    currentStatus: "In Store",
    journey: [
      {
        stage: "Producer",
        company: "Organic Farm Co.",
        location: "Valley Farms, CA",
        timestamp: "2024-01-15 08:00",
        status: "Harvested",
        icon: Package,
        verified: true
      },
      {
        stage: "Distributor", 
        company: "FreshLogistics Ltd.",
        location: "Distribution Center, CA",
        timestamp: "2024-01-16 14:30",
        status: "In Transit",
        icon: Truck,
        verified: true
      },
      {
        stage: "Retailer",
        company: "GreenMarket Store",
        location: "Downtown Store #42",
        timestamp: "2024-01-17 09:15", 
        status: "Available",
        icon: Store,
        verified: true
      },
      {
        stage: "Customer",
        company: "You",
        location: "Scan Verified",
        timestamp: new Date().toLocaleString(),
        status: "Verified Authentic",
        icon: User,
        verified: true
      }
    ]
  };

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScannedProduct(mockProductData);
    }, 2000);
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            QR Code Product Verification
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scan any product's QR code to instantly see its complete blockchain-verified journey from source to shelf.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* QR Scanner */}
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <QrCode className="w-6 h-6 text-primary" />
                  QR Scanner
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className={`w-48 h-48 border-2 border-dashed rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isScanning ? 'border-primary bg-primary/5 animate-pulse' : 'border-muted-foreground/30'
                  }`}>
                    {isScanning ? (
                      <div className="text-center">
                        <Scan className="w-12 h-12 text-primary mx-auto mb-2 animate-spin" />
                        <p className="text-sm text-primary">Scanning...</p>
                      </div>
                    ) : (
                      <div className="text-center text-muted-foreground">
                        <QrCode className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm">Point camera at QR code</p>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    variant="scan" 
                    size="lg" 
                    onClick={handleScan}
                    disabled={isScanning}
                    className="w-full"
                  >
                    {isScanning ? 'Scanning...' : 'Start Scan Demo'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product Journey */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-6 h-6 text-secondary" />
                  Product Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                {scannedProduct ? (
                  <div className="space-y-6">
                    <div className="p-4 bg-secondary/10 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">{scannedProduct.name}</h3>
                      <p className="text-sm text-muted-foreground">ID: {scannedProduct.id}</p>
                      <p className="text-sm text-secondary font-medium">Status: {scannedProduct.currentStatus}</p>
                    </div>

                    <div className="space-y-4">
                      {scannedProduct.journey.map((step: any, index: number) => {
                        const Icon = step.icon;
                        return (
                          <div key={index} className="flex items-start gap-4 p-3 bg-card rounded-lg border">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-medium text-sm">{step.stage}</h4>
                                {step.verified && <CheckCircle className="w-4 h-4 text-secondary" />}
                              </div>
                              <p className="text-xs text-muted-foreground">{step.company}</p>
                              <p className="text-xs text-muted-foreground">{step.location}</p>
                              <p className="text-xs text-primary font-medium">{step.timestamp}</p>
                            </div>
                            <div className="text-xs font-medium text-secondary">
                              {step.status}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Scan a QR code to see product journey</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRScanner;