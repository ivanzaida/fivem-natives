/**
 * STATS:PLAYSTATS_SHOP_ITEM
 *
 * 0xE72DE3350869DA0C

 * 
 * ------------------------------------------------------------------
 * @param {number} itemHash
 * @param {number} cashSpent
 * @param {number} shopNameHash
 * @param {number} extraItemHash Additional item type for weapon/vehicle/other hashes.
 * @param {number} colorHash
 */
export function playstatsShopItem(itemHash: number, cashSpent: number, shopNameHash: number, extraItemHash: number = 0, colorHash: number = 0): void {
	const playstatsShopItem_result = Citizen.invokeNative<void>('0xE72DE3350869DA0C', itemHash, cashSpent, shopNameHash, extraItemHash, colorHash);
	return playstatsShopItem_result;
}