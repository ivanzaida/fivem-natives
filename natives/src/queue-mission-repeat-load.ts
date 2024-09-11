/**
 * MISC:QUEUE_MISSION_REPEAT_LOAD
 *
 * 0x46A69DE38863D8FD

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function queueMissionRepeatLoad(): boolean {
	const queueMissionRepeatLoad_result = Citizen.invokeNative<boolean>('0x46A69DE38863D8FD', );
	return queueMissionRepeatLoad_result;
}