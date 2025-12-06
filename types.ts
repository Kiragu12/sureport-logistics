export interface ShipmentUpdate {
  id: string;
  message: string;
  location: string;
  timestamp: string;
  type: 'arrival' | 'departure' | 'customs' | 'delivery';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export interface ProhibitedItem {
  category: string;
  items: string[];
}