/**
 * PLAYER:IS_PLAYER_TELEPORT_ACTIVE
 *
 * 0x705A7AB2D4BC0A9B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isPlayerTeleportActive(): boolean {
	const isPlayerTeleportActive_result = Citizen.invokeNative<boolean>('0x705A7AB2D4BC0A9B', );
	return isPlayerTeleportActive_result;
}