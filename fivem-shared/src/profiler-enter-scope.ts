/**
 * CFX:PROFILER_ENTER_SCOPE
 *
 * 0xC795A4A9

 * Scope entry for profiler.
 * 
 * ------------------------------------------------------------------
 * @param {string} scopeName Scope name.
 */
export function profilerEnterScope(scopeName: string): void {
	const profilerEnterScope_result = Citizen.invokeNative<void>('0xC795A4A9', scopeName);
	return profilerEnterScope_result;
}