import { VehicleIndex, ECamInVehicleState } from '@ivanzaida/structures'

/**
 * CAM:SET_IN_VEHICLE_CAM_STATE_THIS_UPDATE
 *
 * 0x349F973598822727

 * 
 * To get the camera to interpolate between the follow ped and follow vehicle cameras the intermediate states have to be called.
 * e.g. from ped to vehicle  CAM_OUTSIDE_VEHICLE - CAM_ENTERING_VEHICLE - CAM_INSIDE_VEHICLE
 * from vehicle to ped CAM_INSIDE_VEHICLE - CAM_EXITING_VEHICLE - CAM_OUTSIDE_VEHICLE
 * CAM_ENTERING_VEHICLE	Gameplay camera in interpolating to the follow vehicle camera
 * CAM_INSIDE_VEHICLE		Gampeplay camera is running the follow vehilce camera
 * CAM_EXITING_VEHICLE		Gameplay camera is interpolating from the follow vehicle camera to the follow ped camera
 * CAM_OUTSIDE_VEHICLE		Gameplay camera is fully running the follow ped camera, dont need to specify a valid vehicle index here.
 * 
 * Forces gameplay cam to specified vehicle as if you were in it
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {ECamInVehicleState} inVehicleState
 */
export function setInVehicleCamStateThisUpdate(vehicle: VehicleIndex, inVehicleState: ECamInVehicleState | number): void {
	const setInVehicleCamStateThisUpdate_result = Citizen.invokeNative<void>('0x349F973598822727', vehicle, inVehicleState);
	return setInVehicleCamStateThisUpdate_result;
}