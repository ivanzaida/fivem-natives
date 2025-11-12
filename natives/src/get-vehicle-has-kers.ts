import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_HAS_KERS
 *
 * 0xF548473734CBB33B

 * 
 * Returns true if the vehicle has a HF_HAS_KERS (strHandlingFlags 0x4) handing flag set, for instance the lectro/vindicator bikes or the open wheelers.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getVehicleHasKers(vehicle: VehicleIndex): boolean {
	const getVehicleHasKers_result = Citizen.invokeNative<boolean>('0xF548473734CBB33B', vehicle);
	return getVehicleHasKers_result;
}