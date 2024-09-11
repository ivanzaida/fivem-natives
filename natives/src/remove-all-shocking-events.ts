/**
 * EVENT:REMOVE_ALL_SHOCKING_EVENTS
 *
 * 0xEAFAA716662898B8

 * 
 * ------------------------------------------------------------------
 * @param {boolean} scriptCreatedOnly
 */
export function removeAllShockingEvents(scriptCreatedOnly: boolean): void {
	const removeAllShockingEvents_result = Citizen.invokeNative<void>('0xEAFAA716662898B8', scriptCreatedOnly);
	return removeAllShockingEvents_result;
}