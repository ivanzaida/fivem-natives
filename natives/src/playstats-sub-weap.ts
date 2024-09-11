/**
 * STATS:PLAYSTATS_SUB_WEAP
 *
 * 0xC155FF33EAAF8C90

 * 
 * ------------------------------------------------------------------
 * @param {number} weapon
 * @param {boolean} ownSub
 * @param {number} projectileCount
 * @param {number} kills
 */
export function playstatsSubWeap(weapon: number, ownSub: boolean, projectileCount: number, kills: number): void {
	const playstatsSubWeap_result = Citizen.invokeNative<void>('0xC155FF33EAAF8C90', weapon, ownSub, projectileCount, kills);
	return playstatsSubWeap_result;
}