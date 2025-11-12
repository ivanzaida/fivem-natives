import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_IS_RIGHT_VEHICLE_HEADLIGHT_DAMAGED
 *
 * 0x08046513BC06BFBC

 * 
 * From the driver's perspective, is the right headlight broken.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getIsRightVehicleHeadlightDamaged(vehicle: VehicleIndex): boolean {
	const getIsRightVehicleHeadlightDamaged_result = Citizen.invokeNative<boolean>('0x08046513BC06BFBC', vehicle);
	return getIsRightVehicleHeadlightDamaged_result;
}