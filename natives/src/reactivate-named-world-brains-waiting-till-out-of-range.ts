/**
 * BRAIN:REACTIVATE_NAMED_WORLD_BRAINS_WAITING_TILL_OUT_OF_RANGE
 *
 * 0x8C0CA18CAAE89A2D

 * Possible values:
 * act_cinema
 * am_mp_carwash_launch
 * am_mp_carwash_control
 * am_mp_property_ext
 * chop
 * fairgroundHub
 * launcher_BasejumpHeli
 * launcher_BasejumpPack
 * launcher_CarWash
 * launcher_golf
 * launcher_Hunting_Ambient
 * launcher_MrsPhilips
 * launcher_OffroadRacing
 * launcher_pilotschool
 * launcher_Racing
 * launcher_rampage
 * launcher_rampage
 * launcher_range
 * launcher_stunts
 * launcher_stunts
 * launcher_tennis
 * launcher_Tonya
 * launcher_Triathlon
 * launcher_Yoga
 * ob_mp_bed_low
 * ob_mp_bed_med
 * 
 * ------------------------------------------------------------------
 * @param {string} scriptName
 */
export function reactivateNamedWorldBrainsWaitingTillOutOfRange(scriptName: string): void {
	const reactivateNamedWorldBrainsWaitingTillOutOfRange_result = Citizen.invokeNative<void>('0x8C0CA18CAAE89A2D', scriptName);
	return reactivateNamedWorldBrainsWaitingTillOutOfRange_result;
}