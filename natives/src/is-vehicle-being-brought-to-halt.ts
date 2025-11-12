import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_BEING_BROUGHT_TO_HALT
 *
 * 0x0AB6C098FE20C23A

 * 
 * Returns true if vehicle is halted by BRING_VEHICLE_TO_HALT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleBeingBroughtToHalt(vehicle: VehicleIndex): boolean {
	const isVehicleBeingBroughtToHalt_result = Citizen.invokeNative<boolean>('0x0AB6C098FE20C23A', vehicle);
	return isVehicleBeingBroughtToHalt_result;
}