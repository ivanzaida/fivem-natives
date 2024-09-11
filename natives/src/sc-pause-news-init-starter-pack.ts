/**
 * SOCIALCLUB:SC_PAUSE_NEWS_INIT_STARTER_PACK
 *
 * 0xDF0800F98C6064FB

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isOwned
 * @returns {boolean}  
 */
export function scPauseNewsInitStarterPack(isOwned: boolean): boolean {
	const scPauseNewsInitStarterPack_result = Citizen.invokeNative<boolean>('0xDF0800F98C6064FB', isOwned);
	return scPauseNewsInitStarterPack_result;
}