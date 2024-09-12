/**
 * MONEY:_NETWORK_SPEND_RENAME_ACID_PRODUCT
 *
 * 0x14DF63D0BB614642

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 * @param {unknown} p1
 * @param {unknown} p2
 * @param {unknown} p3
 */
export function networkSpendRenameAcidProduct(p0: unknown, p1: unknown, p2: unknown, p3: unknown): void {
	const networkSpendRenameAcidProduct_result = Citizen.invokeNative<void>('0x14DF63D0BB614642', p0, p1, p2, p3);
	return networkSpendRenameAcidProduct_result;
}