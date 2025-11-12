import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_LOD_DIST
 *
 * 0xF88FC425EC7D675D

 * 
 * LOD distance can be 0 to 0xFFFF (higher values will result in 0xFFFF) as it is actually stored as a 16-bit value (aka uint16_t).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} lodDist
 */
export function setEntityLodDist(entity: EntityIndex, lodDist: number): void {
	const setEntityLodDist_result = Citizen.invokeNative<void>('0xF88FC425EC7D675D', entity, lodDist);
	return setEntityLodDist_result;
}