/**
 * MONEY:NETWORK_CLEAR_CHARACTER_WALLET
 *
 * 0x8DAD1FB87B248966

 * 
 * Only call this during a creation of a new character
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} character
 */
export function networkClearCharacterWallet(character: number): void {
	const networkClearCharacterWallet_result = Citizen.invokeNative<void>('0x8DAD1FB87B248966', character);
	return networkClearCharacterWallet_result;
}