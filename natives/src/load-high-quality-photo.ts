/**
 * GRAPHICS:LOAD_HIGH_QUALITY_PHOTO
 *
 * 0xE2935008625A1BE0

 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} photoSlot
 * @returns {boolean}  
 */
export function loadHighQualityPhoto(photoSlot: number): boolean {
	const loadHighQualityPhoto_result = Citizen.invokeNative<boolean>('0xE2935008625A1BE0', photoSlot);
	return loadHighQualityPhoto_result;
}