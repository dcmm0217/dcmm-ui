import type { Plugin } from "vue";
declare type SFCWithInstall<T> = T & Plugin;
export declare const Button: SFCWithInstall<import("vue").DefineComponent<unknown, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    [x: string]: any;
}> & {
    [x: string & `on${string}`]: any;
}, {}>>;
export default Button;
