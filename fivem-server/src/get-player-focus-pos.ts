import { Vector3Ref } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_FOCUS_POS
 *
 * 0x586F80FF

 * Gets the focus position (i.e. the position of the active camera in the game world) of a player.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player to get the focus position of
 * @returns {Vector3Ref}  Returns a `Vector3` containing the focus position of the player.
 */
export function getPlayerFocusPos(playerSrc: string): Vector3Ref {
	const getPlayerFocusPos_result = Citizen.invokeNative<Vector3Ref>('0x586F80FF', playerSrc);
	return getPlayerFocusPos_result;
}