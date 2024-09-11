/**
 * GRAPHICS:SET_TAKEN_PHOTO_IS_MUGSHOT
 *
 * 0x21DA82F574DDCFD2

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isMugshot
 */
export function setTakenPhotoIsMugshot(isMugshot: boolean): void {
	const setTakenPhotoIsMugshot_result = Citizen.invokeNative<void>('0x21DA82F574DDCFD2', isMugshot);
	return setTakenPhotoIsMugshot_result;
}