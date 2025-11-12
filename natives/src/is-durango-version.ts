/**
 * MISC:IS_DURANGO_VERSION
 *
 * 0xFD5A25A8B9488D42

 * 
 * XBOX ONE
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isDurangoVersion(): boolean {
	const isDurangoVersion_result = Citizen.invokeNative<boolean>('0xFD5A25A8B9488D42', );
	return isDurangoVersion_result;
}