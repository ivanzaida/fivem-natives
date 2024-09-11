import { PiMenuHideSettings } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_PIMENU_HIDE_OPTIONS
 *
 * 0x608D1A3E3DEAEBAF

 * 
 * ------------------------------------------------------------------
 * @param {PiMenuHideSettings} data [Ref]
 */
export function playstatsPimenuHideOptions(data: PiMenuHideSettings /* ptr */): void {
	const playstatsPimenuHideOptions_result = Citizen.invokeNative<void>('0x608D1A3E3DEAEBAF', data.dataView);
	return playstatsPimenuHideOptions_result;
}