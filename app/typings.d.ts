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
  busDefinition: {
    Brands: [{ id: string; name: string }];
    Types: [{ id: string; name: string }];
    Properties: [{ id: string; name: string }];
  } | null;
  busDefinitionStatus: string;
  busDefinitionError: string | null;
  // ---------- Create Bus ----------
  createBusStatus: string;
  createBusError: string | null;
  // ---------- Get Bus Model ----------
  busModels: {
    plate_number: string;
    model_id: string;
    number_of_seats: number;
    type: string;
    properties: [
      {
        id: string;
      }
    ];
  } | null;
  busModelsStatus: string;
  busModelsError: string | null;
}

export interface CreateBusType {
  plate_number: string;
  model_id: string;
  number_of_seats: number;
  type: string;
  properties: [{ id: string }];
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
  voyages: any | null;
  voyageStatus: string;
  voyageError: string | null;
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
  buyTicketStatus: string;
  buyTicketError: string | null;
}

export interface BuyTicketType {
  no: number;
  sex: number;
  voyage_id: string;
}
