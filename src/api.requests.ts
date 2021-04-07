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

export interface SearchPetRequest{
	name:string;
}