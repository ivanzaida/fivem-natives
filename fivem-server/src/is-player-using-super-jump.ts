/**
 * CFX:IS_PLAYER_USING_SUPER_JUMP
 *
 * 0XC7D2C20C

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 * @returns {boolean}  A boolean.
 */
export function isPlayerUsingSuperJump(playerSrc: string): boolean {
	const isPlayerUsingSuperJump_result = Citizen.invokeNative<boolean>('0XC7D2C20C', playerSrc);
	return isPlayerUsingSuperJump_result;
}