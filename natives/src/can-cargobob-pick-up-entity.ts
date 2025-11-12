import { VehicleIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:CAN_CARGOBOB_PICK_UP_ENTITY
 *
 * 0xC7654AAAA57E8D28

 * 
 * Returns whether the given entity can be pickup up by the cargobob
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function canCargobobPickUpEntity(cargobob: VehicleIndex, entity: EntityIndex): boolean {
	const canCargobobPickUpEntity_result = Citizen.invokeNative<boolean>('0xC7654AAAA57E8D28', cargobob, entity);
	return canCargobobPickUpEntity_result;
}