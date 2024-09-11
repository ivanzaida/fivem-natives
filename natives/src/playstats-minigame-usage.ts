/**
 * STATS:PLAYSTATS_MINIGAME_USAGE
 *
 * 0xF8C98B298DDC5D32

 * 
 * ------------------------------------------------------------------
 * @param {number} usage
 * @param {number} location
 * @param {number} duration
 */
export function playstatsMinigameUsage(usage: number, location: number = 0, duration: number = 0): void {
	const playstatsMinigameUsage_result = Citizen.invokeNative<void>('0xF8C98B298DDC5D32', usage, location, duration);
	return playstatsMinigameUsage_result;
}