/**
 * STATS:PLAYSTATS_CHEAT_APPLIED
 *
 * 0xDB98FB9902F6B17C

 * 
 * ------------------------------------------------------------------
 * @param {string} cheatString
 */
export function playstatsCheatApplied(cheatString: string): void {
	const playstatsCheatApplied_result = Citizen.invokeNative<void>('0xDB98FB9902F6B17C', cheatString);
	return playstatsCheatApplied_result;
}