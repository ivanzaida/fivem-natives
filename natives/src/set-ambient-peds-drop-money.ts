/**
 * PED:SET_AMBIENT_PEDS_DROP_MONEY
 *
 * 0xB715358D51663C7A

 * 
 * ------------------------------------------------------------------
 * @param {boolean} pedsDropMoney
 */
export function setAmbientPedsDropMoney(pedsDropMoney: boolean): void {
	const setAmbientPedsDropMoney_result = Citizen.invokeNative<void>('0xB715358D51663C7A', pedsDropMoney);
	return setAmbientPedsDropMoney_result;
}