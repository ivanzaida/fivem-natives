/**
 * AUDIO:SET_VEHICLE_CONVERSATIONS_PERSIST_NEW
 *
 * 0xD61294E5AA976DE5

 * 
 * ------------------------------------------------------------------
 * @param {boolean} allowUpsideDown
 * @param {boolean} allowOnFire
 * @param {boolean} allowDrowning
 */
export function setVehicleConversationsPersistNew(allowUpsideDown: boolean, allowOnFire: boolean, allowDrowning: boolean): void {
	const setVehicleConversationsPersistNew_result = Citizen.invokeNative<void>('0xD61294E5AA976DE5', allowUpsideDown, allowOnFire, allowDrowning);
	return setVehicleConversationsPersistNew_result;
}