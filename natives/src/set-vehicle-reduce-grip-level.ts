import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_REDUCE_GRIP_LEVEL
 *
 * 0xFCF78891ECB409E9

 * 
 * val is 0-3
 * Often used in conjunction with: SET_VEHICLE_REDUCE_GRIP
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} reducedGripLevel
 */
export function setVehicleReduceGripLevel(vehicle: VehicleIndex, reducedGripLevel: number): void {
	const setVehicleReduceGripLevel_result = Citizen.invokeNative<void>('0xFCF78891ECB409E9', vehicle, reducedGripLevel);
	return setVehicleReduceGripLevel_result;
}