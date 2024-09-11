/**
 * MISC:IS_PC_VERSION
 *
 * 0x761778199FE1211C

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isPcVersion(): boolean {
	const isPcVersion_result = Citizen.invokeNative<boolean>('0x761778199FE1211C', );
	return isPcVersion_result;
}