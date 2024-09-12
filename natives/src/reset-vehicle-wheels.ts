import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:RESET_VEHICLE_WHEELS
 *
 * 0xD0BABF27A11D215A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} extend
 */
export function resetVehicleWheels(vehicle: VehicleIndex, extend: boolean): void {
	const resetVehicleWheels_result = Citizen.invokeNative<void>('0xD0BABF27A11D215A', vehicle, extend);
	return resetVehicleWheels_result;
}