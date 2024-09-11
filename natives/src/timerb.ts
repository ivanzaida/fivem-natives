/**
 * SYSTEM:TIMERB
 *
 * 0xC9D9444186B5A374

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function timerb(): number {
	const timerb_result = Citizen.invokeNative<number>('0xC9D9444186B5A374', );
	return timerb_result;
}