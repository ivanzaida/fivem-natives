import { EStorePurchaseLocation } from '@ivanzaida/structures'

/**
 * NETWORK:OPEN_COMMERCE_STORE
 *
 * 0xD1A4BF0F54E08B34

 * 
 * Open the actual commerce store
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} szProductID
 * @param {string} szCategory
 * @param {EStorePurchaseLocation} location
 */
export function openCommerceStore(szProductID: string, szCategory: string, location: EStorePurchaseLocation | number = 0): void {
	const openCommerceStore_result = Citizen.invokeNative<void>('0xD1A4BF0F54E08B34', szProductID, szCategory, location);
	return openCommerceStore_result;
}