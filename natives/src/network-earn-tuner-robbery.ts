/**
 * MONEY:NETWORK_EARN_TUNER_ROBBERY
 *
 * 0xAF64B7223D9E0FEB

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} finale
 * @param {number} finaleContentID
 * @param {number} prep
 * @param {number} prepName
 */
export function networkEarnTunerRobbery(amount: number, finale: number, finaleContentID: number, prep: number, prepName: number): void {
	const networkEarnTunerRobbery_result = Citizen.invokeNative<void>('0xAF64B7223D9E0FEB', amount, finale, finaleContentID, prep, prepName);
	return networkEarnTunerRobbery_result;
}