/**
 * OBJECT:SET_ONLY_ALLOW_AMMO_COLLECTION_WHEN_LOW
 *
 * 0x8BD66D017AB5A655

 * 
 * ------------------------------------------------------------------
 * @param {boolean} set
 */
export function setOnlyAllowAmmoCollectionWhenLow(set: boolean): void {
	const setOnlyAllowAmmoCollectionWhenLow_result = Citizen.invokeNative<void>('0x8BD66D017AB5A655', set);
	return setOnlyAllowAmmoCollectionWhenLow_result;
}