import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_BLOCKS_PATHING_WHEN_DEAD
 *
 * 0x67CBB32D0502A940

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} state
 */
export function setPedBlocksPathingWhenDead(ped: PedIndex, state: boolean): void {
	const setPedBlocksPathingWhenDead_result = Citizen.invokeNative<void>('0x67CBB32D0502A940', ped, state);
	return setPedBlocksPathingWhenDead_result;
}