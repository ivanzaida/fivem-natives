/**
 * CFX:IS_PLAYER_EVADING_WANTED_LEVEL
 *
 * 0x89A3881A

 * ```This will return true if the player is evading wanted level, meaning that the wanted level stars are blink.Otherwise will return false.If the player is not wanted, it simply returns false.```
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The target player
 * @returns {boolean}  boolean value, depending if the player is evading his wanted level or not.
 */
export function isPlayerEvadingWantedLevel(playerSrc: string): boolean {
	const isPlayerEvadingWantedLevel_result = Citizen.invokeNative<boolean>('0x89A3881A', playerSrc);
	return isPlayerEvadingWantedLevel_result;
}