/**
 * CFX:IS_ACE_ALLOWED
 *
 * 0x7EBB9929

 * 
 * ------------------------------------------------------------------
 * @param {string} object
 * @returns {boolean}  
 */
export function isAceAllowed(object: string): boolean {
	const isAceAllowed_result = Citizen.invokeNative<boolean>('0x7EBB9929', object);
	return isAceAllowed_result;
}