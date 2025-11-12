/**
 * MISC:IS_SCARLETT_VERSION
 *
 * 0x6823557BDD18031C

 * 
 * Xbox Series (Scarlett) version...
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isScarlettVersion(): boolean {
	const isScarlettVersion_result = Citizen.invokeNative<boolean>('0x6823557BDD18031C', );
	return isScarlettVersion_result;
}