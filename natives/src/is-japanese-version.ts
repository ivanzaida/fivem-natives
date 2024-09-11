/**
 * MISC:IS_JAPANESE_VERSION
 *
 * 0x74C1828126652223

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isJapaneseVersion(): boolean {
	const isJapaneseVersion_result = Citizen.invokeNative<boolean>('0x74C1828126652223', );
	return isJapaneseVersion_result;
}