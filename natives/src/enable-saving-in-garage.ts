/**
 * OBJECT:ENABLE_SAVING_IN_GARAGE
 *
 * 0xBA7A8F956317AC96

 * 
 * ------------------------------------------------------------------
 * @param {number} garageHash
 * @param {boolean} enable
 */
export function enableSavingInGarage(garageHash: number, enable: boolean): void {
	const enableSavingInGarage_result = Citizen.invokeNative<void>('0xBA7A8F956317AC96', garageHash, enable);
	return enableSavingInGarage_result;
}