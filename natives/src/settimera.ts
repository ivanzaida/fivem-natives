/**
 * SYSTEM:SETTIMERA
 *
 * 0xC1B1E9A034A63A62

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function settimera(value: number): void {
	const settimera_result = Citizen.invokeNative<void>('0xC1B1E9A034A63A62', value);
	return settimera_result;
}