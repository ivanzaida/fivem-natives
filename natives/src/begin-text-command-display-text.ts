/**
 * HUD:BEGIN_TEXT_COMMAND_DISPLAY_TEXT
 *
 * 0xEAEB6E7D3FAEBD5B

 * The following were found in the decompiled script files:
 * STRING, TWOSTRINGS, NUMBER, PERCENTAGE, FO_TWO_NUM, ESMINDOLLA, ESDOLLA, MTPHPER_XPNO, AHD_DIST, CMOD_STAT_0, CMOD_STAT_1, CMOD_STAT_2, CMOD_STAT_3, DFLT_MNU_OPT, F3A_TRAFDEST, ES_HELP_SOC3
 * ESDOLLA - cash
 * ESMINDOLLA - cash (negative)
 * Used to be known as _SET_TEXT_ENTRY
 * 
 * ------------------------------------------------------------------
 * @param {string} mainTextLabel
 */
export function beginTextCommandDisplayText(mainTextLabel: string): void {
	const beginTextCommandDisplayText_result = Citizen.invokeNative<void>('0xEAEB6E7D3FAEBD5B', mainTextLabel);
	return beginTextCommandDisplayText_result;
}