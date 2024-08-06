import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { useNavigatorLanguage } from '@vueuse/core'

const { language } = useNavigatorLanguage()

export const i18n = createI18n({
    locale: language.value?.split('-')[0] || import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    allowComposition: true,
    messages,
})
export default i18n.global
