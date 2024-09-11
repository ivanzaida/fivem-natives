import { Heist3Drone } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_HEIST3_DRONE
 *
 * 0xF13CC26EA89AA7F8

 * 
 * ------------------------------------------------------------------
 * @param {Heist3Drone} data [Ref]
 */
export function playstatsHeist3Drone(data: Heist3Drone /* ptr */): void {
	const playstatsHeist3Drone_result = Citizen.invokeNative<void>('0xF13CC26EA89AA7F8', data.dataView);
	return playstatsHeist3Drone_result;
}