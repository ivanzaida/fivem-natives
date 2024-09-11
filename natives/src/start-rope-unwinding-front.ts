import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:START_ROPE_UNWINDING_FRONT
 *
 * 0x9C8254FD6ED020B7

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 */
export function startRopeUnwindingFront(ropeID: RopeIndex): void {
	const startRopeUnwindingFront_result = Citizen.invokeNative<void>('0x9C8254FD6ED020B7', ropeID);
	return startRopeUnwindingFront_result;
}