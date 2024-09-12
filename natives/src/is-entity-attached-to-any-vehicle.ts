import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_ATTACHED_TO_ANY_VEHICLE
 *
 * 0xB431D60610E7F85F

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityAttachedToAnyVehicle(entity: EntityIndex): boolean {
	const isEntityAttachedToAnyVehicle_result = Citizen.invokeNative<boolean>('0xB431D60610E7F85F', entity);
	return isEntityAttachedToAnyVehicle_result;
}