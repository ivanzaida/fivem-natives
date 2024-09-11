import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:EXPERIMENTAL_LOAD_CLONE_SYNC
 *
 * 0X6BC189AC

 * This native is not implemented.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {string} data
 */
export function experimentalLoadCloneSync(entity: EntityIndex, data: string): void {
	const experimentalLoadCloneSync_result = Citizen.invokeNative<void>('0X6BC189AC', entity, data);
	return experimentalLoadCloneSync_result;
}