/**
 * SYSTEM:SET_THIS_THREAD_PRIORITY
 *
 * 0x42B65DEEF2EDF2A1

 * 
 * THREAD_PRIO_HIGHEST = 0
 * THREAD_PRIO_NORMAL = 1
 * THREAD_PRIO_LOWEST = 2
 * THREAD_PRIO_MANUAL_UPDATE = 100
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} priority
 */
export function setThisThreadPriority(priority: number): void {
	const setThisThreadPriority_result = Citizen.invokeNative<void>('0x42B65DEEF2EDF2A1', priority);
	return setThisThreadPriority_result;
}