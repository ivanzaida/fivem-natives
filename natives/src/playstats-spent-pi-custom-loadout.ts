/**
 * STATS:PLAYSTATS_SPENT_PI_CUSTOM_LOADOUT
 *
 * 0x90D02DA0EBE3D2A2

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function playstatsSpentPiCustomLoadout(value: number): void {
	const playstatsSpentPiCustomLoadout_result = Citizen.invokeNative<void>('0x90D02DA0EBE3D2A2', value);
	return playstatsSpentPiCustomLoadout_result;
}