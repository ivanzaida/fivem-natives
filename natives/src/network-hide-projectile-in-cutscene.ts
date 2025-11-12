/**
 * NETWORK:NETWORK_HIDE_PROJECTILE_IN_CUTSCENE
 *
 * 0xCBF07B57F6F01E05

 * 
 * Call this before starting cutscene to hide all projectiles during cutscene
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkHideProjectileInCutscene(): void {
	const networkHideProjectileInCutscene_result = Citizen.invokeNative<void>('0xCBF07B57F6F01E05', );
	return networkHideProjectileInCutscene_result;
}