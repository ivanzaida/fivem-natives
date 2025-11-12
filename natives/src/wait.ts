/**
 * SYSTEM:WAIT
 *
 * 0x4EDE34FBADD967A6

 * 
 * Pauses execution of the current script, please note this behavior is only seen when called from one of the game script files(ysc). In order to wait an asi script use "static void WAIT(DWORD time);" found in main.h
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} ms
 */
export function wait(ms: number): void {
	const wait_result = Citizen.invokeNative<void>('0x4EDE34FBADD967A6', ms);
	return wait_result;
}