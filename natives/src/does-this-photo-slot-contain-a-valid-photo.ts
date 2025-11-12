/**
 * GRAPHICS:DOES_THIS_PHOTO_SLOT_CONTAIN_A_VALID_PHOTO
 *
 * 0xA536EFAB049B26A3

 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} photoSlot
 * @returns {boolean}  
 */
export function doesThisPhotoSlotContainAValidPhoto(photoSlot: number): boolean {
	const doesThisPhotoSlotContainAValidPhoto_result = Citizen.invokeNative<boolean>('0xA536EFAB049B26A3', photoSlot);
	return doesThisPhotoSlotContainAValidPhoto_result;
}