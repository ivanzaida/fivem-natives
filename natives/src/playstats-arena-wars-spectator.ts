/**
 * STATS:PLAYSTATS_ARENA_WARS_SPECTATOR
 *
 * 0x2630B46C64BCAAE2

 * 
 * ------------------------------------------------------------------
 * @param {number} contentId
 * @param {number} spectatorMode
 * @param {number} weaponizedMode
 * @param {number} duration
 * @param {number} kills
 */
export function playstatsArenaWarsSpectator(contentId: number, spectatorMode: number, weaponizedMode: number, duration: number, kills: number): void {
	const playstatsArenaWarsSpectator_result = Citizen.invokeNative<void>('0x2630B46C64BCAAE2', contentId, spectatorMode, weaponizedMode, duration, kills);
	return playstatsArenaWarsSpectator_result;
}