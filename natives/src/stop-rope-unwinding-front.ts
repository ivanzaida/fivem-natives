import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:STOP_ROPE_UNWINDING_FRONT
 *
 * 0x780E1FA7EA99BE9A

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 */
export function stopRopeUnwindingFront(ropeID: RopeIndex): void {
	const stopRopeUnwindingFront_result = Citizen.invokeNative<void>('0x780E1FA7EA99BE9A', ropeID);
	return stopRopeUnwindingFront_result;
}