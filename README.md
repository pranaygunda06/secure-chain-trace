# Secure Chain Trace

A blockchain-powered supply chain transparency platform that enables tamper-proof tracking of products from source to shelf.

## Overview

Secure Chain Trace leverages IBM Cloud and blockchain technology to create immutable records of product journeys through the supply chain. With QR code integration, customers can instantly verify product authenticity and view complete sourcing history.

## Key Features

### 🔗 Blockchain Integration
- **Immutable Records**: All supply chain data stored on blockchain
- **Smart Contracts**: Automated verification and validation rules
- **IBM Cloud Platform**: Enterprise-grade blockchain infrastructure

### 📱 QR Code Tracking
- **Instant Verification**: Scan QR codes to view product history
- **Real-time Updates**: Live tracking through supply chain stages
- **Mobile Optimization**: Responsive design for all devices

### 🏭 Multi-Stage Tracking
- **Producer**: Origin tracking with certifications
- **Distributor**: Logistics and shipping verification
- **Retailer**: Store delivery confirmation
- **Customer**: End-user authenticity verification

### 🛡️ Trust & Security
- **Tamper-Proof**: Blockchain ensures data integrity
- **Transparency**: Complete visibility into product journey
- **Authenticity**: Verification of genuine products
- **Ethical Sourcing**: Proof of sustainable practices

## Technology Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Blockchain**: IBM Blockchain Platform (ICP)
- **Smart Contracts**: Chaincode for business logic
- **Visualization**: React Flow for supply chain diagrams
- **UI Components**: shadcn/ui component library

## Supply Chain Workflow

1. **Producer** creates product → generates QR code → logs to blockchain
2. **Distributor** scans → updates shipping details → verifies on blockchain
3. **Retailer** receives → confirms delivery → updates blockchain record
4. **Customer** scans QR → views complete verified journey

## Benefits

✅ **Trust & Transparency** - Immutable records build customer confidence  
✅ **Authenticity Verification** - Eliminate counterfeit products  
✅ **Real-time Efficiency** - Streamlined operations across supply chain  
✅ **Ethical Sourcing** - Demonstrate sustainable and ethical practices  
✅ **Brand Value** - Premium positioning through transparency  
✅ **Complete Visibility** - End-to-end supply chain tracking  

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser with camera access (for QR scanning)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd secure-chain-trace

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Landing page hero section
│   ├── SupplyChainFlow.tsx    # Interactive flow diagram
│   ├── QRScanner.tsx          # QR code scanning interface
│   ├── Benefits.tsx           # Benefits showcase
│   ├── nodes/                 # Custom React Flow nodes
│   └── ui/                    # Reusable UI components
├── pages/
│   ├── Index.tsx              # Main application page
│   └── NotFound.tsx           # 404 error page
└── lib/
    └── utils.ts               # Utility functions
```

## Demo Features

The current implementation includes:
- Interactive supply chain visualization
- Simulated QR code scanning
- Mock product journey tracking
- Responsive design across devices

## Future Enhancements

- Real IBM Blockchain Platform integration
- Live QR code scanning with camera
- Multi-language support
- Advanced analytics dashboard
- Mobile app development
- API integration for third-party systems

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact the development team.

---

*Building trust through transparency in global supply chains.*