/**
 * SYSTEM:TIMERA
 *
 * 0x83666F9FB8FEBD4B

 * 
 * Counts up. Every 1000 is 1 real-time second. Use SETTIMERA(int value) to set the timer (e.g.: SETTIMERA(0)).
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function timera(): number {
	const timera_result = Citizen.invokeNative<number>('0x83666F9FB8FEBD4B', );
	return timera_result;
}