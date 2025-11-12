import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_IS_LEFT_VEHICLE_HEADLIGHT_DAMAGED
 *
 * 0xB4A09397270CB974

 * 
 * From the driver's perspective, is the left headlight broken.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getIsLeftVehicleHeadlightDamaged(vehicle: VehicleIndex): boolean {
	const getIsLeftVehicleHeadlightDamaged_result = Citizen.invokeNative<boolean>('0xB4A09397270CB974', vehicle);
	return getIsLeftVehicleHeadlightDamaged_result;
}