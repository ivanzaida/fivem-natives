/**
 * STATS:START_BEING_BOSS
 *
 * 0xE6523AD46828A3F6

 * 
 * ------------------------------------------------------------------
 * @param {number} version
 */
export function startBeingBoss(version: number = 1): void {
	const startBeingBoss_result = Citizen.invokeNative<void>('0xE6523AD46828A3F6', version);
	return startBeingBoss_result;
}