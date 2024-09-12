/**
 * CFX:DROP_PLAYER
 *
 * 0xBA0613E1

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc
 * @param {string} reason
 */
export function dropPlayer(playerSrc: string, reason: string): void {
	const dropPlayer_result = Citizen.invokeNative<void>('0xBA0613E1', playerSrc, reason);
	return dropPlayer_result;
}