/**
 * NETWORK:IS_COMMERCE_DATA_VALID
 *
 * 0xD3B5B2F30382DFA8

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isCommerceDataValid(): boolean {
	const isCommerceDataValid_result = Citizen.invokeNative<boolean>('0xD3B5B2F30382DFA8', );
	return isCommerceDataValid_result;
}