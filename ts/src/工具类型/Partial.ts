/**
 * 为了提高代码的复用率，可以利用TS内置的类型工具 Partial 
 * Partial<T>可以快速将某个接口的类型定义的属性变成可选的
 */
interface PullDownRefreshConfig {
    threshold: number;
    stop: number;
}

/**
 * type PullDownRefreshOptions = {
 *   threshold?: number | undefined;
 *   stop?: number | undefined;
 * }
 */
type PullDownRefreshOptions = Partial<PullDownRefreshConfig>
