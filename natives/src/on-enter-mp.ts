/**
 * DLC:ON_ENTER_MP
 *
 * 0x81F7C34FD4E856D5

 * 
 * Tells code that script has made an irreversable transition to MP
 * 
 * This loads the GTA:O dlc map parts (high end garages, apartments).
 * Works in singleplayer.
 * In order to use GTA:O heist IPL's you have to call this native with the following params: SET_INSTANCE_PRIORITY_MODE(1);
 * 
 * 
 * ------------------------------------------------------------------
 */
export function onEnterMp(): void {
	const onEnterMp_result = Citizen.invokeNative<void>('0x81F7C34FD4E856D5', );
	return onEnterMp_result;
}