/**
 * STATS:STATS_COMPLETED_CHARACTER_CREATION
 *
 * 0xCD2B99375CA577C6

 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} char
 */
export function statsCompletedCharacterCreation(char: number): void {
	const statsCompletedCharacterCreation_result = Citizen.invokeNative<void>('0xCD2B99375CA577C6', char);
	return statsCompletedCharacterCreation_result;
}