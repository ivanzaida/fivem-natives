/**
 * PLAYER:SET_PLAYER_CLOTH_LOCK_COUNTER
 *
 * 0x8D51A58AA12E95D0

 * 
 * Set number of frames to lock cloth
 * 
 * 6 matches across 4 scripts. 5 occurrences were 240. The other was 255.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} lockCounter
 */
export function setPlayerClothLockCounter(lockCounter: number): void {
	const setPlayerClothLockCounter_result = Citizen.invokeNative<void>('0x8D51A58AA12E95D0', lockCounter);
	return setPlayerClothLockCounter_result;
}