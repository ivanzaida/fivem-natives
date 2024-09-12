/**
 * MISC:IS_XBOX_PLATFROM
 *
 * 0xFF449C9B68734F2B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isXboxPlatfrom(): boolean {
	const isXboxPlatfrom_result = Citizen.invokeNative<boolean>('0xFF449C9B68734F2B', );
	return isXboxPlatfrom_result;
}