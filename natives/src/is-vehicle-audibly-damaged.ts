import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:IS_VEHICLE_AUDIBLY_DAMAGED
 *
 * 0xE3DB661464962CF4

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleAudiblyDamaged(vehicle: VehicleIndex): boolean {
	const isVehicleAudiblyDamaged_result = Citizen.invokeNative<boolean>('0xE3DB661464962CF4', vehicle);
	return isVehicleAudiblyDamaged_result;
}