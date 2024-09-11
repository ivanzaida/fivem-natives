import { EEWidescreenFormat } from '@ivanzaida/structures'

/**
 * HUD:SET_WIDESCREEN_FORMAT
 *
 * 0xD46356460DA60CB1

 * 
 * ------------------------------------------------------------------
 * @param {EEWidescreenFormat} widescreenSetting
 */
export function setWidescreenFormat(widescreenSetting: EEWidescreenFormat | number): void {
	const setWidescreenFormat_result = Citizen.invokeNative<void>('0xD46356460DA60CB1', widescreenSetting);
	return setWidescreenFormat_result;
}