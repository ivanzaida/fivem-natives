/**
 * MISC:IS_AUSSIE_VERSION
 *
 * 0x1EF90593EF09F7FA

 * 
 * Used to block some of the prostitute stuff due to laws in Australia.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isAussieVersion(): boolean {
	const isAussieVersion_result = Citizen.invokeNative<boolean>('0x1EF90593EF09F7FA', );
	return isAussieVersion_result;
}