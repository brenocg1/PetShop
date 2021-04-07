export interface RegisterPetRequest {
	petOwnerId: number;
	name:string;
	reasonForHospitalization:string;
	healthCondition:string;
}

export interface UpdatePetRequest {
	petId: number;
	name:string;
	reasonForHospitalization:string;
	healthCondition:string;
}

export interface CreatePetOwnerRequest {
	name: string;
	address: string;
	phoneNumber: string;
}

export interface SearchPetRequest {
	name:string;
}