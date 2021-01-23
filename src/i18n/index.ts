import { useI18n, createI18n } from 'vue-i18n'
import zhCN from './zh-CN'
import en from './en'

type ILang = typeof zhCN

type ILangValue<T extends string, O> =
    T extends `${infer A}.${infer B}` ?  // 判断 T 是否格式一致，推断出 A、B 变量
    A extends keyof O ? ILangValue<B, O[A]> : 'WARNING! FIELD WAS NOT FOUND' // 判断 A 是否是 O 下的 key，是则递归调用，否则 warning
    : T extends keyof O ? O[T] : 'WARNING! FIELD WAS NOT FOUND'

type PREVIEW<K extends string> = {
    // An index signature parameter type must be either 'string' or 'number'.ts(1023)
    // @ts-ignore
    [key: K]: K
}

export function useT<P extends string>(path: P): PREVIEW<ILangValue<P, ILang>> {
    const { t } = useI18n()
    return t(path)
}

const i18n = createI18n({
    locale: 'zh-CN',
    messages: {
        'zh-CN': zhCN,
        'en': en
    }
})

export default i18n
