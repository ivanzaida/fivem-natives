import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_DAMAGE_WITH_PICKED_UP_ENTITY
 *
 * 0x793D2505EE281DDD

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} disableDamage
 * @returns {boolean}  
 */
export function setDisableDamageWithPickedUpEntity(vehicle: VehicleIndex, disableDamage: boolean): boolean {
	const setDisableDamageWithPickedUpEntity_result = Citizen.invokeNative<boolean>('0x793D2505EE281DDD', vehicle, disableDamage);
	return setDisableDamageWithPickedUpEntity_result;
}