import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_STUCK_ON_ROOF
 *
 * 0x413E19AD37DE3A4C

 * 
 * If the deatharrest code is switched off, it is still possible to check for a particular car being stuck on its roof. Before using this command, you must have called ADD_VEHICLE_UPSIDEDOWN_CHECK for CarID.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleStuckOnRoof(vehicle: VehicleIndex): boolean {
	const isVehicleStuckOnRoof_result = Citizen.invokeNative<boolean>('0x413E19AD37DE3A4C', vehicle);
	return isVehicleStuckOnRoof_result;
}