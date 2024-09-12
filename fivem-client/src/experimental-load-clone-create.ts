import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:EXPERIMENTAL_LOAD_CLONE_CREATE
 *
 * 0xD2CB95A3

 * This native is not implemented.
 * 
 * ------------------------------------------------------------------
 * @param {string} data
 * @param {number} objectId
 * @param {string} tree
 * @returns {EntityIndex}  
 */
export function experimentalLoadCloneCreate(data: string, objectId: number, tree: string): EntityIndex {
	const experimentalLoadCloneCreate_result = Citizen.invokeNative<EntityIndex>('0xD2CB95A3', data, objectId, tree);
	return experimentalLoadCloneCreate_result;
}