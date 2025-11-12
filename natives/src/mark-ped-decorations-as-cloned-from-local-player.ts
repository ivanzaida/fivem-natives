import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:MARK_PED_DECORATIONS_AS_CLONED_FROM_LOCAL_PLAYER
 *
 * 0x67A5951D0BFF01FA

 * 
 * Allows the decoration set of a ped cloned from the local player to be marked as such so that
 * tattoos/decals show up in mirrors
 * When cloning from the player ped,  this flag is automatically set up by code, but whenever decorations
 * are cleared from the clone, the flag is lost (i.e.: in those cases this commands needs to be called)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} wasClonedFromLocalPlayer
 */
export function markPedDecorationsAsClonedFromLocalPlayer(ped: PedIndex, wasClonedFromLocalPlayer: boolean): void {
	const markPedDecorationsAsClonedFromLocalPlayer_result = Citizen.invokeNative<void>('0x67A5951D0BFF01FA', ped, wasClonedFromLocalPlayer);
	return markPedDecorationsAsClonedFromLocalPlayer_result;
}