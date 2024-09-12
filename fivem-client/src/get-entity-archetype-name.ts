import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_ARCHETYPE_NAME
 *
 * 0X47B870F5

 * Returns entity's archetype name, if available.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity An entity handle.
 * @returns {string}  Entity's archetype name
 */
export function getEntityArchetypeName(entity: EntityIndex): string {
	const getEntityArchetypeName_result = Citizen.invokeNative<string>('0X47B870F5', entity);
	return getEntityArchetypeName_result;
}