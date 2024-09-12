import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:EXPERIMENTAL_SAVE_CLONE_CREATE
 *
 * 0x9D65CAD2

 * This native is not implemented.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {string}  
 */
export function experimentalSaveCloneCreate(entity: EntityIndex): string {
	const experimentalSaveCloneCreate_result = Citizen.invokeNative<string>('0x9D65CAD2', entity);
	return experimentalSaveCloneCreate_result;
}