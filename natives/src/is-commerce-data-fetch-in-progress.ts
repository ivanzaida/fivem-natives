/**
 * NETWORK:IS_COMMERCE_DATA_FETCH_IN_PROGRESS
 *
 * 0x9184B1F53F02EB67

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isCommerceDataFetchInProgress(): boolean {
	const isCommerceDataFetchInProgress_result = Citizen.invokeNative<boolean>('0x9184B1F53F02EB67', );
	return isCommerceDataFetchInProgress_result;
}