/**
 * SCRIPT:REQUEST_SCRIPT
 *
 * 0x97A5024CE91641F1

 * 
 * ------------------------------------------------------------------
 * @param {string} scriptname
 */
export function requestScript(scriptname: string): void {
	const requestScript_result = Citizen.invokeNative<void>('0x97A5024CE91641F1', scriptname);
	return requestScript_result;
}