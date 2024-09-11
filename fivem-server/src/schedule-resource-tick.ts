/**
 * CFX:SCHEDULE_RESOURCE_TICK
 *
 * 0XB88A73AD

 * Schedules the specified resource to run a tick as soon as possible, bypassing the server's fixed tick rate.
 * 
 * ------------------------------------------------------------------
 * @param {string} resourceName The resource to tick.
 */
export function scheduleResourceTick(resourceName: string): void {
	const scheduleResourceTick_result = Citizen.invokeNative<void>('0XB88A73AD', resourceName);
	return scheduleResourceTick_result;
}