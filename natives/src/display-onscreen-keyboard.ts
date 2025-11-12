import { EEKeyboardType } from '@ivanzaida/structures'

/**
 * MISC:DISPLAY_ONSCREEN_KEYBOARD
 *
 * 0xCFF30C6181F9B8BC

 * 
 * Displays the system keyboard
 * 
 * sfink: note, p0 is set to 6 for PC platform in at least 1 script, or to `unk::_get_ui_language_id() == 0` otherwise.
 * 
 * NOTE: windowTitle uses text labels, and an invalid value will display nothing.
 * 
 * www.gtaforums.com/topic/788343-vrel-script-hook-v/?p=1067380474
 * 
 * windowTitle's
 * -----------------
 * CELL_EMAIL_BOD  =   "Enter your Eyefind message"
 * CELL_EMAIL_BODE =   "Message too long. Try again"
 * CELL_EMAIL_BODF    =   "Forbidden message. Try again"
 * CELL_EMAIL_SOD    =   "Enter your Eyefind subject"
 * CELL_EMAIL_SODE =   "Subject too long. Try again"
 * CELL_EMAIL_SODF    =   "Forbidden text. Try again"
 * CELL_EMASH_BOD   =   "Enter your Eyefind message"
 * CELL_EMASH_BODE =   "Message too long. Try again"
 * CELL_EMASH_BODF    =   "Forbidden message. Try again"
 * CELL_EMASH_SOD    =   "Enter your Eyefind subject"
 * CELL_EMASH_SODE =   "Subject too long. Try again"
 * CELL_EMASH_SODF    =   "Forbidden Text. Try again"
 * FMMC_KEY_TIP10   =   "Enter Synopsis"
 * FMMC_KEY_TIP12  =   "Enter Custom Team Name"
 * FMMC_KEY_TIP12F =   "Forbidden Text. Try again"
 * FMMC_KEY_TIP12N  =   "Custom Team Name"
 * FMMC_KEY_TIP8 =   "Enter Message"
 * FMMC_KEY_TIP8F   =   "Forbidden Text. Try again"
 * FMMC_KEY_TIP8FS  =   "Invalid Message. Try again"
 * FMMC_KEY_TIP8S  =   "Enter Message"
 * FMMC_KEY_TIP9    =   "Enter Outfit Name"
 * FMMC_KEY_TIP9F   =   "Invalid Outfit Name. Try again"
 * FMMC_KEY_TIP9N  =   "Outfit Name"
 * PM_NAME_CHALL  =   "Enter Challenge Name"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEKeyboardType} keyboardTypeFlag
 * @param {string} prompt
 * @param {string} description
 * @param {string} initialValue1
 * @param {string} initialValue2
 * @param {string} initialValue3
 * @param {string} initialValue4
 * @param {number} maxLength
 */
export function displayOnscreenKeyboard(keyboardTypeFlag: EEKeyboardType | number, prompt: string, description: string, initialValue1: string, initialValue2: string, initialValue3: string, initialValue4: string, maxLength: number): void {
	const displayOnscreenKeyboard_result = Citizen.invokeNative<void>('0xCFF30C6181F9B8BC', keyboardTypeFlag, prompt, description, initialValue1, initialValue2, initialValue3, initialValue4, maxLength);
	return displayOnscreenKeyboard_result;
}