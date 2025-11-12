/**
 * PAD:SWITCH_PC_SCRIPTED_CONTROLS
 *
 * 0x60923CE1CFC6ABD4

 * 
 * This should only be called to switch to another control sceme when the dynamic system is loaded.
 * 
 * Same as INIT_PC_SCRIPTED_CONTROLS
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} schemeName
 * @returns {boolean}  
 */
export function switchPcScriptedControls(schemeName: string): boolean {
	const switchPcScriptedControls_result = Citizen.invokeNative<boolean>('0x60923CE1CFC6ABD4', schemeName);
	return switchPcScriptedControls_result;
}