// ---------- LOGIN ----------

export interface LoginSliceType {
  error: string | null;
  status: string;
}

export interface LoginUserType {
  username: string;
  password: string;
}

// ---------- BUS ----------

export interface BusSliceType {
  // ---------- Bus Definition ----------
  busDefinition: BusDefinitionType | null;
  busDefinitionStatus: string;
  busDefinitionError: string | null;
  // ---------- Create Bus ----------
  createBusStatus: string;
  createBusError: string | null;
  // ---------- Get Bus Model ----------
  busModels:
    | {
        plate_number: string;
        model_id: string;
        number_of_seats: number;
        type: string;
        properties: [
          {
            id: string;
          }
        ];
      }
    | any;
  busModelsStatus: string;
  busModelsError: string | null;
}

export interface BusDefinitionType {
  Brands: BusFeaturesType[];
  Types: BusFeaturesType[];
  Properties: BusFeaturesType[];
}

export interface BusFeaturesType {
  id: string;
  name?: string;
  plate_number?: string;
}

export interface CreateBusType {
  id?: string;
  plate_number: string;
  model_id: string;
  number_of_seats: number;
  type: string;
  properties?: [{ id: string }];
}

// ---------- VOYAGE ----------

export interface VoyageSliceType {
  // ---------- Create Voyage ----------
  createVoyageStatus: string;
  createVoyageError: string | null;
  // ---------- Delete Voyage ----------
  deleteVoyageStatus: string;
  deleteVoyageError: string | null;
  // ---------- Get All Voyage ----------
  voyages: VoyagesType | null;
  voyageStatus: string;
  voyageError: string | null;
}

export interface VoyagesType {
  bus: CreateBusType[];
  province: BusFeaturesType[];
  voyage: any;
}

export interface CreateVoyageType {
  fee: number;
  from: string;
  to: string;
  date: string;
  bus_id: string;
}

// ---------- TICKET ----------
interface TicketSliceType {
  // ---------- Buy Ticket ----------
  buyTicketStatus: string;
  buyTicketError: string | null;
  // ---------- Get Ticket Info ----------
  ticketInfo: {} | null;
  ticketInfoStatus: string;
  ticketInfoError: string | null;
}

export interface BuyTicketType {
  no: number;
  sex: number;
  voyage_id: string;
}
