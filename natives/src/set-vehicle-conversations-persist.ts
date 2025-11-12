/**
 * AUDIO:SET_VEHICLE_CONVERSATIONS_PERSIST
 *
 * 0x443E60546660D332

 * 
 * SET_VEHICLE_CONVERSATIONS_PERSIST?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} allowUpsideDown
 * @param {boolean} allowOnFire
 */
export function setVehicleConversationsPersist(allowUpsideDown: boolean, allowOnFire: boolean): void {
	const setVehicleConversationsPersist_result = Citizen.invokeNative<void>('0x443E60546660D332', allowUpsideDown, allowOnFire);
	return setVehicleConversationsPersist_result;
}