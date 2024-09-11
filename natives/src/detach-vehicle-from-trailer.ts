import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DETACH_VEHICLE_FROM_TRAILER
 *
 * 0x157D966854AABDA6

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function detachVehicleFromTrailer(vehicle: VehicleIndex): void {
	const detachVehicleFromTrailer_result = Citizen.invokeNative<void>('0x157D966854AABDA6', vehicle);
	return detachVehicleFromTrailer_result;
}