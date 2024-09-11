import { EntityIndex, EEntityPopulationType } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_POPULATION_TYPE
 *
 * 0XFC30DDFF

 * A population type, from the following enum: https://alloc8or.re/gta5/doc/enums/ePopulationType.txt
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {EEntityPopulationType}  
 */
export function getEntityPopulationType(entity: EntityIndex): EEntityPopulationType {
	const getEntityPopulationType_result = Citizen.invokeNative<EEntityPopulationType>('0XFC30DDFF', entity);
	return getEntityPopulationType_result;
}