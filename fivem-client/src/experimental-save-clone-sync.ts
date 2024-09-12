import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:EXPERIMENTAL_SAVE_CLONE_SYNC
 *
 * 0x38D19210

 * This native is not implemented.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {string}  
 */
export function experimentalSaveCloneSync(entity: EntityIndex): string {
	const experimentalSaveCloneSync_result = Citizen.invokeNative<string>('0x38D19210', entity);
	return experimentalSaveCloneSync_result;
}