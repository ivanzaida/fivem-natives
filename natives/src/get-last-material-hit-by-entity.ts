import { EntityIndex, EMaterialNames } from '@ivanzaida/structures'

/**
 * ENTITY:GET_LAST_MATERIAL_HIT_BY_ENTITY
 *
 * 0x28637BDE402A5913

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {EMaterialNames}  
 */
export function getLastMaterialHitByEntity(entity: EntityIndex): EMaterialNames {
	const getLastMaterialHitByEntity_result = Citizen.invokeNative<EMaterialNames>('0x28637BDE402A5913', entity);
	return getLastMaterialHitByEntity_result;
}