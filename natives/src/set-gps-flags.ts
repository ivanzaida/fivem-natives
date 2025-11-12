import { EGpsFlags } from '@ivanzaida/structures'

/**
 * HUD:SET_GPS_FLAGS
 *
 * 0xF3603E8FF037B294

 * 
 * Only the script that originally called SET_GPS_FLAGS can set them again. Another script cannot set the flags, until the first script that called it has called CLEAR_GPS_FLAGS.
 * 
 * Doesn't seem like the flags are actually read by the game at all.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EGpsFlags} flags
 * @param {number} blippedRouteDisplayDistance
 */
export function setGpsFlags(flags: EGpsFlags | number, blippedRouteDisplayDistance: number = 0): void {
	const setGpsFlags_result = Citizen.invokeNative<void>('0xF3603E8FF037B294', flags, blippedRouteDisplayDistance);
	return setGpsFlags_result;
}