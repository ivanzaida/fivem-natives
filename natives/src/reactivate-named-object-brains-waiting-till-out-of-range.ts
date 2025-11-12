/**
 * BRAIN:REACTIVATE_NAMED_OBJECT_BRAINS_WAITING_TILL_OUT_OF_RANGE
 *
 * 0xB3D198039DB6F5C6

 * 
 * Looks like a cousin of above function _6D6840CEE8845831 as it was found among them. Must be similar
 * 
 * Here are possible values of argument -
 * 
 * "ob_tv"
 * "launcher_Darts"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} scriptName
 */
export function reactivateNamedObjectBrainsWaitingTillOutOfRange(scriptName: string): void {
	const reactivateNamedObjectBrainsWaitingTillOutOfRange_result = Citizen.invokeNative<void>('0xB3D198039DB6F5C6', scriptName);
	return reactivateNamedObjectBrainsWaitingTillOutOfRange_result;
}