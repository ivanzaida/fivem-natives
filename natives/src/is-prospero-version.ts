/**
 * MISC:IS_PROSPERO_VERSION
 *
 * 0x716271729B9FB8E6

 * 
 * PS5 (Prospero) version...
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isProsperoVersion(): boolean {
	const isProsperoVersion_result = Citizen.invokeNative<boolean>('0x716271729B9FB8E6', );
	return isProsperoVersion_result;
}