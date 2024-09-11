/**
 * MISC:ENABLE_STUNT_JUMP_SET
 *
 * 0x28365F67ED751FCB

 * 
 * ------------------------------------------------------------------
 * @param {number} set
 */
export function enableStuntJumpSet(set: number): void {
	const enableStuntJumpSet_result = Citizen.invokeNative<void>('0x28365F67ED751FCB', set);
	return enableStuntJumpSet_result;
}