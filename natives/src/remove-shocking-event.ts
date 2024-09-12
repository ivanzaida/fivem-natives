/**
 * EVENT:REMOVE_SHOCKING_EVENT
 *
 * 0x6E8A7BB566D1F7AF

 * 
 * ------------------------------------------------------------------
 * @param {number} shockingEventId
 * @returns {boolean}  
 */
export function removeShockingEvent(shockingEventId: number): boolean {
	const removeShockingEvent_result = Citizen.invokeNative<boolean>('0x6E8A7BB566D1F7AF', shockingEventId);
	return removeShockingEvent_result;
}