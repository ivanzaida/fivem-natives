/**
 * VEHICLE:SET_GARBAGE_TRUCKS
 *
 * 0x474491073FE815A8

 * 
 * ------------------------------------------------------------------
 * @param {boolean} flag
 */
export function setGarbageTrucks(flag: boolean): void {
	const setGarbageTrucks_result = Citizen.invokeNative<void>('0x474491073FE815A8', flag);
	return setGarbageTrucks_result;
}