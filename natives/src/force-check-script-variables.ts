/**
 * SECURITY:FORCE_CHECK_SCRIPT_VARIABLES
 *
 * 0x3AABE0CD8115D72E

 * 
 * Force the RageSec plugin to check the integrity of all script variables registered
 * for protection.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function forceCheckScriptVariables(): void {
	const forceCheckScriptVariables_result = Citizen.invokeNative<void>('0x3AABE0CD8115D72E', );
	return forceCheckScriptVariables_result;
}