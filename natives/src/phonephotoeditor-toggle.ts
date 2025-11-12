/**
 * GRAPHICS:PHONEPHOTOEDITOR_TOGGLE
 *
 * 0x6256A54A328A35E6

 * 
 * Toggles support for custom border image and text for pictures taken with the in-game phone
 * Returns FALSE (and asserts) only if trying to enable it when already enabled or when disabling it
 * while already disabled. If necessary, use PHONEPHOTOEDITOR_IS_ACTIVE to check
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 * @returns {boolean}  
 */
export function phonephotoeditorToggle(enable: boolean): boolean {
	const phonephotoeditorToggle_result = Citizen.invokeNative<boolean>('0x6256A54A328A35E6', enable);
	return phonephotoeditorToggle_result;
}