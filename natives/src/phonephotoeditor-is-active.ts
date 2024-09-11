/**
 * GRAPHICS:PHONEPHOTOEDITOR_IS_ACTIVE
 *
 * 0xB18CDB475D274A8E

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function phonephotoeditorIsActive(): boolean {
	const phonephotoeditorIsActive_result = Citizen.invokeNative<boolean>('0xB18CDB475D274A8E', );
	return phonephotoeditorIsActive_result;
}