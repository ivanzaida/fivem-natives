import { EShotType } from '@ivanzaida/structures'

/**
 * CAM:STOP_CINEMATIC_SHOT
 *
 * 0x20A207437491322B

 * 
 * Only used once in carsteal3 with p0 set to -1096069633 (CAMERA_MAN_SHOT)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EShotType} shot
 */
export function stopCinematicShot(shot: EShotType | number): void {
	const stopCinematicShot_result = Citizen.invokeNative<void>('0x20A207437491322B', shot);
	return stopCinematicShot_result;
}