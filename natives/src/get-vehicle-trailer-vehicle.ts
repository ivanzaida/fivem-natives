import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_TRAILER_VEHICLE
 *
 * 0x20974C28142EB370

 * 
 * Gets the trailer of a vehicle and puts it into the trailer parameter.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} trailer [Ref]
 * @returns {boolean}  
 */
export function getVehicleTrailerVehicle(vehicle: VehicleIndex, trailer: IntRef /* ptr */): boolean {
	const getVehicleTrailerVehicle_result = Citizen.invokeNative<boolean>('0x20974C28142EB370', vehicle, trailer.dataView);
	return getVehicleTrailerVehicle_result;
}