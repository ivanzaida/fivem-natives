/**
 * PLAYER:DISABLE_PLAYER_THROW_GRENADE_WHILE_USING_GUN
 *
 * 0xF37B149B1A382D5B

 * 
 * Used only once in R scripts (freemode.ysc).
 * 
 * 
 * ------------------------------------------------------------------
 */
export function disablePlayerThrowGrenadeWhileUsingGun(): void {
	const disablePlayerThrowGrenadeWhileUsingGun_result = Citizen.invokeNative<void>('0xF37B149B1A382D5B', );
	return disablePlayerThrowGrenadeWhileUsingGun_result;
}