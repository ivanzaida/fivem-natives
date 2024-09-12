/**
 * STATS:PLAYSTATS_BACKGROUND_SCRIPT_ACTION
 *
 * 0xF62AFE29E168F6E0

 * 
 * ------------------------------------------------------------------
 * @param {string} type
 * @param {number} data
 */
export function playstatsBackgroundScriptAction(type: string, data: number): void {
	const playstatsBackgroundScriptAction_result = Citizen.invokeNative<void>('0xF62AFE29E168F6E0', type, data);
	return playstatsBackgroundScriptAction_result;
}