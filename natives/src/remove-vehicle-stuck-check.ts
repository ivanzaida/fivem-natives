import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:REMOVE_VEHICLE_STUCK_CHECK
 *
 * 0xB7BDF91BE073DCFB

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function removeVehicleStuckCheck(vehicle: VehicleIndex): void {
	const removeVehicleStuckCheck_result = Citizen.invokeNative<void>('0xB7BDF91BE073DCFB', vehicle);
	return removeVehicleStuckCheck_result;
}