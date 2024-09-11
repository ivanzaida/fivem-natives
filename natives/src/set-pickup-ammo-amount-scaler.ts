/**
 * WEAPON:SET_PICKUP_AMMO_AMOUNT_SCALER
 *
 * 0x5FD6A23EC3A0882D

 * 
 * ------------------------------------------------------------------
 * @param {number} scale
 */
export function setPickupAmmoAmountScaler(scale: number): void {
	const setPickupAmmoAmountScaler_result = Citizen.invokeNative<void>('0x5FD6A23EC3A0882D', scale);
	return setPickupAmmoAmountScaler_result;
}