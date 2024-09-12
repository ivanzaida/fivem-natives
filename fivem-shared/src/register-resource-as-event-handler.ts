/**
 * CFX:REGISTER_RESOURCE_AS_EVENT_HANDLER
 *
 * 0xD233A168

 * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
 * 
 * ------------------------------------------------------------------
 * @param {string} eventName An event name, or "" to disable HLL event filtering for this resource.
 */
export function registerResourceAsEventHandler(eventName: string): void {
	const registerResourceAsEventHandler_result = Citizen.invokeNative<void>('0xD233A168', eventName);
	return registerResourceAsEventHandler_result;
}