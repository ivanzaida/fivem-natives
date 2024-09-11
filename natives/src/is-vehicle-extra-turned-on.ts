import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_EXTRA_TURNED_ON
 *
 * 0x5318DF85BEB6B95F

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} extra
 * @returns {boolean}  
 */
export function isVehicleExtraTurnedOn(vehicle: VehicleIndex, extra: number): boolean {
	const isVehicleExtraTurnedOn_result = Citizen.invokeNative<boolean>('0x5318DF85BEB6B95F', vehicle, extra);
	return isVehicleExtraTurnedOn_result;
}