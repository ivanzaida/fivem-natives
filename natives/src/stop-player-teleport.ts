/**
 * PLAYER:STOP_PLAYER_TELEPORT
 *
 * 0xEB205B72FDDFDFC6

 * 
 * Disables the player's teleportation
 * 
 * 
 * ------------------------------------------------------------------
 */
export function stopPlayerTeleport(): void {
	const stopPlayerTeleport_result = Citizen.invokeNative<void>('0xEB205B72FDDFDFC6', );
	return stopPlayerTeleport_result;
}