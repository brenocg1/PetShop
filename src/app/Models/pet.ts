export interface Pet{
	Id:number;
	IdPetOwner: number;
	Name: string;
	ReasonForHospitalization:string;
	HealthCondition: string;
	IdPetOwnerNavigation: number;
	Housings: number[];
}