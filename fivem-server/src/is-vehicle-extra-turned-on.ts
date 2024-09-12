import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_VEHICLE_EXTRA_TURNED_ON
 *
 * 0x42098B5

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} extraId
 * @returns {boolean}  
 */
export function isVehicleExtraTurnedOn(vehicle: VehicleIndex, extraId: number): boolean {
	const isVehicleExtraTurnedOn_result = Citizen.invokeNative<boolean>('0x42098B5', vehicle, extraId);
	return isVehicleExtraTurnedOn_result;
}