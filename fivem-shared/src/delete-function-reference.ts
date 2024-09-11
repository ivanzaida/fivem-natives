/**
 * CFX:DELETE_FUNCTION_REFERENCE
 *
 * 0X1E86F206

 * 
 * ------------------------------------------------------------------
 * @param {string} referenceIdentity
 */
export function deleteFunctionReference(referenceIdentity: string): void {
	const deleteFunctionReference_result = Citizen.invokeNative<void>('0X1E86F206', referenceIdentity);
	return deleteFunctionReference_result;
}