/**
 * BRAIN:ENABLE_SCRIPT_BRAIN_SET
 *
 * 0x4C38AD1938C28F80

 * 
 * ------------------------------------------------------------------
 * @param {number} set
 */
export function enableScriptBrainSet(set: number): void {
	const enableScriptBrainSet_result = Citizen.invokeNative<void>('0x4C38AD1938C28F80', set);
	return enableScriptBrainSet_result;
}