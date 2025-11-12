/**
 * AUDIO:STOP_SMOKE_GRENADE_EXPLOSION_SOUNDS
 *
 * 0x57BCB62796BFF290

 * 
 * STOP_S[MOKE_GRENADE_EXPLOSION_SOUNDS]?
 * 
 * 
 * ------------------------------------------------------------------
 */
export function stopSmokeGrenadeExplosionSounds(): void {
	const stopSmokeGrenadeExplosionSounds_result = Citizen.invokeNative<void>('0x57BCB62796BFF290', );
	return stopSmokeGrenadeExplosionSounds_result;
}