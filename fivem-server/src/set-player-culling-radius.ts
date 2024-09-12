/**
 * CFX:SET_PLAYER_CULLING_RADIUS
 *
 * 0x8A2FBAD4

 * Sets the culling radius for the specified player.Set to `0.0` to reset.WARNING: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player to set the culling radius for.
 * @param {number} radius The radius.
 */
export function setPlayerCullingRadius(playerSrc: string, radius: number): void {
	const setPlayerCullingRadius_result = Citizen.invokeNative<void>('0x8A2FBAD4', playerSrc, radius);
	return setPlayerCullingRadius_result;
}