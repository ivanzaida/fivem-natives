import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_ATTACHED_TO_TRAILER
 *
 * 0xA6D8AF5A058A75F0

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleAttachedToTrailer(vehicle: VehicleIndex): boolean {
	const isVehicleAttachedToTrailer_result = Citizen.invokeNative<boolean>('0xA6D8AF5A058A75F0', vehicle);
	return isVehicleAttachedToTrailer_result;
}