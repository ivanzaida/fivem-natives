/**
 * PAD:INIT_PC_SCRIPTED_CONTROLS
 *
 * 0x005E8B7CFA7D52A6

 * 
 * SHUTDOWN_PC_SCRIPTED_CONTROLS() must be called when finished.
 * 
 * Used in carsteal3 script with schemeName = "Carsteal4_spycar".
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} schemeName
 * @returns {boolean}  
 */
export function initPcScriptedControls(schemeName: string): boolean {
	const initPcScriptedControls_result = Citizen.invokeNative<boolean>('0x005E8B7CFA7D52A6', schemeName);
	return initPcScriptedControls_result;
}