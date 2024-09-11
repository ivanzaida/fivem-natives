import { VehicleIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DETACH_ENTITY_FROM_CARGOBOB
 *
 * 0x9CF923758A7DEF91

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function detachEntityFromCargobob(cargobob: VehicleIndex, entity: EntityIndex): boolean {
	const detachEntityFromCargobob_result = Citizen.invokeNative<boolean>('0x9CF923758A7DEF91', cargobob, entity);
	return detachEntityFromCargobob_result;
}