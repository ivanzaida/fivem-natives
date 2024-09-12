/**
 * MISC:DISABLE_STUNT_JUMP_SET
 *
 * 0xF27998ADBDAB9049

 * 
 * ------------------------------------------------------------------
 * @param {number} set
 */
export function disableStuntJumpSet(set: number): void {
	const disableStuntJumpSet_result = Citizen.invokeNative<void>('0xF27998ADBDAB9049', set);
	return disableStuntJumpSet_result;
}