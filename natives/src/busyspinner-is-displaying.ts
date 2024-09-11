/**
 * HUD:BUSYSPINNER_IS_DISPLAYING
 *
 * 0x92E1F6B57257471D

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function busyspinnerIsDisplaying(): boolean {
	const busyspinnerIsDisplaying_result = Citizen.invokeNative<boolean>('0x92E1F6B57257471D', );
	return busyspinnerIsDisplaying_result;
}