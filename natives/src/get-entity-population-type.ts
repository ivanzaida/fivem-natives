import { EntityIndex, EEntityPopulationType } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_POPULATION_TYPE
 *
 * 0xA598E8A456B0A2F7

 * 
 * A population type, from the following enum: https://alloc8or.re/gta5/doc/enums/ePopulationType.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {EEntityPopulationType}  
 */
export function getEntityPopulationType(entity: EntityIndex): EEntityPopulationType {
	const getEntityPopulationType_result = Citizen.invokeNative<EEntityPopulationType>('0xA598E8A456B0A2F7', entity);
	return getEntityPopulationType_result;
}