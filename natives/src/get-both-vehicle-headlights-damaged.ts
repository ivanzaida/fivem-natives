import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_BOTH_VEHICLE_HEADLIGHTS_DAMAGED
 *
 * 0xADBCF06C9348EEF5

 * 
 * Returns true when both headlights are broken. This does not include extralights.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getBothVehicleHeadlightsDamaged(vehicle: VehicleIndex): boolean {
	const getBothVehicleHeadlightsDamaged_result = Citizen.invokeNative<boolean>('0xADBCF06C9348EEF5', vehicle);
	return getBothVehicleHeadlightsDamaged_result;
}