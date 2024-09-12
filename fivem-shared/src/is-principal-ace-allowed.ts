/**
 * CFX:IS_PRINCIPAL_ACE_ALLOWED
 *
 * 0X37CF52CE

 * 
 * ------------------------------------------------------------------
 * @param {string} principal
 * @param {string} object
 * @returns {boolean}  
 */
export function isPrincipalAceAllowed(principal: string, object: string): boolean {
	const isPrincipalAceAllowed_result = Citizen.invokeNative<boolean>('0X37CF52CE', principal, object);
	return isPrincipalAceAllowed_result;
}