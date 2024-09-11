/**
 * NETWORK:NETWORK_SEED_RANDOM_NUMBER_GENERATOR
 *
 * 0xC37AA2604D0B69E8

 * 
 * ------------------------------------------------------------------
 * @param {number} seed
 */
export function networkSeedRandomNumberGenerator(seed: number): void {
	const networkSeedRandomNumberGenerator_result = Citizen.invokeNative<void>('0xC37AA2604D0B69E8', seed);
	return networkSeedRandomNumberGenerator_result;
}