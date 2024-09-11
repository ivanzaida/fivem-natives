/**
 * MISC:IS_SCE_PLATFORM
 *
 * 0xC5D69BE0998EF509

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isScePlatform(): boolean {
	const isScePlatform_result = Citizen.invokeNative<boolean>('0xC5D69BE0998EF509', );
	return isScePlatform_result;
}