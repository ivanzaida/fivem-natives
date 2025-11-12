/**
 * MISC:GET_IS_AUTO_SAVE_OFF
 *
 * 0xB0B88048B5914A7A

 * 
 * Returns true if profile setting 208 is equal to 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getIsAutoSaveOff(): boolean {
	const getIsAutoSaveOff_result = Citizen.invokeNative<boolean>('0xB0B88048B5914A7A', );
	return getIsAutoSaveOff_result;
}