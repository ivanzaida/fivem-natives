/**
 * HUD:BEGIN_TEXT_COMMAND_BUSYSPINNER_ON
 *
 * 0xB661D6EC3F065818

 * Begins the text command for the busy spinner.
 * End with END_TEXT_COMMAND_BUSYSPINNER_ON.
 * Initializes the text entry for the the text next to a loading prompt. All natives for building UI texts can be used here
 * e.g
 * void StartLoadingMessage(char text, int spinnerType = 3)
 *   {
 *      BEGIN_TEXT_COMMAND_BUSYSPINNER_ON("STRING");
 *        ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 *        END_TEXT_COMMAND_BUSYSPINNER_ON(spinnerType);
 *     }
 * /OR/
 *  void ShowLoadingMessage(char text, int spinnerType = 3, int timeMs = 10000)
 *   {
 *      BEGIN_TEXT_COMMAND_BUSYSPINNER_ON("STRING");
 *        ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 *        END_TEXT_COMMAND_BUSYSPINNER_ON(spinnerType);
 *         WAIT(timeMs);
 *      BUSYSPINNER_OFF();
 *  }
 * These are some localized strings used in the loading spinner.
 * "PM_WAIT"                   = Please Wait
 * "CELEB_WPLYRS"              = Waiting For Players.
 * "CELL_SPINNER2"             = Scanning storage.
 * "ERROR_CHECKYACHTNAME" = Registering your yacht's name. Please wait.
 * "ERROR_CHECKPROFANITY"   = Checking your text for profanity. Please wait.
 * "FM_COR_AUTOD"                        = Just spinner no text
 * "FM_IHELP_WAT2"                        = Waiting for other players
 * "FM_JIP_WAITO"                            = Game options are being set
 * "FMMC_DOWNLOAD"                    = Downloading
 * "FMMC_PLYLOAD"                         = Loading
 * "FMMC_STARTTRAN"                    = Launching session
 * "HUD_QUITTING"                           =  Quiting session
 * "KILL_STRIP_IDM"                         = Waiting for to accept
 * "MP_SPINLOADING"                      = Loading
 * 
 * ------------------------------------------------------------------
 * @param {string} mainTextLabel
 */
export function beginTextCommandBusyspinnerOn(mainTextLabel: string): void {
	const beginTextCommandBusyspinnerOn_result = Citizen.invokeNative<void>('0xB661D6EC3F065818', mainTextLabel);
	return beginTextCommandBusyspinnerOn_result;
}