export enum ECamInVehicleState {
	CamEnteringVehicle, // Gameplay camera is interpolating to the follow vehicle camera.
	CamInsideVehicle, // Gameplay camera is running the follow vehilce camera.
	CamExitingVehicle, // Gameplay camera is interpolating to the follow ped camera.
	CamOutsideVehicle, // Gameplay camera is running the follow ped camera.
}