/**
 * CFX:DUPLICATE_FUNCTION_REFERENCE
 *
 * 0XF4E2079D

 * 
 * ------------------------------------------------------------------
 * @param {string} referenceIdentity
 * @returns {string}  
 */
export function duplicateFunctionReference(referenceIdentity: string): string {
	const duplicateFunctionReference_result = Citizen.invokeNative<string>('0XF4E2079D', referenceIdentity);
	return duplicateFunctionReference_result;
}