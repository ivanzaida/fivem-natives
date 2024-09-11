/**
 * STATS:PLAYSTATS_DJ_USAGE
 *
 * 0x7FCBCE6EE93B0340

 * 
 * ------------------------------------------------------------------
 * @param {number} djUsage
 * @param {number} location
 */
export function playstatsDjUsage(djUsage: number, location: number = 0): void {
	const playstatsDjUsage_result = Citizen.invokeNative<void>('0x7FCBCE6EE93B0340', djUsage, location);
	return playstatsDjUsage_result;
}