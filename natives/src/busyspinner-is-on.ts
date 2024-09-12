/**
 * HUD:BUSYSPINNER_IS_ON
 *
 * 0x73F9AE5F32ABCCA9

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function busyspinnerIsOn(): boolean {
	const busyspinnerIsOn_result = Citizen.invokeNative<boolean>('0x73F9AE5F32ABCCA9', );
	return busyspinnerIsOn_result;
}