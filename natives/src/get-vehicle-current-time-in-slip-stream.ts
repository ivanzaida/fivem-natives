import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_CURRENT_TIME_IN_SLIP_STREAM
 *
 * 0x8A278879AFDDD37B

 * 
 * Returns a float value between 0.0 and 3.0 related to its slipstream draft (boost/speedup).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleCurrentTimeInSlipStream(vehicle: VehicleIndex): number {
	const getVehicleCurrentTimeInSlipStream_result = Citizen.invokeNative<number>('0x8A278879AFDDD37B', vehicle);
	return getVehicleCurrentTimeInSlipStream_result;
}