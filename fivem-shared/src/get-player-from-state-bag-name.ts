/**
 * CFX:GET_PLAYER_FROM_STATE_BAG_NAME
 *
 * 0xA56135E0

 * On the server this will return the players source, on the client it will return the player handle.
 * 
 * ------------------------------------------------------------------
 * @param {string} bagName An internal state bag ID from the argument to a state bag change handler.
 * @returns {number}  The player handle or 0 if the state bag name did not refer to a player, or the player does not exist.
 */
export function getPlayerFromStateBagName(bagName: string): number {
	const getPlayerFromStateBagName_result = Citizen.invokeNative<number>('0xA56135E0', bagName);
	return getPlayerFromStateBagName_result;
}