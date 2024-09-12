/**
 * OBJECT:CLEAR_GARAGE
 *
 * 0xC2A1BF59954282E5

 * 
 * ------------------------------------------------------------------
 * @param {number} garageHash
 * @param {boolean} broadcast
 */
export function clearGarage(garageHash: number, broadcast: boolean = false): void {
	const clearGarage_result = Citizen.invokeNative<void>('0xC2A1BF59954282E5', garageHash, broadcast);
	return clearGarage_result;
}