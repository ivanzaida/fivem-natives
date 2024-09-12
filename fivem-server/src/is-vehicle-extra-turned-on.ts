import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_VEHICLE_EXTRA_TURNED_ON
 *
 * 0X42098B5

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} extra
 * @returns {boolean}  
 */
export function isVehicleExtraTurnedOn(vehicle: VehicleIndex, extra: number): boolean {
	const isVehicleExtraTurnedOn_result = Citizen.invokeNative<boolean>('0X42098B5', vehicle, extra);
	return isVehicleExtraTurnedOn_result;
}