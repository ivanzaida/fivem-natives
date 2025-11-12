/**
 * STATS:SET_JOB_ACTIVITY_ID_STARTED
 *
 * 0x91F6DFBE57E45538

 * 
 * Call to setup the current job activity started in Freemode. Set 0 to clear the value.
 * Use the command GET_PROFILE_SETTING( JOB_ACTIVITY_ID_CHAR0 ) to find out the current value.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} value
 * @param {number} character
 */
export function setJobActivityIdStarted(value: number, character: number): void {
	const setJobActivityIdStarted_result = Citizen.invokeNative<void>('0x91F6DFBE57E45538', value, character);
	return setJobActivityIdStarted_result;
}