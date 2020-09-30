/**
 * 既然可以快速地把某个接口中定义的属性全部声明为可选，那能不能把所有的可选的属性变成必选的呢？
 * 答案是可以的，针对这个需求，我们可以使用 Required<T> 工具类型，具体的使用方式如下：
 */
interface PullDownRefreshConfig {
    threshold: number;
    stop: number;
}
//变成可选
type PullDownRefreshOptionsLi = Partial<PullDownRefreshConfig>

/**
 * type PullDownRefresh = {
 *   threshold: number;
 *   stop: number;
 * }
 */
// 变成不可选
type PullDownRefresh = Required<Partial<PullDownRefreshConfig>>;

async function makeRequest(url: string, log?: (msg: string) => void) {
    log?.(`Request started at ${new Date().toISOString()}`);
    // roughly equivalent to
    //   if (log != null) {
    //       log(`Request started at ${new Date().toISOString()}`);
    //   }

    const result = (await fetch(url)).json();

    log?.(`Request finished at at ${new Date().toISOString()}`);

    return result;
}
