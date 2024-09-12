import { VehicleIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_ENTITY_ATTACHED_TO_CARGOBOB
 *
 * 0xA60E0FC9E433408C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @returns {EntityIndex}  
 */
export function getEntityAttachedToCargobob(cargobob: VehicleIndex): EntityIndex {
	const getEntityAttachedToCargobob_result = Citizen.invokeNative<EntityIndex>('0xA60E0FC9E433408C', cargobob);
	return getEntityAttachedToCargobob_result;
}