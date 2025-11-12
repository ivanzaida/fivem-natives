import { IntRef } from '@ivanzaida/structures'

/**
 * SECURITY:UNREGISTER_SCRIPT_VARIABLE
 *
 * 0xA759D3AD1579CBCB

 * 
 * Unregister a script variable from protection with RageSec plugin. Use this to
 * remove a script variable that has gone out of scope to avoid false tamper alerts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} scriptVariable [Ref]
 */
export function unregisterScriptVariable(scriptVariable: IntRef /* ptr */): void {
	const unregisterScriptVariable_result = Citizen.invokeNative<void>('0xA759D3AD1579CBCB', scriptVariable.dataView);
	return unregisterScriptVariable_result;
}