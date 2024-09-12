import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:BLOCK_PED_FROM_GENERATING_DEAD_BODY_EVENTS_WHEN_DEAD
 *
 * 0x26F0AA3C95EE2A6B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} block
 */
export function blockPedFromGeneratingDeadBodyEventsWhenDead(ped: PedIndex, block: boolean): void {
	const blockPedFromGeneratingDeadBodyEventsWhenDead_result = Citizen.invokeNative<void>('0x26F0AA3C95EE2A6B', ped, block);
	return blockPedFromGeneratingDeadBodyEventsWhenDead_result;
}