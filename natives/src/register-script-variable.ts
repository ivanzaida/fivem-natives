import { IntRef } from '@ivanzaida/structures'

/**
 * SECURITY:REGISTER_SCRIPT_VARIABLE
 *
 * 0xFAF127E6FF05E72E

 * 
 * Register a script variable for protection with RageSec plugin. The plugin will
 * keep an obfuscated shadow copy of the variable.
 * Call this function whenever the protected script variable is modified to update
 * the shadow copy at the plugin. Failing to do so will cause the plugin to think
 * the script variable is being tampered with.
 * 
 * Registers a protected variable that will be checked for modifications by the anticheat
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} scriptVariable [Ref]
 */
export function registerScriptVariable(scriptVariable: IntRef /* ptr */): void {
	const registerScriptVariable_result = Citizen.invokeNative<void>('0xFAF127E6FF05E72E', scriptVariable.dataView);
	return registerScriptVariable_result;
}