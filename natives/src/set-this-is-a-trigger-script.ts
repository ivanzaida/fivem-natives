/**
 * MISC:SET_THIS_IS_A_TRIGGER_SCRIPT
 *
 * 0x2918C30E34ED2C88

 * 
 * Sets bit 3 in GtaThread+0x150
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} thisScriptIsATriggerScript
 */
export function setThisIsATriggerScript(thisScriptIsATriggerScript: boolean): void {
	const setThisIsATriggerScript_result = Citizen.invokeNative<void>('0x2918C30E34ED2C88', thisScriptIsATriggerScript);
	return setThisIsATriggerScript_result;
}