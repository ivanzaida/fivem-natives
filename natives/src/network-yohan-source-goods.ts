/**
 * MONEY:NETWORK_YOHAN_SOURCE_GOODS
 *
 * 0x1D83165BDA8DF7FC

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} nightclub
 * @param {number} qty
 * @param {number} missionCompleted
 */
export function networkYohanSourceGoods(amount: number, nightclub: number, qty: number, missionCompleted: number): void {
	const networkYohanSourceGoods_result = Citizen.invokeNative<void>('0x1D83165BDA8DF7FC', amount, nightclub, qty, missionCompleted);
	return networkYohanSourceGoods_result;
}