/**
 * MONEY:NETWORK_SPEND_CASINO_HEIST
 *
 * 0x217CC1BF55D59C44

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} replay
 * @param {number} replayAmount
 * @param {number} model
 * @param {number} modelAmount
 * @param {number} vaultDoor
 * @param {number} vaultDoorAmount
 * @param {number} locks
 * @param {number} locksAmount
 */
export function networkSpendCasinoHeist(amount: number, fromBank: boolean, fromBankAndWallet: boolean, replay: number, replayAmount: number, model: number, modelAmount: number, vaultDoor: number, vaultDoorAmount: number, locks: number, locksAmount: number): void {
	const networkSpendCasinoHeist_result = Citizen.invokeNative<void>('0x217CC1BF55D59C44', amount, fromBank, fromBankAndWallet, replay, replayAmount, model, modelAmount, vaultDoor, vaultDoorAmount, locks, locksAmount);
	return networkSpendCasinoHeist_result;
}