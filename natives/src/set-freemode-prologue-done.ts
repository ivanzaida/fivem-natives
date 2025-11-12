/**
 * STATS:SET_FREEMODE_PROLOGUE_DONE
 *
 * 0x1A169A00A9C3A74E

 * 
 * Call to setup that the freemode prologue has been done. Set 0 to clear the value and 1 to set as done.
 * Use the command GET_PROFILE_SETTING( FREEMODE_PROLOGUE_COMPLETE_CHAR0 ) to find out the current value.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} value
 * @param {number} character
 */
export function setFreemodePrologueDone(value: number, character: number): void {
	const setFreemodePrologueDone_result = Citizen.invokeNative<void>('0x1A169A00A9C3A74E', value, character);
	return setFreemodePrologueDone_result;
}