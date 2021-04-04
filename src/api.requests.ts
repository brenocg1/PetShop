export interface RegisterPetRequest {
	name:string;
	reason:string;
	ownerName:string;
	ownerAddress:string;
	ownerPhoneNumber:string;
	healthStatus:string;
}

export interface SearchPetRequest{
	name:string;
}