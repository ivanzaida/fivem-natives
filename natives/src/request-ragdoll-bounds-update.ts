import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:REQUEST_RAGDOLL_BOUNDS_UPDATE
 *
 * 0xA56B5C6A4349684D

 * 
 * Instructs the game to update ragdoll bounds for animated AI peds for a specified number of frames.
 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} framesToUpdateBounds Gets set as a u16 in code, so make sure that the input value in between 0 and 65535.
 */
export function requestRagdollBoundsUpdate(ped: PedIndex, framesToUpdateBounds: number = 10): void {
	const requestRagdollBoundsUpdate_result = Citizen.invokeNative<void>('0xA56B5C6A4349684D', ped, framesToUpdateBounds);
	return requestRagdollBoundsUpdate_result;
}